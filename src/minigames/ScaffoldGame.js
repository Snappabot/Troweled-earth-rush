// ─── Virtual resolution ───────────────────────────────────────────────────────
const VW = 400;
const VH = 700;
// ─── Physics constants ────────────────────────────────────────────────────────
const GRAVITY = 800; // px/s²
const JUMP_VY = -420; // px/s (upward)
const MOVE_SPEED = 140; // px/s
const CLIMB_SPEED = 100; // px/s
const MAX_FALL = 600; // px/s
const INVINCIBLE_DURATION = 0.5; // seconds
const NORMAL_H = 44; // Jarrad full height
const CROUCH_H = 22; // Jarrad crouch height
// ─── Rope constants ───────────────────────────────────────────────────────────
const ROPE_ANCHOR_X = 200;
const ROPE_ANCHOR_Y = 80;
const ROPE_LENGTH = 270; // px, hangs to y≈350
const PLATFORM_DEFS = [
    // id        baseX   y     w     h  lvl  type
    { id: 'lv1', baseX: 80, y: 540, width: 100, height: 8, level: 1, type: 'normal' }, // 0
    { id: 'lv2', baseX: 140, y: 450, width: 120, height: 8, level: 2, type: 'normal' }, // 1
    { id: 'lv3a', baseX: 80, y: 360, width: 100, height: 8, level: 3, type: 'normal' }, // 2
    { id: 'lv3b', baseX: 220, y: 360, width: 100, height: 8, level: 3, type: 'normal' }, // 3
    { id: 'lv4', baseX: 125, y: 270, width: 140, height: 8, level: 4, type: 'moving' }, // 4  (baseX is centre of oscillation left-edge)
    { id: 'lv5a', baseX: 80, y: 185, width: 100, height: 8, level: 5, type: 'crumbling' }, // 5
    { id: 'lv5b', baseX: 220, y: 185, width: 100, height: 8, level: 5, type: 'normal' }, // 6
    { id: 'lv6', baseX: 80, y: 100, width: 240, height: 8, level: 6, type: 'win' }, // 7
];
// Drop-sheet obstacle on level 2 platform
const DROP_SHEET = { x: 190, y: 420, w: 40, h: 30 };
export class ScaffoldGame {
    canvas = null;
    ctx = null;
    animFrame = null;
    onComplete = null;
    // Game state
    phase = 'playing';
    platforms = [];
    jarrad;
    pigeon;
    gameTime = 0;
    tsuyoshiSpeech = 'I GOT IT!';
    tsuyoshiTimer = 0;
    resultTimer = 0;
    retried = false;
    // Moving platform
    movingPlatTime = 0;
    movingPlatX = 125; // current left-edge X
    // Crumbling platform (lv5a, index 5)
    crumble5ATimer = 0; // time Jarrad has stood on it
    crumble5AState = 'solid';
    crumble5ARespawn = 0; // countdown when broken
    // Rope swing
    ropeAngle = 0; // radians from vertical (positive = rightward)
    ropeAngVel = 0; // angular velocity rad/s
    ropeGrabbed = false;
    // Wind
    windCycleTimer = 0;
    windActive = false;
    windAlpha = 0;
    // Gap hint
    showGapHint = true;
    gapHintTimer = 8;
    // HUD wobble (for crumble visual)
    shakeNoise = 0;
    // Input
    keys = {};
    prevKeys = {};
    keyHandler;
    keyUpHandler;
    // Mobile
    mobileLeft = false;
    mobileRight = false;
    mobileJump = false;
    mobileDrop = false;
    mobileContainer = null;
    // Timestamp
    lastTimestamp = 0;
    // ─── Public interface ──────────────────────────────────────────────────────
    mount(container, onComplete) {
        this.onComplete = onComplete;
        this.platforms = PLATFORM_DEFS.map(p => ({ ...p }));
        this.canvas = document.createElement('canvas');
        this.canvas.width = VW;
        this.canvas.height = VH;
        this.canvas.style.cssText = `
      width: 100%; height: 100%; object-fit: contain; display: block; touch-action: none;
    `;
        this.ctx = this.canvas.getContext('2d');
        const wrapper = document.createElement('div');
        wrapper.style.cssText = `
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: #000; overflow: hidden;
    `;
        wrapper.appendChild(this.canvas);
        container.appendChild(wrapper);
        this.buildMobileButtons(wrapper);
        this.initGame();
        this.keys = {};
        this.prevKeys = {};
        this.keyHandler = (e) => {
            this.keys[e.code] = true;
            if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code))
                e.preventDefault();
        };
        this.keyUpHandler = (e) => { this.keys[e.code] = false; };
        window.addEventListener('keydown', this.keyHandler);
        window.addEventListener('keyup', this.keyUpHandler);
        this.lastTimestamp = 0;
        this.animFrame = requestAnimationFrame(ts => this.gameLoop(ts));
    }
    unmount() {
        if (this.animFrame !== null) {
            cancelAnimationFrame(this.animFrame);
            this.animFrame = null;
        }
        window.removeEventListener('keydown', this.keyHandler);
        window.removeEventListener('keyup', this.keyUpHandler);
        this.canvas = null;
        this.ctx = null;
        this.onComplete = null;
        this.mobileContainer = null;
    }
    // ─── Mobile buttons ────────────────────────────────────────────────────────
    buildMobileButtons(wrapper) {
        const mobileDiv = document.createElement('div');
        mobileDiv.style.cssText = `
      position: absolute; bottom: 0; left: 0; right: 0;
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: 8px; pointer-events: none; z-index: 50;
    `;
        const makeBtn = (label, onDown, onUp) => {
            const btn = document.createElement('button');
            btn.textContent = label;
            btn.style.cssText = `
        pointer-events: auto;
        background: rgba(255,255,255,0.18); border: 2px solid rgba(255,255,255,0.4);
        color: #fff; border-radius: 12px; font-size: 22px; font-weight: 900;
        cursor: pointer; touch-action: manipulation; user-select: none;
        -webkit-tap-highlight-color: transparent;
      `;
            btn.addEventListener('touchstart', (e) => { e.preventDefault(); onDown(); }, { passive: false });
            btn.addEventListener('touchend', (e) => { e.preventDefault(); onUp(); }, { passive: false });
            btn.addEventListener('mousedown', () => onDown());
            btn.addEventListener('mouseup', () => onUp());
            btn.addEventListener('mouseleave', () => onUp());
            return btn;
        };
        const leftCluster = document.createElement('div');
        leftCluster.style.cssText = 'display:flex; gap:4px; pointer-events:none;';
        const lBtn = makeBtn('◀', () => { this.mobileLeft = true; }, () => { this.mobileLeft = false; });
        lBtn.style.width = '64px';
        lBtn.style.height = '64px';
        const rBtn = makeBtn('▶', () => { this.mobileRight = true; }, () => { this.mobileRight = false; });
        rBtn.style.width = '64px';
        rBtn.style.height = '64px';
        leftCluster.appendChild(lBtn);
        leftCluster.appendChild(rBtn);
        const jumpBtn = makeBtn('▲', () => { this.mobileJump = true; }, () => { this.mobileJump = false; });
        jumpBtn.style.width = '80px';
        jumpBtn.style.height = '64px';
        const dropBtn = makeBtn('▼', () => { this.mobileDrop = true; }, () => { this.mobileDrop = false; });
        dropBtn.style.width = '64px';
        dropBtn.style.height = '64px';
        mobileDiv.appendChild(leftCluster);
        mobileDiv.appendChild(jumpBtn);
        mobileDiv.appendChild(dropBtn);
        wrapper.appendChild(mobileDiv);
        this.mobileContainer = mobileDiv;
    }
    // ─── Init / reset ──────────────────────────────────────────────────────────
    initGame() {
        this.phase = 'playing';
        this.gameTime = 0;
        this.movingPlatTime = 0;
        this.movingPlatX = 125;
        this.tsuyoshiTimer = 0;
        this.tsuyoshiSpeech = 'I GOT IT!';
        this.resultTimer = 0;
        this.crumble5ATimer = 0;
        this.crumble5AState = 'solid';
        this.crumble5ARespawn = 0;
        this.ropeAngle = 0;
        this.ropeAngVel = 0;
        this.ropeGrabbed = false;
        this.windCycleTimer = 0;
        this.windActive = false;
        this.windAlpha = 0;
        this.showGapHint = true;
        this.gapHintTimer = 8;
        this.pigeon = {
            x: 240, y: 0, vx: 60,
            platformIdx: 3, // start on lv3b
            jumpTimer: 6,
            scaredTimer: 0,
            flying: false,
            flyTargetX: 240,
            flyTargetY: 0,
        };
        this.snapPigeonToPlatform();
        this.spawnAtLevel1();
    }
    spawnAtLevel1() {
        const plat = this.platforms[0]; // lv1
        this.jarrad = {
            x: plat.baseX + 10,
            y: plat.y - NORMAL_H,
            vx: 0, vy: 0,
            w: 18, h: NORMAL_H,
            state: 'standing',
            isCrouching: false,
            lives: this.jarrad?.lives ?? 3,
            invincTimer: 0,
            deathTimer: 0,
            currentLevel: 1,
            bucketAngle: 0,
        };
        this.ropeGrabbed = false;
    }
    // ─── Game loop ─────────────────────────────────────────────────────────────
    gameLoop(timestamp) {
        if (!this.ctx || !this.canvas)
            return;
        const dt = Math.min((timestamp - (this.lastTimestamp || timestamp)) / 1000, 0.05);
        this.lastTimestamp = timestamp;
        if (this.phase === 'playing')
            this.update(dt);
        this.draw();
        this.prevKeys = { ...this.keys };
        this.animFrame = requestAnimationFrame(ts => this.gameLoop(ts));
    }
    // ─── Update ───────────────────────────────────────────────────────────────
    update(dt) {
        this.gameTime += dt;
        // Tsuyoshi speech
        this.tsuyoshiTimer += dt;
        if (this.tsuyoshiTimer > 3) {
            this.tsuyoshiTimer = 0;
            this.tsuyoshiSpeech = this.tsuyoshiSpeech === 'I GOT IT!' ? 'HOLD ON!' : 'I GOT IT!';
        }
        // Gap hint countdown
        if (this.showGapHint) {
            this.gapHintTimer -= dt;
            if (this.gapHintTimer <= 0)
                this.showGapHint = false;
        }
        // Moving platform
        this.movingPlatTime += dt;
        const prevMovX = this.movingPlatX;
        this.movingPlatX = 125 + 45 * Math.sin((2 * Math.PI * this.movingPlatTime) / 3);
        // Wind system
        this.updateWind(dt);
        // Crumbling platform
        this.updateCrumble(dt);
        // Pigeon
        this.updatePigeon(dt);
        // Jarrad
        if (this.jarrad.state === 'dead') {
            this.jarrad.deathTimer -= dt;
            if (this.jarrad.deathTimer <= 0)
                this.spawnAtLevel1();
            return;
        }
        if (this.jarrad.invincTimer > 0)
            this.jarrad.invincTimer -= dt;
        this.handleInput(dt);
        this.applyPhysics(dt, prevMovX);
        this.checkCollisions();
        this.checkDeath();
        this.checkWin();
        // Bucket swing
        const targetAngle = this.jarrad.vx * 0.002;
        this.jarrad.bucketAngle += (targetAngle - this.jarrad.bucketAngle) * 8 * dt;
        if (this.jarrad.invincTimer <= 0)
            this.checkPigeonCollision();
        this.jarrad.currentLevel = this.getCurrentLevel();
    }
    // ─── Wind ─────────────────────────────────────────────────────────────────
    updateWind(dt) {
        this.windCycleTimer += dt;
        const cycle = 4; // seconds per cycle
        const gustDuration = 1.5;
        const t = this.windCycleTimer % cycle;
        if (t < gustDuration) {
            this.windActive = true;
            // Fade in/out
            if (t < 0.3)
                this.windAlpha = t / 0.3;
            else if (t > gustDuration - 0.3)
                this.windAlpha = (gustDuration - t) / 0.3;
            else
                this.windAlpha = 1;
        }
        else {
            this.windActive = false;
            this.windAlpha = 0;
        }
    }
    // ─── Crumble ──────────────────────────────────────────────────────────────
    updateCrumble(dt) {
        if (this.crumble5AState === 'broken') {
            this.crumble5ARespawn -= dt;
            if (this.crumble5ARespawn <= 0) {
                this.crumble5AState = 'solid';
                this.crumble5ATimer = 0;
            }
            return;
        }
        const j = this.jarrad;
        const p5a = this.platforms[5]; // lv5a
        const jFeet = j.y + j.h;
        const onCrumble = j.state === 'standing' &&
            Math.abs(jFeet - p5a.y) < 5 &&
            j.x + j.w > p5a.baseX &&
            j.x < p5a.baseX + p5a.width;
        if (onCrumble) {
            this.crumble5ATimer += dt;
            if (this.crumble5ATimer > 1.5) {
                // Break!
                this.crumble5AState = 'broken';
                this.crumble5ARespawn = 8;
                this.crumble5ATimer = 0;
                if (j.state === 'standing') {
                    j.state = 'falling';
                    j.vy = 0;
                }
            }
            else if (this.crumble5ATimer > 1.2) {
                this.crumble5AState = 'shaking';
                this.shakeNoise = (Math.random() - 0.5) * 4;
            }
        }
        else {
            // Slowly reset timer if not standing on it
            this.crumble5ATimer = Math.max(0, this.crumble5ATimer - dt * 2);
            if (this.crumble5ATimer < 1.2)
                this.crumble5AState = 'solid';
        }
    }
    // ─── Input ────────────────────────────────────────────────────────────────
    handleInput(dt) {
        const j = this.jarrad;
        const leftHeld = this.keys['ArrowLeft'] || this.keys['KeyA'] || this.mobileLeft;
        const rightHeld = this.keys['ArrowRight'] || this.keys['KeyD'] || this.mobileRight;
        const jumpPress = this.isJustPressed('ArrowUp') || this.isJustPressed('KeyW') || this.isJustPressed('Space') || this.mobileJump;
        const upHeld = this.keys['ArrowUp'] || this.keys['KeyW'] || this.keys['Space'] || this.mobileJump;
        const downHeld = this.keys['ArrowDown'] || this.keys['KeyS'] || this.mobileDrop;
        // ── Rope swing ──────────────────────────────────────────────────────────
        if (j.state === 'swinging') {
            if (jumpPress) {
                // Release rope — apply velocity from pendulum
                const ω = this.ropeAngVel;
                const θ = this.ropeAngle;
                j.vx = ROPE_LENGTH * ω * Math.cos(θ);
                j.vy = -ROPE_LENGTH * ω * Math.sin(θ);
                j.state = 'jumping';
                this.ropeGrabbed = false;
            }
            return; // no other input while swinging
        }
        // ── Grab rope (while airborne) ──────────────────────────────────────────
        if ((j.state === 'jumping' || j.state === 'falling') && !this.ropeGrabbed) {
            const centreX = j.x + j.w / 2;
            const centreY = j.y + j.h / 2;
            const ropeEndY = ROPE_ANCHOR_Y + ROPE_LENGTH * Math.cos(this.ropeAngle);
            // Grab zone: within 15px of rope anchor X and vertically near rope
            if (Math.abs(centreX - ROPE_ANCHOR_X) < 15 &&
                centreY > ROPE_ANCHOR_Y &&
                centreY < ropeEndY + 30) {
                // Work out starting angle from Jarrad's current position
                const dx = centreX - ROPE_ANCHOR_X;
                const dy = centreY - ROPE_ANCHOR_Y;
                this.ropeAngle = Math.atan2(dx, dy); // angle from vertical
                this.ropeAngVel = j.vx / ROPE_LENGTH; // convert vx to angular velocity
                j.state = 'swinging';
                this.ropeGrabbed = true;
                return;
            }
        }
        // ── Climbing ─────────────────────────────────────────────────────────────
        const cx = j.x + j.w / 2;
        const onLadderA = cx > 120 && cx < 145 && j.y > 180 && j.y + j.h < 555; // Tower A ladder
        const onLadderB = cx > 260 && cx < 285 && j.y > 180 && j.y + j.h < 370; // Tower B ladder
        const onLadder = onLadderA || onLadderB;
        if ((j.state === 'standing' || j.state === 'climbing' || j.state === 'falling') && onLadder) {
            if (upHeld) {
                j.isCrouching = false;
                j.h = NORMAL_H;
                j.state = 'climbing';
                j.vy = -CLIMB_SPEED;
                j.vx = 0;
                return;
            }
            if (downHeld) {
                j.isCrouching = false;
                j.h = NORMAL_H;
                j.state = 'climbing';
                j.vy = CLIMB_SPEED;
                j.vx = 0;
                return;
            }
        }
        if (j.state === 'climbing') {
            if (!onLadder || (!upHeld && !downHeld)) {
                j.vy = 0;
                j.state = 'falling';
            }
        }
        // ── Standing ─────────────────────────────────────────────────────────────
        if (j.state === 'standing') {
            // Crouch
            if (downHeld && !onLadder) {
                if (!j.isCrouching) {
                    j.isCrouching = true;
                    j.y += NORMAL_H - CROUCH_H;
                    j.h = CROUCH_H;
                }
                j.vx = 0;
                return;
            }
            else if (j.isCrouching) {
                // Stand back up — check there's room
                j.isCrouching = false;
                j.y -= NORMAL_H - CROUCH_H;
                j.h = NORMAL_H;
            }
            j.vx = 0;
            if (leftHeld)
                j.vx = -MOVE_SPEED;
            if (rightHeld)
                j.vx = MOVE_SPEED;
            if (jumpPress) {
                j.vy = JUMP_VY;
                j.state = 'jumping';
                j.isCrouching = false;
                j.h = NORMAL_H;
            }
        }
        else if (j.state === 'jumping' || j.state === 'falling') {
            // Air control
            j.vx = 0;
            if (leftHeld)
                j.vx = -MOVE_SPEED * 0.85;
            if (rightHeld)
                j.vx = MOVE_SPEED * 0.85;
        }
        else if (j.state === 'hanging') {
            j.vx = 0;
            if (upHeld) {
                j.y -= 18;
                j.vy = 0;
                j.state = 'falling';
            }
            if (downHeld) {
                j.y += 5;
                j.state = 'falling';
            }
        }
    }
    isJustPressed(code) {
        return !!this.keys[code] && !this.prevKeys[code];
    }
    // ─── Physics ──────────────────────────────────────────────────────────────
    applyPhysics(dt, prevMovX) {
        const j = this.jarrad;
        // ── Rope pendulum ─────────────────────────────────────────────────────────
        if (j.state === 'swinging') {
            const gOverL = GRAVITY / ROPE_LENGTH;
            this.ropeAngVel += -gOverL * Math.sin(this.ropeAngle) * dt;
            this.ropeAngVel *= 0.995; // light damping
            this.ropeAngle += this.ropeAngVel * dt;
            // Clamp angle to prevent full revolution
            this.ropeAngle = Math.max(-Math.PI * 0.6, Math.min(Math.PI * 0.6, this.ropeAngle));
            // Position Jarrad at rope end
            j.x = ROPE_ANCHOR_X + ROPE_LENGTH * Math.sin(this.ropeAngle) - j.w / 2;
            j.y = ROPE_ANCHOR_Y + ROPE_LENGTH * Math.cos(this.ropeAngle) - j.h;
            return;
        }
        if (j.state === 'climbing') {
            j.y += j.vy * dt;
            return;
        }
        if (j.state === 'hanging')
            return;
        // Gravity
        if (j.state !== 'standing') {
            j.vy = Math.min(j.vy + GRAVITY * dt, MAX_FALL);
        }
        // Wind (only above y=270, levels 5+)
        if (this.windActive && j.y < 270 && j.state !== 'standing') {
            j.vx -= 30 * dt;
        }
        else if (this.windActive && j.y < 270 && j.state === 'standing') {
            j.vx -= 15 * dt; // lighter push when on platform
        }
        j.x += j.vx * dt;
        j.y += j.vy * dt;
        // Clamp horizontal
        j.x = Math.max(5, Math.min(VW - j.w - 5, j.x));
        // Move with moving platform (when standing on it)
        if (j.state === 'standing') {
            const mp = this.platforms[4];
            const jFeet = j.y + j.h;
            if (Math.abs(jFeet - mp.y) < 5 &&
                j.x + j.w > this.movingPlatX &&
                j.x < this.movingPlatX + mp.width) {
                const delta = this.movingPlatX - prevMovX;
                j.x += delta;
                j.x = Math.max(5, Math.min(VW - j.w - 5, j.x));
            }
        }
    }
    // ─── Collisions ───────────────────────────────────────────────────────────
    checkCollisions() {
        const j = this.jarrad;
        if (j.state === 'dead' || j.state === 'swinging')
            return;
        for (let i = 0; i < this.platforms.length; i++) {
            const plat = this.platforms[i];
            // Skip broken crumble
            if (plat.type === 'crumbling' && this.crumble5AState === 'broken')
                continue;
            const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
            const py = plat.y;
            const pr = px + plat.width;
            const pb = py + plat.height;
            const jFeet = j.y + j.h;
            const jLeft = j.x;
            const jRight = j.x + j.w;
            // Land on top
            if ((j.state === 'jumping' || j.state === 'falling' || j.state === 'climbing') &&
                j.vy >= 0 &&
                jFeet >= py && jFeet <= pb + 12 &&
                jRight > px + 2 && jLeft < pr - 2) {
                j.y = py - j.h;
                j.vy = 0;
                j.vx = 0;
                j.state = 'standing';
                if (j.isCrouching) {
                    j.y += NORMAL_H - CROUCH_H;
                }
                break;
            }
            // Head bump → hang
            const jHead = j.y;
            if (j.state === 'jumping' && j.vy < 0 &&
                jHead <= pb && jHead >= py - 10 &&
                jRight > px + 10 && jLeft < pr - 10) {
                j.vy = 0;
                j.y = pb;
                j.state = 'hanging';
                break;
            }
        }
        // Walk-off edge check
        if (j.state === 'standing') {
            let onAny = false;
            for (let i = 0; i < this.platforms.length; i++) {
                const plat = this.platforms[i];
                if (plat.type === 'crumbling' && this.crumble5AState === 'broken')
                    continue;
                const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
                const jFeet = j.y + j.h;
                if (Math.abs(jFeet - plat.y) < 5 &&
                    j.x + j.w > px + 1 && j.x < px + plat.width - 1) {
                    onAny = true;
                    break;
                }
            }
            if (!onAny)
                j.state = 'falling';
        }
        // Drop-sheet obstacle collision (on level 2 platform)
        if (j.state === 'standing' || j.state === 'falling') {
            const jFeet = j.y + j.h;
            const lv2 = this.platforms[1];
            if (Math.abs(jFeet - lv2.y) < 6) {
                // On level 2 — check drop sheet
                const sheetRight = DROP_SHEET.x + DROP_SHEET.w;
                const jRight = j.x + j.w;
                const jLeft = j.x;
                const jTop = j.y;
                const overlapX = jRight > DROP_SHEET.x && jLeft < sheetRight;
                const sheetTop = DROP_SHEET.y;
                if (overlapX && jTop < sheetTop) {
                    // Jarrad's head is above sheet top → collision unless crouching
                    if (!j.isCrouching) {
                        // Bounce back
                        j.vx = j.vx !== 0 ? -j.vx * 0.5 : 0;
                        // Push out of the sheet zone
                        if (j.x + j.w / 2 < DROP_SHEET.x + DROP_SHEET.w / 2) {
                            j.x = DROP_SHEET.x - j.w - 1;
                        }
                        else {
                            j.x = sheetRight + 1;
                        }
                    }
                }
            }
        }
    }
    // ─── Death / win ──────────────────────────────────────────────────────────
    checkDeath() {
        const j = this.jarrad;
        if (j.state === 'dead')
            return;
        if (j.y + j.h >= 640)
            this.killJarrad();
        if (j.y < -120) {
            j.y = -60;
            j.vy = 0;
            j.state = 'falling';
        }
    }
    killJarrad() {
        const j = this.jarrad;
        if (j.state === 'dead')
            return;
        j.lives--;
        j.state = 'dead';
        j.deathTimer = 1.2;
        this.ropeGrabbed = false;
        if (j.lives <= 0) {
            setTimeout(() => {
                if (this.retried) {
                    this.phase = 'result';
                    this.finishGame(false);
                }
                else {
                    this.phase = 'lost';
                }
            }, 1300);
        }
    }
    checkWin() {
        const j = this.jarrad;
        if (j.state === 'dead')
            return;
        const win = this.platforms[7]; // lv6
        const jFeet = j.y + j.h;
        if (Math.abs(jFeet - win.y) < 6 &&
            j.x + j.w > win.baseX && j.x < win.baseX + win.width) {
            this.phase = 'won';
            setTimeout(() => this.finishGame(true), 100);
        }
    }
    getCurrentLevel() {
        const j = this.jarrad;
        const jFeet = j.y + j.h;
        let best = 1, minDist = Infinity;
        for (const p of this.platforms) {
            const d = Math.abs(jFeet - p.y);
            if (d < minDist) {
                minDist = d;
                best = p.level;
            }
        }
        return best;
    }
    // ─── Pigeon ───────────────────────────────────────────────────────────────
    snapPigeonToPlatform() {
        const plat = this.platforms[this.pigeon.platformIdx];
        const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
        this.pigeon.y = plat.y - 20;
        this.pigeon.x = Math.max(px + 4, Math.min(px + plat.width - 20, this.pigeon.x));
    }
    updatePigeon(dt) {
        const pg = this.pigeon;
        if (pg.scaredTimer > 0)
            pg.scaredTimer -= dt;
        if (pg.flying) {
            // Animate across to target
            const dx = pg.flyTargetX - pg.x;
            const dy = pg.flyTargetY - pg.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 10) {
                pg.flying = false;
                this.snapPigeonToPlatform();
            }
            else {
                const speed = 120;
                pg.x += (dx / dist) * speed * dt;
                pg.y += (dy / dist) * speed * dt;
            }
            return;
        }
        pg.jumpTimer -= dt;
        if (pg.jumpTimer <= 0) {
            // Pick a new platform — prefer one Jarrad is NOT on
            const jarradPlatIdx = this.getJarradPlatformIdx();
            // Valid: indices 1-6 (lv2 through lv5b), skip lv1 (spawn) and lv6 (win)
            // Also skip broken crumble platform
            const candidates = [1, 2, 3, 4, 5, 6].filter(i => {
                if (i === pg.platformIdx)
                    return false;
                if (i === 5 && this.crumble5AState === 'broken')
                    return false;
                return true;
            });
            // Prefer platforms Jarrad is not on
            const preferred = candidates.filter(i => i !== jarradPlatIdx);
            const pool = preferred.length > 0 ? preferred : candidates;
            // Occasionally fly between towers (cross gap)
            const newIdx = pool[Math.floor(Math.random() * pool.length)];
            const newPlat = this.platforms[newIdx];
            const newPx = (newPlat.type === 'moving') ? this.movingPlatX : newPlat.baseX;
            // Check if crossing the gap (x 180-220)
            const currentPlatX = (this.platforms[pg.platformIdx].type === 'moving')
                ? this.movingPlatX
                : this.platforms[pg.platformIdx].baseX;
            const crossingGap = (currentPlatX < 190 && newPx > 215) ||
                (currentPlatX > 215 && newPx < 190);
            if (crossingGap || Math.random() < 0.3) {
                // Fly animation
                pg.flying = true;
                pg.platformIdx = newIdx;
                pg.flyTargetX = newPx + 20;
                pg.flyTargetY = newPlat.y - 20;
                pg.jumpTimer = 5 + Math.random() * 3;
            }
            else {
                pg.platformIdx = newIdx;
                pg.jumpTimer = 5 + Math.random() * 3;
                this.snapPigeonToPlatform();
            }
        }
        if (!pg.flying) {
            const plat = this.platforms[pg.platformIdx];
            const px = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
            const pr = px + plat.width;
            pg.x += pg.vx * dt;
            if (pg.x <= px + 2) {
                pg.x = px + 2;
                pg.vx = 60;
            }
            if (pg.x >= pr - 20) {
                pg.x = pr - 20;
                pg.vx = -60;
            }
            pg.y = plat.y - 20;
        }
    }
    getJarradPlatformIdx() {
        const j = this.jarrad;
        const jFeet = j.y + j.h;
        let bestIdx = 0, minDist = Infinity;
        for (let i = 0; i < this.platforms.length; i++) {
            const d = Math.abs(jFeet - this.platforms[i].y);
            if (d < minDist) {
                minDist = d;
                bestIdx = i;
            }
        }
        return bestIdx;
    }
    checkPigeonCollision() {
        const j = this.jarrad;
        const pg = this.pigeon;
        if (pg.scaredTimer > 0 || pg.flying)
            return;
        const jarradPlatIdx = this.getJarradPlatformIdx();
        if (jarradPlatIdx !== pg.platformIdx)
            return;
        const jFeet = j.y + j.h;
        const plat = this.platforms[pg.platformIdx];
        if (Math.abs(jFeet - plat.y) > 12)
            return;
        if (j.x < pg.x + 18 && j.x + j.w > pg.x) {
            j.invincTimer = INVINCIBLE_DURATION;
            pg.scaredTimer = 1.5;
            pg.jumpTimer = 0;
            j.lives--;
            if (j.lives <= 0) {
                j.state = 'dead';
                j.deathTimer = 1.2;
                setTimeout(() => {
                    if (this.retried) {
                        this.phase = 'result';
                        this.finishGame(false);
                    }
                    else {
                        this.phase = 'lost';
                    }
                }, 1300);
            }
        }
    }
    // ─── Draw ─────────────────────────────────────────────────────────────────
    draw() {
        if (!this.ctx)
            return;
        const ctx = this.ctx;
        ctx.clearRect(0, 0, VW, VH);
        this.drawBackground(ctx);
        this.drawRope(ctx);
        this.drawScaffold(ctx);
        this.drawPlatforms(ctx);
        this.drawDropSheet(ctx);
        this.drawGapHint(ctx);
        this.drawWindEffect(ctx);
        this.drawTsuyoshi(ctx);
        this.drawPigeon(ctx);
        this.drawJarrad(ctx);
        this.drawHUD(ctx);
        if (this.phase === 'won')
            this.drawWinOverlay(ctx);
        else if (this.phase === 'lost')
            this.drawLostOverlay(ctx);
    }
    // ─── Background ───────────────────────────────────────────────────────────
    drawBackground(ctx) {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, VH);
        skyGrad.addColorStop(0, '#87CEEB');
        skyGrad.addColorStop(1, '#C5E8F5');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, VW, VH);
        // Building slabs behind scaffolding (two columns)
        ctx.fillStyle = '#C2BEB6';
        this.roundRect(ctx, 72, 60, 120, 540, 12);
        ctx.fill();
        ctx.fillStyle = '#CAC6BE';
        this.roundRect(ctx, 212, 60, 120, 540, 12);
        ctx.fill();
        // Shading
        ctx.fillStyle = 'rgba(0,0,0,0.07)';
        this.roundRect(ctx, 72, 60, 18, 540, 10);
        ctx.fill();
        this.roundRect(ctx, 212, 60, 18, 540, 10);
        ctx.fill();
        // Pool
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 635, VW, 8);
        const poolGrad = ctx.createLinearGradient(0, 643, 0, VH);
        poolGrad.addColorStop(0, '#48B8C8');
        poolGrad.addColorStop(1, '#2A9AAD');
        ctx.fillStyle = poolGrad;
        ctx.fillRect(0, 643, VW, VH - 643);
        ctx.strokeStyle = 'rgba(255,255,255,0.25)';
        ctx.lineWidth = 1.5;
        for (let i = 0; i < 5; i++) {
            const y = 660 + i * 8;
            const off = Math.sin(this.gameTime * 2 + i) * 5;
            ctx.beginPath();
            ctx.moveTo(10 + off, y);
            ctx.lineTo(VW - 10 + off, y);
            ctx.stroke();
        }
        ctx.fillStyle = '#8B7355';
        ctx.fillRect(0, 625, VW, 15);
        ctx.fillStyle = '#7A6345';
        ctx.fillRect(0, 627, VW, 4);
    }
    // ─── Rope ─────────────────────────────────────────────────────────────────
    drawRope(ctx) {
        const ax = ROPE_ANCHOR_X;
        const ay = ROPE_ANCHOR_Y;
        const θ = this.ropeAngle;
        const ex = ax + ROPE_LENGTH * Math.sin(θ);
        const ey = ay + ROPE_LENGTH * Math.cos(θ);
        // Draw rope as a thick brown curve
        ctx.save();
        ctx.strokeStyle = '#8B5A2B';
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.beginPath();
        // Slight sag via quadratic bezier
        const mx = (ax + ex) / 2 + Math.sin(θ) * 10;
        const my = (ay + ey) / 2 + 20;
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(mx, my, ex, ey);
        ctx.stroke();
        // Rope end ring
        ctx.fillStyle = '#6B4520';
        ctx.strokeStyle = '#4A3010';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex, ey, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    // ─── Scaffold ─────────────────────────────────────────────────────────────
    drawScaffold(ctx) {
        // Helper: draw one tower
        const drawTower = (lx, rx) => {
            const top = 80, bot = 560;
            ctx.strokeStyle = '#B8B8B8';
            ctx.lineWidth = 5;
            // Left pole
            ctx.beginPath();
            ctx.moveTo(lx, top);
            ctx.lineTo(lx, bot);
            ctx.stroke();
            // Right pole
            ctx.beginPath();
            ctx.moveTo(rx, top);
            ctx.lineTo(rx, bot);
            ctx.stroke();
            // X-bracing at each section
            const sectionYs = [80, 185, 270, 360, 450, 540, 560];
            ctx.strokeStyle = '#A0A0A0';
            ctx.lineWidth = 2;
            for (let i = 0; i < sectionYs.length - 1; i++) {
                const y1 = sectionYs[i];
                const y2 = sectionYs[i + 1];
                ctx.beginPath();
                ctx.moveTo(lx, y1);
                ctx.lineTo(rx, y2);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(rx, y1);
                ctx.lineTo(lx, y2);
                ctx.stroke();
            }
        };
        drawTower(80, 180); // Tower A (left)
        drawTower(220, 320); // Tower B (right)
        // Tower A ladder: x=130, y=185 to y=540
        this.drawLadder(ctx, 130, 185, 540);
        // Tower B ladder: x=270, y=185 to y=360
        this.drawLadder(ctx, 270, 185, 360);
    }
    drawLadder(ctx, x, yTop, yBot) {
        ctx.strokeStyle = '#909090';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(x, yTop);
        ctx.lineTo(x, yBot);
        ctx.stroke();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = '#A0A0A0';
        for (let y = yTop; y <= yBot; y += 20) {
            ctx.beginPath();
            ctx.moveTo(x - 8, y);
            ctx.lineTo(x + 8, y);
            ctx.stroke();
        }
    }
    // ─── Platforms ────────────────────────────────────────────────────────────
    drawPlatforms(ctx) {
        for (let i = 0; i < this.platforms.length; i++) {
            const plat = this.platforms[i];
            // Skip broken crumble
            if (plat.type === 'crumbling' && this.crumble5AState === 'broken')
                continue;
            const px0 = (plat.type === 'moving') ? this.movingPlatX : plat.baseX;
            // Shake offset for crumble
            let shakeX = 0;
            if (plat.type === 'crumbling' && this.crumble5AState === 'shaking') {
                shakeX = this.shakeNoise;
            }
            const px = px0 + shakeX;
            const py = plat.y;
            const pw = plat.width;
            const ph = plat.height;
            ctx.save();
            // Platform body colour
            if (plat.type === 'win') {
                const grad = ctx.createLinearGradient(px, py, px + pw, py);
                grad.addColorStop(0, '#FFD700');
                grad.addColorStop(1, '#FFA500');
                ctx.fillStyle = grad;
            }
            else if (plat.type === 'crumbling') {
                ctx.fillStyle = '#C8A040';
            }
            else if (plat.type === 'moving') {
                ctx.fillStyle = '#8080D0';
            }
            else {
                ctx.fillStyle = '#B0B0B0';
            }
            this.roundRect(ctx, px, py, pw, ph, 2);
            ctx.fill();
            // Top highlight
            ctx.strokeStyle = (plat.type === 'win') ? '#FFE57A' : (plat.type === 'crumbling') ? '#E8C060' : '#D8D8D8';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(px + 3, py + 1.5);
            ctx.lineTo(px + pw - 3, py + 1.5);
            ctx.stroke();
            // Crumble cracks
            if (plat.type === 'crumbling') {
                ctx.strokeStyle = '#7A5010';
                ctx.lineWidth = 1.5;
                // Draw a few crack lines
                ctx.beginPath();
                ctx.moveTo(px + 20, py + 1);
                ctx.lineTo(px + 28, py + 7);
                ctx.lineTo(px + 35, py + 2);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(px + 55, py + 2);
                ctx.lineTo(px + 60, py + 7);
                ctx.lineTo(px + 68, py + 1);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(px + 80, py + 3);
                ctx.lineTo(px + 87, py + 6);
                ctx.lineTo(px + 93, py + 1);
                ctx.stroke();
            }
            // Moving platform: dashed outline in contrasting colour
            if (plat.type === 'moving') {
                ctx.strokeStyle = '#F0F080';
                ctx.lineWidth = 1.5;
                ctx.setLineDash([4, 3]);
                ctx.strokeRect(px, py, pw, ph);
                ctx.setLineDash([]);
                // Direction arrows
                ctx.fillStyle = 'rgba(255,255,200,0.7)';
                ctx.font = 'bold 7px system-ui';
                ctx.textAlign = 'center';
                ctx.fillText('↔ MOVING', px + pw / 2, py + ph - 1);
            }
            // Win banner
            if (plat.type === 'win') {
                ctx.fillStyle = '#333';
                ctx.font = 'bold 9px system-ui, sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('🏁 DELIVER', px + pw / 2, py + 6);
            }
            ctx.restore();
        }
    }
    // ─── Drop sheet ───────────────────────────────────────────────────────────
    drawDropSheet(ctx) {
        const { x, y, w, h } = DROP_SHEET;
        // Main drop cloth (white/cream with drape)
        ctx.save();
        ctx.fillStyle = '#F0EDE5';
        ctx.strokeStyle = '#C8C0A0';
        ctx.lineWidth = 1;
        // Draw as draped rectangle — slightly wavy bottom
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + w, y);
        ctx.lineTo(x + w, y + h - 4);
        ctx.quadraticCurveTo(x + w * 0.75, y + h + 3, x + w * 0.5, y + h);
        ctx.quadraticCurveTo(x + w * 0.25, y + h - 3, x, y + h - 4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        // Drape fold lines
        ctx.strokeStyle = 'rgba(0,0,0,0.12)';
        ctx.lineWidth = 1;
        for (let i = 1; i < 4; i++) {
            const fx = x + (w / 4) * i;
            ctx.beginPath();
            ctx.moveTo(fx, y);
            ctx.lineTo(fx + 2, y + h - 6);
            ctx.stroke();
        }
        // "DUCK →" label
        ctx.fillStyle = '#888866';
        ctx.font = 'bold 7px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('DUCK ↓', x + w / 2, y - 3);
        ctx.restore();
    }
    // ─── Gap hint ─────────────────────────────────────────────────────────────
    drawGapHint(ctx) {
        if (!this.showGapHint)
            return;
        const alpha = Math.min(1, this.gapHintTimer / 2) * Math.abs(Math.sin(this.gameTime * 3));
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = '#FFEE44';
        ctx.font = 'bold 11px system-ui';
        ctx.textAlign = 'center';
        ctx.fillText('→ JUMP! →', 200, 400);
        // Arrow graphic
        ctx.strokeStyle = '#FFEE44';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(183, 390);
        ctx.lineTo(217, 390);
        ctx.moveTo(210, 385);
        ctx.lineTo(217, 390);
        ctx.lineTo(210, 395);
        ctx.stroke();
        ctx.restore();
    }
    // ─── Wind effect ──────────────────────────────────────────────────────────
    drawWindEffect(ctx) {
        if (!this.windActive || this.windAlpha <= 0)
            return;
        ctx.save();
        ctx.globalAlpha = this.windAlpha * 0.35;
        ctx.strokeStyle = '#AADDFF';
        ctx.lineWidth = 2;
        for (let i = 0; i < 8; i++) {
            const y = 130 + i * 30 + Math.sin(this.gameTime * 4 + i) * 5;
            const xOff = (this.gameTime * 120) % 60;
            const len = 30 + Math.random() * 40;
            ctx.beginPath();
            ctx.moveTo(VW - xOff, y);
            ctx.lineTo(VW - xOff - len, y);
            ctx.stroke();
        }
        ctx.restore();
    }
    // ─── Tsuyoshi ─────────────────────────────────────────────────────────────
    drawTsuyoshi(ctx) {
        const tx = 90, ty = 605;
        ctx.fillStyle = '#1A1A18';
        ctx.fillRect(tx - 9, ty - 30, 18, 30);
        ctx.fillStyle = '#C8A060';
        ctx.save();
        ctx.translate(tx - 9, ty - 20);
        ctx.rotate(-0.6);
        ctx.fillRect(-4, -18, 7, 20);
        ctx.restore();
        ctx.save();
        ctx.translate(tx + 9, ty - 20);
        ctx.rotate(0.3);
        ctx.fillRect(-3, -16, 7, 18);
        ctx.restore();
        ctx.fillStyle = '#C8A060';
        this.roundRect(ctx, tx - 7, ty - 44, 14, 14, 3);
        ctx.fill();
        ctx.fillStyle = '#0A0A08';
        ctx.fillRect(tx - 2, ty - 56, 4, 14);
        ctx.fillRect(tx - 1, ty - 62, 2, 8);
        ctx.fillStyle = '#0A0A08';
        ctx.fillRect(tx - 5, ty - 38, 3, 3);
        ctx.fillRect(tx + 2, ty - 38, 3, 3);
        // Speech bubble
        const speech = this.tsuyoshiSpeech;
        const bubbleX = tx - 40, bubbleY = ty - 80;
        const bubbleW = 80, bubbleH = 22;
        ctx.fillStyle = '#FFFFFFEE';
        this.roundRect(ctx, bubbleX, bubbleY, bubbleW, bubbleH, 6);
        ctx.fill();
        ctx.strokeStyle = '#CCCCCC';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.fillStyle = '#FFFFFFEE';
        ctx.beginPath();
        ctx.moveTo(tx - 5, bubbleY + bubbleH);
        ctx.lineTo(tx + 5, bubbleY + bubbleH);
        ctx.lineTo(tx, bubbleY + bubbleH + 8);
        ctx.closePath();
        ctx.fill();
        ctx.fillStyle = '#333333';
        ctx.font = 'bold 8px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(speech, bubbleX + bubbleW / 2, bubbleY + 15);
    }
    // ─── Jarrad ───────────────────────────────────────────────────────────────
    drawJarrad(ctx) {
        const j = this.jarrad;
        const flashing = j.invincTimer > 0 && Math.floor(j.invincTimer * 10) % 2 === 0;
        if (flashing)
            ctx.globalAlpha = 0.4;
        if (j.state === 'dead') {
            ctx.save();
            ctx.translate(j.x + j.w / 2, j.y + j.h);
            ctx.rotate(Math.PI / 2);
            this.drawJarradShape(ctx, 0, -NORMAL_H / 2, false);
            ctx.fillStyle = 'rgba(70,130,180,0.6)';
            ctx.beginPath();
            ctx.arc(-10, 8, 12, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(10, 4, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
            ctx.globalAlpha = 1;
            return;
        }
        if (j.state === 'swinging') {
            // Draw Jarrad hanging from rope end
            const ex = ROPE_ANCHOR_X + ROPE_LENGTH * Math.sin(this.ropeAngle) - j.w / 2;
            const ey = ROPE_ANCHOR_Y + ROPE_LENGTH * Math.cos(this.ropeAngle);
            ctx.save();
            ctx.translate(ex + j.w / 2, ey);
            ctx.rotate(this.ropeAngle * 0.3);
            this.drawJarradShape(ctx, -j.w / 2, -NORMAL_H, false);
            ctx.restore();
        }
        else {
            this.drawJarradShape(ctx, j.x, j.y, j.isCrouching);
        }
        ctx.globalAlpha = 1;
        // Bucket (only when not swinging)
        if (j.state !== 'swinging') {
            const bx = j.x + j.w + 2;
            const by = j.y + (j.isCrouching ? 10 : 20);
            ctx.save();
            ctx.translate(bx, by);
            ctx.rotate(j.bucketAngle);
            ctx.strokeStyle = '#888';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 8);
            ctx.stroke();
            ctx.fillStyle = '#C49A7A';
            ctx.fillRect(-5, 8, 10, 10);
            ctx.strokeStyle = '#A07050';
            ctx.lineWidth = 1;
            ctx.strokeRect(-5, 8, 10, 10);
            ctx.fillStyle = '#F0ECE4';
            ctx.fillRect(-3, 9, 6, 4);
            ctx.restore();
        }
    }
    drawJarradShape(ctx, x, y, crouching) {
        if (crouching) {
            // Squished body
            ctx.fillStyle = '#111111';
            ctx.fillRect(x, y + 8, 18, 14); // shorter body
            // Plaster splats
            ctx.fillStyle = '#FFFFFF';
            ctx.beginPath();
            ctx.arc(x + 5, y + 12, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(x + 13, y + 16, 2, 0, Math.PI * 2);
            ctx.fill();
            // Head (still normal size, near ground)
            ctx.fillStyle = '#C8A080';
            this.roundRect(ctx, x + 2, y, 14, 12, 3);
            ctx.fill();
            // Hair
            ctx.fillStyle = '#1E1008';
            ctx.fillRect(x + 1, y - 5, 16, 6);
            // Glasses
            ctx.strokeStyle = '#1A1A1A';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(x + 3, y + 3, 4, 3);
            ctx.strokeRect(x + 9, y + 3, 4, 3);
            // Beard
            ctx.fillStyle = '#2A1808';
            ctx.fillRect(x + 4, y + 9, 9, 3);
            // Legs (squatted)
            ctx.fillStyle = '#2A2A2A';
            ctx.fillRect(x + 1, y + 22, 7, 5);
            ctx.fillRect(x + 10, y + 22, 7, 5);
            return;
        }
        // Normal Jarrad
        ctx.fillStyle = '#111111';
        ctx.fillRect(x, y + 14, 18, 30);
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(x + 5, y + 22, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 12, y + 28, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 7, y + 35, 1.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x + 14, y + 19, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#C8A080';
        this.roundRect(ctx, x + 2, y, 14, 14, 3);
        ctx.fill();
        ctx.fillStyle = '#1E1008';
        ctx.fillRect(x + 1, y - 7, 16, 8);
        ctx.fillRect(x + 2, y - 9, 5, 4);
        ctx.fillRect(x + 10, y - 8, 4, 3);
        ctx.strokeStyle = '#1A1A1A';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(x + 3, y + 4, 4, 3);
        ctx.strokeRect(x + 9, y + 4, 4, 3);
        ctx.beginPath();
        ctx.moveTo(x + 7, y + 5.5);
        ctx.lineTo(x + 9, y + 5.5);
        ctx.stroke();
        ctx.fillStyle = '#1A1A1A';
        ctx.fillRect(x + 4, y + 5, 2, 2);
        ctx.fillRect(x + 10, y + 5, 2, 2);
        ctx.fillStyle = '#2A1808';
        ctx.fillRect(x + 4, y + 10, 9, 4);
        ctx.fillStyle = '#2A2A2A';
        ctx.fillRect(x + 2, y + 44, 6, 8);
        ctx.fillRect(x + 10, y + 44, 6, 8);
    }
    // ─── Pigeon ───────────────────────────────────────────────────────────────
    drawPigeon(ctx) {
        const pg = this.pigeon;
        const facing = pg.vx >= 0 ? 1 : -1;
        ctx.save();
        ctx.translate(pg.x + 9, pg.y + 10);
        if (facing < 0)
            ctx.scale(-1, 1);
        ctx.fillStyle = '#888888';
        this.roundRect(ctx, -8, -6, 16, 12, 6);
        ctx.fill();
        ctx.fillStyle = '#666666';
        this.roundRect(ctx, -6, -4, 12, 6, 4);
        ctx.fill();
        // Wings flap when flying
        if (pg.flying) {
            const flapAng = Math.sin(this.gameTime * 15) * 0.4;
            ctx.save();
            ctx.rotate(flapAng);
            ctx.fillStyle = '#777777';
            ctx.fillRect(-8, -10, 16, 5);
            ctx.restore();
        }
        ctx.fillStyle = '#AAAAAA';
        this.roundRect(ctx, 4, -10, 10, 9, 4);
        ctx.fill();
        ctx.fillStyle = '#FF4400';
        ctx.beginPath();
        ctx.arc(11, -7, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.beginPath();
        ctx.arc(11, -7, 1, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#CC9900';
        ctx.beginPath();
        ctx.moveTo(14, -6);
        ctx.lineTo(18, -4);
        ctx.lineTo(14, -3);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#CC9900';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-2, 6);
        ctx.lineTo(-2, 12);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(3, 6);
        ctx.lineTo(3, 12);
        ctx.stroke();
        ctx.restore();
    }
    // ─── HUD ──────────────────────────────────────────────────────────────────
    drawHUD(ctx) {
        // Main HUD strip
        ctx.fillStyle = 'rgba(0,0,0,0.55)';
        ctx.fillRect(0, 0, VW, 36);
        // Hearts
        ctx.textAlign = 'left';
        for (let i = 0; i < 3; i++) {
            this.drawHeart(ctx, 8 + i * 22, 18, 8, i < this.jarrad.lives ? '#FF4060' : '#555555');
        }
        // Level
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(`LEVEL ${this.jarrad.currentLevel}/6`, VW / 2, 22);
        // Timer
        const mins = Math.floor(this.gameTime / 60);
        const secs = Math.floor(this.gameTime % 60);
        ctx.textAlign = 'right';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText(`${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`, VW - 8, 22);
        // Wind indicator
        if (this.windActive) {
            ctx.save();
            ctx.globalAlpha = this.windAlpha;
            ctx.font = '14px system-ui';
            ctx.textAlign = 'right';
            ctx.fillText('💨', VW - 8, 35);
            ctx.restore();
        }
        // Crumble warning
        if (this.crumble5AState === 'shaking') {
            ctx.save();
            ctx.fillStyle = '#FF8800';
            ctx.font = 'bold 10px system-ui';
            ctx.textAlign = 'center';
            ctx.fillText('⚠ PLANK BREAKING!', VW / 2, 34);
            ctx.restore();
        }
        // Mini-map (top right strip below HUD)
        this.drawMiniMap(ctx);
    }
    drawMiniMap(ctx) {
        // Draw a tiny vertical minimap on the right side
        const mmX = VW - 28, mmY = 42, mmW = 22, mmH = 120;
        ctx.fillStyle = 'rgba(0,0,0,0.35)';
        this.roundRect(ctx, mmX - 2, mmY - 2, mmW + 4, mmH + 4, 4);
        ctx.fill();
        // Scale: VH (700) maps to mmH (120), VW to mmW
        const scaleX = mmW / VW;
        const scaleY = mmH / 700;
        // Draw platform dots
        for (let i = 0; i < this.platforms.length; i++) {
            const p = this.platforms[i];
            if (p.type === 'crumbling' && this.crumble5AState === 'broken')
                continue;
            const px0 = (p.type === 'moving') ? this.movingPlatX : p.baseX;
            const mx = mmX + px0 * scaleX;
            const my = mmY + p.y * scaleY;
            const mw = p.width * scaleX;
            let colour = '#A0A0A0';
            if (p.type === 'win')
                colour = '#FFD700';
            if (p.type === 'crumbling')
                colour = '#C8A040';
            if (p.type === 'moving')
                colour = '#8080D0';
            ctx.fillStyle = colour;
            ctx.fillRect(mx, my, Math.max(mw, 2), 2);
        }
        // Jarrad dot
        const j = this.jarrad;
        const jmx = mmX + (j.x + j.w / 2) * scaleX;
        const jmy = mmY + (j.y + j.h) * scaleY;
        ctx.fillStyle = '#00FF88';
        ctx.beginPath();
        ctx.arc(jmx, jmy, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }
    drawHeart(ctx, x, y, r, colour) {
        ctx.fillStyle = colour;
        ctx.beginPath();
        ctx.moveTo(x, y + r * 0.4);
        ctx.bezierCurveTo(x, y - r * 0.6, x - r * 1.2, y - r * 0.6, x - r * 1.2, y);
        ctx.bezierCurveTo(x - r * 1.2, y + r * 0.7, x, y + r * 1.2, x, y + r * 1.4);
        ctx.bezierCurveTo(x, y + r * 1.2, x + r * 1.2, y + r * 0.7, x + r * 1.2, y);
        ctx.bezierCurveTo(x + r * 1.2, y - r * 0.6, x, y - r * 0.6, x, y + r * 0.4);
        ctx.closePath();
        ctx.fill();
    }
    // ─── Win/Lost overlays ───────────────────────────────────────────────────
    drawWinOverlay(ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0.75)';
        ctx.fillRect(0, 0, VW, VH);
        ctx.textAlign = 'center';
        ctx.font = 'bold 52px system-ui';
        ctx.fillStyle = '#FFD700';
        ctx.fillText('🪣 DELIVERED!', VW / 2, VH / 2 - 40);
        ctx.font = 'bold 22px system-ui';
        ctx.fillStyle = '#5EDB7D';
        ctx.fillText('🏆 Bucket reached the top!', VW / 2, VH / 2 + 10);
    }
    drawLostOverlay(ctx) {
        ctx.fillStyle = 'rgba(0,0,0,0.80)';
        ctx.fillRect(0, 0, VW, VH);
        ctx.textAlign = 'center';
        ctx.font = 'bold 48px system-ui';
        ctx.fillStyle = '#F07070';
        ctx.fillText('💦 SPLAT!', VW / 2, VH / 2 - 60);
        ctx.font = 'bold 16px system-ui';
        ctx.fillStyle = '#FFFFFF';
        ctx.fillText("Jarrad's in the pool.", VW / 2, VH / 2 - 20);
        if (!this.retried) {
            ctx.fillStyle = '#C1666B';
            this.roundRect(ctx, VW / 2 - 70, VH / 2 + 10, 140, 44, 10);
            ctx.fill();
            ctx.fillStyle = '#FFFFFF';
            ctx.font = 'bold 18px system-ui';
            ctx.fillText('🔄 RETRY', VW / 2, VH / 2 + 38);
            const handler = (e) => {
                const rect = this.canvas.getBoundingClientRect();
                let cx, cy;
                if (e instanceof MouseEvent) {
                    cx = (e.clientX - rect.left) * (VW / rect.width);
                    cy = (e.clientY - rect.top) * (VH / rect.height);
                }
                else {
                    cx = (e.changedTouches[0].clientX - rect.left) * (VW / rect.width);
                    cy = (e.changedTouches[0].clientY - rect.top) * (VH / rect.height);
                }
                if (cx > VW / 2 - 70 && cx < VW / 2 + 70 && cy > VH / 2 + 10 && cy < VH / 2 + 54) {
                    this.canvas.removeEventListener('click', handler);
                    this.canvas.removeEventListener('touchend', handler);
                    this.retried = true;
                    this.jarrad.lives = 3;
                    this.initGame();
                }
            };
            this.canvas?.addEventListener('click', handler, { once: false });
            this.canvas?.addEventListener('touchend', handler, { once: false });
        }
    }
    // ─── Finish game ──────────────────────────────────────────────────────────
    finishGame(won) {
        this.phase = 'result';
        const lives = this.jarrad.lives;
        let score, qualityPct, message;
        if (won) {
            if (lives >= 3) {
                score = 100;
                qualityPct = 1.0;
                message = "Jarrad didn't spill a drop. Tsuyoshi's still shaking though.";
            }
            else if (lives === 2) {
                score = 80;
                qualityPct = 0.8;
                message = "A pigeon got involved. Classic site visit.";
            }
            else {
                score = 60;
                qualityPct = 0.6;
                message = "The bucket made it. Jarrad's ego didn't.";
            }
        }
        else {
            score = 0;
            qualityPct = 0;
            message = "Jarrad's in the pool. The Marbellino too. Phil's invoice is on the way.";
        }
        if (this.ctx)
            this.drawResultScreen(this.ctx, won, score, message);
        setTimeout(() => this.onComplete?.({ score, qualityPct, message }), 3000);
    }
    drawResultScreen(ctx, won, score, message) {
        ctx.fillStyle = 'rgba(0,0,0,0.82)';
        ctx.fillRect(0, 0, VW, VH);
        ctx.textAlign = 'center';
        ctx.font = '72px system-ui';
        ctx.fillText(won ? '🏆' : '💀', VW / 2, VH / 2 - 90);
        const colour = score >= 75 ? '#5EDB7D' : score >= 50 ? '#F7C948' : '#F07070';
        ctx.fillStyle = colour;
        ctx.font = 'bold 64px system-ui, sans-serif';
        ctx.fillText(`${score}%`, VW / 2, VH / 2 - 10);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '15px system-ui, sans-serif';
        this.wrapText(ctx, message, VW / 2, VH / 2 + 40, 340, 22);
    }
    wrapText(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '', curY = y;
        for (const word of words) {
            const test = line + word + ' ';
            if (ctx.measureText(test).width > maxWidth && line !== '') {
                ctx.fillText(line, x, curY);
                line = word + ' ';
                curY += lineHeight;
            }
            else {
                line = test;
            }
        }
        ctx.fillText(line, x, curY);
    }
    // ─── Helpers ──────────────────────────────────────────────────────────────
    roundRect(ctx, x, y, w, h, r) {
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
        ctx.closePath();
    }
}
