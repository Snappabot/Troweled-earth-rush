import type { RivalCrew, RivalMember, RivalHairStyle } from '../data/RivalCrews';
import { CREW_ROSTER } from '../data/CrewPerks';
import type { CrewPerk } from '../data/CrewPerks';

// ── BattleScreen — dramatic pre-battle overlay for CONTRACT WARS ─────────────

export class BattleScreen {
  private _el: HTMLElement | null = null;
  private _timer: ReturnType<typeof setTimeout> | null = null;

  show(yourCrew: string[], rival: RivalCrew, onStart: () => void): void {
    this.hide();

    const ov = document.createElement('div');
    ov.id = 'battle-screen-ov';
    ov.style.cssText = `
      position:fixed; inset:0; z-index:15000;
      background:rgba(0,0,0,0.95);
      display:flex; flex-direction:column; align-items:center;
      justify-content:space-between;
      font-family:'Arial Black',Arial,sans-serif;
      overflow:hidden;
      padding: 0;
    `;

    // ── Animated background sparks ────────────────────────────────────────────
    const sparksCanvas = document.createElement('canvas');
    sparksCanvas.style.cssText = `
      position:absolute; inset:0; width:100%; height:100%; pointer-events:none;
    `;
    ov.appendChild(sparksCanvas);
    this._animateSparks(sparksCanvas);

    // ── Top title ─────────────────────────────────────────────────────────────
    const titleWrap = document.createElement('div');
    titleWrap.style.cssText = `
      width:100%; text-align:center; padding:20px 0 8px;
      position:relative; z-index:2;
    `;
    titleWrap.innerHTML = `
      <div style="font-size:clamp(28px,8vw,52px);font-weight:900;
        background:linear-gradient(180deg,#FFD700,#FF4400);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        background-clip:text;letter-spacing:3px;text-shadow:none;
        line-height:1.1;">⚔️ CONTRACT WAR</div>
      <div style="color:#aaa;font-size:clamp(11px,3vw,15px);letter-spacing:1px;
        margin-top:6px;font-weight:700;">FIRST CREW TO FINISH WINS THE CONTRACT</div>
    `;
    ov.appendChild(titleWrap);

    // ── Main battle row ───────────────────────────────────────────────────────
    const row = document.createElement('div');
    row.style.cssText = `
      display:flex; flex-direction:row; align-items:center;
      justify-content:center; gap:clamp(10px,4vw,32px);
      width:100%; padding:0 12px; box-sizing:border-box;
      flex:1; position:relative; z-index:2;
    `;

    // ── YOUR CREW panel ───────────────────────────────────────────────────────
    const yourPanel = this._makeCrewPanel('YOUR CREW', yourCrew, '#2ECC40', false);
    row.appendChild(yourPanel);

    // ── VS CENTER ─────────────────────────────────────────────────────────────
    const vsEl = document.createElement('div');
    vsEl.style.cssText = `
      display:flex; flex-direction:column; align-items:center;
      gap:6px; flex-shrink:0;
    `;
    vsEl.innerHTML = `
      <div id="battle-vs-text" style="
        font-size:clamp(32px,10vw,64px); font-weight:900;
        color:#FF4444; text-shadow:0 0 30px #FF4444,0 0 60px #FF000066;
        animation:battle-vs-pulse 0.8s ease-in-out infinite alternate;
        line-height:1;
      ">VS</div>
      <div style="color:#666;font-size:10px;letter-spacing:2px;">WINNER TAKES ALL</div>
    `;
    // Inject animation keyframe
    if (!document.getElementById('battle-vs-style')) {
      const style = document.createElement('style');
      style.id = 'battle-vs-style';
      style.textContent = `
        @keyframes battle-vs-pulse {
          from { text-shadow: 0 0 20px #FF4444, 0 0 40px #FF000066; transform:scale(1.0); }
          to   { text-shadow: 0 0 40px #FF6666, 0 0 80px #FF0000aa; transform:scale(1.08); }
        }
        @keyframes battle-glow-green {
          from { box-shadow: 0 0 12px #2ECC4060, inset 0 0 8px #2ECC4020; }
          to   { box-shadow: 0 0 28px #2ECC40bb, inset 0 0 16px #2ECC4040; }
        }
        @keyframes battle-glow-red {
          from { box-shadow: 0 0 12px #FF444460, inset 0 0 8px #FF444420; }
          to   { box-shadow: 0 0 28px #FF4444bb, inset 0 0 16px #FF444440; }
        }
        @keyframes battle-countdown-pulse {
          0%   { transform:scale(1.0); color:#FFD700; }
          50%  { transform:scale(1.3); color:#FF4444; }
          100% { transform:scale(1.0); color:#FFD700; }
        }
      `;
      document.head.appendChild(style);
    }
    row.appendChild(vsEl);

    // ── RIVAL CREW panel ──────────────────────────────────────────────────────
    const rivalPanel = this._makeRivalPanel(rival);
    row.appendChild(rivalPanel);

    ov.appendChild(row);

    // ── Countdown bar ─────────────────────────────────────────────────────────
    const countdownWrap = document.createElement('div');
    countdownWrap.style.cssText = `
      width:100%; text-align:center;
      padding:16px 0 24px; position:relative; z-index:2;
    `;
    const countdownEl = document.createElement('div');
    countdownEl.id = 'battle-countdown';
    countdownEl.style.cssText = `
      font-size:clamp(18px,5vw,28px); font-weight:900; color:#FFD700;
      letter-spacing:2px;
    `;
    countdownEl.textContent = '⚔️ BATTLE STARTS IN 3...';
    countdownWrap.appendChild(countdownEl);
    ov.appendChild(countdownWrap);

    document.body.appendChild(ov);
    this._el = ov;

    // ── Countdown sequence ────────────────────────────────────────────────────
    this._timer = setTimeout(() => {
      countdownEl.style.animation = 'battle-countdown-pulse 0.6s ease';
      countdownEl.textContent = '⚔️ BATTLE STARTS IN 2...';
      this._timer = setTimeout(() => {
        countdownEl.style.animation = 'battle-countdown-pulse 0.6s ease';
        countdownEl.textContent = '⚔️ BATTLE STARTS IN 1...';
        this._timer = setTimeout(() => {
          countdownEl.style.animation = '';
          countdownEl.style.color = '#FF4444';
          countdownEl.style.fontSize = 'clamp(22px,6vw,36px)';
          countdownEl.textContent = '🚨 GO GO GO!';
          this._timer = setTimeout(() => {
            this.hide();
            onStart();
          }, 600);
        }, 1000);
      }, 1000);
    }, 1000);
  }

