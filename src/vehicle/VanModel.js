import * as THREE from 'three';
export class VanModel {
    mesh;
    velocity = new THREE.Vector3();
    heading = 0; // Radians, 0 = north (+Z)
    constructor(scene) {
        this.mesh = new THREE.Group();
        // Van body - dark charcoal/black
        const body = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.8, 4.5), new THREE.MeshLambertMaterial({ color: 0x1a1a1a }));
        body.position.y = 0.9;
        this.mesh.add(body);
        // Cab section (slightly raised front)
        const cab = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.8, 1.8), new THREE.MeshLambertMaterial({ color: 0x222222 }));
        cab.position.set(0, 2.0, -1.2);
        this.mesh.add(cab);
        // Wheels (4x)
        const wheelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 8);
        const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
        const wheelPositions = [
            [-1.2, 0.35, -1.4], [1.2, 0.35, -1.4],
            [-1.2, 0.35, 1.4], [1.2, 0.35, 1.4]
        ];
        for (const [wx, wy, wz] of wheelPositions) {
            const wheel = new THREE.Mesh(wheelGeo, wheelMat);
            wheel.rotation.z = Math.PI / 2;
            wheel.position.set(wx, wy, wz);
            this.mesh.add(wheel);
        }
        // Orange TEM stripe on sides
        const stripeMat = new THREE.MeshLambertMaterial({ color: 0xC1666B });
        const stripeL = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 3.5), stripeMat);
        stripeL.position.set(-1.13, 1.1, 0.2);
        this.mesh.add(stripeL);
        const stripeR = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 3.5), stripeMat);
        stripeR.position.set(1.13, 1.1, 0.2);
        this.mesh.add(stripeR);
        // Headlights
        const lightMat = new THREE.MeshLambertMaterial({ color: 0xffffcc, emissive: 0xffffcc, emissiveIntensity: 0.5 });
        for (const lx of [-0.7, 0.7]) {
            const light = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.1), lightMat);
            light.position.set(lx, 0.9, -2.3);
            this.mesh.add(light);
        }
        this.mesh.position.set(0, 0, 0);
        scene.add(this.mesh);
    }
}
