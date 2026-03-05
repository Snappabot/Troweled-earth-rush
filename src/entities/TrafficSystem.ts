import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/** Lookahead distance (units) at which a car starts braking for the van */
const BRAKE_DISTANCE = 14;
/** Distance at which car fully stops */
const STOP_DISTANCE = 8;
/** How quickly cars resume after van clears the path */
const RESUME_RATE = 6;
/** How far cars get nudged when physically hit by the van */
const NUDGE_FORCE = 0.6;

// Vehicle type definitions — slug, collision half-dims, scale
const VEHICLE_TYPES = [
  { slug: 'sedan',        hw: 1.35, hd: 2.55, scale: 0.82 },
  { slug: 'hatchback',    hw: 1.35, hd: 2.50, scale: 0.82 },
  { slug: 'suv',          hw: 1.40, hd: 2.55, scale: 0.80 },
  { slug: 'pickup',       hw: 1.40, hd: 2.55, scale: 0.80 },
  { slug: 'muscle',       hw: 1.35, hd: 2.90, scale: 0.78 },
  { slug: 'sports',       hw: 1.28, hd: 2.70, scale: 0.80 },
  { slug: 'taxi',         hw: 1.35, hd: 2.55, scale: 0.82 },
  { slug: 'police_sedan', hw: 1.35, hd: 2.55, scale: 0.82 },
  { slug: 'police_suv',   hw: 1.40, hd: 2.55, scale: 0.80 },
  { slug: 'ambulance',    hw: 1.40, hd: 2.80, scale: 0.78 },
] as const;

// Body colour palette for generic cars (not police/taxi/ambulance)
const BODY_COLORS = [0xE63946, 0x2196F3, 0xFFB300, 0x4CAF50, 0x9C27B0, 0xFF6B35, 0x00BCD4, 0xF5F5F5];

type VehicleType = typeof VEHICLE_TYPES[number];

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
  hw: number; // half-width of bounding box (along perpendicular axis)
  hd: number; // half-depth of bounding box (along travel axis)
}

