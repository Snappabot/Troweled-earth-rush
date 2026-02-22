import type { Job } from '../gameplay/JobManager';

export const ONE_BTC = 100_000_000; // sats

function formatSats(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M sats`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K sats`;
  return `${n} sats`;
}

function formatMMSS(seconds: number): string {
  const s = Math.max(0, Math.ceil(seconds));
  const m = Math.floor(s / 60);
  const ss = s % 60;
  return `${m}:${ss.toString().padStart(2, '0')}`;
}

/** Get initials from a crew name (first letter) */
function initials(name: string): string {
  return name.charAt(0).toUpperCase();
}

export class HUD {
  private btcAchieved = false;
  private speedText: HTMLDivElement;
  private moneyEl: HTMLDivElement;
  private jobStripEl: HTMLDivElement;
  private travelTimerEl: HTMLDivElement;
  private flashOverlay: HTMLDivElement;
  private timerFailOverlay: HTMLDivElement;
  private crewPanelEl: HTMLDivElement;
  private activeJob: Job | null = null;
  private activePhase: 1 | 2 | 3 = 1;
  private flashTimeout: ReturnType<typeof setTimeout> | null = null;
  private spillPenaltyTimeout: ReturnType<typeof setTimeout> | null = null;
  private currentMoney: number = 500_000;
  private timerPulseInterval: ReturnType<typeof setInterval> | null = null;

  constructor() {
    // ── Inject keyframe animations ────────────────────────────────────────────
    if (!document.getElementById('hud-styles')) {
      const style = document.createElement('style');
      style.id = 'hud-styles';
      style.textContent = `
        @keyframes timerPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.35; }
        }
        .hud-timer-pulse {
          animation: timerPulse 0.6s ease-in-out infinite;
        }
        @keyframes hudRedFlash {
          0%   { background: rgba(220, 38, 38, 0.85); }
          70%  { background: rgba(220, 38, 38, 0.85); }
          100% { background: rgba(220, 38, 38, 0.0);  }
        }
      `;
      document.head.appendChild(style);
    }

    // ── Speed display — bottom-left ──────────────────────────────────────────
    const speedContainer = document.createElement('div');
    speedContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      pointer-events: none;
      font-family: system-ui, monospace;
      z-index: 1000;
    `;

    this.speedText = document.createElement('div');
    this.speedText.style.cssText = `
      font-size: 22px;
      font-weight: 900;
      color: #fff;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 1px;
    `;
    this.speedText.textContent = '0 km/h';
    speedContainer.appendChild(this.speedText);
    document.body.appendChild(speedContainer);

    // ── Money + job strip — top-right ────────────────────────────────────────
    const infoPanel = document.createElement('div');
    infoPanel.style.cssText = `
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
      pointer-events: none;
      font-family: system-ui, sans-serif;
      z-index: 1000;
      max-width: 300px;
    `;

    // Money counter
    this.moneyEl = document.createElement('div');
    this.moneyEl.style.cssText = `
      color: #5EDB7D;
      font-size: 26px;
      font-weight: 900;
      text-shadow: 0 1px 6px rgba(0,0,0,0.8);
      letter-spacing: 1px;
      transition: color 0.2s;
    `;
    this.moneyEl.textContent = '500K sats';
    infoPanel.appendChild(this.moneyEl);

    // Active job strip
    this.jobStripEl = document.createElement('div');
    this.jobStripEl.style.cssText = `
      display: none;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
      background: rgba(0,0,0,0.55);
      border-radius: 10px;
      padding: 8px 12px;
      border-left: 3px solid #C1666B;
    `;
    infoPanel.appendChild(this.jobStripEl);

    // Travel timer — below job strip
    this.travelTimerEl = document.createElement('div');
    this.travelTimerEl.style.cssText = `
      display: none;
      text-align: right;
      font-size: 20px;
      font-weight: 900;
      font-family: system-ui, monospace;
      text-shadow: 0 1px 6px rgba(0,0,0,0.9);
      letter-spacing: 1px;
      background: rgba(0,0,0,0.5);
      border-radius: 8px;
      padding: 4px 10px;
    `;
    infoPanel.appendChild(this.travelTimerEl);

    document.body.appendChild(infoPanel);

    // ── Crew status panel — top-left ──────────────────────────────────────────
    this.crewPanelEl = document.createElement('div');
    this.crewPanelEl.style.cssText = `
      position: fixed;
      top: 16px;
      left: 16px;
      display: none;
      flex-direction: column;
      gap: 6px;
      pointer-events: none;
      font-family: system-ui, sans-serif;
      z-index: 1000;
    `;
    document.body.appendChild(this.crewPanelEl);

    // ── Job complete / phase flash overlay ────────────────────────────────────
    this.flashOverlay = document.createElement('div');
    this.flashOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1500;
      pointer-events: none;
      background: rgba(94, 219, 125, 0.15);
    `;
    const flashMsg = document.createElement('div');
    flashMsg.id = 'hud-flash-msg';
    flashMsg.style.cssText = `
      color: #5EDB7D;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.3;
    `;
    this.flashOverlay.appendChild(flashMsg);
    document.body.appendChild(this.flashOverlay);

    // ── Timer fail overlay ────────────────────────────────────────────────────
    this.timerFailOverlay = document.createElement('div');
    this.timerFailOverlay.style.cssText = `
      position: fixed;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1600;
      pointer-events: none;
      background: rgba(220, 38, 38, 0.18);
    `;
    const timerFailMsg = document.createElement('div');
    timerFailMsg.id = 'hud-timer-fail-msg';
    timerFailMsg.style.cssText = `
      color: #ff4444;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.4;
    `;
    timerFailMsg.textContent = '⏰ TOO SLOW! -150K sats';
    this.timerFailOverlay.appendChild(timerFailMsg);
    document.body.appendChild(this.timerFailOverlay);
  }

