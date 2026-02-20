import * as THREE from 'three';

export class ObstacleSystem {
  private cones: THREE.Mesh[] = [];
  private scene: THREE.Scene;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
    this.spawnCones(20);
  }

  private spawnCones(count: number): void {
    // Roads are at multiples of 40 — spawn cones on them
    const roadPositions = [-160, -120, -80, -40, 0, 40, 80, 120, 160];

    const coneMat = new THREE.MeshLambertMaterial({ color: 0xFF6600 });
    const coneGeo = new THREE.ConeGeometry(0.4, 1.2, 8);

    for (let i = 0; i < count; i++) {
      const rx = roadPositions[Math.floor(Math.random() * roadPositions.length)];
      const rz = roadPositions[Math.floor(Math.random() * roadPositions.length)];

      // Offset from road centre so cones aren't all at intersections
      const offsetX = (Math.random() - 0.5) * 16;
      const offsetZ = (Math.random() - 0.5) * 16;

      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.set(rx + offsetX, 0.6, rz + offsetZ);
      cone.castShadow = true;
      this.scene.add(cone);
      this.cones.push(cone);
    }
  }

  checkVanCollision(vanX: number, vanZ: number): void {
    // If van gets within 1.8 units of a cone, knock it away
    for (const cone of this.cones) {
      const dx = vanX - cone.position.x;
      const dz = vanZ - cone.position.z;
      const dist = Math.sqrt(dx * dx + dz * dz);

      if (dist < 1.8) {
        // Knock cone away from van's direction
        const angle = Math.atan2(dz, dx);
        cone.position.x += Math.cos(angle) * 2;
        cone.position.z += Math.sin(angle) * 2;

        // Tip the cone over
        cone.rotation.x = (Math.random() - 0.5) * 0.8;
        cone.rotation.z = (Math.random() - 0.5) * 0.8;
      }
    }
  }
}
