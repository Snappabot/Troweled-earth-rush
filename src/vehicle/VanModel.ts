import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class VanModel {
  mesh: THREE.Group;
  velocity = new THREE.Vector3();
  heading = 0;

  private bodyGroup: THREE.Group;
  private suspensionY = 0;
  private suspensionVel = 0;

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    this.bodyGroup = new THREE.Group();
    this.mesh.add(this.bodyGroup);

    const base = import.meta.env.BASE_URL as string;
    const loader = new GLTFLoader();

    loader.load(
      `${base}assets/tem_van.glb`,
      (gltf) => {
        const model = gltf.scene;

        // Van is centred + grounded in the GLB.
        // Long axis = Blender X → Three.js X → rotate PI/2 to face +Z (game fwd)
        model.scale.setScalar(0.65);
        model.rotation.y = Math.PI / 2;

        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
          // Baked texture is already in the GLB material — keep it
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach(m => { m.needsUpdate = true; });
            } else {
              (child.material as THREE.Material).needsUpdate = true;
            }
          }
        });

        this.bodyGroup.add(model);
      },
      undefined,
      (err) => console.error('[VanModel] GLB load error:', err)
    );

    // Emissive lights (always present)
    const headMat = new THREE.MeshLambertMaterial({
      color: 0xffffcc, emissive: 0xffffcc, emissiveIntensity: 1.0,
    });
    for (const lx of [-0.65, 0.65]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.08), headMat);
      h.position.set(lx, 0.6, -2.0);
      this.bodyGroup.add(h);
    }

    const tailMat = new THREE.MeshLambertMaterial({
      color: 0xff1100, emissive: 0xff1100, emissiveIntensity: 1.0,
    });
    for (const lx of [-0.65, 0.65]) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.16, 0.07), tailMat);
      t.position.set(lx, 0.6, 2.0);
      this.bodyGroup.add(t);
    }

    scene.add(this.mesh);
  }

  triggerBump(intensity: number): void {
    this.suspensionVel = -intensity * 6;
  }

  updateSuspension(dt: number): void {
    const force = -80 * this.suspensionY - 10 * this.suspensionVel;
    this.suspensionVel += force * dt;
    this.suspensionY += this.suspensionVel * dt;
    this.suspensionY = Math.max(-0.35, Math.min(0.35, this.suspensionY));
    this.bodyGroup.position.y = this.suspensionY;
    this.bodyGroup.rotation.z = -this.suspensionY * 0.08;
  }

  get suspensionMagnitude(): number {
    return Math.abs(this.suspensionY) + Math.abs(this.suspensionVel) * 0.04;
  }
}
