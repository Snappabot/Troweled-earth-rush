import * as THREE from 'three';
import { VanModel } from './VanModel';
import { InputManager } from '../core/InputManager';

const PHYSICS = {
  maxSpeed: 80,
  acceleration: 55,
  reverseForce: 45,
  friction: 0.985,        // Much less friction = coasts with momentum
  steerSpeed: 3.3,        // 50% more sensitive
  steerFriction: 0.72,
  minSpeedToSteer: 0.5,
  gripAtLowSpeed: 12.0,
  gripAtHighSpeed: 3.0,   // Slightly more slidey
};

function normalizeAngle(a: number): number {
  while (a > Math.PI) a -= Math.PI * 2;
  while (a < -Math.PI) a += Math.PI * 2;
  return a;
}

export class VanPhysics {
  private van: VanModel;
  private input: InputManager;
  private speed = 0;
  private steerAngle = 0;
  private velocityAngle = 0; // actual direction of travel (separate from heading for drift)

  constructor(van: VanModel, input: InputManager) {
    this.van = van;
    this.input = input;
    this.velocityAngle = this.van.heading;
  }

  update(dt: number) {
    const absSpeed = Math.abs(this.speed);

    // --- THROTTLE ---
    if (this.input.forward) {
      this.speed += PHYSICS.acceleration * dt;
    }

    // --- BRAKE = REVERSE ---
    // If moving forward, slows down fast. If stopped, reverses.
    if (this.input.brake) {
      this.speed -= PHYSICS.reverseForce * dt;
    }

    // --- FRICTION ---
    this.speed *= Math.pow(PHYSICS.friction, dt * 60);
    this.speed = Math.max(-PHYSICS.maxSpeed * 0.5, Math.min(PHYSICS.maxSpeed, this.speed));

    // --- STEERING ---
    if (absSpeed > PHYSICS.minSpeedToSteer) {
      const steerInput = this.input.left ? -1 : this.input.right ? 1 :
        Math.abs(this.input.steerAxis) > 0.1 ? this.input.steerAxis : 0;
      // Full steering at low speed (tight turning circle), slight reduction at high speed
      const steerEffectiveness = Math.min(1.0, 0.4 + absSpeed / 10);
      this.steerAngle += steerInput * PHYSICS.steerSpeed * steerEffectiveness * dt;
    }
    this.steerAngle *= Math.pow(PHYSICS.steerFriction, dt * 60);

    // Apply heading change (van faces the heading)
    if (absSpeed > 0.1) {
      this.van.heading += this.steerAngle * Math.sign(this.speed) * dt;
    }

    // --- DRIFT PHYSICS ---
    // Velocity direction lags behind heading based on speed
    // At low speed: strong grip (velocity follows heading tightly)
    // At high speed: weak grip (velocity slides, creating drift)
    const speedRatio = Math.min(absSpeed / PHYSICS.maxSpeed, 1);
    const gripStrength = PHYSICS.gripAtLowSpeed + (PHYSICS.gripAtHighSpeed - PHYSICS.gripAtLowSpeed) * speedRatio;

    const angleDiff = normalizeAngle(this.van.heading - this.velocityAngle);
    this.velocityAngle += angleDiff * gripStrength * dt;

    // --- MOVE VAN ---
    // Van moves in velocity direction (not heading direction = drift effect)
    const dir = new THREE.Vector3(
      Math.sin(this.velocityAngle),
      0,
      -Math.cos(this.velocityAngle)
    );
    this.van.velocity.copy(dir).multiplyScalar(this.speed);
    this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(dt));

    // Van FACES the heading (different from velocity = visible drift angle)
    this.van.mesh.rotation.y = -this.van.heading;
  }
}
