// ── PhotoReveal — Swipe-to-reveal plaster finish ─────────────────────────────
// Paint-roller mechanic: swipe across the BEFORE wall to reveal the AFTER.
// When 80%+ of pixels are revealed → job complete, collect payment.

const PLASTER_PALETTES = [
  { name: 'Marbellino',     bg1: '#D4C4A8', bg2: '#A8905A', vein: '#C8B48A', label: '#5A3A1A' },
  { name: 'Tadelakt',       bg1: '#D8CEBA', bg2: '#9A7A5A', vein: '#C0A880', label: '#4A2A0A' },
  { name: 'Antique Stucco', bg1: '#E4D8BC', bg2: '#B89060', vein: '#D0BC9A', label: '#5A3A10' },
  { name: 'Hemp Render',    bg1: '#CEC8A8', bg2: '#9A8A60', vein: '#BAB090', label: '#4A3A10' },
  { name: 'Rokka',          bg1: '#D4C4AC', bg2: '#B08060', vein: '#C0A888', label: '#503018' },
  { name: 'Tadelino',       bg1: '#DCD4BC', bg2: '#AA8C64', vein: '#C8B898', label: '#4A3020' },
];

export class PhotoReveal {
  private _el: HTMLElement | null = null;

  show(jobTitle: string, onComplete: () => void): void {
    this.hide();

    const palette = PLASTER_PALETTES[Math.floor(Math.random() * PLASTER_PALETTES.length)];
    const cleanTitle = jobTitle.replace(/^[⚔️🚨]\s*/, '').trim();

    const ov = document.createElement('div');
    ov.id = 'photo-reveal-ov';
    ov.style.cssText = `
      position:fixed; inset:0; z-index:14500;
      background:#0a0a12; display:flex; flex-direction:column;
      align-items:center; font-family:'Arial Black',Arial,sans-serif;
      overflow:hidden; touch-action:none; user-select:none;
    `;

    // ── Header ────────────────────────────────────────────────────────────────
    const hdr = document.createElement('div');
    hdr.style.cssText = `
      width:100%; padding:14px 16px 10px; box-sizing:border-box;
      text-align:center; flex-shrink:0; position:relative; z-index:5;
    `;
    hdr.innerHTML = `
      <div style="color:#FFD700;font-size:clamp(10px,2.8vw,13px);
        letter-spacing:3px;font-weight:900;margin-bottom:3px;">
        📸 JOB DONE — FINISH THE WALL
      </div>
      <div style="color:#fff;font-size:clamp(15px,4.5vw,22px);
        font-weight:900;line-height:1.2;">${cleanTitle}</div>
      <div id="pr-hint" style="color:#aaa;font-size:clamp(10px,2.6vw,12px);
        font-family:system-ui,sans-serif;margin-top:3px;">
        🖌️ SWIPE TO APPLY THE FINISH
      </div>
    `;
    ov.appendChild(hdr);

    // ── Canvas ────────────────────────────────────────────────────────────────
    const canvasWrap = document.createElement('div');
    canvasWrap.style.cssText = `
      flex:1; width:100%; position:relative; overflow:hidden;
    `;

    const cv = document.createElement('canvas');
    cv.style.cssText = `
      position:absolute; inset:0; width:100%; height:100%;
      display:block; cursor:crosshair;
    `;
    canvasWrap.appendChild(cv);
    ov.appendChild(canvasWrap);

    // ── Progress bar ──────────────────────────────────────────────────────────
    const progWrap = document.createElement('div');
    progWrap.style.cssText = `
      width:100%; padding:10px 16px 8px; box-sizing:border-box;
      flex-shrink:0; position:relative; z-index:5;
    `;
    progWrap.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;
        margin-bottom:5px;">
        <span style="color:#aaa;font-size:10px;font-weight:900;
          letter-spacing:1px;font-family:system-ui,sans-serif;">
          ${palette.name.toUpperCase()} APPLIED
        </span>
        <span id="pr-pct" style="color:#FFD700;font-size:11px;font-weight:900;">0%</span>
      </div>
      <div style="width:100%;height:8px;background:rgba(255,255,255,0.1);
        border-radius:4px;overflow:hidden;">
        <div id="pr-bar" style="width:0%;height:100%;
          background:linear-gradient(90deg,${palette.bg2},${palette.bg1});
          border-radius:4px;transition:width 0.2s;"></div>
      </div>
    `;
    ov.appendChild(progWrap);

    // ── Collect button (hidden until done) ────────────────────────────────────
    const collectBtn = document.createElement('button');
    collectBtn.id = 'pr-collect-btn';
    collectBtn.textContent = '💰 COLLECT PAYMENT';
    collectBtn.style.cssText = `
      display:none; width:calc(100% - 32px); margin:0 16px 20px;
      background:linear-gradient(135deg,#2ECC40,#1AA830);
      border:none; color:#fff; font-size:clamp(14px,4vw,18px);
      font-weight:900; letter-spacing:1px; padding:16px 40px;
      border-radius:30px; cursor:pointer; touch-action:manipulation;
      box-shadow:0 4px 20px rgba(46,204,64,0.4); flex-shrink:0;
    `;
    collectBtn.addEventListener('click', () => {
      this.hide();
      onComplete();
    });
    ov.appendChild(collectBtn);

    document.body.appendChild(ov);
    this._el = ov;

    // ── Init canvas after mount ────────────────────────────────────────────────
    requestAnimationFrame(() => {
      const W = cv.offsetWidth || window.innerWidth;
      const H = cv.offsetHeight || window.innerHeight * 0.65;
      cv.width = W;
      cv.height = H;

      const ctx = cv.getContext('2d')!;

      // Draw the BEFORE (old, cracked, grey wall)
      this._drawBeforeWall(ctx, W, H);

      // Off-screen canvas for the AFTER (beautiful plaster finish)
      const afterCv = document.createElement('canvas');
      afterCv.width = W;
      afterCv.height = H;
      const afterCtx = afterCv.getContext('2d')!;
      this._drawAfterWall(afterCtx, W, H, palette);

      // Mask canvas — tracks what's been painted
      const maskCv = document.createElement('canvas');
      maskCv.width = W;
      maskCv.height = H;
      const maskCtx = maskCv.getContext('2d')!;
      maskCtx.fillStyle = '#000';
      maskCtx.fillRect(0, 0, W, H);

      let painted = 0;   // count of painted pixels (approximate)
      const TOTAL = W * H;
      let done = false;

      const ROLLER_W = Math.max(60, W * 0.18);   // roller width scales with screen

      const paint = (x: number, y: number) => {
        if (done) return;

        // Paint mask
        maskCtx.fillStyle = '#fff';
        maskCtx.beginPath();
        maskCtx.ellipse(x, y, ROLLER_W, ROLLER_W * 0.5, 0, 0, Math.PI * 2);
        maskCtx.fill();

        // Composite: draw AFTER onto the main canvas using mask
        ctx.clearRect(0, 0, W, H);
        // Draw before
        this._drawBeforeWall(ctx, W, H);
        // Clip to mask and draw after
        ctx.save();
        const tempCv = document.createElement('canvas');
        tempCv.width = W; tempCv.height = H;
        const tempCtx = tempCv.getContext('2d')!;
        tempCtx.drawImage(maskCv, 0, 0);
        tempCtx.globalCompositeOperation = 'source-in';
        tempCtx.drawImage(afterCv, 0, 0);
        ctx.drawImage(tempCv, 0, 0);
        ctx.restore();

        // Draw roller edge glow at paint position
        ctx.save();
        const grad = ctx.createRadialGradient(x, y, 0, x, y, ROLLER_W);
        grad.addColorStop(0, palette.bg1 + 'cc');
        grad.addColorStop(0.6, palette.bg1 + '44');
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.ellipse(x, y, ROLLER_W * 1.15, ROLLER_W * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Approximate coverage (sample every ~40px)
        const sample = maskCtx.getImageData(0, 0, W, H);
        let count = 0;
        for (let i = 0; i < sample.data.length; i += 160) { // every 40 pixels
          if (sample.data[i] > 128) count++;
        }
        const sampleTotal = Math.ceil(TOTAL / 40);
        const pct = Math.min(100, Math.round(count / sampleTotal * 100));

        const bar = document.getElementById('pr-bar');
        const pctEl = document.getElementById('pr-pct');
        if (bar) bar.style.width = `${pct}%`;
        if (pctEl) pctEl.textContent = `${pct}%`;

        const hint = document.getElementById('pr-hint');

        if (pct >= 80 && !done) {
          done = true;
          // Final reveal — full after wall
          ctx.clearRect(0, 0, W, H);
          ctx.drawImage(afterCv, 0, 0);

          if (hint) hint.textContent = '✅ BEAUTIFUL — Collect your pay!';
          if (pctEl) { pctEl.textContent = '100%'; pctEl.style.color = '#2ECC40'; }
          if (bar) { bar.style.width = '100%'; bar.style.background = '#2ECC40'; }

          // Show 5 stars then collect button
          this._showStars(ov, palette, cleanTitle);
          setTimeout(() => {
            collectBtn.style.display = 'block';
          }, 1200);
        } else if (pct >= 50 && hint) {
          hint.textContent = '🎨 Almost there — keep going!';
        }
      };

      // ── Touch/mouse events ─────────────────────────────────────────────────
      let painting = false;
      let lastX = 0, lastY = 0;

      const getPos = (e: TouchEvent | MouseEvent): { x: number; y: number } => {
        const r = cv.getBoundingClientRect();
        const scaleX = W / r.width;
        const scaleY = H / r.height;
        if ('touches' in e && e.touches.length > 0) {
          return {
            x: (e.touches[0].clientX - r.left) * scaleX,
            y: (e.touches[0].clientY - r.top) * scaleY,
          };
        }
        const me = e as MouseEvent;
        return { x: (me.clientX - r.left) * scaleX, y: (me.clientY - r.top) * scaleY };
      };

      const onStart = (e: TouchEvent | MouseEvent) => {
        e.preventDefault();
        painting = true;
        const p = getPos(e);
        lastX = p.x; lastY = p.y;
        paint(p.x, p.y);
      };

      const onMove = (e: TouchEvent | MouseEvent) => {
        if (!painting) return;
        e.preventDefault();
        const p = getPos(e);
        // Interpolate for smooth lines
        const dx = p.x - lastX, dy = p.y - lastY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.max(1, Math.floor(dist / (ROLLER_W * 0.4)));
        for (let i = 1; i <= steps; i++) {
          paint(lastX + dx * i / steps, lastY + dy * i / steps);
        }
        lastX = p.x; lastY = p.y;
      };

      const onEnd = () => { painting = false; };

      cv.addEventListener('mousedown',  onStart as EventListener, { passive: false });
      cv.addEventListener('mousemove',  onMove  as EventListener, { passive: false });
      cv.addEventListener('mouseup',    onEnd);
      cv.addEventListener('touchstart', onStart as EventListener, { passive: false });
      cv.addEventListener('touchmove',  onMove  as EventListener, { passive: false });
      cv.addEventListener('touchend',   onEnd,  { passive: false });
    });
  }

  hide(): void {
    this._el?.remove();
    this._el = null;
  }

  // ── Draw before: cracked grey/beige wall ──────────────────────────────────
  private _drawBeforeWall(ctx: CanvasRenderingContext2D, W: number, H: number): void {
    // Base coat — old grey render
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#888880');
    g.addColorStop(0.5, '#7A7A74');
    g.addColorStop(1, '#848480');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Cracks
    ctx.strokeStyle = 'rgba(50,50,40,0.45)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i < 12; i++) {
      const sx = (i * 137) % W;
      const sy = (i * 89) % H;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      for (let j = 0; j < 4; j++) {
        const nx = sx + ((i * 37 + j * 61) % 80) - 40;
        const ny = sy + ((i * 53 + j * 73) % 60) - 10;
        ctx.lineTo(nx, ny);
      }
      ctx.stroke();
    }

    // Stains
    for (let i = 0; i < 6; i++) {
      const x = (i * 181) % W;
      const y = (i * 113) % H;
      const r = 20 + (i * 23) % 30;
      const gr = ctx.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, 'rgba(60,50,30,0.25)');
      gr.addColorStop(1, 'transparent');
      ctx.fillStyle = gr;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // "BEFORE" label
    ctx.fillStyle = 'rgba(255,255,255,0.18)';
    ctx.font = `bold ${Math.round(H * 0.06)}px Arial Black, Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('BEFORE', W / 2, H / 2);
  }

  // ── Draw after: beautiful plaster finish ──────────────────────────────────
  private _drawAfterWall(
    ctx: CanvasRenderingContext2D, W: number, H: number,
    palette: typeof PLASTER_PALETTES[0]
  ): void {
    // Rich plaster base
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0,   palette.bg1);
    g.addColorStop(0.4, palette.bg2);
    g.addColorStop(0.7, palette.vein);
    g.addColorStop(1,   palette.bg1);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Subtle veining / texture
    ctx.globalAlpha = 0.18;
    for (let i = 0; i < 8; i++) {
      ctx.strokeStyle = palette.vein;
      ctx.lineWidth = 1 + (i % 3);
      ctx.beginPath();
      const sx = (i * 71) % W;
      const sy = (i * 43) % H;
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(
        sx + 40 + (i * 17) % 80, sy - 20,
        sx + 80 + (i * 23) % 60, sy + 30,
        sx + 120 + (i * 13) % 100, sy + (i * 7) % 60,
      );
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // Polished sheen highlight
    const sheen = ctx.createLinearGradient(0, 0, W * 0.6, H * 0.3);
    sheen.addColorStop(0, 'rgba(255,255,255,0.22)');
    sheen.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = sheen;
    ctx.fillRect(0, 0, W, H);

    // Subtle tool marks (trowel lines)
    ctx.globalAlpha = 0.09;
    ctx.strokeStyle = palette.bg2;
    ctx.lineWidth = 2;
    for (let i = 0; i < 5; i++) {
      const y = (H * 0.15) + (i * H * 0.17);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(W, y + (i % 2 === 0 ? 8 : -8));
      ctx.stroke();
    }
    ctx.globalAlpha = 1;

    // "AFTER" label (subtle, proud)
    ctx.fillStyle = `rgba(${palette.label.replace('#','').match(/.{2}/g)?.map(h=>parseInt(h,16)).join(',')},0.25)`;
    ctx.font = `bold ${Math.round(H * 0.06)}px Arial Black, Arial`;
    ctx.textAlign = 'center';
    ctx.fillText('AFTER', W / 2, H / 2);
  }

  // ── Show 5-star rating overlay ────────────────────────────────────────────
  private _showStars(ov: HTMLElement, palette: typeof PLASTER_PALETTES[0], title: string): void {
    const wrap = document.createElement('div');
    wrap.style.cssText = `
      position:absolute; inset:0; z-index:10;
      display:flex; flex-direction:column; align-items:center;
      justify-content:center; gap:10px; pointer-events:none;
      background:rgba(0,0,0,0.55);
      animation:pr-reveal-fade 0.5s ease both;
    `;

    if (!document.getElementById('pr-styles')) {
      const s = document.createElement('style');
      s.id = 'pr-styles';
      s.textContent = `
        @keyframes pr-reveal-fade {
          from { opacity:0; transform:scale(0.96); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes pr-star-bounce {
          0%   { transform:scale(0) rotate(-20deg); opacity:0; }
          60%  { transform:scale(1.3) rotate(5deg); opacity:1; }
          100% { transform:scale(1) rotate(0deg); opacity:1; }
        }
      `;
      document.head.appendChild(s);
    }

    wrap.innerHTML = `
      <div style="font-size:clamp(28px,8vw,48px);font-weight:900;
        color:#FFD700;letter-spacing:2px;text-align:center;
        text-shadow:0 2px 20px #FFD70066;">🏆 FINISHED!</div>
      <div style="color:#fff;font-size:clamp(14px,4vw,20px);
        font-weight:700;text-align:center;opacity:0.9;">${title}</div>
      <div style="background:${palette.bg1};color:${palette.label};
        font-size:clamp(11px,3vw,14px);font-weight:900;
        padding:5px 16px;border-radius:20px;letter-spacing:1px;">
        ${palette.name.toUpperCase()} ✓
      </div>
      <div style="display:flex;gap:6px;margin-top:4px;">
        ${'⭐'.repeat(5).split('').map((s,i)=>`<span style="font-size:28px;animation:pr-star-bounce 0.4s ${i*0.1}s cubic-bezier(.34,1.56,.64,1) both;">${s}</span>`).join('')}
      </div>
    `;
    ov.appendChild(wrap);
  }
}
