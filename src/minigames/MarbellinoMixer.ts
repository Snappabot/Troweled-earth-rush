/**
 * MarbellinoMixer — Visual Colour Mixing Mini-game
 *
 * Real TEM Marbellino formulas. Shots of pigment tint pour into a bucket.
 * Jose pumps the shots. Connie drills and mixes.
 *
 * Shot system: 1 shot = 1 formula unit.
 *   B (Black), Y (Dirty Yellow), L (Raw Umber) → whole shots
 *   R (Dirty Red) → 1 shot = 0.1 units
 *   G (Green)     → 1 shot = 1 unit
 *
 * Match 82%+ to crack the formula.
 */

// ── Mixer formulas (normalised to shot system, max 12 per pigment) ────────────
interface MixerFormula {
  name: string;
  shots: { B: number; Y: number; L: number; R: number; G: number };
  hex: string;
  hint: string;
  difficulty: 1 | 2 | 3;
}

const MIXER_FORMULAS: MixerFormula[] = [
  { name: 'Spanish White', shots: { B:1, Y:1, L:0, R:0, G:0 }, hex:'#F8F4EC', difficulty:1, hint:'Minimal pigment — barely there' },
  { name: 'Papercut',      shots: { B:1, Y:2, L:1, R:0, G:0 }, hex:'#F0E8D0', difficulty:1, hint:'Double the Yellow, everything else even' },
  { name: 'Tranquil',      shots: { B:2, Y:2, L:2, R:0, G:0 }, hex:'#E4DAC0', difficulty:1, hint:'All three equal — balanced warm white' },
  { name: 'Ivory',         shots: { B:3, Y:3, L:3, R:0, G:0 }, hex:'#EDE0BC', difficulty:2, hint:'Classic — three equal shots' },
  { name: 'Bones',         shots: { B:3, Y:1, L:3, R:0, G:0 }, hex:'#E8DFC8', difficulty:2, hint:'Like Ivory but drop the Yellow to 1' },
  { name: 'Bohemian',      shots: { B:3, Y:2, L:3, R:0, G:0 }, hex:'#DDD0B0', difficulty:2, hint:'Between Ivory and Bones — Y sits at 2' },
  { name: 'Sawtooth',      shots: { B:6, Y:2, L:6, R:0, G:0 }, hex:'#D4C8A8', difficulty:3, hint:'Double the Black and Umber from Bones' },
  { name: 'Atlas',         shots: { B:5, Y:10, L:5, R:0, G:0 }, hex:'#D4B87A', difficulty:3, hint:'Heavy on Yellow — most of anything' },
];

// Pigment config
const PIGMENT_CONFIGS = [
  { key: 'B', label: 'Black',        color: '#2a2a2a', dot: '#555', max: 8  },
  { key: 'Y', label: 'Dirty Yellow', color: '#C8A020', dot: '#E8C040', max: 12 },
  { key: 'L', label: 'Raw Umber',    color: '#8B5E30', dot: '#AA7848', max: 8  },
  { key: 'R', label: 'Dirty Red',    color: '#A04030', dot: '#CC5542', max: 6  }, // 1 shot = 0.1 units
  { key: 'G', label: 'Green',        color: '#3A6030', dot: '#5A8850', max: 8  },
] as const;
type PKey = 'B' | 'Y' | 'L' | 'R' | 'G';

// ── Colour utilities ──────────────────────────────────────────────────────────
function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.replace('#',''), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function rgbToHex(r: number, g: number, b: number): string {
  return '#' + [r,g,b].map(v =>
    Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2,'0')
  ).join('');
}
function colourDist(a: string, b: string): number {
  const [ar,ag,ab] = hexToRgb(a);
  const [br,bg,bb] = hexToRgb(b);
  return Math.sqrt((ar-br)**2 + (ag-bg)**2 + (ab-bb)**2);
}
function matchPct(mixed: string, target: string): number {
  return Math.max(0, Math.round(100 - colourDist(mixed, target) * 0.45));
}

/** Interpolated mix using known Marbellino formulas as anchors */
function computeMix(shots: Record<string, number>): string {
  const vals = {
    B: shots.B ?? 0,
    Y: shots.Y ?? 0,
    L: shots.L ?? 0,
    R: (shots.R ?? 0) * 0.1,
    G: shots.G ?? 0,
  };

  // Normalize to each pigment's max
  const n = { B: vals.B/8, Y: vals.Y/12, L: vals.L/8, R: vals.R/0.6, G: vals.G/8 };

  let wR=0,wG=0,wB=0,wT=0;
  for (const f of MIXER_FORMULAS) {
    const fn = { B:f.shots.B/8, Y:f.shots.Y/12, L:f.shots.L/8, R:(f.shots.R*0.1)/0.6, G:f.shots.G/8 };
    const d = Math.sqrt((n.B-fn.B)**2+(n.Y-fn.Y)**2+(n.L-fn.L)**2+(n.R-fn.R)**2+(n.G-fn.G)**2);
    const w = 1/(d+0.003);
    const [r,g,b] = hexToRgb(f.hex);
    wR+=r*w; wG+=g*w; wB+=b*w; wT+=w;
  }
  return rgbToHex(wR/wT,wG/wT,wB/wT);
}

// ── Saved progress ────────────────────────────────────────────────────────────
const STORE_KEY = 'tem-mixer-v2';
function getSolved(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(STORE_KEY)||'[]')); }
  catch { return new Set(); }
}
function markSolved(name: string) {
  try { const s=getSolved(); s.add(name); localStorage.setItem(STORE_KEY,JSON.stringify([...s])); }
  catch {}
}

