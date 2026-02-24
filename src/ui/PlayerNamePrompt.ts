// ── PlayerNamePrompt — one-time nickname setup for leaderboard ───────────────
import { getPlayerName, setPlayerName } from '../services/LeaderboardService';

export class PlayerNamePrompt {
  /** Show prompt if no name is set. Calls onDone when name is confirmed. */
  show(onDone: (name: string) => void): void {
    const existing = getPlayerName();
    if (existing) { onDone(existing); return; }

    const ov = document.createElement('div');
    ov.style.cssText = `
      position:fixed; inset:0; z-index:20000;
      background:rgba(0,0,0,0.92);
      display:flex; align-items:center; justify-content:center;
      font-family:'Arial Black',Arial,sans-serif;
    `;

    ov.innerHTML = `
      <div style="
        background:linear-gradient(135deg,#0d1a0d,#1a2a1a);
        border:2px solid #2ECC40;
        border-radius:14px; padding:30px 28px;
        max-width:320px; width:90%; text-align:center;
        box-shadow:0 0 40px #2ECC4040;
      ">
        <div style="color:#2ECC40;font-size:11px;letter-spacing:3px;font-weight:900;margin-bottom:10px;">
          TROWELED EARTH RUSH
        </div>
        <div style="font-size:13px;color:#E8A830;font-weight:900;letter-spacing:1px;margin-bottom:6px;">
          ⚔️ CONTRACT WARS
        </div>
        <div style="color:#fff;font-size:20px;font-weight:900;margin-bottom:8px;line-height:1.2;">
          What's your<br>crew called?
        </div>
        <div style="color:#aaa;font-size:12px;margin-bottom:20px;line-height:1.4;">
          Your name appears on the leaderboard when you beat other crews' times.
        </div>
        <input id="pn-input" type="text" maxlength="20" placeholder="Enter crew name..."
          style="
            width:100%; box-sizing:border-box;
            background:#111; border:2px solid #2ECC40;
            color:#fff; font-size:16px; font-weight:700;
            padding:12px 14px; border-radius:8px;
            font-family:'Arial Black',Arial,sans-serif;
            outline:none; margin-bottom:16px;
            text-align:center; letter-spacing:1px;
          "/>
        <button id="pn-btn" style="
          width:100%; background:#2ECC40; color:#000;
          border:none; padding:14px; font-size:15px;
          font-weight:900; border-radius:8px; cursor:pointer;
          font-family:'Arial Black',Arial,sans-serif;
          letter-spacing:1px;
        ">LET'S GO 🚐</button>
      </div>
    `;

    document.body.appendChild(ov);

    const input = ov.querySelector<HTMLInputElement>('#pn-input')!;
    const btn   = ov.querySelector<HTMLButtonElement>('#pn-btn')!;

    // Focus input
    setTimeout(() => input.focus(), 100);

    const confirm = () => {
      const name = input.value.trim() || 'TEM Crew';
      setPlayerName(name);
      ov.remove();
      onDone(name);
    };

    btn.addEventListener('click', confirm);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') confirm(); });
  }
}
