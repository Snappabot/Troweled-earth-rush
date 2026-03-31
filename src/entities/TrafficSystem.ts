import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const BRAKE_DISTANCE = 14;
const STOP_DISTANCE  = 8;
const RESUME_RATE    = 6;

const VEHICLE_TYPES = [
  { slug: 'sedan',        hw: 1.15, hd: 2.15, scale: 0.82 },
  { slug: 'hatchback',    hw: 1.15, hd: 2.10, scale: 0.82 },
  { slug: 'suv',          hw: 1.15, hd: 2.10, scale: 0.80 },
  { slug: 'pickup',       hw: 1.15, hd: 2.10, scale: 0.80 },
  { slug: 'muscle',       hw: 1.15, hd: 2.50, scale: 0.78 },
  { slug: 'sports',       hw: 1.10, hd: 2.35, scale: 0.80 },
  { slug: 'taxi',         hw: 1.15, hd: 2.15, scale: 0.82 },
  { slug: 'police_sedan', hw: 1.15, hd: 2.15, scale: 0.82 },
  { slug: 'police_suv',   hw: 1.15, hd: 2.10, scale: 0.80 },
  { slug: 'ambulance',    hw: 1.15, hd: 2.45, scale: 0.78 },
] as const;

type VehicleType = typeof VEHICLE_TYPES[number];

const GENERIC_SLUGS = ['sedan','hatchback','suv','pickup','muscle','sports'];
const SPECIAL_SLUGS = ['taxi','police_sedan','police_suv','ambulance'];

interface TrafficCar {
  group: THREE.Group;
  axis: 'x' | 'z';
  roadPos: number;
  laneOffset: number;
  baseSpeed: number;
  currentSpeed: number;
  dir: 1 | -1;
  pos: number;
  nudgeVel: number;
  hw: number;
  hd: number;
  // ── Crash state ──────────────────────────────────────────────────────────
  crashed: boolean;
  crashTimer: number;     // seconds remaining in crash state
  crashSpinVel: number;   // rad/s — spins out on impact
  flashTimer: number;     // seconds of orange emissive flash remaining
  baseRotY: number;       // correct heading to restore after spin-out
}

