import nipplejs from 'nipplejs';
import type { TEMRadio } from '../audio/TEMRadio';

export class InputManager {
  keys: Record<string, boolean> = {};
  steerAxis = 0;
  joystickY = 0;
  accelerating = false;
  braking = false;
  horn = false;
  private joystickManager: nipplejs.JoystickManager | null = null;
  private hornTimeout: ReturnType<typeof setTimeout> | null = null;
  private radio: TEMRadio | null = null;
  private radioBtnEl: HTMLDivElement | null = null;
  private radioPopupEl: HTMLDivElement | null = null;
  private radioPopupTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      // H key triggers horn
      if (e.code === 'KeyH') this.triggerHorn();
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
    this.setupMobileControls();
  }

  private triggerHorn(): void {
    this.horn = true;
    if (this.hornTimeout !== null) clearTimeout(this.hornTimeout);
    this.hornTimeout = setTimeout(() => {
      this.horn = false;
      this.hornTimeout = null;
    }, 300);
  }

  private setupMobileControls() {
    // Create joystick zone
    const joystickZone = document.createElement('div');
    joystickZone.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `;
    document.body.appendChild(joystickZone);

    this.joystickManager = nipplejs.create({
      zone: joystickZone,
      mode: 'static',
      position: { left: '75px', bottom: '75px' },
      color: 'rgba(255, 255, 255, 0.6)',
      size: 120,
      restOpacity: 0.5,
    });

    this.joystickManager.on('move', (_evt, data: nipplejs.JoystickOutputData) => {
      if (data.vector) {
        this.steerAxis = data.vector.x;
        this.joystickY = -(data.vector.y ?? 0);
      }
    });

    this.joystickManager.on('end', () => {
      this.steerAxis = 0;
      this.joystickY = 0;
    });

    // Brake / REV button
    const brakeBtn = document.createElement('div');
    brakeBtn.style.cssText = `
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: rgba(220, 50, 50, 0.6);
      border: 3px solid rgba(255, 100, 100, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: monospace;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
      z-index: 100;
      touch-action: none;
      user-select: none;
    `;
    brakeBtn.textContent = 'REV';
    document.body.appendChild(brakeBtn);

    brakeBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.braking = true;
      brakeBtn.style.background = 'rgba(220, 50, 50, 0.9)';
    }, { passive: false });
    brakeBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.braking = false;
      brakeBtn.style.background = 'rgba(220, 50, 50, 0.6)';
    }, { passive: false });

    // GAS button
    const gasBtn = document.createElement('div');
    gasBtn.style.cssText = `
      position: fixed;
      bottom: 140px;
      right: 30px;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      background: rgba(50, 200, 50, 0.6);
      border: 3px solid rgba(100, 255, 100, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-family: monospace;
      font-weight: bold;
      font-size: 14px;
      letter-spacing: 1px;
      z-index: 100;
      touch-action: none;
      user-select: none;
    `;
    gasBtn.textContent = 'GAS';
    document.body.appendChild(gasBtn);

    gasBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      this.accelerating = true;
      gasBtn.style.background = 'rgba(50, 200, 50, 0.9)';
    }, { passive: false });
    gasBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      this.accelerating = false;
      gasBtn.style.background = 'rgba(50, 200, 50, 0.6)';
    }, { passive: false });

    // ── RADIO button — replaces horn, above GAS ────────────────────────────
    const radioBtn = document.createElement('div');
    radioBtn.style.cssText = `
      position: fixed;
      bottom: 250px;
      right: 30px;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: rgba(200, 140, 30, 0.6);
      border: 3px solid rgba(255, 200, 80, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 22px;
      z-index: 100;
      touch-action: none;
      user-select: none;
      transition: transform 0.1s, background 0.15s;
    `;
    radioBtn.textContent = '🔇';
    document.body.appendChild(radioBtn);
    this.radioBtnEl = radioBtn;

    // ── Radio popup (station name + volume) — above the button ────────────
    const radioPopup = document.createElement('div');
    radioPopup.style.cssText = `
      position: fixed;
      bottom: 332px;
      right: 8px;
      background: rgba(0,0,0,0.82);
      border: 1.5px solid rgba(200,168,106,0.4);
      border-radius: 14px;
      padding: 8px 10px;
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      z-index: 200;
      min-width: 130px;
      backdrop-filter: blur(6px);
      pointer-events: auto;
      touch-action: manipulation;
    `;
    document.body.appendChild(radioPopup);
    this.radioPopupEl = radioPopup;

    const popupStation = document.createElement('div');
    popupStation.style.cssText = `font-size:11px; font-weight:800; letter-spacing:1px; color:#C8A86A; text-align:center;`;
    radioPopup.appendChild(popupStation);

    const volRow = document.createElement('div');
    volRow.style.cssText = `display:flex; align-items:center; gap:8px;`;

    const volDown = document.createElement('div');
    volDown.textContent = '−';
    volDown.style.cssText = `
      width:32px; height:32px; border-radius:50%;
      background:rgba(255,255,255,0.1); border:1.5px solid rgba(255,255,255,0.25);
      display:flex; align-items:center; justify-content:center;
      font-size:18px; font-weight:900; color:#fff; cursor:pointer;
      touch-action:manipulation;
    `;

    const volLabel = document.createElement('div');
    volLabel.style.cssText = `font-size:11px; color:rgba(200,168,106,0.8); min-width:32px; text-align:center;`;
    volLabel.textContent = '55%';

    const volUp = document.createElement('div');
    volUp.textContent = '+';
    volUp.style.cssText = volDown.style.cssText;

    volRow.appendChild(volDown);
    volRow.appendChild(volLabel);
    volRow.appendChild(volUp);
    radioPopup.appendChild(volRow);

    const powerRow = document.createElement('div');
    powerRow.style.cssText = `font-size:10px; color:rgba(200,168,106,0.55); text-align:center;`;
    powerRow.textContent = 'hold to turn off';
    radioPopup.appendChild(powerRow);

    // ── Helper: update button + popup to reflect current radio state ────────
    const syncBtn = () => {
      if (!this.radio) return;
      const on = this.radio.isOn();
      radioBtn.textContent = on ? '📻' : '🔇';
      radioBtn.style.background = on ? 'rgba(200,140,30,0.75)' : 'rgba(80,80,80,0.55)';
      radioBtn.style.borderColor = on ? 'rgba(255,200,80,0.8)' : 'rgba(150,150,150,0.4)';
    };

    const showPopup = () => {
      if (!this.radio) return;
      const on = this.radio.isOn();
      popupStation.textContent = on ? this.radio.getStationName() : '— OFF —';
      popupStation.style.color = on ? this.radio.getStationColor() : '#888';
      const vol = this.radio.getVolume();
      volLabel.textContent = vol + '%';
      powerRow.textContent = on ? 'hold to turn off' : 'hold to turn on';
      radioPopup.style.display = 'flex';
      if (this.radioPopupTimeout) clearTimeout(this.radioPopupTimeout);
      this.radioPopupTimeout = setTimeout(() => {
        radioPopup.style.display = 'none';
      }, 3500);
    };

    // Volume − button
    const adjustVol = (delta: number) => {
      if (!this.radio) return;
      const newVol = Math.max(0, Math.min(100, this.radio.getVolume() + delta));
      this.radio.setVolumeLevel(newVol);
      volLabel.textContent = newVol + '%';
      if (this.radioPopupTimeout) clearTimeout(this.radioPopupTimeout);
      this.radioPopupTimeout = setTimeout(() => { radioPopup.style.display = 'none'; }, 3500);
    };
    volDown.addEventListener('touchstart', (e) => { e.stopPropagation(); adjustVol(-10); }, { passive: false });
    volUp.addEventListener('touchstart',   (e) => { e.stopPropagation(); adjustVol(+10); }, { passive: false });
    volDown.addEventListener('click', () => adjustVol(-10));
    volUp.addEventListener('click',   () => adjustVol(+10));

    // ── Touch handling — tap vs long-press ─────────────────────────────────
    let longPressTimer: ReturnType<typeof setTimeout> | null = null;
    let didLongPress = false;

    radioBtn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      didLongPress = false;
      radioBtn.style.transform = 'scale(1.08)';
      longPressTimer = setTimeout(() => {
        didLongPress = true;
        if (this.radio) {
          this.radio.togglePower();
          syncBtn();
          showPopup();
        }
        radioBtn.style.transform = 'scale(1.0)';
      }, 600);
    }, { passive: false });

    radioBtn.addEventListener('touchend', (e) => {
      e.preventDefault();
      radioBtn.style.transform = 'scale(1.0)';
      if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
      if (!didLongPress && this.radio) {
        if (!this.radio.isOn()) {
          this.radio.togglePower(); // turn on
        } else {
          this.radio.nextStation(); // cycle station
        }
        syncBtn();
        showPopup();
      }
    }, { passive: false });

    // Mouse fallback (desktop)
    radioBtn.addEventListener('mousedown', () => {
      didLongPress = false;
      longPressTimer = setTimeout(() => {
        didLongPress = true;
        if (this.radio) { this.radio.togglePower(); syncBtn(); showPopup(); }
      }, 600);
    });
    radioBtn.addEventListener('mouseup', () => {
      if (longPressTimer) { clearTimeout(longPressTimer); longPressTimer = null; }
      if (!didLongPress && this.radio) {
        if (!this.radio.isOn()) { this.radio.togglePower(); }
        else { this.radio.nextStation(); }
        syncBtn();
        showPopup();
      }
    });
  }

  /** Wire up the radio — call from main.ts after TEMRadio is created */
  setRadio(radio: TEMRadio): void {
    this.radio = radio;
    // Sync button icon to initial state
    if (this.radioBtnEl) {
      this.radioBtnEl.textContent = radio.isOn() ? '📻' : '🔇';
      this.radioBtnEl.style.background = radio.isOn() ? 'rgba(200,140,30,0.75)' : 'rgba(80,80,80,0.55)';
    }
  }

  get joystickForward() { return this.joystickY; }
  get gas() { return this.forward; }
  get forward() { return this.keys['ArrowUp'] || this.keys['KeyW'] || this.accelerating; }
  get backward() { return this.keys['ArrowDown'] || this.keys['KeyS']; }
  get left() { return this.keys['ArrowLeft'] || this.keys['KeyA'] || this.steerAxis < -0.2; }
  get right() { return this.keys['ArrowRight'] || this.keys['KeyD'] || this.steerAxis > 0.2; }
  get brake() { return this.keys['Space'] || this.braking; }
  get honk() { return this.horn; }
}