  hide(): void {
    if (this._timer) { clearTimeout(this._timer); this._timer = null; }
    this._el?.remove();
    this._el = null;
  }

  // ── Build YOUR CREW panel ──────────────────────────────────────────────────
  private _makeCrewPanel(label: string, crewIds: string[], color: string, _isRival: boolean): HTMLElement {
    const panel = document.createElement('div');
    panel.style.cssText = `
      background:linear-gradient(135deg,#0a1a0a,#0d200d);
      border:2px solid ${color};
      border-radius:14px; padding:14px 10px;
      display:flex; flex-direction:column; align-items:center; gap:10px;
      min-width:clamp(110px,28vw,200px); max-width:200px;
      flex:1;
      animation: battle-glow-green 1.2s ease-in-out infinite alternate;
    `;

    const panelLabel = document.createElement('div');
    panelLabel.style.cssText = `
      color:${color}; font-size:clamp(9px,2.5vw,13px); font-weight:900;
      letter-spacing:2px; text-align:center;
    `;
    panelLabel.textContent = label;
    panel.appendChild(panelLabel);

    // Find crew members from roster
    const all = CREW_ROSTER;
    const members: CrewPerk[] = [];

    // Jose always first
    const jose = all.find(c => c.id === 'jose');
    if (jose) members.push(jose);

    // Add the other crew picks (excluding jose)
    crewIds.filter(id => id !== 'jose').forEach(id => {
      const c = all.find(m => m.id === id);
      if (c) members.push(c);
    });

    // Draw avatars
    members.slice(0, 3).forEach((member, idx) => {
      const wrap = document.createElement('div');
      wrap.style.cssText = `display:flex;flex-direction:column;align-items:center;gap:3px;`;

      const avatar = this._makePlayerAvatar(member, 60);
      wrap.appendChild(avatar);

      const nameEl = document.createElement('div');
      nameEl.style.cssText = `color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;`;
      nameEl.textContent = member.name;
      wrap.appendChild(nameEl);

      if (idx === 0) {
        const badge = document.createElement('div');
        badge.style.cssText = `
          background:#E8A830;color:#000;font-size:7px;font-weight:900;
          padding:1px 5px;border-radius:8px;
        `;
        badge.textContent = 'MASCOT';
        wrap.appendChild(badge);
      }

      panel.appendChild(wrap);
    });

    return panel;
  }

