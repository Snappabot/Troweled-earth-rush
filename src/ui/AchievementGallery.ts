import { PHOTO_ACHIEVEMENTS, getCollected } from '../minigames/TrowelingGame';
import { RewardScreen } from './RewardScreen';

export class AchievementGallery {
  private overlay: HTMLDivElement | null = null;
  private rewardScreen = new RewardScreen();

  show(): void {
    if (this.overlay) {
      this.refresh();
      this.overlay.style.display = 'flex';
      return;
    }

    // ── Overlay container ───────────────────────────────────────────────────
    this.overlay = document.createElement('div');
    this.overlay.style.cssText = `
      position: fixed; inset: 0; z-index: 20000;
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      background: rgba(10,10,8,0.96);
      backdrop-filter: blur(8px);
      overflow-y: auto;
      font-family: system-ui, sans-serif;
      touch-action: pan-y;
    `;

    // ── Header ───────────────────────────────────────────────────────────────
    const header = document.createElement('div');
    header.style.cssText = `
      width: 100%; max-width: 600px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 20px 0;
      box-sizing: border-box;
    `;

    const title = document.createElement('h2');
    title.style.cssText = `
      margin: 0; color: #C8B89A;
      font-size: clamp(18px, 5vw, 26px); font-weight: 900;
      letter-spacing: 1px;
    `;
    title.textContent = '📸 TEM PHOTO COLLECTION';

    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 20px; font-weight: 700;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; flex-shrink: 0;
      touch-action: manipulation;
    `;
    closeBtn.addEventListener('click', () => this.hide());
    header.appendChild(title);
    header.appendChild(closeBtn);
    this.overlay.appendChild(header);

    // ── Progress bar ──────────────────────────────────────────────────────────
    const progressWrap = document.createElement('div');
    progressWrap.id = 'gallery-progress-wrap';
    progressWrap.style.cssText = `
      width: 100%; max-width: 600px;
      padding: 16px 20px 8px; box-sizing: border-box;
    `;
    this.overlay.appendChild(progressWrap);

    // ── Grid ──────────────────────────────────────────────────────────────────
    const grid = document.createElement('div');
    grid.id = 'gallery-grid';
    grid.style.cssText = `
      width: 100%; max-width: 600px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 8px 20px 32px;
      box-sizing: border-box;
    `;
    this.overlay.appendChild(grid);

    // ── Encouragement ─────────────────────────────────────────────────────────
    const encourage = document.createElement('div');
    encourage.id = 'gallery-encourage';
    encourage.style.cssText = `
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `;
    this.overlay.appendChild(encourage);

    // Tap outside grid area to close
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.hide();
    });

    document.body.appendChild(this.overlay);
    this.refresh();
  }

  private refresh(): void {
    if (!this.overlay) return;

    const collected = getCollected();
    const count = collected.length;
    const total = PHOTO_ACHIEVEMENTS.length;

    // ── Progress bar ──────────────────────────────────────────────────────────
    const progressWrap = this.overlay.querySelector('#gallery-progress-wrap') as HTMLDivElement;
    if (progressWrap) {
      progressWrap.innerHTML = '';

      const label = document.createElement('div');
      label.style.cssText = `
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `;
      label.textContent = count >= total
        ? `🏆 FULL COLLECTION — ${count}/${total}`
        : `Collection: ${count} / ${total}`;
      progressWrap.appendChild(label);

      const track = document.createElement('div');
      track.style.cssText = `
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;
      const fill = document.createElement('div');
      fill.style.cssText = `
        height: 100%; border-radius: 6px;
        background: ${count >= total ? '#FFD700' : '#C8B89A'};
        width: ${Math.round((count / total) * 100)}%;
        transition: width 0.5s ease;
      `;
      track.appendChild(fill);
      progressWrap.appendChild(track);
    }

