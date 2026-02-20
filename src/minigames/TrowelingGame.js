export class TrowelingGame {
    canvas;
    ctx;
    // Off-screen canvas tracks what's been painted (white = painted)
    coverageCanvas;
    coverageCtx;
    timeLeft = 30;
    totalTime = 30;
    isDrawing = false;
    lastX = 0;
    lastY = 0;
    mouseX = 0;
    mouseY = 0;
    trowelAngle = 0; // radians — follows movement direction
    onComplete = null;
    animFrame = null;
    lastTimestamp = 0;
    // Coverage
    coveragePct = 0;
    coverageSampleInterval = 0;
    finished = false;
    // Completion overlay timing
    completionTime = 0;
    showingResult = false;
    result = null;
    // Instruction fade
    instructionAlpha = 1;
    instructionTimer = 2; // seconds visible
    // Noise texture pixels for the rough background
    noisePixels = null;
    // Bound event handlers (so we can remove them)
    boundMouseDown;
    boundMouseMove;
    boundMouseUp;
    boundTouchStart;
    boundTouchMove;
    boundTouchEnd;
    mount(container, onComplete) {
        this.onComplete = onComplete;
        this.timeLeft = 30;
        this.totalTime = 30;
        this.coveragePct = 0;
        this.finished = false;
        this.showingResult = false;
        this.result = null;
        this.instructionAlpha = 1;
        this.instructionTimer = 2;
        this.lastTimestamp = 0;
        this.coverageSampleInterval = 0;
        // Main visible canvas
        this.canvas = document.createElement('canvas');
        this.canvas.width = container.clientWidth || window.innerWidth;
        this.canvas.height = container.clientHeight || window.innerHeight;
        this.canvas.style.cssText = `
      display: block;
      width: 100%;
      height: 100%;
      cursor: none;
      touch-action: none;
    `;
        container.appendChild(this.canvas);
        const ctx = this.canvas.getContext('2d');
        if (!ctx)
            throw new Error('Could not get 2D context');
        this.ctx = ctx;
        // Off-screen coverage canvas
        this.coverageCanvas = document.createElement('canvas');
        this.coverageCanvas.width = this.canvas.width;
        this.coverageCanvas.height = this.canvas.height;
        const covCtx = this.coverageCanvas.getContext('2d');
        if (!covCtx)
            throw new Error('Could not get coverage 2D context');
        this.coverageCtx = covCtx;
        // Pre-generate noise for wall texture
        this._generateNoise();
        // Event handlers
        this.boundMouseDown = this._onMouseDown.bind(this);
        this.boundMouseMove = this._onMouseMove.bind(this);
        this.boundMouseUp = this._onMouseUp.bind(this);
        this.boundTouchStart = this._onTouchStart.bind(this);
        this.boundTouchMove = this._onTouchMove.bind(this);
        this.boundTouchEnd = this._onTouchEnd.bind(this);
        this.canvas.addEventListener('mousedown', this.boundMouseDown);
        this.canvas.addEventListener('mousemove', this.boundMouseMove);
        window.addEventListener('mouseup', this.boundMouseUp);
        this.canvas.addEventListener('touchstart', this.boundTouchStart, { passive: false });
        this.canvas.addEventListener('touchmove', this.boundTouchMove, { passive: false });
        this.canvas.addEventListener('touchend', this.boundTouchEnd);
        // Start loop
        this.animFrame = requestAnimationFrame((ts) => this._loop(ts));
    }
    unmount() {
        if (this.animFrame !== null) {
            cancelAnimationFrame(this.animFrame);
            this.animFrame = null;
        }
        if (this.canvas) {
            this.canvas.removeEventListener('mousedown', this.boundMouseDown);
            this.canvas.removeEventListener('mousemove', this.boundMouseMove);
            this.canvas.removeEventListener('touchstart', this.boundTouchStart);
            this.canvas.removeEventListener('touchmove', this.boundTouchMove);
            this.canvas.removeEventListener('touchend', this.boundTouchEnd);
            window.removeEventListener('mouseup', this.boundMouseUp);
            this.canvas.remove();
        }
    }
    // ── Noise generation ────────────────────────────────────────────────────────
    _generateNoise() {
        const w = this.canvas.width;
        const h = this.canvas.height;
        this.noisePixels = new Float32Array(w * h);
        for (let i = 0; i < this.noisePixels.length; i++) {
            this.noisePixels[i] = (Math.random() - 0.5) * 18; // ±9 brightness variation
        }
    }
    // ── Event handlers ──────────────────────────────────────────────────────────
    _canvasPos(clientX, clientY) {
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY,
        };
    }
    _onMouseDown(e) {
        const pos = this._canvasPos(e.clientX, e.clientY);
        this.isDrawing = true;
        this.lastX = pos.x;
        this.lastY = pos.y;
    }
    _onMouseMove(e) {
        const pos = this._canvasPos(e.clientX, e.clientY);
        this.mouseX = pos.x;
        this.mouseY = pos.y;
        if (this.isDrawing && !this.finished) {
            this._paintStroke(this.lastX, this.lastY, pos.x, pos.y);
            const dx = pos.x - this.lastX;
            const dy = pos.y - this.lastY;
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                this.trowelAngle = Math.atan2(dy, dx);
            }
            this.lastX = pos.x;
            this.lastY = pos.y;
        }
    }
    _onMouseUp() {
        this.isDrawing = false;
    }
    _onTouchStart(e) {
        e.preventDefault();
        const touch = e.touches[0];
        if (!touch)
            return;
        const pos = this._canvasPos(touch.clientX, touch.clientY);
        this.isDrawing = true;
        this.mouseX = pos.x;
        this.mouseY = pos.y;
        this.lastX = pos.x;
        this.lastY = pos.y;
    }
    _onTouchMove(e) {
        e.preventDefault();
        const touch = e.touches[0];
        if (!touch)
            return;
        const pos = this._canvasPos(touch.clientX, touch.clientY);
        this.mouseX = pos.x;
        this.mouseY = pos.y;
        if (this.isDrawing && !this.finished) {
            this._paintStroke(this.lastX, this.lastY, pos.x, pos.y);
            const dx = pos.x - this.lastX;
            const dy = pos.y - this.lastY;
            if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
                this.trowelAngle = Math.atan2(dy, dx);
            }
            this.lastX = pos.x;
            this.lastY = pos.y;
        }
    }
    _onTouchEnd(_e) {
        this.isDrawing = false;
    }
    // ── Painting ────────────────────────────────────────────────────────────────
    _paintStroke(x0, y0, x1, y1) {
        // Paint on coverage canvas (white = covered)
        this.coverageCtx.globalCompositeOperation = 'source-over';
        this.coverageCtx.strokeStyle = '#ffffff';
        this.coverageCtx.lineWidth = 54;
        this.coverageCtx.lineCap = 'round';
        this.coverageCtx.lineJoin = 'round';
        this.coverageCtx.beginPath();
        this.coverageCtx.moveTo(x0, y0);
        this.coverageCtx.lineTo(x1, y1);
        this.coverageCtx.stroke();
        // Sample coverage every 500ms (done in loop), but also count every stroke
        this.coverageSampleInterval = -1; // force re-sample next frame
    }
    // ── Coverage sampling ───────────────────────────────────────────────────────
    _sampleCoverage() {
        const w = this.coverageCanvas.width;
        const h = this.coverageCanvas.height;
        // Sample on a grid — checking every pixel is expensive; use 1 in 4
        const step = 4;
        const imageData = this.coverageCtx.getImageData(0, 0, w, h);
        const data = imageData.data;
        let covered = 0;
        let total = 0;
        for (let i = 0; i < data.length; i += step * 4) {
            total++;
            if (data[i] > 128)
                covered++; // red channel (white = 255)
        }
        this.coveragePct = total > 0 ? covered / total : 0;
    }
    // ── Game loop ───────────────────────────────────────────────────────────────
    _loop(timestamp) {
        if (this.lastTimestamp === 0)
            this.lastTimestamp = timestamp;
        const dt = Math.min((timestamp - this.lastTimestamp) / 1000, 0.1); // cap dt at 100ms
        this.lastTimestamp = timestamp;
        if (!this.finished) {
            this.timeLeft -= dt;
            if (this.timeLeft < 0)
                this.timeLeft = 0;
            // Sample coverage
            this.coverageSampleInterval -= dt;
            if (this.coverageSampleInterval <= 0) {
                this._sampleCoverage();
                this.coverageSampleInterval = 0.5;
            }
            // Check completion
            if (this.timeLeft <= 0 || this.coveragePct >= 0.90) {
                this._sampleCoverage(); // final accurate sample
                this.finished = true;
                this.result = this._getScore();
                this.showingResult = true;
                this.completionTime = 2.0; // show result for 2 seconds
            }
            // Fade instruction
            if (this.instructionTimer > 0) {
                this.instructionTimer -= dt;
                if (this.instructionTimer <= 0) {
                    this.instructionAlpha = 0;
                }
                else if (this.instructionTimer < 0.5) {
                    this.instructionAlpha = this.instructionTimer / 0.5;
                }
            }
        }
        else if (this.showingResult) {
            this.completionTime -= dt;
            if (this.completionTime <= 0) {
                this.showingResult = false;
                if (this.result && this.onComplete) {
                    this.onComplete(this.result);
                }
            }
        }
        this._render();
        this.animFrame = requestAnimationFrame((ts) => this._loop(ts));
    }
    // ── Render ──────────────────────────────────────────────────────────────────
    _render() {
        const { ctx, canvas } = this;
        const W = canvas.width;
        const H = canvas.height;
        // 1. Draw wall background (rough dark grey with noise)
        this._drawWall(W, H);
        // 2. Composite painted strokes from coverage canvas
        //    Use multiply or just source-over with transparency trick:
        //    Render coverageCanvas as plaster colour
        if (this.coveragePct > 0 || this.isDrawing) {
            ctx.save();
            // Draw the coverage canvas as a mask for the plaster colour
            ctx.globalCompositeOperation = 'source-over';
            // We draw the coverage canvas pixels where they're white as plaster
            // Technique: draw a plaster-coloured rect, clip by coverage canvas
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = W;
            tempCanvas.height = H;
            const tempCtx = tempCanvas.getContext('2d');
            // Fill with plaster colour
            tempCtx.fillStyle = '#D4C9B0';
            tempCtx.fillRect(0, 0, W, H);
            // Multiply with coverage (only show where coverage is white)
            tempCtx.globalCompositeOperation = 'destination-in';
            tempCtx.drawImage(this.coverageCanvas, 0, 0);
            // Add slight texture variation on plaster — hand-applied look
            tempCtx.globalCompositeOperation = 'source-over';
            tempCtx.globalAlpha = 0.06;
            this._applyPlasterTexture(tempCtx, W, H);
            tempCtx.globalAlpha = 1;
            ctx.drawImage(tempCanvas, 0, 0);
            ctx.restore();
        }
        // 3. Draw trowel at cursor position
        if (!this.finished) {
            this._drawTrowel(this.mouseX, this.mouseY, this.trowelAngle);
        }
        // 4. Timer bar
        this._drawTimerBar(W);
        // 5. Coverage % label
        this._drawCoverageLabel(W, H);
        // 6. Instruction overlay
        if (this.instructionAlpha > 0) {
            this._drawInstruction(W, H);
        }
        // 7. Completion overlay
        if (this.showingResult && this.result) {
            this._drawResult(W, H, this.result);
        }
    }
    _drawWall(W, H) {
        const { ctx } = this;
        // Base dark grey
        ctx.fillStyle = '#3A3A32';
        ctx.fillRect(0, 0, W, H);
        // Apply pre-generated noise for rough texture
        if (this.noisePixels) {
            // For performance, draw noise as image data in chunks
            // Use a simple per-pixel approach on a small sub-canvas, then scale
            const noiseScale = 1;
            const noiseW = Math.floor(W / noiseScale);
            const noiseH = Math.floor(H / noiseScale);
            const imageData = ctx.createImageData(noiseW, noiseH);
            const base = { r: 58, g: 58, b: 50 }; // #3A3A32
            for (let i = 0; i < noiseW * noiseH; i++) {
                const n = this.noisePixels[i] ?? 0;
                const idx = i * 4;
                imageData.data[idx] = Math.max(0, Math.min(255, base.r + n));
                imageData.data[idx + 1] = Math.max(0, Math.min(255, base.g + n));
                imageData.data[idx + 2] = Math.max(0, Math.min(255, base.b + n * 0.8));
                imageData.data[idx + 3] = 255;
            }
            ctx.putImageData(imageData, 0, 0);
        }
        // Subtle mortar-line grid — makes it look like a brick/block wall
        ctx.strokeStyle = 'rgba(0,0,0,0.12)';
        ctx.lineWidth = 1;
        const gridH = 40;
        const gridW = 120;
        for (let y = 0; y < H; y += gridH) {
            const offset = Math.floor(y / gridH) % 2 === 0 ? 0 : gridW / 2;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
            for (let x = -offset; x < W; x += gridW) {
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(x, y + gridH);
                ctx.stroke();
            }
        }
    }
    _applyPlasterTexture(tempCtx, W, H) {
        // Subtle streaks — trowel marks in the plaster
        tempCtx.strokeStyle = '#C8BC9E';
        tempCtx.lineWidth = 2;
        for (let i = 0; i < 20; i++) {
            const x = Math.random() * W;
            const y = Math.random() * H;
            tempCtx.beginPath();
            tempCtx.moveTo(x, y);
            tempCtx.lineTo(x + 60 + Math.random() * 80, y + (Math.random() - 0.5) * 10);
            tempCtx.stroke();
        }
    }
    _drawTrowel(x, y, angle) {
        const { ctx } = this;
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        // Trowel blade — wide flat rectangle
        const bladeW = 60;
        const bladeH = 15;
        // Shadow
        ctx.shadowColor = 'rgba(0,0,0,0.5)';
        ctx.shadowBlur = 6;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        // Blade body (steel colour)
        ctx.fillStyle = '#B8C4CC';
        ctx.beginPath();
        ctx.roundRect(-bladeW / 2, -bladeH / 2, bladeW, bladeH, 3);
        ctx.fill();
        // Blade edge highlight
        ctx.fillStyle = 'rgba(255,255,255,0.4)';
        ctx.fillRect(-bladeW / 2, -bladeH / 2, bladeW, 3);
        // Handle
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.fillStyle = '#8B5E3C'; // wood brown
        ctx.fillRect(8, -4, 28, 8);
        // Handle grip lines
        ctx.strokeStyle = 'rgba(0,0,0,0.3)';
        ctx.lineWidth = 1;
        for (let i = 12; i <= 32; i += 5) {
            ctx.beginPath();
            ctx.moveTo(i, -4);
            ctx.lineTo(i, 4);
            ctx.stroke();
        }
        // Plaster blob on the blade — shows it's loaded
        ctx.fillStyle = 'rgba(212, 201, 176, 0.7)';
        ctx.beginPath();
        ctx.ellipse(-10, 0, 18, 5, 0.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    _drawTimerBar(W) {
        const { ctx } = this;
        const barH = 10;
        const pct = Math.max(0, this.timeLeft / this.totalTime);
        // Background
        ctx.fillStyle = 'rgba(0,0,0,0.6)';
        ctx.fillRect(0, 0, W, barH + 4);
        // Colour: green → yellow → red
        let r, g;
        if (pct > 0.5) {
            r = Math.round(255 * (1 - pct) * 2);
            g = 220;
        }
        else {
            r = 220;
            g = Math.round(220 * pct * 2);
        }
        const colour = `rgb(${r},${g},40)`;
        ctx.fillStyle = colour;
        ctx.fillRect(0, 2, W * pct, barH);
        // Pulse when low
        if (pct < 0.2 && Math.floor(Date.now() / 300) % 2 === 0) {
            ctx.fillStyle = 'rgba(255,60,60,0.25)';
            ctx.fillRect(0, 0, W, barH + 4);
        }
        // Time label
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 13px system-ui, sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(`${Math.ceil(this.timeLeft)}s`, W - 8, barH + 1);
    }
    _drawCoverageLabel(W, H) {
        const { ctx } = this;
        const pct = Math.round(this.coveragePct * 100);
        const target = this.coveragePct >= 0.80;
        ctx.save();
        ctx.textAlign = 'center';
        // Background pill
        ctx.fillStyle = target ? 'rgba(94,219,125,0.85)' : 'rgba(0,0,0,0.65)';
        const label = `${pct}% covered`;
        ctx.font = 'bold 20px system-ui, sans-serif';
        const tw = ctx.measureText(label).width;
        const pillW = tw + 28;
        const pillH = 36;
        const pillX = W / 2 - pillW / 2;
        const pillY = H - 60;
        ctx.beginPath();
        ctx.roundRect(pillX, pillY, pillW, pillH, 18);
        ctx.fill();
        ctx.fillStyle = target ? '#000' : '#fff';
        ctx.fillText(label, W / 2, pillY + 24);
        // Goal indicator
        ctx.font = '12px system-ui, sans-serif';
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.fillText('Goal: 80%', W / 2, H - 16);
        ctx.restore();
    }
    _drawInstruction(W, H) {
        const { ctx } = this;
        ctx.save();
        ctx.globalAlpha = this.instructionAlpha;
        ctx.textAlign = 'center';
        // Big instruction text
        ctx.font = 'bold clamp(28px, 5vw, 48px) system-ui, sans-serif';
        ctx.fillStyle = '#FFD700';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 8;
        ctx.fillText('🧱 TROWEL THE WALL!', W / 2, H / 2 - 20);
        ctx.font = '18px system-ui, sans-serif';
        ctx.fillStyle = '#fff';
        ctx.fillText('Drag to apply plaster. Cover 80% to win.', W / 2, H / 2 + 20);
        ctx.restore();
    }
    _drawResult(W, H, result) {
        const { ctx } = this;
        // Dim overlay
        ctx.save();
        ctx.fillStyle = 'rgba(0,0,0,0.7)';
        ctx.fillRect(0, 0, W, H);
        // Score
        ctx.textAlign = 'center';
        ctx.shadowColor = 'rgba(0,0,0,0.9)';
        ctx.shadowBlur = 12;
        const scoreColour = result.score >= 80 ? '#5EDB7D' : result.score >= 60 ? '#FFD700' : '#C1666B';
        ctx.fillStyle = scoreColour;
        ctx.font = 'bold 96px system-ui, sans-serif';
        ctx.fillText(`${result.score}%`, W / 2, H / 2 - 30);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 22px system-ui, sans-serif';
        ctx.fillText(result.message, W / 2, H / 2 + 30);
        if (result.score >= 80) {
            ctx.fillStyle = '#5EDB7D';
            ctx.font = 'bold 18px system-ui, sans-serif';
            ctx.fillText('✅ QUALITY WORK', W / 2, H / 2 + 70);
        }
        ctx.restore();
    }
    // ── Score ───────────────────────────────────────────────────────────────────
    _getScore() {
        const score = Math.round(this.coveragePct * 100);
        let message;
        if (score >= 90)
            message = "Bloody perfect. Even Matt's impressed.";
        else if (score >= 75)
            message = "Good enough. Karen won't notice.";
        else if (score >= 60)
            message = "Passable. Call it 'textured'.";
        else if (score >= 40)
            message = "Jarrad could've done better. Probably.";
        else
            message = "That wall has seen better days. So have you.";
        return { score, qualityPct: score / 100, message };
    }
}
