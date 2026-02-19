export class InputManager {
    keys = {};
    steerAxis = 0; // -1 to 1
    throttleAxis = 0; // -1 to 1
    braking = false;
    constructor() {
        window.addEventListener('keydown', (e) => { this.keys[e.code] = true; });
        window.addEventListener('keyup', (e) => { this.keys[e.code] = false; });
        this.setupTouchControls();
    }
    setupTouchControls() {
        // Simple touch joystick (will be replaced by nipplejs in Phase 1)
        // Left half = steer, right half = throttle
        let touchStartX = 0;
        let touchStartY = 0;
        window.addEventListener('touchstart', (e) => {
            const t = e.touches[0];
            touchStartX = t.clientX;
            touchStartY = t.clientY;
            if (t.clientX > window.innerWidth / 2)
                this.braking = true;
        });
        window.addEventListener('touchmove', (e) => {
            const t = e.touches[0];
            if (t.clientX < window.innerWidth / 2) {
                this.steerAxis = Math.max(-1, Math.min(1, (t.clientX - touchStartX) / 50));
                this.throttleAxis = Math.max(-1, Math.min(1, -(t.clientY - touchStartY) / 50));
            }
        });
        window.addEventListener('touchend', () => {
            this.steerAxis = 0;
            this.throttleAxis = 0;
            this.braking = false;
        });
    }
    get forward() { return this.keys['ArrowUp'] || this.keys['KeyW'] || this.throttleAxis > 0.2; }
    get backward() { return this.keys['ArrowDown'] || this.keys['KeyS'] || this.throttleAxis < -0.2; }
    get left() { return this.keys['ArrowLeft'] || this.keys['KeyA'] || this.steerAxis < -0.2; }
    get right() { return this.keys['ArrowRight'] || this.keys['KeyD'] || this.steerAxis > 0.2; }
    get brake() { return this.keys['Space'] || this.braking; }
}
