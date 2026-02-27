/**
 * WorkshopShootout — 3D Perspective Marbellino Mixer
 *
 * Camera is BEHIND Jose on a perspective workshop floor.
 * Connie carries the bucket left/right in the midground.
 * Player selects a pigment and fires shots at the moving bucket.
 * Match the target Marbellino formula to win.
 *
 * Formula system copied directly from MarbellinoMixer.ts
 */

import type { PlayerCharacter } from '../ui/CharacterCreator';

// ─────────────────────────────────────────────────────────────────────────────
// FORMULA + PIGMENT DATA  (copied from MarbellinoMixer)
// ─────────────────────────────────────────────────────────────────────────────

interface MixerFormula {
  name:       string;
  shots:      { B:number; Y:number; L:number; R:number; G:number };
  hex:        string;
  hint:       string;
  difficulty: 1|2|3;
}

const MIXER_FORMULAS: MixerFormula[] = [
  { name:'Spanish White', shots:{B:1,Y:1,L:0,R:0,G:0}, hex:'#F8F4EC', difficulty:1,
    hint:'Minimal — barely any pigment' },
  { name:'Papercut',      shots:{B:1,Y:2,L:1,R:0,G:0}, hex:'#F0E8D0', difficulty:1,
    hint:'Double the Yellow, everything even' },
  { name:'Tranquil',      shots:{B:2,Y:2,L:2,R:0,G:0}, hex:'#E4DAC0', difficulty:1,
    hint:'All three equal — balanced warm white' },
  { name:'Sage Mist',     shots:{B:1,Y:1,L:1,R:0,G:2}, hex:'#DDE8D8', difficulty:1,
    hint:'Mostly base with a touch of Green' },
  { name:'Ivory',         shots:{B:3,Y:3,L:3,R:0,G:0}, hex:'#EDE0BC', difficulty:2,
    hint:'Classic — three equal shots each' },
  { name:'Bones',         shots:{B:3,Y:1,L:3,R:0,G:0}, hex:'#E8DFC8', difficulty:2,
    hint:'Like Ivory but drop Yellow to 1' },
  { name:'Bohemian',      shots:{B:3,Y:2,L:3,R:0,G:0}, hex:'#DDD0B0', difficulty:2,
    hint:'Between Ivory and Bones — Y at 2' },
  { name:'Terracotta',    shots:{B:2,Y:3,L:2,R:3,G:0}, hex:'#D4906A', difficulty:2,
    hint:'Add Red to warm it right up' },
  { name:'Dusty Adobe',   shots:{B:3,Y:4,L:3,R:2,G:0}, hex:'#C8A07A', difficulty:2,
    hint:'Yellow-forward with a red accent' },
  { name:'Sage Brush',    shots:{B:3,Y:1,L:1,R:0,G:4}, hex:'#A8B898', difficulty:2,
    hint:'Green forward, light on Yellow and Umber' },
  { name:'Sawtooth',      shots:{B:6,Y:2,L:6,R:0,G:0}, hex:'#D4C8A8', difficulty:3,
    hint:'Double the Black and Umber from Bones' },
  { name:'Atlas',         shots:{B:5,Y:10,L:5,R:0,G:0}, hex:'#D4B87A', difficulty:3,
    hint:'Heavy on Yellow — most of anything' },
  { name:'Raw Clay',      shots:{B:3,Y:2,L:3,R:4,G:0}, hex:'#C07850', difficulty:3,
    hint:'More Red than anything else' },
  { name:'Olive Drab',    shots:{B:4,Y:3,L:3,R:0,G:4}, hex:'#A0A870', difficulty:3,
    hint:'Even Green and Black, balanced Yellow+Umber' },
  { name:'Iron Rust',     shots:{B:5,Y:2,L:4,R:5,G:0}, hex:'#A86040', difficulty:3,
    hint:'Heavy Black and Red, light Yellow' },
  { name:'River Reed',    shots:{B:4,Y:2,L:2,R:0,G:5}, hex:'#889878', difficulty:3,
    hint:'Green dominant, Black second, minimal Yellow' },
];

const PIGS = [
  { key:'B', label:'Black',        color:'#2a2a2a', dot:'#888888', max:8  },
  { key:'Y', label:'Yellow',       color:'#C8A020', dot:'#E8C040', max:12 },
  { key:'L', label:'Umber',        color:'#8B5E30', dot:'#AA7848', max:8  },
  { key:'R', label:'Red',          color:'#A04030', dot:'#CC5542', max:6  },
  { key:'G', label:'Green',        color:'#3A6030', dot:'#5A8850', max:8  },
] as const;

type PKey = 'B'|'Y'|'L'|'R'|'G';

// ─────────────────────────────────────────────────────────────────────────────
// COLOUR UTILITIES  (copied from MarbellinoMixer)
// ─────────────────────────────────────────────────────────────────────────────

function hexRgb(hex:string):[number,number,number]{
  const n=parseInt(hex.replace('#',''),16);
  return[(n>>16)&255,(n>>8)&255,n&255];
}
function rgbHex(r:number,g:number,b:number):string{
  return'#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
}
function matchPct(a:string,b:string):number{
  const[ar,ag,ab]=hexRgb(a);const[br,bg,bb]=hexRgb(b);
  return Math.max(0,Math.round(100-Math.sqrt((ar-br)**2+(ag-bg)**2+(ab-bb)**2)*0.45));
}
function computeMix(shots:Record<string,number>):string{
  const vals={B:shots.B??0,Y:shots.Y??0,L:shots.L??0,R:(shots.R??0)*0.1,G:shots.G??0};
  const n={B:vals.B/8,Y:vals.Y/12,L:vals.L/8,R:vals.R/0.6,G:vals.G/8};
  let wR=0,wG=0,wB=0,wT=0;
  for(const f of MIXER_FORMULAS){
    const fn={B:f.shots.B/8,Y:f.shots.Y/12,L:f.shots.L/8,R:(f.shots.R*0.1)/0.6,G:f.shots.G/8};
    const d=Math.sqrt((n.B-fn.B)**2+(n.Y-fn.Y)**2+(n.L-fn.L)**2+(n.R-fn.R)**2+(n.G-fn.G)**2);
    const w=1/(d+0.003);
    const[r,g,b]=hexRgb(f.hex);
    wR+=r*w;wG+=g*w;wB+=b*w;wT+=w;
  }
  return rgbHex(wR/wT,wG/wT,wB/wT);
}

const STORE='tem-mixer-v4';
function getSolved():Set<string>{try{return new Set(JSON.parse(localStorage.getItem(STORE)||'[]'));}catch{return new Set();}}
function markSolved(n:string){try{const s=getSolved();s.add(n);localStorage.setItem(STORE,JSON.stringify([...s]));}catch{}}

// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC INTERFACE
// ─────────────────────────────────────────────────────────────────────────────

