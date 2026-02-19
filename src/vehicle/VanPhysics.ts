import * as THREE from 'three';
import { VanModel } from './VanModel';
import { InputManager } from '../core/InputManager';

const PHYSICS = {
  maxSpeed: 25,
  acceleration: 18,
  brakeForce: 35,
  friction: 0.88,
  steerSpeed: 1.8,
  steerFriction: 0.75,
  minSpeedToSteer: 1.0,
};

export class VanPhysics {
  private van: VanModel;
  private input: InputManager;
  private speed = 0;
  private steerAngle = 0;

  constructor(van: VanModel, input: InputManager) {
    this.van = van;
    this.input = input;
  }

  update(dt: number) {
    // Throttle — analog from joystick, binary from keyboard
    const throttleInput = this.input.forward ? 1 : this.input.backward ? -0.6 :
      Math.abs(this.input.throttleAxis) > 0.2 ? this.input.throttleAxis : 0;
    this.speed += throttleInput * PHYSICS.acceleration * dt;

    // Braking
    if (this.input.brake) {
      this.speed *= 1 - (PHYSICS.brakeForce * dt);
    }

    // Friction
    this.speed *= Math.pow(PHYSICS.friction, dt * 60);
    this.speed = Math.max(-PHYSICS.maxSpeed * 0.4, Math.min(PHYSICS.maxSpeed, this.speed));

    // Steering (only when moving)
    if (Math.abs(this.speed) > PHYSICS.minSpeedToSteer) {
      // Steering — analog from joystick, binary from keyboard
      const steerInput = this.input.left ? -1 : this.input.right ? 1 :
        Math.abs(this.input.steerAxis) > 0.2 ? this.input.steerAxis : 0;
      const steerEffectiveness = Math.min(1, Math.abs(this.speed) / 8);
      this.steerAngle += steerInput * PHYSICS.steerSpeed * steerEffectiveness * dt;
    }
    this.steerAngle *= Math.pow(PHYSICS.steerFriction, dt * 60);

    // Apply heading change
    if (Math.abs(this.speed) > 0.1) {
      this.van.heading += this.steerAngle * Math.sign(this.speed) * dt;
    }

    // Move van
    const dir = new THREE.Vector3(
      Math.sin(this.van.heading),
      0,
      Math.cos(this.van.heading)
    );
    this.van.velocity.copy(dir).multiplyScalar(this.speed);
    this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(dt));
    this.van.mesh.rotation.y = -this.van.heading;
  }
}
