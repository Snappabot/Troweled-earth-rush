/**
 * IntroSequence — GTA-style cinematic intro
 * Character card reveals, real theme song, skip button.
 */

import { AUDIO } from '../audio/AudioAssets';

const BASE_URL: string = ((import.meta as any).env?.BASE_URL as string) || '/';
const WHITE_LOGO = `${BASE_URL}tem-logo-white.jpg`;

// ── Character reveal cards ────────────────────────────────────────────────────
const CARDS = [
  {
    name: 'JOSE GARCIA',
    role: 'The Spaniard',
    sub: 'Master of Blood Red Clay',
    line: '"From blood red clay to concrete\'s cold embrace."',
    color: '#8B6A3A',
    bg: 'linear-gradient(135deg, #1a0e06 0%, #2d1a0a 60%, #0d0804 100%)',
  },
  {
    name: 'MATT',
    role: 'The Warlord',
    sub: 'Lead Plasterer',
    line: '"Unyielding strokes cut deep and true."',
    color: '#C1666B',
    bg: 'linear-gradient(135deg, #1a0608 0%, #2d0a0c 60%, #0d0406 100%)',
  },
  {
    name: 'TSUYOSHI',
    role: 'The Samurai',
    sub: 'Tadelakt Specialist',
    line: '"The future written in shadows he\'s claimed as his own."',
    color: '#4A8A6A',
    bg: 'linear-gradient(135deg, #060f0a 0%, #0a2018 60%, #040d08 100%)',
  },
  {
    name: 'CONNIE',
    role: 'Operations Queen',
    sub: 'Born in Germany. Raised on plaster.',
    line: '"Ha ha ha ha!"',
    color: '#E8A050',
    bg: 'linear-gradient(135deg, #160c02 0%, #2a1804 60%, #0e0801 100%)',
  },
  {
    name: 'JARRAD',
    role: 'Scaffold Specialist',
    sub: 'Topknot. Phone in hand. No hard hat.',
    line: '"I\'ve been waiting fifteen minutes."',
    color: '#8080C0',
    bg: 'linear-gradient(135deg, #06060f 0%, #0c0c24 60%, #040408 100%)',
  },
  {
    name: 'FABIO',
    role: 'Plasterer',
    sub: 'Pizza Consultant',
    line: '"Ehhhh."',
    color: '#D4602A',
    bg: 'linear-gradient(135deg, #150802 0%, #291004 60%, #0c0601 100%)',
  },
  {
    name: 'PHIL',
    role: 'The Quiet Legend',
    sub: 'Renders. Doesn\'t talk much.',
    line: '"Right then. Let\'s go."',
    color: '#A0B8A0',
    bg: 'linear-gradient(135deg, #080f08 0%, #101e10 60%, #060c06 100%)',
  },
];

const CARD_MS    = 2600;  // time per card
const FADE_MS    = 400;

export class IntroSequence {
  private overlay!: HTMLDivElement;
  private themeAudio: HTMLAudioElement | null = null;
  private done = false;
  private timers: ReturnType<typeof setTimeout>[] = [];

  play(): Promise<void> {
    return new Promise(resolve => this._build(resolve));
  }