export interface ShootoutResult {
  won: boolean;
  colour?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// INTERNAL TYPES
// ─────────────────────────────────────────────────────────────────────────────

interface Glob {
  // start = Jose hand; target = bucket screen pos at fire time
  sx: number; sy: number;
  tx: number; ty: number;
  progress: number;  // 0→1
  pigKey: PKey;
  hit: boolean; miss: boolean;
}

interface Splat {
  x: number; y: number;
  color: string;
  t: number; maxT: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────

const GAME_TIME    = 90;   // seconds
const GLOB_SPEED   = 1.6;  // progress units / second
const SHOT_CD      = 0.55; // cooldown between throws
const CHEER_LINES  = ['GO JOSE!','YEAH!','NICE SHOT!','TEM ALL DAY!','💪 GET IN!'];

function lerp(a:number,b:number,t:number):number{ return a+(b-a)*t; }
function clamp(v:number,lo:number,hi:number):number{ return v<lo?lo:v>hi?hi:v; }
function rr(ctx:CanvasRenderingContext2D,x:number,y:number,w:number,h:number,r:number):void{
  ctx.beginPath();
  ctx.moveTo(x+r,y);ctx.lineTo(x+w-r,y);ctx.quadraticCurveTo(x+w,y,x+w,y+r);
  ctx.lineTo(x+w,y+h-r);ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
  ctx.lineTo(x+r,y+h);ctx.quadraticCurveTo(x,y+h,x,y+h-r);
  ctx.lineTo(x,y+r);ctx.quadraticCurveTo(x,y,x+r,y);
  ctx.closePath();
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN CLASS
// ─────────────────────────────────────────────────────────────────────────────

export class WorkshopShootout {
  // ── DOM
  private overlay!: HTMLDivElement;
  private canvas!:  HTMLCanvasElement;
  private ctx!:     CanvasRenderingContext2D;
  private rafId = 0;
  private lastTs = 0;

  // ── Config
  private jobTitle   = '';
  private playerName = 'Player';
  private playerChar: PlayerCharacter | null = null;

  setPlayerChar(pc: PlayerCharacter): void { this.playerChar = pc; }

  // ── Callbacks
  private onDoneFn!: (r: ShootoutResult) => void;

  // ── Target formula
  private target!: MixerFormula;

  // ── Shot counts
  private shots: Record<PKey,number> = {B:0,Y:0,L:0,R:0,G:0};
  private selPig: PKey = 'B';

  // ── Cooldown
  private shotCooldown = 0;

  // ── In-flight globs
  private globs: Glob[] = [];
  private splats: Splat[] = [];

  // ── Mix state
  private currentMix  = '#F8F6F0';
  private displayMix  = '#F8F6F0';
  private mixPct      = 0;
  private mixState: 'idle'|'mixing'|'success'|'fail' = 'idle';
  private mixT        = 0;
  private solved      = false;

  // ── Timer
  private elapsed   = 0;
  private timerInt: ReturnType<typeof setInterval>|null = null;
  private timeLeft  = GAME_TIME;

  // ── Connie (3D position)
  private connX   = 0;    // -0.8 .. 0.8  (normalised left/right)
  private connZ   = 0.2;  // -0.8 .. 0.8  (-1=far, +1=near camera)
  private connDirX = 1;
  private connDirZ = 1;
  private connSpeed = 0.38;
  private connPauseT = 0;
  private connHitT   = 0;  // red-flash when shot hits Connie body (miss bucket)
  private bkFlashT   = 0;  // yellow-flash when shot lands in bucket
  private bionichipActive = false;
  private bionichipTimer  = 10 + Math.random() * 6;
  private bionichipT      = 0;

  // ── Player sideline
  private cheerT  = 0;

  // ── Phase
  private phase: 'playing'|'win'|'lose' = 'playing';
  private endTimer = 0;

  // ── HTML control refs
  private pigBtnEls: Partial<Record<PKey, HTMLElement>> = {};
  private shotCountEls: Partial<Record<PKey, HTMLElement>> = {};
  private mixBtnEl!: HTMLButtonElement;
  private undoBtnEl!: HTMLButtonElement;
  private timerEl!: HTMLElement;
  private matchBarEl!: HTMLElement;
  private matchPctEl!: HTMLElement;
  private hintEl!: HTMLElement;
  private bucketColourEl!: HTMLElement;

  // ─────────────────────────────────────────────────────────────────────────
  // ENTRY
  // ─────────────────────────────────────────────────────────────────────────

  show(
    cfg: { jobTitle: string; crewIds: string[]; playerName: string },
    onDone: (result: ShootoutResult) => void
  ): void {
    this.jobTitle    = cfg.jobTitle;
    this.playerName  = cfg.playerName || 'Player';
    this.onDoneFn    = onDone;

    const solved = getSolved();
    const pool = MIXER_FORMULAS.filter(f => !solved.has(f.name));
    const src  = pool.length > 0 ? pool : MIXER_FORMULAS;
    this.target = src[Math.floor(Math.random() * src.length)];

    this.connSpeed = 0.28 + this.target.difficulty * 0.08;

    this._buildDOM();
    this._setupInput();
    this._startTimer();
    this.lastTs = performance.now();
    this.rafId = requestAnimationFrame(ts => this._loop(ts));
  }

  // ─────────────────────────────────────────────────────────────────────────
  // DOM
  // ─────────────────────────────────────────────────────────────────────────

  private _buildDOM(): void {
    // ── Overlay ──────────────────────────────────────────────────────────────
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position:fixed;inset:0;z-index:12000;overflow:hidden;
      background:#0e0c0a;font-family:system-ui,sans-serif;
    `;
    document.body.appendChild(this.overlay);

    // ── Canvas ───────────────────────────────────────────────────────────────
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = `
      position:absolute;top:0;left:0;width:100%;height:100%;display:block;
      touch-action:none;
    `;
    const W = window.innerWidth, H = window.innerHeight;
    this.canvas.width  = W;
    this.canvas.height = H;
    this.ctx = this.canvas.getContext('2d')!;
    this.overlay.appendChild(this.canvas);

    // ── SKIP button ──────────────────────────────────────────────────────────
    const skip = document.createElement('button');
    skip.textContent = '⏭ SKIP';
    skip.style.cssText = `
      position:absolute;top:12px;right:12px;z-index:13000;
      background:rgba(193,102,107,0.90);color:#fff;
      border:none;border-radius:10px;padding:9px 18px;
      font-size:14px;font-weight:800;cursor:pointer;
      font-family:system-ui,sans-serif;touch-action:manipulation;
    `;
    skip.addEventListener('click', () => this._end(true));
    this.overlay.appendChild(skip);

    // ── TOP HUD — two-row layout, no overlap ─────────────────────────────────
    const hud = document.createElement('div');
    hud.style.cssText = `
      position:absolute;top:0;left:0;right:0;z-index:12100;
      background:rgba(0,0,0,0.82);backdrop-filter:blur(4px);
      display:flex;flex-direction:column;gap:0;
    `;

    // Row 1: job title + timer
    const row1 = document.createElement('div');
    row1.style.cssText = `
      display:flex;align-items:center;justify-content:space-between;
      padding:6px 95px 4px 12px; /* right gap clears the SKIP button */
    `;
    const jobLbl = document.createElement('span');
    jobLbl.style.cssText = `color:#C8A86A;font-size:13px;font-weight:800;letter-spacing:0.3px;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:65%;`;
    jobLbl.textContent = this.jobTitle;
    this.timerEl = document.createElement('span');
    this.timerEl.style.cssText = `color:#fff;font-size:15px;font-weight:900;flex-shrink:0;`;
    this.timerEl.textContent = `${GAME_TIME}s`;
    row1.appendChild(jobLbl);
    row1.appendChild(this.timerEl);
    hud.appendChild(row1);

    // Row 2: colour swatch + name + formula | match %
    const row2 = document.createElement('div');
    row2.style.cssText = `
      display:flex;align-items:center;justify-content:space-between;
      padding:4px 12px 7px 12px;gap:8px;
    `;

    // Left: big swatch + colour info stacked
    const targetWrap = document.createElement('div');
    targetWrap.style.cssText = `display:flex;align-items:center;gap:8px;min-width:0;`;

    const tsw = document.createElement('div');
    tsw.style.cssText = `
      width:40px;height:40px;border-radius:8px;flex-shrink:0;
      background:${this.target.hex};
      border:2px solid rgba(255,255,255,0.3);
      box-shadow:0 0 8px ${this.target.hex}88;
    `;

    const tInfo = document.createElement('div');
    tInfo.style.cssText = `display:flex;flex-direction:column;gap:1px;min-width:0;`;

    const tName = document.createElement('span');
    tName.style.cssText = `color:#fff;font-size:14px;font-weight:900;
      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;`;
    tName.textContent = this.target.name;

    const tFormula = Object.entries(this.target.shots)
      .filter(([,v]) => v > 0).map(([k,v]) => `${k}:${v}`).join(' · ');
    const tHint = document.createElement('span');
    tHint.style.cssText = `color:rgba(255,255,255,0.5);font-size:11px;font-weight:600;letter-spacing:0.5px;`;
    tHint.textContent = tFormula;

    tInfo.appendChild(tName);
    tInfo.appendChild(tHint);
    targetWrap.appendChild(tsw);
    targetWrap.appendChild(tInfo);

    // Right: match % (large, clear)
    this.matchPctEl = document.createElement('div');
    this.matchPctEl.style.cssText = `
      flex-shrink:0;text-align:right;
      color:#C8A86A;font-size:22px;font-weight:900;line-height:1;
    `;
    this.matchPctEl.textContent = '—';

    row2.appendChild(targetWrap);
    row2.appendChild(this.matchPctEl);
    hud.appendChild(row2);

    this.overlay.appendChild(hud);

    // ── Match bar — sits flush below the two-row HUD ──────────────────────────
    const matchBar = document.createElement('div');
    matchBar.style.cssText = `
      position:absolute;top:90px;left:0;right:0;z-index:12100;height:5px;
      background:rgba(255,255,255,0.07);
    `;
    this.matchBarEl = document.createElement('div');
    this.matchBarEl.style.cssText = `height:100%;width:0%;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s;`;
    matchBar.appendChild(this.matchBarEl);
    this.overlay.appendChild(matchBar);

    // ── Hint line ────────────────────────────────────────────────────────────
    this.hintEl = document.createElement('div');
    this.hintEl.style.cssText = `
      position:absolute;top:96px;left:50%;transform:translateX(-50%);z-index:12100;
      color:rgba(200,168,106,0.85);font-size:12px;font-weight:700;
      background:rgba(0,0,0,0.55);padding:3px 12px;border-radius:12px;
      pointer-events:none;white-space:nowrap;
    `;
    this.hintEl.textContent = this.target.hint;
    this.overlay.appendChild(this.hintEl);

    // ── BOTTOM CONTROLS ───────────────────────────────────────────────────────
    const controls = document.createElement('div');
    controls.style.cssText = `
      position:absolute;bottom:0;left:0;right:0;z-index:12100;
      background:rgba(0,0,0,0.80);backdrop-filter:blur(4px);
      padding:8px 10px 10px;
      display:flex;align-items:flex-end;gap:6px;
    `;

    // Pigment buttons (5)
    const pigRow = document.createElement('div');
    pigRow.style.cssText = `display:flex;gap:5px;flex:1;align-items:flex-end;`;

    for (const p of PIGS) {
      const k = p.key as PKey;
      const col = document.createElement('div');
      col.style.cssText = `display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;touch-action:manipulation;`;

      const btn = document.createElement('div');
      btn.style.cssText = `
        width:clamp(44px,9vw,56px);height:clamp(44px,9vw,56px);
        border-radius:12px;border:2.5px solid rgba(255,255,255,0.12);
        background:${p.color};display:flex;align-items:center;justify-content:center;
        font-size:clamp(9px,1.5vw,11px);font-weight:900;color:rgba(255,255,255,0.85);
        letter-spacing:0.5px;transition:border-color 0.1s,transform 0.1s;
        user-select:none;
      `;
      btn.textContent = p.key;
      btn.dataset['key'] = k;

      const cnt = document.createElement('div');
      cnt.style.cssText = `color:${p.dot};font-size:clamp(11px,1.8vw,13px);font-weight:900;font-variant-numeric:tabular-nums;`;
      cnt.textContent = '0';

      col.appendChild(btn);
      col.appendChild(cnt);
      pigRow.appendChild(col);

      this.pigBtnEls[k] = btn;
      this.shotCountEls[k] = cnt;

      col.addEventListener('click',  () => this._selectPig(k));
      col.addEventListener('touchstart', e => { e.preventDefault(); this._selectPig(k); }, {passive:false});
    }
    controls.appendChild(pigRow);

    // Bucket colour preview
    this.bucketColourEl = document.createElement('div');
    this.bucketColourEl.style.cssText = `
      width:clamp(36px,7vw,46px);height:clamp(36px,7vw,46px);
      border-radius:50%;border:2px solid rgba(200,168,106,0.4);
      background:${this.currentMix};flex-shrink:0;align-self:flex-end;
      transition:background 0.3s;
    `;
    controls.appendChild(this.bucketColourEl);

    // Undo button
    this.undoBtnEl = document.createElement('button');
    this.undoBtnEl.textContent = '⌫';
    this.undoBtnEl.style.cssText = `
      background:rgba(255,255,255,0.07);border:1.5px solid rgba(255,255,255,0.12);
      color:rgba(255,255,255,0.5);font-size:16px;
      width:clamp(40px,8vw,50px);height:clamp(40px,8vw,50px);
      border-radius:10px;cursor:pointer;flex-shrink:0;touch-action:manipulation;
      align-self:flex-end;
    `;
    this.undoBtnEl.addEventListener('click', () => this._undoShot());
    controls.appendChild(this.undoBtnEl);

    // Mix button
    this.mixBtnEl = document.createElement('button');
    this.mixBtnEl.textContent = '🔩 MIX';
    this.mixBtnEl.style.cssText = `
      background:linear-gradient(135deg,#8B4A00,#5A3000);color:#FFD080;
      border:none;border-radius:12px;
      height:clamp(44px,9vw,56px);padding:0 clamp(12px,3vw,20px);
      font-size:clamp(12px,2vw,14px);font-weight:900;cursor:pointer;
      flex-shrink:0;touch-action:manipulation;align-self:flex-end;
    `;
    this.mixBtnEl.addEventListener('click', () => this._triggerMix());
    controls.appendChild(this.mixBtnEl);

    this.overlay.appendChild(controls);

    // Initialise pig selection
    this._selectPig('B');
  }

  // ─────────────────────────────────────────────────────────────────────────
  // INPUT
  // ─────────────────────────────────────────────────────────────────────────

  private _setupInput(): void {
    const onTap = (cx: number, cy: number) => {
      if (this.phase !== 'playing') return;
      if (this.shotCooldown > 0) return;
      if (this.mixState === 'mixing' || this.solved) return;
      // Only fire if tapping in the scene area (above controls)
      const H = this.canvas.height;
      const ctrlH = Math.min(80, H * 0.13);
      if (cy > H - ctrlH - 2) return;
      this._fireAt(cx, cy);
    };

    const toCanvas = (e: MouseEvent | Touch): [number,number] => {
      const rect = this.canvas.getBoundingClientRect();
      const sx = this.canvas.width  / rect.width;
      const sy = this.canvas.height / rect.height;
      const x  = ('clientX' in e ? e.clientX : (e as Touch).clientX) - rect.left;
      const y  = ('clientY' in e ? e.clientY : (e as Touch).clientY) - rect.top;
      return [x * sx, y * sy];
    };

    this.canvas.addEventListener('click', e => {
      const [x,y] = toCanvas(e); onTap(x, y);
    });
    this.canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      const [x,y] = toCanvas(e.changedTouches[0]); onTap(x, y);
    }, {passive:false});
  }

