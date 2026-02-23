/**
 * MarbellinoMixer — Colour Mixing Mini-game
 *
 * Players mix 5 real TEM pigments (Black, Dirty Yellow, Raw Umber, Dirty Red, Green)
 * to match an official Marbellino colour formula. Uses actual TEM colour data.
 *
 * Teaches real plaster colour mixing while being genuinely fun.
 */

import { MARBELLINO_COLOURS, PIGMENTS, MarbellinoColour } from '../data/MarbellinoColours';

// ── Slider configuration per pigment ─────────────────────────────────────────
const PIGMENT_MAX  = { B: 220, Y: 30, L: 26, R: 1.2, G: 20 };
const PIGMENT_STEP = { B: 5,   Y: 1,  L: 1,  R: 0.1, G: 1  };

// ── Colour utilities ──────────────────────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#', ''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r, g, b]
    .map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0'))
    .join('');
}

/** Euclidean RGB distance (0 = identical, ~441 = max) */
function colourDist(a: string, b: string): number {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  return Math.sqrt((ar - br) ** 2 + (ag - bg) ** 2 + (ab - bb) ** 2);
}

/** 0–100 match score. 100 = exact, 82+ = "win" */
function matchPct(mixed: string, target: string): number {
  const dist = colourDist(mixed, target);
  return Math.max(0, Math.round(100 - dist * 0.45));
}

/**
 * Compute a plausible preview colour for the current pigment values.
 * Uses inverse-distance weighted interpolation over known Marbellino formulas —
 * so the preview actually converges to the right colour as you nail the formula.
 */
function computeMix(vals: Record<string, number>): string {
  const norm = {
    B: vals.B / 220,
    Y: vals.Y / 30,
    L: vals.L / 26,
    R: vals.R / 1.2,
    G: vals.G / 20,
  };

  let wR = 0, wG = 0, wB = 0, wTotal = 0;

  for (const col of MARBELLINO_COLOURS) {
    const cNorm = {
      B: col.B / 220,
      Y: col.Y / 30,
      L: col.L / 26,
      R: col.R / 1.2,
      G: col.G / 20,
    };

    const dist = Math.sqrt(
      (norm.B - cNorm.B) ** 2 +
      (norm.Y - cNorm.Y) ** 2 +
      (norm.L - cNorm.L) ** 2 +
      (norm.R - cNorm.R) ** 2 +
      (norm.G - cNorm.G) ** 2
    );

    const w = 1 / (dist + 0.004);   // inverse distance weight
    const [r, g, b] = hexToRgb(col.hex);
    wR += r * w; wG += g * w; wB += b * w; wTotal += w;
  }

  return rgbToHex(wR / wTotal, wG / wTotal, wB / wTotal);
}

// ── Stored progress ───────────────────────────────────────────────────────────
const STORAGE_KEY = 'tem-mixer-solved';

function getSolved(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')); }
  catch { return new Set(); }
}

function markSolved(name: string): void {
  try {
    const s = getSolved();
    s.add(name);
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...s]));
  } catch {}
}

// ── Main class ────────────────────────────────────────────────────────────────
export class MarbellinoMixer {
  private overlay: HTMLDivElement | null = null;
  private vals: Record<string, number> = { B: 0, Y: 0, L: 0, R: 0, G: 0 };
  private target: MarbellinoColour | null = null;
  private timer = 120;
  private timerInt: ReturnType<typeof setInterval> | null = null;
  private solved = false;
  private onDone: ((pts: number) => void) | null = null;

  // Live UI refs
  private mixCanvas: HTMLCanvasElement | null = null;
  private matchFill: HTMLDivElement | null = null;
  private matchLabel: HTMLSpanElement | null = null;
  private timerEl: HTMLSpanElement | null = null;
  private revealEl: HTMLDivElement | null = null;
  private submitBtn: HTMLButtonElement | null = null;
  private valueEls: Record<string, HTMLSpanElement> = {};

  // ── Public API ─────────────────────────────────────────────────────────────

  show(onDone?: (pts: number) => void): void {
    this._cleanup();
    this.solved = false;
    this.timer  = 120;
    this.vals   = { B: 0, Y: 0, L: 0, R: 0, G: 0 };
    this.onDone = onDone ?? null;

    // Pick a random unsolved colour, fall back to any
    const solved  = getSolved();
    const unsolved = MARBELLINO_COLOURS.filter(c => !solved.has(c.name));
    const pool    = unsolved.length > 0 ? unsolved : MARBELLINO_COLOURS;
    this.target   = pool[Math.floor(Math.random() * pool.length)];

    this._injectStyles();
    this._buildUI();
    this._startTimer();
    this._updatePreview();
  }

