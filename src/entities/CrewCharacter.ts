import * as THREE from 'three';
import { makeTEMShirtTexture } from '../utils/LogoLoader';

/** Shared jump rope cycle duration — rope rotation in Mikayla.ts must match this exactly */
export const JUMP_ROPE_DURATION = 0.9; // seconds per jump cycle

export interface CrewConfig {
  name: string;
  skinColor: number;
  shirtColor: number;
  shirtLogoColor: number;
  pantsColor: number;
  hairColor: number;
  hairStyle: 'short' | 'dreadlocks' | 'mohawk' | 'silver' | 'bun' | 'wildblonde';
  helmetColor?: number;
  glassesColor?: number;
  hiVisBands?: boolean;
}

export const CREW_CONFIGS: Record<string, CrewConfig> = {
  Matt:     { name: 'Matt',     skinColor: 0xD4A880, shirtColor: 0x0A0A0A, shirtLogoColor: 0xFFFFFF, pantsColor: 0x2A2A2A, hairColor: 0x5C3A1E, hairStyle: 'short' },
  Jose:     { name: 'Jose',     skinColor: 0xC49A70, shirtColor: 0x0A0A0A, shirtLogoColor: 0xFFFFFF, pantsColor: 0x2A2A2A, hairColor: 0x0A0A0A, hairStyle: 'dreadlocks' },
  Jarrad:   { name: 'Jarrad',   skinColor: 0xD4A880, shirtColor: 0x0A0A0A, shirtLogoColor: 0xFFFFFF, pantsColor: 0x222230, hairColor: 0x1A1A1A, hairStyle: 'short', glassesColor: 0x222222 },
  Phil:     { name: 'Phil',     skinColor: 0xD4A880, shirtColor: 0xF0EDE8, shirtLogoColor: 0x111111, pantsColor: 0x3A5080, hairColor: 0xC0C0B8, hairStyle: 'silver', glassesColor: 0xA8A8A0 },
  Tsuyoshi: { name: 'Tsuyoshi', skinColor: 0xB88858, shirtColor: 0x0A0A0A, shirtLogoColor: 0xFFFFFF, pantsColor: 0x222220, hairColor: 0x0A0A0A, hairStyle: 'mohawk' },
  Fabio:    { name: 'Fabio',    skinColor: 0xBE8E60, shirtColor: 0x1B7EC4, shirtLogoColor: 0xFFFFFF, pantsColor: 0x282830, hairColor: 0x1A1008, hairStyle: 'bun', glassesColor: 0x2A1A08 },
  Joe:      { name: 'Joe',      skinColor: 0xD4A070, shirtColor: 0xF0C000, shirtLogoColor: 0x1A1A1A, pantsColor: 0x2A2A38, hairColor: 0x3A2A1A, hairStyle: 'short', helmetColor: 0xF5F5F0, hiVisBands: true },
  Mikayla:  { name: 'Mikayla', skinColor: 0xD4A880, shirtColor: 0xF0EDE8, shirtLogoColor: 0x111111, pantsColor: 0x1A1020, hairColor: 0x992244, hairStyle: 'bun' },
  Connie:   { name: 'Connie',  skinColor: 0xE8C898, shirtColor: 0xF0EDE8, shirtLogoColor: 0x111111, pantsColor: 0x2A2A3A, hairColor: 0xF5D060, hairStyle: 'wildblonde' },
};

export class CrewCharacter {
  group: THREE.Group;
  mixer: THREE.AnimationMixer;
  private walkAction!: THREE.AnimationAction;
  private idleAction!: THREE.AnimationAction;
  private currentAction!: THREE.AnimationAction;
  private logoMesh!: THREE.Mesh;

  constructor(config: CrewConfig) {
    this.group = new THREE.Group();
    this._build(config);
    this.mixer = new THREE.AnimationMixer(this.group);
    const walkClip = this._buildWalkClip();
    const idleClip = this._buildIdleClip();
    this.walkAction = this.mixer.clipAction(walkClip);
    this.idleAction = this.mixer.clipAction(idleClip);
    this.idleAction.play();
    this.currentAction = this.idleAction;
  }

