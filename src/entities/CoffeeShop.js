import * as THREE from 'three';
export class CoffeeShop {
    static POS = { x: -60, z: -100 };
    static TRIGGER_RADIUS = 12;
    indicator;
    scene;
    lastVisit = -30; // seconds — init to -30 so first visit works immediately
    constructor(scene) {
        this.scene = scene;
        // Floating ☕ indicator above the coffee shop — warm emissive plane, bigger
        // bobbing slowly, 10 units above ground
        this.indicator = new THREE.Mesh(new THREE.SphereGeometry(1.5, 10, 8), new THREE.MeshLambertMaterial({
            color: 0xD4622A,
            emissive: new THREE.Color(0xA03010),
            emissiveIntensity: 0.8,
        }));
        this.indicator.position.set(CoffeeShop.POS.x, 10, CoffeeShop.POS.z);
        this.scene.add(this.indicator);
    }
    update(dt) {
        // Bob the indicator up and down
        this.indicator.position.y = 10 + Math.sin(Date.now() * 0.002) * 0.5;
        this.indicator.rotation.y += dt * 1.5;
    }
    isNearby(vanX, vanZ) {
        const dx = vanX - CoffeeShop.POS.x;
        const dz = vanZ - CoffeeShop.POS.z;
        return Math.sqrt(dx * dx + dz * dz) < CoffeeShop.TRIGGER_RADIUS;
    }
    /**
     * Try to visit the coffee shop. Returns true if the van is nearby
     * and the cooldown has elapsed, and registers the visit.
     */
    tryVisit(vanX, vanZ) {
        if (!this.isNearby(vanX, vanZ))
            return false;
        const now = Date.now() / 1000;
        if (now - this.lastVisit < 20)
            return false; // 20s cooldown
        this.lastVisit = now;
        return true;
    }
}