  hide(): void { this._cleanup(); }

  // ── UI build ───────────────────────────────────────────────────────────────

  private _buildUI(): void {
    const ov = document.createElement('div');
    ov.id = 'mmixer-ov';
    ov.style.cssText = `
      position:fixed; inset:0; z-index:9000;
      background:rgba(0,0,0,0.88); backdrop-filter:blur(8px);
      display:flex; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif;
      animation: mmFadeIn 0.25s ease both;
    `;
    document.body.appendChild(ov);
    this.overlay = ov;

    // ── Panel ──────────────────────────────────────────────────────────────
    const panel = document.createElement('div');
    panel.style.cssText = `
      background:linear-gradient(160deg, #1a1714 0%, #120f0c 100%);
      border:1px solid rgba(200,168,106,0.25); border-radius:22px;
      padding:0; width:min(420px,96vw);
      max-height:96vh; overflow-y:auto; overflow-x:hidden;
      box-shadow:0 24px 80px rgba(0,0,0,0.9);
      animation: mmSlideUp 0.28s cubic-bezier(.4,0,.2,1) both;
    `;
    ov.appendChild(panel);

    // ── Header ─────────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.style.cssText = `
      display:flex; align-items:center; justify-content:space-between;
      padding:16px 18px 0; gap:12px;
    `;

    const titleWrap = document.createElement('div');
    titleWrap.innerHTML = `
      <div style="color:#C8A86A; font-size:11px; font-weight:800; letter-spacing:4px; opacity:0.7;">
        TEM EXCLUSIVE
      </div>
      <div style="color:#fff; font-size:20px; font-weight:900; letter-spacing:1px; line-height:1.1;">
        🎨 MARBELLINO MIXER
      </div>
      <div style="color:rgba(200,168,106,0.55); font-size:11px; margin-top:2px;">
        Match the target colour using real TEM pigments
      </div>
    `;
    header.appendChild(titleWrap);

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.12);
      color:rgba(255,255,255,0.5); font-size:16px; font-weight:700;
      width:36px; height:36px; border-radius:50%; cursor:pointer;
      flex-shrink:0; touch-action:manipulation;
    `;
    closeBtn.addEventListener('click', () => this._cleanup());
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // ── Colour swatches ────────────────────────────────────────────────────
    const swatchRow = document.createElement('div');
    swatchRow.style.cssText = `
      display:grid; grid-template-columns:1fr 1fr; gap:12px;
      padding:16px 18px 0;
    `;

    // Target swatch
    const targetWrap = document.createElement('div');
    const targetCanvas = this._makeSwatch(this.target!.hex, 'TARGET', false);
    this.revealEl = document.createElement('div');
    this.revealEl.style.cssText = `
      margin-top:8px; color:#fff; font-size:13px; font-weight:800;
      letter-spacing:0.5px; text-align:center; min-height:18px;
      opacity:0; transition:opacity 0.5s ease;
    `;
    targetWrap.appendChild(targetCanvas);
    targetWrap.appendChild(this.revealEl);

    // Mix swatch (live)
    const mixWrap = document.createElement('div');
    this.mixCanvas = this._makeSwatch('#F8F6F0', 'YOUR MIX', true);
    const mixLabel = document.createElement('div');
    mixLabel.style.cssText = `
      margin-top:8px; color:rgba(255,255,255,0.4); font-size:11px;
      text-align:center; font-style:italic; font-weight:500;
    `;
    mixLabel.textContent = 'Adjust pigments below';
    mixWrap.appendChild(this.mixCanvas);
    mixWrap.appendChild(mixLabel);

    swatchRow.appendChild(targetWrap);
    swatchRow.appendChild(mixWrap);
    panel.appendChild(swatchRow);

    // ── Match bar ─────────────────────────────────────────────────────────
    const matchSection = document.createElement('div');
    matchSection.style.cssText = `padding:14px 18px 0;`;

    const matchHeader = document.createElement('div');
    matchHeader.style.cssText = `
      display:flex; justify-content:space-between; align-items:center;
      margin-bottom:7px;
    `;
    matchHeader.innerHTML = `<span style="color:rgba(255,255,255,0.5); font-size:11px; font-weight:700; letter-spacing:2px;">MATCH</span>`;
    this.matchLabel = document.createElement('span');
    this.matchLabel.style.cssText = `color:#C8A86A; font-size:16px; font-weight:900;`;
    this.matchLabel.textContent = '0%';
    matchHeader.appendChild(this.matchLabel);
    matchSection.appendChild(matchHeader);

    const matchTrack = document.createElement('div');
    matchTrack.style.cssText = `
      background:rgba(255,255,255,0.06); border-radius:99px;
      height:10px; overflow:hidden;
    `;
    this.matchFill = document.createElement('div');
    this.matchFill.style.cssText = `
      height:100%; width:0%; border-radius:99px;
      background:linear-gradient(90deg, #C8A86A, #FFD080);
      transition:width 0.2s ease, background 0.3s ease;
    `;
    matchTrack.appendChild(this.matchFill);
    matchSection.appendChild(matchTrack);
    panel.appendChild(matchSection);

    // ── Pigment sliders ────────────────────────────────────────────────────
    const slidersSection = document.createElement('div');
    slidersSection.style.cssText = `padding:14px 18px 0; display:flex; flex-direction:column; gap:14px;`;

    for (const p of PIGMENTS) {
      const key = p.key;
      const row = document.createElement('div');
      row.style.cssText = `display:flex; flex-direction:column; gap:5px;`;

      const rowTop = document.createElement('div');
      rowTop.style.cssText = `display:flex; align-items:center; justify-content:space-between;`;

      // Pigment dot + label
      const labelWrap = document.createElement('div');
      labelWrap.style.cssText = `display:flex; align-items:center; gap:8px;`;

      const dot = document.createElement('div');
      dot.style.cssText = `
        width:14px; height:14px; border-radius:50%;
        background:${p.color}; border:1.5px solid rgba(255,255,255,0.25);
        flex-shrink:0;
      `;
      const lbl = document.createElement('span');
      lbl.style.cssText = `color:rgba(255,255,255,0.8); font-size:13px; font-weight:700;`;
      lbl.textContent = p.label;
      labelWrap.appendChild(dot);
      labelWrap.appendChild(lbl);

      // Value display
      const valEl = document.createElement('span');
      valEl.style.cssText = `
        color:#C8A86A; font-size:13px; font-weight:900; min-width:40px;
        text-align:right; font-variant-numeric:tabular-nums;
      `;
      valEl.textContent = '0';
      this.valueEls[key] = valEl;

      rowTop.appendChild(labelWrap);
      rowTop.appendChild(valEl);
      row.appendChild(rowTop);

      // Slider
      const sliderRow = document.createElement('div');
      sliderRow.style.cssText = `display:flex; align-items:center; gap:8px;`;

      const minusBtn = this._adjBtn('−', p.color, () => this._adjust(key, -1));
      const plusBtn  = this._adjBtn('+', p.color, () => this._adjust(key,  1));

      const slider = document.createElement('input');
      slider.type  = 'range';
      slider.min   = '0';
      slider.max   = String(PIGMENT_MAX[key as keyof typeof PIGMENT_MAX]);
      slider.step  = String(PIGMENT_STEP[key as keyof typeof PIGMENT_STEP]);
      slider.value = '0';
      slider.style.cssText = `
        flex:1; accent-color:${p.color};
        height:28px; cursor:pointer;
      `;
      slider.addEventListener('input', () => {
        this.vals[key] = parseFloat(slider.value);
        this._updatePreview();
      });
      // Store ref so _adjust can sync it
      (slider as any)._pigKey = key;

      sliderRow.appendChild(minusBtn);
      sliderRow.appendChild(slider);
      sliderRow.appendChild(plusBtn);
      row.appendChild(sliderRow);
      slidersSection.appendChild(row);

      // Store slider ref for programmatic updates
      this.valueEls[key + '_slider'] = slider as any;
    }

    panel.appendChild(slidersSection);

    // ── Solved count + hints ───────────────────────────────────────────────
    const solved = getSolved();
    const hintEl = document.createElement('div');
    hintEl.style.cssText = `
      padding:12px 18px 0;
      color:rgba(200,168,106,0.45); font-size:11px; text-align:center;
      line-height:1.5;
    `;
    hintEl.textContent = `${solved.size}/${MARBELLINO_COLOURS.length} formulas solved · Get 82%+ to reveal the name`;
    panel.appendChild(hintEl);

    // ── Bottom bar: timer + submit ─────────────────────────────────────────
    const bottomBar = document.createElement('div');
    bottomBar.style.cssText = `
      display:flex; align-items:center; justify-content:space-between;
      padding:16px 18px; gap:12px;
    `;

    const timerWrap = document.createElement('div');
    timerWrap.style.cssText = `display:flex; align-items:center; gap:6px;`;
    timerWrap.innerHTML = `<span style="color:rgba(255,255,255,0.35); font-size:13px;">⏱</span>`;
    this.timerEl = document.createElement('span');
    this.timerEl.style.cssText = `color:#fff; font-size:18px; font-weight:900; font-variant-numeric:tabular-nums;`;
    this.timerEl.textContent = '2:00';
    timerWrap.appendChild(this.timerEl);

    this.submitBtn = document.createElement('button');
    this.submitBtn.textContent = 'SUBMIT MIX';
    this.submitBtn.style.cssText = `
      flex:1; background:linear-gradient(135deg, #C8A86A, #A07840);
      border:none; color:#000; font-size:14px; font-weight:900;
      letter-spacing:1px; padding:14px 20px; border-radius:14px;
      cursor:pointer; touch-action:manipulation;
      box-shadow:0 4px 20px rgba(200,168,106,0.3);
      transition:transform 0.1s, box-shadow 0.1s;
    `;
    this.submitBtn.addEventListener('pointerdown', () => {
      this.submitBtn!.style.transform = 'scale(0.97)';
    });
    this.submitBtn.addEventListener('pointerup', () => {
      this.submitBtn!.style.transform = '';
      this._submit();
    });

    bottomBar.appendChild(timerWrap);
    bottomBar.appendChild(this.submitBtn);
    panel.appendChild(bottomBar);
  }

