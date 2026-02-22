/**
 * ScaffoldGame — 3D side-scrolling platformer (Three.js)
 * Mario-style: double jump, pole climbing, scaffold bar swings
 * Player: Jarrad (CrewCharacter) climbing a Melbourne terrace scaffold
 */
import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from '../entities/CrewCharacter';
// ── World constants ───────────────────────────────────────────────────────────
const FLOOR_H = 7; // vertical distance between scaffold floors
const N_FLOORS = 5; // number of scaffold floors above ground
const GOAL_Y = N_FLOORS * FLOOR_H;
const POLE_XS = [-6, 6]; // vertical scaffold poles
// ── Physics ───────────────────────────────────────────────────────────────────
const GRAVITY = 26; // units/s²
const WALK_SPD = 5; // units/s horizontal
const JUMP1 = 13; // first jump upward velocity
const JUMP2 = 11; // double jump (longer, floatier)
const CLIMB_SPD = 3.5; // units/s on pole
const MAX_FALL = -30; // terminal velocity
// Player AABB half-extents
const PW = 0.4; // half-width
const PH = 2.1; // full height (feet to top)
export class ScaffoldGame {
    overlay;
    renderer;
    scene;
    camera;
    rafId = 0;
    lastTs = 0;
    // Player state
    px = 0;
    py = 0; // position (feet centre)
    vx = 0;
    vy = 0; // velocity
    onGround = false;
    jumpsLeft = 2;
    // Climbing
    climbPole = null;
    // Swinging (pendulum)
    swingBar = null;
    swingAngle = 0; // radians from vertical
    swingOmega = 0; // angular velocity rad/s
    // Character
    char;
    charGroup;
    facingRight = true;
    // Level
    platforms = [];
    poles = [];
    swingBars = [];
    // HUD
    heartsEl;
    timerEl;
    // Game state
    lives = 3;
    timer = 90;
    gameOver = false;
    delivered = false;
    // Input
    keys = { left: false, right: false, up: false, down: false };
    jumpTap = false; // single-frame edge: true on tap
    onCompleteFn;
    // ── Entry point ────────────────────────────────────────────────────────────
    start(onComplete) {
        this.onCompleteFn = onComplete;
        this._createOverlay();
        this._createScene();
        this._buildBackground();
        this._buildLevel();
        this._buildHUD();
        this._buildControls();
        this.px = 0;
        this.py = 0.5;
        this.lastTs = performance.now();
        this.rafId = requestAnimationFrame(t => this._loop(t));
    }
    // ── Overlay & renderer ─────────────────────────────────────────────────────
    _createOverlay() {
        this.overlay = document.createElement('div');
        this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `;
        document.body.appendChild(this.overlay);
    }
    _createScene() {
        const W = window.innerWidth, H = window.innerHeight;
        // Canvas renderer
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `position:absolute;top:0;left:0;width:100%;height:100%;`;
        this.overlay.appendChild(canvas);
        this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        this.renderer.setSize(W, H);
        this.renderer.shadowMap.enabled = true;
        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB);
        this.scene.fog = new THREE.FogExp2(0x87CEEB, 0.018);
        // Camera — side-scroll perspective, slight 3/4 angle
        this.camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 200);
        this.camera.position.set(0, 12, 20);
        this.camera.lookAt(0, 10, 0);
        // Lighting
        const ambient = new THREE.AmbientLight(0xFFFFFF, 0.6);
        this.scene.add(ambient);
        const sun = new THREE.DirectionalLight(0xFFF8E8, 1.1);
        sun.position.set(8, 30, 15);
        sun.castShadow = true;
        sun.shadow.mapSize.set(1024, 1024);
        sun.shadow.camera.near = 0.5;
        sun.shadow.camera.far = 80;
        sun.shadow.camera.left = -15;
        sun.shadow.camera.right = 15;
        sun.shadow.camera.top = 40;
        sun.shadow.camera.bottom = -5;
        this.scene.add(sun);
        const fill = new THREE.DirectionalLight(0xC0D8FF, 0.4);
        fill.position.set(-5, 10, 5);
        this.scene.add(fill);
        // Player (Jarrad — hard hat, hi-vis)
        this.char = new CrewCharacter(CREW_CONFIGS['Jarrad']);
        this.charGroup = this.char.group;
        this.charGroup.scale.setScalar(1.0);
        this.scene.add(this.charGroup);
    }
    // ── Background city / building facade ─────────────────────────────────────
    _buildBackground() {
        const add = (geo, col, x, y, z) => {
            const m = new THREE.Mesh(geo, new THREE.MeshLambertMaterial({ color: col }));
            m.position.set(x, y, z);
            m.receiveShadow = true;
            this.scene.add(m);
            return m;
        };
        // Sky gradient plane
        add(new THREE.PlaneGeometry(80, 60), 0xB0D8F0, 0, 22, -12);
        // Background city silhouette
        const bgBuildings = [
            [-14, 10], [-10, 14], [-6, 8], [8, 16], [12, 11], [16, 9],
        ];
        for (const [bx, bh] of bgBuildings) {
            add(new THREE.BoxGeometry(4, bh, 1), 0x6A7090, bx, bh / 2 - 1, -9);
        }
        // ── Main building facade (the one being plastered) ──────────────────────
        const totalH = GOAL_Y + 4;
        add(new THREE.BoxGeometry(12, totalH, 0.6), 0xE8DCC0, 0, totalH / 2 - 1, -1.5);
        // Cornice (top of facade)
        add(new THREE.BoxGeometry(12.6, 0.5, 0.9), 0xD4C8A8, 0, totalH - 1, -1.4);
        // Sill / base strip
        add(new THREE.BoxGeometry(12, 0.4, 0.7), 0xD0C4A0, 0, 0, -1.4);
        // Windows (3 across × per floor)
        for (let fl = 0; fl < N_FLOORS; fl++) {
            const wy = fl * FLOOR_H + 2.5;
            for (const wx of [-3.5, 0, 3.5]) {
                add(new THREE.BoxGeometry(2.2, 3.2, 0.2), 0x334466, wx, wy, -1.1);
                add(new THREE.BoxGeometry(2.0, 0.15, 0.25), 0xBBB090, wx, wy + 1.7, -1.05);
            }
        }
        // Ground
        add(new THREE.BoxGeometry(20, 0.5, 5), 0x3A3832, 0, -0.25, 0.5);
        // Plaster trough (death zone visually)
        add(new THREE.BoxGeometry(10, 0.5, 1.2), 0xC8B888, 0, 0.25, 1.0);
        add(new THREE.BoxGeometry(10, 1.2, 0.15), 0xB8A878, 0, 0.6, 1.57);
        add(new THREE.BoxGeometry(0.15, 1.2, 1.2), 0xB8A878, -5, 0.6, 1.0);
        add(new THREE.BoxGeometry(0.15, 1.2, 1.2), 0xB8A878, 5, 0.6, 1.0);
    }
    // ── Level geometry ─────────────────────────────────────────────────────────
    _buildLevel() {
        // ── Scaffold vertical poles ──────────────────────────────────────────────
        for (const px of POLE_XS) {
            this._addScaffoldPole(px, 0, GOAL_Y + 3);
            this.poles.push({ x: px, y1: 0, y2: GOAL_Y + 3 });
        }
        // Inner poles for structure
        this._addScaffoldPole(-2.5, 0, GOAL_Y + 3);
        this._addScaffoldPole(2.5, 0, GOAL_Y + 3);
        // ── Scaffold horizontal ledger tubes every floor ─────────────────────────
        for (let fl = 0; fl <= N_FLOORS; fl++) {
            const ty = fl * FLOOR_H;
            this._addTube(-6, 6, ty, 0x9999AA, 0.07);
        }
        // ── Diagonal cross-bracing every floor (visual only) ────────────────────
        for (let fl = 0; fl < N_FLOORS; fl++) {
            const y0 = fl * FLOOR_H;
            const y1 = (fl + 1) * FLOOR_H;
            this._addDiag(-6, y0, 6, y1);
            this._addDiag(6, y0, -6, y1);
        }
        // ── Wooden plank platforms ───────────────────────────────────────────────
        // Floor 0 — full ground (start)
        this._addPlat(-5.5, 5.5, 0, 'normal');
        // Floor 1 — two sections, jump the gap
        this._addPlat(-5.5, -0.8, FLOOR_H * 1, 'normal');
        this._addPlat(0.8, 5.5, FLOOR_H * 1, 'normal');
        // Floor 2 — left section + crumbling right
        this._addPlat(-5.5, -1, FLOOR_H * 2, 'normal');
        this._addPlat(1.5, 4.5, FLOOR_H * 2, 'crumble');
        // Floor 3 — moving platform in centre
        this._addPlat(-5.5, -1.8, FLOOR_H * 3, 'normal');
        this._addPlat(1.8, 5.5, FLOOR_H * 3, 'normal');
        this._addPlat(-1.5, 1.5, FLOOR_H * 3, 'moving');
        // Floor 4 — three small stepping stones
        this._addPlat(-5.5, -2.5, FLOOR_H * 4, 'normal');
        this._addPlat(-0.8, 0.8, FLOOR_H * 4 + 1.2, 'normal'); // slightly raised centre
        this._addPlat(2.5, 5.5, FLOOR_H * 4, 'normal');
        // ── Swing bars (golden grab bars mid-floor) ───────────────────────────────
        // Floor 1 → 2 swing (over the gap)
        this._addSwingBar(0, FLOOR_H * 1 + 3.5, 2.5);
        // Floor 3 → 4 swing
        this._addSwingBar(0, FLOOR_H * 3 + 3.5, 2.5);
        // ── Delivery zone (win platform) ─────────────────────────────────────────
        this._addPlat(-5.5, 5.5, GOAL_Y, 'win');
        // Deliver sign
        this._addSign(0, GOAL_Y + 1.8, '⭐ DELIVER HERE ⭐', 0xFF8800);
        // Bucket pickup at ground
        this._addBucket(-3.5, 0.8);
    }
    _addScaffoldPole(x, y1, y2) {
        const h = y2 - y1;
        const geo = new THREE.CylinderGeometry(0.07, 0.07, h, 8);
        const mat = new THREE.MeshLambertMaterial({ color: 0xA0A0B0 });
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y1 + h / 2, 0.3);
        m.castShadow = true;
        this.scene.add(m);
        // Bolt clamps at each floor
        for (let cy = y1; cy <= y2; cy += FLOOR_H) {
            const cg = new THREE.SphereGeometry(0.12, 6, 5);
            const c = new THREE.Mesh(cg, mat);
            c.position.set(x, cy, 0.3);
            this.scene.add(c);
        }
    }
    _addTube(x1, x2, y, col, r) {
        const len = x2 - x1;
        const geo = new THREE.CylinderGeometry(r, r, len, 7);
        const mat = new THREE.MeshLambertMaterial({ color: col });
        const m = new THREE.Mesh(geo, mat);
        m.rotation.z = Math.PI / 2;
        m.position.set((x1 + x2) / 2, y, 0.3);
        this.scene.add(m);
    }
    _addDiag(x1, y1, x2, y2) {
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.sqrt(dx * dx + dy * dy);
        const geo = new THREE.CylinderGeometry(0.04, 0.04, len, 6);
        const mat = new THREE.MeshLambertMaterial({ color: 0x8888A0 });
        const m = new THREE.Mesh(geo, mat);
        m.rotation.z = Math.atan2(dy, dx) - Math.PI / 2;
        m.position.set((x1 + x2) / 2, (y1 + y2) / 2, 0.3);
        this.scene.add(m);
    }
    _addPlat(x1, x2, y, type) {
        const w = x2 - x1;
        const col = { normal: 0x8B6210, moving: 0xD46010, crumble: 0x886622, win: 0xFFCC00 }[type];
        const geo = new THREE.BoxGeometry(w, 0.28, 0.8);
        const mat = new THREE.MeshLambertMaterial({ color: col });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set((x1 + x2) / 2, y + 0.14, 0.3);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        this.scene.add(mesh);
        // Plank grain lines
        for (let gx = x1 + 0.6; gx < x2; gx += 0.9) {
            const lg = new THREE.BoxGeometry(0.06, 0.30, 0.82);
            const lm = new THREE.MeshLambertMaterial({ color: col - 0x111100 });
            const l = new THREE.Mesh(lg, lm);
            l.position.set(gx - (x1 + x2) / 2, 0, 0);
            mesh.add(l);
        }
        this.platforms.push({ x1, x2, y, mesh, type, moveDir: 1, crumbleTimer: 0, crumbled: false });
    }
    _addSwingBar(anchorX, anchorY, radius) {
        // Horizontal grab bar
        const geo = new THREE.CylinderGeometry(0.09, 0.09, 3, 8);
        const mat = new THREE.MeshLambertMaterial({
            color: 0xFFAA00, emissive: 0x884400, emissiveIntensity: 0.5
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.z = Math.PI / 2;
        mesh.position.set(anchorX, anchorY, 0.5);
        this.scene.add(mesh);
        // Glow indicator
        const gGeo = new THREE.SphereGeometry(0.22, 8, 8);
        const gMat = new THREE.MeshBasicMaterial({ color: 0xFFEE00, transparent: true, opacity: 0.7 });
        const glow = new THREE.Mesh(gGeo, gMat);
        glow.position.set(anchorX, anchorY, 0.6);
        this.scene.add(glow);
        this.swingBars.push({ anchorX, anchorY, radius, mesh });
    }
    _addSign(x, y, _text, col) {
        const geo = new THREE.BoxGeometry(6, 0.8, 0.15);
        const mat = new THREE.MeshLambertMaterial({ color: col, emissive: col, emissiveIntensity: 0.3 });
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, 0.5);
        this.scene.add(m);
    }
    _addBucket(x, y) {
        const geo = new THREE.CylinderGeometry(0.25, 0.2, 0.5, 8);
        const mat = new THREE.MeshLambertMaterial({ color: 0xC1666B, emissive: 0x660011, emissiveIntensity: 0.3 });
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, 0.5);
        this.scene.add(m);
    }
    // ── HUD ────────────────────────────────────────────────────────────────────
    _buildHUD() {
        const hud = document.createElement('div');
        hud.style.cssText = `
      position:absolute; top:0; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:center;
      padding:14px 18px; font-family:system-ui,sans-serif; pointer-events:none;
    `;
        this.heartsEl = document.createElement('div');
        this.heartsEl.style.fontSize = '22px';
        this._updateHearts();
        const title = document.createElement('div');
        title.style.cssText = `
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:13px; font-weight:800; letter-spacing:1px;
    `;
        title.textContent = '🏗️ SCAFFOLD CLIMB';
        this.timerEl = document.createElement('div');
        this.timerEl.style.cssText = `
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:14px; font-weight:800; min-width:52px; text-align:center;
    `;
        hud.appendChild(this.heartsEl);
        hud.appendChild(title);
        hud.appendChild(this.timerEl);
        this.overlay.appendChild(hud);
    }
    _updateHearts() {
        this.heartsEl.textContent = '❤️'.repeat(this.lives) + '🖤'.repeat(Math.max(0, 3 - this.lives));
    }
    // ── Controls ───────────────────────────────────────────────────────────────
    _buildControls() {
        const ctrl = document.createElement('div');
        ctrl.style.cssText = `
      position:absolute; bottom:12px; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:flex-end;
      padding:0 20px 8px;
    `;
        // Left D-pad
        const dpad = document.createElement('div');
        dpad.style.cssText = `display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;`;
        const mk = (label, col, row, col2) => {
            const b = document.createElement('div');
            b.style.cssText = `
        grid-row:${row}; grid-column:${col2};
        background:${col}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `;
            b.textContent = label;
            return b;
        };
        const upBtn = mk('▲', 'rgba(60,60,160,0.88)', 1, 2);
        const leftBtn = mk('◀', 'rgba(70,70,70,0.88)', 2, 1);
        const downBtn = mk('▼', 'rgba(60,60,160,0.88)', 2, 2);
        const rightBtn = mk('▶', 'rgba(70,70,70,0.88)', 2, 3);
        dpad.appendChild(upBtn);
        dpad.appendChild(leftBtn);
        dpad.appendChild(downBtn);
        dpad.appendChild(rightBtn);
        // Jump button (right)
        const jumpBtn = document.createElement('div');
        jumpBtn.style.cssText = `
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `;
        jumpBtn.textContent = 'JUMP';
        const hold = (el, on, off) => {
            el.addEventListener('touchstart', e => { e.preventDefault(); on(); }, { passive: false });
            el.addEventListener('touchend', e => { e.preventDefault(); off(); }, { passive: false });
            el.addEventListener('mousedown', on);
            el.addEventListener('mouseup', off);
        };
        hold(leftBtn, () => this.keys.left = true, () => this.keys.left = false);
        hold(rightBtn, () => this.keys.right = true, () => this.keys.right = false);
        hold(upBtn, () => this.keys.up = true, () => this.keys.up = false);
        hold(downBtn, () => this.keys.down = true, () => this.keys.down = false);
        // Jump: edge on press
        const jumpDown = () => { this.jumpTap = true; };
        jumpBtn.addEventListener('touchstart', e => { e.preventDefault(); jumpDown(); }, { passive: false });
        jumpBtn.addEventListener('mousedown', jumpDown);
        // Keyboard support
        const keymap = {
            ArrowLeft: 'left', ArrowRight: 'right', ArrowUp: 'up', ArrowDown: 'down',
            KeyA: 'left', KeyD: 'right', KeyW: 'up', KeyS: 'down',
        };
        const kd = (e) => {
            if (keymap[e.code]) {
                const k = keymap[e.code];
                if (k === 'jump')
                    this.jumpTap = true;
                else
                    this.keys[k] = true;
            }
            if (e.code === 'Space' || e.code === 'KeyZ')
                this.jumpTap = true;
        };
        const ku = (e) => {
            const k = keymap[e.code];
            if (k && k !== 'jump')
                this.keys[k] = false;
        };
        window.addEventListener('keydown', kd);
        window.addEventListener('keyup', ku);
        this.overlay.addEventListener('remove', () => {
            window.removeEventListener('keydown', kd);
            window.removeEventListener('keyup', ku);
        });
        ctrl.appendChild(dpad);
        ctrl.appendChild(jumpBtn);
        this.overlay.appendChild(ctrl);
    }
    // ── Game loop ──────────────────────────────────────────────────────────────
    _loop(ts) {
        if (this.gameOver)
            return;
        this.rafId = requestAnimationFrame(t => this._loop(t));
        const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
        this.lastTs = ts;
        this._update(dt);
        this.renderer.render(this.scene, this.camera);
        this.jumpTap = false; // consume jump edge
    }
    // ── Update ────────────────────────────────────────────────────────────────
    _update(dt) {
        this.timer = Math.max(0, this.timer - dt);
        this.timerEl.textContent = `⏱ ${Math.ceil(this.timer)}s`;
        if (this.timer <= 0 && !this.delivered) {
            this._end(false);
            return;
        }
        this.char.update(dt);
        // Update moving platforms
        for (const p of this.platforms) {
            if (p.type === 'moving') {
                p.x1 += 2.5 * (p.moveDir ?? 1) * dt;
                p.x2 += 2.5 * (p.moveDir ?? 1) * dt;
                p.mesh.position.x = (p.x1 + p.x2) / 2;
                if (p.x2 > 5.2 || p.x1 < -1.8)
                    p.moveDir = -(p.moveDir ?? 1);
            }
            // Crumble on stand
            if (p.type === 'crumble' && !p.crumbled) {
                const standing = this.onGround &&
                    this.px >= p.x1 - PW && this.px <= p.x2 + PW &&
                    Math.abs(this.py - p.y) < 0.3;
                if (standing) {
                    p.crumbleTimer = (p.crumbleTimer ?? 0) + dt;
                    const shake = Math.sin(p.crumbleTimer * 40) * 0.06 * Math.min(1, p.crumbleTimer);
                    p.mesh.position.z = 0.3 + shake;
                    if (p.crumbleTimer > 1.2) {
                        p.crumbled = true;
                        p.mesh.visible = false;
                    }
                }
                else {
                    if ((p.crumbleTimer ?? 0) > 0 && !p.crumbled)
                        p.crumbleTimer = 0;
                }
            }
        }
        if (this.swingBar) {
            this._physicsSwing(dt);
        }
        else if (this.climbPole) {
            this._physicsClimb(dt);
        }
        else {
            this._physicsPlatform(dt);
        }
        // Player visual
        this.charGroup.position.set(this.px, this.py, 0.3);
        this.charGroup.rotation.y = this.facingRight ? -0.15 : Math.PI + 0.15;
        // Camera smoothly follows player Y
        const targetY = Math.max(8, Math.min(this.py + 6, GOAL_Y + 2));
        this.camera.position.y += (targetY - this.camera.position.y) * 0.07;
        this.camera.lookAt(0, this.camera.position.y - 4, 0);
        // Fall into trough
        if (this.py < -3.5) {
            this._loseLife();
            return;
        }
        // Win condition
        if (!this.delivered && this.py >= GOAL_Y - 0.5 && Math.abs(this.px) < 5) {
            this.delivered = true;
            this._end(true);
        }
    }
    // ── Platformer physics ────────────────────────────────────────────────────
    _physicsPlatform(dt) {
        // Check pole proximity → auto-start climb on UP
        if (!this.onGround) {
            for (const pole of this.poles) {
                if (Math.abs(this.px - pole.x) < 0.5 && this.py >= pole.y1 - 0.5 && this.py <= pole.y2) {
                    if (this.keys.up) {
                        this.climbPole = pole;
                        this.px = pole.x;
                        this.vx = 0;
                        this.vy = 0;
                        return;
                    }
                }
            }
        }
        // Gravity
        if (!this.onGround) {
            this.vy = Math.max(this.vy - GRAVITY * dt, MAX_FALL);
        }
        // Walk
        if (this.keys.left) {
            this.vx = -WALK_SPD;
            this.facingRight = false;
        }
        else if (this.keys.right) {
            this.vx = WALK_SPD;
            this.facingRight = true;
        }
        else {
            this.vx *= 0.6;
        }
        // Jump / double jump / grab swing
        if (this.jumpTap) {
            if (this.onGround) {
                this.vy = JUMP1;
                this.onGround = false;
                this.jumpsLeft = 1;
            }
            else if (this.jumpsLeft > 0) {
                this.vy = JUMP2;
                this.jumpsLeft--;
            }
            else {
                // Try grabbing a swing bar
                for (const bar of this.swingBars) {
                    const dx = this.px - bar.anchorX;
                    const dy = this.py - bar.anchorY;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < bar.radius + 1.5 && this.py < bar.anchorY + 0.5) {
                        this.swingBar = bar;
                        const r = Math.max(dist, bar.radius);
                        this.swingAngle = Math.atan2(dx, -(dy));
                        this.swingOmega = this.vx / r;
                        this.vx = 0;
                        this.vy = 0;
                        return;
                    }
                }
            }
        }
        // Swing bar auto-grab when drifting close
        if (!this.onGround) {
            for (const bar of this.swingBars) {
                const dy = Math.abs(this.py - bar.anchorY);
                const dx = Math.abs(this.px - bar.anchorX);
                if (dy < 0.6 && dx < bar.radius && this.vy < 0) {
                    this.swingBar = bar;
                    this.swingAngle = Math.atan2(this.px - bar.anchorX, -(this.py - bar.anchorY));
                    this.swingOmega = this.vx / bar.radius;
                    this.vx = 0;
                    this.vy = 0;
                    return;
                }
            }
        }
        // Move
        this.px += this.vx * dt;
        this.py += this.vy * dt;
        this.px = Math.max(-6.2, Math.min(6.2, this.px));
        // Platform collision
        this.onGround = false;
        for (const p of this.platforms) {
            if (p.crumbled)
                continue;
            if (this.px + PW > p.x1 && this.px - PW < p.x2 &&
                this.py > p.y - 0.5 && this.py < p.y + 1.0 && this.vy <= 0) {
                this.py = p.y;
                this.vy = 0;
                this.onGround = true;
                this.jumpsLeft = 2;
                break;
            }
        }
    }
    // ── Pole climbing ──────────────────────────────────────────────────────────
    _physicsClimb(dt) {
        const pole = this.climbPole;
        if (this.keys.up)
            this.py += CLIMB_SPD * dt;
        if (this.keys.down)
            this.py -= CLIMB_SPD * dt;
        // Step off onto a platform
        for (const p of this.platforms) {
            if (!p.crumbled && Math.abs(this.py - p.y) < 0.4 &&
                this.px >= p.x1 && this.px <= p.x2) {
                this.climbPole = null;
                this.py = p.y;
                this.onGround = true;
                this.jumpsLeft = 2;
                return;
            }
        }
        // Bounds check
        if (this.py < pole.y1 || this.py > pole.y2) {
            this.climbPole = null;
        }
        // Jump off pole
        if (this.jumpTap) {
            this.climbPole = null;
            this.vy = JUMP1 * 0.85;
            this.jumpsLeft = 1;
            if (this.keys.left) {
                this.vx = -WALK_SPD * 1.3;
                this.facingRight = false;
            }
            else if (this.keys.right) {
                this.vx = WALK_SPD * 1.3;
                this.facingRight = true;
            }
        }
    }
    // ── Swing physics (pendulum) ───────────────────────────────────────────────
    _physicsSwing(dt) {
        const bar = this.swingBar;
        const R = bar.radius;
        // Pendulum gravity + player push input
        this.swingOmega += -(9.8 / R) * Math.sin(this.swingAngle) * dt;
        if (this.keys.left)
            this.swingOmega -= 4.0 * dt;
        if (this.keys.right)
            this.swingOmega += 4.0 * dt;
        this.swingOmega *= 0.993; // damping
        this.swingAngle += this.swingOmega * dt;
        this.px = bar.anchorX + R * Math.sin(this.swingAngle);
        this.py = bar.anchorY - R * Math.cos(this.swingAngle);
        this.facingRight = this.swingOmega > 0;
        // Release — fly off with momentum
        if (this.jumpTap) {
            this.swingBar = null;
            const speed = this.swingOmega * R;
            this.vx = speed * Math.cos(this.swingAngle) * 1.4;
            this.vy = Math.max(JUMP2 * 0.75, Math.abs(speed) * 0.8 + 4);
            this.jumpsLeft = 1;
            this.onGround = false;
        }
        // Land on platform while swinging
        for (const p of this.platforms) {
            if (!p.crumbled && this.px + PW > p.x1 && this.px - PW < p.x2 &&
                Math.abs(this.py - p.y) < 0.4 && this.swingOmega < 1.5) {
                this.swingBar = null;
                this.py = p.y;
                this.vx = 0;
                this.vy = 0;
                this.onGround = true;
                this.jumpsLeft = 2;
            }
        }
    }
    // ── Lives ─────────────────────────────────────────────────────────────────
    _loseLife() {
        this.lives--;
        this._updateHearts();
        if (this.lives <= 0) {
            this._end(false);
            return;
        }
        // Respawn on highest safe floor
        const safeFloor = Math.max(0, Math.floor(this.py / FLOOR_H) - 1);
        this.px = 0;
        this.py = safeFloor * FLOOR_H;
        this.vx = 0;
        this.vy = 0;
        this.onGround = false;
        this.jumpsLeft = 2;
        this.climbPole = null;
        this.swingBar = null;
    }
    // ── End game ──────────────────────────────────────────────────────────────
    _end(success) {
        if (this.gameOver)
            return;
        this.gameOver = true;
        cancelAnimationFrame(this.rafId);
        const qualityPct = success
            ? Math.max(0.55, 0.55 + (this.timer / 90) * 0.45)
            : 0.25 + (this.lives / 3) * 0.2;
        const banner = document.createElement('div');
        banner.style.cssText = `
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.82); color:#fff; padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
    `;
        banner.innerHTML = success
            ? `🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500">Quality: ${Math.round(qualityPct * 100)}%</small>`
            : `💀 FAILED<br><small style="font-size:15px;font-weight:500">Better luck next time...</small>`;
        this.overlay.appendChild(banner);
        setTimeout(() => {
            this._cleanup();
            this.onCompleteFn({ score: Math.round(qualityPct * 100), qualityPct, message: success ? 'Scaffold conquered!' : 'Try again!' });
        }, success ? 1800 : 2200);
    }
    _cleanup() {
        cancelAnimationFrame(this.rafId);
        this.renderer.dispose();
        this.overlay.dispatchEvent(new Event('remove'));
        this.overlay.remove();
    }
    // ── MiniGameManager compat (mount/unmount interface) ──────────────────────
    mount(_container, onComplete) {
        this.start(onComplete);
    }
    unmount() {
        if (!this.gameOver) {
            this.gameOver = true;
            this._cleanup();
        }
    }
}
