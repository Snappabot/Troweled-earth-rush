/**
 * IntroSequence — GTA-style cinematic intro
 * Fully animated canvas scenes per character, particles, film grain, camera pan.
 * Real theme song plays throughout.
 */

import { AUDIO } from '../audio/AudioAssets';

const BASE_URL: string = ((import.meta as any).env?.BASE_URL as string) || '/';
const WHITE_LOGO  = `${BASE_URL}tem-logo-white.jpg`;

// ── Scene definitions ─────────────────────────────────────────────────────────
interface Scene {
  id: string;
  name: string;
  role: string;
  line: string;
  accentColor: string;
  skyTop: string;
  skyBot: string;
  particleColor: string;
  particleKind: 'sparks' | 'dust' | 'smoke' | 'none';
  buildingTint: string;
  spotColor: string;
  voiceChar: string;
  durationMs?: number;    // override per-scene (default = SCENE_MS)
  heroReveal?: boolean;   // true = dramatic final reveal treatment
}

const SCENES: Scene[] = [
  {
    id: 'melbourne',
    name: 'TROWELED EARTH MELBOURNE',
    role: 'presents',
    line: '',
    accentColor: '#C8A86A',
    skyTop: '#040810', skyBot: '#102040',
    particleColor: '#C8A86A', particleKind: 'dust',
    buildingTint: '#182840',  spotColor: '#C8A86A33',
    voiceChar: 'Narrator',
  },
  {
    id: 'matt',
    name: 'MATT',
    role: 'The Warlord · Lead Plasterer',
    line: "I can be any type of Matt, but I prefer the Diplomatt!",
    accentColor: '#FF3355',
    skyTop: '#8A0010', skyBot: '#CC0030',   // bright crimson
    particleColor: '#FF5070', particleKind: 'sparks',
    buildingTint: '#440010',  spotColor: '#FF335555',
    voiceChar: 'Matt',
  },
  {
    id: 'tsuyoshi',
    name: 'TSUYOSHI',
    role: 'The Samurai · Tadelakt Specialist',
    line: "I no like bug. Where is... da respect!",
    accentColor: '#00DD88',
    skyTop: '#005530', skyBot: '#009958',   // bright green
    particleColor: '#60FFB0', particleKind: 'dust',
    buildingTint: '#003322',  spotColor: '#00DD8855',
    voiceChar: 'Tsuyoshi',
  },
  {
    id: 'connie',
    name: 'CONNIE',
    role: 'Operations Queen · Born in Germany',
    line: "I'll crush all of you!!! Hahahahahaha!",
    accentColor: '#FFB030',
    skyTop: '#884400', skyBot: '#CC7700',   // bright amber
    particleColor: '#FFD060', particleKind: 'smoke',
    buildingTint: '#442200',  spotColor: '#FFB03055',
    voiceChar: 'Connie',
  },
  {
    id: 'jarrad',
    name: 'JARRAD',
    role: 'Scaffold Specialist · Topknot Philosopher',
    line: "My plan is convince everyone I have a plan, tho I do not.... Did you get any of that?",
    accentColor: '#8866FF',
    skyTop: '#220066', skyBot: '#4400AA',   // bright purple
    particleColor: '#AA88FF', particleKind: 'dust',
    buildingTint: '#110033',  spotColor: '#8866FF55',
    voiceChar: 'Jarrad',
  },
  {
    id: 'fabio',
    name: 'FABIO',
    role: 'Plasterer · Pizza Consultant',
    line: "Come, we can have pizza. Andiamo, fa presto!",
    accentColor: '#FF7722',
    skyTop: '#883300', skyBot: '#CC5500',   // bright burnt orange
    particleColor: '#FFAa40', particleKind: 'smoke',
    buildingTint: '#441A00',  spotColor: '#FF772255',
    voiceChar: 'Fabio',
  },
  {
    id: 'joe',
    name: 'JOE',
    role: 'The Wildcard · Knows Too Much',
    line: "Y'all seen that Epstein list? So many chosen people! And Trump!",
    accentColor: '#F0C000',
    skyTop: '#3A3000', skyBot: '#887700',
    particleColor: '#FFE040', particleKind: 'sparks',
    buildingTint: '#1A1600', spotColor: '#F0C00055',
    voiceChar: 'Joe',
  },
  {
    id: 'phil',
    name: 'PHIL',
    role: 'The Quiet Legend · Renders',
    line: "I get asked to 'fill me crack in?' I don't get it...",
    accentColor: '#44CCCC',
    skyTop: '#004444', skyBot: '#007777',   // bright teal
    particleColor: '#88FFFF', particleKind: 'dust',
    buildingTint: '#002222',  spotColor: '#44CCCC55',
    voiceChar: 'Phil',
  },
  // ── JOSE — THE FINAL REVEAL. THE HEART OF TEM. ─────────────────────────────
  {
    id: 'jose',
    name: 'JOSE GARCIA',
    role: 'THE HEART OF TROWELED EARTH · El Maestro',
    line: "Some people call me Wall Jesus... They're not wrong.",
    accentColor: '#FFD700',
    skyTop: '#1A0040', skyBot: '#FF8C00',   // dramatic purple-to-gold sunrise
    particleColor: '#FFD700', particleKind: 'sparks',
    buildingTint: '#1A0020',  spotColor: '#FFD70066',
    voiceChar: 'Jose',
    durationMs: 14000,   // longer — this is THE moment
    heroReveal: true,
  },
];

const SCENE_MS   = 8000;   // ms per character scene
const OPEN_MS    = 8000;   // opening city shot
const TITLE_MS   = 5000;   // title hold
const FADE_MS    = 350;

// ── Particle ──────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number; alpha: number;
}

export class IntroSequence {
  private overlay!: HTMLDivElement;
  private canvas!: HTMLCanvasElement;
  private ctx2d!: CanvasRenderingContext2D;
  private textLayer!: HTMLDivElement;
  private themeAudio: HTMLAudioElement | null = null;
  private logoImg: HTMLImageElement | null = null;
  private done = false;
  private rafId = 0;
  private timers: ReturnType<typeof setTimeout>[] = [];

  // Animation state
  private particles: Particle[] = [];
  private panX = 0;
  private camShake = 0;
  private currentScene: Scene | null = null;
  private sceneT = 0;  // seconds elapsed in current scene
  private buildings: {x:number,w:number,h:number}[] = [];

  /** Resolves with the already-playing HTMLAudioElement so StartMenu can adopt it seamlessly */
  play(): Promise<HTMLAudioElement | null> {
    return new Promise(resolve => this._tapThenBuild(resolve));
  }

  /** Show a tap-to-begin splash — browser requires gesture before audio plays */
  private _tapThenBuild(onDone: (audio: HTMLAudioElement | null) => void): void {
    this._injectStyles();

    // Preload logo image for canvas use
    const img = new Image();
    img.src = WHITE_LOGO;
    img.onload = () => { this.logoImg = img; };

    const splash = document.createElement('div');
    splash.style.cssText = `
      position:fixed; inset:0; z-index:50001; background:#000;
      display:flex; flex-direction:column; align-items:center; justify-content:space-between;
      padding: clamp(40px,8vh,80px) 0;
      font-family:system-ui,sans-serif; cursor:pointer; touch-action:manipulation;
    `;
    splash.innerHTML = `
      <div></div>

      <div style="text-align:center;">
        <div style="color:#C8A86A; font-size:clamp(18px,5vw,28px); font-weight:900;
                    letter-spacing:4px; text-shadow:0 0 40px rgba(200,168,106,0.5);">
          TROWELED EARTH RUSH
        </div>
        <div style="color:rgba(200,168,106,0.55); font-size:clamp(12px,3vw,16px);
                    margin-top:36px; letter-spacing:3px; animation:tapPulse 1.4s ease-in-out infinite;">
          TAP TO BEGIN
        </div>
      </div>

      <img src="${WHITE_LOGO}" alt="TEM"
        style="height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
               filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.4));
               animation:tapPulse 3s ease-in-out infinite;"
        onerror="this.style.display='none'">
    `;
    // Pre-create and buffer audio while user reads the splash —
    // so it's ready to play the instant they tap.
    const audio = new Audio();
    audio.src    = AUDIO.theme;
    audio.volume = 0.75;
    audio.loop   = true;   // keep looping through menu
    audio.preload = 'auto';
    this.themeAudio = audio;

    document.body.appendChild(splash);

    let started = false;
    const start = () => {
      if (started) return;  // guard against touchend+click double-fire
      started = true;
      // play() must be inside the gesture handler — audio is already buffered
      audio.play().catch(() => { this.themeAudio = null; });
      splash.remove();
      this._build(onDone);
    };

    splash.addEventListener('pointerup', start, { once: true });
  }