  // ── Swatch canvas ─────────────────────────────────────────────────────────

  private _makeSwatch(hex: string, label: string, isLive: boolean): HTMLCanvasElement {
    const wrap = document.createElement('div');
    wrap.style.cssText = `display:flex; flex-direction:column; align-items:center;`;

    // Label above
    const lbl = document.createElement('div');
    lbl.style.cssText = `
      color:rgba(255,255,255,0.35); font-size:10px; font-weight:700;
      letter-spacing:3px; margin-bottom:7px;
    `;
    lbl.textContent = label;

    const canvas = document.createElement('canvas');
    canvas.width  = 160;
    canvas.height = 110;
    canvas.style.cssText = `
      width:100%; border-radius:14px;
      border:1.5px solid rgba(255,255,255,0.1);
      box-shadow:0 4px 20px rgba(0,0,0,0.6);
    `;
    this._paintSwatch(canvas, hex);
    return canvas;
  }

  private _paintSwatch(canvas: HTMLCanvasElement, hex: string): void {
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const [r, g, b] = hexToRgb(hex);

    // Background fill
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, W, H);

    // Subtle plaster texture — layered noise
    for (let i = 0; i < 800; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const s = 1 + Math.random() * 2.5;
      const bright = (Math.random() - 0.5) * 30;
      ctx.fillStyle = `rgba(${r + bright},${g + bright},${b + bright},${0.04 + Math.random() * 0.06})`;
      ctx.fillRect(x, y, s, s);
    }

