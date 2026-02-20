import * as THREE from 'three';
import { VanModel } from './VanModel';
import { InputManager } from '../core/InputManager';

const PHYSICS = {
  maxSpeed: 80,
  acceleration: 55,
  reverseForce: 45,
  friction: 0.985,          // Coasts with momentum
  steerRate: 2.8,           // Direct rad/s — 2.8 = ~160°/s at full stick
  minSpeedToSteer: 0.5,
  gripAtLowSpeed: 7.0,      // Slide even at low speed
  gripAtHighSpeed: 1.2,     // Very slidey at speed = big drift angles
};

const GRID = 40;
const ROAD_HALF = 4;
const MAX_BUMP_SPEED = 30;   // Speed at which bump intensity is capped at 1.0
const MIN_BUMP_INTENSITY = 0.8;

function normalizeAngle(a: number): number {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

/** Returns the nearest road grid line centre for a given coordinate */
function nearestGridLine(v: number): number {
  return Math.round(v / GRID) * GRID;
}

/**
 * Check if the segment [prev, curr] crosses a curb boundary.
 * Curbs sit at nearestGridLine(prev) ± ROAD_HALF.
 * Returns the number of curb lines crossed (0, 1, or rarely 2).
 */
function countCurbCrossings(prev: number, curr: number): number {
  let count = 0;
  const gl = nearestGridLine((prev + curr) * 0.5);
  for (const sign of [-1, 1]) {
    const curbLine = gl + sign * ROAD_HALF;
    if ((prev - curbLine) * (curr - curbLine) < 0) {
      count++;
    }
  }
  return count;
}

export class VanPhysics {
  private van: VanModel;
  private input: InputManager;
  private speed = 0;
  private velocityAngle = 0;
  private prevPos = new THREE.Vector3();
  private onBump?: (intensity: number) => void;

  constructor(van: VanModel, input: InputManager, onBump?: (intensity: number) => void) {
    this.van = van;
    this.input = input;
    this.onBump = onBump;
    this.velocityAngle = this.van.heading;
    this.prevPos.copy(this.van.mesh.position);
  }

  update(dt: number) {
    // Record previous position before moving
    this.prevPos.copy(this.van.mesh.position);

    const absSpeed = Math.abs(this.speed);

    // --- THROTTLE ---
    if (this.input.forward) {
      this.speed += PHYSICS.acceleration * dt;
    }

    // --- BRAKE = REVERSE ---
    if (this.input.brake) {
      this.speed -= PHYSICS.reverseForce * dt;
    }

    // --- FRICTION ---
    this.speed *= Math.pow(PHYSICS.friction, dt * 60);
    this.speed = Math.max(-PHYSICS.maxSpeed * 0.5, Math.min(PHYSICS.maxSpeed, this.speed));

    // --- DIRECT STEERING ---
    // No accumulation — heading changes directly proportional to stick/key input
    if (absSpeed > PHYSICS.minSpeedToSteer) {
      const steerInput = this.input.left ? -1 : this.input.right ? 1 :
        Math.abs(this.input.steerAxis) > 0.1 ? this.input.steerAxis : 0;

      // Scale turning with speed — full turning at 15+ units/s, proportional below
      const speedFactor = Math.min(1.0, absSpeed / 15);
      this.van.heading += steerInput * PHYSICS.steerRate * speedFactor * Math.sign(this.speed) * dt;
    }

    // --- DRIFT PHYSICS ---
    // Velocity direction lags heading — bigger lag at speed = visible drift angle
    const speedRatio = Math.min(absSpeed / PHYSICS.maxSpeed, 1);
    const gripStrength = PHYSICS.gripAtLowSpeed +
      (PHYSICS.gripAtHighSpeed - PHYSICS.gripAtLowSpeed) * speedRatio;

    const angleDiff = normalizeAngle(this.van.heading - this.velocityAngle);
    this.velocityAngle += angleDiff * gripStrength * dt;

    // --- MOVE VAN ---
    const dir = new THREE.Vector3(
      Math.sin(this.velocityAngle),
      0,
      -Math.cos(this.velocityAngle)
    );
    this.van.velocity.copy(dir).multiplyScalar(this.speed);
    this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(dt));

    // Van faces heading — shows drift angle visually
    this.van.mesh.rotation.y = -this.van.heading;

    // --- CURB DETECTION ---
    this._checkCurbCrossings();
  }

  private _checkCurbCrossings(): void {
    const curr = this.van.mesh.position;
    const prev = this.prevPos;

    const xCrossings = countCurbCrossings(prev.x, curr.x);
    const zCrossings = countCurbCrossings(prev.z, curr.z);

    const totalCrossings = xCrossings + zCrossings;
    if (totalCrossings === 0) return;

    // Bump intensity ∝ crossing speed, clamped, minimum guaranteed
    const crossingSpeed = Math.abs(this.speed);
    const rawIntensity = crossingSpeed / MAX_BUMP_SPEED;
    const intensity = Math.max(MIN_BUMP_INTENSITY, Math.min(1.0, rawIntensity));

    // Apply bump to suspension
    this.van.triggerBump(intensity);

    // Speed penalty — rolling over a curb scrubs speed
    this.speed *= 0.85;

    // Notify external listeners (spill meter, etc.)
    if (this.onBump) {
      this.onBump(intensity);
    }
  }
}
