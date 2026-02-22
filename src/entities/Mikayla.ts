import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from './CrewCharacter';
import { SpeechBubble } from '../ui/SpeechBubble';

// Just outside workshop trigger radius (workshop at 10,15 — triggerRadius 18)
const POS = { x: 30, z: 28 };

const DIALOGUE: string[] = [
  "Got a dollar, mate? 💸",
  "You got a light? 🚬",
  "Nice van. Does it leak?",
  "You heading to the coffee shop? ☕",
  "These boots were not made for plastering. Yet here we are.",
  "Jump in? No seriously, I need a lift.",
  "Phil owes me fifty bucks. Pass it on.",
  "I timed my jumps to the Tadelakt dry time. Six hours. That's a lot of jumps.",
  "You look like you need a coffee and a toilet. In that order.",
  "Matt left the primer lid off again. Just letting you know.",
  "I plastered that wall. Don't tell anyone it was me.",
];

export class Mikayla {
  static readonly POS = POS;
  static readonly TRIGGER_RADIUS = 15;

  private wrapper: THREE.Group;
  private character: CrewCharacter;
  private ropeRing: THREE.Mesh;
  private ropePivot: THREE.Group;
  private lastDialogue = 0;
  private readonly cooldown = 9000; // ms between lines

  constructor(scene: THREE.Scene) {
    this.character = new CrewCharacter(CREW_CONFIGS['Mikayla']);
    this.character.group.scale.set(2, 2, 2);

    // ── Jump rope animation ──
    const jumpClip = this.character.buildJumpRopeClip();
    // Stop the default idle, play jump rope
    this.character.mixer.stopAllAction();
    this.character.mixer.clipAction(jumpClip).play();

    // ── Rope prop ──────────────────────────────────────────────────────────────
    // Pivot at mid-body (y=1.3 local = 2.6 world after ×2 scale)
    // Torus radius 1.35 → arcs from y≈0 (under feet) to y≈2.6 (over head)
    // pivot.rotation.y = PI/2 → ring sits in the YZ plane (goes front-to-back)
    // Spinning the torus around its own Z axis sweeps it front-to-back over her
    this.ropePivot = new THREE.Group();
    this.ropePivot.position.set(0, 1.3, 0);
    this.ropePivot.rotation.y = Math.PI / 2;
    this.character.group.add(this.ropePivot);

    this.ropeRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.35, 0.05, 7, 28),
      new THREE.MeshLambertMaterial({ color: 0x7B4A1E })
    );
    this.ropePivot.add(this.ropeRing);

    // ── Name billboard — pink background ──
    const nameBoard = this._makeNameBoard();
    nameBoard.position.set(0, 8.8, 0);

    // ── Pink ring underfoot ──
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(1.2, 1.7, 32),
      new THREE.MeshBasicMaterial({ color: 0xDD4488, side: THREE.DoubleSide })
    );
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.05;

    // ── Assemble wrapper ──
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
    ctx.fillStyle = 'rgba(190, 40, 90, 0.88)';
    if ((ctx as any).roundRect) {
      (ctx as any).roundRect(2, 2, 252, 60, 8);
    } else {
      ctx.rect(2, 2, 252, 60);
    }
    ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 30px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('MIKAYLA', 128, 32);
    const tex = new THREE.CanvasTexture(cv);
    return new THREE.Mesh(
      new THREE.PlaneGeometry(2.4, 0.6),
      new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
    );
  }

  update(
    dt: number,
    vanX: number, vanZ: number,
    speechBubble: SpeechBubble
  ): void {
    // Animation tick
    this.character.update(dt);

    // Spin rope around pivot's Z axis — sweeps front-to-back over her head like a jump rope
    this.ropeRing.rotation.z += dt * Math.PI * 2.2;

    // Always face the van
    const dx = vanX - POS.x;
    const dz = vanZ - POS.z;
    this.character.group.rotation.y = Math.atan2(dx, dz);

    // Proximity dialogue — speech bubble
    const dist = Math.sqrt(dx * dx + dz * dz);
    const now = Date.now();
    if (dist < Mikayla.TRIGGER_RADIUS && now - this.lastDialogue > this.cooldown) {
      const line = DIALOGUE[Math.floor(Math.random() * DIALOGUE.length)];
      speechBubble.show(CREW_CONFIGS['Mikayla'], line);
      this.lastDialogue = now;
    }
  }

  dispose(scene: THREE.Scene): void {
    scene.remove(this.wrapper);
  }
}