  // ── Build RIVAL panel ──────────────────────────────────────────────────────
  private _makeRivalPanel(rival: RivalCrew): HTMLElement {
    const panel = document.createElement('div');
    panel.style.cssText = `
      background:linear-gradient(135deg,#1a0a0a,#200d0d);
      border:2px solid ${rival.color};
      border-radius:14px; padding:14px 10px;
      display:flex; flex-direction:column; align-items:center; gap:8px;
      min-width:clamp(110px,28vw,200px); max-width:200px;
      flex:1;
      animation: battle-glow-red 1.2s ease-in-out infinite alternate;
    `;

    const panelLabel = document.createElement('div');
    panelLabel.style.cssText = `
      color:${rival.color}; font-size:clamp(9px,2.5vw,13px); font-weight:900;
      letter-spacing:2px; text-align:center;
    `;
    panelLabel.textContent = rival.name.toUpperCase();
    panel.appendChild(panelLabel);

    const tagline = document.createElement('div');
    tagline.style.cssText = `
      color:#aaa; font-size:clamp(7px,1.8vw,10px); text-align:center;
      font-style:italic; line-height:1.3; max-width:150px;
    `;
    tagline.textContent = `"${rival.tagline}"`;
    panel.appendChild(tagline);

    // Rival member avatars
    rival.members.forEach(member => {
      const wrap = document.createElement('div');
      wrap.style.cssText = `display:flex;flex-direction:column;align-items:center;gap:3px;`;

      const avatar = this._makeRivalAvatar(member, 60);
      wrap.appendChild(avatar);

      const nameEl = document.createElement('div');
      nameEl.style.cssText = `color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;`;
      nameEl.textContent = member.name;
      wrap.appendChild(nameEl);

      panel.appendChild(wrap);
    });

    return panel;
  }

  // ── Draw a player crew member avatar (using CrewPerk data) ────────────────
  private _makePlayerAvatar(crew: CrewPerk, size: number): HTMLCanvasElement {
    const cv = document.createElement('canvas');
    cv.width = size; cv.height = size;
    cv.style.cssText = `border-radius:50%;display:block;`;
    const ctx = cv.getContext('2d')!;

    const cx = size / 2;

    // Background circle
    ctx.fillStyle = crew.locked ? '#1a0800' : '#1a1a2a';
    ctx.beginPath();
    ctx.arc(cx, cx, cx, 0, Math.PI * 2);
    ctx.fill();

    const hy = size * 0.44;
    const hr = size * 0.22;

    // Neck
    ctx.fillStyle = crew.skinTone;
    ctx.fillRect(cx - size * 0.07, size * 0.62, size * 0.14, size * 0.22);

    // Head
    ctx.fillStyle = crew.skinTone;
    ctx.beginPath();
    ctx.ellipse(cx, hy, hr * 0.88, hr, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hair based on crew id (simplified from CrewSelector)
    ctx.fillStyle = crew.hairColor;
    ctx.strokeStyle = crew.hairColor;

    switch (crew.id) {
      case 'jose': {
        ctx.lineCap = 'round';
        const locs = [
          { dx: -10, len: size * 0.3, w: 2.5 },
          { dx:  -4, len: size * 0.34, w: 3 },
          { dx:   2, len: size * 0.32, w: 2.5 },
          { dx:   7, len: size * 0.28, w: 2 },
        ];
        locs.forEach(l => {
          ctx.lineWidth = l.w;
          ctx.beginPath();
          ctx.moveTo(cx + l.dx, hy - hr * 0.1);
          ctx.bezierCurveTo(cx + l.dx - 2, hy + l.len * 0.5,
                            cx + l.dx + 2, hy + l.len * 0.8, cx + l.dx, hy + l.len);
          ctx.stroke();
        });
        ctx.fillStyle = crew.hairColor;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.02, Math.PI, 0);
        ctx.fill();
        break;
      }
      default: {
        // Generic short hair for other crew
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.05, Math.PI, 0);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx, hy - hr * 1.2, hr * 0.6, hr * 0.28, 0, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
    }

    // Green border ring for your crew
    ctx.strokeStyle = '#2ECC4099';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cx, cx - 1.5, 0, Math.PI * 2);
    ctx.stroke();

