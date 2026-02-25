/**
 * MarbellinoMixer — Moving Bucket Edition
 *
 * Jose fires pigment shots from a cannon into a bucket.
 * Connie carries the bucket back and forth — you need to time your shots!
 * Match one of 16 Marbellino colours within 90 seconds.
 */

// ── 16 Mixer formulas ─────────────────────────────────────────────────────────
interface MixerFormula {
  name: string;
  shots: { B:number; Y:number; L:number; R:number; G:number };
  hex: string;
  hint: string;
  difficulty: 1|2|3;
}

const MIXER_FORMULAS: MixerFormula[] = [
  // ── Difficulty 1 ─────────────────────────────────────────────────────────
  { name:'Spanish White', shots:{B:1,Y:1,L:0,R:0,G:0}, hex:'#F8F4EC', difficulty:1,
    hint:'Minimal — barely any pigment' },
  { name:'Papercut',      shots:{B:1,Y:2,L:1,R:0,G:0}, hex:'#F0E8D0', difficulty:1,
    hint:'Double the Yellow, everything even' },
  { name:'Tranquil',      shots:{B:2,Y:2,L:2,R:0,G:0}, hex:'#E4DAC0', difficulty:1,
    hint:'All three equal — balanced warm white' },
  { name:'Sage Mist',     shots:{B:1,Y:1,L:1,R:0,G:2}, hex:'#DDE8D8', difficulty:1,
    hint:'Mostly base with a touch of Green' },

  // ── Difficulty 2 ─────────────────────────────────────────────────────────
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

  // ── Difficulty 3 ─────────────────────────────────────────────────────────
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

// Pigment config
const PIGS = [
  { key:'B', label:'Black',        color:'#2a2a2a', dot:'#666666', max:8  },
  { key:'Y', label:'Dirty Yellow', color:'#C8A020', dot:'#E8C040', max:12 },
  { key:'L', label:'Raw Umber',    color:'#8B5E30', dot:'#AA7848', max:8  },
  { key:'R', label:'Dirty Red',    color:'#A04030', dot:'#CC5542', max:6  },
  { key:'G', label:'Green',        color:'#3A6030', dot:'#5A8850', max:8  },
] as const;
type PKey = 'B'|'Y'|'L'|'R'|'G';

// ── Colour utilities ──────────────────────────────────────────────────────────
function hexRgb(hex:string):[number,number,number]{const n=parseInt(hex.replace('#',''),16);return[(n>>16)&255,(n>>8)&255,n&255];}
function rgbHex(r:number,g:number,b:number):string{return'#'+[r,g,b].map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');}
function colDist(a:string,b:string):number{const[ar,ag,ab]=hexRgb(a);const[br,bg,bb]=hexRgb(b);return Math.sqrt((ar-br)**2+(ag-bg)**2+(ab-bb)**2);}
function matchPct(a:string,b:string):number{return Math.max(0,Math.round(100-colDist(a,b)*0.45));}

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

// ── Types ─────────────────────────────────────────────────────────────────────
interface Ball { x:number; y:number; vx:number; vy:number; r:number; color:string; pigKey:PKey; }
interface Splat { x:number; y:number; color:string; t:number; maxT:number; }

// ── Main class ────────────────────────────────────────────────────────────────
export class MarbellinoMixer {
  private overlay:HTMLDivElement|null=null;
  private canvas:HTMLCanvasElement|null=null;
  private ctx:CanvasRenderingContext2D|null=null;
  private rafId=0;

  // Game
  private shots:Record<PKey,number>={B:0,Y:0,L:0,R:0,G:0};
  private sel:PKey='B';
  private target:MixerFormula|null=null;
  private timer=90;
  private timerInt:ReturnType<typeof setInterval>|null=null;
  private solved=false;
  private onDone:((pts:number)=>void)|null=null;

  // Canvas dimensions
  private W=400; private H=240;

  // Layout (raw 400-wide units, scaled on resize)
  private jX=58;   private jY=218;
  private bkX=200; private bkTopY=105; private bkBotY=168;
  private cnX=265; private cnY=218;

  private readonly GRAVITY=520;

  // ── Connie movement ──────────────────────────────────────────────────────
  private connX=265;       // current Connie x in canvas px (scaled)
  private connDir=-1;      // +1 = right, -1 = left
  private connSpeed=0;     // canvas px/s
  private connPauseT=0;    // seconds paused at edge
  private connMinX=0;      // clamped in _resizeCanvas
  private connMaxX=0;

  // Cannon
  private cannonTipX=0; private cannonTipY=0;
  private aimAngle=-0.78;
  private aimPower=360;
  private isAiming=false;
  private hasFired=false;

  // Active ball
  private ball:Ball|null=null;

  // Hit effects
  private splats:Splat[]=[];
  private connieHitT=0;
  private bucketFlashT=0;

  // Bionic hip
  private bionichipTimer=10+Math.random()*6;  // seconds until first lunge
  private bionichipActive=false;
  private bionichipT=0;                        // remaining duration of active burst
  private readonly BIONIC_DURATION=2.2;

  // Mix
  private currentMix='#F8F6F0';
  private displayMix='#F8F6F0';
  private mixedResult='';
  private matchValue=0;
  private mixState:'idle'|'mixing'|'success'|'fail'='idle';
  private mixT=0;

  // UI refs
  private dotEls:Record<PKey,HTMLElement[]>={B:[],Y:[],L:[],R:[],G:[]};
  private timerEl:HTMLSpanElement|null=null;
  private fireBtn:HTMLButtonElement|null=null;
  private mixBtn:HTMLButtonElement|null=null;
  private pigBtns:Partial<Record<PKey,HTMLElement>>={};

  // ── Public ──────────────────────────────────────────────────────────────────
  show(onDone?:(pts:number)=>void):void{
    this._cleanup();
    this.solved=false; this.timer=90; this.shots={B:0,Y:0,L:0,R:0,G:0};
    this.sel='B'; this.ball=null; this.splats=[];
    this.connieHitT=0; this.bucketFlashT=0;
    this.bionichipActive=false; this.bionichipT=0; this.bionichipTimer=10+Math.random()*6;
    this.currentMix='#F8F6F0'; this.displayMix='#F8F6F0';
    this.mixState='idle'; this.mixT=0; this.matchValue=0; this.mixedResult='';
    this.isAiming=false; this.hasFired=false;
    this.onDone=onDone??null;

    const solved=getSolved();
    const pool=MIXER_FORMULAS.filter(f=>!solved.has(f.name));
    this.target=(pool.length>0?pool:MIXER_FORMULAS)[Math.floor(Math.random()*(pool.length||MIXER_FORMULAS.length))];

    this._injectStyles();
    this._buildUI();
    this._selectPig('B');
    this._startTimer();
    this._startLoop();
  }

  hide():void{this._cleanup();}

  // ── Build UI ────────────────────────────────────────────────────────────────
  private _buildUI():void{
    const ov=document.createElement('div');
    ov.id='mmv4-ov';
    ov.style.cssText=`position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,0.92);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;animation:mm4Fade 0.2s ease both;`;
    document.body.appendChild(ov);
    this.overlay=ov;

    const panel=document.createElement('div');
    panel.style.cssText=`background:linear-gradient(170deg,#1c1814,#0e0c0a);border:1px solid rgba(200,168,106,0.22);border-radius:22px;width:min(440px,97vw);max-height:97vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.95);animation:mm4Slide 0.28s cubic-bezier(.4,0,.2,1) both;`;
    ov.appendChild(panel);

    // Header
    const hdr=document.createElement('div');
    hdr.style.cssText=`display:flex;align-items:flex-start;justify-content:space-between;padding:14px 16px 0;`;
    hdr.innerHTML=`<div>
      <div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div>
      <div style="color:#fff;font-size:18px;font-weight:900;">🎨 MARBELLINO MIXER</div>
      <div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Metal hip. Silicone. Bionic powers. Good luck.</div>
    </div>`;
    const xBtn=document.createElement('button');
    xBtn.textContent='✕';
    xBtn.style.cssText=`background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;`;
    xBtn.addEventListener('click',()=>this._cleanup());
    hdr.appendChild(xBtn);
    panel.appendChild(hdr);

    // ── Target + colour grid row ──────────────────────────────────────────────
    const trow=document.createElement('div');
    trow.style.cssText=`display:flex;align-items:flex-start;gap:10px;padding:10px 16px 0;`;

    // Big target swatch + label
    const targetCol=document.createElement('div');
    targetCol.style.cssText=`display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;`;
    const tsw=document.createElement('div');
    tsw.style.cssText=`width:56px;height:56px;border-radius:12px;border:2.5px solid rgba(200,168,106,0.5);background:${this.target!.hex};box-shadow:0 4px 18px rgba(0,0,0,0.4);flex-shrink:0;`;
    const stars='★'.repeat(this.target!.difficulty)+'☆'.repeat(3-this.target!.difficulty);
    const tlbl=document.createElement('div');
    const _tFormula=Object.entries(this.target!.shots).filter(([,v])=>v>0).map(([k,v])=>`${k}:${v}`).join(' · ');
    tlbl.innerHTML=`<div style="color:rgba(255,255,255,0.3);font-size:9px;font-weight:700;letter-spacing:2px;text-align:center;">TARGET</div><div id="mmv4-name" style="color:#fff;font-size:13px;font-weight:900;text-align:center;">${this.target!.name}</div><div style="color:#FFD080;font-size:10px;font-weight:900;text-align:center;margin-top:2px;letter-spacing:0.5px;">${_tFormula}</div><div style="color:#C8A86A;font-size:10px;text-align:center;">${stars}</div>`;
    targetCol.appendChild(tsw); targetCol.appendChild(tlbl);

    // 4×4 colour palette grid — all 16 targets
    const grid=document.createElement('div');
    grid.style.cssText=`display:grid;grid-template-columns:repeat(4,1fr);gap:4px;flex:1;`;
    MIXER_FORMULAS.forEach((f)=>{
      const chip=document.createElement('div');
      const isTarget=f.name===this.target!.name;
      chip.style.cssText=`height:22px;border-radius:5px;background:${f.hex};border:${isTarget?'2px solid #FFD700':'1.5px solid rgba(255,255,255,0.12)'};box-shadow:${isTarget?'0 0 8px #FFD70099':'none'};transition:all 0.15s;cursor:default;position:relative;`;
      chip.title=getSolved().has(f.name)?f.name:'???';
      // Tick if solved
      if(getSolved().has(f.name)&&f.name!==this.target!.name){
        chip.style.opacity='0.55';
        const tick=document.createElement('div');
        tick.style.cssText=`position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;`;
        tick.textContent='✓'; chip.appendChild(tick);
      }
      grid.appendChild(chip);
    });
    trow.appendChild(targetCol); trow.appendChild(grid);
    panel.appendChild(trow);

    // Canvas
    const cwrap=document.createElement('div');
    cwrap.style.cssText=`padding:10px 16px 0;position:relative;`;
    this.canvas=document.createElement('canvas');
    this.canvas.style.cssText=`width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:#0a0806;box-shadow:inset 0 2px 20px rgba(0,0,0,0.8);touch-action:none;cursor:crosshair;display:block;`;
    this._resizeCanvas();
    cwrap.appendChild(this.canvas);
    panel.appendChild(cwrap);
    this.ctx=this.canvas.getContext('2d')!;

    // Connie movement hint
    const moveHint=document.createElement('div');
    moveHint.style.cssText=`text-align:center;color:rgba(255,120,50,0.7);font-size:10px;font-weight:700;padding:3px 16px 0;letter-spacing:1px;`;
    moveHint.textContent='🎯 MATCH THE RECIPE — skill of the shot counts!';
    panel.appendChild(moveHint);

    // Canvas pointer events for aiming
    this.canvas.addEventListener('pointerdown',(e)=>{
      e.preventDefault();
      if(this.ball||this.mixState==='mixing'||this.solved) return;
      this.isAiming=true;
      this._updateAim(e);
    },{passive:false});
    this.canvas.addEventListener('pointermove',(e)=>{
      if(!this.isAiming) return;
      this._updateAim(e);
    },{passive:true});
    this.canvas.addEventListener('pointerup',()=>{this.isAiming=false;});

    // Pigment selector
    const pigSec=document.createElement('div');
    pigSec.style.cssText=`display:flex;flex-direction:column;gap:6px;padding:8px 16px 0;`;

    for(const p of PIGS){
      const k=p.key as PKey;
      const row=document.createElement('div');
      row.id=`mmv4-pig-${k}`;
      row.style.cssText=`display:flex;align-items:center;gap:9px;cursor:pointer;padding:4px 8px;border-radius:10px;border:1.5px solid transparent;transition:all 0.12s;`;

      const sw=document.createElement('div');
      sw.style.cssText=`width:16px;height:16px;border-radius:4px;background:${p.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;

      const lbl=document.createElement('div');
      lbl.style.cssText=`color:rgba(255,255,255,0.7);font-size:11px;font-weight:700;width:80px;flex-shrink:0;`;
      lbl.textContent=p.label;

      const dots=document.createElement('div');
      dots.style.cssText=`display:flex;gap:3px;flex:1;align-items:center;flex-wrap:wrap;`;
      this.dotEls[k]=[];
      for(let i=0;i<Math.min(p.max,12);i++){
        const d=document.createElement('div');
        d.style.cssText=`width:10px;height:10px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.1);background:transparent;transition:background 0.1s;flex-shrink:0;`;
        dots.appendChild(d);
        this.dotEls[k].push(d);
      }

      const cnt=document.createElement('div');
      cnt.id=`mmv4-cnt-${k}`;
      cnt.style.cssText=`color:${p.dot};font-size:12px;font-weight:900;min-width:24px;text-align:right;font-variant-numeric:tabular-nums;`;
      cnt.textContent='0';

      row.appendChild(sw); row.appendChild(lbl); row.appendChild(dots); row.appendChild(cnt);
      row.addEventListener('click',()=>this._selectPig(k));
      pigSec.appendChild(row);
      this.pigBtns[k]=row;
    }
    panel.appendChild(pigSec);

    // Match bar
    const matchSec=document.createElement('div');
    matchSec.style.cssText=`padding:7px 16px 0;`;
    matchSec.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv4-pct" style="color:#C8A86A;font-size:14px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:7px;overflow:hidden;">
        <div id="mmv4-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s,background 0.3s;"></div>
      </div>
      <div id="mmv4-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:3px;min-height:14px;"></div>
    `;
    panel.appendChild(matchSec);

    // Bottom buttons
    const brow=document.createElement('div');
    brow.style.cssText=`display:flex;gap:9px;padding:8px 16px 14px;align-items:center;`;

    const undoBtn=document.createElement('button');
    undoBtn.textContent='⌫';
    undoBtn.title='Remove last shot';
    undoBtn.style.cssText=`background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4);font-size:17px;width:46px;height:48px;border-radius:12px;cursor:pointer;flex-shrink:0;touch-action:manipulation;`;
    undoBtn.addEventListener('click',()=>this._undoShot());

    this.fireBtn=document.createElement('button');
    this.fireBtn.style.cssText=`flex:1;height:48px;border:none;border-radius:12px;font-size:13px;font-weight:900;letter-spacing:0.5px;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B2020,#5a1010);color:#FFaaaa;box-shadow:0 4px 16px rgba(200,30,30,0.25);transition:transform 0.1s;`;
    this.fireBtn.textContent='🔴 AIM FIRST';
    this.fireBtn.addEventListener('pointerdown',()=>{this.fireBtn!.style.transform='scale(0.97)';});
    this.fireBtn.addEventListener('pointerup',()=>{this.fireBtn!.style.transform='';this._fire();});

    this.mixBtn=document.createElement('button');
    this.mixBtn.style.cssText=`width:68px;height:48px;border:none;border-radius:12px;font-size:12px;font-weight:900;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B4A00,#5A3000);color:#FFD080;flex-shrink:0;box-shadow:0 4px 12px rgba(200,100,0,0.2);transition:transform 0.1s;`;
    this.mixBtn.textContent='🔩 MIX';
    this.mixBtn.addEventListener('pointerdown',()=>{this.mixBtn!.style.transform='scale(0.97)';});
    this.mixBtn.addEventListener('pointerup',()=>{this.mixBtn!.style.transform='';this._triggerMix();});

    const twrap=document.createElement('div');
    twrap.style.cssText=`display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;`;
    twrap.innerHTML=`<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>`;
    this.timerEl=document.createElement('span');
    this.timerEl.style.cssText=`color:#fff;font-size:16px;font-weight:900;font-variant-numeric:tabular-nums;`;
    this.timerEl.textContent='1:30';
    twrap.appendChild(this.timerEl);

    brow.appendChild(undoBtn); brow.appendChild(this.fireBtn); brow.appendChild(this.mixBtn); brow.appendChild(twrap);
    panel.appendChild(brow);
  }

  // ── Aiming ─────────────────────────────────────────────────────────────────
  private _updateAim(e:PointerEvent):void{
    if(!this.canvas) return;
    const rect=this.canvas.getBoundingClientRect();
    const sx=this.canvas.width/rect.width;
    const sy=this.canvas.height/rect.height;
    const tx=(e.clientX-rect.left)*sx;
    const ty=(e.clientY-rect.top)*sy;
    const dx=tx-this.jX; const dy=ty-this.jY;
    this.aimAngle=Math.max(-1.25, Math.min(-0.1, Math.atan2(dy,dx)));
    this.aimPower=Math.max(220, Math.min(500, Math.sqrt(dx*dx+dy*dy)*2.2));
    if(this.fireBtn&&!this.hasFired){
      const pc=PIGS.find(p=>p.key===this.sel)!;
      this.fireBtn.textContent=`💥 FIRE ${pc.label.slice(0,3).toUpperCase()}`;
      this.fireBtn.style.background='linear-gradient(135deg,#CC2222,#882020)';
      this.fireBtn.style.color='#fff';
    }
  }

  private _fire():void{
    if(this.ball||this.mixState==='mixing'||this.solved) return;
    if(!this.hasFired&&Math.abs(this.aimAngle+0.78)<0.05&&this.aimPower===360){
      if(this.fireBtn) this.fireBtn.textContent='← Drag canvas to aim!';
      return;
    }
    const pc=PIGS.find(p=>p.key===this.sel)!;
    if(this.shots[this.sel]>=pc.max){
      if(this.fireBtn){const o=this.fireBtn.textContent;this.fireBtn.textContent=`MAX ${pc.max}!`;setTimeout(()=>{if(this.fireBtn)this.fireBtn.textContent=o||'💥 FIRE';},1200);}
      return;
    }
    const canL=34;
    const tipX=this.jX+canL*Math.cos(this.aimAngle);
    const tipY=(this.jY-52)+canL*Math.sin(this.aimAngle);
    this.cannonTipX=tipX; this.cannonTipY=tipY;
    const vx=this.aimPower*Math.cos(this.aimAngle);
    const vy=this.aimPower*Math.sin(this.aimAngle);
    this.ball={x:tipX,y:tipY,vx,vy,r:7,color:PIGS.find(p=>p.key===this.sel)!.dot,pigKey:this.sel};
    this.hasFired=true;
    if(this.fireBtn) this.fireBtn.textContent='🔴 IN FLIGHT…';
  }

  private _selectPig(key:PKey):void{
    this.sel=key;
    const pc=PIGS.find(p=>p.key===key)!;
    for(const p of PIGS){
      const el=this.pigBtns[p.key as PKey] as HTMLElement|undefined;
      if(!el) continue;
      if(p.key===key){ el.style.borderColor=pc.dot; el.style.background=pc.color+'22'; }
      else{ el.style.borderColor='transparent'; el.style.background='transparent'; }
    }
    if(this.fireBtn&&!this.ball){
      this.fireBtn.textContent=`💥 FIRE ${pc.label.slice(0,3).toUpperCase()}`;
      this.fireBtn.style.background='linear-gradient(135deg,#CC2222,#882020)';
      this.fireBtn.style.color='#fff';
    }
  }

  private _undoShot():void{
    if(this.ball||this.mixState==='mixing') return;
    if(this.shots[this.sel]>0){ this.shots[this.sel]--; this._refreshDots(); this.currentMix=computeMix(this.shots); }
  }

  private _refreshDots():void{
    for(const p of PIGS){
      const k=p.key as PKey;
      const v=this.shots[k];
      this.dotEls[k].forEach((d,i)=>{
        d.style.background=i<v?p.dot:'transparent';
        d.style.borderColor=i<v?p.dot+'88':'rgba(255,255,255,0.1)';
      });
      const c=document.getElementById(`mmv4-cnt-${k}`);
      if(c) c.textContent=String(v);
    }
  }

  // ── Update ──────────────────────────────────────────────────────────────────
  private _update(dt:number):void{
    // ── Connie movement ────────────────────────────────────────────────────
    if(!this.solved && this.mixState!=='success'){
      if(this.connPauseT>0){
        this.connPauseT-=dt;
      }else{
        this.connX+=this.connDir*this.connSpeed*dt;
        if(this.connX>=this.connMaxX){ this.connX=this.connMaxX; this.connDir=-1; this.connPauseT=0.25+Math.random()*0.6; }
        if(this.connX<=this.connMinX){ this.connX=this.connMinX; this.connDir=1;  this.connPauseT=0.25+Math.random()*0.6; }
        // Occasional random speed bump
        if(!this.bionichipActive && Math.random()<dt*0.3) this.connSpeed=(55+Math.random()*50)*(this.W/400);

        // ── Bionic hip burst ──────────────────────────────────────────────
        this.bionichipTimer-=dt;
        if(this.bionichipTimer<=0&&!this.bionichipActive){
          this.bionichipActive=true;
          this.bionichipT=this.BIONIC_DURATION;
          // Lunge at triple speed
          this.connSpeed=(220+Math.random()*80)*(this.W/400);
        }
        if(this.bionichipActive){
          this.bionichipT-=dt;
          if(this.bionichipT<=0){
            this.bionichipActive=false;
            this.bionichipTimer=8+Math.random()*7; // next burst in 8-15s
            this.connSpeed=(55+Math.random()*50)*(this.W/400);
          }
        }
      }
      this.cnX=Math.round(this.connX);
      this.bkX=Math.round(this.connX-62*(this.W/400));
    }

    // Lerp display mix
    const[mr,mg,mb]=hexRgb(this.currentMix);
    const[dr,dg,db]=hexRgb(this.displayMix);
    const spd=this.mixState==='mixing'?5:1.8;
    this.displayMix=rgbHex(dr+(mr-dr)*spd*dt,dg+(mg-dg)*spd*dt,db+(mb-db)*spd*dt);

    // Splats decay
    for(let i=this.splats.length-1;i>=0;i--){
      this.splats[i].t+=dt;
      if(this.splats[i].t>this.splats[i].maxT) this.splats.splice(i,1);
    }
    if(this.connieHitT>0) this.connieHitT-=dt;
    if(this.bucketFlashT>0) this.bucketFlashT-=dt;

    // Mix animation
    if(this.mixState==='mixing'){ this.mixT+=dt; if(this.mixT>2.2) this._onMixDone(); }
    if(this.mixState==='success'||this.mixState==='fail') this.mixT+=dt;

    // Ball physics
    if(!this.ball) return;
    this.ball.x+=this.ball.vx*dt;
    this.ball.y+=this.ball.vy*dt;
    this.ball.vy+=this.GRAVITY*dt;

    // Hit bucket (follows Connie)
    const topW=54*(this.W/400); const bkCx=this.bkX;
    const inBucketX=Math.abs(this.ball.x-bkCx)<topW/2;
    const inBucketY=this.ball.y>this.bkTopY&&this.ball.y<this.bkBotY;
    if(inBucketX&&inBucketY){ this._hitBucket(); return; }

    // Hit Connie
    const inConnieX=Math.abs(this.ball.x-this.cnX)<18;
    const inConnieY=this.ball.y>(this.cnY-95)&&this.ball.y<this.cnY;
    if(inConnieX&&inConnieY){ this._hitConnie(); return; }

    // Off canvas
    if(this.ball.y>this.H+10||this.ball.x>this.W+10||this.ball.y<-20){
      this.ball=null; this._resetFireBtn();
    }
  }

  private _hitBucket():void{
    if(!this.ball) return;
    const key=this.ball.pigKey;
    const pc=PIGS.find(p=>p.key===key)!;
    if(this.shots[key]<pc.max){
      this.shots[key]++;
      this._refreshDots();
      this.currentMix=computeMix(this.shots);
      this.bucketFlashT=0.5;
    }
    for(let i=0;i<12;i++){
      this.splats.push({x:this.bkX+(Math.random()-0.5)*30,y:this.bkTopY+10+Math.random()*20,color:this.ball.color,t:0,maxT:0.8+Math.random()*0.4});
    }
    this.ball=null; this._resetFireBtn();
  }

  private _hitConnie():void{
    if(!this.ball) return;
    this.connieHitT=1.8;
    for(let i=0;i<18;i++){
      this.splats.push({x:this.ball.x+(Math.random()-0.5)*25,y:this.ball.y+(Math.random()-0.5)*25,color:this.ball.color,t:0,maxT:1.0+Math.random()*0.5});
    }
    const shout=document.getElementById('mmv4-hint');
    if(shout){
      const lines=['JOSE!!! 😤','WATCH IT!!! 😡','OMG!!! 🤬','MY UNIFORM! 😤','YOU GOT IT ON MY TITS!!! 😤','JOSE YOU IDIOT!!! 😡'];
      shout.textContent=lines[Math.floor(Math.random()*lines.length)];
      shout.style.color='#FF6644';
      setTimeout(()=>{if(shout){shout.textContent='';shout.style.color='rgba(200,168,106,0.4)';}},2000);
    }
    this.ball=null; this._resetFireBtn();
  }

  private _resetFireBtn():void{
    if(this.fireBtn){
      const pc=PIGS.find(p=>p.key===this.sel)!;
      this.fireBtn.textContent=`💥 FIRE ${pc.label.slice(0,3).toUpperCase()}`;
    }
  }

  // ── Mix ────────────────────────────────────────────────────────────────────
  private _triggerMix():void{
    if(this.mixState==='mixing'||this.mixState==='success'||this.solved) return;
    const total=Object.values(this.shots).reduce((a,b)=>a+b,0);
    if(total===0){const h=document.getElementById('mmv4-hint');if(h){h.textContent='Get some shots in the bucket first!';setTimeout(()=>{if(h)h.textContent='';},1800);}return;}
    this.ball=null;
    this.mixState='mixing'; this.mixT=0;
    this.mixedResult=computeMix(this.shots);
    this.matchValue=matchPct(this.mixedResult,this.target!.hex);
    if(this.mixBtn){this.mixBtn.style.background='linear-gradient(135deg,#226622,#144414)';this.mixBtn.style.color='#88FFcc';this.mixBtn.textContent='⚙️ …';}
    if(this.fireBtn) this.fireBtn.disabled=true;
  }

  private _onMixDone():void{
    const pct=this.matchValue;
    const bar=document.getElementById('mmv4-bar');
    const pctEl=document.getElementById('mmv4-pct');
    const hint=document.getElementById('mmv4-hint');
    if(bar){bar.style.width=`${pct}%`;bar.style.background=pct>=82?'linear-gradient(90deg,#44DD88,#88FFCC)':pct>=55?'linear-gradient(90deg,#C8A86A,#FFD080)':'linear-gradient(90deg,#882222,#CC4433)';}
    if(pctEl){pctEl.textContent=`${pct}%`;pctEl.style.color=pct>=82?'#44DD88':pct>=55?'#C8A86A':'#FF6644';}
    if(pct>=82){
      this._triggerSuccess(pct);
    }else{
      this.mixState='idle';
      if(hint) hint.textContent=pct>=65?'Getting close — adjust the mix':'Way off — clear and start again';
      if(this.mixBtn){this.mixBtn.style.background='linear-gradient(135deg,#8B4A00,#5A3000)';this.mixBtn.style.color='#FFD080';this.mixBtn.textContent='🔩 MIX';}
      if(this.fireBtn) this.fireBtn.disabled=false;
    }
  }

  private _triggerSuccess(pct:number):void{
    if(this.solved) return;
    this.solved=true; this._stopTimer();
    markSolved(this.target!.name);
    this.mixState='success'; this.mixT=0;
    const nameEl=document.getElementById('mmv4-name');
    if(nameEl){nameEl.style.color='#44DD88';}
    const hint=document.getElementById('mmv4-hint');
    if(hint){
      hint.textContent=`✓ Cracked! (${getSolved().size}/${MIXER_FORMULAS.length} done)`;
      hint.style.color='#44DD8888';
    }
    if(this.mixBtn){this.mixBtn.textContent='🏆 CRACKED!';this.mixBtn.style.background='linear-gradient(135deg,#2a8a44,#1a6030)';this.mixBtn.style.color='#88FFcc';this.mixBtn.disabled=true;}
    if(this.fireBtn) this.fireBtn.disabled=true;
    const pts=Math.round(((pct-82)/18)*40);
    setTimeout(()=>{this._cleanup();this.onDone?.(pts);},4500);
  }

  private _triggerTimeout():void{
    if(this.solved) return;
    this._stopTimer(); this.mixState='fail'; this.mixT=0;
    if(this.timerEl){this.timerEl.textContent='0:00';this.timerEl.style.color='#FF4444';}
    const nameEl=document.getElementById('mmv4-name');
    if(nameEl){nameEl.style.color='#FF8866';}
    if(this.mixBtn){
      this.mixBtn.disabled=false;
      this.mixBtn.style.background='rgba(100,30,20,0.9)';
      this.mixBtn.style.color='#FF9988';
      this.mixBtn.textContent='Close';
      this.mixBtn.addEventListener('click',()=>{this._cleanup();this.onDone?.(0);},{once:true});
    }
  }

  // ── Render loop ─────────────────────────────────────────────────────────────
  private _startLoop():void{
    let last=performance.now();
    const loop=(now:number)=>{
      if(!this.canvas) return;
      const dt=Math.min((now-last)/1000,0.05); last=now;
      this._update(dt);
      this._drawScene();
      this.rafId=requestAnimationFrame(loop);
    };
    this.rafId=requestAnimationFrame(loop);
  }

  private _drawScene():void{
    if(!this.canvas||!this.ctx) return;
    const ctx=this.ctx; const W=this.W; const H=this.H;
    ctx.clearRect(0,0,W,H);

    // BG
    const bg=ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#1e1610'); bg.addColorStop(1,'#090704');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);
    ctx.strokeStyle='rgba(255,255,255,0.03)'; ctx.lineWidth=1;
    for(let yy=20;yy<H;yy+=22){ctx.beginPath();ctx.moveTo(0,yy);ctx.lineTo(W,yy);ctx.stroke();}

    // Floor
    ctx.fillStyle='rgba(200,168,106,0.08)'; ctx.fillRect(0,H-18,W,18);
    ctx.strokeStyle='rgba(200,168,106,0.2)'; ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(0,H-18);ctx.lineTo(W,H-18);ctx.stroke();

    // Movement range guide (subtle dashed line)
    ctx.save();
    ctx.setLineDash([4,6]); ctx.strokeStyle='rgba(200,100,30,0.15)'; ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(this.connMinX,H-14);ctx.lineTo(this.connMaxX,H-14);ctx.stroke();
    ctx.setLineDash([]); ctx.restore();

    this._drawBucket(ctx);
    this._drawConnie(ctx);
    this._drawJose(ctx);

    if(this.isAiming&&!this.ball) this._drawArcPreview(ctx);
    if(this.ball) this._drawBall(ctx);
    this._drawSplats(ctx);
  }

  private _drawBucket(ctx:CanvasRenderingContext2D):void{
    const cx=this.bkX; const top=this.bkTopY; const bot=this.bkBotY;
    const bkH=bot-top;
    const sc=this.W/400;
    const topW=54*sc; const botW=38*sc;

    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx-topW/2,top); ctx.lineTo(cx+topW/2,top);
    ctx.lineTo(cx+botW/2,bot); ctx.lineTo(cx-botW/2,bot);
    ctx.closePath(); ctx.clip();

    ctx.fillStyle='#F5F0E8'; ctx.fill();

    const total=Object.values(this.shots).reduce((a,b)=>a+b,0);
    const frac=Math.min(1,total/22);
    if(frac>0){
      const fillTop=bot-bkH*frac;
      const wAtFill=botW+(topW-botW)*frac;
      ctx.beginPath();
      ctx.moveTo(cx-wAtFill/2,fillTop); ctx.lineTo(cx+wAtFill/2,fillTop);
      ctx.lineTo(cx+botW/2,bot); ctx.lineTo(cx-botW/2,bot);
      ctx.closePath();
      ctx.fillStyle=this.displayMix; ctx.fill();
      ctx.strokeStyle='rgba(255,255,255,0.28)'; ctx.lineWidth=2;
      ctx.beginPath();
      const rT=performance.now()/1000;
      ctx.moveTo(cx-wAtFill/2+4,fillTop+2);
      ctx.bezierCurveTo(cx-wAtFill/4,fillTop-2+Math.sin(rT*2)*2,cx+wAtFill/4,fillTop+3+Math.sin(rT*2+1)*2,cx+wAtFill/2-4,fillTop+2);
      ctx.stroke();
    }

    if(this.mixState==='mixing'){
      const t=this.mixT;
      for(let i=0;i<4;i++){
        const a=t*8+i*(Math.PI*2/4); const sr=12+Math.sin(t*4+i)*5;
        ctx.beginPath(); ctx.arc(cx+Math.cos(a)*sr,bot-bkH*0.35+Math.sin(a)*sr*0.35,4,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${0.12+Math.sin(a)*0.06})`; ctx.fill();
      }
    }
    ctx.restore();

    const flashAlpha=this.bucketFlashT>0?0.7+Math.sin(this.bucketFlashT*30)*0.3:0.5;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx-topW/2,top); ctx.lineTo(cx+topW/2,top);
    ctx.lineTo(cx+botW/2,bot); ctx.lineTo(cx-botW/2,bot);
    ctx.closePath();
    ctx.strokeStyle=this.mixState==='success'?`rgba(68,221,136,${flashAlpha})`:`rgba(200,168,106,${flashAlpha})`;
    ctx.lineWidth=2.5; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(cx,top,topW/2,5.5*sc,0,0,Math.PI*2);
    ctx.strokeStyle='rgba(200,168,106,0.65)'; ctx.lineWidth=2; ctx.stroke();
    ctx.fillStyle='rgba(220,190,140,0.12)'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx,top-3*sc,topW/2-5*sc,Math.PI,0);
    ctx.strokeStyle='#A08050'; ctx.lineWidth=3; ctx.stroke();
    ctx.font=`bold ${Math.round(10*sc)}px system-ui`; ctx.fillStyle='rgba(200,168,106,0.5)';
    ctx.textAlign='center'; ctx.fillText('TEM',cx,bot-bkH*0.4);
    ctx.textAlign='start'; ctx.restore();
  }

  private _drawConnie(ctx:CanvasRenderingContext2D):void{
    const cx=this.cnX; const cy=this.cnY;
    const skin='#F0C8A0'; const shirt='#111';
    const bh=88*(this.W/400);
    const hit=this.connieHitT>0;
    const offsetX=hit?Math.sin(this.connieHitT*20)*4:0;
    const mixing=this.mixState==='mixing'; const success=this.mixState==='success';
    const moving=Math.abs(this.connDir)>0&&this.connPauseT<=0;

    ctx.save(); ctx.translate(offsetX,0);

    ctx.fillStyle='#111';
    ctx.fillRect(cx-10*(this.W/400),cy-12*(this.W/400),10*(this.W/400),12*(this.W/400));
    ctx.fillRect(cx+2*(this.W/400),cy-12*(this.W/400),10*(this.W/400),12*(this.W/400));
    ctx.fillStyle='#1a1a2a';
    ctx.fillRect(cx-9*(this.W/400),cy-bh*0.44,9*(this.W/400),bh*0.44-10*(this.W/400));
    ctx.fillRect(cx+2*(this.W/400),cy-bh*0.44,9*(this.W/400),bh*0.44-10*(this.W/400));
    ctx.fillStyle=shirt; ctx.fillRect(cx-12*(this.W/400),cy-bh*0.80,24*(this.W/400),bh*0.37);
    ctx.fillStyle=skin;
    ctx.fillRect(cx-4*(this.W/400),cy-bh*0.84,8*(this.W/400),bh*0.055);
    ctx.beginPath(); ctx.arc(cx,cy-bh*0.87,bh*0.08,0,Math.PI*2); ctx.fill();

    // Wild blonde hair
    ctx.fillStyle='#D4B840';
    ctx.beginPath(); ctx.arc(cx,cy-bh*0.87-bh*0.04,bh*0.10,Math.PI,0); ctx.fill();
    ctx.fillRect(cx-bh*0.10,cy-bh*0.87,bh*0.20,bh*0.13);
    ctx.strokeStyle='#FFE070'; ctx.lineWidth=2.5*(this.W/400); ctx.lineCap='round';
    // Hair flies more when moving
    const hairSwing=(moving?1.8:1.0)*this.connDir;
    ctx.beginPath(); ctx.moveTo(cx-8*(this.W/400),cy-bh*0.87); ctx.quadraticCurveTo(cx-18*(this.W/400)+hairSwing*4,cy-bh*0.92,cx-14*(this.W/400)+hairSwing*6,cy-bh*0.98); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx+6*(this.W/400),cy-bh*0.87);  ctx.quadraticCurveTo(cx+16*(this.W/400)+hairSwing*4,cy-bh*0.91,cx+12*(this.W/400)+hairSwing*6,cy-bh*0.96);  ctx.stroke();
    ctx.lineCap='butt';

    // Carry arm (toward bucket)
    const bkOffX=this.bkX-cx; const bkOffY=this.bkTopY-(cy-bh*0.7);
    const armAngle=Math.atan2(bkOffY,bkOffX);
    if(mixing||success){
      ctx.strokeStyle=shirt; ctx.lineWidth=8*(this.W/400); ctx.lineCap='round';
      ctx.beginPath();
      ctx.moveTo(cx-10*(this.W/400),cy-bh*0.72);
      ctx.quadraticCurveTo(cx-20*(this.W/400),cy-bh*0.60,this.bkX+20*(this.W/400),this.bkTopY+5*(this.W/400));
      ctx.stroke();
      const spinAngle=performance.now()/80;
      ctx.save();
      ctx.translate(this.bkX+18*(this.W/400),this.bkTopY+4*(this.W/400));
      ctx.rotate(armAngle);
      ctx.fillStyle='#333'; ctx.strokeStyle='#666'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.roundRect(-26*(this.W/400),-6*(this.W/400),34*(this.W/400),12*(this.W/400),3); ctx.fill(); ctx.stroke();
      ctx.save(); ctx.translate(-30*(this.W/400),0); ctx.rotate(spinAngle);
      const g=ctx.createRadialGradient(0,0,0,0,0,11*(this.W/400));
      g.addColorStop(0,'rgba(200,168,106,0.7)'); g.addColorStop(1,'transparent');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(0,0,11*(this.W/400),0,Math.PI*2); ctx.fill();
      ctx.restore(); ctx.restore();
    }else{
      // Carrying arm — holds the bucket handle area
      ctx.strokeStyle=shirt; ctx.lineWidth=8*(this.W/400); ctx.lineCap='round';
      ctx.beginPath();
      ctx.moveTo(cx-10*(this.W/400),cy-bh*0.72);
      ctx.quadraticCurveTo(cx-20*(this.W/400),cy-bh*0.55,this.bkX+16*(this.W/400),this.bkTopY-2*(this.W/400));
      ctx.stroke();
      ctx.beginPath(); ctx.arc(this.bkX+14*(this.W/400),this.bkTopY-4*(this.W/400),4.5*(this.W/400),0,Math.PI*2);
      ctx.fillStyle=skin; ctx.fill();
    }

    // Right arm relaxed
    ctx.strokeStyle=shirt; ctx.lineWidth=8*(this.W/400);
    ctx.beginPath(); ctx.moveTo(cx+10*(this.W/400),cy-bh*0.72); ctx.lineTo(cx+16*(this.W/400),cy-bh*0.48); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx+16*(this.W/400),cy-bh*0.47,4.5*(this.W/400),0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    ctx.lineCap='butt';

    // ── Bionic hip glow (electric purple aura around hips) ─────────────────
    if(this.bionichipActive){
      const t=performance.now()/120;
      const gAlpha=0.35+Math.sin(t)*0.2;
      const hipY=cy-bh*0.35;
      const grad=ctx.createRadialGradient(cx,hipY,2*(this.W/400),cx,hipY,22*(this.W/400));
      grad.addColorStop(0,`rgba(160,80,255,${gAlpha*1.2})`);
      grad.addColorStop(0.5,`rgba(100,40,200,${gAlpha})`);
      grad.addColorStop(1,'transparent');
      ctx.fillStyle=grad;
      ctx.beginPath(); ctx.ellipse(cx,hipY,22*(this.W/400),14*(this.W/400),0,0,Math.PI*2); ctx.fill();
      // Electric sparks
      ctx.save(); ctx.strokeStyle=`rgba(200,140,255,${0.6+Math.sin(t*3)*0.3})`; ctx.lineWidth=1.5*(this.W/400); ctx.lineCap='round';
      for(let s=0;s<4;s++){
        const sa=t+s*Math.PI/2;
        const sr=14*(this.W/400);
        const ex=cx+Math.cos(sa)*sr; const ey=hipY+Math.sin(sa)*sr*0.6;
        ctx.beginPath(); ctx.moveTo(cx+Math.cos(sa+0.3)*6*(this.W/400),hipY+Math.sin(sa+0.3)*4*(this.W/400));
        ctx.lineTo(ex,ey); ctx.stroke();
      }
      ctx.restore();
    }

    if(hit){
      ctx.font=`bold ${Math.round(11*(this.W/400))}px system-ui`; ctx.fillStyle='#FF4422';
      ctx.textAlign='center';
      ctx.fillText(this.bionichipActive?'OW MY SILICONE!! 😱':'JOSE!!! 😤',cx,cy-bh-6*(this.W/400));
      ctx.textAlign='start';
    }

    // Speed indicator / bionic taunt
    if(this.bionichipActive){
      ctx.save(); ctx.globalAlpha=0.85+Math.sin(performance.now()/80)*0.15;
      ctx.font=`bold ${Math.round(11*(this.W/400))}px system-ui`;
      ctx.fillStyle='#CC88FF'; ctx.textAlign='center';
      ctx.fillText('⚡ BIONIC HIP!',cx,cy-bh-4*(this.W/400));
      ctx.restore();
    } else if(moving&&this.connSpeed>(80*(this.W/400))){
      ctx.save(); ctx.globalAlpha=0.5; ctx.fillStyle='#FF9944';
      ctx.font=`bold ${Math.round(10*(this.W/400))}px system-ui`;
      ctx.textAlign='center';
      ctx.fillText(this.connDir<0?'←':'→',cx,cy-bh-2*(this.W/400));
      ctx.restore();
    }

    ctx.font=`bold ${Math.round(8*(this.W/400))}px system-ui`; ctx.fillStyle='rgba(255,200,80,0.65)';
    ctx.textAlign='center'; ctx.fillText('CONNIE',cx,cy+10*(this.W/400));
    ctx.textAlign='start'; ctx.restore();
  }

  private _drawJose(ctx:CanvasRenderingContext2D):void{
    const jx=this.jX; const jy=this.jY;
    const skin='#C88060'; const shirt='#111';
    const bh=90*(this.W/400);
    const canL=34*(this.W/400);
    const sc=this.W/400;

    const tipX=jx+canL*Math.cos(this.aimAngle);
    const tipY=(jy-52*sc)+canL*Math.sin(this.aimAngle);
    this.cannonTipX=tipX; this.cannonTipY=tipY;

    // Cannon
    ctx.save(); ctx.translate(jx,jy-52*sc); ctx.rotate(this.aimAngle);
    const brl=ctx.createLinearGradient(0,-9*sc,0,9*sc);
    brl.addColorStop(0,'#444'); brl.addColorStop(0.5,'#777'); brl.addColorStop(1,'#333');
    ctx.fillStyle=brl;
    ctx.beginPath(); ctx.roundRect(0,-9*sc,canL,18*sc,4); ctx.fill();
    ctx.strokeStyle='#222'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.roundRect(0,-9*sc,canL,18*sc,4); ctx.stroke();
    ctx.fillStyle='#888'; ctx.beginPath(); ctx.ellipse(canL,0,5*sc,9*sc,0,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#555'; ctx.lineWidth=3*sc; [10,20].forEach(bx=>{ctx.beginPath();ctx.moveTo(bx*sc,-9*sc);ctx.lineTo(bx*sc,9*sc);ctx.stroke();});
    ctx.restore();

    // Cannon mount
    ctx.fillStyle='#3a2a1a'; ctx.beginPath(); ctx.roundRect(jx-6*sc,jy-62*sc,16*sc,18*sc,3); ctx.fill();
    ctx.beginPath(); ctx.arc(jx+4*sc,jy-50*sc,8*sc,0,Math.PI*2);
    ctx.fillStyle='#555'; ctx.fill(); ctx.strokeStyle='#888'; ctx.lineWidth=1.5; ctx.stroke();
    ctx.strokeStyle='#333'; ctx.lineWidth=1.5;
    for(let a=0;a<Math.PI*2;a+=Math.PI/3){ctx.beginPath();ctx.moveTo(jx+4*sc,jy-50*sc);ctx.lineTo(jx+4*sc+Math.cos(a)*7*sc,jy-50*sc+Math.sin(a)*7*sc);ctx.stroke();}

    // Muzzle flash
    if(this.ball&&Math.sqrt((this.ball.x-tipX)**2+(this.ball.y-tipY)**2)<40*sc){
      ctx.save(); ctx.globalAlpha=0.8;
      const gf=ctx.createRadialGradient(tipX,tipY,0,tipX,tipY,18*sc);
      gf.addColorStop(0,'rgba(255,200,50,0.9)'); gf.addColorStop(1,'transparent');
      ctx.fillStyle=gf; ctx.beginPath(); ctx.arc(tipX,tipY,18*sc,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    // Body
    ctx.fillStyle='#0a0a0a'; ctx.fillRect(jx-10*sc,jy-12*sc,10*sc,12*sc); ctx.fillRect(jx+2*sc,jy-12*sc,10*sc,12*sc);
    ctx.fillStyle='#1a1a2a'; ctx.fillRect(jx-9*sc,jy-bh*0.44,9*sc,bh*0.44-10*sc); ctx.fillRect(jx+2*sc,jy-bh*0.44,9*sc,bh*0.44-10*sc);
    ctx.fillStyle=shirt; ctx.fillRect(jx-12*sc,jy-bh*0.80,24*sc,bh*0.37);
    ctx.fillStyle=skin; ctx.fillRect(jx-4*sc,jy-bh*0.84,8*sc,bh*0.055);

    const headY=jy-bh*0.88; const headR=bh*0.08;
    // Dreads
    const dreads=[{dx:-9,swing:-4,len:32},{dx:-5,swing:-2,len:38},{dx:-1,swing:2,len:35},{dx:3,swing:3,len:28},{dx:7,swing:1,len:24},{dx:-12,swing:-6,len:22}];
    ctx.lineCap='round';
    dreads.forEach((d,i)=>{
      ctx.strokeStyle=i%2===0?'#2a1000':'#3a1a00'; ctx.lineWidth=5*sc;
      ctx.beginPath(); ctx.moveTo(jx+d.dx*sc,headY-headR*0.3);
      ctx.bezierCurveTo(jx+d.dx*sc+d.swing*sc*0.5,headY+d.len*sc*0.35,jx+d.dx*sc+d.swing*sc,headY+d.len*sc*0.7,jx+d.dx*sc+d.swing*sc*0.8+Math.sin(i)*2*sc,headY+d.len*sc);
      ctx.stroke();
    });
    ctx.lineCap='butt';
    ctx.fillStyle=skin; ctx.beginPath(); ctx.arc(jx,headY,headR,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#3a1a00'; ctx.beginPath(); ctx.arc(jx-3*sc,headY-2*sc,2*sc,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(jx+3*sc,headY-2*sc,2*sc,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle='#8a4820'; ctx.lineWidth=1.5; ctx.beginPath(); ctx.arc(jx,headY+2*sc,4*sc,0.2,Math.PI-0.2); ctx.stroke();
    ctx.strokeStyle='#8B4A00'; ctx.lineWidth=3.5*sc;
    ctx.beginPath(); ctx.arc(jx,headY,headR*1.05,Math.PI*0.75,Math.PI*1.85); ctx.stroke();

    // Arms
    ctx.strokeStyle=shirt; ctx.lineWidth=8*sc; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(jx+10*sc,jy-bh*0.72); ctx.quadraticCurveTo(jx+16*sc,jy-bh*0.58,jx+10*sc,jy-52*sc+4*sc); ctx.stroke();
    ctx.beginPath(); ctx.arc(jx+10*sc,jy-49*sc,4.5*sc,0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    ctx.strokeStyle=shirt; ctx.lineWidth=8*sc;
    ctx.beginPath(); ctx.moveTo(jx-10*sc,jy-bh*0.72); ctx.lineTo(jx-16*sc,jy-bh*0.48); ctx.stroke();
    ctx.beginPath(); ctx.arc(jx-16*sc,jy-bh*0.47,4.5*sc,0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    ctx.lineCap='butt';

    ctx.font=`bold ${Math.round(8*sc)}px system-ui`; ctx.fillStyle='rgba(255,220,100,0.65)';
    ctx.textAlign='center'; ctx.fillText('JOSE',jx,jy+10*sc); ctx.textAlign='start';
  }

  private _drawArcPreview(ctx:CanvasRenderingContext2D):void{
    const pc=PIGS.find(p=>p.key===this.sel)!;
    const vx=this.aimPower*Math.cos(this.aimAngle);
    const vy=this.aimPower*Math.sin(this.aimAngle);
    const sx=this.cannonTipX; const sy=this.cannonTipY;
    ctx.save();
    for(let i=0;i<28;i++){
      const t=i*0.055; const px=sx+vx*t; const py=sy+vy*t+0.5*this.GRAVITY*t*t;
      if(py>this.H||px>this.W) break;
      ctx.globalAlpha=Math.max(0,0.7-i*0.022);
      ctx.fillStyle=pc.dot; ctx.shadowColor=pc.dot; ctx.shadowBlur=6;
      ctx.beginPath(); ctx.arc(px,py,3-i*0.06,0,Math.PI*2); ctx.fill();
    }
    ctx.shadowBlur=0; ctx.globalAlpha=1; ctx.restore();
  }

  private _drawBall(ctx:CanvasRenderingContext2D):void{
    if(!this.ball) return;
    const b=this.ball;
    ctx.save(); ctx.shadowColor=b.color; ctx.shadowBlur=12;
    ctx.fillStyle=b.color; ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fill();
    ctx.globalAlpha=0.5; ctx.fillStyle='rgba(255,255,255,0.7)';
    ctx.beginPath(); ctx.arc(b.x-2,b.y-2,b.r*0.4,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur=0; ctx.globalAlpha=1; ctx.restore();
  }

  private _drawSplats(ctx:CanvasRenderingContext2D):void{
    for(const s of this.splats){
      ctx.save(); ctx.globalAlpha=Math.max(0,(1-s.t/s.maxT)*0.8);
      ctx.fillStyle=s.color;
      ctx.beginPath(); ctx.arc(s.x,s.y,4+s.t*8,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }
  }

  // ── Timer ──────────────────────────────────────────────────────────────────
  private _startTimer():void{
    this.timerInt=setInterval(()=>{
      if(this.solved) return;
      this.timer--;
      if(this.timerEl){
        const m=Math.floor(this.timer/60); const s=this.timer%60;
        this.timerEl.textContent=`${m}:${s.toString().padStart(2,'0')}`;
        if(this.timer<=20) this.timerEl.style.color='#FF6644';
        if(this.timer<=10) this.timerEl.style.animation='mm4TimerPulse 0.5s ease infinite alternate';
      }
      if(this.timer<=0) this._triggerTimeout();
    },1000);
  }
  private _stopTimer():void{if(this.timerInt){clearInterval(this.timerInt);this.timerInt=null;}}

  // ── Resize ─────────────────────────────────────────────────────────────────
  private _resizeCanvas():void{
    if(!this.canvas) return;
    const vw=Math.min(440,window.innerWidth*0.97)-32;
    const sc=vw/400;
    this.W=Math.round(vw); this.H=Math.round(240*sc);
    this.canvas.width=this.W; this.canvas.height=this.H;
    // Layout scaled
    this.jX=Math.round(58*sc);   this.jY=Math.round(218*sc);
    this.bkTopY=Math.round(105*sc); this.bkBotY=Math.round(168*sc);
    this.cnY=Math.round(218*sc);
    // Connie movement bounds
    this.connMinX=Math.round(200*sc);
    this.connMaxX=Math.round(355*sc);
    // Start Connie near right edge
    this.connX=Math.round(300*sc);
    this.cnX=Math.round(this.connX);
    this.bkX=Math.round(this.connX-62*sc);
    // Speed based on difficulty
    const diff=this.target?.difficulty??1;
    this.connSpeed=(50+diff*22)*sc;
  }

  // ── Cleanup ────────────────────────────────────────────────────────────────
  private _cleanup():void{
    this._stopTimer(); cancelAnimationFrame(this.rafId);
    document.getElementById('mmv4-ov')?.remove();
    this.overlay=null; this.canvas=null; this.ctx=null;
  }

  private _injectStyles():void{
    if(document.getElementById('mmv4-styles')) return;
    const s=document.createElement('style'); s.id='mmv4-styles';
    s.textContent=`
      @keyframes mm4Fade  { from{opacity:0}to{opacity:1} }
      @keyframes mm4Slide { from{opacity:0;transform:translateY(28px)scale(0.96)}to{opacity:1;transform:translateY(0)scale(1)} }
      @keyframes mm4TimerPulse { from{opacity:1}to{opacity:0.3} }
    `;
    document.head.appendChild(s);
  }
}