  private _build(onDone: () => void): void {
    this._injectStyles();

    this.overlay = document.createElement('div');
    this.overlay.id = 'intro-overlay';
    this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:50000; background:#000; overflow:hidden;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    // Letterbox bars
    const topBar = document.createElement('div');
    topBar.className = 'intro-bar intro-bar-top';
    const botBar = document.createElement('div');
    botBar.className = 'intro-bar intro-bar-bot';

    // Skip
    const skip = document.createElement('button');
    skip.textContent = 'SKIP ▶';
    skip.style.cssText = `
      position:absolute; bottom:30px; right:24px; z-index:20;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2);
      color:rgba(255,255,255,0.5); font-size:11px; font-weight:700;
      padding:7px 14px; border-radius:20px; cursor:pointer;
      letter-spacing:1px; touch-action:manipulation;
    `;
    skip.addEventListener('click', () => this._finish(onDone));

    // Card stage
    const stage = document.createElement('div');
    stage.id = 'intro-stage';
    stage.style.cssText = `
      position:absolute; inset:0; z-index:5;
      display:flex; align-items:center; justify-content:center;
    `;

    this.overlay.appendChild(topBar);
    this.overlay.appendChild(botBar);
    this.overlay.appendChild(stage);
    this.overlay.appendChild(skip);
    document.body.appendChild(this.overlay);

    // Start audio
    this._startAudio();

    // ── Phase 1: Studio logo (0–2s) ───────────────────────────────────────
    this._showStudio(stage);

    // ── Phase 2: Character cards ───────────────────────────────────────────
    let t = 2000;
    for (const card of CARDS) {
      const snap = card;
      this._after(t, () => this._showCard(stage, snap));
      t += CARD_MS;
    }

    // ── Phase 3: Title card ────────────────────────────────────────────────
    this._after(t, () => this._showTitle(stage, onDone));
  }

  private _showStudio(stage: HTMLDivElement): void {
    stage.innerHTML = `
      <div class="intro-studio" style="animation:introFadeIn 0.8s ease both; text-align:center;">
        <img src="${WHITE_LOGO}" onerror="this.style.display='none'" alt="TEM"
          style="height:clamp(60px,12vw,90px); width:auto; object-fit:contain; filter:brightness(0.85);">
        <div style="color:rgba(200,168,106,0.55); font-size:10px; letter-spacing:4px; margin-top:14px; font-weight:700;">
          TROWELED EARTH MELBOURNE PRESENTS
        </div>
      </div>
    `;
  }

  private _showCard(stage: HTMLDivElement, card: typeof CARDS[0]): void {
    if (this.done) return;

    const wrap = document.createElement('div');
    wrap.className = 'intro-card-wrap';
    wrap.style.cssText = `
      position:absolute; inset:0; animation:introCardIn ${FADE_MS}ms ease both;
      display:flex; align-items:center; justify-content:flex-start;
      background: ${card.bg};
    `;

    // Accent stripe
    const stripe = document.createElement('div');
    stripe.style.cssText = `
      position:absolute; left:0; top:0; bottom:0; width:4px;
      background:${card.color}; opacity:0.9;
    `;

    // Diagonal accent
    const diag = document.createElement('div');
    diag.style.cssText = `
      position:absolute; right:0; top:0; bottom:0; width:40%;
      background:linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(255,255,255,0.02) 100%);
      clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
    `;

    const text = document.createElement('div');
    text.style.cssText = `
      position:relative; z-index:2;
      padding: 0 0 0 clamp(24px, 6vw, 60px);
      animation:introTextIn 0.5s 0.15s ease both;
    `;
    text.innerHTML = `
      <div style="color:${card.color}; font-size:clamp(9px,2.5vw,12px); font-weight:700;
                  letter-spacing:4px; text-transform:uppercase; margin-bottom:10px; opacity:0.8;">
        ${card.role}
      </div>
      <div style="color:#fff; font-size:clamp(28px,8vw,56px); font-weight:900;
                  letter-spacing:2px; line-height:1; margin-bottom:10px;
                  text-shadow:0 2px 20px rgba(0,0,0,0.8);">
        ${card.name}
      </div>
      <div style="color:rgba(240,232,216,0.5); font-size:clamp(11px,3vw,15px);
                  font-weight:400; letter-spacing:0.5px; margin-bottom:18px;">
        ${card.sub}
      </div>
      <div style="color:${card.color}; font-size:clamp(12px,3vw,16px);
                  font-style:italic; opacity:0.75; letter-spacing:0.5px;">
        ${card.line}
      </div>
    `;

    // Scanlines overlay
    const scan = document.createElement('div');
    scan.style.cssText = `
      position:absolute; inset:0; z-index:1; pointer-events:none; opacity:0.03;
      background: repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px);
    `;

    wrap.appendChild(stripe);
    wrap.appendChild(diag);
    wrap.appendChild(text);
    wrap.appendChild(scan);

    stage.innerHTML = '';
    stage.appendChild(wrap);
  }