  /** Called every frame with speed (m/s) and spill level */
  update(speed: number, _spillPct: number): void {
    const kmh = Math.abs(Math.round(speed * 3.6));
    this.speedText.textContent = `${kmh} km/h`;
  }

  /** Set active job in the HUD strip, with phase number for appropriate display text. */
  setActiveJob(job: Job | null, phase: 1 | 2 | 3 = 2): void {
    this.activeJob = job;
    this.activePhase = phase;
    if (!job) {
      this.jobStripEl.style.display = 'none';
      this.crewPanelEl.style.display = 'none';
      return;
    }
    this.jobStripEl.style.display = 'flex';
    this._refreshJobStrip(job, null);
  }

  /** Update displayed distance to the current waypoint target. */
  updateJobDistance(metres: number): void {
    if (!this.activeJob) return;
    this._refreshJobStrip(this.activeJob, metres);
  }

  /**
   * Update the crew status display.
   * crewToPickup: all required crew names
   * crewPickedUp: which ones are collected
   */
  updateCrewStatus(crewToPickup: string[], crewPickedUp: string[], show: boolean): void {
    if (!show || crewToPickup.length === 0) {
      this.crewPanelEl.style.display = 'none';
      return;
    }
    this.crewPanelEl.style.display = 'flex';
    this.crewPanelEl.innerHTML = '';

    // Label
    const label = document.createElement('div');
    label.style.cssText = `
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `;
    label.textContent = 'Crew';
    this.crewPanelEl.appendChild(label);

    // Row of crew avatar circles
    const row = document.createElement('div');
    row.style.cssText = `
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
    `;

    for (const name of crewToPickup) {
      const collected = crewPickedUp.includes(name);
      const circle = document.createElement('div');
      circle.style.cssText = `
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${collected ? '#5EDB7D' : '#555'};
        border: 2px solid ${collected ? '#3AC060' : '#888'};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 900;
        color: ${collected ? '#003318' : '#bbb'};
        text-shadow: none;
        box-shadow: 0 1px 4px rgba(0,0,0,0.6);
        transition: background 0.2s, border-color 0.2s;
      `;
      circle.textContent = initials(name);
      circle.title = name;
      row.appendChild(circle);
    }

    this.crewPanelEl.appendChild(row);
  }

