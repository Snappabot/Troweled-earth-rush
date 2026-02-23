/**
 * RewardScreen.ts
 * Full-screen cinematic unlock shown when the player collects all 8 TEM photos.
 * Reveals:  🏆 Full collection  |  🎁 5% discount  |  📜 Certificate
 */

import { renderCertificate, isBtcAchieved } from './Certificate';

const STORE_URL  = 'https://troweledearthmelbourne.com.au';
const DISC_CODE  = 'TEMRUSH5';
const CERT_KEY   = 'tem-rush-cert-unlocked';
const REWARD_KEY = 'tem-rush-reward-seen';

export class RewardScreen {
  private overlay: HTMLDivElement | null = null;
  private certDataUrl: string | null = null;

  /** Returns true if the player has already unlocked this reward */
  static isUnlocked(): boolean {
    return localStorage.getItem(CERT_KEY) === '1';
  }

  /** Call when the last photo is collected — shows once, marks as seen */
  trigger(): void {
    localStorage.setItem(CERT_KEY, '1');
    this._show(true);
  }

  /** Re-open from the gallery (certificate already unlocked) */
  open(): void {
    if (!RewardScreen.isUnlocked()) return;
    this._show(false);
  }

  private _show(firstTime: boolean): void {
    if (this.overlay) { this.overlay.remove(); this.overlay = null; }

    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 30000;
      background: rgba(5,4,2,0.97);
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      overflow-y: auto;
      font-family: system-ui, -apple-system, sans-serif;
      touch-action: pan-y;
    `;
    document.body.appendChild(this.overlay);

    const wrap = document.createElement('div');
    wrap.style.cssText = `
      width: 100%; max-width: 560px;
      padding: 32px 20px 60px;
      box-sizing: border-box;
      display: flex; flex-direction: column; gap: 20px;
    `;
    this.overlay.appendChild(wrap);

    // ── Close button ────────────────────────────────────────────────────────────
    const closeRow = document.createElement('div');
    closeRow.style.cssText = 'display:flex; justify-content:flex-end;';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 18px; width: 38px; height: 38px;
      border-radius: 50%; cursor: pointer; touch-action: manipulation;
    `;
    closeBtn.addEventListener('click', () => this._close());
    closeRow.appendChild(closeBtn);
    wrap.appendChild(closeRow);

    // ── Hero ─────────────────────────────────────────────────────────────────────
    if (firstTime) {
      const hero = document.createElement('div');
      hero.style.cssText = `
        text-align: center;
        animation: rewardPop 0.6s cubic-bezier(0.34,1.56,0.64,1) both;
      `;
      hero.innerHTML = `
        <div style="font-size: clamp(48px,14vw,80px); line-height:1;">🏆</div>
        <div style="color:#FFD97A; font-size: clamp(20px,6vw,32px); font-weight:900; margin-top:12px; letter-spacing:0.5px;">
          Full Collection Unlocked!
        </div>
        <div style="color:rgba(240,232,216,0.6); font-size:clamp(13px,3.5vw,16px); margin-top:8px; line-height:1.6;">
          All 8 TEM works collected.<br>Connie is impressed. Matt said "nice". That's basically a medal.
        </div>
      `;
      wrap.appendChild(hero);
    } else {
      const hero = document.createElement('div');
      hero.style.cssText = 'text-align:center;';
      hero.innerHTML = `
        <div style="font-size:clamp(36px,10vw,56px);">🏆</div>
        <div style="color:#FFD97A; font-size:clamp(18px,5vw,26px); font-weight:900; margin-top:8px;">Your Rewards</div>
      `;
      wrap.appendChild(hero);
    }

    // ── Discount card ─────────────────────────────────────────────────────────────
    const discCard = document.createElement('div');
    discCard.style.cssText = `
      background: linear-gradient(135deg, rgba(193,102,107,0.18) 0%, rgba(193,102,107,0.08) 100%);
      border: 1.5px solid rgba(193,102,107,0.5);
      border-radius: 16px; padding: 20px;
      display: flex; flex-direction: column; gap: 10px;
    `;
    discCard.innerHTML = `
      <div style="color:#C1666B; font-size:12px; font-weight:700; letter-spacing:2px;">🎁  REWARD #1 — TEM STORE</div>
      <div style="color:#F0E8D8; font-size:clamp(14px,4vw,17px); line-height:1.6;">
        5% off everything at<br>
        <a href="${STORE_URL}" target="_blank"
           style="color:#C8A86A; font-weight:700; text-decoration:none;">troweledearthmelbourne.com.au</a>
      </div>
      <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(200,168,106,0.4); border-radius:10px;
                  padding:14px; text-align:center;">
        <div style="color:rgba(200,168,106,0.7); font-size:11px; letter-spacing:2px; margin-bottom:6px; font-family:monospace;">
          USE PROMO CODE AT CHECKOUT
        </div>
        <div style="color:#FFD97A; font-size:clamp(22px,7vw,32px); font-weight:900; letter-spacing:4px; font-family:monospace;">
          ${DISC_CODE}
        </div>
      </div>
      <button id="copy-code-btn" style="
        background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation; width:100%;
      ">📋 Copy Code</button>
    `;
    wrap.appendChild(discCard);

    // Copy code handler
    setTimeout(() => {
      const copyBtn = document.getElementById('copy-code-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard?.writeText(DISC_CODE).then(() => {
            copyBtn.textContent = '✓ Copied!';
            setTimeout(() => { copyBtn.textContent = '📋 Copy Code'; }, 2000);
          });
        });
      }
    }, 0);

    // ── Certificate card ──────────────────────────────────────────────────────────
    const certCard = document.createElement('div');
    certCard.style.cssText = `
      background: linear-gradient(135deg, rgba(200,168,106,0.12) 0%, rgba(200,168,106,0.05) 100%);
      border: 1.5px solid rgba(200,168,106,0.4);
      border-radius: 16px; padding: 20px;
      display: flex; flex-direction: column; gap: 12px;
    `;
    certCard.innerHTML = `
      <div style="color:#C8A86A; font-size:12px; font-weight:700; letter-spacing:2px;">📜  REWARD #2 — CERTIFICATE</div>
      <div style="color:#F0E8D8; font-size:clamp(14px,4vw,17px); line-height:1.6;">
        TEM Rush — Plasterer's Apprentice<br>
        <span style="color:rgba(240,232,216,0.55); font-size:13px;">Added to your TEM licence profile in-app.</span>
      </div>
    `;

    // Render certificate thumbnail (includes BTC rewards if achieved)
    try {
      this.certDataUrl = renderCertificate({ btcAchieved: isBtcAchieved() });
      const thumb = document.createElement('img');
      thumb.src = this.certDataUrl;
      thumb.style.cssText = `
        width:100%; border-radius:10px;
        border:1px solid rgba(200,168,106,0.3);
        cursor:pointer; touch-action:manipulation;
        box-shadow: 0 4px 20px rgba(0,0,0,0.6);
      `;
      thumb.title = 'Tap to view full certificate';
      thumb.addEventListener('click', () => this._openCertFull());
      certCard.appendChild(thumb);
    } catch (e) {
      console.warn('Certificate render failed:', e);
    }

    const certBtns = document.createElement('div');
    certBtns.style.cssText = 'display:flex; gap:10px;';
    certBtns.innerHTML = `
      <button id="view-cert-btn" style="
        flex:1; background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation;
      ">📜 View Full</button>
      <button id="save-cert-btn" style="
        flex:1; background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation;
      ">💾 Save Image</button>
    `;
    certCard.appendChild(certBtns);
    wrap.appendChild(certCard);

    // Button handlers
    setTimeout(() => {
      document.getElementById('view-cert-btn')?.addEventListener('click', () => this._openCertFull());
      document.getElementById('save-cert-btn')?.addEventListener('click', () => this._downloadCert());
    }, 0);

    // ── Inject animation keyframe ─────────────────────────────────────────────────
    if (!document.getElementById('reward-styles')) {
      const s = document.createElement('style');
      s.id = 'reward-styles';
      s.textContent = `
        @keyframes rewardPop {
          from { transform: scale(0.7) translateY(30px); opacity: 0; }
          to   { transform: scale(1) translateY(0);      opacity: 1; }
        }
      `;
      document.head.appendChild(s);
    }
  }

  private _openCertFull(): void {
    if (!this.certDataUrl) return;
    const el = document.createElement('div');
    el.style.cssText = `
      position: fixed; inset: 0; z-index: 40000;
      background: rgba(0,0,0,0.95);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 20px; box-sizing: border-box;
      touch-action: manipulation;
    `;
    const img = document.createElement('img');
    img.src = this.certDataUrl;
    img.style.cssText = `
      max-width: 100%; max-height: 85vh;
      border-radius: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.8);
    `;
    const closeEl = document.createElement('button');
    closeEl.textContent = '✕ Close';
    closeEl.style.cssText = `
      margin-top: 16px; background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 15px; font-weight: 700;
      border-radius: 8px; padding: 10px 24px; cursor: pointer;
      touch-action: manipulation;
    `;
    closeEl.addEventListener('click', () => el.remove());
    el.addEventListener('click', (e) => { if (e.target === el) el.remove(); });
    el.appendChild(img);
    el.appendChild(closeEl);
    document.body.appendChild(el);
  }

  private _downloadCert(): void {
    if (!this.certDataUrl) return;
    const a = document.createElement('a');
    a.href = this.certDataUrl;
    a.download = 'TEM-Rush-Certificate.png';
    a.click();
  }

  private _close(): void {
    if (this.overlay) {
      this.overlay.remove();
      this.overlay = null;
    }
  }
}