export class TrafficSystem {
  private cars: TrafficCar[] = [];
  private scene: THREE.Scene;
  private templates = new Map<string, THREE.Group>();
  private warmup = 4.0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this._loadAndSpawn();
  }

  private _loadAndSpawn(): void {
    const base = (import.meta as any).env.BASE_URL as string;
    const loader = new GLTFLoader();
    let remaining = VEHICLE_TYPES.length;

    for (const vtype of VEHICLE_TYPES) {
      loader.load(`${base}assets/traffic/${vtype.slug}.glb`, (gltf) => {
        const tmpl = gltf.scene;
        tmpl.scale.setScalar(vtype.scale);

        // Safety: auto-correct if model loaded flat (shouldn't happen with v3 export)
        tmpl.updateMatrixWorld(true);
        const box = new THREE.Box3().setFromObject(tmpl);
        const size = box.getSize(new THREE.Vector3());
        if (size.y < 0.3) {
          tmpl.rotation.x = -Math.PI / 2;
          tmpl.updateMatrixWorld(true);
          const b2 = new THREE.Box3().setFromObject(tmpl);
          tmpl.position.y = -b2.min.y;
        }

        tmpl.traverse((child) => {
          if (child instanceof THREE.Mesh) { child.castShadow = true; child.receiveShadow = true; }
        });
        this.templates.set(vtype.slug, tmpl);
        if (--remaining === 0) this._spawn();
      }, undefined, (err) => { console.warn(`[TrafficSystem] Failed to load ${vtype.slug}.glb`, err); if (--remaining === 0) this._spawn(); });
    }
  }

  private _clone(vtype: VehicleType): THREE.Group {
    const tmpl = this.templates.get(vtype.slug);
    if (!tmpl) return new THREE.Group();
    const g = tmpl.clone(true);
    g.scale.setScalar(vtype.scale);
    // Clone materials so emissive changes don't bleed across cars
    g.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (Array.isArray(child.material)) {
          child.material = child.material.map((m: THREE.Material) => m.clone());
        } else if (child.material) {
          child.material = child.material.clone();
        }
      }
    });
    return g;
  }

  private _spawn(): void {
    const roadLines = [-200,-160,-120,-80,-40,0,40,80,120,160,200];
    const generic = VEHICLE_TYPES.filter(v => GENERIC_SLUGS.includes(v.slug));
    const special  = VEHICLE_TYPES.filter(v => SPECIAL_SLUGS.includes(v.slug));

    const spawnCar = (axis: 'x' | 'z') => {
      const isSpecial = Math.random() < 0.15;
      const pool  = isSpecial ? special : generic;
      const vtype = pool[Math.floor(Math.random() * pool.length)];
      const group = this._clone(vtype);

      const roadPos    = roadLines[Math.floor(Math.random() * roadLines.length)];
      const laneOffset = Math.random() > 0.5 ? 2.5 : -2.5;
      const baseSpeed  = 10 + Math.random() * 12;
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      let pos = -200 + Math.random() * 400;
      if (Math.abs(pos) < 50) pos = pos < 0 ? -65 : 65;

      // car front = +Z in Three.js (axis_forward='-Z' export)
      // dir=1 (+Z travel) → face +Z → rotation 0
      // dir=-1 (-Z travel) → face -Z → rotation PI
      const baseRotY = axis === 'x'
        ? (dir === 1 ? -Math.PI / 2 : Math.PI / 2)
        : (dir === 1 ? 0 : Math.PI);
      group.rotation.y = baseRotY;

      const car: TrafficCar = {
        group, axis, roadPos, laneOffset, baseSpeed, currentSpeed: baseSpeed, dir, pos, nudgeVel: 0, hw: vtype.hw, hd: vtype.hd,
        crashed: false, crashTimer: 0, crashSpinVel: 0, flashTimer: 0, baseRotY,
      };
      this.cars.push(car);
      this.scene.add(group);
      this._applyPosition(car);
    };

    for (let i = 0; i < 14; i++) spawnCar('z');
    for (let i = 0; i < 14; i++) spawnCar('x');
  }

  private _applyPosition(car: TrafficCar): void {
    if (car.axis === 'x') car.group.position.set(car.pos, 0, car.roadPos + car.laneOffset);
    else                  car.group.position.set(car.roadPos + car.laneOffset, 0, car.pos);
  }

  update(dt: number, vanX: number, vanZ: number, vanSpeed = 0): void {
    if (this.warmup > 0) this.warmup -= dt;
    const vanIsMoving = vanSpeed > 2;

    for (const car of this.cars) {

      // ── Orange flash decay ───────────────────────────────────────────────
      if (car.flashTimer > 0) {
        car.flashTimer -= dt;
        const intensity = Math.max(0, car.flashTimer / 0.4);
        car.group.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const mat = child.material as THREE.MeshStandardMaterial;
            if (mat && 'emissive' in mat) mat.emissiveIntensity = intensity * 1.8;
          }
        });
        if (car.flashTimer <= 0) this._clearCrashFlash(car.group);
      }

      // ── Crash spin-out / recovery ────────────────────────────────────────
      if (car.crashed) {
        car.crashTimer -= dt;
        // Spin while speed and spin-vel remain
        car.group.rotation.y += car.crashSpinVel * dt;
        car.crashSpinVel    *= Math.max(0, 1 - 2.5 * dt);
        car.currentSpeed    *= Math.max(0, 1 - 6.0 * dt); // screech to halt

        if (car.crashTimer <= 0) {
          // Recover — restore heading, ramp speed back up gradually
          car.crashed       = false;
          car.crashSpinVel  = 0;
          car.group.rotation.y = car.baseRotY;
        }

        car.pos += car.dir * car.currentSpeed * dt;
        if (car.pos > 235) car.pos = -235;
        if (car.pos < -235) car.pos = 235;
        this._applyPosition(car);
        continue; // skip normal braking logic while crashed
      }

      // ── Normal braking / speed logic ─────────────────────────────────────
      const carX = car.group.position.x, carZ = car.group.position.z;
      let aheadDist = Infinity, lateralDist = Infinity;
      if (car.axis === 'x') { aheadDist = (vanX - carX) * car.dir; lateralDist = Math.abs(vanZ - carZ); }
      else                  { aheadDist = (vanZ - carZ) * car.dir; lateralDist = Math.abs(vanX - carX); }

      if (this.warmup > 0 || !vanIsMoving) {
        car.currentSpeed = Math.min(car.baseSpeed, car.currentSpeed + RESUME_RATE * dt);
      } else if (lateralDist < 5 && aheadDist > 0 && aheadDist < BRAKE_DISTANCE) {
        car.currentSpeed = car.baseSpeed * Math.max(0, (aheadDist - STOP_DISTANCE) / (BRAKE_DISTANCE - STOP_DISTANCE));
      } else {
        car.currentSpeed = Math.min(car.baseSpeed, car.currentSpeed + RESUME_RATE * dt);
      }

      if (Math.abs(car.nudgeVel) > 0.05) { car.pos += car.nudgeVel * dt; car.nudgeVel *= Math.max(0, 1 - 6 * dt); }
      else car.nudgeVel = 0;

      car.pos += car.dir * car.currentSpeed * dt;
      if (car.pos > 235) car.pos = -235;
      if (car.pos < -235) car.pos = 235;
      this._applyPosition(car);
    }
  }

  /** Set emissive on all meshes in a car group to crash-orange */
  private _triggerCrashFlash(group: THREE.Group): void {
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat && 'emissive' in mat) {
          mat.emissive = new THREE.Color(0xFF5500);
          mat.emissiveIntensity = 1.8;
        }
      }
    });
  }

  /** Reset emissive on all meshes in a car group */
  private _clearCrashFlash(group: THREE.Group): void {
    group.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const mat = child.material as THREE.MeshStandardMaterial;
        if (mat && 'emissive' in mat) {
          mat.emissive = new THREE.Color(0x000000);
          mat.emissiveIntensity = 0;
        }
      }
    });
  }

  resolveVan(vanX: number, vanZ: number, vanRadius = 1.8): { x: number; z: number; hit: boolean; impactX: number; impactZ: number } {
    let rx = vanX, rz = vanZ;
    let hit = false;
    let impactX = 0, impactZ = 0;
    // Track which cars we've already crash-triggered this call (3-pass loop)
    const crashedThisCall = new Set<TrafficCar>();

    for (let pass = 0; pass < 3; pass++) {
      for (const car of this.cars) {
        const cx = car.group.position.x, cz = car.group.position.z;
        const hw = (car.axis === 'x' ? car.hd : car.hw) + vanRadius;
        const hd = (car.axis === 'x' ? car.hw : car.hd) + vanRadius;
        const dx = rx - cx, dz = rz - cz;

        if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
          const ox = hw - Math.abs(dx);
          const oz = hd - Math.abs(dz);
          // Small separation buffer (1 unit) — just enough to prevent next-frame re-entry
          const SEP = 1.0;

          if (ox < oz) {
            const ps = dx < 0 ? -1 : 1;
            rx += ps * ox;
            impactX += ps * ox;
            if (car.axis === 'x') car.pos -= ps * (ox + SEP);
            else                  car.pos += car.dir * (oz + SEP);
          } else {
            const ps = dz < 0 ? -1 : 1;
            rz += ps * oz;
            impactZ += ps * oz;
            if (car.axis === 'z') car.pos -= ps * (oz + SEP);
            else                  car.pos += car.dir * (ox + SEP);
          }

          // ── Trigger crash on first hit this call ────────────────────────
          if (!car.crashed && !crashedThisCall.has(car)) {
            crashedThisCall.add(car);
            car.crashed      = true;
            car.crashTimer   = 1.2 + Math.random() * 1.4;   // 1.2–2.6s crash duration
            // Spin direction based on which side the van hit
            const spinDir    = dx < 0 ? 1 : -1;
            car.crashSpinVel = (3.5 + Math.random() * 4.0) * spinDir;
            car.currentSpeed *= 0.15;   // screech nearly to a stop on impact
            car.flashTimer   = 0.4;     // 0.4s orange flash
            this._triggerCrashFlash(car.group);
          }

          car.nudgeVel = 0;
          hit = true;
        }
      }
    }
    return { x: rx, z: rz, hit, impactX, impactZ };
  }

  /** @deprecated */
  checkVanCollision(vx: number, vz: number) { const r = this.resolveVan(vx, vz); return { hit: r.hit, pushX: r.x - vx, pushZ: r.z - vz }; }
}
