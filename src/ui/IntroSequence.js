/**
 * IntroSequence — GTA-style cinematic intro
 * Fully animated canvas scenes per character, particles, film grain, camera pan.
 * Real theme song plays throughout.
 */
import { AUDIO } from '../audio/AudioAssets';
const BASE_URL = import.meta.env?.BASE_URL || '/';
const WHITE_LOGO = `${BASE_URL}tem-logo-white.jpg`;
const SCENES = [
    {
        id: 'melbourne',
        name: 'TROWELED EARTH MELBOURNE',
        role: 'presents',
        line: '',
        accentColor: '#C8A86A',
        skyTop: '#040810', skyBot: '#102040',
        particleColor: '#C8A86A', particleKind: 'dust',
        buildingTint: '#182840', spotColor: '#C8A86A33',
        voiceChar: 'Narrator',
    },
    {
        id: 'jose',
        name: 'JOSE GARCIA',
        role: 'The Spaniard · Master of Clay',
        line: 'Vámonos — I was getting bored.',
        accentColor: '#FF7040',
        skyTop: '#7A1800', skyBot: '#CC3300', // bright red-orange
        particleColor: '#FF9040', particleKind: 'sparks',
        buildingTint: '#3A0C00', spotColor: '#FF704055',
        voiceChar: 'Jose',
    },
    {
        id: 'matt',
        name: 'MATT',
        role: 'The Warlord · Lead Plasterer',
        line: 'Took your time.',
        accentColor: '#FF3355',
        skyTop: '#8A0010', skyBot: '#CC0030', // bright crimson
        particleColor: '#FF5070', particleKind: 'sparks',
        buildingTint: '#440010', spotColor: '#FF335555',
        voiceChar: 'Matt',
    },
    {
        id: 'tsuyoshi',
        name: 'TSUYOSHI',
        role: 'The Samurai · Tadelakt Specialist',
        line: 'Positions master. Always.',
        accentColor: '#00DD88',
        skyTop: '#005530', skyBot: '#009958', // bright green
        particleColor: '#60FFB0', particleKind: 'dust',
        buildingTint: '#003322', spotColor: '#00DD8855',
        voiceChar: 'Tsuyoshi',
    },
    {
        id: 'connie',
        name: 'CONNIE',
        role: 'Operations Queen · Born in Germany',
        line: 'Ha ha ha ha!',
        accentColor: '#FFB030',
        skyTop: '#884400', skyBot: '#CC7700', // bright amber
        particleColor: '#FFD060', particleKind: 'smoke',
        buildingTint: '#442200', spotColor: '#FFB03055',
        voiceChar: 'Connie',
    },
    {
        id: 'jarrad',
        name: 'JARRAD',
        role: 'Scaffold Specialist · Topknot Philosopher',
        line: "I've been waiting fifteen minutes.",
        accentColor: '#8866FF',
        skyTop: '#220066', skyBot: '#4400AA', // bright purple
        particleColor: '#AA88FF', particleKind: 'dust',
        buildingTint: '#110033', spotColor: '#8866FF55',
        voiceChar: 'Jarrad',
    },
    {
        id: 'fabio',
        name: 'FABIO',
        role: 'Plasterer · Pizza Consultant',
        line: 'Ehhhh.',
        accentColor: '#FF7722',
        skyTop: '#883300', skyBot: '#CC5500', // bright burnt orange
        particleColor: '#FFAa40', particleKind: 'smoke',
        buildingTint: '#441A00', spotColor: '#FF772255',
        voiceChar: 'Fabio',
    },
    {
        id: 'phil',
        name: 'PHIL',
        role: 'The Quiet Legend · Renders',
        line: "Right then. Let's go.",
        accentColor: '#44CCCC',
        skyTop: '#004444', skyBot: '#007777', // bright teal
        particleColor: '#88FFFF', particleKind: 'dust',
        buildingTint: '#002222', spotColor: '#44CCCC55',
        voiceChar: 'Phil',
    },
];
const SCENE_MS = 8000; // ms per character scene
const OPEN_MS = 8000; // opening city shot
const TITLE_MS = 5000; // title hold
const FADE_MS = 350;
export class IntroSequence {
    overlay;
    canvas;
    ctx2d;
    textLayer;
    themeAudio = null;
    done = false;
    rafId = 0;
    timers = [];
    // Animation state
    particles = [];
    panX = 0;
    camShake = 0;
    currentScene = null;
    sceneT = 0; // seconds elapsed in current scene
    buildings = [];
    play() {
        return new Promise(resolve => this._tapThenBuild(resolve));
    }
    /** Show a tap-to-begin splash — browser requires gesture before audio plays */
    _tapThenBuild(onDone) {
        this._injectStyles();
        const splash = document.createElement('div');
        splash.style.cssText = `
      position:fixed; inset:0; z-index:50001; background:#000;
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif; cursor:pointer; touch-action:manipulation;
    `;
        splash.innerHTML = `
      <img src="${WHITE_LOGO}" alt="TEM"
        style="height:clamp(60px,14vw,100px); width:auto; object-fit:contain;
               filter:brightness(0.85); margin-bottom:24px;"
        onerror="this.style.display='none'">
      <div style="color:#C8A86A; font-size:clamp(18px,5vw,28px); font-weight:900;
                  letter-spacing:4px; text-shadow:0 0 40px rgba(200,168,106,0.5);">
        TROWELED EARTH RUSH
      </div>
      <div style="color:rgba(200,168,106,0.55); font-size:clamp(12px,3vw,16px);
                  margin-top:36px; letter-spacing:3px; animation:tapPulse 1.4s ease-in-out infinite;">
        TAP TO BEGIN
      </div>
    `;
        document.body.appendChild(splash);
        const start = () => {
            splash.remove();
            this._build(onDone);
        };
        splash.addEventListener('click', start, { once: true });
        splash.addEventListener('touchstart', start, { once: true, passive: true });
    }
    _build(onDone) {
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
        this.ctx2d = this.canvas.getContext('2d');
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
        // Start audio
        this._startAudio();
        // ── Scene schedule ────────────────────────────────────────────────────────
        this._startScene(SCENES[0]); // Opening city shot
        let t = OPEN_MS;
        for (let i = 1; i < SCENES.length; i++) {
            const snap = SCENES[i];
            this._after(t, () => this._startScene(snap));
            t += SCENE_MS;
        }
        this._after(t, () => this._showTitle(onDone));
        // ── Render loop ───────────────────────────────────────────────────────────
        let last = performance.now();
        const loop = (now) => {
            if (this.done)
                return;
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
    _startScene(scene) {
        if (this.done)
            return;
        this.currentScene = scene;
        this.sceneT = 0;
        this.panX = 0;
        this.particles = [];
        this.camShake = scene.id === 'matt' || scene.id === 'jose' ? 0.5 : 0;
        this._updateText(scene);
    }
    _updateText(scene) {
        if (!this.textLayer)
            return;
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
    _update(dt) {
        const sc = this.currentScene;
        if (!sc)
            return;
        // Camera pan
        this.panX += dt * 18;
        // Camera shake
        if (this.camShake > 0)
            this.camShake = Math.max(0, this.camShake - dt * 0.8);
        // Spawn particles
        if (sc.particleKind !== 'none')
            this._spawnParticles(sc, dt);
        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx * dt;
            p.y += p.vy * dt;
            p.life -= dt;
            p.alpha = Math.max(0, p.life / p.maxLife);
            if (p.life <= 0)
                this.particles.splice(i, 1);
        }
    }
    _spawnParticles(sc, dt) {
        const W = this.canvas.width;
        const H = this.canvas.height;
        const rate = sc.particleKind === 'sparks' ? 12 : 4;
        for (let i = 0; i < rate * dt; i++) {
            const x = Math.random() * W;
            const groundY = H * 0.62;
            let p;
            if (sc.particleKind === 'sparks') {
                p = {
                    x, y: groundY - Math.random() * H * 0.15,
                    vx: (Math.random() - 0.5) * 80,
                    vy: -Math.random() * 120 - 40,
                    life: 0.4 + Math.random() * 0.4, maxLife: 0.8,
                    size: 1.5 + Math.random() * 2, alpha: 1,
                };
            }
            else if (sc.particleKind === 'smoke') {
                p = {
                    x, y: groundY,
                    vx: (Math.random() - 0.5) * 20,
                    vy: -Math.random() * 30 - 10,
                    life: 1.5 + Math.random(), maxLife: 2.5,
                    size: 20 + Math.random() * 40, alpha: 0.3,
                };
            }
            else { // dust
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
    _draw() {
        const W = this.canvas.width;
        const H = this.canvas.height;
        const sc = this.currentScene;
        if (!sc)
            return;
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
        // ── Character silhouette ──────────────────────────────────────────────────
        if (sc.id !== 'melbourne')
            this._drawCharSilhouette(ctx, W, H, sc);
        // ── Speech bubble ────────────────────────────────────────────────────────
        if (sc.id !== 'melbourne' && sc.line && this.sceneT > 2.0) {
            this._drawSpeechBubble(ctx, W, H, sc);
        }
        // ── Vignette ─────────────────────────────────────────────────────────────
        const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.1, W / 2, H / 2, H * 0.8);
        vig.addColorStop(0, 'rgba(0,0,0,0)');
        vig.addColorStop(1, 'rgba(0,0,0,0.72)');
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, W, H);
        // ── Accent glow ───────────────────────────────────────────────────────────
        if (sc.id !== 'melbourne' && this.sceneT < 0.6) {
            const alpha = Math.max(0, 0.6 - this.sceneT) * 0.4;
            ctx.fillStyle = sc.accentColor + Math.round(alpha * 255).toString(16).padStart(2, '0');
            ctx.fillRect(0, 0, W, H);
        }
        ctx.restore();
    }
    _drawStars(ctx, W, H, sc) {
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
    _drawCity(ctx, W, H, sc) {
        const groundY = H * 0.62;
        const pan = (this.panX * 0.3) % W;
        // Draw buildings twice for seamless pan
        for (let pass = -1; pass <= 1; pass++) {
            const offsetX = pass * W - pan;
            for (const b of this.buildings) {
                const bx = b.x + offsetX;
                if (bx + b.w < -50 || bx > W + 50)
                    continue;
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
                        if (!lit)
                            continue;
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
    _drawRoad(ctx, W, H, sc) {
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
    _drawVan(ctx, x, y) {
        const s = 0.8;
        ctx.save();
        ctx.translate(x, y);
        // Body
        ctx.fillStyle = '#C1660A';
        ctx.beginPath();
        ctx.roundRect(0, 0, 90 * s, 42 * s, 4 * s);
        ctx.fill();
        // Cab
        ctx.fillStyle = '#A04A00';
        ctx.beginPath();
        ctx.roundRect(60 * s, 4 * s, 30 * s, 32 * s, 3 * s);
        ctx.fill();
        // Windshield
        ctx.fillStyle = '#6090D080';
        ctx.fillRect(64 * s, 7 * s, 22 * s, 16 * s);
        // Wheels
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(18 * s, 42 * s, 8 * s, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(72 * s, 42 * s, 8 * s, 0, Math.PI * 2);
        ctx.fill();
        // Headlights
        ctx.fillStyle = '#FFFF8088';
        ctx.fillRect(88 * s, 16 * s, 3 * s, 8 * s);
        ctx.restore();
    }
    _drawCharSilhouette(ctx, W, H, sc) {
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
        const skinTones = {
            jose: '#C8856A',
            matt: '#E8C0A0',
            tsuyoshi: '#F0D4B0',
            connie: '#F0C8A0',
            jarrad: '#E0B090',
            fabio: '#D4A070',
            phil: '#D8A888',
        };
        const skin = skinTones[sc.id] ?? '#D0A080';
        // ── TEM black uniform ─────────────────────────────────────────────────────
        const shirtCol = '#111111'; // black TEM shirt
        const pantCol = '#1a1a2a';
        // Boots
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(cx - 19, groundY - 22, 16, 22);
        ctx.fillRect(cx + 3, groundY - 22, 16, 22);
        // Pants
        ctx.fillStyle = pantCol;
        ctx.fillRect(cx - 18, groundY - hh * 0.44, 16, hh * 0.44 - 20);
        ctx.fillRect(cx + 2, groundY - hh * 0.44, 16, hh * 0.44 - 20);
        // Black TEM shirt
        ctx.fillStyle = shirtCol;
        ctx.fillRect(cx - 20, groundY - hh * 0.80, 40, hh * 0.37);
        // TEM logo on chest — white tree
        this._drawTEMLogoOnShirt(ctx, cx, groundY - hh * 0.70);
        // Collar / neck
        ctx.fillStyle = skin;
        ctx.fillRect(cx - 5, groundY - hh * 0.84, 10, hh * 0.06);
        // Arms — black sleeves
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
    /** Draw a small white TEM tree logo on the shirt chest */
    _drawTEMLogoOnShirt(ctx, cx, y) {
        ctx.save();
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        const s = 0.6; // scale
        // Trunk
        ctx.fillRect(cx - 2 * s, y + 8 * s, 4 * s, 8 * s);
        // Tree layers (3 triangles, bottom to top)
        const tri = (tx, ty, w, h) => {
            ctx.beginPath();
            ctx.moveTo(tx, ty + h);
            ctx.lineTo(tx - w / 2, ty + h);
            ctx.lineTo(tx, ty);
            ctx.lineTo(tx + w / 2, ty + h);
            ctx.closePath();
            ctx.fill();
        };
        tri(cx, y + 8 * s, 18 * s, 9 * s);
        tri(cx, y + 2 * s, 14 * s, 8 * s);
        tri(cx, y - 3 * s, 10 * s, 7 * s);
        ctx.restore();
    }
    _drawHairAndProp(ctx, sc, cx, groundY, hh, skin) {
        const hairStyles = {
            jose: { color: '#1a0800', kind: 'short' },
            matt: { color: '#2a1a00', kind: 'short' },
            tsuyoshi: { color: '#111', kind: 'mohawk' },
            connie: { color: '#E8D080', kind: 'long' },
            jarrad: { color: '#3a2000', kind: 'topknot' },
            fabio: { color: '#1a0800', kind: 'short' },
            phil: { color: '#CCCCCC', kind: 'short' },
        };
        const hs = hairStyles[sc.id] ?? { color: '#1a0800', kind: 'short' };
        ctx.fillStyle = hs.color;
        const hy = groundY - hh * 0.87;
        const hr = hh * 0.075;
        if (hs.kind === 'short') {
            ctx.beginPath();
            ctx.arc(cx, hy - hr * 0.7, hr * 1.1, Math.PI, 0);
            ctx.fill();
        }
        else if (hs.kind === 'mohawk') {
            ctx.fillRect(cx - 4, hy - hr * 2.2, 8, hr * 1.6);
            ctx.fillStyle = '#FF3A00';
            ctx.fillRect(cx - 3, hy - hr * 2.4, 6, hr * 0.6);
        }
        else if (hs.kind === 'long') {
            ctx.beginPath();
            ctx.arc(cx, hy - hr * 0.5, hr * 1.1, Math.PI, 0);
            ctx.fill();
            // Flowing hair
            ctx.fillRect(cx - hr * 1.2, hy, hr * 2.4, hh * 0.18);
        }
        else if (hs.kind === 'topknot') {
            ctx.beginPath();
            ctx.arc(cx, hy - hr * 0.5, hr, Math.PI, 0);
            ctx.fill();
            // Bun
            ctx.beginPath();
            ctx.arc(cx, hy - hr * 1.6, hr * 0.7, 0, Math.PI * 2);
            ctx.fill();
        }
        // Hard hats for construction chars
        if (sc.id === 'jose' || sc.id === 'matt' || sc.id === 'tsuyoshi') {
            ctx.fillStyle = '#F5C842';
            ctx.beginPath();
            ctx.ellipse(cx, hy - hr * 0.9, hr * 1.4, hr * 0.5, 0, Math.PI, 0);
            ctx.fill();
            ctx.fillRect(cx - hr * 1.4, hy - hr * 1.0, hr * 2.8, hr * 0.4);
        }
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
                ctx.fillRect(cx - 46, groundY - hh * 0.86, 38, 6); // lid
                ctx.fillRect(cx - 46, groundY - hh * 0.84, 38, 20); // box
                ctx.fillStyle = '#FF5533';
                ctx.fillRect(cx - 43, groundY - hh * 0.82, 32, 14); // pizza
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
    _drawParticles(ctx, sc) {
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
            }
            else {
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
    // ── Speech bubble ────────────────────────────────────────────────────────
    _drawSpeechBubble(ctx, W, H, sc) {
        const fadeIn = Math.min(1, (this.sceneT - 2.0) * 1.5); // 0→1 over 0.67s after 2s
        if (fadeIn <= 0)
            return;
        // Float: gentle up/down bob
        const bob = Math.sin(this.sceneT * 1.8) * 5;
        // Position: left-center of screen, char is at 68% right
        const bw = Math.min(W * 0.42, 280); // bubble width
        const bh = 72; // bubble height
        const bx = W * 0.04; // left edge
        const by = H * 0.38 + bob; // vertical mid-scene
        const r = 14; // corner radius
        const tx = bx + bw; // tail points right toward character
        ctx.save();
        ctx.globalAlpha = fadeIn;
        // ── Drop shadow ────────────────────────────────────────────────────────
        ctx.shadowColor = 'rgba(0,0,0,0.45)';
        ctx.shadowBlur = 12;
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
        ctx.shadowBlur = 0;
        ctx.shadowOffsetY = 0;
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
        const lines = [];
        let cur = '';
        for (const w of words) {
            const test = cur ? `${cur} ${w}` : w;
            if (ctx.measureText(test).width > maxW && cur) {
                lines.push(cur);
                cur = w;
            }
            else {
                cur = test;
            }
        }
        if (cur)
            lines.push(cur);
        const lineH = fontSize + 5;
        const totalH = lines.length * lineH;
        const startY = by + (bh - totalH) / 2 + lineH / 2 + 2;
        lines.forEach((line, i) => {
            ctx.fillText(line, bx + 12, startY + i * lineH, maxW);
        });
        ctx.restore();
    }
    // ── Title card ────────────────────────────────────────────────────────────
    _showTitle(onDone) {
        if (this.done)
            return;
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
    _startAudio() {
        try {
            const audio = new Audio();
            audio.src = AUDIO.theme;
            audio.volume = 0.75; // start loud immediately — user already tapped
            this.themeAudio = audio;
            audio.play().catch(() => { this.themeAudio = null; });
        }
        catch { }
    }
    _finish(onDone) {
        if (this.done)
            return;
        this.done = true;
        this.timers.forEach(clearTimeout);
        cancelAnimationFrame(this.rafId);
        if (this.themeAudio) {
            const a = this.themeAudio;
            let vol = a.volume;
            const fade = setInterval(() => {
                vol = Math.max(0, vol - 0.06);
                a.volume = vol;
                if (vol <= 0) {
                    clearInterval(fade);
                    a.pause();
                    a.src = '';
                }
            }, 60);
        }
        this.overlay?.remove();
        onDone();
    }
    _after(ms, fn) {
        this.timers.push(setTimeout(fn, ms));
    }
    _genBuildings() {
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
    _resizeCanvas() {
        if (!this.canvas)
            return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    _injectStyles() {
        if (document.getElementById('intro-styles'))
            return;
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