    // ── Grid ──────────────────────────────────────────────────────────────────
    const grid = this.overlay.querySelector('#gallery-grid') as HTMLDivElement;
    if (grid) {
      grid.innerHTML = '';

      PHOTO_ACHIEVEMENTS.forEach((photo) => {
        const isCollected = collected.includes(photo.id);
        const card = document.createElement('div');
        card.style.cssText = `
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${isCollected ? '#1a1a14' : 'rgba(255,255,255,0.04)'};
          border: 1.5px solid ${isCollected ? 'rgba(200,184,154,0.4)' : 'rgba(255,255,255,0.08)'};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `;

        if (isCollected) {
          // Photo thumbnail
          const thumb = document.createElement('img');
          thumb.src = photo.file;
          thumb.alt = photo.name;
          thumb.style.cssText = `
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px) brightness(0.75);
            display: block; transition: filter 0.2s;
          `;
          card.appendChild(thumb);

          // Name label
          const nameLbl = document.createElement('div');
          nameLbl.style.cssText = `
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 8px 10px 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.85));
            color: #fff; font-size: clamp(11px,2.5vw,14px);
            font-weight: 700; text-align: center;
          `;
          nameLbl.textContent = photo.name;
          card.appendChild(nameLbl);

          // Tap hint icon
          const tapHint = document.createElement('div');
          tapHint.style.cssText = `
            position: absolute; top: 8px; right: 8px;
            font-size: 16px; opacity: 0.6; pointer-events: none;
          `;
          tapHint.textContent = '🔍';
          card.appendChild(tapHint);

          // Full-screen on tap
          card.style.cursor = 'pointer';
          card.addEventListener('click', () => this._openLightbox(photo.file, photo.name));
          card.addEventListener('mouseenter', () => { thumb.style.filter = 'blur(0px) brightness(0.9)'; });
          card.addEventListener('mouseleave', () => { thumb.style.filter = 'blur(1px) brightness(0.75)'; });
        } else {
          // Lock placeholder
          const lock = document.createElement('div');
          lock.style.cssText = `
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `;
          lock.innerHTML = `
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `;
          card.appendChild(lock);
        }

        grid.appendChild(card);
      });
    }

    // ── Encouragement text ────────────────────────────────────────────────────
    const encourage = this.overlay.querySelector('#gallery-encourage') as HTMLDivElement;
    if (encourage) {
      if (count >= total) {
        encourage.innerHTML = `
          <div style="margin-bottom:12px;">🏆 You've scraped them all. Matt's proud. Sort of.</div>
          <button id="gallery-rewards-btn" style="
            background: linear-gradient(135deg,#C8A86A,#A07840);
            color:#0D0B08; border:none; border-radius:12px;
            padding:14px 28px; font-size:15px; font-weight:900;
            cursor:pointer; touch-action:manipulation;
            letter-spacing:0.5px; box-shadow:0 4px 16px rgba(200,168,106,0.35);
          ">🎁 View Rewards &amp; Certificate</button>
        `;
        setTimeout(() => {
          document.getElementById('gallery-rewards-btn')?.addEventListener('click', () => {
            this.hide();
            this.rewardScreen.open();
          });
        }, 0);
      } else if (count >= 6) {
        encourage.textContent = '🔥 Almost there — keep scraping!';
      } else if (count >= 3) {
        encourage.textContent = '💪 Nice collection forming. More plastering to do!';
      } else if (count === 0) {
        encourage.textContent = '🪣 No photos yet — complete jobs to reveal TEM work!';
      } else {
        encourage.textContent = '✨ Keep scraping to unlock all 8 TEM photos!';
      }
    }
  }

  private _openLightbox(src: string, name: string): void {
    const lb = document.createElement('div');
    lb.style.cssText = `
      position: fixed; inset: 0; z-index: 30000;
      background: rgba(0,0,0,0.97);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      cursor: pointer; touch-action: manipulation;
      animation: lbFadeIn 0.2s ease;
    `;

    if (!document.getElementById('lb-styles')) {
      const s = document.createElement('style');
      s.id = 'lb-styles';
      s.textContent = `
        @keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes lbImgIn  { from { transform:scale(0.92); opacity:0; } to { transform:scale(1); opacity:1; } }
      `;
      document.head.appendChild(s);
    }

    const img = document.createElement('img');
    img.src = src;
    img.alt = name;
    img.style.cssText = `
      max-width: 100vw; max-height: 85vh;
      object-fit: contain; display: block;
      animation: lbImgIn 0.25s ease;
      border-radius: 4px;
    `;
    lb.appendChild(img);

    const caption = document.createElement('div');
    caption.style.cssText = `
      color: rgba(200,184,154,0.85); font-size: 14px; font-weight: 700;
      margin-top: 16px; letter-spacing: 0.5px;
      font-family: system-ui, sans-serif;
    `;
    caption.textContent = name;
    lb.appendChild(caption);

    const hint = document.createElement('div');
    hint.style.cssText = `
      color: rgba(255,255,255,0.3); font-size: 12px;
      margin-top: 10px; font-family: system-ui, sans-serif;
    `;
    hint.textContent = 'Tap anywhere to close';
    lb.appendChild(hint);

    lb.addEventListener('click', () => lb.remove());
    document.body.appendChild(lb);
  }

  hide(): void {
    if (this.overlay) {
      this.overlay.style.display = 'none';
    }
  }
}
