import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class VanModel {
  mesh: THREE.Group;
  velocity = new THREE.Vector3();
  heading = 0; // Radians, 0 = north (+Z)

  /** Body group — shifted by suspension */
  private bodyGroup: THREE.Group;

  private suspensionY = 0;
  private suspensionVel = 0;

  constructor(scene: THREE.Scene) {
    this.mesh = new THREE.Group();
    this.bodyGroup = new THREE.Group();
    this.mesh.add(this.bodyGroup);

    // ── Load GLB ─────────────────────────────────────────────────────────────
    const loader = new GLTFLoader();
    loader.load('/assets/tem_van.glb', (gltf) => {
      const model = gltf.scene;

      // Measure bounding box to auto-scale to game proportions
      const box = new THREE.Box3().setFromObject(model);
      const size = new THREE.Vector3();
      box.getSize(size);

      // Target dimensions matching physics hitbox: ~2.4 wide, ~4.8 long, ~1.6 tall
      const targetWidth = 2.4;
      const scaleFactor = targetWidth / size.x;
      model.scale.setScalar(scaleFactor);

      // Re-measure after scale to centre correctly
      box.setFromObject(model);
      const centre = new THREE.Vector3();
      box.getCenter(centre);

      // Offset so van sits on ground (y=0) and is centred on X/Z
      model.position.sub(centre);
      box.getSize(size);
      model.position.y += size.y * scaleFactor * 0.5; // lift to ground level

      // Rotate to face +Z (game forward) — GLB Y-up, van faces along Blender Y
      // which becomes Three.js -Z after export; rotate 180° to face +Z
      model.rotation.y = Math.PI;

      // Apply materials
      model.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;

        if (child.name === 'wrap_decal') {
          // Keep the earthy wrap texture, render on top
          if (Array.isArray(child.material)) {
            child.material.forEach(m => { m.depthWrite = false; });
          } else {
            (child.material as THREE.Material).depthWrite = false;
          }
          child.renderOrder = 1;
        } else {
          // Jet black glossy body
          child.material = new THREE.MeshStandardMaterial({
            color: 0x0d0d0d,
            metalness: 0.7,
            roughness: 0.2,
          });
        }
        child.castShadow = true;
        child.receiveShadow = true;
      });

      this.bodyGroup.add(model);
    });

    // ── Wheels (placeholder — shown while GLB loads, replaced by GLB wheels) ─
    // Wheels are part of the GLB so nothing extra needed here.

    // ── Lights ───────────────────────────────────────────────────────────────
    const headMat = new THREE.MeshStandardMaterial({
      color: 0xffffdd,
      emissive: 0xffffdd,
      emissiveIntensity: 1.2,
    });
    for (const lx of [-0.8, 0.8]) {
      const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.08), headMat);
      headlight.position.set(lx, 0.72, -2.41);
      this.bodyGroup.add(headlight);
    }

    const tailMat = new THREE.MeshStandardMaterial({
      color: 0xff2200,
      emissive: 0xff2200,
      emissiveIntensity: 1.0,
    });
    for (const lx of [-0.8, 0.8]) {
      const taillight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.16, 0.06), tailMat);
      taillight.position.set(lx, 0.72, 2.47);
      this.bodyGroup.add(taillight);
    }

    scene.add(this.mesh);
  }

  /** Kick the suspension downward — call on curb crossing */
  triggerBump(intensity: number): void {
    this.suspensionVel = -intensity * 6;
  }

  /** Simulate spring-damper suspension every frame */
  updateSuspension(dt: number): void {
    const force = -80 * this.suspensionY - 10 * this.suspensionVel;
    this.suspensionVel += force * dt;
    this.suspensionY += this.suspensionVel * dt;

    this.suspensionY = Math.max(-0.35, Math.min(0.35, this.suspensionY));

    this.bodyGroup.position.y = this.suspensionY;
    this.bodyGroup.rotation.z = -this.suspensionY * 0.08;
  }

  /** How much the suspension is moving — useful for effects */
  get suspensionMagnitude(): number {
    return Math.abs(this.suspensionY) + Math.abs(this.suspensionVel) * 0.04;
  }
}
