/**
 * ClosingCredits — full-screen scrolling credits with real audio track.
 * Triggered after game completion / from start menu.
 */
import { AUDIO } from '../audio/AudioAssets';
const CREDITS_LINES = [
    { text: '🌳', size: 64, color: '#C8A86A', gap: 12 },
    { text: 'TROWELED EARTH RUSH', size: 32, color: '#C8A86A', weight: 900, spacing: 4, gap: 8 },
    { text: 'A TROWELED EARTH MELBOURNE PRODUCTION', size: 11, color: 'rgba(200,168,106,0.5)', spacing: 2, gap: 48 },
    { text: 'CREW', size: 13, color: '#C8A86A', weight: 700, spacing: 3, gap: 20 },
    { text: 'MATT', size: 16, color: '#C1666B', weight: 800, gap: 4 },
    { text: 'LEAD PLASTERER · THE WARLORD', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'JOSE GARCIA', size: 16, color: '#8B6A3A', weight: 800, gap: 4 },
    { text: 'THE SPANIARD · MASTER OF CLAY', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'TSUYOSHI', size: 16, color: '#4A8A6A', weight: 800, gap: 4 },
    { text: 'SAMURAI ENGINEER · TADELAKT SPECIALIST', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'CONNIE', size: 16, color: '#E8A050', weight: 800, gap: 4 },
    { text: 'OPERATIONS QUEEN · BORN IN GERMANY', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'JARRAD', size: 16, color: '#8080C0', weight: 800, gap: 4 },
    { text: 'SCAFFOLD SPECIALIST · TOPKNOT PHILOSOPHER', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'FABIO', size: 16, color: '#D4602A', weight: 800, gap: 4 },
    { text: 'PLASTERER · PIZZA CONSULTANT · "EHHHH"', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'PHIL', size: 16, color: '#A0B8A0', weight: 800, gap: 4 },
    { text: 'RENDERS · QUIET LEGEND', size: 11, color: 'rgba(240,232,216,0.5)', gap: 40 },
    { text: 'SUPPORTING CAST', size: 13, color: '#C8A86A', weight: 700, spacing: 3, gap: 20 },
    { text: 'MIKAYLA', size: 16, color: '#FF9DC4', weight: 800, gap: 4 },
    { text: 'WORKSHOP MANAGER · JUMP ROPE CHAMPION', size: 11, color: 'rgba(240,232,216,0.5)', gap: 20 },
    { text: 'JOE', size: 16, color: '#C8A86A', weight: 800, gap: 4 },
    { text: 'SUPPLIES · MAN OF FEW WORDS', size: 11, color: 'rgba(240,232,216,0.5)', gap: 40 },
    { text: 'PRODUCTS FEATURED', size: 13, color: '#C8A86A', weight: 700, spacing: 3, gap: 20 },
    { text: 'Blood Red Clay · Marbellino · Tadelakt', size: 14, color: 'rgba(240,232,216,0.7)', gap: 8 },
    { text: 'Antique Stucco · Metallic · Sgraffito', size: 14, color: 'rgba(240,232,216,0.7)', gap: 8 },
    { text: 'Concrete Polish · Venetian Plaster · Limewash', size: 14, color: 'rgba(240,232,216,0.7)', gap: 40 },
    { text: 'RADIO STATIONS', size: 13, color: '#C8A86A', weight: 700, spacing: 3, gap: 20 },
    { text: 'TEM FM 88.3 · Brunswick Beats 99.9', size: 13, color: 'rgba(240,232,216,0.6)', gap: 8 },
    { text: "Connie's Gold 103.7 · The Scaffold 107.1", size: 13, color: 'rgba(240,232,216,0.6)', gap: 8 },
    { text: "Fabio's Pizza Radio 92.5", size: 13, color: 'rgba(240,232,216,0.6)', gap: 40 },
    { text: 'CITY LOCATIONS', size: 13, color: '#C8A86A', weight: 700, spacing: 3, gap: 20 },
    { text: 'Melbourne CBD · Fitzroy · Brunswick', size: 13, color: 'rgba(240,232,216,0.6)', gap: 8 },
    { text: 'Richmond · St Kilda · Footscray', size: 13, color: 'rgba(240,232,216,0.6)', gap: 40 },
    { text: 'GAME DESIGN & DEVELOPMENT', size: 13, color: '#C8A86A', weight: 700, spacing: 3, gap: 20 },
    { text: 'Snappabot', size: 18, color: 'rgba(240,232,216,0.9)', weight: 800, gap: 4 },
    { text: 'Three.js · TypeScript · Vite', size: 11, color: 'rgba(200,168,106,0.4)', gap: 40 },
    { text: 'MADE WITH 🌳 IN MELBOURNE', size: 14, color: '#C8A86A', spacing: 2, gap: 40 },
    { text: '"The walls remember every hand that shaped them."', size: 14, color: 'rgba(200,168,106,0.6)', italic: true, gap: 60 },
    { text: 'TROWELED EARTH MELBOURNE', size: 14, color: '#C8A86A', spacing: 2, gap: 8 },
    { text: 'troweledearthmelbourne.com.au', size: 12, color: 'rgba(200,168,106,0.4)', gap: 80 },
];
export class ClosingCredits {
    overlay;
    creditsAudio = null;
    rafId = 0;
    /** Show closing credits. Resolves when done or skipped. */
    show() {
        return new Promise(resolve => this._build(resolve));
    }
    _build(onDone) {
        this._injectStyles();
        this.overlay = document.createElement('div');
        this.overlay.id = 'credits-overlay';
        this.overlay.style.cssText = `
      position:fixed; inset:0; z-index:60000;
      background:#050402;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;
        // ── Skip button ───────────────────────────────────────────────────────────
        const skip = document.createElement('button');
        skip.textContent = 'SKIP ▶';
        skip.style.cssText = `
      position:absolute; top:20px; right:20px; z-index:10;
      background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.2);
      color:rgba(255,255,255,0.5); font-size:12px; font-weight:700;
      padding:8px 16px; border-radius:20px; cursor:pointer;
      letter-spacing:1px; touch-action:manipulation;
    `;
        skip.addEventListener('click', () => this._finish(onDone));
        // ── Scrolling container ───────────────────────────────────────────────────
        const scroller = document.createElement('div');
        scroller.id = 'credits-scroller';
        scroller.style.cssText = `
      position:absolute; left:50%; transform:translateX(-50%);
      width:100%; max-width:600px;
      top:100vh;
      text-align:center;
      padding:0 32px;
      box-sizing:border-box;
    `;
        // Build credit lines
        let totalHeight = 0;
        CREDITS_LINES.forEach(line => {
            const el = document.createElement('div');
            const size = line.size || 14;
            el.textContent = line.text;
            el.style.cssText = `
        color: ${line.color || 'rgba(240,232,216,0.8)'};
        font-size: ${size}px;
        font-weight: ${line.weight || 400};
        letter-spacing: ${line.spacing || 0}px;
        font-style: ${line.italic ? 'italic' : 'normal'};
        margin-bottom: ${line.gap || 16}px;
        line-height: 1.4;
      `;
            scroller.appendChild(el);
            totalHeight += size * 1.4 + (line.gap || 16);
        });
        // End spacer
        const spacer = document.createElement('div');
        spacer.style.height = '100vh';
        scroller.appendChild(spacer);
        // ── Vignette ──────────────────────────────────────────────────────────────
        const vignette = document.createElement('div');
        vignette.style.cssText = `
      position:absolute; inset:0; z-index:5; pointer-events:none;
      background: linear-gradient(
        180deg,
        rgba(5,4,2,1) 0%,
        rgba(5,4,2,0) 8%,
        rgba(5,4,2,0) 92%,
        rgba(5,4,2,1) 100%
      );
    `;
        this.overlay.appendChild(skip);
        this.overlay.appendChild(scroller);
        this.overlay.appendChild(vignette);
        document.body.appendChild(this.overlay);
        // ── Audio ─────────────────────────────────────────────────────────────────
        this._startAudio();
        // ── Scroll animation ──────────────────────────────────────────────────────
        const scrollSpeed = 0.6; // px per frame at 60fps
        let scrollY = -window.innerHeight; // start off-screen (top = 100vh already)
        const totalScroll = totalHeight + window.innerHeight;
        const tick = () => {
            if (!this.overlay.isConnected)
                return;
            scrollY += scrollSpeed;
            scroller.style.transform = `translateX(-50%) translateY(-${scrollY}px)`;
            if (scrollY > totalScroll) {
                this._finish(onDone);
                return;
            }
            this.rafId = requestAnimationFrame(tick);
        };
        this.rafId = requestAnimationFrame(tick);
    }
    _startAudio() {
        try {
            const audio = new Audio();
            audio.src = AUDIO.credits;
            audio.volume = 0;
            audio.play().then(() => {
                this.creditsAudio = audio;
                let vol = 0;
                const fadeIn = setInterval(() => {
                    vol = Math.min(vol + 0.02, 0.65);
                    audio.volume = vol;
                    if (vol >= 0.65)
                        clearInterval(fadeIn);
                }, 80);
            }).catch(() => { });
        }
        catch { }
    }
    _finish(onDone) {
        cancelAnimationFrame(this.rafId);
        if (this.creditsAudio) {
            const audio = this.creditsAudio;
            let vol = audio.volume;
            const fade = setInterval(() => {
                vol = Math.max(0, vol - 0.04);
                audio.volume = vol;
                if (vol <= 0) {
                    clearInterval(fade);
                    audio.pause();
                    audio.src = '';
                }
            }, 60);
        }
        this.overlay.style.transition = 'opacity 0.8s';
        this.overlay.style.opacity = '0';
        setTimeout(() => { this.overlay.remove(); onDone(); }, 850);
    }
    _injectStyles() {
        if (document.getElementById('credits-styles'))
            return;
        const s = document.createElement('style');
        s.id = 'credits-styles';
        s.textContent = `
      #credits-overlay {
        background: linear-gradient(180deg, #050402 0%, #080604 50%, #050402 100%);
      }
    `;
        document.head.appendChild(s);
    }
}
