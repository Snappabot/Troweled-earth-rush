import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from './CrewCharacter';
import { SpeechBubble } from '../ui/SpeechBubble';

/** TEM tree logo — black tree on white shirt background */
function _makeConnieLogo(): THREE.Texture {
  const cv = document.createElement('canvas');
  cv.width = 256; cv.height = 256;
  const ctx = cv.getContext('2d')!;

  // White shirt background
  ctx.fillStyle = '#F0EDE8';
  ctx.fillRect(0, 0, 256, 256);

  ctx.strokeStyle = '#111111';
  ctx.fillStyle = '#111111';
  ctx.lineCap = 'round';

  // Trunk (thick at base, taper toward top)
  ctx.lineWidth = 10;
  ctx.beginPath(); ctx.moveTo(128, 220); ctx.lineTo(128, 150); ctx.stroke();
  ctx.lineWidth = 6;
  ctx.beginPath(); ctx.moveTo(128, 150); ctx.lineTo(128, 95); ctx.stroke();

  // Branches — pairs radiating out and up
  const branches: [number,number,number,number][] = [
    [128,175, 78,148], [128,175, 178,148],
    [128,158, 68,132], [128,158, 188,132],
    [128,140, 80,115], [128,140, 176,115],
    [128,122, 90,98],  [128,122, 166,98],
    [128,108, 100,84], [128,108, 156,84],
    [128,97,  112,70], [128,97,  144,70],
    [128,88,  120,58], [128,88,  136,58],
  ];

  ctx.lineWidth = 4;
  for (const [x1,y1,x2,y2] of branches) {
    ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    // Dot at branch tip
    ctx.beginPath(); ctx.arc(x2, y2, 4.5, 0, Math.PI*2); ctx.fill();
  }

  return new THREE.CanvasTexture(cv);
}

// Out the front of the factory/workshop (workshop is at 10,15)
const POS = { x: -4, z: -6 };

const DIALOGUE: string[] = [
  "Ha ha ha HA HA! You picked up ze buckets! Love it!",
  "I mix ze plaster by hand. Za gloves are for ze weak.",
  "In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.",
  "I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.",
  "Ze mixing ratio is one part water, two parts product, one part pure power.",
  "Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.",
  "Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.",
  "Ha HA! You are funny. Not as funny as ze last guy. But funny.",
];

export class Connie {
  static readonly POS = POS;
  static readonly TRIGGER_RADIUS = 16;

  private wrapper: THREE.Group;
  private character: CrewCharacter;
  private lastDialogue = 0;
  private readonly cooldown = 10_000;
  private audioCtx: AudioContext | null = null;

  constructor(scene: THREE.Scene) {
    this.character = new CrewCharacter(CREW_CONFIGS['Connie']);

    // Tall — scale slightly taller than crew
    this.character.group.scale.set(2.0, 2.35, 2.0);

    // ── Extra chest geometry — placed on front (+z) of torso ──
    // Spine world y ≈ 1.55 local; character front is +z
    const bustMat = new THREE.MeshLambertMaterial({ color: 0xF0EDE8 });
    const bustL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), bustMat);
    bustL.position.set(-0.12, 1.55, 0.19);
    const bustR = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), bustMat);
    bustR.position.set( 0.12, 1.55, 0.19);
    this.character.group.add(bustL);
    this.character.group.add(bustR);

    // ── TEM tree logo on shirt (black tree on white, matching van/HQ logo) ──
    this.character.setLogoTexture(_makeConnieLogo());

    // ── Name billboard — golden background ──
    const nameBoard = this._makeNameBoard();
    nameBoard.position.set(0, 8.8, 0);

    // ── Gold ring underfoot ──
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.2, 1.7, 32),
      new THREE.MeshBasicMaterial({ color: 0xF5D060, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;

    this.wrapper = new THREE.Group();
    this.wrapper.add(this.character.group);
    this.wrapper.add(nameBoard);
    this.wrapper.add(ring);
    this.wrapper.position.set(POS.x, 0, POS.z);
    scene.add(this.wrapper);
  }

  private _makeNameBoard(): THREE.Mesh {
    const cv = document.createElement('canvas');
    cv.width = 256; cv.height = 64;
    const ctx = cv.getContext('2d')!;
    ctx.fillStyle = 'rgba(200, 150, 20, 0.88)';
    if ((ctx as any).roundRect) { (ctx as any).roundRect(2, 2, 252, 60, 8); }
    else { ctx.rect(2, 2, 252, 60); }
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('CONNIE', 128, 32);
    return new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.6),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false })
    );
  }

  /** Play a hysterical synthetic laugh using Web Audio API */
  playLaugh(): void {
    try {
      if (!this.audioCtx) {
        this.audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = this.audioCtx;
      const laughCount = 7;

      for (let i = 0; i < laughCount; i++) {
        const t = ctx.currentTime + i * 0.16;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Pitch variation per laugh — hysterical escalating sound
        const pitchBase = 480 + i * 18 + Math.random() * 60;
        osc.frequency.setValueAtTime(pitchBase, t);
        osc.frequency.exponentialRampToValueAtTime(pitchBase * 0.48, t + 0.13);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.35, t + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(t);
        osc.stop(t + 0.17);
      }
    } catch (_) {
      // Audio unavailable — silent fail
    }
  }

  update(
    dt: number,
    vanX: number, vanZ: number,
    speechBubble: SpeechBubble
  ): boolean {
    this.character.update(dt);

    // Face the van
    const dx = vanX - POS.x;
    const dz = vanZ - POS.z;
    this.character.group.rotation.y = Math.atan2(dx, dz);

    // Proximity dialogue
    const dist = Math.sqrt(dx * dx + dz * dz);
    const now = Date.now();
    if (dist < Connie.TRIGGER_RADIUS && now - this.lastDialogue > this.cooldown) {
      const line = DIALOGUE[Math.floor(Math.random() * DIALOGUE.length)];
      speechBubble.show(CREW_CONFIGS['Connie'], line);
      this.lastDialogue = now;
      return true;
    }
    return false;
  }

  dispose(scene: THREE.Scene): void {
    scene.remove(this.wrapper);
    this.audioCtx?.close();
  }
}
