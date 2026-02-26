import * as THREE from 'three';

const CAR_COLORS = [0xE63946, 0x2196F3, 0xFFB300, 0x4CAF50, 0x9C27B0, 0xFF6B35];

/** Lookahead distance (units) at which a car starts braking for the van */
const BRAKE_DISTANCE = 14;
/** Distance at which car fully stops */
const STOP_DISTANCE = 8;
/** How quickly cars resume after van clears the path */
const RESUME_RATE = 6; // speed units per second
/** How far cars get nudged when physically hit by the van */
const NUDGE_FORCE = 0.6;

interface TrafficCar {
  group: THREE.Group;
  axis: 'x' | 'z';
  roadPos: number;
  laneOffset: number;
  baseSpeed: number;
  currentSpeed: number;
  dir: 1 | -1;
  pos: number;
  /** Brief "knocked" momentum after being hit */
  nudgeVel: number;
}

function createTrafficCar(color: number): THREE.Group {
  const group = new THREE.Group();

  // Body
  const bodyMat = new THREE.MeshLambertMaterial({ color });
  const body = new THREE.Mesh(new THREE.BoxGeometry(3.5, 1.2, 6.5), bodyMat);
  body.position.set(0, 0.6, 0);
  body.castShadow = true;
  group.add(body);

  // Roof / cabin
  const roofMat = new THREE.MeshLambertMaterial({ color });
  const roof = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.9, 3.5), roofMat);
  roof.position.set(0, 1.65, 0);
  roof.castShadow = true;
  group.add(roof);

  // Wheels
  const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
  const wheelPositions: [number, number, number][] = [
    [-1.8, 0.4,  2.2],
    [ 1.8, 0.4,  2.2],
    [-1.8, 0.4, -2.2],
    [ 1.8, 0.4, -2.2],
  ];
  for (const [wx, wy, wz] of wheelPositions) {
    const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.5, 0.4, 8), wheelMat);
    wheel.rotation.z = Math.PI / 2;
    wheel.position.set(wx, wy, wz);
    wheel.castShadow = true;
    group.add(wheel);
  }

  // Front windscreen
  const wsMat = new THREE.MeshLambertMaterial({ color: 0x334455 });
  const frontWS = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.7, 0.1), wsMat);
  frontWS.position.set(0, 1.4, -3.3);
  group.add(frontWS);

  // Rear window
  const rearWS = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.7, 0.1), wsMat);
  rearWS.position.set(0, 1.4, 3.3);
  group.add(rearWS);

  return group;
}

function rotationForCar(axis: 'x' | 'z', dir: 1 | -1): number {
  if (axis === 'x') {
    return dir === 1 ? -Math.PI / 2 : Math.PI / 2;
  } else {
    return dir === 1 ? Math.PI : 0;
  }
}

