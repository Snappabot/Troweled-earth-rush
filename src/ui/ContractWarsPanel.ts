import { getGlobalLeaderboard } from '../services/LeaderboardService';
import type { ScoreEntry } from '../services/LeaderboardService';

// ── ContractWarsPanel — Instructions + Global Leaderboard overlay ────────────

export class ContractWarsPanel {
  private _el: HTMLElement | null = null;

  show(): void {
    this.hide();

    const ov = document.createElement('div');
    ov.id = 'contract-wars-panel';
    ov.style.cssText = `
      position:fixed; inset:0; z-index:13000;
      background:rgba(0,0,0,0.92);
      display:flex; flex-direction:column; align-items:center;
      justify-content:flex-start;
      font-family:'Arial Black',Arial,sans-serif;
      overflow-y:auto; padding:20px 12px 32px;
      box-sizing:border-box;
    `;

    // ── Animated gold line ─────────────────────────────────────────────────
    const headerLine = document.createElement('div');
    headerLine.style.cssText = `
      width:100%; max-width:420px;
      display:flex; flex-direction:column; align-items:center; gap:4px;
      margin-bottom:20px;
    `;

    // Title
    headerLine.innerHTML = `
      <div style="
        font-size:clamp(26px,8vw,44px); font-weight:900; letter-spacing:4px;
        background:linear-gradient(180deg,#FFD700,#FF6600);
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        background-clip:text; line-height:1.1; text-align:center;
      ">⚔️ CONTRACT WARS</div>
      <div style="
        color:#888; font-size:clamp(10px,2.8vw,13px); letter-spacing:2px;
        font-weight:700; text-transform:uppercase; text-align:center;
      ">The ultimate crew challenge</div>
      <div style="
        width:80%; height:2px; margin-top:8px;
        background:linear-gradient(90deg,transparent,#FFD700,transparent);
      "></div>
    `;
    ov.appendChild(headerLine);

    const container = document.createElement('div');
    container.style.cssText = `
      width:100%; max-width:420px;
      display:flex; flex-direction:column; gap:16px;
    `;

    // ── HOW TO PLAY ────────────────────────────────────────────────────────
    container.appendChild(this._sectionHeading('📖 HOW TO PLAY'));

    const steps = [
      { icon: '⚔️', title: 'Spot a Contested Job', desc: 'On the Job Board, look for gold-bordered cards marked ⚔️ CONTRACT WAR. These are contested — a rival crew wants the same gig.' },
      { icon: '🏗️', title: 'Beat The Scaffold', desc: 'Accept the job and race up the scaffold before time runs out. Dodge Connie\'s plaster globs — she\'s armed, bionic, and merciless.' },
      { icon: '🗼', title: 'Defend Your Territory', desc: 'After the scaffold, drop into Tower Defence mode. Place your crew as towers along the path and hold off the rival attack. Towers auto-fire — position matters.' },
      { icon: '⏱️', title: 'Fastest Crew Wins', desc: 'Your combined scaffold + tower defence time is your score. Beat the existing record to top the leaderboard. The contract — and the BTC — goes to the fastest.' },
      { icon: '💡', title: 'Pick Your Crew Wisely', desc: 'Each crew member has unique perks that boost scaffold speed, tower range, or damage. Mix and match before accepting a contested job.' },
    ];

    const stepsWrap = document.createElement('div');
    stepsWrap.style.cssText = `
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,215,0,0.15);
      border-radius:14px; padding:14px 12px;
      display:flex; flex-direction:column; gap:12px;
    `;
    steps.forEach((step, i) => {
      const row = document.createElement('div');
      row.style.cssText = `display:flex; gap:12px; align-items:flex-start;`;
      row.innerHTML = `
        <div style="
          font-size:22px; flex-shrink:0; width:32px; text-align:center;
          margin-top:2px;
        ">${step.icon}</div>
        <div>
          <div style="
            color:#FFD700; font-size:clamp(11px,3vw,13px); font-weight:900;
            margin-bottom:3px; letter-spacing:0.5px;
          ">${i+1}. ${step.title}</div>
          <div style="
            color:#ccc; font-size:clamp(10px,2.6vw,12px); line-height:1.5;
            font-family:system-ui,sans-serif; font-weight:400;
          ">${step.desc}</div>
        </div>
      `;
      if (i < steps.length - 1) {
        row.style.paddingBottom = '12px';
        row.style.borderBottom = '1px solid rgba(255,255,255,0.06)';
      }
      stepsWrap.appendChild(row);
    });
    container.appendChild(stepsWrap);

    // ── TOWER DEFENCE TIPS ─────────────────────────────────────────────────
    container.appendChild(this._sectionHeading('🗼 TOWER DEFENCE TIPS'));

    const tipsWrap = document.createElement('div');
    tipsWrap.style.cssText = `
      background:rgba(30,15,50,0.6); border:1px solid rgba(180,100,255,0.2);
      border-radius:14px; padding:12px 14px;
      display:grid; grid-template-columns:1fr 1fr; gap:8px;
    `;
    const tips = [
      ['⚡ Chokepoints', 'Stack towers at bends — enemies slow down near corners.'],
      ['🎯 Range > Damage', 'Long-range towers hit enemies before they reach your base.'],
      ['🛡️ Jose = Tank', 'Jose has the most HP. Put him at the front line.'],
      ['💨 Speed kills', 'Early waves are fast. Cover the entry path first.'],
      ['🔋 Tsuyoshi', 'Precision perk — highest damage per shot.'],
      ['🏃 Jarrad', 'Speed perk — attacks faster than any other crew member.'],
    ];
    tips.forEach(([title, desc]) => {
      const card = document.createElement('div');
      card.style.cssText = `
        background:rgba(255,255,255,0.04); border-radius:10px; padding:8px 9px;
      `;
      card.innerHTML = `
        <div style="color:#CC88FF;font-size:clamp(9px,2.4vw,11px);font-weight:900;margin-bottom:3px;">${title}</div>
        <div style="color:#aaa;font-size:clamp(9px,2.2vw,10px);line-height:1.4;font-family:system-ui,sans-serif;font-weight:400;">${desc}</div>
      `;
      tipsWrap.appendChild(card);
    });
    container.appendChild(tipsWrap);

    // ── GLOBAL LEADERBOARD ─────────────────────────────────────────────────
    container.appendChild(this._sectionHeading('🏆 GLOBAL LEADERBOARD'));

    const lbWrap = document.createElement('div');
    lbWrap.id = 'cw-leaderboard-wrap';
    lbWrap.style.cssText = `
      background:rgba(255,215,0,0.04); border:1px solid rgba(255,215,0,0.18);
      border-radius:14px; padding:12px 14px;
      min-height:80px; display:flex; flex-direction:column; gap:0;
    `;
    lbWrap.innerHTML = `
      <div style="color:#888;font-size:11px;text-align:center;font-family:system-ui,sans-serif;">
        Loading records...
      </div>
    `;
    container.appendChild(lbWrap);

    // Fetch async
    this._loadLeaderboard(lbWrap);

    // ── CREW PERK QUICK-REF ────────────────────────────────────────────────
    container.appendChild(this._sectionHeading('👥 CREW PERKS'));

    const perksWrap = document.createElement('div');
    perksWrap.style.cssText = `
      background:rgba(20,30,20,0.7); border:1px solid rgba(46,204,64,0.15);
      border-radius:14px; padding:12px 14px;
      display:flex; flex-direction:column; gap:6px;
    `;
    const perks = [
      { name: 'Jose',     icon: '👑', color: '#FFD700', perk: 'Mascot — morale boost; +20% payout on all contested jobs' },
      { name: 'Matt',     icon: '🔨', color: '#E0B494', perk: 'Foreman — scaffold time bonus; +15% base' },
      { name: 'Connie',   icon: '⚡', color: '#F0C8A0', perk: 'Bionic — tower attack speed ×1.4' },
      { name: 'Jarrad',   icon: '🏃', color: '#D8A878', perk: 'Speedster — fastest tower attack rate' },
      { name: 'Tsuyoshi', icon: '🎯', color: '#F0D4B0', perk: 'Precision — highest tower damage' },
      { name: 'Fabio',    icon: '🍕', color: '#D4A070', perk: 'Sustain — towers regenerate HP' },
      { name: 'Phil',     icon: '🛠️', color: '#D8B89A', perk: 'Repair — fixes damaged towers mid-wave' },
      { name: 'Joe',      icon: '🔭', color: '#EED8C0', perk: 'Scout — reveals enemy health bars' },
      { name: 'Mikayla',  icon: '📐', color: '#F0C8A0', perk: 'Architect — tower range +25%' },
    ];
    perks.forEach(p => {
      const row = document.createElement('div');
      row.style.cssText = `
        display:flex; gap:10px; align-items:center;
        padding:5px 0; border-bottom:1px solid rgba(255,255,255,0.05);
      `;
      row.innerHTML = `
        <div style="font-size:16px;flex-shrink:0;">${p.icon}</div>
        <div style="color:${p.color};font-size:clamp(10px,2.8vw,12px);font-weight:900;
                    width:62px;flex-shrink:0;">${p.name}</div>
        <div style="color:#bbb;font-size:clamp(9px,2.4vw,11px);line-height:1.4;
                    font-family:system-ui,sans-serif;font-weight:400;">${p.perk}</div>
      `;
      perksWrap.appendChild(row);
    });
    container.appendChild(perksWrap);

    ov.appendChild(container);

    // ── Close button ───────────────────────────────────────────────────────
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕ CLOSE';
    closeBtn.style.cssText = `
      position:sticky; bottom:16px; margin-top:20px;
      background:linear-gradient(135deg,#1a1a1a,#2a2a2a);
      border:1px solid rgba(255,215,0,0.3);
      color:#FFD700; font-size:13px; font-weight:900;
      letter-spacing:2px; padding:12px 40px;
      border-radius:30px; cursor:pointer;
      width:100%; max-width:420px; display:block;
      touch-action:manipulation;
    `;
    closeBtn.addEventListener('click', () => this.hide());
    ov.appendChild(closeBtn);

    // Tap outside to close
    ov.addEventListener('click', (e) => {
      if (e.target === ov) this.hide();
    });

    document.body.appendChild(ov);
    this._el = ov;
  }

