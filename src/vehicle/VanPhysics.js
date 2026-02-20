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
const GRID = 40;
const ROAD_HALF = 4;
const MAX_BUMP_SPEED = 30; // Speed at which bump intensity is capped at 1.0
const MIN_BUMP_INTENSITY = 0.8;
function normalizeAngle(a) {
    while (a > Math.PI)
        a -= Math.PI * 2;
    while (a < -Math.PI)
        a += Math.PI * 2;
    return a;
}
/** Returns the nearest road grid line centre for a given coordinate */
function nearestGridLine(v) {
    return Math.round(v / GRID) * GRID;
}
/**
 * Check if the segment [prev, curr] crosses a curb boundary.
 * Curbs sit at nearestGridLine(prev) ± ROAD_HALF.
 * Returns the number of curb lines crossed (0, 1, or rarely 2).
 */
function countCurbCrossings(prev, curr) {
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
    van;
    input;
    _speed = 0;
    velocityAngle = 0;
    prevPos = new THREE.Vector3();
    onBump;
    // Grid collision constants — road(4) + sidewalk(2) + tiny buffer(0.5)
    COLL_GRID = 40;
    COLL_ROAD_HALF = 6.5;
    constructor(van, input, onBump) {
        this.van = van;
        this.input = input;
        this.onBump = onBump;
        this.velocityAngle = this.van.heading;
        this.prevPos.copy(this.van.mesh.position);
    }
    /** Current speed in m/s — positive = forward, negative = reverse */
    get speed() {
        return this._speed;
    }
    update(dt) {
        // Record previous position before moving
        this.prevPos.copy(this.van.mesh.position);
        const absSpeed = Math.abs(this._speed);
        // --- THROTTLE ---
        if (this.input.forward) {
            this._speed += PHYSICS.acceleration * dt;
        }
        // --- BRAKE = REVERSE ---
        if (this.input.brake) {
            this._speed -= PHYSICS.reverseForce * dt;
        }
        // --- FRICTION ---
        this._speed *= Math.pow(PHYSICS.friction, dt * 60);
        this._speed = Math.max(-PHYSICS.maxSpeed * 0.5, Math.min(PHYSICS.maxSpeed, this._speed));
        // --- DIRECT STEERING ---
        if (absSpeed > PHYSICS.minSpeedToSteer) {
            const steerInput = this.input.left ? -1 : this.input.right ? 1 :
                Math.abs(this.input.steerAxis) > 0.1 ? this.input.steerAxis : 0;
            const speedFactor = Math.min(1.0, absSpeed / 15);
            this.van.heading += steerInput * PHYSICS.steerRate * speedFactor * Math.sign(this._speed) * dt;
        }
        // --- DRIFT PHYSICS ---
        const speedRatio = Math.min(absSpeed / PHYSICS.maxSpeed, 1);
        const gripStrength = PHYSICS.gripAtLowSpeed +
            (PHYSICS.gripAtHighSpeed - PHYSICS.gripAtLowSpeed) * speedRatio;
        const angleDiff = normalizeAngle(this.van.heading - this.velocityAngle);
        this.velocityAngle += angleDiff * gripStrength * dt;
        // --- MOVE VAN ---
        const dir = new THREE.Vector3(Math.sin(this.velocityAngle), 0, -Math.cos(this.velocityAngle));
        this.van.velocity.copy(dir).multiplyScalar(this._speed);
        this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(dt));
        // Van faces heading — shows drift angle visually
        this.van.mesh.rotation.y = -this.van.heading;
        // --- BUILDING COLLISION ---
        const resolved = this.resolveCollision(this.prevPos.x, this.prevPos.z, this.van.mesh.position.x, this.van.mesh.position.z);
        if (resolved.x !== this.van.mesh.position.x || resolved.z !== this.van.mesh.position.z) {
            // Wall hit — scrub 40% of speed (feels like sliding, not a brick wall)
            this._speed *= 0.6;
            this.van.mesh.position.x = resolved.x;
            this.van.mesh.position.z = resolved.z;
        }
        // --- CURB DETECTION ---
        this._checkCurbCrossings();
    }
    // ── Grid collision helpers ───────────────────────────────────────────────────
    distToNearestRoad(pos) {
        // Distance from pos to the nearest grid line (0..20)
        const mod = ((pos % this.COLL_GRID) + this.COLL_GRID) % this.COLL_GRID;
        return Math.min(mod, this.COLL_GRID - mod);
    }
    isOnRoad(x, z) {
        // Van is on driveable surface if within COLL_ROAD_HALF of ANY road line
        // Roads run horizontally (z = multiples of 40) and vertically (x = multiples of 40)
        const dx = this.distToNearestRoad(x);
        const dz = this.distToNearestRoad(z);
        return dx < this.COLL_ROAD_HALF || dz < this.COLL_ROAD_HALF;
    }
    resolveCollision(prevX, prevZ, newX, newZ) {
        if (!this.isOnRoad(newX, newZ)) {
            // Try sliding along Z axis (revert only X)
            if (this.isOnRoad(prevX, newZ))
                return { x: prevX, z: newZ };
            // Try sliding along X axis (revert only Z)
            if (this.isOnRoad(newX, prevZ))
                return { x: newX, z: prevZ };
            // Full stop — revert both
            return { x: prevX, z: prevZ };
        }
        return { x: newX, z: newZ };
    }
    // ── Curb detection (suspension bump + spill) ────────────────────────────────
    _checkCurbCrossings() {
        const curr = this.van.mesh.position;
        const prev = this.prevPos;
        const xCrossings = countCurbCrossings(prev.x, curr.x);
        const zCrossings = countCurbCrossings(prev.z, curr.z);
        const totalCrossings = xCrossings + zCrossings;
        if (totalCrossings === 0)
            return;
        const crossingSpeed = Math.abs(this._speed);
        const rawIntensity = crossingSpeed / MAX_BUMP_SPEED;
        const intensity = Math.max(MIN_BUMP_INTENSITY, Math.min(1.0, rawIntensity));
        this.van.triggerBump(intensity);
        this._speed *= 0.85;
        if (this.onBump) {
            this.onBump(intensity);
        }
    }
}