// ── Pour stream particle ──────────────────────────────────────────────────────
interface PourDrop { x:number; y:number; vy:number; alpha:number; r:number; color:string; }

// ── Main class ────────────────────────────────────────────────────────────────
export class MarbellinoMixer {
  private overlay: HTMLDivElement | null = null;
  private canvas: HTMLCanvasElement | null = null;
  private ctx: CanvasRenderingContext2D | null = null;
  private rafId = 0;

  // Game state
  private shots: Record<PKey, number> = { B:0, Y:0, L:0, R:0, G:0 };
  private selectedPigment: PKey = 'B';
  private target: MixerFormula | null = null;
  private timer = 180;
  private timerInt: ReturnType<typeof setInterval> | null = null;
  private solved = false;
  private onDone: ((pts: number) => void) | null = null;

  // Animation state
  private animState: 'idle' | 'pumping' | 'mixing' | 'success' | 'fail' = 'idle';
  private animT = 0;             // time in current anim
  private pumpColor = '#C8A020'; // color of currently pumped pigment
  private pourDrops: PourDrop[] = [];
  private currentMix = '#F8F6F0';  // computed mix hex
  private displayMix = '#F8F6F0';  // smoothly lerped toward currentMix
  private mixedResult = '';         // set after Connie mixes
  private matchValue = 0;           // set after mixing

  // UI elements
  private dotEls: Record<PKey, HTMLElement[]> = { B:[], Y:[], L:[], R:[], G:[] };
  private timerEl: HTMLSpanElement | null = null;
  private mixBtn: HTMLButtonElement | null = null;
  private pumpBtn: HTMLButtonElement | null = null;
  private matchEl: HTMLDivElement | null = null;
  private pigmentBtns: Partial<Record<PKey, HTMLButtonElement>> = {};

  // Canvas layout (computed on build)
  private W = 400; private H = 200;
  private bucketCX = 200; private bucketY = 155; // bucket center bottom
  private nozzleX  = 150; private nozzleY = 90;  // where pour drops spawn
  private joseX    = 80;  private joseY   = 178;
  private connieX  = 320; private connieY = 178;

  // ── Public API ──────────────────────────────────────────────────────────────
  show(onDone?: (pts:number)=>void): void {
    this._cleanup();
    this.solved = false;
    this.timer  = 180;
    this.shots  = { B:0, Y:0, L:0, R:0, G:0 };
    this.animState = 'idle';
    this.animT = 0;
    this.pourDrops = [];
    this.currentMix = '#F8F6F0';
    this.displayMix = '#F8F6F0';
    this.mixedResult = '';
    this.matchValue = 0;
    this.onDone = onDone ?? null;

    const solved  = getSolved();
    const unsolved = MIXER_FORMULAS.filter(f => !solved.has(f.name));
    const pool    = unsolved.length > 0 ? unsolved : MIXER_FORMULAS;
    this.target   = pool[Math.floor(Math.random() * pool.length)];
    this.selectedPigment = 'B';

    this._injectStyles();
    this._buildUI();
    this._startTimer();
    this._startRenderLoop();
  }

  hide(): void { this._cleanup(); }

