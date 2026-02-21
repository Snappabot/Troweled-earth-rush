import * as THREE from 'three';
const CAR_COLORS = [0xE63946, 0x2196F3, 0xFFB300, 0x4CAF50, 0x9C27B0, 0xFF6B35];
function createTrafficCar(color) {
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
    const wheelPositions = [
        [-1.8, 0.4, 2.2],
        [1.8, 0.4, 2.2],
        [-1.8, 0.4, -2.2],
        [1.8, 0.4, -2.2],
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
function rotationForCar(axis, dir) {
    if (axis === 'x') {
        return dir === 1 ? -Math.PI / 2 : Math.PI / 2;
    }
    else {
        return dir === 1 ? Math.PI : 0;
    }
}
export class TrafficSystem {
    cars = [];
    scene;
    constructor(scene) {
        this.scene = scene;
        this._spawn();
    }
    _spawn() {
        // Road lines (skip ±240 edges)
        const roadLines = [-200, -160, -120, -80, -40, 0, 40, 80, 120, 160, 200];
        const spawnCar = (axis) => {
            const color = CAR_COLORS[Math.floor(Math.random() * CAR_COLORS.length)];
            const group = createTrafficCar(color);
            const roadPos = roadLines[Math.floor(Math.random() * roadLines.length)];
            const laneOffset = Math.random() > 0.5 ? 2 : -2;
            const speed = 10 + Math.random() * 10;
            const dir = Math.random() > 0.5 ? 1 : -1;
            const pos = -200 + Math.random() * 400;
            group.rotation.y = rotationForCar(axis, dir);
            const car = { group, axis, roadPos, laneOffset, speed, dir, pos };
            this.cars.push(car);
            this.scene.add(group);
            this._applyPosition(car);
        };
        for (let i = 0; i < 14; i++)
            spawnCar('z'); // horizontal roads
        for (let i = 0; i < 14; i++)
            spawnCar('x'); // vertical roads
    }
    _applyPosition(car) {
        if (car.axis === 'x') {
            // Travels along X, road is at fixed Z
            car.group.position.set(car.pos, 0, car.roadPos + car.laneOffset);
        }
        else {
            // axis === 'z': travels along Z, road is at fixed X
            car.group.position.set(car.roadPos + car.laneOffset, 0, car.pos);
        }
    }
    update(dt, _vanX, _vanZ) {
        for (const car of this.cars) {
            car.pos += car.dir * car.speed * dt;
            // Wrap
            if (car.pos > 235)
                car.pos = -235;
            if (car.pos < -235)
                car.pos = 235;
            this._applyPosition(car);
        }
    }
    /**
     * Resolve van position against all traffic cars using AABB Minkowski sum.
     * Returns corrected {x, z} and whether a hit occurred (for speed scrub).
     */
    resolveVan(vanX, vanZ, vanRadius = 1.8) {
        let rx = vanX, rz = vanZ;
        let hit = false;
        for (const car of this.cars) {
            const cx = car.group.position.x;
            const cz = car.group.position.z;
            // Car body: 3.5W × 6.5D — axis determines which is which in world space
            // axis='x': car length (6.5) runs along X, so hw=3.25, hd=1.75
            // axis='z': car length (6.5) runs along Z, so hw=1.75, hd=3.25
            const hw = (car.axis === 'x' ? 3.25 : 1.75) + vanRadius;
            const hd = (car.axis === 'x' ? 1.75 : 3.25) + vanRadius;
            const dx = rx - cx;
            const dz = rz - cz;
            if (Math.abs(dx) < hw && Math.abs(dz) < hd) {
                // Inside — push out on shortest axis
                const overlapX = hw - Math.abs(dx);
                const overlapZ = hd - Math.abs(dz);
                if (overlapX < overlapZ) {
                    rx += dx < 0 ? -overlapX : overlapX;
                }
                else {
                    rz += dz < 0 ? -overlapZ : overlapZ;
                }
                hit = true;
            }
        }
        return { x: rx, z: rz, hit };
    }
    /** @deprecated Use resolveVan instead */
    checkVanCollision(vanX, vanZ) {
        const result = this.resolveVan(vanX, vanZ);
        return { hit: result.hit, pushX: result.x - vanX, pushZ: result.z - vanZ };
    }
}
