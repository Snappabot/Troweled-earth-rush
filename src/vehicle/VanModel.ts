import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { makeTEMRoofTexture } from '../utils/LogoLoader';

const VAN_SCALE = 0.85; // makes van ~2.4 units wide

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

    // ── Load GLB van ──────────────────────────────────────────────────────────
    const loader = new GLTFLoader();
    loader.load(`${base}assets/tem_van.glb`, (gltf) => {
      const model = gltf.scene;
      model.scale.setScalar(VAN_SCALE);
      model.rotation.y = Math.PI; // face forward (+Z)

      model.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        child.castShadow = true;
        child.receiveShadow = true;
        const name = (child.material as THREE.Material)?.name ?? '';

        if (name === 'windows') {
          child.material = new THREE.MeshPhysicalMaterial({
            color: 0x88aacc,
            transmission: 0.85,
            roughness: 0.05,
            metalness: 0.1,
            ior: 1.45,
            transparent: true,
            opacity: 0.25,
          });
        } else if (name === 'headlights') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffdd,
            emissive: 0xffffdd,
            emissiveIntensity: 1.0,
          });
        } else if (name === 'rear_lights') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xff2200,
            emissive: 0xff2200,
            emissiveIntensity: 1.0,
          });
        } else if (name === 'rim') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x333333, metalness: 0.7, roughness: 0.3,
          });
        } else if (name === 'tire') {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x111111, metalness: 0.0, roughness: 0.9,
          });
        } else {
          // body (body_final or anything else) → jet black
          child.material = new THREE.MeshStandardMaterial({
            color: 0x111111, metalness: 0.4, roughness: 0.3,
          });
        }
      });

      this.bodyGroup.add(model);
    });

    // ── TEM earthy wrap — both sides ─────────────────────────────────────────
    // GLB van at scale 0.85: width 2.40, height 1.96, length 5.07
    // Side face at X = ±1.20; cargo section Z ≈ 0 to +2.5 (after rotation.y=PI)
    const wrapTex = new THREE.TextureLoader().load(`${base}assets/tem_wrap.png`);
    wrapTex.colorSpace = THREE.SRGBColorSpace;
    const wrapMat = new THREE.MeshLambertMaterial({
      map: wrapTex, transparent: false, depthWrite: true,
    });
    const wrapL = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.80), wrapMat);
    wrapL.rotation.y = -Math.PI / 2;
    wrapL.position.set(-1.21, 0.82, 0.5);
    wrapL.renderOrder = 1;
    this.bodyGroup.add(wrapL);

    const wrapTexR = new THREE.TextureLoader().load(`${base}assets/tem_wrap.png`);
    wrapTexR.colorSpace = THREE.SRGBColorSpace;
    wrapTexR.repeat.x = -1; wrapTexR.offset.x = 1;
    const wrapMatR = new THREE.MeshLambertMaterial({
      map: wrapTexR, transparent: false, depthWrite: true,
    });
    const wrapR = new THREE.Mesh(new THREE.PlaneGeometry(2.8, 0.80), wrapMatR);
    wrapR.rotation.y = Math.PI / 2;
    wrapR.position.set(1.21, 0.82, 0.5);
    wrapR.renderOrder = 1;
    this.bodyGroup.add(wrapR);

    // ── TEM roof logo ─────────────────────────────────────────────────────────
    const treeTex = makeTEMRoofTexture(512);
    const treeMat = new THREE.MeshLambertMaterial({
      map: treeTex, transparent: true, depthWrite: false,
    });
    const treePlane = new THREE.Mesh(new THREE.PlaneGeometry(1.8, 3.8), treeMat);
    treePlane.rotation.x = -Math.PI / 2;
    treePlane.position.set(0, 1.98, 0.4);
    treePlane.renderOrder = 2;
    this.bodyGroup.add(treePlane);

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
