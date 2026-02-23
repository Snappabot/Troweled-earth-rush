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
  private speedText!: HTMLDivElement;
  private moneyEl!: HTMLDivElement;
  private btcBarFill!: HTMLDivElement;
  private btcLabelEl!: HTMLDivElement;
  private jobStripEl!: HTMLDivElement;
  private travelTimerEl!: HTMLDivElement;
  private flashOverlay!: HTMLDivElement;
  private timerFailOverlay!: HTMLDivElement;
  private crewPanelEl!: HTMLDivElement;
  private moneyPanel!: HTMLDivElement;  // exposed to GameMenu
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

    // ── Money + BTC panel — lives inside GameMenu (not appended to body here) ─
    this.moneyPanel = document.createElement('div');
    this.moneyPanel.style.cssText = `
      display: flex; flex-direction: column; align-items: flex-start;
      gap: 6px; font-family: system-ui, sans-serif; width: 100%;
    `;

    this.moneyEl = document.createElement('div');
    this.moneyEl.style.cssText = `
      color: #5EDB7D; font-size: 22px; font-weight: 900;
      text-shadow: 0 1px 6px rgba(0,0,0,0.8);
      letter-spacing: 1px; transition: color 0.2s;
    `;
    this.moneyEl.textContent = '500K sats';
    this.moneyPanel.appendChild(this.moneyEl);

    const btcWrap = document.createElement('div');
    btcWrap.style.cssText = `width:100%; display:flex; flex-direction:column; gap:3px;`;
    this.btcLabelEl = document.createElement('div');
    this.btcLabelEl.style.cssText = `
      color: rgba(247,147,26,0.85); font-size: 11px; font-weight: 700;
      letter-spacing: 0.5px; font-family: monospace;
    `;
    this.btcLabelEl.textContent = '₿ GOAL: 0%';
    const btcTrack = document.createElement('div');
    btcTrack.style.cssText = `
      width: 100%; height: 5px; background: rgba(247,147,26,0.18);
      border-radius: 3px; overflow: hidden;
    `;
    this.btcBarFill = document.createElement('div');
    this.btcBarFill.style.cssText = `
      height: 100%; background: #F7931A; width: 0%;
      border-radius: 3px; transition: width 0.6s ease;
    `;
    btcTrack.appendChild(this.btcBarFill);
    btcWrap.appendChild(this.btcLabelEl);
    btcWrap.appendChild(btcTrack);
    this.moneyPanel.appendChild(btcWrap);

    // ── Job strip + travel timer — fixed top-right, always visible ───────────
    const jobPanel = document.createElement('div');
    jobPanel.style.cssText = `
      position: fixed; top: 16px; right: 64px;
      display: flex; flex-direction: column; align-items: flex-end;
      gap: 6px; pointer-events: none;
      font-family: system-ui, sans-serif; z-index: 1000; max-width: 240px;
    `;

    this.jobStripEl = document.createElement('div');
    this.jobStripEl.style.cssText = `
      display: none; flex-direction: column; align-items: flex-end;
      gap: 2px; background: rgba(0,0,0,0.55);
      border-radius: 10px; padding: 8px 12px;
      border-left: 3px solid #C1666B;
    `;
    jobPanel.appendChild(this.jobStripEl);

    this.travelTimerEl = document.createElement('div');
    this.travelTimerEl.style.cssText = `
      display: none; text-align: right;
      font-size: 20px; font-weight: 900;
      font-family: system-ui, monospace;
      text-shadow: 0 1px 6px rgba(0,0,0,0.9); letter-spacing: 1px;
      background: rgba(0,0,0,0.5); border-radius: 8px; padding: 4px 10px;
    `;
    jobPanel.appendChild(this.travelTimerEl);

    document.body.appendChild(jobPanel);

    // ── Crew status panel — top-left ──────────────────────────────────────────
    this.crewPanelEl = document.createElement('div');
    this.crewPanelEl.style.cssText = `
      position: fixed;
      top: 200px;
      left: 10px;
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

  /** Return the money/BTC panel element for mounting in GameMenu */
  getMoneyPanel(): HTMLDivElement { return this.moneyPanel; }

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
    // BTC progress bar
    const pct = Math.min(1, amount / ONE_BTC);
    this.btcBarFill.style.width = `${(pct * 100).toFixed(1)}%`;
    if (pct >= 1) {
      this.btcLabelEl.textContent = '₿ GOAL: ACHIEVED! 🚀';
      this.btcBarFill.style.background = '#FFD700';
    } else {
      this.btcLabelEl.textContent = `₿ GOAL: ${(pct * 100).toFixed(1)}%`;
    }
    if (!this.btcAchieved && amount >= ONE_BTC) {
      this.btcAchieved = true;
      this._showBitcoinAchievement();
    }
  }

  /** Show a penalty flash (scaffold fail, etc.) */
  showPenalty(jobTitle: string, penaltyAmt: number): void {
    if (this.flashTimeout) clearTimeout(this.flashTimeout);
    this.flashOverlay.style.display = 'block';
    const flashMsg = this.flashOverlay.querySelector('div') as HTMLDivElement;
    if (flashMsg) {
      flashMsg.innerHTML = `⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${formatSats(penaltyAmt)} penalty — ${jobTitle}</span>`;
    }
    this.flashOverlay.style.animation = 'none';
    void this.flashOverlay.offsetWidth;
    this.flashOverlay.style.animation = 'hudRedFlash 2.5s ease forwards';
    this.flashTimeout = setTimeout(() => {
      this.flashOverlay.style.display = 'none';
    }, 2600);
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
    // Persist BTC achievement so certificate can reflect it
    localStorage.setItem('tem-rush-btc-achieved', '1');

    if (!document.getElementById('btc-anim-styles')) {
      const style = document.createElement('style');
      style.id = 'btc-anim-styles';
      style.textContent = `
        @keyframes btcFadeIn { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes btcSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes btcGlow   { 0%,100%{text-shadow:0 0 20px #F7931A} 50%{text-shadow:0 0 60px #FFD700,0 0 80px #F7931A} }
      `;
      document.head.appendChild(style);
    }

    const modal = document.createElement('div');
    modal.style.cssText = `
      position:fixed; inset:0; z-index:29999;
      background:rgba(5,3,0,0.96);
      display:flex; flex-direction:column; align-items:center;
      overflow-y:auto; font-family:system-ui,sans-serif;
      animation:btcFadeIn 0.5s ease;
      padding:32px 20px 60px; box-sizing:border-box;
    `;

    const inner = document.createElement('div');
    inner.style.cssText = 'width:100%; max-width:480px; display:flex; flex-direction:column; align-items:center; gap:18px;';

    // Close
    const closeRow = document.createElement('div');
    closeRow.style.cssText = 'width:100%; display:flex; justify-content:flex-end;';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `background:rgba(255,255,255,0.1);border:none;color:#fff;
      font-size:18px;width:38px;height:38px;border-radius:50%;cursor:pointer;`;
    closeBtn.onclick = () => modal.remove();
    closeRow.appendChild(closeBtn);
    inner.appendChild(closeRow);

    // Hero
    inner.innerHTML += `
      <div style="font-size:72px;animation:btcSpin 4s linear infinite;display:inline-block;">₿</div>
      <div style="color:#F7931A;font-size:clamp(28px,8vw,52px);font-weight:900;
                  animation:btcGlow 2s ease-in-out infinite;text-align:center;">1 BITCOIN</div>
      <div style="color:#FFD700;font-size:clamp(15px,4vw,22px);font-weight:800;letter-spacing:2px;">ACHIEVED</div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px;text-align:center;line-height:1.6;max-width:360px;">
        100,000,000 sats earned plastering Melbourne.<br>
        <em>Jarrad wants his cut. You pretend not to hear him.</em>
      </div>
    `;

    // Reward 1 — Merch store
    const r1 = _makeRewardCard(
      '🎽  REWARD — MERCH STORE',
      'rgba(247,147,26,0.18)', 'rgba(247,147,26,0.55)',
      '10% off all TEM merch.<br>Show this at checkout or use the code online.',
      'BTCPLASTER10'
    );
    inner.appendChild(r1);

    // Reward 2 — Material retail
    const r2 = _makeRewardCard(
      '🪣  REWARD — MATERIAL SALES',
      'rgba(94,219,125,0.14)', 'rgba(94,219,125,0.45)',
      '5% off TEM materials at participating retail stores.<br>Present your in-app certificate.',
      'BTCMAT5'
    );
    inner.appendChild(r2);

    // Certificate note
    const certNote = document.createElement('div');
    certNote.style.cssText = `
      width:100%; background:rgba(200,168,106,0.1);
      border:1px solid rgba(200,168,106,0.35); border-radius:14px;
      padding:16px 18px; color:rgba(240,232,216,0.75);
      font-size:13px; line-height:1.6; text-align:center;
    `;
    certNote.innerHTML = `
      📜 Both rewards have been added to your<br>
      <strong style="color:#C8A86A;">TEM Rush Certificate</strong> —
      open the 📸 gallery to view &amp; save it.
    `;
    inner.appendChild(certNote);

    // HODL button
    const hodl = document.createElement('button');
    hodl.textContent = 'HODL 🚀';
    hodl.style.cssText = `
      padding:14px 48px; background:#F7931A; color:#000;
      border:none; border-radius:50px; font-size:18px; font-weight:900;
      cursor:pointer; letter-spacing:1px; margin-top:8px;
    `;
    hodl.onclick = () => modal.remove();
    inner.appendChild(hodl);

    modal.appendChild(inner);
    document.body.appendChild(modal);
  }
}

// ── Helper — reward card with copy button ─────────────────────────────────────
function _makeRewardCard(
  label: string, bg: string, border: string,
  desc: string, code: string
): HTMLDivElement {
  const card = document.createElement('div');
  card.style.cssText = `
    width:100%; background:${bg}; border:1.5px solid ${border};
    border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:10px;
  `;
  card.innerHTML = `
    <div style="color:#F7931A;font-size:11px;font-weight:700;letter-spacing:2px;">${label}</div>
    <div style="color:#F0E8D8;font-size:14px;line-height:1.6;">${desc}</div>
    <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(247,147,26,0.3);
                border-radius:10px;padding:12px;text-align:center;">
      <div style="color:rgba(247,147,26,0.7);font-size:10px;letter-spacing:2px;
                  font-family:monospace;margin-bottom:4px;">PROMO CODE</div>
      <div style="color:#FFD97A;font-size:clamp(18px,5vw,26px);font-weight:900;
                  letter-spacing:3px;font-family:monospace;">${code}</div>
    </div>
    <button data-code="${code}" style="
      background:rgba(247,147,26,0.15);border:1px solid rgba(247,147,26,0.4);
      color:#F7931A;font-size:13px;font-weight:700;border-radius:8px;
      padding:10px;cursor:pointer;touch-action:manipulation;width:100%;
    ">📋 Copy Code</button>
  `;
  const copyBtn = card.querySelector('button')!;
  copyBtn.addEventListener('click', () => {
    navigator.clipboard?.writeText(code).then(() => {
      copyBtn.textContent = '✓ Copied!';
      setTimeout(() => { copyBtn.textContent = '📋 Copy Code'; }, 2000);
    });
  });
  return card;
}
