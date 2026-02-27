/**
 * CharacterCreator — pre-game character customisation screen.
 * Player picks head style, skin tone and enters their driver name.
 * Returns a PlayerCharacter promise when confirmed.
 */

export interface PlayerCharacter {
  name: string;
  headStyle: number; // 0–9
  skinTone: string;  // hex colour
  hairColor: string; // hex colour
}

const SKIN_TONES = ['#F5CBA7', '#E0A87C', '#C8856A', '#A0522D', '#5C3317', '#FDE68A'];

const HAIR_COLORS = [
  '#1a0a00',  // Black
  '#3a1a00',  // Dark Brown
  '#7a4010',  // Brown
  '#C87830',  // Auburn
  '#D4A840',  // Blonde
  '#888888',  // Grey
  '#FFFFFF',  // White/Silver
  '#C8282A',  // Red
  '#1848A0',  // Blue
  '#8830A0',  // Purple
];

const HEAD_STYLES = [
  'BEANIE',
  'SNAPBACK',
  'BACKWARDS CAP',
  'HARD HAT',
  'BUZZ CUT',
  'AFRO',
  'LONG HAIR',
  'BANDANA',
  'BALD',
  'BUCKET HAT',
];

export class CharacterCreator {
  private overlay!: HTMLDivElement;
  private previewCanvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;

  private headStyle    = 0;
  private skinTone     = SKIN_TONES[0];
  private hairColor    = HAIR_COLORS[0];
  private hairColorIdx = 0;
  private playerName   = '';

  private headLabel!: HTMLSpanElement;
  private confirmBtn!: HTMLButtonElement;
  private swatches:     HTMLDivElement[] = [];
  private hairSwatches: HTMLDivElement[] = [];

  // ── Real TEM logo — pre-processed to transparent background ──────────────
  private _logoCanvas: HTMLCanvasElement | null = null;

