import type { Job } from '../gameplay/JobManager';
import { getRandomRival } from '../data/RivalCrews';

function formatSats(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M sats`;
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K sats`;
  return `${n} sats`;
}

const ZONE_LABELS: Record<string, string> = {
  cbd: '🏙️ CBD',
  footscray: '🏭 Footscray',
  brunswick: '🎸 Brunswick',
  richmond: '🏡 Richmond',
  stkilda: '🌊 St Kilda',
};

const TYPE_LABELS: Record<string, string> = {
  residential: '🏠 Residential',
  commercial:  '🏢 Commercial',
  heritage:    '🏛️ Heritage',
  emergency:   '🚨 Emergency',
};

export class JobBoard {
  private overlay: HTMLDivElement;
  private visible = false;
  private jobs: Job[] = [];

  constructor(private onAccept: (job: Job) => void) {
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: rgba(10, 10, 20, 0.88);
      z-index: 2000;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      overflow-y: auto;
      padding: 16px 12px 32px;
      font-family: system-ui, -apple-system, sans-serif;
      box-sizing: border-box;
    `;

    // Inject styles once
    if (!document.getElementById('job-board-styles')) {
      const style = document.createElement('style');
      style.id = 'job-board-styles';
      style.textContent = `
        .jb-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 16px;
          width: 100%;
          max-width: 480px;
          margin-bottom: 12px;
          box-sizing: border-box;
          transition: background 0.15s;
        }
        .jb-card:hover {
          background: rgba(255,255,255,0.10);
        }
        .jb-card-contested {
          background: linear-gradient(135deg, rgba(40,20,5,0.95), rgba(25,10,0,0.98));
          border: 2px solid #E8A830;
          border-radius: 14px;
          padding: 0;
          width: 100%;
          max-width: 480px;
          margin-bottom: 14px;
          box-sizing: border-box;
          box-shadow: 0 0 24px rgba(232,168,48,0.25), inset 0 0 40px rgba(232,168,48,0.04);
          animation: jbContestPulse 2.5s ease-in-out infinite;
          overflow: hidden;
        }
        @keyframes jbContestPulse {
          0%, 100% { box-shadow: 0 0 18px rgba(232,168,48,0.22), inset 0 0 40px rgba(232,168,48,0.04); }
          50%       { box-shadow: 0 0 36px rgba(232,168,48,0.45), inset 0 0 40px rgba(232,168,48,0.08); }
        }
        .jb-war-banner {
          background: linear-gradient(90deg, #B8840A, #E8A830, #B8840A);
          padding: 6px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .jb-war-label {
          color: #000;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
        }
        .jb-war-rival {
          color: #000;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          opacity: 0.8;
        }
        .jb-card-contested-body {
          padding: 14px 16px 16px;
        }
        .jb-battle-btn {
          background: linear-gradient(135deg, #E8A830, #C87010);
          color: #000;
          border: none;
          border-radius: 10px;
          padding: 13px 24px;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          width: 100%;
          letter-spacing: 1px;
          transition: opacity 0.15s, transform 0.1s;
          min-height: 48px;
          text-transform: uppercase;
        }
        .jb-battle-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .jb-battle-btn:active { transform: translateY(0); opacity: 1; }
        .jb-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 4px;
        }
        .jb-title {
          color: #fff;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.2;
        }
        .jb-pay {
          color: #5EDB7D;
          font-size: 18px;
          font-weight: 800;
          white-space: nowrap;
        }
        .jb-meta {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 6px;
        }
        .jb-badge {
          color: #aaa;
          font-size: 12px;
          font-weight: 600;
          background: rgba(255,255,255,0.08);
          border-radius: 6px;
          padding: 2px 8px;
        }
        .jb-emergency-badge {
          color: #ff6b6b;
          background: rgba(255,80,80,0.14);
        }
        .jb-client {
          color: #b0c4e8;
          font-size: 13px;
          font-style: italic;
          margin-bottom: 6px;
        }
        .jb-desc {
          color: #ccc;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 12px;
        }
        .jb-accept-btn {
          background: #C1666B;
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 12px 24px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          width: 100%;
          letter-spacing: 0.5px;
          transition: background 0.15s, transform 0.1s;
          min-height: 48px;
        }
        .jb-accept-btn:hover {
          background: #d4787d;
          transform: translateY(-1px);
        }
        .jb-accept-btn:active {
          transform: translateY(0);
          background: #a54f54;
        }
        .jb-close-btn {
          position: sticky;
          top: 0;
          align-self: flex-end;
          background: rgba(255,255,255,0.12);
          color: #fff;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          font-size: 22px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 10;
          transition: background 0.15s;
        }
        .jb-close-btn:hover {
          background: rgba(255,255,255,0.22);
        }
        .jb-no-jobs {
          color: #888;
          font-size: 18px;
          text-align: center;
          margin-top: 40px;
        }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(this.overlay);
  }

  show(jobs: Job[]): void {
    this.jobs = jobs.slice(0, 8);
    this.visible = true;
    this._render();
    this.overlay.style.display = 'flex';
  }

  hide(): void {
    this.visible = false;
    this.overlay.style.display = 'none';
  }

  isVisible(): boolean {
    return this.visible;
  }

  // ── Contested (battle) card ─────────────────────────────────────────────────
  private _makeContestedCard(job: Job): HTMLElement {
    const rival = getRandomRival();

    const card = document.createElement('div');
    card.className = 'jb-card-contested';

    // Gold war banner
    const banner = document.createElement('div');
    banner.className = 'jb-war-banner';
    banner.innerHTML = `
      <span class="jb-war-label">⚔️ CONTRACT WAR</span>
      <span class="jb-war-rival">vs ${rival.name}</span>
    `;
    card.appendChild(banner);

    // Card body
    const body = document.createElement('div');
    body.className = 'jb-card-contested-body';

    // Title + pay
    const cardHeader = document.createElement('div');
    cardHeader.className = 'jb-card-header';
    cardHeader.style.marginBottom = '6px';

    const jobTitle = document.createElement('div');
    jobTitle.className = 'jb-title';
    jobTitle.style.color = '#FFD880';
    jobTitle.textContent = job.title.replace(/^⚔️\s*/, '');
    cardHeader.appendChild(jobTitle);

    const pay = document.createElement('div');
    pay.className = 'jb-pay';
    pay.style.color = '#E8A830';
    pay.textContent = `₿ ${formatSats(job.pay)}`;
    cardHeader.appendChild(pay);
    body.appendChild(cardHeader);

    // Rival info strip
    const rivalStrip = document.createElement('div');
    rivalStrip.style.cssText = `
      display:flex; align-items:center; gap:10px;
      background:rgba(232,168,48,0.08); border:1px solid rgba(232,168,48,0.2);
      border-radius:8px; padding:8px 12px; margin-bottom:10px;
    `;
    rivalStrip.innerHTML = `
      <div style="font-size:22px">🥊</div>
      <div>
        <div style="color:#E8A830;font-size:12px;font-weight:900;letter-spacing:1px;">RIVAL CREW</div>
        <div style="color:#fff;font-size:14px;font-weight:800;">${rival.name}</div>
        <div style="color:#aaa;font-size:11px;">Difficulty: ${'★'.repeat(Math.round(rival.difficulty * 5))}${'☆'.repeat(5 - Math.round(rival.difficulty * 5))}</div>
      </div>
      <div style="margin-left:auto;text-align:right;">
        <div style="color:#2ECC40;font-size:11px;font-weight:700;">BONUS PAY</div>
        <div style="color:#2ECC40;font-size:13px;font-weight:900;">1.5×</div>
      </div>
    `;
    body.appendChild(rivalStrip);

    // Badges
    const meta = document.createElement('div');
    meta.className = 'jb-meta';
    meta.style.marginBottom = '8px';
    const zoneBadge = document.createElement('span');
    zoneBadge.className = 'jb-badge';
    zoneBadge.textContent = ZONE_LABELS[job.zone] ?? job.zone;
    meta.appendChild(zoneBadge);
    const typeBadge = document.createElement('span');
    typeBadge.className = `jb-badge${job.type === 'emergency' ? ' jb-emergency-badge' : ''}`;
    typeBadge.textContent = TYPE_LABELS[job.type] ?? job.type;
    meta.appendChild(typeBadge);
    body.appendChild(meta);

    // Description
    const desc = document.createElement('div');
    desc.className = 'jb-desc';
    desc.style.color = '#ccc';
    desc.textContent = job.description;
    body.appendChild(desc);

    // Battle button
    const battleBtn = document.createElement('button');
    battleBtn.className = 'jb-battle-btn';
    battleBtn.textContent = '⚔️ BATTLE FOR THIS JOB';
    battleBtn.addEventListener('click', () => this.onAccept(job));
    body.appendChild(battleBtn);

    card.appendChild(body);
    return card;
  }

  // ── Regular job card ────────────────────────────────────────────────────────
  private _makeRegularCard(job: Job): HTMLElement {
    const card = document.createElement('div');
    card.className = 'jb-card';

    const cardHeader = document.createElement('div');
    cardHeader.className = 'jb-card-header';

    const jobTitle = document.createElement('div');
    jobTitle.className = 'jb-title';
    jobTitle.textContent = job.title;
    cardHeader.appendChild(jobTitle);

    const pay = document.createElement('div');
    pay.className = 'jb-pay';
    pay.textContent = `₿ ${formatSats(job.pay)}`;
    cardHeader.appendChild(pay);

    card.appendChild(cardHeader);

    const meta = document.createElement('div');
    meta.className = 'jb-meta';

    const zoneBadge = document.createElement('span');
    zoneBadge.className = 'jb-badge';
    zoneBadge.textContent = ZONE_LABELS[job.zone] ?? job.zone;
    meta.appendChild(zoneBadge);

    const typeBadge = document.createElement('span');
    typeBadge.className = `jb-badge${job.type === 'emergency' ? ' jb-emergency-badge' : ''}`;
    typeBadge.textContent = TYPE_LABELS[job.type] ?? job.type;
    meta.appendChild(typeBadge);

    if (job.timeLimit > 0) {
      const timeBadge = document.createElement('span');
      timeBadge.className = 'jb-badge jb-emergency-badge';
      timeBadge.textContent = `⏱️ ${Math.round(job.timeLimit / 60)} min limit`;
      meta.appendChild(timeBadge);
    }

    card.appendChild(meta);

    const clientEl = document.createElement('div');
    clientEl.className = 'jb-client';
    clientEl.textContent = `Client: ${job.client}`;
    card.appendChild(clientEl);

    const desc = document.createElement('div');
    desc.className = 'jb-desc';
    desc.textContent = job.description;
    card.appendChild(desc);

    const acceptBtn = document.createElement('button');
    acceptBtn.className = 'jb-accept-btn';
    acceptBtn.textContent = 'ACCEPT →';
    acceptBtn.addEventListener('click', () => this.onAccept(job));
    card.appendChild(acceptBtn);

    return card;
  }

  private _render(): void {
    this.overlay.innerHTML = '';

    // ── Header row ───────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.style.cssText = `
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 480px;
      margin-bottom: 16px;
      position: sticky;
      top: 0;
      padding: 8px 0;
      background: rgba(10,10,20,0.92);
      z-index: 5;
    `;

    const title = document.createElement('div');
    title.textContent = '📋 JOBS AVAILABLE';
    title.style.cssText = `
      color: #fff;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 1px;
    `;
    header.appendChild(title);

    const closeBtn = document.createElement('button');
    closeBtn.className = 'jb-close-btn';
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.addEventListener('click', () => this.hide());
    header.appendChild(closeBtn);

    this.overlay.appendChild(header);

    // ── Job cards ─────────────────────────────────────────────────────────────
    if (this.jobs.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'jb-no-jobs';
      empty.textContent = "You've smashed all the jobs, legend. 🏆";
      this.overlay.appendChild(empty);
      return;
    }

    for (const job of this.jobs) {
      if (job.isContested) {
        this.overlay.appendChild(this._makeContestedCard(job));
      } else {
        this.overlay.appendChild(this._makeRegularCard(job));
      }
    }
  }
}