  // ── Build UI ────────────────────────────────────────────────────────────────
  private _buildUI(): void {
    const ov = document.createElement('div');
    ov.id = 'mmv2-ov';
    ov.style.cssText = `
      position:fixed; inset:0; z-index:9000;
      background:rgba(0,0,0,0.9); backdrop-filter:blur(10px);
      display:flex; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif;
      animation:mmFadeIn 0.2s ease both;
    `;
    document.body.appendChild(ov);
    this.overlay = ov;

    const panel = document.createElement('div');
    panel.style.cssText = `
      background:linear-gradient(170deg,#1c1814 0%,#0e0c0a 100%);
      border:1px solid rgba(200,168,106,0.22); border-radius:22px;
      width:min(440px,97vw); max-height:97vh; overflow-y:auto;
      box-shadow:0 24px 80px rgba(0,0,0,0.95);
      animation:mmSlideUp 0.28s cubic-bezier(.4,0,.2,1) both;
    `;
    ov.appendChild(panel);

    // ── Header ──────────────────────────────────────────────────────────────
    const hdr = document.createElement('div');
    hdr.style.cssText = `display:flex;align-items:flex-start;justify-content:space-between;padding:16px 16px 0;`;
    hdr.innerHTML = `
      <div>
        <div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div>
        <div style="color:#fff;font-size:19px;font-weight:900;letter-spacing:1px;">🎨 MARBELLINO MIXER</div>
        <div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Mix the right shots — crack the formula</div>
      </div>
    `;
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;`;
    closeBtn.addEventListener('click', ()=> this._cleanup());
    hdr.appendChild(closeBtn);
    panel.appendChild(hdr);

    // ── Target swatch strip ──────────────────────────────────────────────────
    const targetRow = document.createElement('div');
    targetRow.style.cssText = `display:flex;align-items:center;gap:12px;padding:12px 16px 0;`;
    const targetSwatch = document.createElement('div');
    targetSwatch.style.cssText = `width:52px;height:52px;border-radius:10px;border:2px solid rgba(200,168,106,0.4);flex-shrink:0;`;
    targetSwatch.style.background = this.target!.hex;
    const targetInfo = document.createElement('div');
    targetInfo.style.cssText = `flex:1;`;
    const stars = '★'.repeat(this.target!.difficulty) + '☆'.repeat(3 - this.target!.difficulty);
    targetInfo.innerHTML = `
      <div style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:3px;">TARGET COLOUR</div>
      <div id="mmv2-colname" style="color:#fff;font-size:17px;font-weight:900;letter-spacing:0.5px;">???</div>
      <div style="color:#C8A86A;font-size:11px;letter-spacing:1px;">${stars}</div>
    `;
    targetRow.appendChild(targetSwatch);
    targetRow.appendChild(targetInfo);
    panel.appendChild(targetRow);

    // ── Canvas scene ──────────────────────────────────────────────────────────
    const canvasWrap = document.createElement('div');
    canvasWrap.style.cssText = `padding:10px 16px 0;`;
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = `
      width:100%; border-radius:14px;
      border:1px solid rgba(255,255,255,0.07);
      background:#0a0806;
      box-shadow:inset 0 2px 20px rgba(0,0,0,0.8);
    `;
    this._resizeCanvas();
    canvasWrap.appendChild(this.canvas);
    panel.appendChild(canvasWrap);
    this.ctx = this.canvas.getContext('2d')!;

    // ── Pigment selectors ──────────────────────────────────────────────────
    const pigRow = document.createElement('div');
    pigRow.style.cssText = `display:flex;flex-direction:column;gap:8px;padding:12px 16px 0;`;

    for (const p of PIGMENT_CONFIGS) {
      const key = p.key as PKey;
      const row = document.createElement('div');
      row.style.cssText = `display:flex;align-items:center;gap:10px;cursor:pointer;padding:6px 10px;border-radius:12px;border:1.5px solid transparent;transition:all 0.15s;`;
      row.id = `mmv2-pig-${key}`;

      // Color swatch
      const swatch = document.createElement('div');
      swatch.style.cssText = `width:20px;height:20px;border-radius:5px;background:${p.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;

      // Label
      const lbl = document.createElement('div');
      lbl.style.cssText = `color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;width:88px;flex-shrink:0;`;
      lbl.textContent = p.label;

      // Dots
      const dotsEl = document.createElement('div');
      dotsEl.style.cssText = `display:flex;gap:4px;flex:1;align-items:center;`;
      this.dotEls[key] = [];
      const maxDots = Math.min(p.max, 12);
      for (let i = 0; i < maxDots; i++) {
        const dot = document.createElement('div');
        dot.style.cssText = `width:12px;height:12px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.12);background:transparent;flex-shrink:0;transition:background 0.15s;`;
        dotsEl.appendChild(dot);
        this.dotEls[key].push(dot);
      }

      // Count
      const cnt = document.createElement('div');
      cnt.id = `mmv2-cnt-${key}`;
      cnt.style.cssText = `color:${p.dot};font-size:13px;font-weight:900;min-width:32px;text-align:right;font-variant-numeric:tabular-nums;`;
      cnt.textContent = '0';

      row.appendChild(swatch);
      row.appendChild(lbl);
      row.appendChild(dotsEl);
      row.appendChild(cnt);
      pigRow.appendChild(row);

      // Click to select pigment
      row.addEventListener('click', () => this._selectPigment(key));

      // Store btn ref
      this.pigmentBtns[key] = row as any;
    }
    panel.appendChild(pigRow);
    // Highlight initial selection
    this._selectPigment('B');

    // ── Match bar ────────────────────────────────────────────────────────────
    this.matchEl = document.createElement('div');
    this.matchEl.style.cssText = `padding:10px 16px 0;`;
    this.matchEl.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv2-pct" style="color:#C8A86A;font-size:15px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:8px;overflow:hidden;">
        <div id="mmv2-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s ease,background 0.3s ease;"></div>
      </div>
      <div id="mmv2-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:5px;min-height:16px;"></div>
    `;
    panel.appendChild(this.matchEl);

    // ── Bottom buttons ────────────────────────────────────────────────────────
    const btnRow = document.createElement('div');
    btnRow.style.cssText = `display:flex;gap:10px;padding:12px 16px 18px;`;

    // CLEAR (remove last shot)
    const clearBtn = document.createElement('button');
    clearBtn.textContent = '⌫';
    clearBtn.title = 'Remove one shot';
    clearBtn.style.cssText = `
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      color:rgba(255,255,255,0.5);font-size:18px;
      width:50px;height:54px;border-radius:14px;cursor:pointer;
      flex-shrink:0;touch-action:manipulation;
    `;
    clearBtn.addEventListener('click', () => this._removeShot());

    // PUMP
    this.pumpBtn = document.createElement('button');
    this.pumpBtn.style.cssText = `
      flex:1;height:54px;border:none;border-radius:14px;
      font-size:15px;font-weight:900;letter-spacing:0.5px;cursor:pointer;
      touch-action:manipulation;
      background:linear-gradient(135deg,#2a5a3a,#1a3a28);
      color:#88FFbb;
      box-shadow:0 4px 20px rgba(40,160,80,0.25);
      transition:transform 0.1s,box-shadow 0.1s;
    `;
    this._updatePumpLabel();
    this.pumpBtn.addEventListener('pointerdown', ()=> { this.pumpBtn!.style.transform='scale(0.97)'; });
    this.pumpBtn.addEventListener('pointerup', ()=> { this.pumpBtn!.style.transform=''; this._pumpShot(); });

    // MIX
    this.mixBtn = document.createElement('button');
    this.mixBtn.style.cssText = `
      width:80px;height:54px;border:none;border-radius:14px;
      font-size:13px;font-weight:900;letter-spacing:0.5px;cursor:pointer;
      touch-action:manipulation;
      background:linear-gradient(135deg,#8B4A00,#5A3000);
      color:#FFD080; flex-shrink:0;
      box-shadow:0 4px 16px rgba(200,100,0,0.25);
      transition:transform 0.1s;
    `;
    this.mixBtn.textContent = '🔩 MIX';
    this.mixBtn.addEventListener('pointerdown', ()=> { this.mixBtn!.style.transform='scale(0.97)'; });
    this.mixBtn.addEventListener('pointerup', ()=> { this.mixBtn!.style.transform=''; this._triggerMix(); });

    // Timer
    const timerWrap = document.createElement('div');
    timerWrap.style.cssText = `display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;flex-shrink:0;`;
    timerWrap.innerHTML = `<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>`;
    this.timerEl = document.createElement('span');
    this.timerEl.style.cssText = `color:#fff;font-size:17px;font-weight:900;font-variant-numeric:tabular-nums;`;
    this.timerEl.textContent = '3:00';
    timerWrap.appendChild(this.timerEl);

    btnRow.appendChild(clearBtn);
    btnRow.appendChild(this.pumpBtn);
    btnRow.appendChild(this.mixBtn);
    btnRow.appendChild(timerWrap);
    panel.appendChild(btnRow);
  }

  // ── Pigment selection ─────────────────────────────────────────────────────
  private _selectPigment(key: PKey): void {
    this.selectedPigment = key;
    const pc = PIGMENT_CONFIGS.find(p => p.key === key)!;
    this.pumpColor = pc.dot;
    this._updatePumpLabel();

    for (const p of PIGMENT_CONFIGS) {
      const el = document.getElementById(`mmv2-pig-${p.key}`);
      if (!el) continue;
      if (p.key === key) {
        el.style.borderColor = pc.dot;
        el.style.background  = `${pc.color}22`;
      } else {
        el.style.borderColor = 'transparent';
        el.style.background  = 'transparent';
      }
    }
  }

  private _updatePumpLabel(): void {
    if (!this.pumpBtn) return;
    const pc = PIGMENT_CONFIGS.find(p => p.key === this.selectedPigment)!;
    const cur = this.shots[this.selectedPigment];
    const cnt = cur < 1 && this.selectedPigment === 'R' && cur > 0
      ? `${cur.toFixed(1)}` : String(cur);
    this.pumpBtn.textContent = `💉 PUMP ${pc.label.toUpperCase()} (${cnt}/${pc.max})`;
  }

  // ── Shot system ───────────────────────────────────────────────────────────
  private _pumpShot(): void {
    if (this.solved || this.animState === 'mixing' || this.animState === 'success') return;
    const key = this.selectedPigment;
    const pc  = PIGMENT_CONFIGS.find(p => p.key === key)!;
    if (this.shots[key] >= pc.max) {
      this._flashBtn(this.pumpBtn!, 'rgba(150,30,20,0.9)', `MAX ${pc.max} shots`);
      return;
    }

    this.shots[key]++;
    this._refreshDots();
    this._updatePumpLabel();

    // Update mix preview (before Connie mixes)
    this.currentMix = computeMix(this.shots);

    // Start pump animation
    this.animState = 'pumping';
    this.animT = 0;
    this._spawnPour(pc.dot);
  }

  private _removeShot(): void {
    if (this.solved || this.animState === 'mixing') return;
    const key = this.selectedPigment;
    if (this.shots[key] > 0) {
      this.shots[key]--;
      this._refreshDots();
      this._updatePumpLabel();
      this.currentMix = computeMix(this.shots);
    }
  }

  private _refreshDots(): void {
    for (const p of PIGMENT_CONFIGS) {
      const key  = p.key as PKey;
      const val  = this.shots[key];
      const dots = this.dotEls[key];
      const dotColor = p.dot;
      dots.forEach((d, i) => {
        d.style.background = i < val ? dotColor : 'transparent';
        d.style.borderColor = i < val ? dotColor + '88' : 'rgba(255,255,255,0.12)';
      });
      const cnt = document.getElementById(`mmv2-cnt-${key}`);
      if (cnt) cnt.textContent = String(val);
    }
  }

  private _flashBtn(btn: HTMLButtonElement, bg: string, msg: string): void {
    const orig = btn.style.background;
    const origTxt = btn.textContent;
    btn.style.background = bg;
    btn.textContent = msg;
    setTimeout(() => {
      btn.style.background = orig;
      btn.textContent = origTxt ?? '';
    }, 1200);
  }

  // ── Pour drop spawning ─────────────────────────────────────────────────────
  private _spawnPour(color: string): void {
    // Create a stream of drops from nozzle to bucket
    for (let i = 0; i < 8; i++) {
      this.pourDrops.push({
        x: this.nozzleX + (Math.random()-0.5)*4,
        y: this.nozzleY + i * 6,
        vy: 80 + Math.random()*40,
        alpha: 1,
        r: 3 + Math.random()*3,
        color,
      });
    }
  }

  // ── Mixing trigger ─────────────────────────────────────────────────────────
  private _triggerMix(): void {
    if (this.solved || this.animState === 'mixing' || this.animState === 'success') return;
    const total = Object.values(this.shots).reduce((a,b)=>a+b,0);
    if (total === 0) {
      this._flashBtn(this.mixBtn!, 'rgba(100,60,0,0.9)', 'Add some shots first!');
      return;
    }
    this.animState = 'mixing';
    this.animT = 0;
    this.mixedResult = computeMix(this.shots);
    this.matchValue  = matchPct(this.mixedResult, this.target!.hex);
  }

  private _onMixComplete(): void {
    // Update match UI
    const pct = this.matchValue;
    const bar = document.getElementById('mmv2-bar');
    const pctEl = document.getElementById('mmv2-pct');
    const hint  = document.getElementById('mmv2-hint');
    if (bar) { bar.style.width=`${pct}%`; bar.style.background=pct>=82?'linear-gradient(90deg,#44DD88,#88FFCC)':pct>=55?'linear-gradient(90deg,#C8A86A,#FFD080)':'linear-gradient(90deg,#882222,#CC4433)'; }
    if (pctEl) { pctEl.textContent=`${pct}%`; pctEl.style.color=pct>=82?'#44DD88':pct>=55?'#C8A86A':'#FF6644'; }

    if (pct >= 82) {
      this._triggerSuccess(pct);
    } else {
      if (hint) hint.textContent = pct>=65 ? `Getting warmer… try adjusting the shots` : `Way off — reset and try again`;
      this.animState = 'idle';
    }
  }

  private _triggerSuccess(pct: number): void {
    if (this.solved) return;
    this.solved = true;
    this._stopTimer();
    markSolved(this.target!.name);
    this.animState = 'success';
    this.animT = 0;

    // Reveal colour name
    const nameEl = document.getElementById('mmv2-colname');
    if (nameEl) { nameEl.textContent = this.target!.name; nameEl.style.color='#44DD88'; }

    const hint = document.getElementById('mmv2-hint');
    if (hint) {
      const formula = PIGMENT_CONFIGS
        .filter(p => this.target!.shots[p.key as PKey] > 0)
        .map(p => `${p.key}=${this.target!.shots[p.key as PKey]}`)
        .join('  ');
      hint.textContent = `✓ Formula: ${formula}   (${getSolved().size}/${MIXER_FORMULAS.length} solved)`;
      hint.style.color = '#44DD88AA';
    }

    if (this.pumpBtn) { this.pumpBtn.disabled = true; }
    if (this.mixBtn)  { this.mixBtn.textContent = '🏆 CRACKED!'; this.mixBtn.style.background = 'linear-gradient(135deg,#2a8a44,#1a6030)'; this.mixBtn.style.color='#88FFcc'; this.mixBtn.disabled = true; }

    const pts = Math.round(((pct - 82) / 18) * 40);
    setTimeout(() => { this._cleanup(); this.onDone?.(pts); }, 4500);
  }

  private _triggerTimeout(): void {
    if (this.solved) return;
    this._stopTimer();
    this.animState = 'fail';
    if (this.timerEl) { this.timerEl.textContent='0:00'; this.timerEl.style.color='#FF4444'; }
    const nameEl = document.getElementById('mmv2-colname');
    if (nameEl) { nameEl.textContent = `${this.target!.name} ← answer`; nameEl.style.color='#FF8866'; }

    // Show solution
    if (this.mixBtn) {
      this.mixBtn.disabled = false;
      this.mixBtn.style.background = 'rgba(100,30,20,0.9)';
      this.mixBtn.style.color = '#FF9988';
      this.mixBtn.textContent = 'Close';
      this.mixBtn.addEventListener('click', ()=>{ this._cleanup(); this.onDone?.(0); }, {once:true});
    }
  }

  // ── Render loop ────────────────────────────────────────────────────────────
  private _startRenderLoop(): void {
    let last = performance.now();
    const loop = (now: number) => {
      if (!this.canvas) return;
      const dt = Math.min((now - last)/1000, 0.05);
      last = now;
      this._update(dt);
      this._drawScene();
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  private _update(dt: number): void {
    this.animT += dt;

    // Lerp display mix toward current mix
    const [mr,mg,mb] = hexToRgb(this.currentMix);
    const [dr,dg,db] = hexToRgb(this.displayMix);
    const spd = this.animState === 'mixing' ? 4.0 : 1.5;
    this.displayMix = rgbToHex(
      dr + (mr-dr)*spd*dt,
      dg + (mg-dg)*spd*dt,
      db + (mb-db)*spd*dt,
    );

    // Update pour drops
    for (let i = this.pourDrops.length-1; i >= 0; i--) {
      const d = this.pourDrops[i];
      d.y  += d.vy * dt;
      d.vy += 200 * dt; // gravity
      d.alpha = Math.max(0, 1 - (d.y - this.nozzleY) / (this.bucketY - this.nozzleY + 10));
      if (d.y > this.bucketY + 5 || d.alpha <= 0) this.pourDrops.splice(i, 1);
    }

    // State transitions
    if (this.animState === 'pumping' && this.animT > 0.7) {
      this.animState = 'idle';
    }
    if (this.animState === 'mixing' && this.animT > 2.0) {
      this.animState = 'idle';
      this._onMixComplete();
    }
  }

  private _drawScene(): void {
    if (!this.canvas || !this.ctx) return;
    const ctx = this.ctx;
    const W = this.canvas.width;
    const H = this.canvas.height;

    // Background
    ctx.clearRect(0, 0, W, H);
    const bg = ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#1a1410');
    bg.addColorStop(1,'#080604');
    ctx.fillStyle = bg;
    ctx.fillRect(0,0,W,H);

    // Floor line
    ctx.strokeStyle = 'rgba(200,168,106,0.15)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, H-18); ctx.lineTo(W, H-18);
    ctx.stroke();

    // ── Bucket ──────────────────────────────────────────────────────────────
    this._drawBucket(ctx, W, H);

    // ── Jose ────────────────────────────────────────────────────────────────
    this._drawJose(ctx, W, H);

    // ── Connie (visible when mixing or success) ─────────────────────────────
    if (this.animState === 'mixing' || this.animState === 'success' || this.matchValue > 0) {
      this._drawConnie(ctx, W, H);
    }

    // ── Pour drops ──────────────────────────────────────────────────────────
    for (const d of this.pourDrops) {
      ctx.save();
      ctx.globalAlpha = d.alpha;
      ctx.fillStyle = d.color;
      ctx.shadowColor = d.color;
      ctx.shadowBlur = 6;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI*2);
      ctx.fill();
      ctx.restore();
    }

    // ── Nozzle pipe (from machine to above bucket) ──────────────────────────
    if (this.animState === 'pumping' || this.pourDrops.length > 0) {
      ctx.save();
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(this.nozzleX, this.nozzleY);
      ctx.lineTo(this.bucketCX - 5, this.nozzleY);
      ctx.stroke();
      // Nozzle tip
      ctx.fillStyle = '#888';
      ctx.fillRect(this.bucketCX - 10, this.nozzleY - 4, 14, 7);
      ctx.restore();
    }
  }

  private _drawBucket(ctx: CanvasRenderingContext2D, W: number, H: number): void {
    const cx = this.bucketCX;
    const bY = this.bucketY;  // bottom of bucket
    const bH = 58;
    const topW = 54;
    const botW = 40;

    const tl = { x: cx - topW/2, y: bY - bH };
    const tr = { x: cx + topW/2, y: bY - bH };
    const br = { x: cx + botW/2, y: bY };
    const bl = { x: cx - botW/2, y: bY };

    // Fill clip region
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(tl.x, tl.y);
    ctx.lineTo(tr.x, tr.y);
    ctx.lineTo(br.x, br.y);
    ctx.lineTo(bl.x, bl.y);
    ctx.closePath();
    ctx.clip();

    // Base fill — white plaster
    ctx.fillStyle = '#F5F0E8';
    ctx.fill();

    // Color fill (rises from bottom based on total shots)
    const totalShots = Object.values(this.shots).reduce((a,b)=>a+b,0);
    const fillFrac   = Math.min(1, totalShots / 22);
    if (fillFrac > 0) {
      const fillTop = bY - bH * fillFrac;
      // Interpolate bucket width at fill line
      const wAtFill = botW + (topW - botW) * fillFrac;
      const fillTL = { x: cx - wAtFill/2, y: fillTop };
      const fillTR = { x: cx + wAtFill/2, y: fillTop };

      ctx.beginPath();
      ctx.moveTo(fillTL.x, fillTop);
      ctx.lineTo(fillTR.x, fillTop);
      ctx.lineTo(br.x, bY);
      ctx.lineTo(bl.x, bY);
      ctx.closePath();
      ctx.fillStyle = this.displayMix;
      ctx.fill();

      // Subtle surface ripple on top of fill
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 1.5;
      const rY = fillTop + 2;
      ctx.beginPath();
      ctx.moveTo(fillTL.x + 3, rY);
      ctx.bezierCurveTo(cx - wAtFill/4, rY - 3, cx + wAtFill/4, rY + 2, fillTR.x - 3, rY);
      ctx.stroke();
    }

    // Mixing swirl animation
    if (this.animState === 'mixing') {
      const swirls = 3;
      const t = this.animT;
      for (let i = 0; i < swirls; i++) {
        const angle  = t * 6 + i * (Math.PI*2/swirls);
        const swR    = 10 + Math.sin(t*3+i)*5;
        const sx     = cx + Math.cos(angle) * swR;
        const sy     = bY - bH*0.3 + Math.sin(angle) * swR * 0.4;
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${0.15 + Math.sin(angle)*0.1})`;
        ctx.fill();
      }
    }

    ctx.restore();

    // Bucket outline
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(tl.x, tl.y);
    ctx.lineTo(tr.x, tr.y);
    ctx.lineTo(br.x, br.y);
    ctx.lineTo(bl.x, bl.y);
    ctx.closePath();
    ctx.strokeStyle = this.animState === 'success'
      ? `rgba(68,221,136,${0.7 + Math.sin(this.animT*4)*0.3})`
      : 'rgba(200,168,106,0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Rim (top ellipse)
    ctx.beginPath();
    ctx.ellipse(cx, bY - bH, topW/2, 6, 0, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(200,168,106,0.6)';
    ctx.lineWidth   = 2;
    ctx.stroke();
    ctx.fillStyle   = 'rgba(220,190,140,0.15)';
    ctx.fill();

    // Handle arcs
    ctx.beginPath();
    ctx.arc(cx, bY - bH - 3, topW/2 - 4, Math.PI, 0);
    ctx.strokeStyle = '#B09060';
    ctx.lineWidth   = 3;
    ctx.stroke();

    // TEM label on bucket side
    ctx.font = `bold ${Math.round(bH*0.16)}px system-ui`;
    ctx.fillStyle   = 'rgba(200,168,106,0.55)';
    ctx.textAlign   = 'center';
    ctx.fillText('TEM', cx, bY - bH*0.4);
    ctx.textAlign = 'start';

    ctx.restore();
  }

  private _drawJose(ctx: CanvasRenderingContext2D, W: number, H: number): void {
    const jx = this.joseX;
    const jy = this.joseY;   // feet
    const skin  = '#C88060';
    const shirt = '#111';
    const pump  = this.animState === 'pumping';
    const t     = this.animT;

    // ── Pump machine ──────────────────────────────────────────────────────
    const mX = jx + 20;
    const mY = jy - 55;
    const mW = 18; const mH = 50;

    // Machine body
    ctx.fillStyle = '#2a2a2a';
    ctx.strokeStyle = '#555';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(mX, mY, mW, mH, 3);
    ctx.fill(); ctx.stroke();

    // Pressure gauge
    ctx.beginPath();
    ctx.arc(mX + mW/2, mY + 12, 6, 0, Math.PI*2);
    ctx.fillStyle = pump ? '#FF8800' : '#446688';
    ctx.fill();
    ctx.strokeStyle = '#888'; ctx.lineWidth = 1;
    ctx.stroke();

    // ── Lever arm ─────────────────────────────────────────────────────────
    const leverBaseX = mX + mW/2;
    const leverBaseY = mY + 30;
    const leverAng   = pump ? Math.sin(t * 12) * 0.5 : -0.15;
    const leverLen   = 22;
    const leverTipX  = leverBaseX + Math.cos(leverAng - 0.5) * leverLen;
    const leverTipY  = leverBaseY + Math.sin(leverAng - 0.5) * leverLen;

    ctx.strokeStyle = '#888';
    ctx.lineWidth   = 3;
    ctx.lineCap     = 'round';
    ctx.beginPath();
    ctx.moveTo(leverBaseX, leverBaseY);
    ctx.lineTo(leverTipX,  leverTipY);
    ctx.stroke();
    ctx.lineCap = 'butt';

    // Lever handle
    ctx.beginPath();
    ctx.arc(leverTipX, leverTipY, 5, 0, Math.PI*2);
    ctx.fillStyle = '#C8A86A';
    ctx.fill();

    // ── Jose body ─────────────────────────────────────────────────────────
    const bh = 95;   // body height

    // Boots
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(jx - 10, jy - 14, 10, 14);
    ctx.fillRect(jx + 2,  jy - 14, 10, 14);

    // Pants
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(jx - 9,  jy - bh*0.45, 9,  bh*0.45 - 12);
    ctx.fillRect(jx + 2,  jy - bh*0.45, 9,  bh*0.45 - 12);

    // Shirt (black TEM)
    ctx.fillStyle = shirt;
    ctx.fillRect(jx - 12, jy - bh*0.82, 24, bh*0.38);

    // Neck + head
    ctx.fillStyle = skin;
    ctx.fillRect(jx - 4, jy - bh*0.87, 8, bh*0.06);
    ctx.beginPath();
    ctx.arc(jx, jy - bh*0.90, bh*0.08, 0, Math.PI*2);
    ctx.fill();

    // Hair (dark, short)
    ctx.fillStyle = '#1a0800';
    ctx.beginPath();
    ctx.arc(jx, jy - bh*0.90 - bh*0.08*0.5, bh*0.09, Math.PI, 0);
    ctx.fill();

    // Hard hat
    ctx.fillStyle = '#F5C842';
    ctx.beginPath();
    ctx.ellipse(jx, jy - bh*0.90 - bh*0.07, bh*0.12, bh*0.04, 0, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(jx - bh*0.12, jy - bh*0.90 - bh*0.08, bh*0.24, bh*0.035);

    // Right arm (holds lever)
    ctx.strokeStyle = shirt;
    ctx.lineWidth   = 8;
    ctx.lineCap     = 'round';
    const armBobY = pump ? Math.sin(t * 12) * 5 : 0;
    ctx.beginPath();
    ctx.moveTo(jx + 10, jy - bh*0.75);
    ctx.quadraticCurveTo(jx + 22, jy - bh*0.60 + armBobY, leverTipX - 4, leverTipY + 2);
    ctx.stroke();
    // Hand on lever
    ctx.beginPath();
    ctx.arc(leverTipX - 3, leverTipY + 2, 5, 0, Math.PI*2);
    ctx.fillStyle = skin;
    ctx.fill();

    // Left arm (relaxed at side)
    ctx.strokeStyle = shirt;
    ctx.lineWidth   = 8;
    ctx.beginPath();
    ctx.moveTo(jx - 10, jy - bh*0.75);
    ctx.lineTo(jx - 16, jy - bh*0.50);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(jx - 16, jy - bh*0.49, 5, 0, Math.PI*2);
    ctx.fillStyle = skin; ctx.fill();

    ctx.lineCap = 'butt';

    // Name tag
    ctx.font = 'bold 8px system-ui';
    ctx.fillStyle = 'rgba(255,220,100,0.7)';
    ctx.textAlign = 'center';
    ctx.fillText('JOSE', jx, jy + 10);
    ctx.textAlign = 'start';
  }

  private _drawConnie(ctx: CanvasRenderingContext2D, W: number, H: number): void {
    const cx = this.connieX;
    const cy = this.connieY;
    const skin  = '#F0C8A0';
    const shirt = '#111';
    const bh    = 95;
    const mixing = this.animState === 'mixing';
    const success = this.animState === 'success';
    const t = this.animT;

    // Connie entry — slides in from right
    const entryT = Math.min(1, (mixing || success || this.matchValue > 0) ? t * 4 : 0);
    ctx.save();
    ctx.globalAlpha = entryT;
    ctx.translate((1 - entryT) * 40, 0);

    // Boots
    ctx.fillStyle = '#111';
    ctx.fillRect(cx - 10, cy - 14, 10, 14);
    ctx.fillRect(cx + 2,  cy - 14, 10, 14);

    // Pants
    ctx.fillStyle = '#1a1a2a';
    ctx.fillRect(cx - 9,  cy - bh*0.45, 9,  bh*0.45 - 12);
    ctx.fillRect(cx + 2,  cy - bh*0.45, 9,  bh*0.45 - 12);

    // Shirt
    ctx.fillStyle = shirt;
    ctx.fillRect(cx - 12, cy - bh*0.82, 24, bh*0.38);

    // Neck + head
    ctx.fillStyle = skin;
    ctx.fillRect(cx - 4, cy - bh*0.87, 8, bh*0.06);
    ctx.beginPath();
    ctx.arc(cx, cy - bh*0.90, bh*0.08, 0, Math.PI*2);
    ctx.fill();

    // Wild blonde hair
    ctx.fillStyle = '#D4B840';
    ctx.beginPath();
    ctx.arc(cx, cy - bh*0.90 - bh*0.05, bh*0.10, Math.PI, 0);
    ctx.fill();
    ctx.fillRect(cx - bh*0.11, cy - bh*0.90, bh*0.22, bh*0.14);

    // ── Drill arm (extended toward bucket) ────────────────────────────────
    const drillAng = -0.15 + (mixing ? Math.sin(t*8)*0.06 : 0);
    const drillLen = 55;
    const armStartX = cx - 12;
    const armStartY = cy - bh*0.74;
    const drillEndX = armStartX - Math.cos(drillAng) * drillLen;
    const drillEndY = armStartY + Math.sin(drillAng) * drillLen * 0.4;

    // Arm
    ctx.strokeStyle = shirt;
    ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(armStartX, armStartY);
    ctx.lineTo(drillEndX + 20, drillEndY);
    ctx.stroke();
    ctx.lineCap = 'butt';

    // Drill body
    ctx.save();
    ctx.translate(drillEndX, drillEndY);
    ctx.rotate(drillAng);
    ctx.fillStyle = '#333';
    ctx.beginPath();
    ctx.roundRect(-28, -6, 36, 12, 3);
    ctx.fill();
    ctx.strokeStyle = '#666'; ctx.lineWidth = 1;
    ctx.stroke();
    // Chuck
    ctx.fillStyle = '#555';
    ctx.fillRect(-32, -4, 6, 8);
    // Drill bit
    ctx.strokeStyle = '#aaa';
    ctx.lineWidth = 2; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-32, 0);
    ctx.lineTo(-44, 0);
    ctx.stroke();
    ctx.lineCap = 'butt';
    // Spinning glow when mixing
    if (mixing) {
      ctx.save();
      ctx.translate(-44, 0);
      const spinGlow = ctx.createRadialGradient(0,0,0,0,0,12);
      spinGlow.addColorStop(0, `rgba(200,168,106,${0.6+Math.sin(t*15)*0.3})`);
      spinGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = spinGlow;
      ctx.beginPath();
      ctx.arc(0, 0, 12, 0, Math.PI*2);
      ctx.fill();
      // Spinning cross
      ctx.strokeStyle = '#FFD080';
      ctx.lineWidth = 2;
      ctx.save();
      ctx.rotate(t * 20);
      for (let a = 0; a < Math.PI*2; a += Math.PI/2) {
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(Math.cos(a)*9, Math.sin(a)*9);
        ctx.stroke();
      }
      ctx.restore();
      ctx.restore();
    }
    ctx.restore();

    // Success celebration — arms up
    if (success && t > 0.5) {
      ctx.fillStyle = skin;
      ctx.strokeStyle = shirt;
      ctx.lineWidth = 8; ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(cx + 10, cy - bh*0.74);
      ctx.lineTo(cx + 22, cy - bh*0.90);
      ctx.stroke();
    }

    // Name tag
    ctx.font = 'bold 8px system-ui';
    ctx.fillStyle = 'rgba(255,200,80,0.7)';
    ctx.textAlign = 'center';
    ctx.fillText('CONNIE', cx, cy + 10);
    ctx.textAlign = 'start';
    ctx.lineCap = 'butt';

    ctx.restore();
  }

  // ── Timer ─────────────────────────────────────────────────────────────────
  private _startTimer(): void {
    this.timerInt = setInterval(() => {
      if (this.solved) return;
      this.timer--;
      if (this.timerEl) {
        const m = Math.floor(this.timer/60);
        const s = this.timer%60;
        this.timerEl.textContent = `${m}:${s.toString().padStart(2,'0')}`;
        if (this.timer <= 30) this.timerEl.style.color = '#FF6644';
        if (this.timer <= 10) this.timerEl.style.animation = 'mmTimerPulse 0.5s ease infinite alternate';
      }
      if (this.timer <= 0) this._triggerTimeout();
    }, 1000);
  }

  private _stopTimer(): void {
    if (this.timerInt) { clearInterval(this.timerInt); this.timerInt = null; }
  }

  // ── Canvas resize ─────────────────────────────────────────────────────────
  private _resizeCanvas(): void {
    if (!this.canvas) return;
    const vw = Math.min(440, window.innerWidth * 0.97) - 32;
    const scale = vw / 400;
    this.W = Math.round(vw);
    this.H = Math.round(200 * scale);
    this.canvas.width  = this.W;
    this.canvas.height = this.H;
    // Recompute layout
    this.bucketCX = Math.round(this.W * 0.50);
    this.bucketY  = Math.round(this.H * 0.82);
    this.nozzleX  = Math.round(this.W * 0.38);
    this.nozzleY  = Math.round(this.H * 0.36);
    this.joseX    = Math.round(this.W * 0.20);
    this.joseY    = Math.round(this.H * 0.94);
    this.connieX  = Math.round(this.W * 0.80);
    this.connieY  = Math.round(this.H * 0.94);
  }

  // ── Cleanup ───────────────────────────────────────────────────────────────
  private _cleanup(): void {
    this._stopTimer();
    cancelAnimationFrame(this.rafId);
    document.getElementById('mmv2-ov')?.remove();
    this.overlay = null;
    this.canvas  = null;
    this.ctx     = null;
  }

  // ── Styles ────────────────────────────────────────────────────────────────
  private _injectStyles(): void {
    if (document.getElementById('mmv2-styles')) return;
    const s = document.createElement('style');
    s.id = 'mmv2-styles';
    s.textContent = `
      @keyframes mmFadeIn  { from { opacity:0 } to { opacity:1 } }
      @keyframes mmSlideUp { from { opacity:0; transform:translateY(30px) scale(0.96) }
                              to   { opacity:1; transform:translateY(0) scale(1) } }
      @keyframes mmTimerPulse { from { opacity:1 } to { opacity:0.3 } }
    `;
    document.head.appendChild(s);
  }
}