export class TrafficSystem {
  private cars: TrafficCar[] = [];
  private scene: THREE.Scene;
  private templates: Map<string, THREE.Group> = new Map();
  private loaded = false;
  private warmup = 4.0; // seconds before braking logic activates

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
        tmpl.rotation.y = 0; // will be set per-car
        // Apply proper materials
        tmpl.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
        });
        this.templates.set(vtype.slug, tmpl);
        remaining--;
        if (remaining === 0) {
          this.loaded = true;
          this._spawn();
        }
      }, undefined, (err) => {
        console.warn(`Traffic GLB failed: ${vtype.slug}`, err);
        remaining--;
        if (remaining === 0) { this.loaded = true; this._spawn(); }
      });
    }
  }

  private _cloneVehicle(vtype: VehicleType, color?: number): THREE.Group {
    const tmpl = this.templates.get(vtype.slug);
    if (!tmpl) {
      // GLB failed — return invisible empty group (no box fallback)
      return new THREE.Group();
    }

    const group = tmpl.clone(true);
    group.scale.setScalar(vtype.scale);

    // Tint body meshes for non-special vehicles
    if (color !== undefined) {
      group.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        const mat = child.material as THREE.Material;
        const name = mat?.name ?? '';
        // Only recolour body parts (not glass/lights/wheels)
        if (!name.includes('glass') && !name.includes('window') &&
            !name.includes('light') && !name.includes('tire') &&
            !name.includes('rim') && !name.includes('interior')) {
          (child.material as THREE.MeshStandardMaterial).color?.setHex(color);
        }
      });
    }
    return group;
  }

  private _spawn(): void {
    const roadLines = [-200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200];
    const genericTypes = VEHICLE_TYPES.filter(v => !v.slug.startsWith('police') && v.slug !== 'ambulance');
    const specialTypes  = VEHICLE_TYPES.filter(v => v.slug.startsWith('police') || v.slug === 'ambulance');

    const spawnCar = (axis: 'x' | 'z', forceType?: VehicleType) => {
      // Pick vehicle type: ~15% chance special, rest generic
      const isSpecial = !forceType && Math.random() < 0.15;
      const typePool  = forceType ? [forceType] : (isSpecial ? specialTypes : genericTypes);
      const vtype     = typePool[Math.floor(Math.random() * typePool.length)];
      const color     = (!isSpecial && !forceType) ? BODY_COLORS[Math.floor(Math.random() * BODY_COLORS.length)] : undefined;

      const group = this._cloneVehicle(vtype, color);
      const roadPos    = roadLines[Math.floor(Math.random() * roadLines.length)];
      const laneOffset = Math.random() > 0.5 ? 2 : -2;
      const baseSpeed  = 10 + Math.random() * 10;
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      // Avoid spawning within 50 units of origin (van start) to prevent instant parking
      let pos = -200 + Math.random() * 400;
      if (Math.abs(pos) < 50) pos = pos < 0 ? -60 : 60;

      group.rotation.y = this._rotationFor(axis, dir);

      const car: TrafficCar = {
        group, axis, roadPos, laneOffset,
        baseSpeed, currentSpeed: baseSpeed,
        dir, pos, nudgeVel: 0,
        hw: vtype.hw, hd: vtype.hd,
      };
      this.cars.push(car);
      this.scene.add(group);
      this._applyPosition(car);
    };

    for (let i = 0; i < 14; i++) spawnCar('z');
    for (let i = 0; i < 14; i++) spawnCar('x');
  }

  private _rotationFor(axis: 'x' | 'z', dir: 1 | -1): number {
    if (axis === 'x') return dir === 1 ? -Math.PI / 2 : Math.PI / 2;
    return dir === 1 ? Math.PI : 0;
  }

  private _applyPosition(car: TrafficCar): void {
    if (car.axis === 'x') {
      car.group.position.set(car.pos, 0, car.roadPos + car.laneOffset);
    } else {
      car.group.position.set(car.roadPos + car.laneOffset, 0, car.pos);
    }
  }

  update(dt: number, vanX: number, vanZ: number): void {
    if (this.warmup > 0) this.warmup -= dt;

    for (const car of this.cars) {
      const carX = car.group.position.x;
      const carZ = car.group.position.z;
      let aheadDist = Infinity, lateralDist = Infinity;

      if (car.axis === 'x') {
        aheadDist   = (vanX - carX) * car.dir;
        lateralDist = Math.abs(vanZ - carZ);
      } else {
        aheadDist   = (vanZ - carZ) * car.dir;
        lateralDist = Math.abs(vanX - carX);
      }

      const vanInLane = lateralDist < 5;
      const vanAhead  = aheadDist > 0 && aheadDist < BRAKE_DISTANCE;

      // During warmup all cars drive at full speed — clears spawn congestion
      if (this.warmup > 0) {
        car.currentSpeed = car.baseSpeed;
      } else if (vanInLane && vanAhead) {
        const t = Math.max(0, (aheadDist - STOP_DISTANCE) / (BRAKE_DISTANCE - STOP_DISTANCE));
        car.currentSpeed = car.baseSpeed * t;
      } else {
        car.currentSpeed = Math.min(car.baseSpeed, car.currentSpeed + RESUME_RATE * dt);
      }

      if (Math.abs(car.nudgeVel) > 0.05) {
        car.pos += car.nudgeVel * dt;
        car.nudgeVel *= Math.max(0, 1 - 6 * dt);
      } else {
        car.nudgeVel = 0;
      }

      car.pos += car.dir * car.currentSpeed * dt;
      if (car.pos > 235) car.pos = -235;
      if (car.pos < -235) car.pos = 235;
      this._applyPosition(car);
    }
  }

  resolveVan(vanX: number, vanZ: number, vanRadius = 1.8): { x: number; z: number; hit: boolean } {
    let rx = vanX, rz = vanZ;
    let hit = false;

    for (let pass = 0; pass < 3; pass++) {
      for (const car of this.cars) {
        const cx = car.group.position.x;
        const cz = car.group.position.z;

        // hw/hd stored per-vehicle; axis determines which is along travel
        const hw = (car.axis === 'x' ? car.hd : car.hw) + vanRadius;
        const hd = (car.axis === 'x' ? car.hw : car.hd) + vanRadius;

        const dx = rx - cx, dz = rz - cz;
        if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
          const overlapX = hw - Math.abs(dx);
          const overlapZ = hd - Math.abs(dz);
          const ESCAPE = 6;
          if (overlapX < overlapZ) {
            const ps = dx < 0 ? -1 : 1;
            rx += ps * overlapX;
            if (car.axis === 'x') car.pos -= ps * (overlapX + ESCAPE);
            else car.pos += car.dir * (overlapZ + ESCAPE);
          } else {
            const ps = dz < 0 ? -1 : 1;
            rz += ps * overlapZ;
            if (car.axis === 'z') car.pos -= ps * (overlapZ + ESCAPE);
            else car.pos += car.dir * (overlapX + ESCAPE);
          }
          car.currentSpeed = car.baseSpeed;
          car.nudgeVel = 0;
          hit = true;
        }
      }
    }
    return { x: rx, z: rz, hit };
  }

  /** @deprecated Use resolveVan */
  checkVanCollision(vanX: number, vanZ: number): { hit: boolean; pushX: number; pushZ: number } {
    const r = this.resolveVan(vanX, vanZ);
    return { hit: r.hit, pushX: r.x - vanX, pushZ: r.z - vanZ };
  }
}
