import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// GLB v2 known dimensions (post-export, centred + grounded):
//   Blender X: -2.948..2.948  (long axis → Three.js X before rotation)
//   Blender Y: -1.119..1.119  (short axis → Three.js -Z before rotation)
//   Blender Z:  0..2.507       (height   → Three.js Y, grounded at 0)
// rotation.y = Math.PI/2 aligns long axis with +Z (game forward)
// After rotation + scale 0.65: width≈1.46, height≈1.63, length≈3.83

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

        // Known scale: target height ~1.6 game units, GLB height = 2.507
        const scale = 0.65;
        model.scale.setScalar(scale);

        // Rotate so van's long axis (Blender X) aligns with game forward (+Z)
        model.rotation.y = Math.PI / 2;

        // GLB is already grounded (Z min=0 → Three.js Y min=0) and centred
        // No position offset needed

        // Apply visible dark material + wrap texture
        const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1c1c1c });
        const wrapTex = new THREE.TextureLoader().load(`${base}assets/tem_wrap.png`);
        const wrapMat = new THREE.MeshLambertMaterial({ map: wrapTex });

        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
          child.material = bodyMat;
        });

        // TEM wrap plane — left side of van after rotation
        // After rotation.y=PI/2: van length along Z, left side = -X
        const wrapPlane = new THREE.Mesh(
          new THREE.PlaneGeometry(2.4 * scale, 0.55 * scale),
          wrapMat
        );
        wrapPlane.rotation.y = -Math.PI / 2;  // face outward (-X = left side)
        wrapPlane.position.set(-1.12 * scale, 0.7 * scale, 0.2 * scale);
        model.add(wrapPlane);

        this.bodyGroup.add(model);
      },
      undefined,
      (err) => console.error('[VanModel] GLB load error:', err)
    );

    // Lights — always visible so you can see where the van is
    const headMat = new THREE.MeshLambertMaterial({
      color: 0xffffdd, emissive: 0xffffdd, emissiveIntensity: 1.0,
    });
    for (const lx of [-0.7, 0.7]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.1), headMat);
      h.position.set(lx, 0.65, -2.0);
      this.bodyGroup.add(h);
    }

    const tailMat = new THREE.MeshLambertMaterial({
      color: 0xff1100, emissive: 0xff1100, emissiveIntensity: 1.0,
    });
    for (const lx of [-0.7, 0.7]) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.08), tailMat);
      t.position.set(lx, 0.65, 2.0);
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