  hide(): void {
    this._el?.remove();
    this._el = null;
  }

  // ── Fetch + render leaderboard ─────────────────────────────────────────────
  private async _loadLeaderboard(wrap: HTMLElement): Promise<void> {
    try {
      const scores = await getGlobalLeaderboard(10);
      if (scores.length === 0) {
        wrap.innerHTML = `
          <div style="color:#666;font-size:12px;text-align:center;font-style:italic;
                      padding:16px 0;font-family:system-ui,sans-serif;">
            No records yet — complete a Contract War to claim the top spot!
          </div>
        `;
        return;
      }
      wrap.innerHTML = this._renderLeaderboard(scores);
    } catch {
      wrap.innerHTML = `
        <div style="color:#666;font-size:11px;text-align:center;font-family:system-ui,sans-serif;">
          Could not load leaderboard (offline?)
        </div>
      `;
    }
  }

  private _renderLeaderboard(scores: ScoreEntry[]): string {
    const header = `
      <div style="
        display:grid; grid-template-columns:28px 1fr 110px 70px;
        gap:6px; padding:0 2px 6px; border-bottom:1px solid rgba(255,215,0,0.2);
        margin-bottom:6px;
      ">
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;">#</div>
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;">CREW</div>
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;text-align:center;">JOB</div>
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;text-align:right;">PAYOUT</div>
      </div>
    `;

    const rows = scores.map((s, i) => {
      const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i+1}`;
      const sats = s.payout >= 1_000_000
        ? `${(s.payout/1_000_000).toFixed(2)}M`
        : `${(s.payout/1_000).toFixed(0)}K`;
      const jobShort = s.job_title.replace(/^⚔️\s*/, '').slice(0, 14);
      const nameShort = s.player_name.slice(0, 14);
      const rowBg = i < 3 ? 'rgba(255,215,0,0.06)' : 'rgba(255,255,255,0.02)';

      return `
        <div style="
          display:grid; grid-template-columns:28px 1fr 110px 70px;
          gap:6px; padding:5px 2px; align-items:center;
          background:${rowBg}; border-radius:6px; margin-bottom:2px;
        ">
          <div style="color:#FFD700;font-size:11px;font-weight:900;text-align:center;">${medal}</div>
          <div style="color:#fff;font-size:11px;font-weight:800;
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${nameShort}</div>
          <div style="color:#aaa;font-size:9px;font-weight:600;text-align:center;
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${jobShort}</div>
          <div style="color:#2ECC40;font-size:11px;font-weight:900;text-align:right;">₿ ${sats}</div>
        </div>
      `;
    }).join('');

    return header + rows;
  }

  // ── Section heading helper ─────────────────────────────────────────────────
  private _sectionHeading(label: string): HTMLElement {
    const el = document.createElement('div');
    el.style.cssText = `
      display:flex; align-items:center; gap:10px; margin-top:4px;
    `;
    el.innerHTML = `
      <div style="
        color:#FFD700; font-size:clamp(11px,3vw,14px); font-weight:900;
        letter-spacing:2px; white-space:nowrap;
      ">${label}</div>
      <div style="flex:1;height:1px;background:linear-gradient(90deg,rgba(255,215,0,0.4),transparent);"></div>
    `;
    return el;
  }
}