    // Slight top vignette for depth
    const vg = ctx.createLinearGradient(0, 0, 0, H);
    vg.addColorStop(0, 'rgba(255,255,255,0.1)');
    vg.addColorStop(0.5, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.15)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);

    // Inner highlight stroke
    ctx.strokeStyle = 'rgba(255,255,255,0.12)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(1, 1, W - 2, H - 2, 12);
    ctx.stroke();
  }

  // ── Controls ──────────────────────────────────────────────────────────────

  private _adjBtn(label: string, color: string, onClick: () => void): HTMLButtonElement {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText = `
      width:36px; height:36px; border-radius:50%; border:none;
      background:rgba(255,255,255,0.07); color:${color};
      font-size:20px; font-weight:900; line-height:1;
      cursor:pointer; touch-action:manipulation; flex-shrink:0;
      transition:background 0.1s;
    `;
    b.addEventListener('click', onClick);

    // Long-press support for fast scrolling
    let interval: ReturnType<typeof setInterval> | null = null;
    b.addEventListener('pointerdown', () => {
      interval = setInterval(() => onClick(), 120);
    });
    const stopRepeat = () => { if (interval) { clearInterval(interval); interval = null; } };
    b.addEventListener('pointerup',    stopRepeat);
    b.addEventListener('pointerleave', stopRepeat);

    return b;
  }

  private _adjust(key: string, dir: number): void {
    const step = PIGMENT_STEP[key as keyof typeof PIGMENT_STEP];
    const max  = PIGMENT_MAX[key as keyof typeof PIGMENT_MAX];
    const precision = step < 1 ? 1 : 0;
    this.vals[key] = parseFloat(
      Math.max(0, Math.min(max, this.vals[key] + dir * step)).toFixed(precision)
    );
    // Sync HTML slider
    const slider = this.valueEls[key + '_slider'] as unknown as HTMLInputElement;
    if (slider) slider.value = String(this.vals[key]);
    this._updatePreview();
  }

  // ── Live preview ──────────────────────────────────────────────────────────

  private _updatePreview(): void {
    if (!this.target) return;

    const mixed   = computeMix(this.vals);
    const pct     = matchPct(mixed, this.target.hex);
    const isWin   = pct >= 82 && !this.solved;

    // Update mix swatch
    if (this.mixCanvas) this._paintSwatch(this.mixCanvas, mixed);

    // Update match bar
    if (this.matchFill) {
      this.matchFill.style.width = `${pct}%`;
      this.matchFill.style.background =
        pct >= 82 ? 'linear-gradient(90deg,#44DD88,#88FFCC)' :
        pct >= 60 ? 'linear-gradient(90deg,#C8A86A,#FFD080)' :
                    'linear-gradient(90deg,#884422,#CC6633)';
    }
    if (this.matchLabel) {
      this.matchLabel.textContent = `${pct}%`;
      this.matchLabel.style.color = pct >= 82 ? '#44DD88' : pct >= 60 ? '#C8A86A' : '#CC6633';
    }

    // Update value displays
    for (const p of PIGMENTS) {
      const el = this.valueEls[p.key];
      if (el) {
        const v = this.vals[p.key];
        el.textContent = v < 1 && v > 0 ? v.toFixed(1) : String(v);
      }
    }

    // Auto-trigger success if match reached
    if (isWin) this._triggerSuccess(pct);
  }

  // ── Submit ────────────────────────────────────────────────────────────────

  private _submit(): void {
    if (this.solved || !this.target) return;
    const mixed = computeMix(this.vals);
    const pct   = matchPct(mixed, this.target.hex);
    if (pct >= 82) {
      this._triggerSuccess(pct);
    } else {
      this._showHint(pct);
    }
  }

  private _showHint(pct: number): void {
    // Flash submit button with feedback
    if (!this.submitBtn) return;
    const orig = this.submitBtn.style.background;
    this.submitBtn.style.background = pct >= 60
      ? 'linear-gradient(135deg,#C8A86A,#886633)'   // warm — getting closer
      : 'linear-gradient(135deg,#883322,#CC4433)';   // cold — far off
    this.submitBtn.textContent = pct >= 70
      ? `${pct}% — So close! Keep mixing`
      : pct >= 50
      ? `${pct}% — Keep trying`
      : `${pct}% — Way off, keep mixing`;
    setTimeout(() => {
      if (this.submitBtn) {
        this.submitBtn.style.background = orig;
        this.submitBtn.textContent = 'SUBMIT MIX';
      }
    }, 1800);
  }

  // ── Win ───────────────────────────────────────────────────────────────────

  private _triggerSuccess(pct: number): void {
    if (this.solved || !this.target) return;
    this.solved = true;
    this._stopTimer();
    markSolved(this.target.name);

    // Reveal colour name
    if (this.revealEl) {
      this.revealEl.textContent = this.target.name;
      this.revealEl.style.opacity = '1';
      this.revealEl.style.color = '#44DD88';
    }

    // Update submit button → formula reveal
    if (this.submitBtn) {
      const formula = PIGMENTS
        .filter(p => (this.target as any)[p.key] > 0)
        .map(p => `${p.label}: ${(this.target as any)[p.key]}`)
        .join('  ·  ');

      this.submitBtn.style.background = 'linear-gradient(135deg,#44DD88,#22AA66)';
      this.submitBtn.style.color = '#000';
      this.submitBtn.textContent = '✓ FORMULA CRACKED!';
      this.submitBtn.disabled = true;

      // Show formula below button after a beat
      setTimeout(() => {
        const formulaEl = document.createElement('div');
        formulaEl.style.cssText = `
          padding:0 18px 18px; color:rgba(200,168,106,0.7);
          font-size:11px; text-align:center; line-height:1.7;
          animation:mmFadeIn 0.5s ease both;
        `;
        formulaEl.innerHTML = `
          <div style="color:rgba(255,255,255,0.25); font-size:10px; letter-spacing:2px; margin-bottom:4px;">
            OFFICIAL FORMULA
          </div>
          <div style="color:#C8A86A; font-weight:700;">${formula}</div>
          <div style="color:rgba(255,255,255,0.35); margin-top:8px; font-size:10px;">
            ${getSolved().size}/${MARBELLINO_COLOURS.length} formulas in your book
          </div>
        `;
        this.submitBtn?.parentElement?.parentElement?.appendChild(formulaEl);
      }, 600);
    }

    // Pulses and particles on the match bar
    if (this.matchFill) {
      this.matchFill.style.animation = 'mmPulse 0.6s ease infinite alternate';
    }

    // Points: 0–40 pts based on match quality (82–100%)
    const pts = Math.round(((pct - 82) / 18) * 40);

    // Close after 4s, report points
    setTimeout(() => {
      this._cleanup();
      this.onDone?.(pts);
    }, 4500);
  }

  // ── Timeout ───────────────────────────────────────────────────────────────

  private _triggerTimeout(): void {
    if (this.solved) return;
    this._stopTimer();
    if (this.timerEl) {
      this.timerEl.textContent = '0:00';
      this.timerEl.style.color = '#FF4444';
    }
    if (this.submitBtn) {
      this.submitBtn.style.background = 'rgba(80,30,20,0.9)';
      this.submitBtn.style.color = '#FF8888';
      this.submitBtn.textContent = '⏱ Time\'s up! Formula revealed →';
      this.submitBtn.disabled = false;
      this.submitBtn.addEventListener('click', () => {
        // Reveal formula
        if (this.revealEl && this.target) {
          this.revealEl.textContent = this.target.name;
          this.revealEl.style.opacity = '1';
          this.revealEl.style.color = '#FF8866';
        }
        if (this.mixCanvas && this.target) {
          this._paintSwatch(this.mixCanvas, this.target.hex);
        }
        this.submitBtn!.textContent = 'Close';
        setTimeout(() => { this._cleanup(); this.onDone?.(0); }, 2000);
      }, { once: true });
    }
  }

  // ── Timer ─────────────────────────────────────────────────────────────────

  private _startTimer(): void {
    this.timerInt = setInterval(() => {
      if (this.solved) return;
      this.timer--;
      if (this.timerEl) {
        const m = Math.floor(this.timer / 60);
        const s = this.timer % 60;
        this.timerEl.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        if (this.timer <= 30) this.timerEl.style.color = '#FF6644';
        if (this.timer <= 10) this.timerEl.style.animation = 'mmTimerPulse 0.5s ease infinite alternate';
      }
      if (this.timer <= 0) this._triggerTimeout();
    }, 1000);
  }

  private _stopTimer(): void {
    if (this.timerInt) { clearInterval(this.timerInt); this.timerInt = null; }
  }

  // ── Cleanup ───────────────────────────────────────────────────────────────

  private _cleanup(): void {
    this._stopTimer();
    document.getElementById('mmixer-ov')?.remove();
    this.overlay = null;
  }

  // ── Styles ────────────────────────────────────────────────────────────────

  private _injectStyles(): void {
    if (document.getElementById('mmixer-styles')) return;
    const s = document.createElement('style');
    s.id = 'mmixer-styles';
    s.textContent = `
      @keyframes mmFadeIn  { from { opacity:0 } to { opacity:1 } }
      @keyframes mmSlideUp { from { opacity:0; transform:translateY(32px) scale(0.97) }
                              to   { opacity:1; transform:translateY(0) scale(1) } }
      @keyframes mmPulse   { from { box-shadow:none } to { box-shadow:0 0 16px #44DD8866 } }
      @keyframes mmTimerPulse { from { opacity:1 } to { opacity:0.4 } }

      #mmixer-ov input[type=range] {
        -webkit-appearance:none; appearance:none;
        background:rgba(255,255,255,0.09); border-radius:99px;
      }
      #mmixer-ov input[type=range]::-webkit-slider-thumb {
        -webkit-appearance:none;
        width:24px; height:24px; border-radius:50%;
        background:#fff; border:3px solid currentColor;
        box-shadow:0 2px 8px rgba(0,0,0,0.5);
        cursor:pointer;
      }
      #mmixer-ov input[type=range]::-moz-range-thumb {
        width:24px; height:24px; border-radius:50%;
        background:#fff; border:3px solid currentColor;
        box-shadow:0 2px 8px rgba(0,0,0,0.5);
        cursor:pointer;
      }
    `;
    document.head.appendChild(s);
  }
}
