import * as THREE from 'three';
const PHYSICS = {
    maxSpeed: 40, // Much faster
    acceleration: 28, // Snappier acceleration
    brakeForce: 40,
    friction: 0.92, // Less friction = more slide
    steerSpeed: 2.2,
    steerFriction: 0.70,
    minSpeedToSteer: 0.5,
    // Drift: how strongly velocity direction follows heading
    // 0 = full drift (velocity never follows heading), 1 = full grip (no drift)
    gripAtLowSpeed: 12.0, // Strong grip when slow
    gripAtHighSpeed: 3.5, // Weak grip when fast = drift
};
function normalizeAngle(a) {
    while (a > Math.PI)
        a -= Math.PI * 2;
    while (a < -Math.PI)
        a += Math.PI * 2;
    return a;
}
export class VanPhysics {
    van;
    input;
    speed = 0;
    steerAngle = 0;
    velocityAngle = 0; // actual direction of travel (separate from heading for drift)
    constructor(van, input) {
        this.van = van;
        this.input = input;
        this.velocityAngle = this.van.heading;
    }
    update(dt) {
        const absSpeed = Math.abs(this.speed);
        // --- THROTTLE ---
        if (this.input.forward) {
            this.speed += PHYSICS.acceleration * dt;
        }
        else if (this.input.backward) {
            this.speed -= PHYSICS.acceleration * 0.6 * dt;
        }
        // --- BRAKING ---
        if (this.input.brake) {
            this.speed *= 1 - (PHYSICS.brakeForce * dt);
        }
        // --- FRICTION ---
        this.speed *= Math.pow(PHYSICS.friction, dt * 60);
        this.speed = Math.max(-PHYSICS.maxSpeed * 0.4, Math.min(PHYSICS.maxSpeed, this.speed));
        // --- STEERING ---
        if (absSpeed > PHYSICS.minSpeedToSteer) {
            const steerInput = this.input.left ? -1 : this.input.right ? 1 :
                Math.abs(this.input.steerAxis) > 0.1 ? this.input.steerAxis : 0;
            const steerEffectiveness = Math.min(1, absSpeed / 6);
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
        const dir = new THREE.Vector3(Math.sin(this.velocityAngle), 0, -Math.cos(this.velocityAngle));
        this.van.velocity.copy(dir).multiplyScalar(this.speed);
        this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(dt));
        // Van FACES the heading (different from velocity = visible drift angle)
        this.van.mesh.rotation.y = -this.van.heading;
    }
}