    return cv;
  }

  // ── Draw rival member avatar ───────────────────────────────────────────────
  private _makeRivalAvatar(member: RivalMember, size: number): HTMLCanvasElement {
    const cv = document.createElement('canvas');
    cv.width = size; cv.height = size;
    cv.style.cssText = `border-radius:50%;display:block;`;
    const ctx = cv.getContext('2d')!;

    const cx = size / 2;
    const hy = size * 0.44;
    const hr = size * 0.22;

    // Dark red background
    ctx.fillStyle = '#1a0a0a';
    ctx.beginPath();
    ctx.arc(cx, cx, cx, 0, Math.PI * 2);
    ctx.fill();

    // Neck
    ctx.fillStyle = member.skinTone;
    ctx.fillRect(cx - size * 0.07, size * 0.62, size * 0.14, size * 0.22);

    // Head
    ctx.fillStyle = member.skinTone;
    ctx.beginPath();
    ctx.ellipse(cx, hy, hr * 0.88, hr, 0, 0, Math.PI * 2);
    ctx.fill();

    // Hair based on hairStyle
    this._drawRivalHair(ctx, member.hairStyle, member.hairColor, cx, hy, hr, size);

    // Red border ring for rivals
    ctx.strokeStyle = member.accentColor + '99';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cx, cx - 1.5, 0, Math.PI * 2);
    ctx.stroke();

    return cv;
  }

  // ── Rival hair drawing ─────────────────────────────────────────────────────
  private _drawRivalHair(
    ctx: CanvasRenderingContext2D,
    style: RivalHairStyle,
    color: string,
    cx: number,
    hy: number,
    hr: number,
    size: number
  ): void {
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    switch (style) {
      case 'buzz': {
        // Short stubble cap — thin layer over head
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.45, hr * 1.04, Math.PI, 0);
        ctx.fill();
        // Stubble texture
        ctx.fillStyle = color + 'aa';
        for (let i = -3; i <= 3; i++) {
          ctx.fillRect(cx + i * 4 - 1, hy - hr * 1.25, 2, hr * 0.32);
        }
        break;
      }
      case 'afro': {
        // Large rounded hair ball
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.5, hr * 1.6, 0, Math.PI * 2);
        ctx.fill();
        // Highlight
        ctx.fillStyle = color + '44';
        ctx.beginPath();
        ctx.arc(cx - hr * 0.3, hy - hr * 1.2, hr * 0.5, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'bald': {
        // Bald — shine highlight only
        ctx.fillStyle = 'rgba(255,255,255,0.12)';
        ctx.beginPath();
        ctx.ellipse(cx - hr * 0.15, hy - hr * 0.85, hr * 0.35, hr * 0.18, -0.3, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'long': {
        // Flowing down sides
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.5, hr * 1.05, Math.PI, 0);
        ctx.fill();
        // Sides flow down
        ctx.beginPath();
        ctx.moveTo(cx - hr * 0.9, hy - hr * 0.1);
        ctx.bezierCurveTo(cx - hr * 1.1, hy + hr * 0.5, cx - hr * 1.0, hy + hr * 1.2, cx - hr * 0.7, hy + hr * 1.5);
        ctx.lineTo(cx - hr * 0.3, hy + hr * 1.5);
        ctx.bezierCurveTo(cx - hr * 0.6, hy + hr * 1.0, cx - hr * 0.5, hy + hr * 0.4, cx - hr * 0.7, hy);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(cx + hr * 0.9, hy - hr * 0.1);
        ctx.bezierCurveTo(cx + hr * 1.1, hy + hr * 0.5, cx + hr * 1.0, hy + hr * 1.2, cx + hr * 0.7, hy + hr * 1.5);
        ctx.lineTo(cx + hr * 0.3, hy + hr * 1.5);
        ctx.bezierCurveTo(cx + hr * 0.6, hy + hr * 1.0, cx + hr * 0.5, hy + hr * 0.4, cx + hr * 0.7, hy);
        ctx.fill();
        break;
      }
      case 'short': {
        // Standard cap
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.05, Math.PI, 0);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx - hr * 0.1, hy - hr * 1.3, hr * 0.58, hr * 0.26, -0.1, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'slicked':
      case 'slick': {
        // Neat parted hair
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.05, Math.PI, 0);
        ctx.fill();
        // Side part detail
        ctx.strokeStyle = '#00000044';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - hr * 0.2, hy - hr * 1.4);
        ctx.lineTo(cx - hr * 0.2, hy - hr * 0.6);
        ctx.stroke();
        // Sheen
        ctx.fillStyle = color + '55';
        ctx.beginPath();
        ctx.ellipse(cx + hr * 0.2, hy - hr * 1.1, hr * 0.35, hr * 0.12, 0.2, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'bun': {
        // Bun on top
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.02, Math.PI, 0);
        ctx.fill();
        // Bun sphere
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 1.55, hr * 0.55, 0, Math.PI * 2);
        ctx.fill();
        // Bun highlight
        ctx.fillStyle = color + '66';
        ctx.beginPath();
        ctx.arc(cx - hr * 0.15, hy - hr * 1.7, hr * 0.18, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case 'ponytail': {
        // Hair cap + ponytail behind
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(cx, hy - hr * 0.55, hr * 1.02, Math.PI, 0);
        ctx.fill();
        // Ponytail — behind, curves down
        ctx.beginPath();
        ctx.moveTo(cx + hr * 0.5, hy - hr * 0.8);
        ctx.bezierCurveTo(cx + hr * 1.4, hy - hr * 0.4, cx + hr * 1.5, hy + hr * 0.6, cx + hr * 0.8, hy + hr * 1.4);
        ctx.lineTo(cx + hr * 0.5, hy + hr * 1.4);
        ctx.bezierCurveTo(cx + hr * 1.0, hy + hr * 0.5, cx + hr * 0.9, hy - hr * 0.2, cx + hr * 0.2, hy - hr * 0.7);
        ctx.fill();
        break;
      }
    }
  }

  // ── Animated sparks canvas ─────────────────────────────────────────────────
  private _animateSparks(canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d')!;
    let animId: number;

    const sparks: Array<{
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; color: string; size: number;
    }> = [];

    const colors = ['#FFD700', '#FF4444', '#FF8800', '#FFFFFF', '#FF6600'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const spawnSpark = () => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 4;
      sparks.push({
        x: cx + (Math.random() - 0.5) * 60,
        y: cy + (Math.random() - 0.5) * 60,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 0,
        maxLife: 30 + Math.random() * 40,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 1 + Math.random() * 3,
      });
    };

    const tick = () => {
      if (!document.getElementById('battle-screen-ov')) {
        cancelAnimationFrame(animId);
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn sparks
      if (Math.random() < 0.4) spawnSpark();

      // Update & draw
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05;
        s.life++;

        const alpha = 1 - s.life / s.maxLife;
        if (alpha <= 0) { sparks.splice(i, 1); continue; }

        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);
  }
}
