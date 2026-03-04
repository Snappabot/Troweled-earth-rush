import * as THREE from 'three';
import { makeTEMRoofTexture } from '../utils/LogoLoader';

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

    // ── Body ──────────────────────────────────────────────────────────────────
    const cargoMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const cargo = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.6, 3.2), cargoMat);
    cargo.position.set(0, 0.8, 0.8);
    cargo.castShadow = true; cargo.receiveShadow = true;
    this.bodyGroup.add(cargo);

    const cabMat = new THREE.MeshLambertMaterial({ color: 0x181818 });
    const cab = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.4, 1.6), cabMat);
    cab.position.set(0, 0.7, -1.6);
    cab.castShadow = true; cab.receiveShadow = true;
    this.bodyGroup.add(cab);

    const wsMat = new THREE.MeshLambertMaterial({ color: 0x223344 });
    const ws = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.0, 0.1), wsMat);
    ws.rotation.x = -0.18;
    ws.position.set(0, 1.15, -2.36);
    this.bodyGroup.add(ws);

    const roofMat = new THREE.MeshLambertMaterial({ color: 0x151515 });
    const roof = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.15, 4.6), roofMat);
    roof.position.set(0, 1.675, 0);
    roof.castShadow = true; roof.receiveShadow = true;
    this.bodyGroup.add(roof);

    // ── TEM earthy wrap — both sides ─────────────────────────────────────────
    const wrapTex = new THREE.TextureLoader().load(`${base}assets/tem_wrap.png`);
    const wrapMat = new THREE.MeshLambertMaterial({ map: wrapTex });
    const wrapL = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.82), wrapMat);
    wrapL.rotation.y = -Math.PI / 2;
    wrapL.position.set(-1.23, 1.0, 0.5);
    this.bodyGroup.add(wrapL);

    const wrapTexR = new THREE.TextureLoader().load(`${base}assets/tem_wrap.png`);
    wrapTexR.repeat.x = -1; wrapTexR.offset.x = 1;
    const wrapMatR = new THREE.MeshLambertMaterial({ map: wrapTexR });
    const wrapR = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 0.82), wrapMatR);
    wrapR.rotation.y = Math.PI / 2;
    wrapR.position.set(1.23, 1.0, 0.5);
    this.bodyGroup.add(wrapR);

    // ── Windows ───────────────────────────────────────────────────────────────
    const winMat = new THREE.MeshLambertMaterial({ color: 0x334455 });
    for (const [sx] of [[-1.22], [1.22]]) {
      const win = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.4, 0.5), winMat);
      win.position.set(sx, 1.1, -1.7);
      this.bodyGroup.add(win);
    }

    // ── Seams ─────────────────────────────────────────────────────────────────
    const seamMat = new THREE.MeshLambertMaterial({ color: 0x080808 });
    for (const sx of [-1.22, 1.22]) {
      const s = new THREE.Mesh(new THREE.BoxGeometry(0.04, 1.6, 0.05), seamMat);
      s.position.set(sx, 0.8, -0.8);
      this.bodyGroup.add(s);
    }

    // ── Rear door details ─────────────────────────────────────────────────────
    const doorMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    for (const dx of [-0.3, 0.3]) {
      const d = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.4, 0.1), doorMat);
      d.position.set(dx, 0.8, 2.46);
      this.bodyGroup.add(d);
    }
    const handleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    for (const hx of [-0.6, 0.6]) {
      const h = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.14), handleMat);
      h.position.set(hx, 0.85, 2.52);
      this.bodyGroup.add(h);
    }

    // ── TEM roof logo ─────────────────────────────────────────────────────────
    const treeTex = makeTEMRoofTexture(512);
    const treeMat = new THREE.MeshLambertMaterial({ map: treeTex, transparent: true, depthWrite: false });
    const treePlane = new THREE.Mesh(new THREE.PlaneGeometry(2.0, 3.8), treeMat);
    treePlane.rotation.x = -Math.PI / 2;
    treePlane.position.set(0, 1.80, 0.9);
    this.bodyGroup.add(treePlane);

    // ── Roof rack ─────────────────────────────────────────────────────────────
    const rackMat = new THREE.MeshLambertMaterial({ color: 0x333333 });
    for (const rz of [-0.15, -0.85]) {
      const bar = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.07, 0.07), rackMat);
      bar.position.set(0, 1.78, rz);
      this.bodyGroup.add(bar);
    }

    // ── Mirrors ───────────────────────────────────────────────────────────────
    const mirrorMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    for (const side of [-1, 1]) {
      const m = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.22), mirrorMat);
      m.position.set(side * 1.3, 1.1, -1.7);
      this.bodyGroup.add(m);
    }

    // ── Wheels ────────────────────────────────────────────────────────────────
    const wheelGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.28, 10);
    const wheelMat = new THREE.MeshLambertMaterial({ color: 0x111111 });
    const hubMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    for (const [wx, wz, side] of [[-1.25,-1.2,-1],[1.25,-1.2,1],[-1.25,1.3,-1],[1.25,1.3,1]] as [number,number,number][]) {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(wx, 0.38, wz);
      wheel.castShadow = true;
      this.mesh.add(wheel);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.06, 10), hubMat);
      hub.rotation.z = Math.PI / 2;
      hub.position.set(wx + side * 0.15, 0.38, wz);
      this.mesh.add(hub);
    }

    // ── Lights ────────────────────────────────────────────────────────────────
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