  // ─────────────────────────────────────────────────────────────────────────
  // PIGMENT SELECTION
  // ─────────────────────────────────────────────────────────────────────────

  private _selectPig(key: PKey): void {
    this.selPig = key;
    for (const p of PIGS) {
      const k = p.key as PKey;
      const btn = this.pigBtnEls[k];
      if (!btn) continue;
      if (k === key) {
        btn.style.borderColor = PIGS.find(q=>q.key===k)!.dot;
        btn.style.boxShadow = `0 0 10px ${PIGS.find(q=>q.key===k)!.dot}88`;
        btn.style.transform = 'scale(1.10)';
      } else {
        btn.style.borderColor = 'rgba(255,255,255,0.12)';
        btn.style.boxShadow = 'none';
        btn.style.transform = 'scale(1)';
      }
    }
  }

  private _undoShot(): void {
    if (this.mixState === 'mixing' || this.solved) return;
    const k = this.selPig;
    if (this.shots[k] > 0) {
      this.shots[k]--;
      this._refreshCounts();
      this.currentMix = computeMix(this.shots);
    }
  }

  private _refreshCounts(): void {
    for (const p of PIGS) {
      const k = p.key as PKey;
      const el = this.shotCountEls[k];
      if (el) el.textContent = String(this.shots[k]);
    }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // FIRING
  // ─────────────────────────────────────────────────────────────────────────

  private _fireAt(tapX: number, tapY: number): void {
    const W = this.canvas.width, H = this.canvas.height;
    // Jose hand position (behind-the-shoulder, slightly right)
    const joseX = W / 2 + 22;
    const joseY = H * 0.70;

    // Get current bucket position on screen
    const { bkX, bkY, bkScale } = this._bucketScreenPos();
    const hitRadius = 32 * bkScale;

    // Check if tap is near bucket (generous hit zone)
    const dx = tapX - bkX;
    const dy = tapY - bkY;
    const dist = Math.sqrt(dx*dx + dy*dy);

    const isHit = dist < hitRadius * 2.5; // generous — 3D targeting is hard

    this.globs.push({
      sx: joseX, sy: joseY,
      tx: isHit ? bkX : tapX,
      ty: isHit ? bkY : tapY,
      progress: 0,
      pigKey: this.selPig,
      hit: false, miss: false,
    });

    this.shotCooldown = SHOT_CD;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // 3D PERSPECTIVE HELPERS
  // ─────────────────────────────────────────────────────────────────────────

  /** Connie + bucket screen position based on normalised 3D coords */
  private _connieScreenPos(): { cx: number; cy: number; sc: number } {
    const W = this.canvas.width, H = this.canvas.height;
    const horizonY   = H * 0.28;
    const floorBot   = H * 0.68;   // top of Jose's feet area

    // Z: -0.8 (far/horizon) → +0.8 (near camera/big)
    const zn = (this.connZ + 0.8) / 1.6;   // 0=far, 1=near
    const cy = lerp(horizonY + H * 0.04, floorBot - H * 0.04, zn);
    const sc = lerp(0.30, 0.82, zn);

    // X spreads proportionally with depth
    const xSpread = W * 0.30 * zn + W * 0.06;
    const cx = W / 2 + this.connX * xSpread;

    return { cx, cy, sc };
  }

  private _bucketScreenPos(): { bkX: number; bkY: number; bkScale: number } {
    const { cx, cy, sc } = this._connieScreenPos();
    // Bucket is held slightly to Connie's left (carry arm side)
    return { bkX: cx - 22 * sc, bkY: cy + 14 * sc, bkScale: sc };
  }

  // ─────────────────────────────────────────────────────────────────────────
  // GAME LOOP
  // ─────────────────────────────────────────────────────────────────────────

  private _loop(ts: number): void {
    this.rafId = requestAnimationFrame(t => this._loop(t));
    const dt = Math.min((ts - this.lastTs) / 1000, 0.05);
    this.lastTs = ts;
    try { this._update(dt); this._draw(); }
    catch(e){ console.warn('[WorkshopShootout] frame err', e); }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // UPDATE
  // ─────────────────────────────────────────────────────────────────────────

  private _update(dt: number): void {
    if (this.phase !== 'playing') {
      this.endTimer += dt;
      if (this.endTimer >= 2.2) this._finish();
      return;
    }

    this.elapsed      += dt;
    this.shotCooldown  = Math.max(0, this.shotCooldown - dt);
    this.connHitT      = Math.max(0, this.connHitT - dt);
    this.bkFlashT      = Math.max(0, this.bkFlashT  - dt);
    this.cheerT        += dt;

    // Mix animation tick
    if (this.mixState === 'mixing') {
      this.mixT += dt;
      if (this.mixT > 2.0) this._onMixDone();
    }

    // Lerp display mix colour
    const [mr,mg,mb] = hexRgb(this.currentMix);
    const [dr,dg,db] = hexRgb(this.displayMix);
    const spd = this.mixState === 'mixing' ? 5 : 1.5;
    this.displayMix = rgbHex(dr+(mr-dr)*spd*dt, dg+(mg-dg)*spd*dt, db+(mb-db)*spd*dt);
    this.bucketColourEl.style.background = this.displayMix;

    // ── Connie movement ────────────────────────────────────────────────────
    if (!this.solved) {
      const baseSpeed = this.connSpeed * (this.bionichipActive ? 2.8 : 1.0);

      if (this.connPauseT > 0) {
        this.connPauseT -= dt;
      } else {
        this.connX += this.connDirX * baseSpeed * dt;
        this.connZ += this.connDirZ * (baseSpeed * 0.25) * dt;

        if (this.connX > 0.80) { this.connX = 0.80; this.connDirX = -1; this.connPauseT = 0.2 + Math.random() * 0.5; }
        if (this.connX < -0.80) { this.connX = -0.80; this.connDirX = 1; this.connPauseT = 0.2 + Math.random() * 0.5; }
        if (this.connZ > 0.75) { this.connZ = 0.75; this.connDirZ = -1; }
        if (this.connZ < -0.70) { this.connZ = -0.70; this.connDirZ = 1; }

        // Random speed variation
        if (!this.bionichipActive && Math.random() < dt * 0.25) {
          this.connSpeed = 0.25 + this.target.difficulty * 0.08 + Math.random() * 0.12;
        }
      }

      // Bionic hip burst
      this.bionichipTimer -= dt;
      if (this.bionichipTimer <= 0 && !this.bionichipActive) {
        this.bionichipActive = true;
        this.bionichipT = 2.2;
      }
      if (this.bionichipActive) {
        this.bionichipT -= dt;
        if (this.bionichipT <= 0) {
          this.bionichipActive = false;
          this.bionichipTimer = 8 + Math.random() * 7;
        }
      }
    }

    // ── Update globs ───────────────────────────────────────────────────────
    const { bkX, bkY, bkScale } = this._bucketScreenPos();
    const { cx: ccx, cy: ccy }  = this._connieScreenPos();

    for (const g of this.globs) {
      if (g.hit || g.miss) continue;
      g.progress += GLOB_SPEED * dt;
      if (g.progress >= 1) {
        // Check: did we target the bucket area?
        const landX = g.tx, landY = g.ty;
        const dBkt = Math.hypot(landX - bkX, landY - bkY);
        if (dBkt < 40 * bkScale) {
          g.hit = true;
          this._onBucketHit(g.pigKey, g.tx, g.ty);
        } else {
          // Check if hit Connie body (miss on bucket)
          const dConn = Math.hypot(landX - ccx, landY - ccy);
          if (dConn < 30 * bkScale) {
            g.miss = true;
            this.connHitT = 1.5;
            this._addSplats(g.tx, g.ty, PIGS.find(p=>p.key===g.pigKey)!.dot, 14);
            this._setHint("JOSE!! WATCH IT!! 😤", '#FF6644', 2000);
          } else {
            g.miss = true;
            // Floor splat
            this._addSplats(g.tx, g.ty, PIGS.find(p=>p.key===g.pigKey)!.dot, 6);
          }
        }
      }
    }
    this.globs = this.globs.filter(g => !g.hit && !g.miss);

    // Splats decay
    for (let i = this.splats.length - 1; i >= 0; i--) {
      this.splats[i].t += dt;
      if (this.splats[i].t > this.splats[i].maxT) this.splats.splice(i, 1);
    }
  }

  private _onBucketHit(key: PKey, hx: number, hy: number): void {
    const p = PIGS.find(q => q.key === key)!;
    if (this.shots[key] < p.max) {
      this.shots[key]++;
      this._refreshCounts();
      this.currentMix = computeMix(this.shots);
      this.bkFlashT   = 0.5;
    }
    this._addSplats(hx, hy, p.dot, 16);
    // Update match bar live
    const pct = matchPct(this.currentMix, this.target.hex);
    this.mixPct = pct;
    this.matchBarEl.style.width = `${pct}%`;
    this.matchBarEl.style.background = pct >= 82
      ? 'linear-gradient(90deg,#44DD88,#88FFCC)'
      : pct >= 55
        ? 'linear-gradient(90deg,#C8A86A,#FFD080)'
        : 'linear-gradient(90deg,#882222,#CC4433)';
    this.matchPctEl.textContent = `${pct}%`;
    this.matchPctEl.style.color = pct >= 82 ? '#44DD88' : pct >= 55 ? '#C8A86A' : '#FF6644';
  }

  private _addSplats(x: number, y: number, color: string, count: number): void {
    for (let i = 0; i < count; i++) {
      this.splats.push({
        x: x + (Math.random() - 0.5) * 30,
        y: y + (Math.random() - 0.5) * 20,
        color, t: 0, maxT: 0.6 + Math.random() * 0.4,
      });
    }
  }

  private _setHint(msg: string, color: string, clearMs: number): void {
    this.hintEl.textContent = msg;
    this.hintEl.style.color = color;
    setTimeout(() => {
      if (this.hintEl.textContent === msg) {
        this.hintEl.textContent = this.target.hint;
        this.hintEl.style.color = 'rgba(200,168,106,0.8)';
      }
    }, clearMs);
  }

  // ─────────────────────────────────────────────────────────────────────────
  // MIX
  // ─────────────────────────────────────────────────────────────────────────

  private _triggerMix(): void {
    if (this.mixState === 'mixing' || this.solved) return;
    const total = Object.values(this.shots).reduce((a,b)=>a+b, 0);
    if (total === 0) {
      this._setHint('Get some shots in the bucket first!', '#FF9944', 2000);
      return;
    }
    this.mixState = 'mixing'; this.mixT = 0;
    this.mixBtnEl.textContent = '⚙️ mixing…';
    this.mixBtnEl.style.background = 'linear-gradient(135deg,#226622,#144414)';
    this.mixBtnEl.style.color = '#88FFcc';
  }

  private _onMixDone(): void {
    const pct = matchPct(computeMix(this.shots), this.target.hex);
    this.matchBarEl.style.width = `${pct}%`;
    this.matchPctEl.textContent = `${pct}%`;
    this.matchPctEl.style.color = pct >= 82 ? '#44DD88' : pct >= 55 ? '#C8A86A' : '#FF6644';
    this.matchBarEl.style.background = pct >= 82
      ? 'linear-gradient(90deg,#44DD88,#88FFCC)'
      : pct >= 55
        ? 'linear-gradient(90deg,#C8A86A,#FFD080)'
        : 'linear-gradient(90deg,#882222,#CC4433)';

    if (pct >= 82) {
      this._triggerSuccess(pct);
    } else {
      this.mixState = 'idle';
      this._setHint(
        pct >= 65 ? 'Getting close — adjust the mix' : 'Way off — try again',
        '#FF9944', 3000
      );
      this.mixBtnEl.textContent = '🔩 MIX';
      this.mixBtnEl.style.background = 'linear-gradient(135deg,#8B4A00,#5A3000)';
      this.mixBtnEl.style.color = '#FFD080';
    }
  }

  private _triggerSuccess(pct: number): void {
    if (this.solved) return;
    this.solved = true;
    this._stopTimer();
    markSolved(this.target.name);
    this.mixState = 'success';
    this.mixBtnEl.textContent = '🏆 MATCHED!';
    this.mixBtnEl.style.background = 'linear-gradient(135deg,#2a8a44,#1a6030)';
    this.mixBtnEl.style.color = '#88FFcc';
    this._setHint(`✓ ${this.target.name} — ${pct}% match!`, '#44DD88', 99999);
    this.phase = 'win';
    this.endTimer = 0;
  }

  // ─────────────────────────────────────────────────────────────────────────
  // TIMER
  // ─────────────────────────────────────────────────────────────────────────

  private _startTimer(): void {
    this.timerInt = setInterval(() => {
      if (this.solved || this.phase !== 'playing') return;
      this.timeLeft--;
      const m = Math.floor(this.timeLeft / 60);
      const s = this.timeLeft % 60;
      this.timerEl.textContent = m > 0 ? `${m}:${s.toString().padStart(2,'0')}` : `${this.timeLeft}s`;
      if (this.timeLeft <= 20) this.timerEl.style.color = '#FF6644';
      if (this.timeLeft <= 10) this.timerEl.style.color = '#FF3333';
      if (this.timeLeft <= 0) {
        this._stopTimer();
        this.phase = 'lose';
        this.endTimer = 0;
      }
    }, 1000);
  }

  private _stopTimer(): void {
    if (this.timerInt) { clearInterval(this.timerInt); this.timerInt = null; }
  }

  // ─────────────────────────────────────────────────────────────────────────
  // END
  // ─────────────────────────────────────────────────────────────────────────

  private _finish(): void {
    const won = this.phase === 'win';
    this._end(won);
  }

  private _end(won: boolean): void {
    this._stopTimer();
    cancelAnimationFrame(this.rafId);
    const result: ShootoutResult = {
      won,
      colour: won ? this.target.name : undefined,
    };
    try { this._cleanup(); } catch { /* best effort */ }
    try { this.onDoneFn(result); } catch { /* best effort */ }
  }

  private _cleanup(): void {
    this._stopTimer();
    cancelAnimationFrame(this.rafId);
    this.overlay.remove();
  }

  // ─────────────────────────────────────────────────────────────────────────
  // DRAW
  // ─────────────────────────────────────────────────────────────────────────

  private _draw(): void {
    const ctx = this.ctx;
    const W = this.canvas.width, H = this.canvas.height;
    ctx.clearRect(0, 0, W, H);

    this._drawBackground(W, H);
    this._drawFloor(W, H);
    this._drawWall(W, H);
    this._drawPlayerSideline(W, H);
    this._drawSplatsOnFloor(W, H);
    this._drawBucketAndConnie(W, H);
    this._drawGlobs(W, H);
    this._drawJose(W, H);

    if (this.phase !== 'playing') this._drawEndOverlay(W, H);
  }

  // ── Background ─────────────────────────────────────────────────────────────
  private _drawBackground(W: number, H: number): void {
    const ctx = this.ctx;
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#0C0B09');
    g.addColorStop(0.55, '#181410');
    g.addColorStop(1, '#0A0907');
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

    // Warm side lighting
    const rimL = ctx.createRadialGradient(W * 0.1, H * 0.85, 0, W * 0.1, H * 0.85, W * 0.6);
    rimL.addColorStop(0, 'rgba(255,150,30,0.10)'); rimL.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rimL; ctx.fillRect(0, 0, W, H);

    const rimR = ctx.createRadialGradient(W * 0.9, H * 0.85, 0, W * 0.9, H * 0.85, W * 0.5);
    rimR.addColorStop(0, 'rgba(255,130,20,0.08)'); rimR.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = rimR; ctx.fillRect(0, 0, W, H);
  }

  // ── Perspective floor ───────────────────────────────────────────────────────
  private _drawFloor(W: number, H: number): void {
    const ctx  = this.ctx;
    const horizY = H * 0.28;
    const botY   = H * 0.92;
    const vpX    = W / 2;

    // Floor surface (concrete tan)
    ctx.fillStyle = '#6A6055';
    ctx.beginPath();
    ctx.moveTo(0, horizY); ctx.lineTo(W, horizY);
    ctx.lineTo(W, botY); ctx.lineTo(0, botY);
    ctx.closePath(); ctx.fill();

    // Grid lines — radial from VP
    ctx.strokeStyle = 'rgba(90,82,72,0.55)';
    ctx.lineWidth   = 1;
    const nRad = 20;
    for (let i = 0; i <= nRad; i++) {
      const bx = (i / nRad) * W;
      ctx.beginPath(); ctx.moveTo(vpX, horizY); ctx.lineTo(bx, botY); ctx.stroke();
    }
    // Horizontal
    ctx.strokeStyle = 'rgba(90,82,72,0.38)';
    const nH = 10;
    for (let i = 1; i <= nH; i++) {
      const t = i / nH;
      const y = lerp(horizY, botY, t * t);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    // Edge vignettes
    const vL = ctx.createLinearGradient(0, 0, W * 0.1, 0);
    vL.addColorStop(0, 'rgba(0,0,0,0.5)'); vL.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = vL; ctx.fillRect(0, horizY, W, botY - horizY);

    const vR = ctx.createLinearGradient(W, 0, W * 0.9, 0);
    vR.addColorStop(0, 'rgba(0,0,0,0.5)'); vR.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = vR; ctx.fillRect(0, horizY, W, botY - horizY);
  }

  // ── Back wall ───────────────────────────────────────────────────────────────
  private _drawWall(W: number, H: number): void {
    const ctx = this.ctx;
    const wallH = H * 0.30;

    ctx.fillStyle = '#1A1916';
    ctx.fillRect(0, 0, W, wallH);

    // Horizon divider
    ctx.fillStyle = '#252320';
    ctx.fillRect(0, wallH - 5, W, 10);

    // Ambient window glow (right side)
    const winX = W * 0.70, winY = H * 0.04, winW = W * 0.14, winH = wallH * 0.60;
    const wg = ctx.createLinearGradient(winX, winY, winX, winY + winH);
    wg.addColorStop(0, 'rgba(255,200,100,0.14)'); wg.addColorStop(1, 'rgba(255,150,50,0.04)');
    ctx.fillStyle = '#111009'; ctx.fillRect(winX, winY, winW, winH);
    ctx.fillStyle = wg; ctx.fillRect(winX, winY, winW, winH);
    ctx.strokeStyle = '#161411'; ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(winX + winW/2, winY); ctx.lineTo(winX + winW/2, winY + winH);
    ctx.moveTo(winX, winY + winH*0.4); ctx.lineTo(winX + winW, winY + winH*0.4);
    ctx.stroke();

    // Shelves
    const shelfY = [wallH * 0.18, wallH * 0.55];
    shelfY.forEach((sy, idx) => {
      const sx = W * (0.07 + idx * 0.25), sw = W * 0.18;
      ctx.fillStyle = '#2C2A24'; ctx.fillRect(sx, sy, sw, 5);
      for (let b = 0; b < 3; b++) {
        const bx = sx + sw * (0.12 + b * 0.33);
        ctx.fillStyle = '#222018';
        ctx.fillRect(bx - 5, sy - 16, 10, 16);
      }
    });

    // TEM logo hint
    ctx.save();
    ctx.font = `900 ${Math.round(H * 0.044)}px system-ui,sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,180,50,0.16)';
    ctx.fillText('TEM', W / 2, wallH * 0.55);
    ctx.restore();
  }

  // ── Player character (right sideline) ──────────────────────────────────────
  private _drawPlayerSideline(W: number, H: number): void {
    const ctx   = this.ctx;
    const px    = W * 0.84;
    const py    = H * 0.60;
    const bounce = Math.sin(this.cheerT * 3.5) * 7;
    const isCelebrating = this.bkFlashT > 0;
    const yo = isCelebrating ? bounce * 1.8 : bounce;

    const skin = this.playerChar?.skinTone  ?? '#C07050';
    const hair = this.playerChar?.hairColor ?? '#2E1808';
    const hs   = this.playerChar?.headStyle ?? 0;

    ctx.save();
    ctx.translate(px, py + yo);
    ctx.scale(-1, 1); // facing left (inward)

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.beginPath(); ctx.ellipse(0, 26, 13, 4, 0, 0, Math.PI*2); ctx.fill();

    // Legs
    ctx.fillStyle = '#3A5A8A';
    ctx.fillRect(-7, 0, 6, 24); ctx.fillRect(1, 0, 6, 24);
    ctx.fillStyle = '#222';
    ctx.fillRect(-8, 20, 8, 6); ctx.fillRect(1, 20, 8, 6);

    // Body
    ctx.fillStyle = isCelebrating ? '#F0B030' : '#D4A030';
    rr(ctx, -9, -22, 18, 26, 4); ctx.fill();

    // Arms raised
    const aa = isCelebrating
      ? -Math.PI * 0.80 + Math.sin(this.cheerT * 9) * 0.18
      : -Math.PI * 0.58 + Math.sin(this.cheerT * 2.5) * 0.12;
    [[-11, aa - 0.1], [11, -aa + 0.1]].forEach(([tx, rot]) => {
      ctx.save(); ctx.translate(tx as number, -16);
      ctx.rotate(rot as number);
      ctx.fillStyle = '#D4A030'; ctx.fillRect(-3, -22, 7, 22);
      ctx.fillStyle = skin; ctx.fillRect(-3, -26, 7, 7);
      ctx.restore();
    });

    // Head
    ctx.fillStyle = skin; rr(ctx, -8, -36, 16, 16, 6); ctx.fill();

    // Head style (simplified mini version)
    const hcx = 0, hcy = -28, hr = 8;
    if (hs === 5) { // Afro
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2;
        ctx.fillStyle = hair;
        ctx.beginPath();
        ctx.arc(hcx + Math.cos(a) * hr * 1.4, hcy + Math.sin(a) * hr * 1.1, 3.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = hair;
      ctx.beginPath();
      ctx.ellipse(hcx, hcy, hr * 1.1, hr * 1.0, 0, 0, Math.PI * 2);
      ctx.fill();
    } else if (hs === 3) { // Hard Hat
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.ellipse(hcx, hcy - 4, hr * 1.2, hr * 1.1, 0, Math.PI, 0);
      ctx.fill();
      ctx.fillStyle = '#E8C000';
      ctx.fillRect(hcx - hr * 1.4, hcy - 1, hr * 2.8, 3);
    } else if (hs === 6) { // Long hair
      ctx.fillStyle = hair;
      ctx.beginPath();
      ctx.arc(hcx, hcy - 3, hr * 1.05, Math.PI, 0);
      ctx.fill();
      ctx.fillRect(hcx - hr * 1.1, hcy - 3, 4, 18);
      ctx.fillRect(hcx + hr * 0.8, hcy - 3, 4, 18);
    } else if (hs === 8) { // Bald — shine only
      ctx.fillStyle = 'rgba(255,255,255,0.18)';
      ctx.beginPath();
      ctx.ellipse(hcx - 2, hcy - 4, 3, 2, -0.3, 0, Math.PI * 2);
      ctx.fill();
    } else { // All other styles — simple cap/hair block on top
      ctx.fillStyle = hair;
      ctx.beginPath();
      ctx.roundRect(hcx - hr * 1.05, hcy - hr * 1.4, hr * 2.1, hr * 1.1, 4);
      ctx.fill();
    }

    // Eye
    ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.ellipse(3, -30, 2, 2, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#111'; ctx.beginPath(); ctx.ellipse(3, -30, 1, 1, 0, 0, Math.PI*2); ctx.fill();

    ctx.restore();

    // Name
    ctx.save();
    ctx.font = `bold ${Math.max(12, Math.round(H * 0.020))}px system-ui,sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
    ctx.fillStyle = '#FFD060';
    ctx.fillText(this.playerName, px, py + yo - 44);

    // Cheer text
    const cheerIdx = Math.floor((this.cheerT / 2) % CHEER_LINES.length);
    const cheerLine = isCelebrating ? '🎉 NICE SHOT!' : CHEER_LINES[cheerIdx];
    ctx.font = `${Math.max(11, Math.round(H * 0.018))}px system-ui,sans-serif`;
    ctx.fillStyle = isCelebrating ? '#FFE840' : 'rgba(255,255,255,0.75)';
    ctx.fillText(cheerLine, px, py + yo - 57);
    ctx.restore();
  }

  // ── Splats on floor ─────────────────────────────────────────────────────────
  private _drawSplatsOnFloor(_W: number, _H: number): void {
    const ctx = this.ctx;
    for (const s of this.splats) {
      const alpha = Math.max(0, (1 - s.t / s.maxT) * 0.75);
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, 4 + s.t * 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ── Connie + bucket ─────────────────────────────────────────────────────────
  private _drawBucketAndConnie(W: number, H: number): void {
    const ctx = this.ctx;
    const { cx, cy, sc } = this._connieScreenPos();
    const { bkX, bkY }   = this._bucketScreenPos();
    const hit = this.connHitT > 0;
    void W; void H;

    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(sc, sc);

    // Stagger on hit
    const stag = hit ? Math.sin(this.connHitT * 30) * 6 : 0;
    ctx.translate(stag, 0);

    // ── Legs
    ctx.fillStyle = '#111'; ctx.fillRect(-10, 18, 8, 28); ctx.fillRect(2, 18, 8, 28);
    ctx.fillStyle = '#0D0D0D'; ctx.fillRect(-11, 42, 10, 8); ctx.fillRect(2, 42, 10, 8);

    // ── Body
    ctx.fillStyle = '#1C1C1C'; rr(ctx, -13, -2, 26, 22, 4); ctx.fill();

    // ── Carry arm (bucket side — left relative to Connie facing us)
    const bkRelX = bkX - cx; const bkRelY = bkY - cy;
    const armAng = Math.atan2(bkRelY, bkRelX);
    ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 8; ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(-11, 4);
    ctx.quadraticCurveTo(-20, 16, bkRelX / sc + 12, bkRelY / sc - 6);
    ctx.stroke();
    ctx.fillStyle = '#C07050'; ctx.beginPath();
    ctx.arc(bkRelX / sc + 10, bkRelY / sc - 8, 5, 0, Math.PI * 2); ctx.fill();
    void armAng;

    // ── Right arm relaxed
    ctx.strokeStyle = '#1A1A1A'; ctx.lineWidth = 8;
    ctx.beginPath(); ctx.moveTo(11, 4); ctx.lineTo(18, 20); ctx.stroke();
    ctx.fillStyle = '#C07050'; ctx.beginPath(); ctx.arc(18, 21, 5, 0, Math.PI * 2); ctx.fill();
    ctx.lineCap = 'butt';

    // ── Neck
    ctx.fillStyle = '#C07050'; ctx.fillRect(-5, -10, 10, 12);

    // ── Head
    ctx.fillStyle = '#C8805C'; rr(ctx, -13, -30, 26, 22, 8); ctx.fill();

    // ── Blonde hair
    ctx.fillStyle = '#E8C840'; rr(ctx, -14, -33, 28, 14, 7); ctx.fill();
    const hDir = this.connDirX > 0 ? 1 : -1;
    // Flowing side locks
    ctx.fillStyle = '#D8B830';
    ctx.fillRect(-15, -27, 5, 18 + hDir * 2);
    ctx.fillRect(10, -27, 5, 14 - hDir * 2);
    ctx.fillStyle = 'rgba(255,240,100,0.3)'; rr(ctx, -7, -34, 14, 6, 3); ctx.fill();

    // ── Eyes
    [['-5', '-20'], ['5', '-20']].forEach(([ex, ey]) => {
      ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.ellipse(+ex, +ey, 2.5, 2.5, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#111'; ctx.beginPath(); ctx.ellipse(+ex, +ey, 1.2, 1.2, 0, 0, Math.PI * 2); ctx.fill();
    });
    // ── Smirk
    ctx.strokeStyle = '#803030'; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(-4, -11); ctx.quadraticCurveTo(0, -8, 5, -11); ctx.stroke();

    // ── Bionic hip glow
    if (this.bionichipActive) {
      const t = performance.now() / 120;
      const g = ctx.createRadialGradient(0, 12, 2, 0, 12, 22);
      g.addColorStop(0, `rgba(160,80,255,${0.4 + Math.sin(t)*0.2})`);
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g; ctx.beginPath(); ctx.ellipse(0, 12, 22, 14, 0, 0, Math.PI * 2); ctx.fill();

      ctx.save();
      ctx.strokeStyle = `rgba(200,140,255,0.7)`; ctx.lineWidth = 1.5; ctx.lineCap = 'round';
      for (let s = 0; s < 4; s++) {
        const a = t + s * Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a + 0.3) * 7, 12 + Math.sin(a + 0.3) * 5);
        ctx.lineTo(Math.cos(a) * 16, 12 + Math.sin(a) * 10);
        ctx.stroke();
      }
      ctx.restore();
    }

    // ── Hit flash
    if (hit) {
      ctx.save(); ctx.globalAlpha = Math.min(0.65, this.connHitT * 0.5);
      ctx.fillStyle = '#FF3030'; rr(ctx, -15, -35, 30, 88, 8); ctx.fill();
      ctx.restore();
      ctx.save(); ctx.font = `bold 10px system-ui`; ctx.fillStyle = '#FF5522';
      ctx.textAlign = 'center'; ctx.fillText('JOSE!! 😤', 0, -42); ctx.restore();
    }

    // ── Bionic label
    if (this.bionichipActive) {
      ctx.save(); ctx.globalAlpha = 0.9;
      ctx.font = `bold 9px system-ui`; ctx.fillStyle = '#CC88FF';
      ctx.textAlign = 'center'; ctx.fillText('⚡ BIONIC!', 0, -40);
      ctx.restore();
    }

    // ── CONNIE label
    ctx.font = `bold 8px system-ui`; ctx.fillStyle = 'rgba(255,200,80,0.55)';
    ctx.textAlign = 'center'; ctx.fillText('CONNIE', 0, 58);

    ctx.restore();

    // ── Draw bucket (separate from Connie transform, at bkX/bkY) ────────────
    this._drawBucket(bkX, bkY, sc);
  }

  private _drawBucket(bkX: number, bkY: number, sc: number): void {
    const ctx = this.ctx;
    const topW = 44 * sc, botW = 30 * sc, bkH = 40 * sc;
    const flash = this.bkFlashT > 0;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(bkX - topW/2, bkY - bkH);
    ctx.lineTo(bkX + topW/2, bkY - bkH);
    ctx.lineTo(bkX + botW/2, bkY);
    ctx.lineTo(bkX - botW/2, bkY);
    ctx.closePath();
    ctx.clip();

    // Bucket body
    ctx.fillStyle = '#E8E0D4'; ctx.fill();

    // Fill level based on shots
    const total = Object.values(this.shots).reduce((a,b)=>a+b, 0);
    const frac  = Math.min(1, total / 22);
    if (frac > 0) {
      const fillTop = bkY - bkH * frac;
      const wAtFill = botW + (topW - botW) * frac;
      ctx.beginPath();
      ctx.moveTo(bkX - wAtFill/2, fillTop); ctx.lineTo(bkX + wAtFill/2, fillTop);
      ctx.lineTo(bkX + botW/2, bkY); ctx.lineTo(bkX - botW/2, bkY); ctx.closePath();
      ctx.fillStyle = this.displayMix; ctx.fill();

      // Liquid shimmer
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1.5;
      const rt = performance.now() / 1000;
      ctx.beginPath();
      ctx.moveTo(bkX - wAtFill/2 + 3, fillTop + 2);
      ctx.bezierCurveTo(
        bkX - wAtFill/4, fillTop - 2 + Math.sin(rt * 2) * 1.5,
        bkX + wAtFill/4, fillTop + 3 + Math.sin(rt * 2 + 1) * 1.5,
        bkX + wAtFill/2 - 3, fillTop + 2
      );
      ctx.stroke();
    }

    // Mixing swirl
    if (this.mixState === 'mixing') {
      for (let i = 0; i < 4; i++) {
        const a = this.mixT * 8 + i * (Math.PI * 2 / 4);
        const sr = 10 + Math.sin(this.mixT * 4 + i) * 4;
        ctx.beginPath();
        ctx.arc(bkX + Math.cos(a)*sr, bkY - bkH*0.45 + Math.sin(a)*sr*0.35, 3, 0, Math.PI*2);
        ctx.fillStyle = `rgba(255,255,255,${0.12 + Math.sin(a) * 0.06})`; ctx.fill();
      }
    }

    ctx.restore();

    // Bucket outline + rim
    const bdrCol = flash ? 'rgba(255,220,60,0.9)' : 'rgba(180,160,120,0.65)';
    ctx.beginPath();
    ctx.moveTo(bkX - topW/2, bkY - bkH); ctx.lineTo(bkX + topW/2, bkY - bkH);
    ctx.lineTo(bkX + botW/2, bkY); ctx.lineTo(bkX - botW/2, bkY); ctx.closePath();
    ctx.strokeStyle = bdrCol; ctx.lineWidth = 2; ctx.stroke();

    ctx.beginPath(); ctx.ellipse(bkX, bkY - bkH, topW/2, 5 * sc, 0, 0, Math.PI*2);
    ctx.strokeStyle = 'rgba(180,160,120,0.55)'; ctx.stroke();
    ctx.fillStyle = 'rgba(200,180,140,0.1)'; ctx.fill();

    // Handle
    ctx.beginPath(); ctx.arc(bkX, bkY - bkH - 3*sc, topW/2 - 6*sc, Math.PI, 0);
    ctx.strokeStyle = '#8A7050'; ctx.lineWidth = 2.5; ctx.stroke();

    // TEM label on bucket
    ctx.font = `bold ${Math.round(8 * sc)}px system-ui`; ctx.fillStyle = 'rgba(180,148,80,0.5)';
    ctx.textAlign = 'center'; ctx.fillText('TEM', bkX, bkY - bkH * 0.4);
    ctx.textAlign = 'left';
  }

  // ── Globs in flight ──────────────────────────────────────────────────────────
  private _drawGlobs(W: number, H: number): void {
    const ctx = this.ctx;
    void W; void H;
    for (const g of this.globs) {
      const p  = g.progress;
      const x  = lerp(g.sx, g.tx, p);
      const arc = Math.sin(p * Math.PI) * 55;
      const y  = lerp(g.sy, g.ty, p) - arc;
      const r  = lerp(7, 14, p * 0.6 + 0.4);
      const pc = PIGS.find(q => q.key === g.pigKey)!;

      // Shadow trace on floor
      ctx.fillStyle = 'rgba(0,0,0,0.18)';
      ctx.beginPath();
      ctx.ellipse(x, lerp(g.sy * 0.8, g.ty, p), r * 0.6, r * 0.22, 0, 0, Math.PI * 2);
      ctx.fill();

      // Glow
      ctx.save(); ctx.shadowColor = pc.dot; ctx.shadowBlur = 10;
      const gg = ctx.createRadialGradient(x - r*0.25, y - r*0.25, 0, x, y, r);
      gg.addColorStop(0, '#FFFFFF'); gg.addColorStop(0.3, pc.dot); gg.addColorStop(1, pc.color);
      ctx.fillStyle = gg;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.shadowBlur = 0; ctx.restore();

      // Pigment key label on blob
      ctx.save();
      ctx.font = `bold ${Math.round(r * 0.9)}px system-ui`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = 'rgba(255,255,255,0.85)';
      ctx.fillText(g.pigKey, x, y);
      ctx.restore();
    }
  }

  // ── Jose (behind-the-shoulder) ───────────────────────────────────────────────
  private _drawJose(W: number, H: number): void {
    const ctx  = this.ctx;
    const jx   = W / 2;
    const jy   = H * 0.72;
    const isThrow = this.globs.length > 0;
    const throwAng = isThrow ? -0.55 : 0;

    ctx.save(); ctx.translate(jx, jy);

    // Shadow
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.beginPath(); ctx.ellipse(0, 14, 28, 9, 0, 0, Math.PI * 2); ctx.fill();

    // Legs
    ctx.fillStyle = '#0E0E0E';
    ctx.fillRect(-14, 0, 11, 46); ctx.fillRect(3, 0, 11, 46);
    ctx.fillStyle = '#080808';
    ctx.fillRect(-15, 40, 13, 9); ctx.fillRect(3, 40, 13, 9);

    // Body (TEM shirt)
    ctx.fillStyle = '#181410';
    rr(ctx, -20, -46, 40, 48, 6); ctx.fill();
    ctx.font = `bold ${Math.round(H * 0.018)}px system-ui`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(255,175,50,0.18)'; ctx.fillText('TEM', 0, -22);

    // Throwing arm (right)
    ctx.fillStyle = '#181410'; ctx.save();
    ctx.translate(21, -34); ctx.rotate(throwAng);
    ctx.fillRect(-5, 0, 11, 36);
    ctx.fillStyle = '#B07055'; ctx.fillRect(-4, 32, 9, 9);
    ctx.restore();

    // Other arm
    ctx.fillStyle = '#181410'; ctx.save();
    ctx.translate(-21, -34); ctx.rotate(0.14);
    ctx.fillRect(-5, 0, 11, 36);
    ctx.fillStyle = '#B07055'; ctx.fillRect(-4, 32, 9, 9);
    ctx.restore();

    // Neck
    ctx.fillStyle = '#A06848'; ctx.fillRect(-6, -58, 13, 14);

    // Head (dark hair, from behind)
    ctx.fillStyle = '#1C100A'; rr(ctx, -18, -88, 36, 33, 12); ctx.fill();
    ctx.fillStyle = 'rgba(70,40,15,0.4)'; rr(ctx, -16, -88, 32, 11, 8); ctx.fill();
    // Dreads hint
    ctx.strokeStyle = '#260F00'; ctx.lineWidth = 5; ctx.lineCap = 'round';
    [[-10,-3,28],[-5,2,34],[0,-1,32],[5,3,26],[9,-2,22]].forEach(([dx, swing, len]) => {
      ctx.beginPath();
      ctx.moveTo(dx, -76);
      ctx.bezierCurveTo(dx + swing*0.4, -60, dx + swing*0.8, -52, dx + swing, -78 + len);
      ctx.stroke();
    });
    ctx.lineCap = 'butt';

    // Cooldown arc
    if (this.phase === 'playing') {
      const cd = 1 - clamp(this.shotCooldown / SHOT_CD, 0, 1);
      if (cd < 1) {
        ctx.strokeStyle = 'rgba(255,185,50,0.80)'; ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(0, -50, 26, -Math.PI/2, -Math.PI/2 + cd * Math.PI * 2);
        ctx.stroke();
      }
      // TAP indicator
      ctx.save();
      ctx.font = `${Math.max(11, Math.round(H * 0.016))}px system-ui`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'top';
      ctx.fillStyle = cd >= 1 ? 'rgba(255,210,80,0.75)' : 'rgba(180,180,180,0.45)';
      ctx.fillText(cd >= 1 ? '👆 TAP TO FIRE' : 'RELOADING…', 0, 56);
      ctx.restore();
    }

    ctx.restore();
  }

  // ── End overlay ──────────────────────────────────────────────────────────────
  private _drawEndOverlay(W: number, H: number): void {
    const ctx = this.ctx;
    const won = this.phase === 'win';

    ctx.fillStyle = won ? 'rgba(0,25,0,0.80)' : 'rgba(25,0,0,0.80)';
    ctx.fillRect(0, 0, W, H);

    const pw = Math.min(W * 0.82, 400), ph = 190;
    const px = (W - pw) / 2, py = H * 0.28;

    ctx.fillStyle = won ? '#182A10' : '#2A1010';
    rr(ctx, px, py, pw, ph, 18); ctx.fill();
    ctx.strokeStyle = won ? '#FFD700' : '#FF4444'; ctx.lineWidth = 3;
    rr(ctx, px, py, pw, ph, 18); ctx.stroke();

    ctx.font = `bold ${Math.max(22, Math.round(H * 0.040))}px system-ui,sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillStyle = won ? '#FFD700' : '#FF6666';
    ctx.fillText(
      won ? `🏆 COLOUR MATCHED!` : `⏰ TIME'S UP`,
      W/2, py + 55
    );

    if (won) {
      ctx.font = `${Math.max(14, Math.round(H * 0.024))}px system-ui,sans-serif`;
      ctx.fillStyle = '#aaa';
      ctx.fillText(this.target.name, W/2, py + 98);
    }
    ctx.font = `${Math.max(14, Math.round(H * 0.022))}px system-ui,sans-serif`;
    ctx.fillStyle = '#CCC';
    ctx.fillText(`Match: ${this.mixPct}%`, W/2, won ? py + 128 : py + 92);

    ctx.font = `${Math.max(12, Math.round(H * 0.017))}px system-ui,sans-serif`;
    ctx.fillStyle = 'rgba(255,255,255,0.4)';
    ctx.fillText('Continuing…', W/2, py + 162);
  }
}
