import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class VanModel {
  mesh: THREE.Group;
  velocity = new THREE.Vector3();
  heading = 0; // Radians, 0 = north (+Z)

  private bodyGroup: THREE.Group;
  private suspensionY = 0;
  private suspensionVel = 0;

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    this.bodyGroup = new THREE.Group();
    this.mesh.add(this.bodyGroup);

    // ── Fallback box van (visible immediately while GLB loads) ────────────────
    const blackMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const fallbackGroup = new THREE.Group();

    const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 3.2), blackMat);
    cargo.position.set(0, 0.8, 0.8);
    fallbackGroup.add(cargo);

    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 1.6),
      new THREE.MeshLambertMaterial({ color: 0x181818 }));
    cab.position.set(0, 0.7, -1.6);
    fallbackGroup.add(cab);

    this.bodyGroup.add(fallbackGroup);

    // ── Load real GLB model ───────────────────────────────────────────────────
    const base = import.meta.env.BASE_URL as string;
    const glbUrl = `${base}assets/tem_van.glb`;
    const loader = new GLTFLoader();

    loader.load(
      glbUrl,
      (gltf) => {
        // Success — remove fallback, add real model
        this.bodyGroup.remove(fallbackGroup);

        const model = gltf.scene;

        // Measure pre-scale bounding box
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);

        // Scale so width = 2.4 game units (matching physics hitbox)
        // GLB width (Blender X axis, preserved in GLB X) is ~4.2 units
        const widthAxis = size.x > size.z ? size.x : size.z;
        const scaleFactor = 2.4 / Math.max(widthAxis, 0.1);
        model.scale.setScalar(scaleFactor);

        // Re-measure and reposition: centre X/Z, bottom at Y=0
        box.setFromObject(model);
        const centre = new THREE.Vector3();
        const scaledSize = new THREE.Vector3();
        box.getCenter(centre);
        box.getSize(scaledSize);

        model.position.x -= centre.x;
        model.position.z -= centre.z;
        model.position.y -= (centre.y - scaledSize.y * 0.5);

        // Rotate to face +Z (game forward)
        model.rotation.y = Math.PI;

        // Apply materials
        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;

          if (child.name === 'wrap_decal') {
            // Keep wrap texture
            child.renderOrder = 1;
            if (!Array.isArray(child.material)) {
              (child.material as THREE.Material).depthWrite = false;
              (child.material as THREE.Material).needsUpdate = true;
            }
          } else {
            child.material = new THREE.MeshLambertMaterial({
              color: 0x111111,
            });
          }
        });

        this.bodyGroup.add(model);
      },
      undefined,
      (error) => {
        console.error('[VanModel] GLB load failed:', error);
        // Fallback box van stays visible
      }
    );

    // ── Lights (always present, GLB has no emissive lights) ──────────────────
    const headMat = new THREE.MeshLambertMaterial({
      color: 0xffffdd, emissive: 0xffffdd, emissiveIntensity: 0.8,
    });
    for (const lx of [-0.8, 0.8]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.08), headMat);
      h.position.set(lx, 0.72, -2.41);
      this.bodyGroup.add(h);
    }

    const tailMat = new THREE.MeshLambertMaterial({
      color: 0xff2200, emissive: 0xff2200, emissiveIntensity: 0.8,
    });
    for (const lx of [-0.8, 0.8]) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.06), tailMat);
      t.position.set(lx, 0.72, 2.47);
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
