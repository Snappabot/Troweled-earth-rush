/**
 * MarbellinoMixer — Cannon Aiming Mini-game
 *
 * Jose fires pigment shots from a cannon into a bucket — Angry Birds style.
 * Aim by dragging on the canvas. Arc preview shows the trajectory.
 * Connie stands next to the bucket mixing. She can get hit.
 *
 * Shot system: 1 shot = 1 formula unit.
 *   B / Y / L / G → whole shots   |   R → 1 shot = 0.1 units
 */

// ── Mixer formulas ────────────────────────────────────────────────────────────
interface MixerFormula {
  name: string;
  shots: { B:number; Y:number; L:number; R:number; G:number };
  hex: string;
  hint: string;
  difficulty: 1|2|3;
}

const MIXER_FORMULAS: MixerFormula[] = [
  { name:'Spanish White', shots:{B:1,Y:1,L:0,R:0,G:0}, hex:'#F8F4EC', difficulty:1, hint:'Minimal — barely any pigment' },
  { name:'Papercut',      shots:{B:1,Y:2,L:1,R:0,G:0}, hex:'#F0E8D0', difficulty:1, hint:'Double the Yellow, everything else even' },
  { name:'Tranquil',      shots:{B:2,Y:2,L:2,R:0,G:0}, hex:'#E4DAC0', difficulty:1, hint:'All three equal — balanced warm white' },
  { name:'Ivory',         shots:{B:3,Y:3,L:3,R:0,G:0}, hex:'#EDE0BC', difficulty:2, hint:'Classic — three equal shots each' },
  { name:'Bones',         shots:{B:3,Y:1,L:3,R:0,G:0}, hex:'#E8DFC8', difficulty:2, hint:'Like Ivory but drop Yellow to 1' },
  { name:'Bohemian',      shots:{B:3,Y:2,L:3,R:0,G:0}, hex:'#DDD0B0', difficulty:2, hint:'Between Ivory and Bones — Y at 2' },
  { name:'Sawtooth',      shots:{B:6,Y:2,L:6,R:0,G:0}, hex:'#D4C8A8', difficulty:3, hint:'Double the Black and Umber from Bones' },
  { name:'Atlas',         shots:{B:5,Y:10,L:5,R:0,G:0}, hex:'#D4B87A', difficulty:3, hint:'Heavy on Yellow — most of anything' },
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

const STORE='tem-mixer-v3';
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
  private timer=180;
  private timerInt:ReturnType<typeof setInterval>|null=null;
  private solved=false;
  private onDone:((pts:number)=>void)|null=null;

  // Canvas dimensions (set on build, scaled per device)
  private W=400; private H=240;

  // Layout positions (in native canvas px)
  private jX=58;  private jY=218;   // Jose feet
  private bkX=258; private bkTopY=105; private bkBotY=168; // bucket
  private cnX=322; private cnY=218;  // Connie feet

  private readonly GRAVITY=520;

  // Cannon
  private cannonTipX=0; private cannonTipY=0;
  private aimAngle=-0.78;   // radians
  private aimPower=360;
  private isAiming=false;
  private hasFired=false;   // has fired at least once this session

  // Active ball
  private ball:Ball|null=null;

  // Hit effects
  private splats:Splat[]=[];
  private connieHitT=0;     // countdown for hit react
  private bucketFlashT=0;

  // Mix
  private currentMix='#F8F6F0';
  private displayMix='#F8F6F0';
  private mixedResult='';
  private matchValue=0;
  private mixState:'idle'|'mixing'|'success'|'fail'='idle';
  private mixT=0;

  // UI
  private dotEls:Record<PKey,HTMLElement[]>={B:[],Y:[],L:[],R:[],G:[]};
  private timerEl:HTMLSpanElement|null=null;
  private fireBtn:HTMLButtonElement|null=null;
  private mixBtn:HTMLButtonElement|null=null;
  private pigBtns:Partial<Record<PKey,HTMLElement>>={};

  // ── Public ──────────────────────────────────────────────────────────────────
  show(onDone?:(pts:number)=>void):void{
    this._cleanup();
    this.solved=false; this.timer=180; this.shots={B:0,Y:0,L:0,R:0,G:0};
    this.sel='B'; this.ball=null; this.splats=[];
    this.connieHitT=0; this.bucketFlashT=0;
    this.currentMix='#F8F6F0'; this.displayMix='#F8F6F0';
    this.mixState='idle'; this.mixT=0; this.matchValue=0; this.mixedResult='';
    this.isAiming=false; this.hasFired=false;
    this.onDone=onDone??null;

    const solved=getSolved();
    const pool=(MIXER_FORMULAS.filter(f=>!solved.has(f.name)));
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
    ov.id='mmv3-ov';
    ov.style.cssText=`position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,0.9);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;animation:mm3Fade 0.2s ease both;`;
    document.body.appendChild(ov);
    this.overlay=ov;

    const panel=document.createElement('div');
    panel.style.cssText=`background:linear-gradient(170deg,#1c1814,#0e0c0a);border:1px solid rgba(200,168,106,0.22);border-radius:22px;width:min(440px,97vw);max-height:97vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.95);animation:mm3Slide 0.28s cubic-bezier(.4,0,.2,1) both;`;
    ov.appendChild(panel);

    // Header
    const hdr=document.createElement('div');
    hdr.style.cssText=`display:flex;align-items:flex-start;justify-content:space-between;padding:14px 16px 0;`;
    hdr.innerHTML=`<div><div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div><div style="color:#fff;font-size:18px;font-weight:900;">🎨 MARBELLINO MIXER</div><div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Aim the cannon — get the right shots in the bucket</div></div>`;
    const xBtn=document.createElement('button');
    xBtn.textContent='✕';
    xBtn.style.cssText=`background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;`;
    xBtn.addEventListener('click',()=>this._cleanup());
    hdr.appendChild(xBtn);
    panel.appendChild(hdr);

    // Target strip
    const trow=document.createElement('div');
    trow.style.cssText=`display:flex;align-items:center;gap:12px;padding:10px 16px 0;`;
    const tsw=document.createElement('div');
    tsw.style.cssText=`width:50px;height:50px;border-radius:10px;border:2px solid rgba(200,168,106,0.4);flex-shrink:0;background:${this.target!.hex};`;
    const tinfo=document.createElement('div');
    const stars='★'.repeat(this.target!.difficulty)+'☆'.repeat(3-this.target!.difficulty);
    tinfo.innerHTML=`<div style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:3px;">TARGET</div><div id="mmv3-name" style="color:#fff;font-size:17px;font-weight:900;">???</div><div style="color:#C8A86A;font-size:11px;">${stars}</div>`;
    trow.appendChild(tsw); trow.appendChild(tinfo);
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

    // Canvas touch events for aiming
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
    pigSec.style.cssText=`display:flex;flex-direction:column;gap:7px;padding:10px 16px 0;`;

    for(const p of PIGS){
      const k=p.key as PKey;
      const row=document.createElement('div');
      row.id=`mmv3-pig-${k}`;
      row.style.cssText=`display:flex;align-items:center;gap:9px;cursor:pointer;padding:5px 8px;border-radius:10px;border:1.5px solid transparent;transition:all 0.12s;`;

      const sw=document.createElement('div');
      sw.style.cssText=`width:18px;height:18px;border-radius:4px;background:${p.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;

      const lbl=document.createElement('div');
      lbl.style.cssText=`color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;width:82px;flex-shrink:0;`;
      lbl.textContent=p.label;

      const dots=document.createElement('div');
      dots.style.cssText=`display:flex;gap:3px;flex:1;align-items:center;flex-wrap:wrap;`;
      this.dotEls[k]=[];
      for(let i=0;i<Math.min(p.max,12);i++){
        const d=document.createElement('div');
        d.style.cssText=`width:11px;height:11px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.1);background:transparent;transition:background 0.1s;flex-shrink:0;`;
        dots.appendChild(d);
        this.dotEls[k].push(d);
      }

      const cnt=document.createElement('div');
      cnt.id=`mmv3-cnt-${k}`;
      cnt.style.cssText=`color:${p.dot};font-size:13px;font-weight:900;min-width:28px;text-align:right;font-variant-numeric:tabular-nums;`;
      cnt.textContent='0';

      row.appendChild(sw); row.appendChild(lbl); row.appendChild(dots); row.appendChild(cnt);
      row.addEventListener('click',()=>this._selectPig(k));
      pigSec.appendChild(row);
      this.pigBtns[k]=row;
    }
    panel.appendChild(pigSec);

    // Match bar
    const matchSec=document.createElement('div');
    matchSec.style.cssText=`padding:8px 16px 0;`;
    matchSec.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv3-pct" style="color:#C8A86A;font-size:15px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:7px;overflow:hidden;">
        <div id="mmv3-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s,background 0.3s;"></div>
      </div>
      <div id="mmv3-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:4px;min-height:15px;"></div>
    `;
    panel.appendChild(matchSec);

    // Bottom buttons
    const brow=document.createElement('div');
    brow.style.cssText=`display:flex;gap:9px;padding:10px 16px 16px;align-items:center;`;

    // Undo
    const undoBtn=document.createElement('button');
    undoBtn.textContent='⌫';
    undoBtn.title='Remove last shot';
    undoBtn.style.cssText=`background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4);font-size:17px;width:46px;height:50px;border-radius:12px;cursor:pointer;flex-shrink:0;touch-action:manipulation;`;
    undoBtn.addEventListener('click',()=>this._undoShot());

    // FIRE
    this.fireBtn=document.createElement('button');
    this.fireBtn.style.cssText=`flex:1;height:50px;border:none;border-radius:12px;font-size:14px;font-weight:900;letter-spacing:0.5px;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B2020,#5a1010);color:#FFaaaa;box-shadow:0 4px 16px rgba(200,30,30,0.25);transition:transform 0.1s;`;
    this.fireBtn.textContent='🔴 AIM FIRST';
    this.fireBtn.addEventListener('pointerdown',()=>{this.fireBtn!.style.transform='scale(0.97)';});
    this.fireBtn.addEventListener('pointerup',()=>{this.fireBtn!.style.transform='';this._fire();});

    // MIX
    this.mixBtn=document.createElement('button');
    this.mixBtn.style.cssText=`width:72px;height:50px;border:none;border-radius:12px;font-size:12px;font-weight:900;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B4A00,#5A3000);color:#FFD080;flex-shrink:0;box-shadow:0 4px 12px rgba(200,100,0,0.2);transition:transform 0.1s;`;
    this.mixBtn.textContent='🔩 MIX';
    this.mixBtn.addEventListener('pointerdown',()=>{this.mixBtn!.style.transform='scale(0.97)';});
    this.mixBtn.addEventListener('pointerup',()=>{this.mixBtn!.style.transform='';this._triggerMix();});

    // Timer
    const twrap=document.createElement('div');
    twrap.style.cssText=`display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;`;
    twrap.innerHTML=`<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>`;
    this.timerEl=document.createElement('span');
    this.timerEl.style.cssText=`color:#fff;font-size:16px;font-weight:900;font-variant-numeric:tabular-nums;`;
    this.timerEl.textContent='3:00';
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

    const dx=tx-this.jX;
    const dy=ty-this.jY;
    const angle=Math.atan2(dy,dx);
    // Clamp to upward-rightward angles only (cannon fires right and up)
    this.aimAngle=Math.max(-1.25, Math.min(-0.1, angle));
    const dist=Math.sqrt(dx*dx+dy*dy);
    this.aimPower=Math.max(220, Math.min(500, dist*2.2));

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
      // Haven't aimed yet
      if(this.fireBtn) this.fireBtn.textContent='← Drag canvas to aim!';
      return;
    }
    const pc=PIGS.find(p=>p.key===this.sel)!;
    if(this.shots[this.sel]>=pc.max){
      if(this.fireBtn){ const o=this.fireBtn.textContent;this.fireBtn.textContent=`MAX ${pc.max} shots!`;setTimeout(()=>{if(this.fireBtn)this.fireBtn.textContent=o||'💥 FIRE';},1200);}
      return;
    }
    // Compute cannon tip
    const canL=34;
    const tipX=this.jX+canL*Math.cos(this.aimAngle);
    const tipY=(this.jY-52)+canL*Math.sin(this.aimAngle);
    this.cannonTipX=tipX; this.cannonTipY=tipY;
    const vx=this.aimPower*Math.cos(this.aimAngle);
    const vy=this.aimPower*Math.sin(this.aimAngle);
    const pigColor=pc.dot;
    this.ball={x:tipX,y:tipY,vx,vy,r:7,color:pigColor,pigKey:this.sel};
    this.hasFired=true;
    if(this.fireBtn) this.fireBtn.textContent='🔴 IN FLIGHT…';
  }

  private _selectPig(key:PKey):void{
    this.sel=key;
    const pc=PIGS.find(p=>p.key===key)!;
    for(const p of PIGS){
      const el=this.pigBtns[p.key as PKey] as HTMLElement|undefined;
      if(!el) continue;
      if(p.key===key){
        el.style.borderColor=pc.dot;
        el.style.background=pc.color+'22';
      }else{
        el.style.borderColor='transparent';
        el.style.background='transparent';
      }
    }
    if(this.fireBtn&&!this.ball){
      this.fireBtn.textContent=`💥 FIRE ${pc.label.slice(0,3).toUpperCase()}`;
      this.fireBtn.style.background='linear-gradient(135deg,#CC2222,#882020)';
      this.fireBtn.style.color='#fff';
    }
  }

  private _undoShot():void{
    if(this.ball||this.mixState==='mixing') return;
    if(this.shots[this.sel]>0){
      this.shots[this.sel]--;
      this._refreshDots();
      this.currentMix=computeMix(this.shots);
    }
  }

  private _refreshDots():void{
    for(const p of PIGS){
      const k=p.key as PKey;
      const v=this.shots[k];
      this.dotEls[k].forEach((d,i)=>{
        d.style.background=i<v?p.dot:'transparent';
        d.style.borderColor=i<v?p.dot+'88':'rgba(255,255,255,0.1)';
      });
      const c=document.getElementById(`mmv3-cnt-${k}`);
      if(c) c.textContent=String(v);
    }
  }

  // ── Physics update ──────────────────────────────────────────────────────────
  private _update(dt:number):void{
    // Lerp display mix
    const[mr,mg,mb]=hexRgb(this.currentMix);
    const[dr,dg,db]=hexRgb(this.displayMix);
    const spd=this.mixState==='mixing'?5:1.8;
    this.displayMix=rgbHex(dr+(mr-dr)*spd*dt,dg+(mg-dg)*spd*dt,db+(mb-db)*spd*dt);

    // Splats
    for(let i=this.splats.length-1;i>=0;i--){
      this.splats[i].t+=dt;
      if(this.splats[i].t>this.splats[i].maxT) this.splats.splice(i,1);
    }
    if(this.connieHitT>0) this.connieHitT-=dt;
    if(this.bucketFlashT>0) this.bucketFlashT-=dt;

    // Mix animation
    if(this.mixState==='mixing'){
      this.mixT+=dt;
      if(this.mixT>2.2) this._onMixDone();
    }
    if(this.mixState==='success'||this.mixState==='fail') this.mixT+=dt;

    // Ball physics
    if(!this.ball) return;
    this.ball.x+=this.ball.vx*dt;
    this.ball.y+=this.ball.vy*dt;
    this.ball.vy+=this.GRAVITY*dt;

    // Hit bucket (enter from above into opening)
    const bk=this.ball;
    const inBucketX=Math.abs(bk.x-this.bkX)<26;
    const inBucketY=bk.y>this.bkTopY&&bk.y<this.bkBotY;
    if(inBucketX&&inBucketY){
      this._hitBucket();
      return;
    }

    // Hit Connie
    const inConnieX=Math.abs(bk.x-this.cnX)<20;
    const inConnieY=bk.y>(this.cnY-95)&&bk.y<this.cnY;
    if(inConnieX&&inConnieY){
      this._hitConnie();
      return;
    }

    // Off canvas
    if(bk.y>this.H+10||bk.x>this.W+10||bk.y<-20){
      this.ball=null;
      this._resetFireBtn();
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
      this.bucketFlashT=0.6;
    }
    // Splash at impact
    for(let i=0;i<12;i++){
      const ang=Math.random()*Math.PI*2;
      const spd=20+Math.random()*50;
      this.splats.push({x:this.bkX+(Math.random()-0.5)*30,y:this.bkTopY+10+Math.random()*20,color:this.ball.color,t:0,maxT:0.8+Math.random()*0.5});
    }
    this.ball=null;
    this._resetFireBtn();
  }

  private _hitConnie():void{
    if(!this.ball) return;
    this.connieHitT=1.8;
    // Splat on Connie
    for(let i=0;i<18;i++){
      this.splats.push({x:this.ball.x+(Math.random()-0.5)*25,y:this.ball.y+(Math.random()-0.5)*25,color:this.ball.color,t:0,maxT:1.0+Math.random()*0.6});
    }
    // Connie yells
    const shout=document.getElementById('mmv3-hint');
    if(shout){
      const lines=['JOSE!!! 😤','WATCH IT!!! 😡','OMG!!! 🤬','JOSE YOU IDIOT! 😤','HEY! THAT\'S MY UNIFORM!'];
      shout.textContent=lines[Math.floor(Math.random()*lines.length)];
      shout.style.color='#FF6644';
      setTimeout(()=>{if(shout){shout.textContent='';shout.style.color='rgba(200,168,106,0.4)';}},2000);
    }
    this.ball=null;
    this._resetFireBtn();
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
    if(total===0){const h=document.getElementById('mmv3-hint');if(h){h.textContent='Get some shots in the bucket first!';setTimeout(()=>{if(h)h.textContent='';},1800);}return;}
    if(this.ball){this.ball=null;}
    this.mixState='mixing';
    this.mixT=0;
    this.mixedResult=computeMix(this.shots);
    this.matchValue=matchPct(this.mixedResult,this.target!.hex);
    if(this.mixBtn){this.mixBtn.style.background='linear-gradient(135deg,#226622,#144414)';this.mixBtn.style.color='#88FFcc';this.mixBtn.textContent='⚙️ …';}
    if(this.fireBtn){this.fireBtn.disabled=true;}
  }

  private _onMixDone():void{
    const pct=this.matchValue;
    const bar=document.getElementById('mmv3-bar');
    const pctEl=document.getElementById('mmv3-pct');
    const hint=document.getElementById('mmv3-hint');
    if(bar){bar.style.width=`${pct}%`;bar.style.background=pct>=82?'linear-gradient(90deg,#44DD88,#88FFCC)':pct>=55?'linear-gradient(90deg,#C8A86A,#FFD080)':'linear-gradient(90deg,#882222,#CC4433)';}
    if(pctEl){pctEl.textContent=`${pct}%`;pctEl.style.color=pct>=82?'#44DD88':pct>=55?'#C8A86A':'#FF6644';}

    if(pct>=82){
      this._triggerSuccess(pct);
    }else{
      this.mixState='idle';
      if(hint) hint.textContent=pct>=65?`Getting close — try adjusting the shots`:`Not quite — clear and try again`;
      if(this.mixBtn){this.mixBtn.style.background='linear-gradient(135deg,#8B4A00,#5A3000)';this.mixBtn.style.color='#FFD080';this.mixBtn.textContent='🔩 MIX';}
      if(this.fireBtn){this.fireBtn.disabled=false;}
    }
  }

  private _triggerSuccess(pct:number):void{
    if(this.solved) return;
    this.solved=true;
    this._stopTimer();
    markSolved(this.target!.name);
    this.mixState='success';
    this.mixT=0;

    const nameEl=document.getElementById('mmv3-name');
    if(nameEl){nameEl.textContent=this.target!.name;nameEl.style.color='#44DD88';}
    const hint=document.getElementById('mmv3-hint');
    if(hint){
      const f=PIGS.filter(p=>this.target!.shots[p.key as PKey]>0).map(p=>`${p.key}=${this.target!.shots[p.key as PKey]}`).join(' · ');
      hint.textContent=`✓ ${f}   (${getSolved().size}/${MIXER_FORMULAS.length} cracked)`;
      hint.style.color='#44DD8888';
    }
    if(this.mixBtn){this.mixBtn.textContent='🏆 CRACKED!';this.mixBtn.style.background='linear-gradient(135deg,#2a8a44,#1a6030)';this.mixBtn.style.color='#88FFcc';this.mixBtn.disabled=true;}
    if(this.fireBtn){this.fireBtn.disabled=true;}

    const pts=Math.round(((pct-82)/18)*40);
    setTimeout(()=>{this._cleanup();this.onDone?.(pts);},4500);
  }

  private _triggerTimeout():void{
    if(this.solved) return;
    this._stopTimer();
    this.mixState='fail'; this.mixT=0;
    if(this.timerEl){this.timerEl.textContent='0:00';this.timerEl.style.color='#FF4444';}
    const nameEl=document.getElementById('mmv3-name');
    if(nameEl){nameEl.textContent=`${this.target!.name} (answer)`;nameEl.style.color='#FF8866';}
    if(this.mixBtn){this.mixBtn.disabled=false;this.mixBtn.style.background='rgba(100,30,20,0.9)';this.mixBtn.style.color='#FF9988';this.mixBtn.textContent='Close';this.mixBtn.addEventListener('click',()=>{this._cleanup();this.onDone?.(0);},{once:true});}
  }

  // ── Render ──────────────────────────────────────────────────────────────────
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

    // Workshop BG
    const bg=ctx.createLinearGradient(0,0,0,H);
    bg.addColorStop(0,'#1e1610'); bg.addColorStop(1,'#090704');
    ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

    // Subtle wall texture lines
    ctx.strokeStyle='rgba(255,255,255,0.03)'; ctx.lineWidth=1;
    for(let yy=20;yy<H;yy+=22){ctx.beginPath();ctx.moveTo(0,yy);ctx.lineTo(W,yy);ctx.stroke();}

    // Floor
    ctx.fillStyle='rgba(200,168,106,0.08)'; ctx.fillRect(0,H-18,W,18);
    ctx.strokeStyle='rgba(200,168,106,0.2)'; ctx.lineWidth=1;
    ctx.beginPath();ctx.moveTo(0,H-18);ctx.lineTo(W,H-18);ctx.stroke();

    // Entities
    this._drawBucket(ctx,W,H);
    this._drawConnie(ctx,W,H);
    this._drawJose(ctx,W,H);

    // Arc preview
    if(this.isAiming&&!this.ball) this._drawArcPreview(ctx);

    // Ball
    if(this.ball) this._drawBall(ctx);

    // Splats
    this._drawSplats(ctx);
  }

  private _drawBucket(ctx:CanvasRenderingContext2D,W:number,H:number):void{
    const cx=this.bkX; const top=this.bkTopY; const bot=this.bkBotY;
    const bkH=bot-top;
    const topW=54; const botW=38;

    ctx.save();

    // Clip to bucket interior
    ctx.beginPath();
    ctx.moveTo(cx-topW/2,top); ctx.lineTo(cx+topW/2,top);
    ctx.lineTo(cx+botW/2,bot); ctx.lineTo(cx-botW/2,bot);
    ctx.closePath(); ctx.clip();

    // White plaster base
    ctx.fillStyle='#F5F0E8'; ctx.fill();

    // Color fill rises with shots
    const total=Object.values(this.shots).reduce((a,b)=>a+b,0);
    const frac=Math.min(1,total/22);
    if(frac>0){
      const fillTop=bot-bkH*frac;
      const wAtFill=botW+(topW-botW)*frac;
      ctx.beginPath();
      ctx.moveTo(cx-wAtFill/2,fillTop); ctx.lineTo(cx+wAtFill/2,fillTop);
      ctx.lineTo(cx+botW/2,bot); ctx.lineTo(cx-botW/2,bot);
      ctx.closePath();
      ctx.fillStyle=this.displayMix;
      ctx.fill();

      // Surface ripple
      ctx.strokeStyle='rgba(255,255,255,0.28)'; ctx.lineWidth=2;
      ctx.beginPath();
      const rT=performance.now()/1000;
      ctx.moveTo(cx-wAtFill/2+4,fillTop+2);
      ctx.bezierCurveTo(cx-wAtFill/4,fillTop-2+Math.sin(rT*2)*2,cx+wAtFill/4,fillTop+3+Math.sin(rT*2+1)*2,cx+wAtFill/2-4,fillTop+2);
      ctx.stroke();
    }

    // Mixing swirl
    if(this.mixState==='mixing'){
      const t=this.mixT;
      for(let i=0;i<4;i++){
        const a=t*8+i*(Math.PI*2/4);
        const sr=12+Math.sin(t*4+i)*5;
        ctx.beginPath();
        ctx.arc(cx+Math.cos(a)*sr,bot-bkH*0.35+Math.sin(a)*sr*0.35,4,0,Math.PI*2);
        ctx.fillStyle=`rgba(255,255,255,${0.12+Math.sin(a)*0.06})`;
        ctx.fill();
      }
    }

    ctx.restore();

    // Outline
    const flashAlpha=this.bucketFlashT>0?0.7+Math.sin(this.bucketFlashT*30)*0.3:0.5;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx-topW/2,top); ctx.lineTo(cx+topW/2,top);
    ctx.lineTo(cx+botW/2,bot); ctx.lineTo(cx-botW/2,bot);
    ctx.closePath();
    ctx.strokeStyle=this.mixState==='success'?`rgba(68,221,136,${flashAlpha})`:`rgba(200,168,106,${flashAlpha})`;
    ctx.lineWidth=2.5; ctx.stroke();

    // Rim
    ctx.beginPath();
    ctx.ellipse(cx,top,topW/2,5.5,0,0,Math.PI*2);
    ctx.strokeStyle='rgba(200,168,106,0.65)'; ctx.lineWidth=2; ctx.stroke();
    ctx.fillStyle='rgba(220,190,140,0.12)'; ctx.fill();

    // Handle
    ctx.beginPath(); ctx.arc(cx,top-3,topW/2-5,Math.PI,0);
    ctx.strokeStyle='#A08050'; ctx.lineWidth=3; ctx.stroke();

    // TEM label
    ctx.font=`bold 10px system-ui`; ctx.fillStyle='rgba(200,168,106,0.5)';
    ctx.textAlign='center'; ctx.fillText('TEM',cx,bot-bkH*0.4);
    ctx.textAlign='start';
    ctx.restore();
  }

  private _drawConnie(ctx:CanvasRenderingContext2D,W:number,H:number):void{
    const cx=this.cnX; const cy=this.cnY;
    const skin='#F0C8A0'; const shirt='#111';
    const bh=88;
    const hit=this.connieHitT>0;
    const offsetX=hit?Math.sin(this.connieHitT*20)*4:0;
    const mixing=this.mixState==='mixing';
    const success=this.mixState==='success';

    ctx.save();
    ctx.translate(offsetX,0);

    // Boots
    ctx.fillStyle='#111';
    ctx.fillRect(cx-10,cy-12,10,12); ctx.fillRect(cx+2,cy-12,10,12);

    // Pants
    ctx.fillStyle='#1a1a2a';
    ctx.fillRect(cx-9,cy-bh*0.44,9,bh*0.44-10); ctx.fillRect(cx+2,cy-bh*0.44,9,bh*0.44-10);

    // Shirt
    ctx.fillStyle=shirt; ctx.fillRect(cx-12,cy-bh*0.8,24,bh*0.37);

    // Neck + head
    ctx.fillStyle=skin;
    ctx.fillRect(cx-4,cy-bh*0.84,8,bh*0.055);
    ctx.beginPath(); ctx.arc(cx,cy-bh*0.87,bh*0.08,0,Math.PI*2); ctx.fill();

    // Wild blonde hair
    ctx.fillStyle='#D4B840';
    ctx.beginPath(); ctx.arc(cx,cy-bh*0.87-bh*0.04,bh*0.10,Math.PI,0); ctx.fill();
    ctx.fillRect(cx-bh*0.10,cy-bh*0.87,bh*0.20,bh*0.13);
    // Extra flyaway strands
    ctx.strokeStyle='#FFE070'; ctx.lineWidth=2.5; ctx.lineCap='round';
    ctx.beginPath(); ctx.moveTo(cx-8,cy-bh*0.87); ctx.quadraticCurveTo(cx-18,cy-bh*0.92,cx-14,cy-bh*0.98); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(cx+6,cy-bh*0.87); ctx.quadraticCurveTo(cx+16,cy-bh*0.91,cx+12,cy-bh*0.96); ctx.stroke();
    ctx.lineCap='butt';

    // Connie's drill arm (toward bucket when mixing, relaxed otherwise)
    const drillX=this.bkX+30; const drillY=this.bkTopY-10;
    const armAngle=Math.atan2(drillY-(cy-bh*0.7),drillX-cx);
    const armActive=mixing||success;
    const spinAngle=armActive?performance.now()/80:0;

    ctx.strokeStyle=shirt; ctx.lineWidth=8; ctx.lineCap='round';
    if(armActive){
      ctx.beginPath();
      ctx.moveTo(cx-10,cy-bh*0.72);
      ctx.quadraticCurveTo(cx-20,cy-bh*0.60,drillX-20,drillY+5);
      ctx.stroke();
      // Drill body
      ctx.save();
      ctx.translate(drillX-22,drillY+4);
      ctx.rotate(armAngle);
      ctx.fillStyle='#333'; ctx.strokeStyle='#666'; ctx.lineWidth=1;
      ctx.beginPath(); ctx.roundRect(-26,-6,34,12,3); ctx.fill(); ctx.stroke();
      ctx.fillStyle='#555'; ctx.fillRect(-30,-4,6,8);
      ctx.strokeStyle='#aaa'; ctx.lineWidth=2; ctx.lineCap='round';
      ctx.beginPath(); ctx.moveTo(-30,0); ctx.lineTo(-42,0); ctx.stroke();
      ctx.lineCap='butt';
      // Spinning glow
      ctx.save(); ctx.translate(-42,0); ctx.rotate(spinAngle);
      const g=ctx.createRadialGradient(0,0,0,0,0,11);
      g.addColorStop(0,`rgba(200,168,106,0.7)`); g.addColorStop(1,'transparent');
      ctx.fillStyle=g; ctx.beginPath(); ctx.arc(0,0,11,0,Math.PI*2); ctx.fill();
      ctx.strokeStyle='#FFD080'; ctx.lineWidth=2;
      for(let a=0;a<Math.PI*2;a+=Math.PI/2){ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(Math.cos(a)*8,Math.sin(a)*8);ctx.stroke();}
      ctx.restore(); ctx.restore();
    }else{
      // Relaxed arm
      ctx.beginPath(); ctx.moveTo(cx-10,cy-bh*0.72); ctx.lineTo(cx-16,cy-bh*0.48); ctx.stroke();
      ctx.beginPath(); ctx.arc(cx-16,cy-bh*0.47,4.5,0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    }

    // Right arm relaxed
    ctx.strokeStyle=shirt; ctx.lineWidth=8;
    ctx.beginPath(); ctx.moveTo(cx+10,cy-bh*0.72); ctx.lineTo(cx+16,cy-bh*0.48); ctx.stroke();
    ctx.beginPath(); ctx.arc(cx+16,cy-bh*0.47,4.5,0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    ctx.lineCap='butt';

    // Hit indicator
    if(hit){
      ctx.font='bold 11px system-ui'; ctx.fillStyle='#FF4422';
      ctx.textAlign='center'; ctx.fillText('JOSE!!! 😤',cx,cy-bh-6);
      ctx.textAlign='start';
    }

    // Name tag
    ctx.font='bold 8px system-ui'; ctx.fillStyle='rgba(255,200,80,0.65)';
    ctx.textAlign='center'; ctx.fillText('CONNIE',cx,cy+10); ctx.textAlign='start';
    ctx.restore();
  }

  private _drawJose(ctx:CanvasRenderingContext2D,W:number,H:number):void{
    const jx=this.jX; const jy=this.jY;
    const skin='#C88060'; const shirt='#111';
    const bh=90;
    const canL=34;

    // Compute cannon tip
    const tipX=jx+canL*Math.cos(this.aimAngle);
    const tipY=(jy-52)+canL*Math.sin(this.aimAngle);
    this.cannonTipX=tipX; this.cannonTipY=tipY;

    // ── Cannon ──────────────────────────────────────────────────────────────
    ctx.save();
    ctx.translate(jx,jy-52);
    ctx.rotate(this.aimAngle);

    // Cannon barrel
    const brl=ctx.createLinearGradient(0,-9,0,9);
    brl.addColorStop(0,'#444'); brl.addColorStop(0.5,'#777'); brl.addColorStop(1,'#333');
    ctx.fillStyle=brl;
    ctx.beginPath(); ctx.roundRect(0,-9,canL,18,4); ctx.fill();
    ctx.strokeStyle='#222'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.roundRect(0,-9,canL,18,4); ctx.stroke();
    // Muzzle ring
    ctx.fillStyle='#888';
    ctx.beginPath(); ctx.ellipse(canL,0,5,9,0,0,Math.PI*2); ctx.fill();
    // Barrel bands
    ctx.strokeStyle='#555'; ctx.lineWidth=3;
    [10,20].forEach(bx=>{ctx.beginPath();ctx.moveTo(bx,-9);ctx.lineTo(bx,9);ctx.stroke();});
    ctx.restore();

    // Cannon mount/wheel
    ctx.fillStyle='#3a2a1a';
    ctx.beginPath(); ctx.roundRect(jx-6,jy-62,16,18,3); ctx.fill();
    ctx.beginPath(); ctx.arc(jx+4,jy-50,8,0,Math.PI*2);
    ctx.fillStyle='#555'; ctx.fill();
    ctx.strokeStyle='#888'; ctx.lineWidth=1.5; ctx.stroke();
    // Wheel spokes
    ctx.strokeStyle='#333'; ctx.lineWidth=1.5;
    for(let a=0;a<Math.PI*2;a+=Math.PI/3){ctx.beginPath();ctx.moveTo(jx+4,jy-50);ctx.lineTo(jx+4+Math.cos(a)*7,jy-50+Math.sin(a)*7);ctx.stroke();}

    // Muzzle flash when ball just fired
    if(this.ball&&Math.sqrt((this.ball.x-tipX)**2+(this.ball.y-tipY)**2)<40){
      ctx.save();
      ctx.globalAlpha=0.8;
      const gf=ctx.createRadialGradient(tipX,tipY,0,tipX,tipY,18);
      gf.addColorStop(0,'rgba(255,200,50,0.9)'); gf.addColorStop(1,'transparent');
      ctx.fillStyle=gf;
      ctx.beginPath(); ctx.arc(tipX,tipY,18,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }

    // ── Jose body ───────────────────────────────────────────────────────────
    // Boots
    ctx.fillStyle='#0a0a0a';
    ctx.fillRect(jx-10,jy-12,10,12); ctx.fillRect(jx+2,jy-12,10,12);

    // Pants
    ctx.fillStyle='#1a1a2a';
    ctx.fillRect(jx-9,jy-bh*0.44,9,bh*0.44-10); ctx.fillRect(jx+2,jy-bh*0.44,9,bh*0.44-10);

    // Shirt
    ctx.fillStyle=shirt; ctx.fillRect(jx-12,jy-bh*0.80,24,bh*0.37);

    // Neck
    ctx.fillStyle=skin; ctx.fillRect(jx-4,jy-bh*0.84,8,bh*0.055);

    // ── Head & Dreadlocks ──────────────────────────────────────────────────
    const headY=jy-bh*0.88;
    const headR=bh*0.08;

    // Dreadlocks BEHIND head first
    const dreads=[
      {dx:-9,swing:-4,len:32},{dx:-5,swing:-2,len:38},{dx:-1,swing:2,len:35},
      {dx:3,swing:3,len:28},{dx:7,swing:1,len:24},{dx:-12,swing:-6,len:22},
    ];
    ctx.lineCap='round';
    dreads.forEach((d,i)=>{
      ctx.strokeStyle=i%2===0?'#2a1000':'#3a1a00';
      ctx.lineWidth=5;
      ctx.beginPath();
      ctx.moveTo(jx+d.dx,headY-headR*0.3);
      ctx.bezierCurveTo(
        jx+d.dx+d.swing*0.5,headY+d.len*0.35,
        jx+d.dx+d.swing,headY+d.len*0.7,
        jx+d.dx+d.swing*0.8+Math.sin(i)*2,headY+d.len
      );
      ctx.stroke();
    });
    ctx.lineCap='butt';

    // Head (skin, over dreads)
    ctx.fillStyle=skin;
    ctx.beginPath(); ctx.arc(jx,headY,headR,0,Math.PI*2); ctx.fill();

    // Face: eyes, expression
    ctx.fillStyle='#3a1a00';
    ctx.beginPath(); ctx.arc(jx-3,headY-2,2,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(jx+3,headY-2,2,0,Math.PI*2); ctx.fill();
    // Grin
    ctx.strokeStyle='#8a4820'; ctx.lineWidth=1.5;
    ctx.beginPath(); ctx.arc(jx,headY+2,4,0.2,Math.PI-0.2); ctx.stroke();

    // Forehead band (dread tie)
    ctx.strokeStyle='#8B4A00'; ctx.lineWidth=3.5;
    ctx.beginPath(); ctx.arc(jx,headY,headR*1.05,Math.PI*0.75,Math.PI*1.85); ctx.stroke();

    // Arms (operating cannon with right arm)
    ctx.strokeStyle=shirt; ctx.lineWidth=8; ctx.lineCap='round';
    // Right arm holds cannon mount
    ctx.beginPath(); ctx.moveTo(jx+10,jy-bh*0.72); ctx.quadraticCurveTo(jx+16,jy-bh*0.58,jx+10,jy-52+4); ctx.stroke();
    ctx.beginPath(); ctx.arc(jx+10,jy-49,4.5,0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    // Left arm relaxed
    ctx.strokeStyle=shirt; ctx.lineWidth=8;
    ctx.beginPath(); ctx.moveTo(jx-10,jy-bh*0.72); ctx.lineTo(jx-16,jy-bh*0.48); ctx.stroke();
    ctx.beginPath(); ctx.arc(jx-16,jy-bh*0.47,4.5,0,Math.PI*2); ctx.fillStyle=skin; ctx.fill();
    ctx.lineCap='butt';

    // Name tag
    ctx.font='bold 8px system-ui'; ctx.fillStyle='rgba(255,220,100,0.65)';
    ctx.textAlign='center'; ctx.fillText('JOSE',jx,jy+10); ctx.textAlign='start';
  }

  private _drawArcPreview(ctx:CanvasRenderingContext2D):void{
    const pc=PIGS.find(p=>p.key===this.sel)!;
    const vx=this.aimPower*Math.cos(this.aimAngle);
    const vy=this.aimPower*Math.sin(this.aimAngle);
    const sx=this.cannonTipX; const sy=this.cannonTipY;

    ctx.save();
    for(let i=0;i<28;i++){
      const t=i*0.055;
      const px=sx+vx*t;
      const py=sy+vy*t+0.5*this.GRAVITY*t*t;
      if(py>this.H||px>this.W) break;
      const alpha=0.7-i*0.022;
      ctx.globalAlpha=Math.max(0,alpha);
      ctx.fillStyle=pc.dot;
      ctx.shadowColor=pc.dot; ctx.shadowBlur=6;
      ctx.beginPath(); ctx.arc(px,py,3-i*0.06,0,Math.PI*2); ctx.fill();
    }
    ctx.shadowBlur=0; ctx.globalAlpha=1; ctx.restore();
  }

  private _drawBall(ctx:CanvasRenderingContext2D):void{
    if(!this.ball) return;
    const b=this.ball;
    ctx.save();
    ctx.shadowColor=b.color; ctx.shadowBlur=12;
    ctx.fillStyle=b.color;
    ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fill();
    // Highlight
    ctx.globalAlpha=0.5; ctx.fillStyle='rgba(255,255,255,0.7)';
    ctx.beginPath(); ctx.arc(b.x-2,b.y-2,b.r*0.4,0,Math.PI*2); ctx.fill();
    ctx.shadowBlur=0; ctx.globalAlpha=1; ctx.restore();
  }

  private _drawSplats(ctx:CanvasRenderingContext2D):void{
    for(const s of this.splats){
      const alpha=(1-s.t/s.maxT)*0.8;
      ctx.save();
      ctx.globalAlpha=Math.max(0,alpha);
      ctx.fillStyle=s.color;
      const r=4+s.t*8;
      ctx.beginPath(); ctx.arc(s.x,s.y,r,0,Math.PI*2); ctx.fill();
      ctx.restore();
    }
  }

  // ── Timer ─────────────────────────────────────────────────────────────────
  private _startTimer():void{
    this.timerInt=setInterval(()=>{
      if(this.solved) return;
      this.timer--;
      if(this.timerEl){
        const m=Math.floor(this.timer/60); const s=this.timer%60;
        this.timerEl.textContent=`${m}:${s.toString().padStart(2,'0')}`;
        if(this.timer<=30) this.timerEl.style.color='#FF6644';
        if(this.timer<=10) this.timerEl.style.animation='mm3TimerPulse 0.5s ease infinite alternate';
      }
      if(this.timer<=0) this._triggerTimeout();
    },1000);
  }
  private _stopTimer():void{if(this.timerInt){clearInterval(this.timerInt);this.timerInt=null;}}

  // ── Canvas resize ─────────────────────────────────────────────────────────
  private _resizeCanvas():void{
    if(!this.canvas) return;
    const vw=Math.min(440,window.innerWidth*0.97)-32;
    const scale=vw/400;
    this.W=Math.round(vw); this.H=Math.round(240*scale);
    this.canvas.width=this.W; this.canvas.height=this.H;
    // Scaled layout
    this.jX=Math.round(58*scale); this.jY=Math.round(218*scale);
    this.bkX=Math.round(258*scale); this.bkTopY=Math.round(105*scale); this.bkBotY=Math.round(168*scale);
    this.cnX=Math.round(322*scale); this.cnY=Math.round(218*scale);
  }

  // ── Cleanup & styles ──────────────────────────────────────────────────────
  private _cleanup():void{
    this._stopTimer(); cancelAnimationFrame(this.rafId);
    document.getElementById('mmv3-ov')?.remove();
    this.overlay=null; this.canvas=null; this.ctx=null;
  }

  private _injectStyles():void{
    if(document.getElementById('mmv3-styles')) return;
    const s=document.createElement('style'); s.id='mmv3-styles';
    s.textContent=`
      @keyframes mm3Fade  { from{opacity:0}to{opacity:1} }
      @keyframes mm3Slide { from{opacity:0;transform:translateY(28px)scale(0.96)}to{opacity:1;transform:translateY(0)scale(1)} }
      @keyframes mm3TimerPulse { from{opacity:1}to{opacity:0.3} }
    `;
    document.head.appendChild(s);
  }
}