  private _refreshJobStrip(job: Job, metres: number | null): void {
    this.jobStripEl.innerHTML = '';

    const lineEl = document.createElement('div');
    lineEl.style.cssText = `
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `;

    if (metres !== null) {
      const distStr = metres < 1000
        ? `${Math.round(metres)}m`
        : `${(metres / 1000).toFixed(1)}km`;

      if (this.activePhase === 1) {
        lineEl.textContent = `📦 To workshop: ${distStr} — ${job.title}`;
        lineEl.style.color = '#FFD700';
      } else if (this.activePhase === 2) {
        lineEl.textContent = `👥 Pick up crew: ${distStr} — ${job.title}`;
        lineEl.style.color = '#60AAFF';
      } else {
        lineEl.textContent = `🧱 To job site: ${distStr} — ${job.title}`;
        lineEl.style.color = '#C1666B';
      }
    } else {
      if (this.activePhase === 1) {
        lineEl.textContent = `📦 Workshop pickup — ${job.title}`;
        lineEl.style.color = '#FFD700';
      } else if (this.activePhase === 2) {
        lineEl.textContent = `👥 Pick up the crew — ${job.title}`;
        lineEl.style.color = '#60AAFF';
      } else {
        lineEl.textContent = `🧱 ${job.title}`;
        lineEl.style.color = '#fff';
      }
    }

    this.jobStripEl.appendChild(lineEl);
  }

  /**
   * Update the travel timer countdown.
   * Pass null to hide it.
   */
  updateTravelTimer(seconds: number | null): void {
    if (seconds === null) {
      this.travelTimerEl.style.display = 'none';
      this.travelTimerEl.classList.remove('hud-timer-pulse');
      if (this.timerPulseInterval !== null) {
        clearInterval(this.timerPulseInterval);
        this.timerPulseInterval = null;
      }
      return;
    }

    this.travelTimerEl.style.display = 'block';
    this.travelTimerEl.textContent = `⏱ ${formatMMSS(seconds)}`;

    if (seconds > 60) {
      this.travelTimerEl.style.color = '#5EDB7D';
      this.travelTimerEl.classList.remove('hud-timer-pulse');
    } else if (seconds > 30) {
      this.travelTimerEl.style.color = '#FFD700';
      this.travelTimerEl.classList.remove('hud-timer-pulse');
    } else {
      this.travelTimerEl.style.color = '#ff4444';
      if (!this.travelTimerEl.classList.contains('hud-timer-pulse')) {
        this.travelTimerEl.classList.add('hud-timer-pulse');
      }
    }
  }

  /** Flash "⏰ TOO SLOW! -150K sats" red overlay for 3 seconds. */
  showTimerFail(penalty: number): void {
    const msg = document.getElementById('hud-timer-fail-msg');
    if (msg) {
      msg.textContent = `⏰ TOO SLOW! -${formatSats(penalty)}`;
    }
    this.timerFailOverlay.style.display = 'flex';
    setTimeout(() => {
      this.timerFailOverlay.style.display = 'none';
    }, 3000);
  }

  /**
   * Flash for Phase 1 complete: "Materials loaded! Go pick up the crew."
   */
  showPhase1Complete(): void {
    const flashMsg = document.getElementById('hud-flash-msg');
    if (flashMsg) {
      flashMsg.innerHTML = `📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>`;
      flashMsg.style.color = '#FFD700';
    }
    this.flashOverlay.style.background = 'rgba(255, 210, 0, 0.10)';
    this.flashOverlay.style.display = 'flex';
    if (this.flashTimeout !== null) clearTimeout(this.flashTimeout);
    this.flashTimeout = setTimeout(() => {
      this.flashOverlay.style.display = 'none';
      this.flashOverlay.style.background = 'rgba(94, 219, 125, 0.15)';
      this.flashTimeout = null;
    }, 2500);
  }

  /**
   * Flash for crew member pickup: "Picked up [Name]! Next: [Name] / All crew assembled!"
   */
  showCrewPickup(name: string, nextName: string | null): void {
    const flashMsg = document.getElementById('hud-flash-msg');
    if (flashMsg) {
      if (nextName) {
        flashMsg.innerHTML = `👤 ${name} on board!<br><span style="font-size:0.65em">Pick up ${nextName}!</span>`;
      } else {
        flashMsg.innerHTML = `✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>`;
        flashMsg.style.color = '#5EDB7D';
      }
      if (nextName) flashMsg.style.color = '#60AAFF';
    }
    this.flashOverlay.style.background = nextName
      ? 'rgba(96, 170, 255, 0.08)'
      : 'rgba(94, 219, 125, 0.12)';
    this.flashOverlay.style.display = 'flex';
    if (this.flashTimeout !== null) clearTimeout(this.flashTimeout);
    this.flashTimeout = setTimeout(() => {
      this.flashOverlay.style.display = 'none';
      this.flashOverlay.style.background = 'rgba(94, 219, 125, 0.15)';
      this.flashTimeout = null;
    }, 2200);
  }