export class TrafficSystem {
  private cars: TrafficCar[] = [];
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this._spawn();
  }

  private _spawn(): void {
    // Road lines (skip ±240 edges)
    const roadLines = [-200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200];

    const spawnCar = (axis: 'x' | 'z') => {
      const color = CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)];
      const group = createTrafficCar(color);
      const roadPos = roadLines[Math.floor(Math.random() * roadLines.length)];
      const laneOffset = Math.random() > 0.5 ? 2 : -2;
      const baseSpeed = 10 + Math.random() * 10;
      const dir: 1 | -1 = Math.random() > 0.5 ? 1 : -1;
      const pos = -200 + Math.random() * 400;

      group.rotation.y = rotationForCar(axis, dir);

      const car: TrafficCar = {
        group, axis, roadPos, laneOffset,
        baseSpeed, currentSpeed: baseSpeed,
        dir, pos, nudgeVel: 0
      };
      this.cars.push(car);
      this.scene.add(group);
      this._applyPosition(car);
    };

    for (let i = 0; i < 14; i++) spawnCar('z');
    for (let i = 0; i < 14; i++) spawnCar('x');
  }

  private _applyPosition(car: TrafficCar): void {
    if (car.axis === 'x') {
      car.group.position.set(car.pos, 0, car.roadPos + car.laneOffset);
    } else {
      car.group.position.set(car.roadPos + car.laneOffset, 0, car.pos);
    }
  }

  update(dt: number, vanX: number, vanZ: number): void {
    for (const car of this.cars) {
      // ── Braking logic ──────────────────────────────────────────────────────
      // Check if the van is ahead of this car along its travel axis
      const carX = car.group.position.x;
      const carZ = car.group.position.z;

      let aheadDist = Infinity;
      let lateralDist = Infinity;

      if (car.axis === 'x') {
        // car travels along X; "ahead" = in direction of dir along X
        const rawDist = (vanX - carX) * car.dir;
        lateralDist = Math.abs(vanZ - carZ);
        aheadDist = rawDist;
      } else {
        // car travels along Z
        const rawDist = (vanZ - carZ) * car.dir;
        lateralDist = Math.abs(vanX - carX);
        aheadDist = rawDist;
      }

      // Broad proximity stop — any car within 7 units of the van stops dead
      // (prevents the van getting sandwiched at intersections)
      const proximityDist = Math.sqrt(
        (vanX - carX) * (vanX - carX) + (vanZ - carZ) * (vanZ - carZ),
      );
      if (proximityDist < 7) {
        car.currentSpeed = 0;
      } else {
        // Lane-based braking (original logic)
        const vanInLane = lateralDist < 5;
        const vanAhead = aheadDist > 0 && aheadDist < BRAKE_DISTANCE;

        if (vanInLane && vanAhead) {
          const t = Math.max(0, (aheadDist - STOP_DISTANCE) / (BRAKE_DISTANCE - STOP_DISTANCE));
          car.currentSpeed = car.baseSpeed * t;
        } else {
          car.currentSpeed = Math.min(car.baseSpeed, car.currentSpeed + RESUME_RATE * dt);
        }
      }

      // ── Nudge decay ────────────────────────────────────────────────────────
      if (Math.abs(car.nudgeVel) > 0.05) {
        car.pos += car.nudgeVel * dt;
        car.nudgeVel *= Math.max(0, 1 - 6 * dt); // friction
      } else {
        car.nudgeVel = 0;
      }

      // ── Move ───────────────────────────────────────────────────────────────
      car.pos += car.dir * car.currentSpeed * dt;

      // Wrap
      if (car.pos > 235) car.pos = -235;
      if (car.pos < -235) car.pos = 235;

      this._applyPosition(car);
    }
  }

  /**
   * Resolve van position against all traffic cars using AABB Minkowski sum.
   * Also nudges the car away when hit — cars aren't immovable tanks.
   */
  resolveVan(vanX: number, vanZ: number, vanRadius = 1.8): { x: number; z: number; hit: boolean } {
    let rx = vanX, rz = vanZ;
    let hit = false;

    // 3 passes: multi-iteration resolves sandwiching between two cars
    for (let pass = 0; pass < 3; pass++) {
    for (const car of this.cars) {
      const cx = car.group.position.x;
      const cz = car.group.position.z;

      // axis='x': length (6.5) runs along X → hw=3.25, hd=1.75
      // axis='z': length (6.5) runs along Z → hw=1.75, hd=3.25
      const hw = (car.axis === 'x' ? 3.25 : 1.75) + vanRadius;
      const hd = (car.axis === 'x' ? 1.75 : 3.25) + vanRadius;

      const dx = rx - cx;
      const dz = rz - cz;

      if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
        const overlapX = hw - Math.abs(dx);
        const overlapZ = hd - Math.abs(dz);

        if (overlapX < overlapZ) {
          // Push van out on X axis
          const pushSign = dx < 0 ? -1 : 1;
          rx += pushSign * overlapX;
          // Nudge car the other way along its travel axis
          if (car.axis === 'x') car.nudgeVel += pushSign * NUDGE_FORCE * -1 * car.dir;
        } else {
          // Push van out on Z axis
          const pushSign = dz < 0 ? -1 : 1;
          rz += pushSign * overlapZ;
          if (car.axis === 'z') car.nudgeVel += pushSign * NUDGE_FORCE * -1 * car.dir;
        }

        // Stop the car dead on impact
        car.currentSpeed = 0;
        hit = true;
      }
    } // end car loop
    } // end pass loop

    return { x: rx, z: rz, hit };
  }

  /** @deprecated Use resolveVan instead */
  checkVanCollision(vanX: number, vanZ: number): { hit: boolean; pushX: number; pushZ: number } {
    const result = this.resolveVan(vanX, vanZ);
    return { hit: result.hit, pushX: result.x - vanX, pushZ: result.z - vanZ };
  }
}