  private _build(onDone: (audio: HTMLAudioElement | null) => void): void {
    this.overlay = document.createElement('div');
    this.overlay.id = 'intro-overlay';
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:50000; background:#000; overflow:hidden;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    // ── Canvas background ────────────────────────────────────────────────────
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = `
      position:absolute; inset:0; width:100%; height:100%;
      image-rendering:crisp-edges;
    `;
    this._resizeCanvas();
    window.addEventListener('resize', () => this._resizeCanvas());

    this.ctx2d = this.canvas.getContext('2d')!;

    // ── Letterbox bars ───────────────────────────────────────────────────────
    const topBar = document.createElement('div');
    topBar.className = 'intro-bar intro-bar-top';
    const botBar = document.createElement('div');
    botBar.className = 'intro-bar intro-bar-bot';

    // ── Text layer ───────────────────────────────────────────────────────────
    this.textLayer = document.createElement('div');
    this.textLayer.style.cssText = `
      position:absolute; inset:0; z-index:10;
      display:flex; flex-direction:column;
      justify-content:flex-end;
      padding: 0 clamp(20px,6vw,60px) clamp(60px,12vh,110px);
      pointer-events:none;
    `;

    // ── Film grain ────────────────────────────────────────────────────────────
    const grain = document.createElement('div');
    grain.id = 'intro-grain';
    grain.style.cssText = `
      position:absolute; inset:0; z-index:8; pointer-events:none;
      opacity:0.06;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
      animation: grainAnim 0.15s steps(1) infinite;
    `;

    // ── Skip button ───────────────────────────────────────────────────────────
    const skip = document.createElement('button');
    skip.textContent = 'SKIP ▶';
    skip.style.cssText = `
      position:absolute; bottom:20px; right:20px; z-index:20;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2);
      color:rgba(255,255,255,0.5); font-size:11px; font-weight:700;
      padding:7px 14px; border-radius:20px; cursor:pointer;
      letter-spacing:1px; touch-action:manipulation;
    `;
    skip.addEventListener('click', () => this._finish(onDone));

    this.overlay.appendChild(this.canvas);
    this.overlay.appendChild(grain);
    this.overlay.appendChild(topBar);
    this.overlay.appendChild(botBar);
    this.overlay.appendChild(this.textLayer);
    this.overlay.appendChild(skip);
    document.body.appendChild(this.overlay);

    // Generate buildings for city skyline
    this._genBuildings();

    // ── Scene schedule ────────────────────────────────────────────────────────
    this._startScene(SCENES[0]);   // Opening city shot

    let t = OPEN_MS;
    for (let i = 1; i < SCENES.length; i++) {
      const snap = SCENES[i];
      this._after(t, () => this._startScene(snap));
      t += snap.durationMs ?? SCENE_MS;
    }
    this._after(t, () => this._showTitle(onDone));

    // ── Render loop ───────────────────────────────────────────────────────────
    let last = performance.now();
    const loop = (now: number) => {
      if (this.done) return;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      this.sceneT += dt;
      this._update(dt);
      this._draw();
      this.rafId = requestAnimationFrame(loop);
    };
    this.rafId = requestAnimationFrame(loop);
  }

  // ── Scene management ──────────────────────────────────────────────────────
  private _startScene(scene: Scene): void {
    if (this.done) return;
    this.currentScene = scene;
    this.sceneT = 0;
    this.panX = 0;
    this.particles = [];
    this.camShake = scene.id === 'matt' || scene.id === 'jose' ? 0.5 : 0;
    this._updateText(scene);
  }

  private _updateText(scene: Scene): void {
    if (!this.textLayer) return;
    const isOpening = scene.id === 'melbourne';

    this.textLayer.innerHTML = `
      <div style="animation: introSlideUp 0.5s ease both;">
        ${isOpening ? `
          <div style="color:rgba(200,168,106,0.6); font-size:clamp(9px,2.5vw,12px);
                      font-weight:700; letter-spacing:4px; margin-bottom:12px;">
            TROWELED EARTH MELBOURNE PRESENTS
          </div>
          <img src="${WHITE_LOGO}" alt="TEM"
            style="height:clamp(50px,10vw,80px); width:auto; object-fit:contain;
                   filter:brightness(0.85); display:block; margin-bottom:16px;"
            onerror="this.style.display='none'">
        ` : scene.heroReveal ? `
          <!-- ── JOSE HERO REVEAL ── -->
          <div style="animation:introSlideUp 0.8s ease both;">
            <div style="color:#FFD700; font-size:clamp(8px,2vw,10px);
                        font-weight:900; letter-spacing:6px; margin-bottom:10px;
                        text-shadow:0 0 20px #FFD700;">
              ★ &nbsp; THE HEART OF TROWELED EARTH &nbsp; ★
            </div>
            <div style="display:inline-block; background:linear-gradient(135deg,#E8A830,#FFD700);
                        color:#000; font-size:clamp(8px,1.8vw,10px); font-weight:900;
                        letter-spacing:4px; padding:3px 12px; border-radius:4px;
                        margin-bottom:14px; text-transform:uppercase;">
              EL MAESTRO · WALL JESUS
            </div>
            <div style="color:#FFD700; font-size:clamp(48px,15vw,88px); font-weight:900;
                        letter-spacing:3px; line-height:0.95; margin-bottom:16px;
                        text-shadow:0 0 60px #FFD700, 0 0 120px #FF8C00,
                                    0 4px 40px rgba(0,0,0,0.95);
                        font-style:italic;">
              JOSE
            </div>
            <div style="color:#fff; font-size:clamp(12px,3vw,16px);
                        font-style:italic; opacity:0.9; letter-spacing:1px;
                        text-shadow:0 2px 20px #000, 0 0 40px #FFD70066;
                        max-width:340px; margin:0 auto; line-height:1.4;">
              "${scene.line}"
            </div>
          </div>
        ` : `
          <div style="color:${scene.accentColor}; font-size:clamp(9px,2.5vw,11px);
                      font-weight:800; letter-spacing:5px; text-transform:uppercase;
                      margin-bottom:8px; opacity:0.85;">
            ${scene.role}
          </div>
          <div style="color:#fff; font-size:clamp(30px,9vw,58px); font-weight:900;
                      letter-spacing:2px; line-height:1; margin-bottom:12px;
                      text-shadow: 0 2px 30px rgba(0,0,0,0.9), 0 0 60px ${scene.accentColor}44;">
            ${scene.name}
          </div>
          <div style="color:${scene.accentColor}; font-size:clamp(13px,3.5vw,18px);
                      font-style:italic; opacity:0.8; letter-spacing:0.5px;">
            "${scene.line}"
          </div>
        `}
      </div>
    `;
  }

