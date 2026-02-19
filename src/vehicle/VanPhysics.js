import * as THREE from 'three';
const PHYSICS = {
    maxSpeed: 80,
    acceleration: 55,
    reverseForce: 45,
    friction: 0.985, // Coasts with momentum
    steerRate: 2.8, // Direct rad/s — 2.8 = ~160°/s at full stick
    minSpeedToSteer: 0.5,
    gripAtLowSpeed: 7.0, // Slide even at low speed
    gripAtHighSpeed: 1.2, // Very slidey at speed = big drift angles
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
    velocityAngle = 0;
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
        const dir = new THREE.Vector3(Math.sin(this.velocityAngle), 0, -Math.cos(this.velocityAngle));
        this.van.velocity.copy(dir).multiplyScalar(this.speed);
        this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(dt));
        // Van faces heading — shows drift angle visually
        this.van.mesh.rotation.y = -this.van.heading;
    }
}
