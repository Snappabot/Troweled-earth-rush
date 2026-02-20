import { PHOTO_ACHIEVEMENTS, getCollected } from '../minigames/TrowelingGame';

export class AchievementGallery {
  private overlay: HTMLDivElement | null = null;

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
          // Photo thumbnail (blurred slightly for artistic effect)
          const thumb = document.createElement('img');
          thumb.src = photo.file;
          thumb.alt = photo.name;
          thumb.style.cssText = `
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px) brightness(0.75);
            display: block;
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
        encourage.textContent = '🏆 You\'ve scraped them all. Matt\'s proud. Sort of.';
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

  hide(): void {
    if (this.overlay) {
      this.overlay.style.display = 'none';
    }
  }
}
