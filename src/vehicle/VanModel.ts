import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { makeTEMRoofTexture } from '../utils/LogoLoader';
import { TextureLoader } from 'three';

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

    // ── Fallback procedural van (always visible) ──────────────────────────────
    const fallback = new THREE.Group();
    fallback.name = 'fallback_van';

    const cargoMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 3.2), cargoMat);
    cargo.position.set(0, 0.8, 0.8);
    cargo.castShadow = true; cargo.receiveShadow = true;
    fallback.add(cargo);

    const cabMat = new THREE.MeshLambertMaterial({ color: 0x181818 });
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 1.6), cabMat);
    cab.position.set(0, 0.7, -1.6);
    cab.castShadow = true; cab.receiveShadow = true;
    fallback.add(cab);

    const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
    const ws = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 0.1), wsMat);
    ws.rotation.x = -0.18;
    ws.position.set(0, 1.15, -2.36);
    fallback.add(ws);

    const roofMat = new THREE.MeshLambertMaterial({ color: 0x151515 });
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.15, 4.6), roofMat);
    roof.position.set(0, 1.675, 0);
    fallback.add(roof);

    // TEM earthy wrap on side panels
    const wrapTex = new TextureLoader().load(`${import.meta.env.BASE_URL as string}assets/tem_wrap.png`);
    wrapTex.flipY = false;
    const wrapMat = new THREE.MeshLambertMaterial({ map: wrapTex });
    const wrapL = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.82), wrapMat);
    wrapL.rotation.y = -Math.PI / 2;
    wrapL.position.set(-1.23, 1.0, 0.5);
    fallback.add(wrapL);

    const wrapTexR = new TextureLoader().load(`${import.meta.env.BASE_URL as string}assets/tem_wrap.png`);
    wrapTexR.flipY = false;
    wrapTexR.repeat.x = -1; wrapTexR.offset.x = 1;
    const wrapMatR = new THREE.MeshLambertMaterial({ map: wrapTexR });
    const wrapR = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.82), wrapMatR);
    wrapR.rotation.y = Math.PI / 2;
    wrapR.position.set(1.23, 1.0, 0.5);
    fallback.add(wrapR);

    const winMat = new THREE.MeshLambertMaterial({ color: 0x334455 });
    for (const [sx, sz] of [[-1.22, -1.7], [1.22, -1.7]]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), winMat);
      win.position.set(sx, 1.1, sz);
      fallback.add(win);
    }

    const seamMat = new THREE.MeshLambertMaterial({ color: 0x080808 });
    for (const [sx] of [[-1.22], [1.22]]) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 0.05), seamMat);
      s.position.set(sx, 0.8, -0.8);
      fallback.add(s);
    }

    const treeTex = makeTEMRoofTexture(512);
    const treeMat = new THREE.MeshLambertMaterial({ map: treeTex, transparent: true, depthWrite: false });
    const treePlane = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 3.8), treeMat);
    treePlane.rotation.x = -Math.PI / 2;
    treePlane.position.set(0, 1.80, 0.9);
    fallback.add(treePlane);

    const handleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    for (const hx of [-0.6, 0.6]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.14), handleMat);
      h.position.set(hx, 0.85, 2.52);
      fallback.add(h);
    }

    // Wheels
    const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 10);
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const hubMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    for (const [wx, wz, side] of [[-1.25, -1.2, -1], [1.25, -1.2, 1], [-1.25, 1.3, -1], [1.25, 1.3, 1]] as [number, number, number][]) {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, 0.38, wz);
      wheel.castShadow = true;
      fallback.add(wheel);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10), hubMat);
      hub.rotation.z = Math.PI / 2;
      hub.position.set(wx + side * 0.15, 0.38, wz);
      fallback.add(hub);
    }

    this.bodyGroup.add(fallback);

    // ── Load GLB — swap in when ready ────────────────────────────────────────
    const base = import.meta.env.BASE_URL as string;
    const loader = new GLTFLoader();
    loader.load(
      `${base}assets/tem_van.glb`,
      (gltf) => {
        const model = gltf.scene;

        // Auto-scale: target width 2.4 units
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        box.getSize(size);
        const scaleFactor = 2.4 / Math.max(size.x, size.z, 0.1);
        model.scale.setScalar(scaleFactor);

        // Centre and ground
        box.setFromObject(model);
        const centre = new THREE.Vector3();
        const scaledSize = new THREE.Vector3();
        box.getCenter(centre);
        box.getSize(scaledSize);
        model.position.x -= centre.x;
        model.position.z -= centre.z;
        model.position.y -= (centre.y - scaledSize.y * 0.5);

        // Face +Z
        model.rotation.y = Math.PI;

        model.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.name === 'wrap_decal') {
            child.renderOrder = 1;
            if (!Array.isArray(child.material)) {
              (child.material as THREE.Material).depthWrite = false;
            }
          } else {
            child.material = new THREE.MeshLambertMaterial({ color: 0x111111 });
          }
        });

        // Swap: hide fallback, show GLB
        fallback.visible = false;
        this.bodyGroup.add(model);
      },
      undefined,
      (err) => console.error('[VanModel] GLB failed:', err)
    );

    // ── Lights (always present) ───────────────────────────────────────────────
    const headMat = new THREE.MeshLambertMaterial({ color: 0xffffdd, emissive: 0xffffdd, emissiveIntensity: 0.8 });
    for (const lx of [-0.8, 0.8]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.2, 0.08), headMat);
      h.position.set(lx, 0.75, -2.41);
      this.bodyGroup.add(h);
    }
    const tailMat = new THREE.MeshLambertMaterial({ color: 0xff2200, emissive: 0xff2200, emissiveIntensity: 0.8 });
    for (const lx of [-0.8, 0.8]) {
      const t = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.18, 0.06), tailMat);
      t.position.set(lx, 0.75, 2.47);
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