  private _preloadLogo(): void {
    const base = (import.meta as any).env?.BASE_URL ?? './';
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      // Same pixel processing as LogoLoader.makeTEMShirtTexture for dark shirts:
      // bright (white tree) → opaque, dark (black bg) → transparent
      const size = 128;
      const cv = document.createElement('canvas');
      cv.width = cv.height = size;
      const c = cv.getContext('2d')!;
      c.drawImage(img, 0, 0, size, size);
      const id = c.getImageData(0, 0, size, size);
      const d = id.data;
      for (let i = 0; i < d.length; i += 4) {
        const brightness = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
        d[i + 3] = Math.round(Math.min(255, brightness * 1.4));
      }
      c.putImageData(id, 0, 0);
      this._logoCanvas = cv;
      this._drawPreview();
    };
    img.onerror = () => { /* silent — no fallback needed */ };
    img.src = `${base}tem-logo-white.jpg`;
  }

  show(): Promise<PlayerCharacter> {
    return new Promise((resolve) => {
      this._build(resolve);
    });
  }

  private _build(resolve: (pc: PlayerCharacter) => void): void {
    this._injectStyles();
    this._preloadLogo();

    // ── Full-screen overlay ──────────────────────────────────────────────────
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 60000;
      background: rgba(8, 10, 16, 0.97);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      overflow-y: auto;
      font-family: system-ui, -apple-system, sans-serif;
      padding: 24px 16px 40px;
      box-sizing: border-box;
    `;

    // ── Title ────────────────────────────────────────────────────────────────
    const title = document.createElement('div');
    title.style.cssText = `
      color: #D4A040;
      font-size: clamp(18px, 5vw, 26px);
      font-weight: 900;
      letter-spacing: 3px;
      text-align: center;
      margin-bottom: 20px;
      text-shadow: 0 0 30px rgba(212,160,64,0.5);
    `;
    title.textContent = 'CREATE YOUR CHARACTER';
    this.overlay.appendChild(title);

    // ── Preview canvas ───────────────────────────────────────────────────────
    const canvasWrap = document.createElement('div');
    canvasWrap.style.cssText = `
      width: 160px;
      height: 280px;
      background: rgba(0,0,0,0.6);
      border: 2px solid rgba(212,160,64,0.35);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      overflow: hidden;
    `;

    this.previewCanvas = document.createElement('canvas');
    this.previewCanvas.width  = 160;
    this.previewCanvas.height = 280;
    this.previewCanvas.style.cssText = `
      width: 160px;
      height: 280px;
      display: block;
    `;
    this.ctx = this.previewCanvas.getContext('2d')!;
    canvasWrap.appendChild(this.previewCanvas);
    this.overlay.appendChild(canvasWrap);

    // ── Head style picker ────────────────────────────────────────────────────
    const pickerRow = document.createElement('div');
    pickerRow.style.cssText = `
      display: flex;
      align-items: center;
      gap: 14px;
      margin-bottom: 18px;
    `;

    const btnStyle = `
      background: rgba(212,160,64,0.2);
      border: 2px solid rgba(212,160,64,0.5);
      color: #D4A040;
      font-size: 20px;
      font-weight: 900;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      cursor: pointer;
      touch-action: manipulation;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
      flex-shrink: 0;
    `;

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '&#9664;';
    prevBtn.style.cssText = btnStyle;
    prevBtn.addEventListener('click', () => {
      this.headStyle = (this.headStyle - 1 + HEAD_STYLES.length) % HEAD_STYLES.length;
      this._refreshHeadLabel();
      this._drawPreview();
    });

    this.headLabel = document.createElement('span');
    this.headLabel.style.cssText = `
      color: #fff;
      font-size: clamp(12px, 3.5vw, 16px);
      font-weight: 700;
      letter-spacing: 1px;
      min-width: 120px;
      text-align: center;
    `;
    this.headLabel.textContent = HEAD_STYLES[this.headStyle];

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '&#9654;';
    nextBtn.style.cssText = btnStyle;
    nextBtn.addEventListener('click', () => {
      this.headStyle = (this.headStyle + 1) % HEAD_STYLES.length;
      this._refreshHeadLabel();
      this._drawPreview();
    });

    pickerRow.appendChild(prevBtn);
    pickerRow.appendChild(this.headLabel);
    pickerRow.appendChild(nextBtn);
    this.overlay.appendChild(pickerRow);

    // ── Skin tone swatches ───────────────────────────────────────────────────
    const skinLabel = document.createElement('div');
    skinLabel.style.cssText = `
      color: rgba(255,255,255,0.55);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
    `;
    skinLabel.textContent = 'SKIN TONE';
    this.overlay.appendChild(skinLabel);

    const swatchRow = document.createElement('div');
    swatchRow.style.cssText = `
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 22px;
      max-width: 320px;
    `;

    SKIN_TONES.forEach((tone, i) => {
      const isYellow = tone === '#FDE68A';
      const swatch = document.createElement('div');
      swatch.style.cssText = `
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: ${tone};
        cursor: pointer;
        touch-action: manipulation;
        border: 3px solid ${i === 0 ? '#D4A040' : 'transparent'};
        transition: border-color 0.15s, transform 0.1s;
        box-sizing: border-box;
        flex-shrink: 0;
        ${isYellow ? 'box-shadow: inset 0 0 0 1px rgba(0,0,0,0.25);' : ''}
      `;
      swatch.addEventListener('click', () => {
        this.skinTone = tone;
        this.swatches.forEach((s, si) => {
          s.style.borderColor = si === i ? '#D4A040' : 'transparent';
          s.style.transform   = si === i ? 'scale(1.15)' : 'scale(1)';
        });
        this._drawPreview();
      });
      this.swatches.push(swatch);
      swatchRow.appendChild(swatch);
    });
    this.overlay.appendChild(swatchRow);

    // ── Hair colour ───────────────────────────────────────────────────────────
    const hairLabel = document.createElement('div');
    hairLabel.style.cssText = `
      color: rgba(255,255,255,0.55);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 10px;
    `;
    hairLabel.textContent = 'HAIR COLOUR';
    this.overlay.appendChild(hairLabel);

    const hairRow = document.createElement('div');
    hairRow.style.cssText = `display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 22px; max-width: 320px;`;
    this.hairSwatches = [];

    HAIR_COLORS.forEach((col, i) => {
      const sw = document.createElement('div');
      sw.style.cssText = `
        width: 36px; height: 36px; border-radius: 50%;
        background: ${col};
        cursor: pointer;
        border: 3px solid ${i === 0 ? '#D4A040' : 'transparent'};
        transition: border-color 0.15s, transform 0.1s;
        box-sizing: border-box;
        flex-shrink: 0;
        ${col === '#FFFFFF' ? 'box-shadow: inset 0 0 0 1px rgba(0,0,0,0.3);' : ''}
      `;
      sw.addEventListener('click', () => {
        this.hairColor    = col;
        this.hairColorIdx = i;
        this.hairSwatches.forEach((s, si) => {
          s.style.borderColor = si === i ? '#D4A040' : 'transparent';
          s.style.transform   = si === i ? 'scale(1.15)' : 'scale(1)';
        });
        this._drawPreview();
      });
      this.hairSwatches.push(sw);
      hairRow.appendChild(sw);
    });
    this.overlay.appendChild(hairRow);

    // ── Name input ────────────────────────────────────────────────────────────
    const nameLabel = document.createElement('div');
    nameLabel.style.cssText = `
      color: rgba(255,255,255,0.55);
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 8px;
      align-self: flex-start;
      width: 100%;
      max-width: 320px;
    `;
    nameLabel.textContent = 'DRIVER NAME';
    this.overlay.appendChild(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.type        = 'text';
    nameInput.maxLength   = 20;
    nameInput.placeholder = 'Enter your name...';
    nameInput.style.cssText = `
      width: 100%;
      max-width: 320px;
      box-sizing: border-box;
      background: rgba(255,255,255,0.06);
      border: 2px solid rgba(212,160,64,0.4);
      color: #fff;
      font-size: 17px;
      font-weight: 700;
      padding: 13px 16px;
      border-radius: 10px;
      font-family: system-ui, sans-serif;
      outline: none;
      margin-bottom: 20px;
      text-align: center;
      letter-spacing: 1px;
      -webkit-appearance: none;
    `;
    nameInput.addEventListener('input', () => {
      this.playerName = nameInput.value;
      this._updateConfirmState();
    });
    nameInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && this.playerName.trim().length > 0) {
        this._confirm(resolve);
      }
    });
    this.overlay.appendChild(nameInput);

    // ── Confirm button ────────────────────────────────────────────────────────
    this.confirmBtn = document.createElement('button');
    this.confirmBtn.textContent = '✅ CONFIRM';
    this.confirmBtn.disabled    = true;
    this.confirmBtn.style.cssText = `
      width: 100%;
      max-width: 320px;
      padding: 16px;
      background: rgba(212,160,64,0.25);
      border: 2px solid rgba(212,160,64,0.35);
      color: rgba(212,160,64,0.45);
      font-size: 17px;
      font-weight: 900;
      border-radius: 12px;
      cursor: not-allowed;
      letter-spacing: 2px;
      font-family: system-ui, sans-serif;
      transition: background 0.2s, color 0.2s, border-color 0.2s;
      touch-action: manipulation;
    `;
    this.confirmBtn.addEventListener('click', () => {
      if (this.playerName.trim().length > 0) this._confirm(resolve);
    });
    this.overlay.appendChild(this.confirmBtn);

    document.body.appendChild(this.overlay);

    // Initial draw
    this._drawPreview();

    // Focus name input after a tick (avoids iOS quirks)
    setTimeout(() => nameInput.focus(), 120);
  }

  private _refreshHeadLabel(): void {
    this.headLabel.textContent = HEAD_STYLES[this.headStyle];
  }

  private _updateConfirmState(): void {
    const ok = this.playerName.trim().length > 0;
    this.confirmBtn.disabled = !ok;
    if (ok) {
      this.confirmBtn.style.background   = 'linear-gradient(135deg, #C4880A, #D4A040)';
      this.confirmBtn.style.borderColor  = '#D4A040';
      this.confirmBtn.style.color        = '#000';
      this.confirmBtn.style.cursor       = 'pointer';
    } else {
      this.confirmBtn.style.background   = 'rgba(212,160,64,0.15)';
      this.confirmBtn.style.borderColor  = 'rgba(212,160,64,0.25)';
      this.confirmBtn.style.color        = 'rgba(212,160,64,0.35)';
      this.confirmBtn.style.cursor       = 'not-allowed';
    }
  }

  private _confirm(resolve: (pc: PlayerCharacter) => void): void {
    this.overlay.remove();
    resolve({
      name:      this.playerName.trim(),
      headStyle: this.headStyle,
      skinTone:  this.skinTone,
      hairColor: this.hairColor,
    });
  }

  // ── Preview drawing ──────────────────────────────────────────────────────
  private _drawPreview(): void {
    const ctx  = this.ctx;
    const W    = this.previewCanvas.width;   // 120
    const H    = this.previewCanvas.height;  // 220
    const skin = this.skinTone;

    // Background — dark navy so dark clothes are visible
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#1a2035');
    bgGrad.addColorStop(1, '#0e1220');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Floor line
    ctx.fillStyle = 'rgba(212,160,64,0.15)';
    ctx.fillRect(0, H - 14, W, 1);

    // Ground shadow
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.beginPath();
    ctx.ellipse(W / 2, H - 8, 30, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── Measurements (proportional to height) ────────────────────────────────
    const hh   = H * 0.70;
    const cx   = W / 2;
    const base = H - 4;

    // Boots — dark brown, visible against navy
    ctx.fillStyle = '#2a1a0c';
    ctx.fillRect(cx - 19, base - 24, 16, 24);
    ctx.fillRect(cx + 3,  base - 24, 16, 24);
    // Boot sole highlight
    ctx.fillStyle = '#3a2a1a';
    ctx.fillRect(cx - 20, base - 4, 18, 4);
    ctx.fillRect(cx + 2,  base - 4, 18, 4);

    // Pants — dark navy blue, visible
    ctx.fillStyle = '#1e2a44';
    ctx.fillRect(cx - 17, base - hh * 0.44, 15, hh * 0.44 - 22);
    ctx.fillRect(cx + 2,  base - hh * 0.44, 15, hh * 0.44 - 22);
    // Belt
    ctx.fillStyle = '#5a3a1a';
    ctx.fillRect(cx - 18, base - hh * 0.44, 36, hh * 0.04);

    // Shirt — charcoal with visible edge (TEM style)
    ctx.fillStyle = '#1c1c1c';
    ctx.fillRect(cx - 21, base - hh * 0.81, 42, hh * 0.38);
    // Shirt collar hint
    ctx.fillStyle = '#C1666B';
    ctx.fillRect(cx - 5, base - hh * 0.81, 10, 3);

    // Arms — charcoal sleeves
    ctx.fillStyle = '#1c1c1c';
    ctx.fillRect(cx - 32, base - hh * 0.79, 14, hh * 0.31);
    ctx.fillRect(cx + 18, base - hh * 0.79, 14, hh * 0.27);

    // ── TEM shirt logo — transparent-bg processed image, drawn normally ────
    if (this._logoCanvas) {
      const lx = cx;
      const ly = base - hh * 0.63;
      const logoSz = 46;
      ctx.drawImage(this._logoCanvas, lx - logoSz / 2, ly - logoSz / 2, logoSz, logoSz);
    }

    // Hands (skin, small ellipses)
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.ellipse(cx - 24, base - hh * 0.48, 6, 8, 0.2, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(cx + 24, base - hh * 0.52, 6, 8, -0.2, 0, Math.PI * 2);
    ctx.fill();

    // Neck
    ctx.fillStyle = skin;
    ctx.fillRect(cx - 4, base - hh * 0.84, 8, hh * 0.05);

    // Head (skin ellipse)
    const headY = base - hh * 0.87;
    const headRX = hh * 0.075;
    const headRY = hh * 0.09;
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.ellipse(cx, headY, headRX, headRY, 0, 0, Math.PI * 2);
    ctx.fill();

    // Draw head style on top
    this._drawHeadStyle(ctx, cx, headY, headRX, headRY, hh, base);

    // Subtle rim light
    ctx.strokeStyle = 'rgba(212,160,64,0.4)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx - 18, base - hh * 0.44);
    ctx.lineTo(cx - 18, base - hh * 0.80);
    ctx.stroke();
  }

  private _drawHeadStyle(
    ctx: CanvasRenderingContext2D,
    cx: number,
    headY: number,
    headRX: number,
    headRY: number,
    hh: number,
    base: number
  ): void {
    switch (this.headStyle) {

      case 0: { // BEANIE
        // Dark grey rounded rect covering top ¾ of head, with ear flaps
        ctx.fillStyle = this.hairColor;
        // Main beanie body (rounded, pulled down)
        ctx.beginPath();
        ctx.roundRect(cx - headRX * 1.1, headY - headRY * 1.6, headRX * 2.2, headRY * 1.9, 6);
        ctx.fill();
        // Folded brim cuff
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.75;
        ctx.fillRect(cx - headRX * 1.15, headY - headRY * 0.05, headRX * 2.3, headRY * 0.38);
        ctx.globalAlpha = 1.0;
        // Ear flaps (small rounded rects on each side)
        ctx.fillStyle = this.hairColor;
        ctx.beginPath();
        ctx.roundRect(cx - headRX * 1.35, headY, headRX * 0.45, headRY * 0.6, 4);
        ctx.fill();
        ctx.beginPath();
        ctx.roundRect(cx + headRX * 0.9, headY, headRX * 0.45, headRY * 0.6, 4);
        ctx.fill();
        // Pom-pom on top
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.7;
        ctx.beginPath();
        ctx.arc(cx, headY - headRY * 1.55, headRX * 0.35, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        break;
      }

      case 1: { // SNAPBACK
        // Crown block (coloured)
        ctx.fillStyle = this.hairColor;
        ctx.beginPath();
        ctx.roundRect(cx - headRX * 1.05, headY - headRY * 1.55, headRX * 2.1, headRY * 1.4, 5);
        ctx.fill();
        // Button on top
        ctx.fillStyle = '#D4A040';
        ctx.beginPath();
        ctx.arc(cx, headY - headRY * 1.5, 3, 0, Math.PI * 2);
        ctx.fill();
        // Flat brim (extending forward — right side for front-facing)
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.75;
        ctx.fillRect(cx - headRX * 1.05, headY - headRY * 0.15, headRX * 2.4, headRY * 0.28);
        ctx.globalAlpha = 1.0;
        // Snapback adjustment stripe
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.55;
        ctx.fillRect(cx - headRX * 0.8, headY - headRY * 0.05, headRX * 1.6, headRY * 0.16);
        ctx.globalAlpha = 1.0;
        break;
      }

      case 2: { // BACKWARDS CAP
        // Crown block (same as snapback but brim goes backwards)
        ctx.fillStyle = this.hairColor;
        ctx.beginPath();
        ctx.roundRect(cx - headRX * 1.05, headY - headRY * 1.55, headRX * 2.1, headRY * 1.4, 5);
        ctx.fill();
        // Button on top
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(cx, headY - headRY * 1.5, 3, 0, Math.PI * 2);
        ctx.fill();
        // Brim at back (left side for backwards cap) — small rect sticking out behind
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.75;
        ctx.fillRect(cx - headRX * 1.05 - headRX * 1.1, headY - headRY * 0.15, headRX * 1.2, headRY * 0.25);
        ctx.globalAlpha = 1.0;
        break;
      }

      case 3: { // HARD HAT
        // Dome body (yellow)
        ctx.fillStyle = '#FFD700';
        ctx.beginPath();
        ctx.ellipse(cx, headY - headRY * 0.6, headRX * 1.3, headRY * 1.4, 0, Math.PI, 0);
        ctx.fill();
        // Wide brim
        ctx.fillStyle = '#E8C000';
        ctx.fillRect(cx - headRX * 1.5, headY - headRY * 0.12, headRX * 3.0, headRY * 0.28);
        // Suspension strap ridge
        ctx.fillStyle = '#C8A800';
        ctx.beginPath();
        ctx.arc(cx, headY - headRY * 0.5, headRX * 0.9, Math.PI * 1.15, Math.PI * 1.85);
        ctx.strokeStyle = '#C8A800';
        ctx.lineWidth = 3;
        ctx.stroke();
        break;
      }

      case 4: { // BUZZ CUT
        // Very short dark hair arc — tight to top of head
        ctx.fillStyle = this.hairColor;
        ctx.beginPath();
        ctx.ellipse(cx, headY - headRY * 0.55, headRX * 1.02, headRY * 0.75, 0, Math.PI, 0);
        ctx.fill();
        // Tiny stubble texture on sides
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.75;
        ctx.beginPath();
        ctx.arc(cx - headRX * 0.8, headY - headRY * 0.1, headRX * 0.32, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + headRX * 0.8, headY - headRY * 0.1, headRX * 0.32, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        break;
      }

      case 5: { // AFRO — bumpy perimeter circles
        const hc = this.hairColor;
        const afroCy = headY - headRY * 0.2;
        const afroCx = cx;
        const R  = headRX * 2.1;
        const Ry = headRY * 1.8;

        // Solid interior fill — slightly larger than head so skin is fully covered
        ctx.fillStyle = hc;
        ctx.beginPath();
        ctx.ellipse(afroCx, afroCy, R * 0.82, Ry * 0.85, 0, 0, Math.PI * 2);
        ctx.fill();

        // Bumpy perimeter — 20 overlapping circles
        for (let i = 0; i < 20; i++) {
          const angle = (i / 20) * Math.PI * 2 - Math.PI / 2;
          const rScale = 0.88 + Math.sin(i * 2.7 + 1.1) * 0.10;
          const bx = afroCx + Math.cos(angle) * R * rScale;
          const by = afroCy + Math.sin(angle) * Ry * rScale;
          const bSize = headRX * (0.44 + Math.sin(i * 1.9) * 0.09);
          ctx.fillStyle = hc;
          ctx.beginPath();
          ctx.arc(bx, by, bSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Outline ring — ensures afro is visible even with dark hair on dark bg
        ctx.strokeStyle = 'rgba(255,255,255,0.22)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(afroCx, afroCy, R * 0.95, Ry * 0.95, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Inner texture — subtle curl hints
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = '#000000';
        for (let i = 0; i < 9; i++) {
          const angle = (i / 9) * Math.PI * 2;
          ctx.beginPath();
          ctx.arc(
            afroCx + Math.cos(angle) * R * 0.42,
            afroCy + Math.sin(angle) * Ry * 0.38,
            headRX * 0.22, 0, Math.PI * 2
          );
          ctx.fill();
        }
        ctx.globalAlpha = 1.0;

        // Soft highlight top-left
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.ellipse(afroCx - headRX * 0.5, afroCy - headRY * 1.0, headRX * 0.7, headRY * 0.45, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        break;
      }

      case 6: { // LONG HAIR
        // Dark strokes hanging past ears down toward collar
        ctx.fillStyle = this.hairColor;
        // Left hang
        ctx.beginPath();
        ctx.moveTo(cx - headRX * 0.9, headY - headRY * 0.8);
        ctx.bezierCurveTo(
          cx - headRX * 1.3, headY,
          cx - headRX * 1.4, headY + headRY * 0.5,
          cx - headRX * 1.1, base - hh * 0.72
        );
        ctx.lineWidth = headRX * 1.4;
        ctx.strokeStyle = this.hairColor;
        ctx.lineCap = 'round';
        ctx.stroke();
        // Right hang
        ctx.beginPath();
        ctx.moveTo(cx + headRX * 0.9, headY - headRY * 0.8);
        ctx.bezierCurveTo(
          cx + headRX * 1.3, headY,
          cx + headRX * 1.4, headY + headRY * 0.5,
          cx + headRX * 1.1, base - hh * 0.72
        );
        ctx.stroke();
        ctx.lineCap = 'butt';
        ctx.lineWidth = 1;
        // Top hair cap
        ctx.fillStyle = this.hairColor;
        ctx.beginPath();
        ctx.arc(cx, headY - headRY * 0.55, headRX * 1.05, Math.PI, 0);
        ctx.fill();
        break;
      }

      case 7: { // BANDANA
        // Coloured strip across forehead + knot at back
        // Triangle top
        ctx.fillStyle = this.hairColor;
        ctx.beginPath();
        ctx.moveTo(cx - headRX * 1.1, headY - headRY * 0.55);
        ctx.lineTo(cx + headRX * 1.1, headY - headRY * 0.55);
        ctx.lineTo(cx + headRX * 1.1, headY - headRY * 0.35);
        ctx.bezierCurveTo(cx + headRX * 0.5, headY + headRY * 0.12, cx - headRX * 0.5, headY + headRY * 0.12, cx - headRX * 1.1, headY - headRY * 0.35);
        ctx.closePath();
        ctx.fill();
        // Pattern dots on bandana
        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(cx - headRX * 0.8 + i * headRX * 0.4, headY - headRY * 0.45, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
        // Knot at back — two small circles
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.75;
        ctx.beginPath();
        ctx.arc(cx - headRX * 1.15, headY - headRY * 0.4, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + headRX * 1.15, headY - headRY * 0.4, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        break;
      }

      case 8: { // BALD
        // No drawing — just the bare skin head already drawn
        // Add a subtle shine highlight to read as clearly bald
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.beginPath();
        ctx.ellipse(cx - headRX * 0.25, headY - headRY * 0.65, headRX * 0.38, headRY * 0.22, -0.3, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case 9: { // BUCKET HAT
        // Wide flat brim
        ctx.fillStyle = this.hairColor;
        ctx.fillRect(cx - headRX * 1.7, headY - headRY * 0.1, headRX * 3.4, headRY * 0.32);
        // Dome on top
        ctx.fillStyle = this.hairColor;
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.ellipse(cx, headY - headRY * 0.6, headRX * 1.08, headRY * 0.78, 0, Math.PI, 0);
        ctx.fill();
        ctx.globalAlpha = 1.0;
        // Band detail
        ctx.strokeStyle = this.hairColor;
        ctx.globalAlpha = 0.55;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, headY - headRY * 0.05, headRX * 1.05, Math.PI * 0.85, Math.PI * 1.15);
        ctx.stroke();
        ctx.globalAlpha = 1.0;
        ctx.lineWidth = 1;
        break;
      }
    }
  }

  private _injectStyles(): void {
    if (document.getElementById('char-creator-styles')) return;
    const s = document.createElement('style');
    s.id = 'char-creator-styles';
    s.textContent = `
      #char-creator-overlay input::placeholder {
        color: rgba(255,255,255,0.3);
      }
      #char-creator-overlay input:focus {
        border-color: #D4A040;
        box-shadow: 0 0 0 3px rgba(212,160,64,0.2);
      }
    `;
    document.head.appendChild(s);
  }
}