  // ── Update ────────────────────────────────────────────────────────────────
  private _update(dt: number): void {
    const sc = this.currentScene;
    if (!sc) return;

    // Camera pan
    this.panX += dt * 18;

    // Camera shake
    if (this.camShake > 0) this.camShake = Math.max(0, this.camShake - dt * 0.8);

    // Spawn particles
    if (sc.particleKind !== 'none') this._spawnParticles(sc, dt);

    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.x  += p.vx * dt;
      p.y  += p.vy * dt;
      p.life -= dt;
      p.alpha = Math.max(0, p.life / p.maxLife);
      if (p.life <= 0) this.particles.splice(i, 1);
    }
  }

  private _spawnParticles(sc: Scene, dt: number): void {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const rate = sc.particleKind === 'sparks' ? 12 : 4;

    for (let i = 0; i < rate * dt; i++) {
      const x = Math.random() * W;
      const groundY = H * 0.62;

      let p: Particle;
      if (sc.particleKind === 'sparks') {
        p = {
          x, y: groundY - Math.random() * H * 0.15,
          vx: (Math.random() - 0.5) * 80,
          vy: -Math.random() * 120 - 40,
          life: 0.4 + Math.random() * 0.4, maxLife: 0.8,
          size: 1.5 + Math.random() * 2, alpha: 1,
        };
      } else if (sc.particleKind === 'smoke') {
        p = {
          x, y: groundY,
          vx: (Math.random() - 0.5) * 20,
          vy: -Math.random() * 30 - 10,
          life: 1.5 + Math.random(), maxLife: 2.5,
          size: 20 + Math.random() * 40, alpha: 0.3,
        };
      } else { // dust
        p = {
          x, y: groundY + Math.random() * H * 0.1,
          vx: (Math.random() - 0.5) * 15,
          vy: -Math.random() * 15,
          life: 1 + Math.random() * 1.5, maxLife: 2.5,
          size: 2 + Math.random() * 5, alpha: 0.5,
        };
      }
      this.particles.push(p);
    }
  }

  // ── Draw ──────────────────────────────────────────────────────────────────
  private _draw(): void {
    const W = this.canvas.width;
    const H = this.canvas.height;
    const sc = this.currentScene;
    if (!sc) return;

    const ctx = this.ctx2d;
    const shake = this.camShake > 0 ? (Math.random() - 0.5) * this.camShake * 4 : 0;

    ctx.save();
    ctx.translate(shake, shake * 0.5);

    // ── Sky gradient ──────────────────────────────────────────────────────────
    const sky = ctx.createLinearGradient(0, 0, 0, H * 0.65);
    sky.addColorStop(0, sc.skyTop);
    sky.addColorStop(1, sc.skyBot);
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, W, H);

    // ── Stars ─────────────────────────────────────────────────────────────────
    this._drawStars(ctx, W, H, sc);

    // ── City silhouette ───────────────────────────────────────────────────────
    this._drawCity(ctx, W, H, sc);

    // ── Ground ────────────────────────────────────────────────────────────────
    const grd = ctx.createLinearGradient(0, H * 0.62, 0, H);
    grd.addColorStop(0, sc.spotColor);
    grd.addColorStop(0.3, '#000000CC');
    grd.addColorStop(1, '#000000');
    ctx.fillStyle = grd;
    ctx.fillRect(0, H * 0.62, W, H * 0.38);

    // ── Road lines ────────────────────────────────────────────────────────────
    this._drawRoad(ctx, W, H, sc);

    // ── Particles ─────────────────────────────────────────────────────────────
    this._drawParticles(ctx, sc);

    // ── TEM buckets ───────────────────────────────────────────────────────────
    this._drawBuckets(ctx, W, H, sc);

    // ── Character silhouette ──────────────────────────────────────────────────
    if (sc.id !== 'melbourne') this._drawCharSilhouette(ctx, W, H, sc);

    // ── Speech bubble ────────────────────────────────────────────────────────
    if (sc.id !== 'melbourne' && sc.line && this.sceneT > 2.0) {
      this._drawSpeechBubble(ctx, W, H, sc);
    }

    // ── Vignette ─────────────────────────────────────────────────────────────
    const vig = ctx.createRadialGradient(W/2, H/2, H*0.1, W/2, H/2, H*0.8);
    vig.addColorStop(0, 'rgba(0,0,0,0)');
    vig.addColorStop(1, 'rgba(0,0,0,0.72)');
    ctx.fillStyle = vig;
    ctx.fillRect(0, 0, W, H);

    // ── Accent glow ───────────────────────────────────────────────────────────
    if (sc.id !== 'melbourne' && this.sceneT < 0.6) {
      const alpha = Math.max(0, 0.6 - this.sceneT) * 0.4;
      ctx.fillStyle = sc.accentColor + Math.round(alpha * 255).toString(16).padStart(2,'0');
      ctx.fillRect(0, 0, W, H);
    }

    ctx.restore();
  }

  private _drawStars(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    // Pseudo-random stable stars based on scene id
    const seed = sc.id.charCodeAt(0) * 31;
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    for (let i = 0; i < 60; i++) {
      const sx = ((seed * (i + 1) * 1234567) % W + W) % W;
      const sy = ((seed * (i + 7) * 765432) % (H * 0.5) + H * 0.01) % (H * 0.5);
      const sr = 0.5 + ((seed * i * 11) % 10) / 10;
      const tw = (this.sceneT * 0.8 + i * 0.3) % (Math.PI * 2);
      ctx.globalAlpha = 0.3 + Math.sin(tw) * 0.3;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  private _drawCity(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    const groundY = H * 0.62;
    const pan = (this.panX * 0.3) % W;

    // Draw buildings twice for seamless pan
    for (let pass = -1; pass <= 1; pass++) {
      const offsetX = pass * W - pan;
      for (const b of this.buildings) {
        const bx = b.x + offsetX;
        if (bx + b.w < -50 || bx > W + 50) continue;

        // Building body
        ctx.fillStyle = sc.buildingTint;
        ctx.fillRect(bx, groundY - b.h, b.w, b.h);

        // Windows — lit randomly based on building position
        ctx.fillStyle = sc.accentColor + '55';
        const cols = Math.floor(b.w / 10);
        const rows = Math.floor(b.h / 14);
        for (let c = 0; c < cols; c++) {
          for (let r = 0; r < rows; r++) {
            const lit = (Math.sin((b.x + c * 17 + r * 13) * 0.618) > 0.1);
            if (!lit) continue;
            const wx = bx + c * 10 + 2;
            const wy = groundY - b.h + r * 14 + 3;
            const flicker = Math.sin(this.sceneT * 2 + c + r) > 0.95;
            ctx.fillStyle = flicker ? '#fff4' : sc.accentColor + '66';
            ctx.fillRect(wx, wy, 5, 7);
          }
        }

        // Building edge highlight
        ctx.strokeStyle = sc.accentColor + '22';
        ctx.lineWidth = 1;
        ctx.strokeRect(bx, groundY - b.h, b.w, b.h);
      }
    }
  }

  private _drawRoad(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    const roadY = H * 0.72;
    const pan = this.panX * 1.5;

    // Road surface
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, roadY, W, H - roadY);

    // Road dashes
    ctx.strokeStyle = sc.accentColor + '30';
    ctx.lineWidth = 2;
    ctx.setLineDash([30, 40]);
    ctx.lineDashOffset = -pan % 70;
    ctx.beginPath();
    ctx.moveTo(0, roadY + 20);
    ctx.lineTo(W, roadY + 20);
    ctx.stroke();
    ctx.setLineDash([]);

    // Moving van on the road for Melbourne opener
    if (sc.id === 'melbourne') {
      const vanX = ((this.panX * 60) % (W + 200)) - 100;
      this._drawVan(ctx, vanX, roadY + 5);
    }
  }

  private _drawVan(ctx: CanvasRenderingContext2D, x: number, y: number): void {
    const s = 0.8;
    ctx.save();
    ctx.translate(x, y);

    // Body
    ctx.fillStyle = '#C1660A';
    ctx.beginPath();
    ctx.roundRect(0, 0, 90*s, 42*s, 4*s);
    ctx.fill();

    // Cab
    ctx.fillStyle = '#A04A00';
    ctx.beginPath();
    ctx.roundRect(60*s, 4*s, 30*s, 32*s, 3*s);
    ctx.fill();

    // Windshield
    ctx.fillStyle = '#6090D080';
    ctx.fillRect(64*s, 7*s, 22*s, 16*s);

    // Wheels
    ctx.fillStyle = '#111';
    ctx.beginPath(); ctx.arc(18*s, 42*s, 8*s, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(72*s, 42*s, 8*s, 0, Math.PI*2); ctx.fill();

    // Headlights
    ctx.fillStyle = '#FFFF8088';
    ctx.fillRect(88*s, 16*s, 3*s, 8*s);

    ctx.restore();
  }

  private _drawCharSilhouette(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    // Connie gets her own Bond-girl side-on treatment
    if (sc.id === 'connie') { this._drawConnieBond(ctx, W, H, sc); return; }

    const groundY = H * 0.62;
    const cx = W * 0.68;
    const fadeIn = Math.min(1, this.sceneT * 2.0);

    ctx.save();
    ctx.globalAlpha = fadeIn;

    // Glow behind figure
    const glow = ctx.createRadialGradient(cx, groundY - 80, 10, cx, groundY - 80, 160);
    glow.addColorStop(0, sc.accentColor + '50');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.ellipse(cx, groundY - 80, 160, 220, 0, 0, Math.PI * 2);
    ctx.fill();

    // Ground shadow
    ctx.fillStyle = 'rgba(0,0,0,0.45)';
    ctx.beginPath();
    ctx.ellipse(cx, groundY + 6, 40, 9, 0, 0, Math.PI * 2);
    ctx.fill();

    const hh = Math.min(H * 0.52, 240);

    // ── Skin tone (varies per character) ─────────────────────────────────────
    const skinTones: Record<string, string> = {
      jose:     '#C8856A',
      matt:     '#E8C0A0',
      tsuyoshi: '#F0D4B0',
      connie:   '#F0C8A0',
      jarrad:   '#E0B090',
      fabio:    '#D4A070',
      joe:      '#EED8C0',   // fair/pale — lightest of the crew
      phil:     '#D8A888',
    };
    const skin = skinTones[sc.id] ?? '#D0A080';

    // ── TEM black uniform ─────────────────────────────────────────────────────
    const shirtCol = '#111111';  // black TEM shirt
    const pantCol  = '#1a1a2a';

    // Boots
    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(cx - 19, groundY - 22, 16, 22);
    ctx.fillRect(cx + 3,  groundY - 22, 16, 22);

    // Pants
    ctx.fillStyle = pantCol;
    ctx.fillRect(cx - 18, groundY - hh * 0.44, 16, hh * 0.44 - 20);
    ctx.fillRect(cx + 2,  groundY - hh * 0.44, 16, hh * 0.44 - 20);

    // ── Jose: draw back/side dreads BEFORE shirt so they drape over shoulders ──
    if (sc.id === 'jose') {
      const jhy  = groundY - hh * 0.87;
      const jhr  = hh * 0.075; // head horizontal radius
      const dc   = '#2a1500';
      const dl   = '#3a1e00';
      const dcb  = '#1a0800';
      // Side + back dreads that drape onto shoulders — drawn BEFORE shirt
      const backDreads = [
        { dx: -jhr * 1.1, swing: -10, len: hh * 0.42, w: 11, color: dc  },
        { dx: -jhr * 0.7, swing:  -7, len: hh * 0.46, w: 10, color: dl  },
        { dx:  jhr * 0.7, swing:   7, len: hh * 0.44, w: 10, color: dl  },
        { dx:  jhr * 1.1, swing:   9, len: hh * 0.40, w: 11, color: dc  },
        { dx: -jhr * 0.3, swing:  -3, len: hh * 0.50, w:  9, color: dcb },
        { dx:  jhr * 0.3, swing:   3, len: hh * 0.48, w:  9, color: dc  },
      ];
      ctx.save();
      ctx.lineCap = 'round';
      backDreads.forEach(d => {
        ctx.strokeStyle = d.color;
        ctx.lineWidth = d.w;
        const startX = cx + d.dx;
        const startY = jhy + hh * 0.09; // bottom of head ellipse
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(
          startX + d.swing * 0.3, startY + d.len * 0.3,
          startX + d.swing * 0.8, startY + d.len * 0.7,
          startX + d.swing * 0.6, startY + d.len,
        );
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(startX + d.swing * 0.6, startY + d.len, d.w * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = d.color;
        ctx.fill();
      });
      ctx.restore();
    }

    // Black TEM shirt — Jarrad gets broader chest to match muscular build
    const chestW = sc.id === 'jarrad' ? 54 : 40;
    ctx.fillStyle = shirtCol;
    ctx.fillRect(cx - chestW / 2, groundY - hh * 0.80, chestW, hh * 0.37);

    // TEM logo on chest — white tree
    this._drawTEMLogoOnShirt(ctx, cx, groundY - hh * 0.70);

    // Collar / neck
    ctx.fillStyle = skin;
    ctx.fillRect(cx - 5, groundY - hh * 0.84, 10, hh * 0.06);

    // Arms — regular crew gets simple sleeves; Jarrad gets full muscular arm drawing
    if (sc.id === 'jarrad') {
      // ── Jarrad: thick muscular arms ──────────────────────────────────────────
      // Use dark charcoal (#1E1E24) — NOT pure black, so it's visible vs dark bg
      const armCol  = '#1E1E24';
      const armRim  = '#3A3A50'; // subtle lighter edge for visibility

      const drawMuscleArm = (ax: number, side: number) => {
        // ── Fill (dark charcoal) ─────────────────────────────────────────────
        ctx.fillStyle = armCol;
        // Shoulder bridge — connects shirt body to arm start
        ctx.beginPath();
        ctx.roundRect(ax - 13, groundY - hh * 0.81, 26, hh * 0.10, 4);
        ctx.fill();
        // Upper arm
        ctx.beginPath();
        ctx.roundRect(ax - 15, groundY - hh * 0.74, 30, hh * 0.22, 9);
        ctx.fill();
        // Bicep peak
        ctx.beginPath();
        ctx.ellipse(ax + side * 11, groundY - hh * 0.63, 15, hh * 0.10, side * 0.25, 0, Math.PI * 2);
        ctx.fill();
        // Forearm — runs all the way to hand level
        ctx.beginPath();
        ctx.roundRect(ax - 12, groundY - hh * 0.52, 24, hh * 0.28, 7);
        ctx.fill();

        // ── Outline (rim) so arm reads against dark background ──────────────
        ctx.strokeStyle = armRim;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(ax - 15, groundY - hh * 0.74, 30, hh * 0.22, 9);
        ctx.stroke();
        ctx.beginPath();
        ctx.roundRect(ax - 12, groundY - hh * 0.52, 24, hh * 0.28, 7);
        ctx.stroke();

        // Muscle highlight
        ctx.fillStyle = '#2E2E3A';
        ctx.beginPath();
        ctx.ellipse(ax - side * 4, groundY - hh * 0.63, 5, hh * 0.07, side * 0.1, 0, Math.PI * 2);
        ctx.fill();
      };
      drawMuscleArm(cx - 30, -1);
      drawMuscleArm(cx + 30,  1);

      // ── Left hand (fist, skin) ────────────────────────────────────────────
      ctx.fillStyle = skin;
      ctx.beginPath();
      ctx.ellipse(cx - 30, groundY - hh * 0.25, 10, 9, 0.2, 0, Math.PI * 2);
      ctx.fill();

      // ── Right hand: phone ─────────────────────────────────────────────────
      const phX = cx + 30;
      const phY = groundY - hh * 0.25;
      // Grip fingers
      ctx.fillStyle = skin;
      ctx.beginPath();
      ctx.ellipse(phX, phY + 8, 9, 7, 0, 0, Math.PI * 2);
      ctx.fill();
      // Phone body
      ctx.fillStyle = '#18181F';
      ctx.beginPath();
      ctx.roundRect(phX - 8, phY - 16, 16, 26, 3);
      ctx.fill();
      // Screen
      ctx.fillStyle = '#2A80FF';
      ctx.beginPath();
      ctx.roundRect(phX - 6, phY - 14, 12, 18, 2);
      ctx.fill();
      // Glare
      ctx.fillStyle = 'rgba(255,255,255,0.22)';
      ctx.beginPath();
      ctx.roundRect(phX - 5, phY - 13, 5, 7, 1);
      ctx.fill();

    } else {
      ctx.fillStyle = shirtCol;
      ctx.fillRect(cx - 32, groundY - hh * 0.78, 13, hh * 0.32);
      ctx.fillRect(cx + 19, groundY - hh * 0.78, 13, hh * 0.28);

      // Hands (skin)
      ctx.fillStyle = skin;
      ctx.beginPath();
      ctx.ellipse(cx - 26, groundY - hh * 0.46, 7, 9, 0.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(cx + 26, groundY - hh * 0.50, 7, 9, -0.2, 0, Math.PI * 2);
      ctx.fill();
    }

    // Head
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.ellipse(cx, groundY - hh * 0.87, hh * 0.075, hh * 0.09, 0, 0, Math.PI * 2);
    ctx.fill();

    // Character-specific hair + prop
    this._drawHairAndProp(ctx, sc, cx, groundY, hh, skin);

    // Accent rim light on left edge
    ctx.strokeStyle = sc.accentColor;
    ctx.lineWidth = 3;
    ctx.globalAlpha = fadeIn * 0.8;
    ctx.beginPath();
    ctx.moveTo(cx - 20, groundY - hh * 0.44);
    ctx.lineTo(cx - 20, groundY - hh * 0.80);
    ctx.lineTo(cx - 10, groundY - hh * 0.84);
    ctx.stroke();

    ctx.restore();
  }

  /** Draw the real TEM white tree logo on the shirt chest */
  private _drawTEMLogoOnShirt(ctx: CanvasRenderingContext2D, cx: number, y: number): void {
    if (!this.logoImg) return; // not loaded yet — skip silently
    const logoW = 20;
    // Logo is 688×1504 portrait — scale to logoW wide
    const logoH = logoW * (1504 / 688);
    ctx.save();
    ctx.globalAlpha = 0.85;
    ctx.drawImage(this.logoImg, cx - logoW / 2, y - logoH / 2, logoW, logoH);
    ctx.restore();
  }

  /** Connie — side-on James Bond girl profile with gun pose */
  private _drawConnieBond(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    const groundY = H * 0.62;
    const cx = W * 0.60;          // slightly left so gun arm has space to the right
    const fadeIn = Math.min(1, this.sceneT * 2.0);
    const hh = Math.min(H * 0.52, 240);
    const skin = '#F0C8A0';
    const accent = sc.accentColor; // '#FFB030' amber

    ctx.save();
    ctx.globalAlpha = fadeIn;

    // ── Glow ──────────────────────────────────────────────────────────────────
    const glow = ctx.createRadialGradient(cx, groundY - 90, 10, cx, groundY - 90, 180);
    glow.addColorStop(0, accent + '55');
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.ellipse(cx, groundY - 90, 180, 230, 0, 0, Math.PI * 2);
    ctx.fill();

    // ── Ground shadow ─────────────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.beginPath();
    ctx.ellipse(cx, groundY + 5, 30, 7, 0, 0, Math.PI * 2);
    ctx.fill();

    const bY = groundY;            // feet level
    const tY = bY - hh;            // top of head area
    const midY = bY - hh * 0.5;   // waist level

    // ── Long flowing hair (behind body) ──────────────────────────────────────
    ctx.fillStyle = '#D4B840';     // wild blonde
    ctx.beginPath();
    ctx.moveTo(cx - 8, tY + hh * 0.06);          // top of head, slightly back
    ctx.bezierCurveTo(
      cx - 40, tY + hh * 0.18,                   // swoops back
      cx - 55, midY - hh * 0.06,                 // falls along back
      cx - 35, bY - hh * 0.2,                    // ends at mid-back height
    );
    ctx.bezierCurveTo(
      cx - 28, bY - hh * 0.18,
      cx - 14, tY + hh * 0.30,
      cx - 2, tY + hh * 0.12,
    );
    ctx.closePath();
    ctx.fill();
    // Hair highlight strand
    ctx.strokeStyle = '#FFE878';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cx - 4, tY + hh * 0.08);
    ctx.bezierCurveTo(cx - 30, tY + hh * 0.22, cx - 45, midY, cx - 28, bY - hh * 0.22);
    ctx.stroke();

    // ── Legs — side-on, slight stride pose ───────────────────────────────────
    ctx.fillStyle = '#111122';  // dark pants
    // Back leg slightly behind
    ctx.beginPath();
    ctx.moveTo(cx - 8, bY - hh * 0.43);
    ctx.lineTo(cx - 14, bY);
    ctx.lineTo(cx - 6, bY);
    ctx.lineTo(cx + 4, bY - hh * 0.43);
    ctx.closePath();
    ctx.fill();
    // Front leg
    ctx.beginPath();
    ctx.moveTo(cx - 2, bY - hh * 0.43);
    ctx.lineTo(cx + 6, bY);
    ctx.lineTo(cx + 16, bY);
    ctx.lineTo(cx + 10, bY - hh * 0.43);
    ctx.closePath();
    ctx.fill();

    // ── High heels ────────────────────────────────────────────────────────────
    ctx.fillStyle = '#111';
    // Back heel
    ctx.fillRect(cx - 16, bY - 4, 12, 4);
    ctx.fillRect(cx - 13, bY - 10, 2, 10);
    // Front heel
    ctx.fillRect(cx + 4, bY - 4, 14, 4);
    ctx.fillRect(cx + 15, bY - 10, 2, 10);

    // ── Hourglass torso — profile curves ─────────────────────────────────────
    ctx.fillStyle = '#111111';   // black TEM shirt (side-on)
    ctx.beginPath();
    // Chest front edge — low-cut neckline for Bond-girl style
    ctx.moveTo(cx + 16, bY - hh * 0.80);    // neckline (lower cut)
    // Bust — implant profile: high projection, round, firm
    ctx.bezierCurveTo(
      cx + 44, bY - hh * 0.79,              // upper bust — shoots way out
      cx + 58, bY - hh * 0.70,              // bust peak — implant projection
      cx + 26, bY - hh * 0.58,              // under bust — rounds back under
    );
    // Waist nip in
    ctx.bezierCurveTo(
      cx + 12, bY - hh * 0.51,              // front waist tight
      cx + 8,  bY - hh * 0.46,
      cx + 15, bY - hh * 0.42,             // hip flare out
    );
    // Hip curve
    ctx.bezierCurveTo(
      cx + 20, bY - hh * 0.39,
      cx + 15, bY - hh * 0.33,
      cx + 6,  bY - hh * 0.27,             // upper thigh line
    );
    // Back edge (behind)
    ctx.lineTo(cx - 2, bY - hh * 0.42);    // back of hip
    ctx.bezierCurveTo(
      cx - 6,  bY - hh * 0.50,
      cx - 4,  bY - hh * 0.56,
      cx + 2,  bY - hh * 0.66,             // back waist
    );
    ctx.bezierCurveTo(
      cx + 4,  bY - hh * 0.73,
      cx + 0,  bY - hh * 0.78,
      cx + 6,  bY - hh * 0.82,             // upper back
    );
    ctx.closePath();
    ctx.fill();

    // ── Exposed décolletage (skin visible above shirt line) ───────────────────
    ctx.fillStyle = skin;
    ctx.beginPath();
    ctx.moveTo(cx + 10, bY - hh * 0.84);   // base of neck
    ctx.bezierCurveTo(
      cx + 30, bY - hh * 0.82,
      cx + 50, bY - hh * 0.79,
      cx + 44, bY - hh * 0.79,             // top of bust swell
    );
    ctx.lineTo(cx + 16, bY - hh * 0.80);
    ctx.closePath();
    ctx.fill();

    // ── Neck and head ─────────────────────────────────────────────────────────
    ctx.fillStyle = skin;
    // Neck — thin profile
    ctx.fillRect(cx + 8, tY + hh * 0.12, 8, hh * 0.05);
    // Head — profile circle
    const headR = hh * 0.09;
    ctx.beginPath();
    ctx.arc(cx + 12, tY + hh * 0.07, headR, 0, Math.PI * 2);
    ctx.fill();
    // Nose bridge (slight profile bump)
    ctx.beginPath();
    ctx.arc(cx + 12 + headR * 0.85, tY + hh * 0.08, headR * 0.22, -0.4, 0.9);
    ctx.fill();
    // Chin jaw line
    ctx.beginPath();
    ctx.arc(cx + 12 + headR * 0.5, tY + hh * 0.10 + headR * 0.7, headR * 0.3, 0, Math.PI);
    ctx.fill();

    // Face front hair
    ctx.fillStyle = '#D4B840';
    ctx.beginPath();
    ctx.arc(cx + 12, tY + hh * 0.04, headR * 1.05, Math.PI * 0.9, Math.PI * 1.9);
    ctx.fill();
    // Fringe
    ctx.beginPath();
    ctx.arc(cx + 12 + headR * 0.3, tY + hh * 0.02, headR * 0.6, Math.PI, Math.PI * 1.7);
    ctx.fill();

    // Red lips (profile)
    ctx.fillStyle = '#CC2244';
    ctx.beginPath();
    ctx.ellipse(cx + 12 + headR * 0.8, tY + hh * 0.09, 4, 2.5, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // ── Bare arm extended — Bond girl gun pose ────────────────────────────────
    // Arm goes from shoulder, extends diagonally up-forward-right
    const shoulderX = cx + 22;
    const shoulderY = bY - hh * 0.76;
    const armAngle  = -0.38;   // rad — angled slightly upward
    const armLen    = hh * 0.36;
    const handX = shoulderX + Math.cos(armAngle) * armLen;
    const handY = shoulderY + Math.sin(armAngle) * armLen;

    // Arm (skin)
    ctx.strokeStyle = skin;
    ctx.lineWidth = hh * 0.045;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(shoulderX, shoulderY);
    ctx.lineTo(handX, handY);
    ctx.stroke();

    // ── Gun ───────────────────────────────────────────────────────────────────
    const gunAngle = armAngle - 0.08;
    const gunLen   = hh * 0.14;
    const gunX2 = handX + Math.cos(gunAngle) * gunLen;
    const gunY2 = handY + Math.sin(gunAngle) * gunLen;

    // Grip
    ctx.fillStyle = '#1a1a1a';
    ctx.save();
    ctx.translate(handX, handY);
    ctx.rotate(gunAngle);
    ctx.fillRect(-4, -4, 10, 18);   // grip (downward)
    ctx.restore();

    // Barrel
    ctx.strokeStyle = '#2a2a2a';
    ctx.lineWidth = 5;
    ctx.lineCap = 'square';
    ctx.beginPath();
    ctx.moveTo(handX, handY);
    ctx.lineTo(gunX2, gunY2);
    ctx.stroke();
    // Barrel highlight
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(handX, handY - 1);
    ctx.lineTo(gunX2, gunY2 - 1);
    ctx.stroke();

    // Muzzle flash (subtle glow at gun tip when close to speaking)
    if (this.sceneT > 2.5) {
      ctx.save();
      ctx.globalAlpha = fadeIn * 0.6 * (0.5 + Math.sin(this.sceneT * 8) * 0.5);
      const muzzleGlow = ctx.createRadialGradient(gunX2, gunY2, 0, gunX2, gunY2, 14);
      muzzleGlow.addColorStop(0, '#FFFF88CC');
      muzzleGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = muzzleGlow;
      ctx.beginPath();
      ctx.arc(gunX2, gunY2, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // ── Gold ring (right hand on gun) ─────────────────────────────────────────
    ctx.strokeStyle = '#FFD700';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(handX + 6, handY, 4, 0, Math.PI * 2);
    ctx.stroke();

    // ── Accent rim light ─────────────────────────────────────────────────────
    ctx.strokeStyle = accent;
    ctx.lineWidth = 3;
    ctx.globalAlpha = fadeIn * 0.7;
    ctx.beginPath();
    ctx.moveTo(cx - 2, bY - hh * 0.43);
    ctx.bezierCurveTo(cx - 6, bY - hh * 0.50, cx - 4, bY - hh * 0.78, cx + 6, bY - hh * 0.83);
    ctx.stroke();

    ctx.restore();
  }

  private _drawHairAndProp(ctx: CanvasRenderingContext2D, sc: Scene, cx: number, groundY: number, hh: number, skin: string): void {
    const hy = groundY - hh * 0.87;
    const hr = hh * 0.075;

    ctx.save();
    ctx.lineCap = 'round';

    switch (sc.id) {

      case 'jose': {
        // ── Shoulder-length dreadlocks — back dreads already drawn pre-shirt ──
        const dc  = '#2a1500';
        const dl  = '#3a1e00';
        const dca = '#5a3500'; // lighter caramel tips
        // Shorter front-facing dreads (frame the face, sit on top of everything)
        const frontDreads = [
          { dx: -hr * 1.3, swing: -6, len: hh * 0.28, w: 10, color: dc  },
          { dx: -hr * 0.8, swing: -3, len: hh * 0.32, w: 11, color: dl  },
          { dx:  hr * 0.8, swing:  3, len: hh * 0.32, w: 11, color: dl  },
          { dx:  hr * 1.3, swing:  5, len: hh * 0.26, w: 10, color: dc  },
          { dx: -hr * 0.2, swing: -2, len: hh * 0.30, w:  9, color: dca },
          { dx:  hr * 0.2, swing:  2, len: hh * 0.28, w:  9, color: dc  },
        ];
        frontDreads.forEach(d => {
          ctx.strokeStyle = d.color;
          ctx.lineWidth = d.w;
          const startX = cx + d.dx;
          const startY = hy + hr * 0.4;
          ctx.beginPath();
          ctx.moveTo(startX, startY);
          ctx.bezierCurveTo(
            startX + d.swing * 0.4, startY + d.len * 0.35,
            startX + d.swing * 0.9, startY + d.len * 0.7,
            startX + d.swing * 0.7, startY + d.len,
          );
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(startX + d.swing * 0.7, startY + d.len, d.w * 0.55, 0, Math.PI * 2);
          ctx.fillStyle = d.color;
          ctx.fill();
        });
        // Crown cap — covers top of head
        ctx.fillStyle = dc;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.1, Math.PI, 0);
        ctx.fill();
        // Sides of cap covering ears
        ctx.fillRect(cx - hr * 1.1, hy - hr * 0.5, hr * 0.4, hr * 0.9);
        ctx.fillRect(cx + hr * 0.7, hy - hr * 0.5, hr * 0.4, hr * 0.9);
        // Dread tie / headband
        ctx.strokeStyle = '#7B4A10';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.05, hr * 1.12, Math.PI * 0.72, Math.PI * 1.98);
        ctx.stroke();
        // ── Glasses (randomly shown — matches 3D model behaviour) ──────────
        if (Math.random() < 0.5) {
          ctx.strokeStyle = 'rgba(210,210,210,0.85)';
          ctx.lineWidth = 2.2;
          ctx.fillStyle = 'rgba(180,220,255,0.12)';
          const jgw = hr * 0.95; const jgh = hr * 0.50; const jgy = hy - hr * 0.12;
          ctx.beginPath(); ctx.roundRect(cx - jgw - 1, jgy - jgh / 2, jgw, jgh, 2);
          ctx.fill(); ctx.stroke();
          ctx.beginPath(); ctx.roundRect(cx + 1, jgy - jgh / 2, jgw, jgh, 2);
          ctx.fill(); ctx.stroke();
          ctx.beginPath(); ctx.moveTo(cx - 1, jgy); ctx.lineTo(cx + 1, jgy); ctx.stroke();
        }
        break;
      }

      case 'matt': {
        // ── Tousled warm medium-brown, wavy, medium-length. Auburn beard. ──
        const mc = '#5a3010';   // warm brown
        // Wavy tousled top — slightly swept
        ctx.fillStyle = mc;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.7, hr * 1.15, Math.PI, 0);
        ctx.fill();
        // Extra volume tousle on top
        ctx.beginPath();
        ctx.ellipse(cx - hr * 0.3, hy - hr * 1.5, hr * 0.9, hr * 0.55, -0.3, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + hr * 0.4, hy - hr * 1.4, hr * 0.75, hr * 0.5, 0.2, 0, Math.PI * 2);
        ctx.fill();
        // Side hair hangs
        ctx.strokeStyle = mc;
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(cx - hr * 1.05, hy - hr * 0.3);
        ctx.quadraticCurveTo(cx - hr * 1.3, hy + hr * 0.3, cx - hr * 1.0, hy + hr * 0.5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + hr * 1.05, hy - hr * 0.3);
        ctx.quadraticCurveTo(cx + hr * 1.3, hy + hr * 0.3, cx + hr * 1.0, hy + hr * 0.5);
        ctx.stroke();
        // Full dark brown beard (slight warm tone, not heavily auburn)
        ctx.fillStyle = '#3a1a08';
        ctx.beginPath();
        ctx.ellipse(cx, hy + hr * 0.55, hr * 0.75, hr * 0.42, 0, 0, Math.PI);
        ctx.fill();
        // Moustache
        ctx.fillStyle = '#3a1a08';
        ctx.beginPath();
        ctx.ellipse(cx, hy + hr * 0.18, hr * 0.52, hr * 0.18, 0, 0, Math.PI);
        ctx.fill();
        break;
      }

      case 'tsuyoshi': {
        // ── REAL MOHAWK — shaved sides, jet black center strip, tall spikes ──
        const mohBlack = '#080808';
        const mohW = hr * 0.52;
        const baseY = hy - hr * 0.2;

        // Shaved sides (skin showing)
        ctx.fillStyle = skin;
        ctx.beginPath();
        ctx.arc(cx - hr * 0.85, hy - hr * 0.5, hr * 0.55, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(cx + hr * 0.85, hy - hr * 0.5, hr * 0.55, 0, Math.PI * 2);
        ctx.fill();

        // Central strip base
        ctx.fillStyle = mohBlack;
        ctx.fillRect(cx - mohW / 2, baseY - hr * 0.3, mohW, hr * 0.55);

        // Tall irregular spikes
        const tSpikes = [
          { ox: -0.28, h: hr * 1.55, tw: 0.22, tilt: -0.18 },
          { ox: -0.10, h: hr * 2.10, tw: 0.20, tilt: -0.06 },
          { ox:  0.06, h: hr * 2.40, tw: 0.22, tilt:  0.04 },
          { ox:  0.20, h: hr * 1.90, tw: 0.19, tilt:  0.12 },
          { ox:  0.32, h: hr * 1.40, tw: 0.18, tilt:  0.20 },
        ];
        ctx.fillStyle = mohBlack;
        tSpikes.forEach(s => {
          const sx = cx + s.ox * mohW * 3;
          const bw = s.tw * mohW * 2.5;
          ctx.beginPath();
          ctx.moveTo(sx - bw / 2, baseY);
          ctx.lineTo(sx + bw / 2, baseY);
          ctx.lineTo(sx + Math.sin(s.tilt) * s.h * 0.5, baseY - s.h);
          ctx.closePath();
          ctx.fill();
        });

        // Blue-black sheen on tallest spike
        ctx.fillStyle = 'rgba(80,80,160,0.18)';
        ctx.beginPath();
        ctx.moveTo(cx - 1, baseY);
        ctx.lineTo(cx + 3, baseY);
        ctx.lineTo(cx + 2, baseY - hr * 2.0);
        ctx.closePath();
        ctx.fill();
        break;
      }

      case 'jarrad': {
        // ── Dark textured crop, short back and sides, slightly swept top.
        //    Black rectangular glasses. ──
        const jc = '#1a1208';
        ctx.fillStyle = jc;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.65, hr * 1.08, Math.PI, 0);
        ctx.fill();
        // Textured top — a couple of short tufts
        ctx.beginPath();
        ctx.ellipse(cx - hr * 0.2, hy - hr * 1.45, hr * 0.7, hr * 0.38, -0.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx + hr * 0.3, hy - hr * 1.35, hr * 0.55, hr * 0.32, 0.15, 0, Math.PI * 2);
        ctx.fill();
        // Short beard/stubble
        ctx.fillStyle = '#2a1e08';
        ctx.beginPath();
        ctx.ellipse(cx, hy + hr * 0.52, hr * 0.65, hr * 0.30, 0, 0, Math.PI);
        ctx.fill();
        // Black rectangular glasses
        ctx.strokeStyle = '#111';
        ctx.lineWidth   = 2.5;
        ctx.fillStyle   = 'rgba(160,200,240,0.18)';
        const gw = hr * 1.0; const gh = hr * 0.52; const gy = hy - hr * 0.15;
        // Left lens
        ctx.beginPath();
        ctx.roundRect(cx - gw - 1, gy - gh / 2, gw, gh, 2);
        ctx.fill(); ctx.stroke();
        // Right lens
        ctx.beginPath();
        ctx.roundRect(cx + 1, gy - gh / 2, gw, gh, 2);
        ctx.fill(); ctx.stroke();
        // Bridge
        ctx.beginPath();
        ctx.moveTo(cx - 1, gy); ctx.lineTo(cx + 1, gy);
        ctx.stroke();
        // Arms (temple pieces)
        ctx.beginPath();
        ctx.moveTo(cx - gw - 1, gy); ctx.lineTo(cx - gw - hr * 0.4, gy - 1); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx + gw + 1, gy); ctx.lineTo(cx + gw + hr * 0.4, gy - 1); ctx.stroke();
        break;
      }

      case 'fabio': {
        // ── Short dark Italian hair, slicked with slight wave ──
        ctx.fillStyle = '#1a0e00';
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.68, hr * 1.1, Math.PI, 0);
        ctx.fill();
        // Slight side part and wave
        ctx.beginPath();
        ctx.ellipse(cx - hr * 0.1, hy - hr * 1.42, hr * 0.8, hr * 0.38, 0.1, 0, Math.PI * 2);
        ctx.fill();
        // Light stubble beard
        ctx.fillStyle = '#2e1800';
        ctx.beginPath();
        ctx.ellipse(cx, hy + hr * 0.5, hr * 0.6, hr * 0.26, 0, 0, Math.PI);
        ctx.fill();
        break;
      }

      case 'joe': {
        // ── Short light-brown hair, neat. Fair pale skin. Wide-eyed Joe. ──
        ctx.fillStyle = '#3a2510';   // medium brown (lighter than other crew)
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.68, hr * 1.08, Math.PI, 0);
        ctx.fill();
        // Neat slight side-part
        ctx.beginPath();
        ctx.ellipse(cx - hr * 0.15, hy - hr * 1.35, hr * 0.6, hr * 0.30, -0.1, 0, Math.PI * 2);
        ctx.fill();
        // Hi-vis yellow shirt stripe (Joe wears hi-vis, not TEM black — cartoon confirmed)
        ctx.fillStyle = '#D4E800';
        ctx.fillRect(cx - 22, groundY - hh * 0.58, 44, hh * 0.06);
        ctx.fillStyle = '#B8CC00';
        ctx.fillRect(cx - 22, groundY - hh * 0.52, 44, hh * 0.03);
        break;
      }

      case 'phil': {
        // ── Short white/silver hair — full head, neatly cut, older gent ──
        // (Phil is stocky, older, full silver hair — not receding bald)
        const ph = '#C8C8C4';   // warm silver
        const phd = '#A8A8A2';  // slightly darker silver
        // Full hair cap — short but covers the whole head
        ctx.fillStyle = ph;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.72, hr * 1.12, Math.PI, 0);
        ctx.fill();
        // Sides fill
        ctx.fillStyle = phd;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.5, hr * 1.08, Math.PI * 0.85, Math.PI * 1.15);
        ctx.fill();
        // Slight lighter highlight on top
        ctx.fillStyle = '#DDDDD8';
        ctx.beginPath();
        ctx.ellipse(cx, hy - hr * 1.1, hr * 0.7, hr * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        // Glasses (Phil has glasses in the real photo)
        ctx.strokeStyle = '#111';
        ctx.lineWidth = 2.2;
        ctx.fillStyle = 'rgba(160,200,240,0.15)';
        const pgw = hr * 0.95; const pgh = hr * 0.48; const pgy = hy - hr * 0.12;
        ctx.beginPath(); ctx.roundRect(cx - pgw - 1, pgy - pgh / 2, pgw, pgh, 2);
        ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.roundRect(cx + 1, pgy - pgh / 2, pgw, pgh, 2);
        ctx.fill(); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx - 1, pgy); ctx.lineTo(cx + 1, pgy); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx - pgw - 1, pgy); ctx.lineTo(cx - pgw - hr * 0.4, pgy - 1); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + pgw + 1, pgy); ctx.lineTo(cx + pgw + hr * 0.4, pgy - 1); ctx.stroke();
        break;
      }

      case 'connie': {
        // ── Wild blonde, kept from existing ──
        ctx.fillStyle = '#E8D080';
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.5, hr * 1.1, Math.PI, 0);
        ctx.fill();
        ctx.fillRect(cx - hr * 1.2, hy, hr * 2.4, hh * 0.18);
        break;
      }
    }

    ctx.lineCap = 'butt';
    ctx.restore();

    // ── Props ────────────────────────────────────────────────────────────────
    switch (sc.id) {
      case 'jose':
      case 'matt': {
        // Trowel arm extended
        ctx.fillStyle = skin;
        ctx.fillRect(cx + 19, groundY - hh * 0.62, 28, 8);
        ctx.fillStyle = '#A0B8CC';
        ctx.save();
        ctx.translate(cx + 52, groundY - hh * 0.63);
        ctx.rotate(-0.3);
        ctx.fillRect(0, -4, 28, 10);
        ctx.fillStyle = '#6A7A88';
        ctx.fillRect(24, -5, 6, 12);
        ctx.restore();
        break;
      }
      case 'tsuyoshi': {
        // Bucket held down
        ctx.fillStyle = skin;
        ctx.fillRect(cx - 33, groundY - hh * 0.44, 8, hh * 0.22);
        ctx.fillStyle = '#446688';
        ctx.beginPath();
        ctx.moveTo(cx - 44, groundY - hh * 0.22);
        ctx.lineTo(cx - 28, groundY - hh * 0.22);
        ctx.lineTo(cx - 30, groundY - hh * 0.04);
        ctx.lineTo(cx - 42, groundY - hh * 0.04);
        ctx.fill();
        ctx.strokeStyle = '#88AACC';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 44, groundY - hh * 0.22, 16, 2);
        break;
      }
      case 'connie': {
        // Clipboard in right hand
        ctx.fillStyle = skin;
        ctx.fillRect(cx + 19, groundY - hh * 0.68, 10, hh * 0.20);
        ctx.fillStyle = '#E8E0C0';
        ctx.fillRect(cx + 28, groundY - hh * 0.72, 26, 34);
        ctx.fillStyle = '#C8A86A';
        ctx.fillRect(cx + 34, groundY - hh * 0.74, 14, 6);
        ctx.fillStyle = '#88778866';
        for (let i = 0; i < 4; i++) {
          ctx.fillRect(cx + 30, groundY - hh * 0.66 + i * 6, 20, 3);
        }
        break;
      }
      case 'jarrad': {
        // Phone glow in right hand
        ctx.fillStyle = skin;
        ctx.fillRect(cx + 19, groundY - hh * 0.70, 10, hh * 0.22);
        ctx.fillStyle = '#1a1a2a';
        ctx.fillRect(cx + 28, groundY - hh * 0.73, 18, 28);
        ctx.fillStyle = '#4488FF';
        ctx.shadowColor = '#4488FF';
        ctx.shadowBlur = 18;
        ctx.fillRect(cx + 30, groundY - hh * 0.71, 14, 24);
        ctx.shadowBlur = 0;
        // Screen glow spill on face
        ctx.fillStyle = '#4488FF18';
        ctx.beginPath();
        ctx.ellipse(cx + 20, groundY - hh * 0.87, 30, 40, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'fabio': {
        // Pizza box on shoulder
        ctx.fillStyle = skin;
        ctx.fillRect(cx - 32, groundY - hh * 0.78, 10, hh * 0.10);
        ctx.fillStyle = '#B8904A';
        ctx.fillRect(cx - 46, groundY - hh * 0.86, 38, 6);   // lid
        ctx.fillRect(cx - 46, groundY - hh * 0.84, 38, 20);  // box
        ctx.fillStyle = '#FF5533';
        ctx.fillRect(cx - 43, groundY - hh * 0.82, 32, 14);  // pizza
        ctx.fillStyle = '#FFDD44';
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.arc(cx - 38 + i * 6, groundY - hh * 0.78 + (i % 2) * 4, 3, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }
      case 'phil': {
        // Tea / thermos in left hand
        ctx.fillStyle = skin;
        ctx.fillRect(cx - 33, groundY - hh * 0.52, 8, hh * 0.10);
        ctx.fillStyle = '#8899AA';
        ctx.fillRect(cx - 40, groundY - hh * 0.44, 14, 20);
        ctx.fillStyle = '#AAC0CC';
        ctx.fillRect(cx - 39, groundY - hh * 0.46, 12, 8);
        // Steam
        ctx.strokeStyle = '#AAAAAA60';
        ctx.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.moveTo(cx - 36 + i * 4, groundY - hh * 0.46);
          ctx.quadraticCurveTo(cx - 34 + i * 4, groundY - hh * 0.50, cx - 36 + i * 4, groundY - hh * 0.54);
          ctx.stroke();
        }
        break;
      }
    }
  }

  private _drawParticles(ctx: CanvasRenderingContext2D, sc: Scene): void {
    for (const p of this.particles) {
      ctx.globalAlpha = p.alpha * 0.85;
      if (sc.particleKind === 'sparks') {
        ctx.fillStyle = sc.particleColor;
        ctx.shadowColor = sc.particleColor;
        ctx.shadowBlur = 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      } else {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        g.addColorStop(0, sc.particleColor + '60');
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalAlpha = 1;
  }

  // ── TEM White Buckets (canvas-drawn, TEM logo on front) ──────────────────
  private _drawBuckets(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    const groundY = H * 0.62;

    /** Draw one white TEM bucket at canvas position (cx, cy) with given width */
    const drawBucket = (cx: number, cy: number, w: number, alpha = 1) => {
      const h = w * 1.2;
      const topW  = w;
      const botW  = w * 0.72;
      const tx = cx - topW / 2;   // top-left x
      const bx = cx - botW / 2;   // bottom-left x

      ctx.save();
      ctx.globalAlpha = alpha;

      // Drop shadow
      ctx.fillStyle = 'rgba(0,0,0,0.3)';
      ctx.beginPath();
      ctx.ellipse(cx, cy + h + 3, w * 0.42, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // ── Bucket body (trapezoid) ────────────────────────────────────────────
      ctx.beginPath();
      ctx.moveTo(tx,       cy);          // top-left
      ctx.lineTo(tx + topW, cy);         // top-right
      ctx.lineTo(bx + botW, cy + h);     // bottom-right
      ctx.lineTo(bx,        cy + h);     // bottom-left
      ctx.closePath();
      // White fill with very slight warm tint
      ctx.fillStyle = '#F8F6F0';
      ctx.fill();
      // Gold border
      ctx.strokeStyle = '#C8A86A';
      ctx.lineWidth = Math.max(1, w * 0.04);
      ctx.stroke();

      // ── Rim (top ellipse) ─────────────────────────────────────────────────
      ctx.beginPath();
      ctx.ellipse(cx, cy, topW / 2, topW * 0.1, 0, 0, Math.PI * 2);
      ctx.fillStyle = '#E8E4DC';
      ctx.fill();
      ctx.strokeStyle = '#C8A86A';
      ctx.lineWidth = Math.max(1, w * 0.03);
      ctx.stroke();

      // ── Handle (arc above rim) ────────────────────────────────────────────
      ctx.beginPath();
      ctx.arc(cx, cy - topW * 0.06, topW * 0.3, Math.PI, 0);
      ctx.strokeStyle = '#B0966A';
      ctx.lineWidth = Math.max(1.5, w * 0.05);
      ctx.stroke();

      // ── TEM logo on bucket face ───────────────────────────────────────────
      const logoSize = w * 0.55;
      const logoX = cx - logoSize / 2;
      const logoY = cy + h * 0.18;
      if (this.logoImg) {
        // Draw white logo — mask out the bright pixels as black tree on white bg
        // Use composite to stamp dark version on white bucket
        ctx.globalCompositeOperation = 'multiply';
        ctx.globalAlpha = alpha * 0.6;
        ctx.drawImage(this.logoImg, logoX, logoY, logoSize, logoSize * (1504 / 688));
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = alpha;
      } else {
        // Fallback: simple TEM text
        ctx.fillStyle = '#C8A86A';
        ctx.font = `bold ${Math.max(7, w * 0.18)}px system-ui`;
        ctx.textAlign = 'center';
        ctx.fillText('TEM', cx, cy + h * 0.55);
        ctx.textAlign = 'start';
      }

      ctx.restore();
    };

    if (sc.id === 'melbourne') {
      drawBucket(W * 0.10,  groundY - 48,  46, 0.92);
      drawBucket(W * 0.165, groundY - 38,  36, 0.78);
      drawBucket(W * 0.80,  groundY - 44,  42, 0.88);
      drawBucket(W * 0.87,  groundY - 32,  30, 0.68);
    } else {
      const fadeIn = Math.min(1, this.sceneT * 1.5);
      drawBucket(W * 0.16, groundY - 52, 48, fadeIn * 0.95);
      drawBucket(W * 0.25, groundY - 40, 36, fadeIn * 0.82);
    }
  }

  // ── Speech bubble ────────────────────────────────────────────────────────
  private _drawSpeechBubble(ctx: CanvasRenderingContext2D, W: number, H: number, sc: Scene): void {
    const fadeIn = Math.min(1, (this.sceneT - 2.0) * 1.5); // 0→1 over 0.67s after 2s
    if (fadeIn <= 0) return;

    // Float: gentle up/down bob
    const bob = Math.sin(this.sceneT * 1.8) * 5;

    // Position: left-center of screen, char is at 68% right
    const bw   = Math.min(W * 0.42, 280);  // bubble width
    const bh   = 72;                         // bubble height
    const bx   = W * 0.04;                  // left edge
    const by   = H * 0.38 + bob;            // vertical mid-scene

    const r = 14; // corner radius
    const tx = bx + bw; // tail points right toward character

    ctx.save();
    ctx.globalAlpha = fadeIn;

    // ── Drop shadow ────────────────────────────────────────────────────────
    ctx.shadowColor = 'rgba(0,0,0,0.45)';
    ctx.shadowBlur  = 12;
    ctx.shadowOffsetY = 4;

    // ── Bubble body ────────────────────────────────────────────────────────
    ctx.fillStyle = 'rgba(255,255,255,0.94)';
    ctx.beginPath();
    ctx.moveTo(bx + r, by);
    ctx.lineTo(bx + bw - r, by);
    ctx.quadraticCurveTo(bx + bw, by, bx + bw, by + r);
    ctx.lineTo(bx + bw, by + bh - r);
    ctx.quadraticCurveTo(bx + bw, by + bh, bx + bw - r, by + bh);
    ctx.lineTo(bx + r, by + bh);
    ctx.quadraticCurveTo(bx, by + bh, bx, by + bh - r);
    ctx.lineTo(bx, by + r);
    ctx.quadraticCurveTo(bx, by, bx + r, by);
    ctx.closePath();
    ctx.fill();

    // ── Tail pointing right toward character ──────────────────────────────
    ctx.shadowBlur = 0; ctx.shadowOffsetY = 0;
    ctx.beginPath();
    ctx.moveTo(tx, by + bh * 0.42);
    ctx.lineTo(tx + 20, by + bh * 0.55);
    ctx.lineTo(tx, by + bh * 0.68);
    ctx.closePath();
    ctx.fill();

    // ── Accent top border ─────────────────────────────────────────────────
    ctx.fillStyle = sc.accentColor;
    ctx.fillRect(bx + r, by, bw - r * 2, 4);

    // ── Text ──────────────────────────────────────────────────────────────
    ctx.shadowBlur = 0;
    const fontSize = Math.max(12, Math.min(16, bw / 16));
    ctx.font = `italic ${fontSize}px system-ui, sans-serif`;
    ctx.fillStyle = '#111';
    ctx.textBaseline = 'middle';

    // Word-wrap text
    const maxW = bw - 24;
    const words = `"${sc.line}"`.split(' ');
    const lines: string[] = [];
    let cur = '';
    for (const w of words) {
      const test = cur ? `${cur} ${w}` : w;
      if (ctx.measureText(test).width > maxW && cur) {
        lines.push(cur);
        cur = w;
      } else {
        cur = test;
      }
    }
    if (cur) lines.push(cur);

    const lineH = fontSize + 5;
    const totalH = lines.length * lineH;
    const startY = by + (bh - totalH) / 2 + lineH / 2 + 2;
    lines.forEach((line, i) => {
      ctx.fillText(line, bx + 12, startY + i * lineH, maxW);
    });

    ctx.restore();
  }

  // ── Title card ────────────────────────────────────────────────────────────
  private _showTitle(onDone: (audio: HTMLAudioElement | null) => void): void {
    if (this.done) return;

    // Switch to title scene
    this.particles = [];
    this.currentScene = {
      ...SCENES[0],
      id: 'title', name: '', role: '', line: '',
    };

    this.textLayer.innerHTML = `
      <div style="animation:introSlideUp 0.7s ease both; text-align:center; width:100%;">
        <img src="${WHITE_LOGO}" alt="TEM"
          style="height:clamp(70px,16vw,110px); width:auto; object-fit:contain;
                 filter:drop-shadow(0 0 40px rgba(200,168,106,0.5)) brightness(0.9);
                 display:block; margin:0 auto 20px; animation:logoPulse 2s ease-in-out infinite;"
          onerror="this.style.display='none'">
        <div style="color:#C8A86A; font-size:clamp(24px,8vw,52px); font-weight:900;
                    letter-spacing:5px; text-shadow:0 0 80px rgba(200,168,106,0.5);">
          TROWELED EARTH RUSH
        </div>
        <div style="color:rgba(200,168,106,0.45); font-size:clamp(10px,2.5vw,13px);
                    letter-spacing:4px; margin-top:10px;">
          MELBOURNE
        </div>
      </div>
    `;
    this.textLayer.style.justifyContent = 'center';
    this.textLayer.style.alignItems = 'center';

    this._after(TITLE_MS, () => {
      this.overlay.style.transition = `opacity ${FADE_MS}ms ease`;
      this.overlay.style.opacity = '0';
      this._after(FADE_MS + 50, () => this._finish(onDone));
    });
  }

  // ── Audio ─────────────────────────────────────────────────────────────────
  private _startAudio(): void {
    try {
      const audio = new Audio();
      audio.src = AUDIO.theme;
      audio.volume = 0.75; // start loud immediately — user already tapped
      this.themeAudio = audio;
      audio.play().catch(() => { this.themeAudio = null; });
    } catch {}
  }

  private _finish(onDone: (audio: HTMLAudioElement | null) => void): void {
    if (this.done) return;
    this.done = true;
    this.timers.forEach(clearTimeout);
    cancelAnimationFrame(this.rafId);
    // Do NOT stop audio — pass it to StartMenu so it flows seamlessly
    const handoffAudio = this.themeAudio;
    this.themeAudio = null; // IntroSequence relinquishes ownership
    this.overlay?.remove();
    onDone(handoffAudio);
  }

  private _after(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }

  private _genBuildings(): void {
    const count = 28;
    let x = 0;
    this.buildings = [];
    for (let i = 0; i < count; i++) {
      const w = 30 + Math.floor(Math.sin(i * 2.1) * 15 + Math.cos(i * 1.3) * 12 + 40);
      const h = 60 + Math.abs(Math.sin(i * 1.7) * 140 + Math.cos(i * 2.3) * 80);
      this.buildings.push({ x, w, h });
      x += w + 4 + Math.floor(Math.sin(i * 3.7) * 6);
    }
  }

  private _resizeCanvas(): void {
    if (!this.canvas) return;
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private _injectStyles(): void {
    if (document.getElementById('intro-styles')) return;
    const s = document.createElement('style');
    s.id = 'intro-styles';
    s.textContent = `
      .intro-bar {
        position:absolute; left:0; right:0; z-index:9;
        background:#000; pointer-events:none;
        height: clamp(40px, 8vh, 68px);
      }
      .intro-bar-top { top:0; }
      .intro-bar-bot { bottom:0; }

      @keyframes grainAnim {
        0%   { transform: translate(0,0) }
        25%  { transform: translate(-2%,-1%) }
        50%  { transform: translate(1%, 2%) }
        75%  { transform: translate(-1%, 1%) }
        100% { transform: translate(2%,-2%) }
      }
      @keyframes introSlideUp {
        from { opacity:0; transform:translateY(28px) }
        to   { opacity:1; transform:translateY(0) }
      }
      @keyframes logoPulse {
        0%,100% { transform:scale(1); filter:drop-shadow(0 0 30px rgba(200,168,106,0.4)) brightness(0.9) }
        50%     { transform:scale(1.04); filter:drop-shadow(0 0 50px rgba(200,168,106,0.6)) brightness(1.0) }
      }
      @keyframes tapPulse {
        0%,100% { opacity:0.4; transform:scale(1) }
        50%     { opacity:1.0; transform:scale(1.06) }
      }
    `;
    document.head.appendChild(s);
  }
}
