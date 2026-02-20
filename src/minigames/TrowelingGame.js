// TEM hero job photos — served from /public/images/
const TEM_PHOTOS = [
    'images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg', // Timber & Bluestone
    'images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg', // Angular Bay
    'images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg', // Haussmann
    'images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg', // Brutalist Compound
    'images/787315c4-a661-4dca-8567-b7a18f104665.jpg', // Sculptural Olive
    'images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg', // Curved Balcony
    'images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg', // Corten & Plaster
    'images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg', // Terracotta Monolith
];
export class TrowelingGame {
    container = null;
    canvas = null;
    ctx = null;
    // Off-screen scratch layer — starts opaque, gets erased as you trowel
    scratchCanvas;
    scratchCtx;
    photo = null;
    photoLoaded = false;
    timeLeft = 30;
    lastFrameTime = 0;
    animFrame = null;
    onComplete = null;
    done = false;
    isDrawing = false;
    lastX = 0;
    lastY = 0;
    brushRadius = 38; // trowel swipe width
    coveragePct = 0;
    coverageSampleTimer = 0;
    instructionAlpha = 1;
    instructionTimer = 2.5;
    // Bound event handlers (for clean removal)
    _onMouseDown;
    _onMouseMove;
    _onMouseUp;
    _onTouchStart;
    _onTouchMove;
    _onTouchEnd;
    constructor() {
        this.scratchCanvas = document.createElement('canvas');
        const ctx = this.scratchCanvas.getContext('2d');
        if (!ctx)
            throw new Error('Cannot get 2D context');
        this.scratchCtx = ctx;
        // Bind event handlers once
        this._onMouseDown = (e) => this.onPointerDown(e.offsetX, e.offsetY);
        this._onMouseMove = (e) => { if (this.isDrawing)
            this.onPointerMove(e.offsetX, e.offsetY); };
        this._onMouseUp = () => { this.isDrawing = false; };
        this._onTouchStart = (e) => {
            e.preventDefault();
            const t = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.onPointerDown(t.clientX - rect.left, t.clientY - rect.top);
        };
        this._onTouchMove = (e) => {
            e.preventDefault();
            if (!this.isDrawing)
                return;
            const t = e.touches[0];
            const rect = this.canvas.getBoundingClientRect();
            this.onPointerMove(t.clientX - rect.left, t.clientY - rect.top);
        };
        this._onTouchEnd = () => { this.isDrawing = false; };
    }
    mount(container, onComplete) {
        this.container = container;
        this.onComplete = onComplete;
        this.done = false;
        this.timeLeft = 30;
        this.coveragePct = 0;
        this.instructionAlpha = 1;
        this.instructionTimer = 2.5;
        // Canvas fills the container
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
      width: 100%; height: 100%;
      display: block;
      cursor: none;
      touch-action: none;
    `;
        container.appendChild(this.canvas);
        this.resize();
        // Load a random TEM photo
        const photoSrc = TEM_PHOTOS[Math.floor(Math.random() * TEM_PHOTOS.length)];
        this.photo = new Image();
        this.photo.crossOrigin = 'anonymous';
        this.photo.onload = () => {
            this.photoLoaded = true;
            this.buildScratchLayer();
        };
        this.photo.onerror = () => {
            // If photo fails to load, build scratch layer without photo
            this.photoLoaded = false;
            this.buildScratchLayer();
        };
        this.photo.src = photoSrc;
        // Events
        this.canvas.addEventListener('mousedown', this._onMouseDown);
        this.canvas.addEventListener('mousemove', this._onMouseMove);
        this.canvas.addEventListener('mouseup', this._onMouseUp);
        this.canvas.addEventListener('touchstart', this._onTouchStart, { passive: false });
        this.canvas.addEventListener('touchmove', this._onTouchMove, { passive: false });
        this.canvas.addEventListener('touchend', this._onTouchEnd);
        this.lastFrameTime = performance.now();
        this.animFrame = requestAnimationFrame((t) => this.loop(t));
    }
    resize() {
        if (!this.canvas || !this.container)
            return;
        const w = this.container.clientWidth || window.innerWidth;
        const h = this.container.clientHeight || window.innerHeight;
        this.canvas.width = w;
        this.canvas.height = h;
        this.scratchCanvas.width = w;
        this.scratchCanvas.height = h;
        this.ctx = this.canvas.getContext('2d');
    }
    /** Fill scratch canvas with rough render texture */
    buildScratchLayer() {
        const w = this.scratchCanvas.width;
        const h = this.scratchCanvas.height;
        // Start fully opaque dark rough render
        this.scratchCtx.globalCompositeOperation = 'source-over';
        this.scratchCtx.fillStyle = '#2E2E28';
        this.scratchCtx.fillRect(0, 0, w, h);
        // Noise texture overlay — random lighter/darker patches
        const grain = this.scratchCtx.createImageData(w, h);
        for (let i = 0; i < grain.data.length; i += 4) {
            const v = 30 + Math.random() * 40;
            grain.data[i] = v;
            grain.data[i + 1] = v - 4;
            grain.data[i + 2] = v - 8;
            grain.data[i + 3] = 180 + Math.random() * 75;
        }
        this.scratchCtx.putImageData(grain, 0, 0);
        // Subtle trowel-mark lines across the rough surface
        this.scratchCtx.globalAlpha = 0.18;
        for (let y = 0; y < h; y += 18 + Math.random() * 12) {
            this.scratchCtx.strokeStyle = Math.random() > 0.5 ? '#111' : '#555';
            this.scratchCtx.lineWidth = 1 + Math.random() * 2;
            this.scratchCtx.beginPath();
            this.scratchCtx.moveTo(0, y + (Math.random() - 0.5) * 8);
            this.scratchCtx.lineTo(w, y + (Math.random() - 0.5) * 8);
            this.scratchCtx.stroke();
        }
        this.scratchCtx.globalAlpha = 1;
    }
    onPointerDown(x, y) {
        this.isDrawing = true;
        this.lastX = x;
        this.lastY = y;
        this.erase(x, y, x, y);
    }
    onPointerMove(x, y) {
        this.erase(this.lastX, this.lastY, x, y);
        this.lastX = x;
        this.lastY = y;
    }
    /** Erase a stroke from the scratch layer, revealing photo underneath */
    erase(x1, y1, x2, y2) {
        this.scratchCtx.globalCompositeOperation = 'destination-out';
        this.scratchCtx.strokeStyle = 'rgba(0,0,0,1)';
        this.scratchCtx.lineCap = 'round';
        this.scratchCtx.lineJoin = 'round';
        this.scratchCtx.lineWidth = this.brushRadius * 2;
        this.scratchCtx.beginPath();
        this.scratchCtx.moveTo(x1, y1);
        this.scratchCtx.lineTo(x2, y2);
        this.scratchCtx.stroke();
        this.scratchCtx.globalCompositeOperation = 'source-over';
    }
    /** Sample coverage (% of scratch layer that is transparent = revealed) */
    sampleCoverage() {
        const w = this.scratchCanvas.width;
        const h = this.scratchCanvas.height;
        const step = 6; // sample every 6th pixel — fast enough
        const data = this.scratchCtx.getImageData(0, 0, w, h).data;
        let total = 0, transparent = 0;
        for (let i = 3; i < data.length; i += 4 * step) {
            total++;
            if (data[i] < 128)
                transparent++;
        }
        return total > 0 ? transparent / total : 0;
    }
    loop(timestamp) {
        if (this.done || !this.ctx || !this.canvas)
            return;
        const dt = Math.min((timestamp - this.lastFrameTime) / 1000, 0.05);
        this.lastFrameTime = timestamp;
        this.timeLeft -= dt;
        this.instructionTimer -= dt;
        if (this.instructionAlpha > 0 && this.instructionTimer < 1) {
            this.instructionAlpha = Math.max(0, this.instructionTimer);
        }
        // Sample coverage every 0.4s
        this.coverageSampleTimer -= dt;
        if (this.coverageSampleTimer <= 0) {
            this.coverageSampleTimer = 0.4;
            this.coveragePct = this.sampleCoverage();
        }
        this.draw(dt);
        // Win at 85% revealed
        if (this.coveragePct >= 0.85) {
            this.coveragePct = 1.0;
            this.finish(true);
            return;
        }
        // Time out
        if (this.timeLeft <= 0) {
            this.timeLeft = 0;
            this.finish(false);
            return;
        }
        this.animFrame = requestAnimationFrame((t) => this.loop(t));
    }
    draw(_dt) {
        const ctx = this.ctx;
        const canvas = this.canvas;
        const w = canvas.width;
        const h = canvas.height;
        // ── Background photo ──────────────────────────────────────────────────────
        ctx.clearRect(0, 0, w, h);
        if (this.photoLoaded && this.photo) {
            // Cover-fit the photo
            const scale = Math.max(w / this.photo.width, h / this.photo.height);
            const pw = this.photo.width * scale;
            const ph = this.photo.height * scale;
            ctx.drawImage(this.photo, (w - pw) / 2, (h - ph) / 2, pw, ph);
        }
        else {
            // Fallback gradient if photo didn't load
            const grad = ctx.createLinearGradient(0, 0, w, h);
            grad.addColorStop(0, '#C49A7A');
            grad.addColorStop(1, '#8A6A50');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, w, h);
        }
        // ── Scratch layer on top (rough render that gets revealed away) ───────────
        ctx.drawImage(this.scratchCanvas, 0, 0);
        // ── Timer bar ─────────────────────────────────────────────────────────────
        const timerFrac = Math.max(0, this.timeLeft / 30);
        const barH = 10;
        const barW = w * 0.7;
        const barX = (w - barW) / 2;
        const barY = 20;
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.roundRect(barX - 2, barY - 2, barW + 4, barH + 4, 6);
        ctx.fill();
        const r = timerFrac < 0.33 ? 220 : timerFrac < 0.6 ? 200 : 60;
        const g = timerFrac < 0.33 ? 50 : timerFrac < 0.6 ? 160 : 200;
        ctx.fillStyle = `rgb(${r},${g},60)`;
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW * timerFrac, barH, 4);
        ctx.fill();
        // ── Coverage hint ─────────────────────────────────────────────────────────
        const pct = Math.round(this.coveragePct * 100);
        ctx.font = 'bold 18px system-ui';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillText(`${pct}% revealed`, w / 2 + 1, h - 24);
        ctx.fillStyle = '#fff';
        ctx.fillText(`${pct}% revealed`, w / 2, h - 25);
        // ── "TROWEL THE WALL!" instruction ────────────────────────────────────────
        if (this.instructionAlpha > 0) {
            ctx.globalAlpha = this.instructionAlpha;
            ctx.font = `bold ${Math.round(w * 0.06)}px system-ui`;
            ctx.textAlign = 'center';
            const ix = w / 2;
            const iy = h * 0.48;
            ctx.fillStyle = 'rgba(0,0,0,0.55)';
            ctx.fillText('🧱 TROWEL TO REVEAL!', ix + 2, iy + 2);
            ctx.fillStyle = '#fff';
            ctx.fillText('🧱 TROWEL TO REVEAL!', ix, iy);
            ctx.globalAlpha = 1;
        }
        // ── Trowel cursor ─────────────────────────────────────────────────────────
        if (this.isDrawing) {
            const angle = Math.atan2(this.lastY - (this.lastY - 1), this.lastX - (this.lastX - 1));
            ctx.save();
            ctx.translate(this.lastX, this.lastY);
            ctx.rotate(angle);
            // Trowel blade
            ctx.fillStyle = '#C8C8C0';
            ctx.fillRect(-this.brushRadius, -8, this.brushRadius * 2, 16);
            // Handle
            ctx.fillStyle = '#8B6040';
            ctx.fillRect(-6, -4, 12, 28);
            ctx.restore();
        }
    }
    finish(won) {
        if (this.done)
            return;
        this.done = true;
        if (this.animFrame !== null)
            cancelAnimationFrame(this.animFrame);
        // Final coverage pass
        this.coveragePct = this.sampleCoverage();
        const result = this.buildResult(won);
        // Show completion overlay for 2.5s then call onComplete
        this.showResultOverlay(result, () => {
            this.onComplete?.(result);
        });
    }
    buildResult(won) {
        const revealed = Math.round(this.coveragePct * 100);
        // Score based on revealed %, capped at 100
        const score = Math.min(100, Math.round(revealed * (won ? 1.15 : 1.0)));
        let message;
        if (score >= 95)
            message = "Flawless. Matt's crying. He won't admit it.";
        else if (score >= 85)
            message = "Bloody beautiful. TEM material right there.";
        else if (score >= 70)
            message = "Good enough. Karen won't notice the patch.";
        else if (score >= 50)
            message = "Passable. Call it 'textured'. Send the invoice.";
        else if (score >= 30)
            message = "Jarrad could've done better. Probably.";
        else
            message = "That wall has seen better days. So have you.";
        return { score, qualityPct: score / 100, message };
    }
    showResultOverlay(result, onDone) {
        if (!this.canvas)
            return;
        const ctx = this.ctx;
        const w = this.canvas.width;
        const h = this.canvas.height;
        // Fully reveal the photo first
        this.scratchCtx.globalCompositeOperation = 'destination-out';
        this.scratchCtx.fillRect(0, 0, w, h);
        this.scratchCtx.globalCompositeOperation = 'source-over';
        // Draw final state
        this.draw(0);
        // Overlay
        ctx.fillStyle = 'rgba(0,0,0,0.65)';
        ctx.fillRect(0, 0, w, h);
        const colour = result.score >= 85 ? '#5EDB7D' : result.score >= 60 ? '#F7C948' : '#F07070';
        ctx.font = `900 ${Math.round(w * 0.18)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillStyle = colour;
        ctx.fillText(`${result.score}%`, w / 2, h * 0.45);
        ctx.font = `bold ${Math.round(w * 0.042)}px system-ui`;
        ctx.fillStyle = '#fff';
        ctx.fillText(result.message, w / 2, h * 0.58);
        const label = result.score >= 85 ? '✅ GREAT WORK!' : result.score >= 60 ? '👍 DECENT JOB' : '😬 ROUGH EFFORT';
        ctx.font = `700 ${Math.round(w * 0.05)}px system-ui`;
        ctx.fillStyle = colour;
        ctx.fillText(label, w / 2, h * 0.38);
        setTimeout(onDone, 2500);
    }
    unmount() {
        if (this.animFrame !== null)
            cancelAnimationFrame(this.animFrame);
        if (this.canvas) {
            this.canvas.removeEventListener('mousedown', this._onMouseDown);
            this.canvas.removeEventListener('mousemove', this._onMouseMove);
            this.canvas.removeEventListener('mouseup', this._onMouseUp);
            this.canvas.removeEventListener('touchstart', this._onTouchStart);
            this.canvas.removeEventListener('touchmove', this._onTouchMove);
            this.canvas.removeEventListener('touchend', this._onTouchEnd);
            this.canvas.remove();
            this.canvas = null;
        }
        this.done = true;
        this.onComplete = null;
    }
}
