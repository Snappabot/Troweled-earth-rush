// ─── Photo achievement data ────────────────────────────────────────────────────
export const PHOTO_ACHIEVEMENTS = [
    { id: 'timber-bluestone', file: 'images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg', name: 'Timber & Bluestone' },
    { id: 'angular-bay', file: 'images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg', name: 'Angular Bay House' },
    { id: 'haussmann', file: 'images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg', name: 'Haussmann Mansion' },
    { id: 'brutalist', file: 'images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg', name: 'Brutalist Compound' },
    { id: 'sculptural-olive', file: 'images/787315c4-a661-4dca-8567-b7a18f104665.jpg', name: 'Sculptural Olive' },
    { id: 'curved-balcony', file: 'images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg', name: 'Curved Balcony' },
    { id: 'corten-plaster', file: 'images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg', name: 'Corten & Plaster' },
    { id: 'terracotta-mono', file: 'images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg', name: 'Terracotta Monolith' },
];
// ─── Achievement storage ───────────────────────────────────────────────────────
const STORAGE_KEY = 'tem-rush-achievements';
export function getCollected() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    }
    catch {
        return [];
    }
}
export function markCollected(id) {
    const existing = getCollected();
    if (existing.includes(id))
        return false;
    existing.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return true;
}
export function isAllCollected() {
    return getCollected().length >= PHOTO_ACHIEVEMENTS.length;
}
function pickPhoto() {
    const collected = getCollected();
    const uncollected = PHOTO_ACHIEVEMENTS.filter(p => !collected.includes(p.id));
    if (uncollected.length > 0) {
        return uncollected[Math.floor(Math.random() * uncollected.length)];
    }
    return PHOTO_ACHIEVEMENTS[Math.floor(Math.random() * PHOTO_ACHIEVEMENTS.length)];
}
// ─── Coating texture ───────────────────────────────────────────────────────────
function buildCoating(sctx, w, h) {
    sctx.fillStyle = '#C8B89A';
    sctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 800; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const len = 20 + Math.random() * 60;
        const angle = Math.random() * Math.PI;
        const shade = Math.floor(180 + Math.random() * 40);
        sctx.strokeStyle = `rgb(${shade},${shade - 10},${shade - 20})`;
        sctx.lineWidth = 1 + Math.random() * 3;
        sctx.globalAlpha = 0.3 + Math.random() * 0.4;
        sctx.beginPath();
        sctx.moveTo(x, y);
        sctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        sctx.stroke();
    }
    sctx.globalAlpha = 1;
    sctx.font = 'bold 48px system-ui';
    sctx.textAlign = 'center';
    sctx.fillStyle = 'rgba(180,160,130,0.4)';
    sctx.fillText('TROWELED EARTH', w / 2, h / 2 - 20);
    sctx.font = '22px system-ui';
    sctx.fillStyle = 'rgba(180,160,130,0.3)';
    sctx.fillText('Scratch to reveal', w / 2, h / 2 + 20);
}
// ─── Erase stroke on scratch canvas ───────────────────────────────────────────
function eraseStroke(sctx, x1, y1, x2, y2, radius = 45) {
    sctx.globalCompositeOperation = 'destination-out';
    sctx.strokeStyle = 'rgba(0,0,0,1)';
    sctx.lineCap = 'round';
    sctx.lineJoin = 'round';
    sctx.lineWidth = radius * 2;
    sctx.beginPath();
    sctx.moveTo(x1, y1);
    sctx.lineTo(x2, y2);
    sctx.stroke();
    sctx.globalCompositeOperation = 'source-over';
}
// ─── Calculate % of coating removed ───────────────────────────────────────────
function measureCoverage(sctx, w, h) {
    const data = sctx.getImageData(0, 0, w, h).data;
    let transparent = 0;
    const total = w * h;
    for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 128)
            transparent++;
    }
    return transparent / total;
}
// ─── Draw trowel cursor ────────────────────────────────────────────────────────
function drawTrowelCursor(ctx, x, y) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(Math.PI / 4);
    // Handle
    ctx.strokeStyle = '#8B6914';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, 36);
    ctx.stroke();
    // Blade (trapezoid)
    ctx.fillStyle = '#C0C0C0';
    ctx.strokeStyle = '#888';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(-14, 0);
    ctx.lineTo(14, 0);
    ctx.lineTo(10, -28);
    ctx.lineTo(-10, -28);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // Shine
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.beginPath();
    ctx.moveTo(-8, -4);
    ctx.lineTo(4, -4);
    ctx.lineTo(2, -22);
    ctx.lineTo(-6, -22);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
}
// ─── Draw cover-fit image ──────────────────────────────────────────────────────
function drawImageCover(ctx, img, cw, ch) {
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.drawImage(img, dx, dy, dw, dh);
}
// ─── TrowelingGame ─────────────────────────────────────────────────────────────
export class TrowelingGame {
    container = null;
    canvas = null;
    ctx = null;
    scratch = null;
    sctx = null;
    onComplete = null;
    photo = null;
    img = null;
    imgLoaded = false;
    // Pointer state
    lastX = 0;
    lastY = 0;
    pointerDown = false;
    cursorX = -999;
    cursorY = -999;
    // Timer & game state
    DURATION = 30;
    timeLeft = 30;
    timerInterval = null;
    rafId = 0;
    done = false;
    revealed = 0; // 0–1
    // Coverage sample throttle
    lastSampleTime = 0;
    SAMPLE_INTERVAL = 250; // ms
    // Toast
    toastMsg = '';
    toastAlpha = 0;
    // ─── Bound event handlers (for cleanup) ─────────────────────────────────────
    _onMouseMove;
    _onMouseDown;
    _onMouseUp;
    _onTouchStart;
    _onTouchMove;
    _onTouchEnd;
    constructor() {
        this._onMouseMove = this.handleMouseMove.bind(this);
        this._onMouseDown = this.handleMouseDown.bind(this);
        this._onMouseUp = () => { this.pointerDown = false; };
        this._onTouchStart = this.handleTouchStart.bind(this);
        this._onTouchMove = this.handleTouchMove.bind(this);
        this._onTouchEnd = () => { this.pointerDown = false; };
    }
    mount(container, onComplete) {
        this.container = container;
        this.onComplete = onComplete;
        this.done = false;
        this.revealed = 0;
        this.timeLeft = this.DURATION;
        this.toastMsg = '';
        this.toastAlpha = 0;
        this.photo = pickPhoto();
        // ── Canvas setup (dimensions BEFORE getContext) ───────────────────────────
        this.canvas = document.createElement('canvas');
        this.canvas.width = container.clientWidth || window.innerWidth;
        this.canvas.height = container.clientHeight || window.innerHeight;
        this.canvas.style.cssText = 'position:absolute;inset:0;display:block;cursor:none;touch-action:none;';
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
        if (!this.ctx)
            throw new Error('Canvas 2D not supported');
        container.appendChild(this.canvas);
        // ── Scratch canvas (off-screen coating layer) ─────────────────────────────
        this.scratch = document.createElement('canvas');
        this.scratch.width = this.canvas.width;
        this.scratch.height = this.canvas.height;
        this.sctx = this.scratch.getContext('2d', { willReadFrequently: true });
        if (!this.sctx)
            throw new Error('Scratch canvas 2D not supported');
        // Build the plaster coating texture
        buildCoating(this.sctx, this.scratch.width, this.scratch.height);
        // ── Load photo ────────────────────────────────────────────────────────────
        this.img = new Image();
        this.img.onload = () => { this.imgLoaded = true; };
        this.img.onerror = () => { this.imgLoaded = true; }; // continue even if broken
        this.img.src = this.photo.file;
        // ── Attach events ─────────────────────────────────────────────────────────
        this.canvas.addEventListener('mousemove', this._onMouseMove);
        this.canvas.addEventListener('mousedown', this._onMouseDown);
        window.addEventListener('mouseup', this._onMouseUp);
        this.canvas.addEventListener('touchstart', this._onTouchStart, { passive: false });
        this.canvas.addEventListener('touchmove', this._onTouchMove, { passive: false });
        this.canvas.addEventListener('touchend', this._onTouchEnd);
        // ── Countdown timer ───────────────────────────────────────────────────────
        this.timerInterval = setInterval(() => {
            if (this.done)
                return;
            this.timeLeft--;
            if (this.timeLeft <= 0)
                this.finish();
        }, 1000);
        // ── Draw loop ─────────────────────────────────────────────────────────────
        this.loop();
    }
    // ─── Event handlers ─────────────────────────────────────────────────────────
    handleMouseDown(e) {
        this.pointerDown = true;
        const r = this.canvas.getBoundingClientRect();
        this.lastX = e.clientX - r.left;
        this.lastY = e.clientY - r.top;
        this.cursorX = this.lastX;
        this.cursorY = this.lastY;
    }
    handleMouseMove(e) {
        const r = this.canvas.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        this.cursorX = x;
        this.cursorY = y;
        if (this.pointerDown && !this.done) {
            this.scrape(this.lastX, this.lastY, x, y);
            this.lastX = x;
            this.lastY = y;
        }
    }
    handleTouchStart(e) {
        e.preventDefault();
        this.pointerDown = true;
        const t = e.touches[0];
        const r = this.canvas.getBoundingClientRect();
        this.lastX = t.clientX - r.left;
        this.lastY = t.clientY - r.top;
        this.cursorX = this.lastX;
        this.cursorY = this.lastY;
    }
    handleTouchMove(e) {
        e.preventDefault();
        if (!this.pointerDown || this.done)
            return;
        const t = e.touches[0];
        const r = this.canvas.getBoundingClientRect();
        const x = t.clientX - r.left;
        const y = t.clientY - r.top;
        this.cursorX = x;
        this.cursorY = y;
        this.scrape(this.lastX, this.lastY, x, y);
        this.lastX = x;
        this.lastY = y;
    }
    // ─── Scrape action ───────────────────────────────────────────────────────────
    scrape(x1, y1, x2, y2) {
        if (!this.sctx || !this.scratch || this.done)
            return;
        eraseStroke(this.sctx, x1, y1, x2, y2, 45);
        // Sample coverage at intervals to avoid expensive getImageData every frame
        const now = performance.now();
        if (now - this.lastSampleTime > this.SAMPLE_INTERVAL) {
            this.lastSampleTime = now;
            this.revealed = measureCoverage(this.sctx, this.scratch.width, this.scratch.height);
            if (this.revealed >= 0.85)
                this.finish();
        }
    }
    // ─── Render loop ─────────────────────────────────────────────────────────────
    loop() {
        if (this.done && this.toastAlpha <= 0)
            return;
        const ctx = this.ctx;
        const canvas = this.canvas;
        if (!ctx || !canvas)
            return;
        const w = canvas.width;
        const h = canvas.height;
        ctx.clearRect(0, 0, w, h);
        // 1. Draw photo background (cover-fit)
        if (this.imgLoaded && this.img && this.img.naturalWidth > 0) {
            drawImageCover(ctx, this.img, w, h);
        }
        else {
            // Placeholder while image loads
            ctx.fillStyle = '#2a2a20';
            ctx.fillRect(0, 0, w, h);
        }
        // 2. Draw scratch/coating layer on top
        if (this.scratch) {
            ctx.drawImage(this.scratch, 0, 0);
        }
        // 3. HUD — only while playing
        if (!this.done) {
            this.drawHUD(ctx, w, h);
        }
        // 4. Trowel cursor
        if (this.cursorX > 0 && !this.done) {
            drawTrowelCursor(ctx, this.cursorX, this.cursorY);
        }
        // 5. Toast message
        if (this.toastAlpha > 0) {
            this.drawToast(ctx, w, h);
            this.toastAlpha -= 0.012;
        }
        this.rafId = requestAnimationFrame(() => this.loop());
    }
    // ─── HUD ─────────────────────────────────────────────────────────────────────
    drawHUD(ctx, w, h) {
        const frac = this.timeLeft / this.DURATION;
        const barW = w * 0.8;
        const barX = w * 0.1;
        const barY = 16;
        const barH = 14;
        const r = 7;
        // Timer track
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        this.roundRect(ctx, barX, barY, barW, barH, r);
        ctx.fill();
        // Timer fill
        const colour = frac < 0.33 ? '#F07070' : frac < 0.6 ? '#F7C948' : '#5EDB7D';
        ctx.fillStyle = colour;
        this.roundRect(ctx, barX, barY, barW * frac, barH, r);
        ctx.fill();
        // Timer label
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${Math.round(h * 0.03)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 6;
        ctx.fillText(`${Math.ceil(this.timeLeft)}s`, w / 2, barY + barH + 22);
        // Coverage %
        const pct = Math.round(this.revealed * 100);
        ctx.font = `900 ${Math.round(h * 0.09)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 12;
        ctx.fillText(`${pct}%`, w / 2, h - 32);
        ctx.shadowBlur = 0;
        // Instruction (only first 5 seconds)
        if (this.timeLeft > 25) {
            ctx.font = `bold ${Math.round(h * 0.03)}px system-ui`;
            ctx.fillStyle = 'rgba(255,255,255,0.85)';
            ctx.textAlign = 'center';
            ctx.fillText('🪣  Scrape away the plaster!', w / 2, h / 2);
        }
    }
    roundRect(ctx, x, y, w, h, r) {
        if (w < 0)
            return;
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
    // ─── Toast ────────────────────────────────────────────────────────────────────
    drawToast(ctx, w, h) {
        const alpha = Math.min(1, this.toastAlpha);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.font = `bold ${Math.round(h * 0.035)}px system-ui`;
        ctx.textAlign = 'center';
        const lines = this.toastMsg.split('\n');
        const lineH = Math.round(h * 0.045);
        const totalH = lines.length * lineH + 24;
        const ty = h * 0.45 - totalH / 2;
        const tw = w * 0.85;
        const tx = (w - tw) / 2;
        this.roundRect(ctx, tx, ty, tw, totalH, 16);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.shadowColor = 'rgba(0,0,0,0.6)';
        ctx.shadowBlur = 8;
        lines.forEach((line, i) => {
            ctx.fillText(line, w / 2, ty + 22 + i * lineH);
        });
        ctx.restore();
    }
    // ─── Game end ─────────────────────────────────────────────────────────────────
    finish() {
        if (this.done)
            return;
        this.done = true;
        if (this.timerInterval)
            clearInterval(this.timerInterval);
        // Final coverage sample
        if (this.sctx && this.scratch) {
            this.revealed = measureCoverage(this.sctx, this.scratch.width, this.scratch.height);
        }
        const rawPct = Math.round(this.revealed * 100);
        const scorePct = Math.max(20, rawPct); // minimum 20 so photo always awarded
        const qualityPct = scorePct / 100;
        // Achievement
        const photo = this.photo;
        const isNew = markCollected(photo.id);
        const collectedCount = getCollected().length;
        const all = isAllCollected();
        // Build result screen overlay on top of canvas
        this.showResultScreen(scorePct, photo, isNew, collectedCount, all, qualityPct);
    }
    showResultScreen(scorePct, photo, isNew, collectedCount, all, qualityPct) {
        const ctx = this.ctx;
        const canvas = this.canvas;
        if (!ctx || !canvas)
            return;
        const w = canvas.width;
        const h = canvas.height;
        // Draw final state one more time
        ctx.clearRect(0, 0, w, h);
        if (this.imgLoaded && this.img && this.img.naturalWidth > 0) {
            drawImageCover(ctx, this.img, w, h);
        }
        else {
            ctx.fillStyle = '#2a2a20';
            ctx.fillRect(0, 0, w, h);
        }
        if (this.scratch)
            ctx.drawImage(this.scratch, 0, 0);
        // Dim overlay
        ctx.fillStyle = 'rgba(0,0,0,0.65)';
        ctx.fillRect(0, 0, w, h);
        // Score
        const colour = scorePct >= 85 ? '#5EDB7D' : scorePct >= 60 ? '#F7C948' : '#F07070';
        ctx.font = `900 ${Math.round(h * 0.15)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillStyle = colour;
        ctx.shadowColor = 'rgba(0,0,0,0.8)';
        ctx.shadowBlur = 20;
        ctx.fillText(`${scorePct}%`, w / 2, h * 0.35);
        // Photo name
        ctx.font = `bold ${Math.round(h * 0.04)}px system-ui`;
        ctx.fillStyle = '#fff';
        ctx.shadowBlur = 10;
        ctx.fillText(`📸 ${photo.name}`, w / 2, h * 0.47);
        // Achievement line
        let achLine;
        if (all) {
            achLine = '🏆 FULL TEM COLLECTION!';
        }
        else if (isNew) {
            achLine = `✨ NEW PHOTO UNLOCKED!`;
        }
        else {
            achLine = 'Already in your collection';
        }
        ctx.font = `bold ${Math.round(h * 0.032)}px system-ui`;
        ctx.fillStyle = all ? '#FFD700' : isNew ? '#5EDB7D' : '#aaa';
        ctx.shadowBlur = 8;
        ctx.fillText(achLine, w / 2, h * 0.56);
        // Collection count
        ctx.font = `${Math.round(h * 0.026)}px system-ui`;
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.shadowBlur = 4;
        ctx.fillText(`Collection: ${collectedCount} / ${PHOTO_ACHIEVEMENTS.length}`, w / 2, h * 0.64);
        ctx.shadowBlur = 0;
        // Build message for MiniGameResult
        const message = all
            ? '🏆 Full TEM Collection complete!'
            : isNew
                ? `📸 New photo unlocked: ${photo.name}`
                : `${photo.name} — already in collection`;
        const result = { score: scorePct, qualityPct, message };
        setTimeout(() => this.onComplete?.(result), 2800);
    }
    // ─── Cleanup ──────────────────────────────────────────────────────────────────
    unmount() {
        this.done = true;
        if (this.timerInterval)
            clearInterval(this.timerInterval);
        if (this.rafId)
            cancelAnimationFrame(this.rafId);
        if (this.canvas) {
            this.canvas.removeEventListener('mousemove', this._onMouseMove);
            this.canvas.removeEventListener('mousedown', this._onMouseDown);
            this.canvas.removeEventListener('touchstart', this._onTouchStart);
            this.canvas.removeEventListener('touchmove', this._onTouchMove);
            this.canvas.removeEventListener('touchend', this._onTouchEnd);
            this.canvas.remove();
        }
        window.removeEventListener('mouseup', this._onMouseUp);
        this.canvas = null;
        this.ctx = null;
        this.scratch = null;
        this.sctx = null;
        this.container = null;
        this.onComplete = null;
        this.img = null;
    }
}
