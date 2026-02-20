import type { Job } from '../gameplay/JobManager';

export const ONE_BTC = 100_000_000; // sats

function formatSats(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M sats`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K sats`;
  return `${n} sats`;
}

export class HUD {
  private btcAchieved = false;
  private speedText: HTMLDivElement;
  private moneyEl: HTMLDivElement;
  private jobStripEl: HTMLDivElement;
  private flashOverlay: HTMLDivElement;
  private activeJob: Job | null = null;
  private flashTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
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
      max-width: 280px;
    `;

    // Money counter
    this.moneyEl = document.createElement('div');
    this.moneyEl.style.cssText = `
      color: #5EDB7D;
      font-size: 26px;
      font-weight: 900;
      text-shadow: 0 1px 6px rgba(0,0,0,0.8);
      letter-spacing: 1px;
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
    document.body.appendChild(infoPanel);

    // ── Job complete flash overlay ────────────────────────────────────────────
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
  }

  /** Called every frame with speed (m/s) and spill level */
  update(speed: number, _spillPct: number): void {
    const kmh = Math.abs(Math.round(speed * 3.6));
    this.speedText.textContent = `${kmh} km/h`;

    // Update distance in job strip if a job is active
    if (this.activeJob) {
      // Distance is updated separately via updateJobDistance()
    }
  }

  /** Set active job in the HUD strip */
  setActiveJob(job: Job | null): void {
    this.activeJob = job;
    if (!job) {
      this.jobStripEl.style.display = 'none';
      return;
    }
    this.jobStripEl.style.display = 'flex';
    this._refreshJobStrip(job, null);
  }

  /** Update displayed distance to waypoint */
  updateJobDistance(metres: number): void {
    if (!this.activeJob) return;
    this._refreshJobStrip(this.activeJob, metres);
  }

  private _refreshJobStrip(job: Job, metres: number | null): void {
    this.jobStripEl.innerHTML = '';

    const titleEl = document.createElement('div');
    titleEl.style.cssText = `
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `;
    titleEl.textContent = `📍 ${job.title}`;
    this.jobStripEl.appendChild(titleEl);

    if (metres !== null) {
      const distEl = document.createElement('div');
      distEl.style.cssText = `
        color: #C1666B;
        font-size: 12px;
        font-weight: 600;
        text-align: right;
      `;
      distEl.textContent = metres < 1000
        ? `${Math.round(metres)} m away`
        : `${(metres / 1000).toFixed(1)} km away`;
      this.jobStripEl.appendChild(distEl);
    }
  }

  /** Show the job complete flash with title and earned sats */
  showJobComplete(jobTitle: string, earned: number): void {
    const flashMsg = document.getElementById('hud-flash-msg');
    if (flashMsg) {
      flashMsg.innerHTML = `✅ JOB DONE!<br><span style="font-size:0.7em">+${formatSats(earned)} — ${jobTitle}</span>`;
    }
    this.flashOverlay.style.display = 'flex';
    if (this.flashTimeout !== null) clearTimeout(this.flashTimeout);
    this.flashTimeout = setTimeout(() => {
      this.flashOverlay.style.display = 'none';
      this.flashTimeout = null;
    }, 3000);
  }

  /** Update the money display and check for 1 BTC achievement */
  updateMoney(amount: number): void {
    this.moneyEl.textContent = formatSats(amount);
    if (!this.btcAchieved && amount >= ONE_BTC) {
      this.btcAchieved = true;
      this._showBitcoinAchievement();
    }
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
