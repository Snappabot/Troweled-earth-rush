import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from './CrewCharacter';
// Just outside workshop trigger radius (workshop at 10,15 — triggerRadius 18)
const POS = { x: 30, z: 28 };
const DIALOGUE = [
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
    static POS = POS;
    static TRIGGER_RADIUS = 15;
    wrapper;
    character;
    ropeRing;
    lastDialogue = 0;
    cooldown = 9000; // ms between lines
    constructor(scene) {
        this.character = new CrewCharacter(CREW_CONFIGS['Mikayla']);
        this.character.group.scale.set(2, 2, 2);
        // ── Jump rope animation ──
        const jumpClip = this.character.buildJumpRopeClip();
        // Stop the default idle, play jump rope
        this.character.mixer.stopAllAction();
        this.character.mixer.clipAction(jumpClip).play();
        // ── Rope prop — torus spinning above head in local space ──
        this.ropeRing = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.045, 7, 24), new THREE.MeshLambertMaterial({ color: 0x7B4A1E }));
        // y=3.0 in local (×2 scale = 6.0 world) — above her head
        this.ropeRing.position.set(0, 3.0, 0);
        this.character.group.add(this.ropeRing);
        // ── Name billboard — pink background ──
        const nameBoard = this._makeNameBoard();
        nameBoard.position.set(0, 8.8, 0);
        // ── Pink ring underfoot ──
        const ring = new THREE.Mesh(new THREE.RingGeometry(1.2, 1.7, 32), new THREE.MeshBasicMaterial({ color: 0xDD4488, side: THREE.DoubleSide }));
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
    _makeNameBoard() {
        const cv = document.createElement('canvas');
        cv.width = 256;
        cv.height = 64;
        const ctx = cv.getContext('2d');
        ctx.fillStyle = 'rgba(190, 40, 90, 0.88)';
        if (ctx.roundRect) {
            ctx.roundRect(2, 2, 252, 60, 8);
        }
        else {
            ctx.rect(2, 2, 252, 60);
        }
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('MIKAYLA', 128, 32);
        const tex = new THREE.CanvasTexture(cv);
        return new THREE.Mesh(new THREE.PlaneGeometry(2.4, 0.6), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
    }
    update(dt, vanX, vanZ, showToast) {
        // Animation tick
        this.character.update(dt);
        // Spin rope — ~1.6 rotations/sec (feels like real jump rope pace)
        this.ropeRing.rotation.z += dt * Math.PI * 3.2;
        // Always face the van
        const dx = vanX - POS.x;
        const dz = vanZ - POS.z;
        this.character.group.rotation.y = Math.atan2(dx, dz);
        // Proximity dialogue
        const dist = Math.sqrt(dx * dx + dz * dz);
        const now = Date.now();
        if (dist < Mikayla.TRIGGER_RADIUS && now - this.lastDialogue > this.cooldown) {
            const line = DIALOGUE[Math.floor(Math.random() * DIALOGUE.length)];
            showToast(`💗 Mikayla: "${line}"`, 0xCC3377);
            this.lastDialogue = now;
        }
    }
    dispose(scene) {
        scene.remove(this.wrapper);
    }
}
