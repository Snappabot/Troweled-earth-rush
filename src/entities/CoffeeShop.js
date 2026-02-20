import * as THREE from 'three';
export class CoffeeShop {
    static POS = { x: -60, z: -80 };
    static TRIGGER_RADIUS = 12;
    indicator;
    scene;
    constructor(scene) {
        this.scene = scene;
        // Floating ☕ indicator above the coffee shop — small warm-brown sphere
        // bobbing slowly, 7 units above ground
        this.indicator = new THREE.Mesh(new THREE.SphereGeometry(0.8, 8, 6), new THREE.MeshLambertMaterial({
            color: 0xC47A40,
            emissive: new THREE.Color(0x8A4020),
            emissiveIntensity: 0.5,
        }));
        this.indicator.position.set(CoffeeShop.POS.x, 7, CoffeeShop.POS.z);
        this.scene.add(this.indicator);
    }
    update(dt) {
        // Bob the indicator up and down
        this.indicator.position.y = 7 + Math.sin(Date.now() * 0.002) * 0.4;
        this.indicator.rotation.y += dt * 1.5;
    }
    isNearby(vanX, vanZ) {
        const dx = vanX - CoffeeShop.POS.x;
        const dz = vanZ - CoffeeShop.POS.z;
        return Math.sqrt(dx * dx + dz * dz) < CoffeeShop.TRIGGER_RADIUS;
    }
}
