import * as THREE from 'three';
export class VanModel {
    mesh;
    velocity = new THREE.Vector3();
    heading = 0; // Radians, 0 = north (+Z)
    constructor(scene) {
        this.mesh = new THREE.Group();
        // ── Body ──────────────────────────────────────────────────────────────────
        // Main cargo body (rear 2/3) — dark black
        const cargoMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 3.2), cargoMat);
        cargo.position.set(0, 0.8, 0.8); // shifted toward rear
        this.mesh.add(cargo);
        // Cab (front 1/3) — very dark charcoal
        const cabMat = new THREE.MeshLambertMaterial({ color: 0x181818 });
        const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 1.6), cabMat);
        cab.position.set(0, 0.7, -1.6); // front portion
        this.mesh.add(cab);
        // Windscreen recess — dark blue-tinted glass
        const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
        const ws = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 0.1), wsMat);
        ws.rotation.x = -0.18; // slight rake
        ws.position.set(0, 1.15, -2.36);
        this.mesh.add(ws);
        // Roof — very slightly proud of body
        const roofMat = new THREE.MeshLambertMaterial({ color: 0x151515 });
        const roof = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.15, 4.6), roofMat);
        roof.position.set(0, 1.675, 0);
        this.mesh.add(roof);
        // ── Side details ─────────────────────────────────────────────────────────
        // TEM orange/terracotta stripe — both sides
        const stripeMat = new THREE.MeshLambertMaterial({ color: 0xC1666B });
        const stripeL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 3.0), stripeMat);
        stripeL.position.set(-1.23, 0.85, 0.5);
        this.mesh.add(stripeL);
        const stripeR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.35, 3.0), stripeMat);
        stripeR.position.set(1.23, 0.85, 0.5);
        this.mesh.add(stripeR);
        // Side windows on cab — both sides
        const winMat = new THREE.MeshLambertMaterial({ color: 0x334455 });
        const winL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), winMat);
        winL.position.set(-1.22, 1.1, -1.7);
        this.mesh.add(winL);
        const winR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), winMat);
        winR.position.set(1.22, 1.1, -1.7);
        this.mesh.add(winR);
        // Rear door divider lines — two thin vertical boxes on the rear face
        const doorMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        for (const dx of [-0.3, 0.3]) {
            const divider = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.4, 0.1), doorMat);
            divider.position.set(dx, 0.8, 2.46);
            this.mesh.add(divider);
        }
        // ── Wheels (4×) with hubcaps ─────────────────────────────────────────────
        const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 10);
        const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const hubMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
        // [x, y, z, outerSide]  outerSide: -1 = left, +1 = right
        const wheelDefs = [
            [-1.25, 0.38, -1.2, -1],
            [1.25, 0.38, -1.2, 1],
            [-1.25, 0.38, 1.3, -1],
            [1.25, 0.38, 1.3, 1],
        ];
        for (const [wx, wy, wz, outerSide] of wheelDefs) {
            const wheel = new THREE.Mesh(wheelGeo, wheelMat);
            wheel.rotation.z = Math.PI / 2;
            wheel.position.set(wx, wy, wz);
            this.mesh.add(wheel);
            // Hubcap on outer face
            const hubGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10);
            const hub = new THREE.Mesh(hubGeo, hubMat);
            hub.rotation.z = Math.PI / 2;
            hub.position.set(wx + outerSide * 0.15, wy, wz);
            this.mesh.add(hub);
        }
        // ── Lights ───────────────────────────────────────────────────────────────
        // Headlights — emissive warm white
        const headMat = new THREE.MeshLambertMaterial({
            color: 0xffffdd,
            emissive: 0xffffdd,
            emissiveIntensity: 0.8,
        });
        for (const lx of [-0.8, 0.8]) {
            const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.2, 0.08), headMat);
            headlight.position.set(lx, 0.75, -2.41);
            this.mesh.add(headlight);
        }
        // Tail lights — emissive red
        const tailMat = new THREE.MeshLambertMaterial({
            color: 0xff2200,
            emissive: 0xff2200,
            emissiveIntensity: 0.8,
        });
        for (const lx of [-0.8, 0.8]) {
            const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.06), tailMat);
            taillight.position.set(lx, 0.75, 2.47);
            this.mesh.add(taillight);
        }
        // ── Roof rack hint ───────────────────────────────────────────────────────
        const rackMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
        const rack = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.08, 0.8), rackMat);
        rack.position.set(0, 1.77, -0.5);
        this.mesh.add(rack);
        // ── Place in scene ───────────────────────────────────────────────────────
        this.mesh.position.set(0, 0, 0);
        scene.add(this.mesh);
    }
}