  /**
   * Brief red flash on money display showing spill penalty for 1.5 seconds.
   */
  showSpillPenalty(penalty: number): void {
    if (this.spillPenaltyTimeout !== null) {
      clearTimeout(this.spillPenaltyTimeout);
      this.spillPenaltyTimeout = null;
    }

    const penaltyStr = `-${formatSats(penalty)}`;
    this.moneyEl.style.color = '#ff4444';
    this.moneyEl.textContent = `${formatSats(this.currentMoney)} ${penaltyStr}`;

    this.spillPenaltyTimeout = setTimeout(() => {
      this.moneyEl.style.color = '#5EDB7D';
      this.moneyEl.textContent = formatSats(this.currentMoney);
      this.spillPenaltyTimeout = null;
    }, 1500);
  }

  /** Show the job complete flash with title and earned sats */
  showJobComplete(jobTitle: string, earned: number): void {
    const flashMsg = document.getElementById('hud-flash-msg');
    if (flashMsg) {
      flashMsg.style.color = '#5EDB7D';
      flashMsg.innerHTML = `✅ JOB DONE!<br><span style="font-size:0.7em">+${formatSats(earned)} — ${jobTitle}</span>`;
    }
    this.flashOverlay.style.background = 'rgba(94, 219, 125, 0.15)';
    this.flashOverlay.style.display = 'flex';
    if (this.flashTimeout !== null) clearTimeout(this.flashTimeout);
    this.flashTimeout = setTimeout(() => {
      this.flashOverlay.style.display = 'none';
      this.flashTimeout = null;
    }, 3000);
  }

  /** Update the money display and check for 1 BTC achievement */
  updateMoney(amount: number): void {
    this.currentMoney = amount;
    if (this.spillPenaltyTimeout === null) {
      this.moneyEl.style.color = '#5EDB7D';
      this.moneyEl.textContent = formatSats(amount);
    }
    if (!this.btcAchieved && amount >= ONE_BTC) {
      this.btcAchieved = true;
      this._showBitcoinAchievement();
    }
  }

  /** Show a brief toast notification centred on screen. */
  showToast(text: string, color = 0xffffff): void {
    const hex = '#' + color.toString(16).padStart(6, '0');
    const el = document.createElement('div');
    el.textContent = text;
    Object.assign(el.style, {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      background: hex,
      color: '#fff',
      padding: '14px 24px',
      borderRadius: '14px',
      fontSize: '18px',
      fontWeight: '800',
      fontFamily: 'system-ui, sans-serif',
      zIndex: '9000',
      opacity: '1',
      textShadow: '0 1px 4px rgba(0,0,0,0.5)',
      boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      transition: 'opacity 0.5s ease',
    });
    document.body.appendChild(el);
    setTimeout(() => { el.style.opacity = '0'; }, 2000);
    setTimeout(() => el.remove(), 2600);
  }

  private _showBitcoinAchievement(): void {
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed; inset: 0; z-index: 9999;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: rgba(0,0,0,0.85);
      font-family: system-ui, sans-serif;
      animation: btcFadeIn 0.6s ease;
    `;
    const style = document.createElement('style');
    style.textContent = `
      @keyframes btcFadeIn { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
      @keyframes btcSpin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
    `;
    document.head.appendChild(style);

    modal.innerHTML = `
      <div style="font-size:80px; animation: btcSpin 3s linear infinite; display:inline-block;">₿</div>
      <div style="color:#F7931A; font-size:clamp(32px,8vw,64px); font-weight:900; margin:16px 0 8px; text-shadow:0 0 30px #F7931A;">1 BITCOIN</div>
      <div style="color:#FFD700; font-size:clamp(16px,4vw,28px); font-weight:700; margin-bottom:8px;">ACHIEVED</div>
      <div style="color:#aaa; font-size:14px; margin-bottom:32px;">100,000,000 sats earned plastering Melbourne</div>
      <div style="color:#888; font-size:12px; font-style:italic;">Jarrad wants his cut. You pretend not to hear him.</div>
      <button onclick="this.parentElement.remove()" style="
        margin-top:40px; padding:14px 40px;
        background:#F7931A; color:#000; border:none;
        border-radius:50px; font-size:18px; font-weight:900;
        cursor:pointer; letter-spacing:1px;
      ">HODL 🚀</button>
    `;
    document.body.appendChild(modal);
  }
}