  private _build(cfg: CrewConfig): void {
    // ── Bone hierarchy ──
    const hip = new THREE.Bone(); hip.name = 'Hip'; hip.position.set(0, 1.0, 0);
    const spine = new THREE.Bone(); spine.name = 'Spine'; spine.position.set(0, 0.55, 0);
    const head = new THREE.Bone(); head.name = 'Head'; head.position.set(0, 0.65, 0);
    const lShoulder = new THREE.Bone(); lShoulder.name = 'LShoulder'; lShoulder.position.set(-0.40, 0.38, 0);
    const lForeArm = new THREE.Bone(); lForeArm.name = 'LForeArm'; lForeArm.position.set(0, -0.36, 0);
    const rShoulder = new THREE.Bone(); rShoulder.name = 'RShoulder'; rShoulder.position.set(0.40, 0.38, 0);
    const rForeArm = new THREE.Bone(); rForeArm.name = 'RForeArm'; rForeArm.position.set(0, -0.36, 0);
    const lHip = new THREE.Bone(); lHip.name = 'LHip'; lHip.position.set(-0.16, -0.05, 0);
    const lKnee = new THREE.Bone(); lKnee.name = 'LKnee'; lKnee.position.set(0, -0.50, 0);
    const rHip = new THREE.Bone(); rHip.name = 'RHip'; rHip.position.set(0.16, -0.05, 0);
    const rKnee = new THREE.Bone(); rKnee.name = 'RKnee'; rKnee.position.set(0, -0.50, 0);

    hip.add(spine);
    spine.add(head);
    spine.add(lShoulder); lShoulder.add(lForeArm);
    spine.add(rShoulder); rShoulder.add(rForeArm);
    hip.add(lHip); lHip.add(lKnee);
    hip.add(rHip); rHip.add(rKnee);
    this.group.add(hip);

    const mat = (c: number) => new THREE.MeshLambertMaterial({ color: c });
    const addBox = (b: THREE.Bone, c: number, w: number, h: number, d: number, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c));
      m.position.set(x, y, z); m.castShadow = true; b.add(m);
    };
    const addCyl = (b: THREE.Bone, c: number, r: number, h: number, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 8), mat(c));
      m.position.set(x, y, z); m.castShadow = true; b.add(m);
    };
    const addSphere = (b: THREE.Bone, c: number, r: number, x = 0, y = 0, z = 0) => {
      const m = new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), mat(c));
      m.position.set(x, y, z); m.castShadow = true; b.add(m);
    };

    // Torso
    addBox(spine, cfg.shirtColor, 0.50, 0.56, 0.28, 0, 0.02, 0);
    if (cfg.hiVisBands) {
      addBox(spine, 0xFFFFFF, 0.52, 0.06, 0.30, 0, 0.18, 0);
      addBox(spine, 0xFFFFFF, 0.52, 0.06, 0.30, 0, -0.10, 0);
    }

    // Logo panel
    const logoTex = this._makeLogo(cfg);
    const lp = new THREE.Mesh(
      new THREE.PlaneGeometry(0.44, 0.50),
      new THREE.MeshBasicMaterial({ map: logoTex, transparent: true, depthWrite: false })
    );
    lp.position.set(0, 0.02, 0.145); spine.add(lp);
    this.logoMesh = lp;

    // Pelvis
    addBox(hip, cfg.pantsColor, 0.44, 0.20, 0.26, 0, 0, 0);

    // Upper arms
    addCyl(lShoulder, cfg.shirtColor, 0.08, 0.34, 0, -0.17, 0);
    addCyl(rShoulder, cfg.shirtColor, 0.08, 0.34, 0, -0.17, 0);
    if (cfg.hiVisBands) {
      addBox(lShoulder, 0xFFFFFF, 0.18, 0.06, 0.18, 0, -0.10, 0);
      addBox(rShoulder, 0xFFFFFF, 0.18, 0.06, 0.18, 0, -0.10, 0);
    }

    // Forearms + hands
    addCyl(lForeArm, cfg.skinColor, 0.07, 0.30, 0, -0.15, 0);
    addCyl(rForeArm, cfg.skinColor, 0.07, 0.30, 0, -0.15, 0);
    addBox(lForeArm, cfg.skinColor, 0.13, 0.11, 0.09, 0, -0.32, 0);
    addBox(rForeArm, cfg.skinColor, 0.13, 0.11, 0.09, 0, -0.32, 0);

    // Upper legs
    addCyl(lHip, cfg.pantsColor, 0.11, 0.46, 0, -0.23, 0);
    addCyl(rHip, cfg.pantsColor, 0.11, 0.46, 0, -0.23, 0);

    // Lower legs + boots
    addCyl(lKnee, cfg.pantsColor, 0.09, 0.42, 0, -0.21, 0);
    addCyl(rKnee, cfg.pantsColor, 0.09, 0.42, 0, -0.21, 0);
    addBox(lKnee, 0x1A1A18, 0.19, 0.12, 0.24, 0, -0.46, 0.03);
    addBox(rKnee, 0x1A1A18, 0.19, 0.12, 0.24, 0, -0.46, 0.03);

    // Neck + head
    addCyl(head, cfg.skinColor, 0.09, 0.16, 0, -0.08, 0);
    addSphere(head, cfg.skinColor, 0.21, 0, 0.10, 0);
    // Eyes
    addBox(head, 0x222222, 0.055, 0.035, 0.02, -0.07, 0.12, 0.20);
    addBox(head, 0x222222, 0.055, 0.035, 0.02,  0.07, 0.12, 0.20);

    // Hair
    this._buildHair(head, cfg, mat);

    // Glasses
    if (cfg.glassesColor !== undefined) {
      addBox(head, cfg.glassesColor, 0.24, 0.055, 0.015, 0, 0.12, 0.21);
    }

    // Helmet
    if (cfg.helmetColor !== undefined) {
      addBox(head, cfg.helmetColor, 0.50, 0.07, 0.50, 0, 0.25, -0.01);
      addBox(head, cfg.helmetColor, 0.38, 0.18, 0.38, 0, 0.34, -0.01);
    }
  }

  private _buildHair(head: THREE.Bone, cfg: CrewConfig, mat: (c: number) => THREE.MeshLambertMaterial): void {
    const hm = mat(cfg.hairColor);
    const add = (geo: THREE.BufferGeometry, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(geo, hm); m.position.set(x, y, z); head.add(m);
    };
    switch (cfg.hairStyle) {
      case 'short':
      case 'silver':
        add(new THREE.SphereGeometry(0.215, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.5), 0, 0.10, 0);
        if (cfg.hairStyle === 'silver') {
          add(new THREE.BoxGeometry(0.11, 0.18, 0.13), -0.19, 0.06, 0);
          add(new THREE.BoxGeometry(0.11, 0.18, 0.13),  0.19, 0.06, 0);
        }
        break;
      case 'dreadlocks':
        add(new THREE.SphereGeometry(0.215, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.5), 0, 0.10, 0);
        for (const [ox, oz] of [[-0.12, 0], [0.12, 0], [0, -0.16], [-0.08, -0.10], [0.08, -0.10]]) {
          add(new THREE.CylinderGeometry(0.035, 0.022, 0.38, 6), ox, -0.07, oz as number);
        }
        break;
      case 'mohawk':
        add(new THREE.BoxGeometry(0.09, 0.26, 0.40), 0, 0.28, 0);
        break;
      case 'bun':
        add(new THREE.SphereGeometry(0.215, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.5), 0, 0.10, 0);
        add(new THREE.SphereGeometry(0.09, 7, 6), 0, 0.05, -0.19);
        break;
      case 'wildblonde': {
        // Cap
        add(new THREE.SphereGeometry(0.225, 8, 5, 0, Math.PI * 2, 0, Math.PI * 0.55), 0, 0.10, 0);
        // Long wild strands — flowing outward and downward
        const strandData: [number, number, number, number, number][] = [
          [-0.20, -0.18,  0.04,  0.30, 0],    // left
          [ 0.20, -0.18,  0.04, -0.30, 0],    // right
          [-0.14, -0.22, -0.14,  0.20, 0.15], // back-left
          [ 0.14, -0.22, -0.14, -0.20, 0.15], // back-right
          [ 0.00, -0.26, -0.18,  0.00, 0],    // back-centre
          [-0.10, -0.16,  0.16, -0.15, 0],    // front-left
          [ 0.10, -0.16,  0.16,  0.15, 0],    // front-right
        ];
        for (const [sx, sy, sz, rz, rx] of strandData) {
          const strand = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.020, 0.50, 5), hm);
          strand.position.set(sx, sy, sz);
          strand.rotation.z = rz;
          strand.rotation.x = rx;
          head.add(strand);
        }
        break;
      }
    }
  }

  /** Replace the shirt logo texture after construction */
  setLogoTexture(tex: THREE.Texture): void {
    const mat = this.logoMesh.material as THREE.MeshBasicMaterial;
    mat.map = tex;
    mat.needsUpdate = true;
  }

  private _makeLogo(cfg: CrewConfig): THREE.Texture {
    // Use the preloaded real TEM logo — matches shirtColor automatically
    return makeTEMShirtTexture(cfg.shirtColor);
  }

  private _buildWalkClip(): THREE.AnimationClip {
    const D = Math.PI / 180;
    const dur = 0.8;
    const t = [0, 0.2, 0.4, 0.6, 0.8];
    const q = (rx: number, ry = 0, rz = 0) =>
      Array.from(new THREE.Quaternion().setFromEuler(new THREE.Euler(rx*D, ry*D, rz*D)).toArray());

    return new THREE.AnimationClip('walk', dur, [
      new THREE.QuaternionKeyframeTrack('LHip.quaternion', t, [...q(-35),...q(0),...q(35),...q(0),...q(-35)]),
      new THREE.QuaternionKeyframeTrack('RHip.quaternion', t, [...q(35),...q(0),...q(-35),...q(0),...q(35)]),
      new THREE.QuaternionKeyframeTrack('LKnee.quaternion', t, [...q(-5),...q(-18),...q(-28),...q(-12),...q(-5)]),
      new THREE.QuaternionKeyframeTrack('RKnee.quaternion', t, [...q(-28),...q(-12),...q(-5),...q(-18),...q(-28)]),
      new THREE.QuaternionKeyframeTrack('LShoulder.quaternion', t, [...q(28,0,8),...q(0,0,8),...q(-28,0,8),...q(0,0,8),...q(28,0,8)]),
      new THREE.QuaternionKeyframeTrack('RShoulder.quaternion', t, [...q(-28,0,-8),...q(0,0,-8),...q(28,0,-8),...q(0,0,-8),...q(-28,0,-8)]),
      new THREE.QuaternionKeyframeTrack('Hip.quaternion', t, [...q(0,0,4),...q(0,0,0),...q(0,0,-4),...q(0,0,0),...q(0,0,4)]),
      new THREE.VectorKeyframeTrack('Hip.position', t, [0,1.02,0, 0,1.00,0, 0,1.02,0, 0,1.00,0, 0,1.02,0]),
    ]);
  }

  private _buildIdleClip(): THREE.AnimationClip {
    const D = Math.PI / 180;
    const dur = 2.4;
    const t = [0, 0.6, 1.2, 1.8, 2.4];
    const q = (rx: number, ry = 0, rz = 0) =>
      Array.from(new THREE.Quaternion().setFromEuler(new THREE.Euler(rx*D, ry*D, rz*D)).toArray());

    return new THREE.AnimationClip('idle', dur, [
      new THREE.QuaternionKeyframeTrack('Spine.quaternion', t, [...q(0,0,1),...q(0,0,0),...q(0,0,-1),...q(0,0,0),...q(0,0,1)]),
      new THREE.VectorKeyframeTrack('Hip.position', t, [0,1.00,0, 0,1.01,0, 0,1.00,0, 0,0.99,0, 0,1.00,0]),
      new THREE.QuaternionKeyframeTrack('LShoulder.quaternion', [0,2.4], [...q(0,0,8),...q(0,0,8)]),
      new THREE.QuaternionKeyframeTrack('RShoulder.quaternion', [0,2.4], [...q(0,0,-8),...q(0,0,-8)]),
    ]);
  }

  /** Jump rope animation — bouncing with arms out holding rope */
  buildJumpRopeClip(): THREE.AnimationClip {
    const D = Math.PI / 180;
    const dur = JUMP_ROPE_DURATION;
    const t = [0, 0.225, 0.45, 0.675, 0.9];
    const q = (rx: number, ry = 0, rz = 0) =>
      Array.from(new THREE.Quaternion().setFromEuler(new THREE.Euler(rx * D, ry * D, rz * D)).toArray());

    return new THREE.AnimationClip('jumprope', dur, [
      // Bounce up and down — generous height so it reads clearly at game scale
      new THREE.VectorKeyframeTrack('Hip.position', t, [
        0, 1.00, 0,
        0, 1.28, 0,
        0, 1.00, 0,
        0, 1.28, 0,
        0, 1.00, 0,
      ]),
      // Arms out to sides, slightly raised — holding rope handles
      new THREE.QuaternionKeyframeTrack('LShoulder.quaternion', [0, 0.5], [...q(0, 0, 52), ...q(0, 0, 52)]),
      new THREE.QuaternionKeyframeTrack('RShoulder.quaternion', [0, 0.5], [...q(0, 0, -52), ...q(0, 0, -52)]),
      // Slight forearm droop (holding handles down)
      new THREE.QuaternionKeyframeTrack('LForeArm.quaternion', [0, 0.5], [...q(-20), ...q(-20)]),
      new THREE.QuaternionKeyframeTrack('RForeArm.quaternion', [0, 0.5], [...q(-20), ...q(-20)]),
      // Knee flex on landing, extend on jump
      new THREE.QuaternionKeyframeTrack('LKnee.quaternion', t, [
        ...q(-22), ...q(-5), ...q(-22), ...q(-5), ...q(-22),
      ]),
      new THREE.QuaternionKeyframeTrack('RKnee.quaternion', t, [
        ...q(-22), ...q(-5), ...q(-22), ...q(-5), ...q(-22),
      ]),
      // Slight forward lean on each land
      new THREE.QuaternionKeyframeTrack('Spine.quaternion', t, [
        ...q(8), ...q(2), ...q(8), ...q(2), ...q(8),
      ]),
    ]);
  }

  setWalking(walking: boolean): void {
    const next = walking ? this.walkAction : this.idleAction;
    if (next === this.currentAction) return;
    next.reset().play();
    this.currentAction.crossFadeTo(next, 0.2, false);
    this.currentAction = next;
  }

  update(dt: number): void {
    this.mixer.update(dt);
  }
}
