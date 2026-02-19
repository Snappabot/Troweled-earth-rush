import nipplejs from 'nipplejs';
export class InputManager {
    keys = {};
    steerAxis = 0;
    accelerating = false;
    braking = false;
    joystickManager = null;
    constructor() {
        window.addEventListener('keydown', (e) => { this.keys[e.code] = true; });
        window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
        this.setupMobileControls();
    }
    setupMobileControls() {
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
        this.joystickManager.on('move', (_evt, data) => {
            if (data.vector) {
                this.steerAxis = data.vector.x;
                // Joystick ONLY controls steering — never touches accelerating
            }
        });
        this.joystickManager.on('end', () => {
            this.steerAxis = 0;
            // Joystick ONLY resets steering — never touches accelerating
        });
        // Brake button
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
        brakeBtn.textContent = 'BRAKE';
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
        // GAS button — above brake
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
    }
    get forward() { return this.keys['ArrowUp'] || this.keys['KeyW'] || this.accelerating; }
    get backward() { return this.keys['ArrowDown'] || this.keys['KeyS']; }
    get left() { return this.keys['ArrowLeft'] || this.keys['KeyA'] || this.steerAxis < -0.2; }
    get right() { return this.keys['ArrowRight'] || this.keys['KeyD'] || this.steerAxis > 0.2; }
    get brake() { return this.keys['Space'] || this.braking; }
}
