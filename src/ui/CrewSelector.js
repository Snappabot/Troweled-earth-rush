import { CREW_ROSTER, setActiveCrew } from '../data/CrewPerks';
// ── CrewSelector — pick your team before each job ────────────────────────────
// Jose is always locked in (he IS the game). Pick 2 more from the roster.
// Each card shows a mini canvas avatar + name + passive perk summary.
export class CrewSelector {
    _el = null;
    _selected = new Set(['jose']);
    _synergy = '';
    static MAX_PICKS = 2; // picks beyond Jose
    show(jobTitle, jobPay, onConfirm) {
        this.hide();
        this._selected = new Set(['jose']);
        const ov = document.createElement('div');
        ov.id = 'crew-sel-ov';
        ov.style.cssText = `
      position:fixed; inset:0; z-index:12000;
      background:rgba(0,0,0,0.92);
      display:flex; flex-direction:column; align-items:center;
      font-family:'Arial Black',Arial,sans-serif;
      overflow-y:auto; padding-bottom:80px;
    `;
        // ── Job summary header ────────────────────────────────────────────────────
        const header = document.createElement('div');
        header.style.cssText = `
      width:100%; max-width:420px;
      background:linear-gradient(135deg,#1a3a1a,#0d200d);
      border-bottom:2px solid #2ECC40;
      padding:14px 18px 10px; box-sizing:border-box;
      position:sticky; top:0; z-index:2;
    `;
        header.innerHTML = `
      <div style="color:#2ECC40;font-size:11px;letter-spacing:2px;font-weight:900;">TROWELED EARTH RUSH</div>
      <div style="color:#fff;font-size:17px;font-weight:900;margin:3px 0;">📋 ${jobTitle}</div>
      <div style="color:#F0C030;font-size:13px;font-weight:700;">💰 ${jobPay.toLocaleString()} sats</div>
      <div style="color:#aaa;font-size:11px;margin-top:4px;">Jose is always in. Pick <strong style="color:#fff;">2 crew</strong> to roll with.</div>
    `;
        ov.appendChild(header);
        // ── Jose — always locked hero card ───────────────────────────────────────
        const joseBanner = document.createElement('div');
        joseBanner.style.cssText = `
      width:100%; max-width:420px;
      background:linear-gradient(90deg,#1a0800,#2a1200);
      border:2px solid #E8A830;
      border-radius:10px; margin:14px 0 4px;
      padding:12px 16px; box-sizing:border-box;
      display:flex; align-items:center; gap:14px;
    `;
        const joseCanvas = this._makeAvatar(CREW_ROSTER[0], 56);
        joseBanner.appendChild(joseCanvas);
        const joseInfo = document.createElement('div');
        joseInfo.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="color:#E8A830;font-size:16px;font-weight:900;">Jose</span>
        <span style="background:#E8A830;color:#000;font-size:9px;font-weight:900;padding:2px 6px;border-radius:10px;">MASCOT</span>
        <span style="background:#333;color:#E8A830;font-size:9px;padding:2px 6px;border-radius:10px;">LOCKED IN</span>
      </div>
      <div style="color:#aaa;font-size:11px;margin-top:2px;">Wall Jesus 🙏 — Always the driver. Always on mission.</div>
      <div style="color:#E8A830;font-size:10px;margin-top:3px;">✦ Wall jobs +15%  ✦ Spill drain -20%</div>
    `;
        joseBanner.appendChild(joseInfo);
        ov.appendChild(joseBanner);
        // ── Synergy hint ─────────────────────────────────────────────────────────
        const synergyEl = document.createElement('div');
        synergyEl.id = 'crew-synergy';
        synergyEl.style.cssText = `
      color:#2ECC40; font-size:11px; min-height:18px;
      text-align:center; padding:2px 16px; transition:opacity 0.3s;
      width:100%; max-width:420px; box-sizing:border-box;
    `;
        ov.appendChild(synergyEl);
        // ── Crew grid ─────────────────────────────────────────────────────────────
        const grid = document.createElement('div');
        grid.style.cssText = `
      display:grid; grid-template-columns:repeat(3,1fr);
      gap:10px; padding:8px 12px; width:100%;
      max-width:420px; box-sizing:border-box;
    `;
        const others = CREW_ROSTER.filter(c => !c.locked);
        others.forEach(crew => {
            const card = this._makeCard(crew, synergyEl, () => this._updateConfirm(confirmBtn));
            grid.appendChild(card);
        });
        ov.appendChild(grid);
        // ── Bottom confirm bar ────────────────────────────────────────────────────
        const bar = document.createElement('div');
        bar.style.cssText = `
      position:fixed; bottom:0; left:0; right:0;
      background:linear-gradient(0deg,#0a0a0a,rgba(0,0,0,0.9));
      padding:12px 16px; display:flex; align-items:center;
      justify-content:space-between; z-index:13000; gap:10px;
    `;
        const countEl = document.createElement('div');
        countEl.id = 'crew-count';
        countEl.style.cssText = 'color:#aaa;font-size:12px;font-weight:700;min-width:100px;';
        countEl.textContent = '0 / 2 picked';
        const confirmBtn = document.createElement('button');
        confirmBtn.id = 'crew-confirm';
        confirmBtn.style.cssText = `
      background:#555; color:#888; border:none;
      padding:14px 28px; font-size:15px; font-weight:900;
      border-radius:8px; cursor:not-allowed; flex:1;
      font-family:'Arial Black',Arial,sans-serif;
      letter-spacing:1px; transition:all 0.2s;
    `;
        confirmBtn.textContent = '🚐 ROLL OUT';
        confirmBtn.disabled = true;
        bar.appendChild(countEl);
        bar.appendChild(confirmBtn);
        ov.appendChild(bar);
        // Confirm handler
        confirmBtn.addEventListener('click', () => {
            const picks = [...this._selected].filter(id => id !== 'jose');
            setActiveCrew(picks);
            this.hide();
            onConfirm([...this._selected]);
        });
        document.body.appendChild(ov);
        this._el = ov;
    }
    hide() {
        this._el?.remove();
        this._el = null;
    }
    // ── Build a character card ─────────────────────────────────────────────────
    _makeCard(crew, synergyEl, onChange) {
        const card = document.createElement('div');
        card.dataset.id = crew.id;
        card.style.cssText = `
      background:#111; border:2px solid #333;
      border-radius:10px; padding:10px 8px;
      display:flex; flex-direction:column; align-items:center;
      gap:5px; cursor:pointer; transition:all 0.18s;
      user-select:none; -webkit-tap-highlight-color:transparent;
      position:relative;
    `;
        const avatar = this._makeAvatar(crew, 52);
        card.appendChild(avatar);
        const name = document.createElement('div');
        name.style.cssText = `color:#fff;font-size:12px;font-weight:900;text-align:center;`;
        name.textContent = crew.name;
        card.appendChild(name);
        const titleEl = document.createElement('div');
        titleEl.style.cssText = `color:${crew.color};font-size:9px;font-weight:700;text-align:center;`;
        titleEl.textContent = crew.title;
        card.appendChild(titleEl);
        const perkEl = document.createElement('div');
        perkEl.style.cssText = `
      color:#aaa;font-size:8.5px;text-align:center;
      line-height:1.3; margin-top:2px;
    `;
        perkEl.textContent = crew.passive.desc;
        card.appendChild(perkEl);
        // Tag pill
        const tag = document.createElement('div');
        tag.style.cssText = `
      background:${crew.color}22; border:1px solid ${crew.color}66;
      color:${crew.color}; font-size:8px; font-weight:700;
      padding:2px 6px; border-radius:8px; text-align:center;
      margin-top:2px;
    `;
        tag.textContent = crew.passive.name.toUpperCase();
        card.appendChild(tag);
        card.addEventListener('click', () => {
            const id = crew.id;
            if (this._selected.has(id)) {
                this._selected.delete(id);
                card.style.border = '2px solid #333';
                card.style.background = '#111';
                card.style.boxShadow = '';
                card.style.transform = '';
            }
            else {
                const picks = this._selected.size - 1; // exclude jose
                if (picks >= CrewSelector.MAX_PICKS)
                    return;
                this._selected.add(id);
                card.style.border = `2px solid ${crew.color}`;
                card.style.background = `${crew.color}18`;
                card.style.boxShadow = `0 0 14px ${crew.color}60`;
                card.style.transform = 'scale(1.04)';
            }
            this._updateSynergy(synergyEl);
            onChange();
        });
        return card;
    }
    // ── Update confirm button + count ──────────────────────────────────────────
    _updateConfirm(btn) {
        const picks = this._selected.size - 1;
        const countEl = document.getElementById('crew-count');
        if (countEl)
            countEl.textContent = `${picks} / 2 picked`;
        if (picks === CrewSelector.MAX_PICKS) {
            btn.style.background = '#2ECC40';
            btn.style.color = '#000';
            btn.style.cursor = 'pointer';
            btn.style.boxShadow = '0 0 18px #2ECC4080';
            btn.disabled = false;
        }
        else {
            btn.style.background = '#555';
            btn.style.color = '#888';
            btn.style.cursor = 'not-allowed';
            btn.style.boxShadow = '';
            btn.disabled = true;
        }
    }
    // ── Synergy hints ──────────────────────────────────────────────────────────
    _updateSynergy(el) {
        const has = (id) => this._selected.has(id);
        let hint = '';
        if (has('jose') && has('phil'))
            hint = '⚡ Synergy: Zero interruptions — pure flow run';
        if (has('fabio') && has('tsuyoshi'))
            hint = '🔥 Synergy: Full speed team — clock-out crunch kings';
        if (has('joe') && has('matt'))
            hint = '💰 Synergy: Off-books premium — BTC rockets this run';
        if (has('connie') && has('jarrad'))
            hint = '🎲 Synergy: Penalty shield + chaos — high risk, protected';
        if (has('jose') && has('connie'))
            hint = '💼 Synergy: Wall Jesus + German Efficiency — unstoppable';
        if (has('mikayla') && has('matt'))
            hint = '📈 Synergy: Full board + pay boost — maximum earning run';
        el.textContent = hint;
        el.style.opacity = hint ? '1' : '0';
    }
    // ── Draw mini canvas avatar for a crew member ──────────────────────────────
    _makeAvatar(crew, size) {
        const cv = document.createElement('canvas');
        cv.width = size;
        cv.height = size;
        cv.style.cssText = `border-radius:50%; display:block;`;
        const ctx = cv.getContext('2d');
        const cx = size / 2;
        const bg = crew.locked ? '#1a0800' : '#1a1a1a';
        ctx.fillStyle = bg;
        ctx.beginPath();
        ctx.arc(cx, cx, cx, 0, Math.PI * 2);
        ctx.fill();
        // ── Neck ──────────────────────────────────────────────────────────────────
        const neckW = size * 0.14;
        const neckY = size * 0.62;
        ctx.fillStyle = crew.skinTone;
        ctx.fillRect(cx - neckW / 2, neckY, neckW, size * 0.22);
        // ── Head ──────────────────────────────────────────────────────────────────
        const hy = size * 0.44;
        const hr = size * 0.22;
        ctx.fillStyle = crew.skinTone;
        ctx.beginPath();
        ctx.ellipse(cx, hy, hr * 0.88, hr, 0, 0, Math.PI * 2);
        ctx.fill();
        // ── Hair per character ────────────────────────────────────────────────────
        ctx.fillStyle = crew.hairColor;
        ctx.strokeStyle = crew.hairColor;
        switch (crew.id) {
            case 'jose': {
                // Dreads — 5 mini locs
                ctx.lineCap = 'round';
                const locs = [
                    { dx: -10, len: size * 0.34, w: 2.5 },
                    { dx: -5, len: size * 0.38, w: 3 },
                    { dx: 1, len: size * 0.36, w: 2.5 },
                    { dx: 6, len: size * 0.30, w: 2 },
                    { dx: 10, len: size * 0.26, w: 2 },
                ];
                locs.forEach(l => {
                    ctx.lineWidth = l.w;
                    ctx.beginPath();
                    ctx.moveTo(cx + l.dx, hy - hr * 0.1);
                    ctx.bezierCurveTo(cx + l.dx - 2, hy + l.len * 0.5, cx + l.dx + 2, hy + l.len * 0.8, cx + l.dx, hy + l.len);
                    ctx.stroke();
                });
                ctx.fillStyle = crew.hairColor;
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.55, hr * 1.02, Math.PI, 0);
                ctx.fill();
                // Glasses (Jose always has clear glasses)
                ctx.strokeStyle = 'rgba(200,200,200,0.7)';
                ctx.lineWidth = 1.2;
                const gw = hr * 0.85;
                const gh = hr * 0.44;
                const gy = hy - hr * 0.1;
                ctx.beginPath();
                ctx.roundRect(cx - gw - 0.5, gy - gh / 2, gw, gh, 1.5);
                ctx.stroke();
                ctx.beginPath();
                ctx.roundRect(cx + 0.5, gy - gh / 2, gw, gh, 1.5);
                ctx.stroke();
                break;
            }
            case 'matt': {
                // Tousled medium brown
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.55, hr * 1.08, Math.PI, 0);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(cx - hr * 0.3, hy - hr * 1.2, hr * 0.65, hr * 0.38, -0.2, 0, Math.PI * 2);
                ctx.fill();
                // Beard
                ctx.fillStyle = '#3a1a08';
                ctx.beginPath();
                ctx.ellipse(cx, hy + hr * 0.45, hr * 0.65, hr * 0.32, 0, 0, Math.PI);
                ctx.fill();
                break;
            }
            case 'tsuyoshi': {
                // Mohawk — shaved sides, tall spikes
                const mw = size * 0.12;
                const baseY2 = hy - hr * 0.05;
                ctx.fillStyle = crew.hairColor;
                ctx.fillRect(cx - mw / 2, baseY2 - hr * 0.2, mw, hr * 0.35);
                const spk = [
                    { ox: -0.3, h: size * 0.28, t: -0.15 },
                    { ox: 0.0, h: size * 0.36, t: 0.0 },
                    { ox: 0.3, h: size * 0.26, t: 0.15 },
                ];
                spk.forEach(s => {
                    const sx = cx + s.ox * mw * 2;
                    ctx.beginPath();
                    ctx.moveTo(sx - 2.5, baseY2);
                    ctx.lineTo(sx + 2.5, baseY2);
                    ctx.lineTo(sx + Math.sin(s.t) * s.h * 0.4, baseY2 - s.h);
                    ctx.closePath();
                    ctx.fill();
                });
                break;
            }
            case 'jarrad': {
                // Dark crop
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.6, hr * 1.05, Math.PI, 0);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(cx - hr * 0.1, hy - hr * 1.3, hr * 0.6, hr * 0.28, -0.1, 0, Math.PI * 2);
                ctx.fill();
                // Beard
                ctx.fillStyle = '#2a1e08';
                ctx.beginPath();
                ctx.ellipse(cx, hy + hr * 0.42, hr * 0.6, hr * 0.26, 0, 0, Math.PI);
                ctx.fill();
                // Glasses
                ctx.strokeStyle = '#111';
                ctx.lineWidth = 1.2;
                ctx.fillStyle = 'rgba(160,200,240,0.15)';
                const jgw = hr * 0.82;
                const jgy = hy - hr * 0.1;
                ctx.beginPath();
                ctx.roundRect(cx - jgw - 0.5, jgy - hr * 0.22, jgw, hr * 0.44, 1.5);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.roundRect(cx + 0.5, jgy - hr * 0.22, jgw, hr * 0.44, 1.5);
                ctx.fill();
                ctx.stroke();
                break;
            }
            case 'fabio': {
                // Short dark slicked
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.6, hr * 1.05, Math.PI, 0);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(cx, hy - hr * 1.28, hr * 0.65, hr * 0.28, 0.1, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#2e1800';
                ctx.beginPath();
                ctx.ellipse(cx, hy + hr * 0.4, hr * 0.55, hr * 0.22, 0, 0, Math.PI);
                ctx.fill();
                break;
            }
            case 'phil': {
                // Full silver
                ctx.fillStyle = '#C8C8C4';
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.6, hr * 1.08, Math.PI, 0);
                ctx.fill();
                ctx.fillStyle = '#DDDDD8';
                ctx.beginPath();
                ctx.ellipse(cx, hy - hr * 1.1, hr * 0.55, hr * 0.28, 0, 0, Math.PI * 2);
                ctx.fill();
                // Glasses
                ctx.strokeStyle = '#111';
                ctx.lineWidth = 1.2;
                ctx.fillStyle = 'rgba(160,200,240,0.15)';
                const pgw = hr * 0.82;
                const pgy = hy - hr * 0.1;
                ctx.beginPath();
                ctx.roundRect(cx - pgw - 0.5, pgy - hr * 0.22, pgw, hr * 0.44, 1.5);
                ctx.fill();
                ctx.stroke();
                ctx.beginPath();
                ctx.roundRect(cx + 0.5, pgy - hr * 0.22, pgw, hr * 0.44, 1.5);
                ctx.fill();
                ctx.stroke();
                break;
            }
            case 'joe': {
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.6, hr * 1.05, Math.PI, 0);
                ctx.fill();
                ctx.beginPath();
                ctx.ellipse(cx - hr * 0.1, hy - hr * 1.3, hr * 0.55, hr * 0.26, -0.1, 0, Math.PI * 2);
                ctx.fill();
                // Hi-vis hint
                ctx.fillStyle = '#D4E800';
                ctx.fillRect(cx - size * 0.25, size * 0.82, size * 0.5, size * 0.06);
                break;
            }
            case 'connie': {
                ctx.fillStyle = '#E8D080';
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.45, hr * 1.08, Math.PI, 0);
                ctx.fill();
                ctx.fillRect(cx - hr * 1.0, hy + hr * 0.1, hr * 2.0, size * 0.16);
                break;
            }
            case 'mikayla': {
                ctx.fillStyle = '#8B4513';
                ctx.beginPath();
                ctx.arc(cx, hy - hr * 0.45, hr * 1.05, Math.PI, 0);
                ctx.fill();
                ctx.fillRect(cx - hr * 0.9, hy + hr * 0.1, hr * 1.8, size * 0.14);
                break;
            }
        }
        // ── Locked star for Jose ───────────────────────────────────────────────
        if (crew.locked) {
            ctx.fillStyle = '#E8A830';
            ctx.font = `bold ${size * 0.22}px Arial`;
            ctx.textAlign = 'center';
            ctx.fillText('★', cx, size * 0.96);
        }
        // Border ring
        ctx.strokeStyle = crew.locked ? '#E8A830' : crew.color + '99';
        ctx.lineWidth = crew.locked ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(cx, cx, cx - 1.5, 0, Math.PI * 2);
        ctx.stroke();
        return cv;
    }
}
