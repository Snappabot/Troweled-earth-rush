/**
 * IntroSequence — GTA-style cinematic intro
 * Fully animated canvas scenes per character, particles, film grain, camera pan.
 * Real theme song plays throughout.
 */
import { AUDIO } from '../audio/AudioAssets';
import { SpeechVoice } from '../audio/SpeechVoice';
const BASE_URL = import.meta.env?.BASE_URL || '/';
const WHITE_LOGO = `${BASE_URL}tem-logo-white.jpg`;
const SCENES = [
    // ── Opening: Melbourne ──────────────────────────────────────────────────
    {
        id: 'melbourne',
        name: 'TROWELED EARTH MELBOURNE',
        role: 'presents',
        line: '',
        accentColor: '#C8A86A',
        skyTop: '#020408', skyBot: '#0a1020',
        particleColor: '#C8A86A', particleKind: 'dust',
        buildingTint: '#0d1824', spotColor: '#C8A86A22',
        voiceChar: 'Narrator',
    },
    // ── Jose ──────────────────────────────────────────────────────────────
    {
        id: 'jose',
        name: 'JOSE GARCIA',
        role: 'The Spaniard · Master of Clay',
        line: 'Vámonos — I was getting bored.',
        accentColor: '#8B6A3A',
        skyTop: '#1a0400', skyBot: '#2d0a00',
        particleColor: '#FF6030', particleKind: 'sparks',
        buildingTint: '#1a0800', spotColor: '#8B3A1A44',
        voiceChar: 'Jose',
    },
    // ── Matt ──────────────────────────────────────────────────────────────
    {
        id: 'matt',
        name: 'MATT',
        role: 'The Warlord · Lead Plasterer',
        line: 'Took your time.',
        accentColor: '#C1666B',
        skyTop: '#1a0002', skyBot: '#380008',
        particleColor: '#FF4050', particleKind: 'sparks',
        buildingTint: '#200008', spotColor: '#C1666B33',
        voiceChar: 'Matt',
    },
    // ── Tsuyoshi ──────────────────────────────────────────────────────────
    {
        id: 'tsuyoshi',
        name: 'TSUYOSHI',
        role: 'The Samurai · Tadelakt Specialist',
        line: 'Positions master. Always.',
        accentColor: '#4A8A6A',
        skyTop: '#00100a', skyBot: '#001a10',
        particleColor: '#40FFB0', particleKind: 'dust',
        buildingTint: '#002010', spotColor: '#4A8A6A33',
        voiceChar: 'Tsuyoshi',
    },
    // ── Connie ────────────────────────────────────────────────────────────
    {
        id: 'connie',
        name: 'CONNIE',
        role: 'Operations Queen · Born in Germany',
        line: 'Ha ha ha ha!',
        accentColor: '#E8A050',
        skyTop: '#1a0e00', skyBot: '#2d1800',
        particleColor: '#FFD080', particleKind: 'smoke',
        buildingTint: '#1a0c00', spotColor: '#E8A05033',
        voiceChar: 'Connie',
    },
    // ── Jarrad ────────────────────────────────────────────────────────────
    {
        id: 'jarrad',
        name: 'JARRAD',
        role: 'Scaffold Specialist · Topknot Philosopher',
        line: "I've been waiting fifteen minutes.",
        accentColor: '#8080C0',
        skyTop: '#04000f', skyBot: '#08001e',
        particleColor: '#8080FF', particleKind: 'dust',
        buildingTint: '#08001a', spotColor: '#8080C033',
        voiceChar: 'Jarrad',
    },
    // ── Fabio ─────────────────────────────────────────────────────────────
    {
        id: 'fabio',
        name: 'FABIO',
        role: 'Plasterer · Pizza Consultant',
        line: 'Ehhhh.',
        accentColor: '#D4602A',
        skyTop: '#150400', skyBot: '#290800',
        particleColor: '#FF8840', particleKind: 'smoke',
        buildingTint: '#180600', spotColor: '#D4602A33',
        voiceChar: 'Fabio',
    },
    // ── Phil ──────────────────────────────────────────────────────────────
    {
        id: 'phil',
        name: 'PHIL',
        role: 'The Quiet Legend · Renders',
        line: "Right then. Let's go.",
        accentColor: '#A0B8A0',
        skyTop: '#040a04', skyBot: '#081408',
        particleColor: '#80C080', particleKind: 'dust',
        buildingTint: '#060e06', spotColor: '#A0B8A033',
        voiceChar: 'Phil',
    },
];
const SCENE_MS = 5000; // ms per character scene
const OPEN_MS = 5000; // opening city shot
const TITLE_MS = 4000; // title hold
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
        return new Promise(resolve => this._build(resolve));
    }
    _build(onDone) {
        this._injectStyles();
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
        if (scene.line)
            SpeechVoice.speak(scene.line, scene.voiceChar);
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
        const cx = W * 0.72;
        const fadeIn = Math.min(1, this.sceneT * 2.5);
        ctx.save();
        ctx.globalAlpha = fadeIn;
        // Glow behind figure
        const glow = ctx.createRadialGradient(cx, groundY - 60, 10, cx, groundY - 60, 120);
        glow.addColorStop(0, sc.accentColor + '40');
        glow.addColorStop(1, 'transparent');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.ellipse(cx, groundY - 60, 120, 180, 0, 0, Math.PI * 2);
        ctx.fill();
        // Shadow on ground
        ctx.fillStyle = 'rgba(0,0,0,0.5)';
        ctx.beginPath();
        ctx.ellipse(cx, groundY + 5, 35, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        // Silhouette — tradesperson figure
        ctx.fillStyle = '#000000E0';
        const hh = Math.min(H * 0.48, 220); // figure height
        // Legs
        ctx.fillRect(cx - 16, groundY - hh * 0.42, 14, hh * 0.42);
        ctx.fillRect(cx + 2, groundY - hh * 0.42, 14, hh * 0.42);
        // Torso
        ctx.fillRect(cx - 18, groundY - hh * 0.78, 36, hh * 0.37);
        // Head
        ctx.beginPath();
        ctx.arc(cx, groundY - hh * 0.84, hh * 0.09, 0, Math.PI * 2);
        ctx.fill();
        // Character-specific props
        this._drawProp(ctx, sc, cx, groundY, hh);
        // Accent edge light on figure
        ctx.strokeStyle = sc.accentColor + '90';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, groundY - hh * 0.84, hh * 0.09 + 1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    }
    _drawProp(ctx, sc, cx, groundY, hh) {
        ctx.fillStyle = '#333';
        switch (sc.id) {
            case 'jose':
            case 'matt':
                // Trowel — arm out + blade
                ctx.fillRect(cx + 18, groundY - hh * 0.62, 28, 5); // arm
                ctx.fillStyle = '#8899AA';
                ctx.fillRect(cx + 44, groundY - hh * 0.64, 22, 8); // blade
                break;
            case 'tsuyoshi':
                // Bucket
                ctx.fillRect(cx - 30, groundY - hh * 0.30, 4, hh * 0.28); // arm down
                ctx.strokeStyle = '#666';
                ctx.lineWidth = 2;
                ctx.strokeRect(cx - 38, groundY - hh * 0.04, 20, 16);
                break;
            case 'connie':
                // Clipboard
                ctx.fillRect(cx + 18, groundY - hh * 0.62, 4, hh * 0.18); // arm
                ctx.fillStyle = '#DDDDAA';
                ctx.fillRect(cx + 20, groundY - hh * 0.66, 18, 24);
                break;
            case 'jarrad':
                // Phone glow
                ctx.fillRect(cx + 18, groundY - hh * 0.66, 4, hh * 0.18);
                ctx.fillStyle = '#4488FF';
                ctx.shadowColor = '#4488FF';
                ctx.shadowBlur = 14;
                ctx.fillRect(cx + 22, groundY - hh * 0.68, 12, 20);
                ctx.shadowBlur = 0;
                break;
            case 'fabio':
                // Pizza box
                ctx.fillRect(cx + 18, groundY - hh * 0.56, 4, hh * 0.14);
                ctx.fillStyle = '#AA8844';
                ctx.fillRect(cx + 20, groundY - hh * 0.60, 30, 18);
                ctx.fillStyle = '#FF4422';
                ctx.fillRect(cx + 24, groundY - hh * 0.58, 22, 14);
                break;
            case 'phil':
                // Tea cup
                ctx.fillRect(cx - 30, groundY - hh * 0.50, 4, hh * 0.14);
                ctx.fillStyle = '#BBDDCC';
                ctx.beginPath();
                ctx.arc(cx - 34, groundY - hh * 0.36, 8, 0, Math.PI * 2);
                ctx.fill();
                break;
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
    // ── Title card ────────────────────────────────────────────────────────────
    _showTitle(onDone) {
        if (this.done)
            return;
        SpeechVoice.cancel();
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
            audio.volume = 0;
            audio.play().then(() => {
                this.themeAudio = audio;
                let vol = 0;
                const fade = setInterval(() => {
                    vol = Math.min(vol + 0.04, 0.72);
                    audio.volume = vol;
                    if (vol >= 0.72)
                        clearInterval(fade);
                }, 80);
            }).catch(() => { });
        }
        catch { }
    }
    _finish(onDone) {
        if (this.done)
            return;
        this.done = true;
        this.timers.forEach(clearTimeout);
        cancelAnimationFrame(this.rafId);
        SpeechVoice.cancel();
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
    `;
        document.head.appendChild(s);
    }
}
