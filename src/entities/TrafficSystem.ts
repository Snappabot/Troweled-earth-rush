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
      }, undefined, () => { if (--remaining === 0) this._spawn(); });
    }
  }

  private _clone(vtype: VehicleType): THREE.Group {
    const tmpl = this.templates.get(vtype.slug);
    if (!tmpl) return new THREE.Group();
    const g = tmpl.clone(true);
    g.scale.setScalar(vtype.scale);
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
      group.rotation.y = axis === 'x'
        ? (dir === 1 ? -Math.PI / 2 : Math.PI / 2)
        : (dir === 1 ? 0 : Math.PI);

      const car: TrafficCar = { group, axis, roadPos, laneOffset, baseSpeed, currentSpeed: baseSpeed, dir, pos, nudgeVel: 0, hw: vtype.hw, hd: vtype.hd };
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

  resolveVan(vanX: number, vanZ: number, vanRadius = 1.8): { x: number; z: number; hit: boolean } {
    let rx = vanX, rz = vanZ; let hit = false;
    for (let pass = 0; pass < 3; pass++) {
      for (const car of this.cars) {
        const cx = car.group.position.x, cz = car.group.position.z;
        const hw = (car.axis === 'x' ? car.hd : car.hw) + vanRadius;
        const hd = (car.axis === 'x' ? car.hw : car.hd) + vanRadius;
        const dx = rx - cx, dz = rz - cz;
        if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
          const ox = hw - Math.abs(dx), oz = hd - Math.abs(dz); const E = 6;
          if (ox < oz) { const ps = dx<0?-1:1; rx+=ps*ox; if(car.axis==='x') car.pos-=ps*(ox+E); else car.pos+=car.dir*(oz+E); }
          else         { const ps = dz<0?-1:1; rz+=ps*oz; if(car.axis==='z') car.pos-=ps*(oz+E); else car.pos+=car.dir*(ox+E); }
          car.currentSpeed = car.baseSpeed; car.nudgeVel = 0; hit = true;
        }
      }
    }
    return { x: rx, z: rz, hit };
  }

  /** @deprecated */
  checkVanCollision(vx: number, vz: number) { const r=this.resolveVan(vx,vz); return {hit:r.hit,pushX:r.x-vx,pushZ:r.z-vz}; }
}