  private _showTitle(stage: HTMLDivElement, onDone: () => void): void {
    if (this.done) return;

    stage.innerHTML = `
      <div style="animation:introTitleIn 0.6s ease both; text-align:center; position:relative; z-index:5;">
        <img src="${WHITE_LOGO}" onerror="this.style.display='none'" alt="TEM"
          style="height:clamp(70px,14vw,100px); width:auto; object-fit:contain;
                 margin-bottom:20px; filter:drop-shadow(0 0 30px rgba(200,168,106,0.4)) brightness(0.9);">
        <div style="color:#C8A86A; font-size:clamp(22px,7vw,48px); font-weight:900;
                    letter-spacing:5px; text-shadow:0 0 60px rgba(200,168,106,0.5);">
          TROWELED EARTH RUSH
        </div>
        <div style="color:rgba(200,168,106,0.45); font-size:clamp(10px,2.5vw,13px);
                    letter-spacing:3px; margin-top:10px;">
          MELBOURNE
        </div>
      </div>
    `;

    // Darken bg for title
    stage.style.background = 'radial-gradient(ellipse at center, #1a1208 0%, #000 70%)';

    this._after(2600, () => {
      this.overlay.style.transition = `opacity ${FADE_MS}ms ease`;
      this.overlay.style.opacity = '0';
      this._after(FADE_MS + 50, () => this._finish(onDone));
    });
  }

  private _startAudio(): void {
    try {
      const audio = new Audio();
      audio.src = AUDIO.theme;
      audio.volume = 0;
      audio.play().then(() => {
        this.themeAudio = audio;
        let vol = 0;
        const fadeIn = setInterval(() => {
          vol = Math.min(vol + 0.04, 0.72);
          audio.volume = vol;
          if (vol >= 0.72) clearInterval(fadeIn);
        }, 80);
      }).catch(() => {/* silent on block */});
    } catch {}
  }

  private _finish(onDone: () => void): void {
    if (this.done) return;
    this.done = true;
    this.timers.forEach(clearTimeout);
    // Fade out audio
    if (this.themeAudio) {
      const audio = this.themeAudio;
      let vol = audio.volume;
      const fade = setInterval(() => {
        vol = Math.max(0, vol - 0.06);
        audio.volume = vol;
        if (vol <= 0) { clearInterval(fade); audio.pause(); audio.src = ''; }
      }, 60);
    }
    this.overlay?.remove();
    onDone();
  }

  private _after(ms: number, fn: () => void): void {
    this.timers.push(setTimeout(fn, ms));
  }

  private _injectStyles(): void {
    if (document.getElementById('intro-styles')) return;
    const s = document.createElement('style');
    s.id = 'intro-styles';
    s.textContent = `
      .intro-bar {
        position:absolute; left:0; right:0; z-index:10;
        background:#000; height:clamp(40px,8vh,70px);
        pointer-events:none;
      }
      .intro-bar-top { top:0; }
      .intro-bar-bot { bottom:0; }

      @keyframes introFadeIn {
        from { opacity:0; transform:scale(0.96) }
        to   { opacity:1; transform:scale(1) }
      }
      @keyframes introCardIn {
        from { opacity:0; clip-path:inset(0 100% 0 0) }
        to   { opacity:1; clip-path:inset(0 0% 0 0) }
      }
      @keyframes introTextIn {
        from { opacity:0; transform:translateX(-24px) }
        to   { opacity:1; transform:translateX(0) }
      }
      @keyframes introTitleIn {
        from { opacity:0; transform:scale(1.08) }
        to   { opacity:1; transform:scale(1) }
      }
    `;
    document.head.appendChild(s);
  }
}
