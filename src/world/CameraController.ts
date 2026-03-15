import * as THREE from 'three';

const CAMERA_CONFIG = {
  fov: 35,
  height: 38,
  distance: 30,           // +2m further back
  rotationSmoothing: 0.0, // no auto-swing — user controls angle via swipe
  positionSmoothing: 0.1,
  lookAheadDistance: 6,
};

export class CameraController {
  camera: THREE.PerspectiveCamera;
  private targetPos = new THREE.Vector3();
  private cameraAngle = 0;   // follows van heading (base)
  private orbitOffset = 0;   // user-controlled swipe offset
  private lastTouchX = 0;
  private touching = false;

  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      CAMERA_CONFIG.fov,
      window.innerWidth / window.innerHeight,
      5,
      800
    );
    this._setupSwipe();
  }

  private _setupSwipe(): void {
    // Touch swipe
    window.addEventListener('touchstart', (e) => {
      // Ignore if touch is on a UI element (joystick area = left 40% of screen)
      const t = e.changedTouches[0];
      if (t.clientX < window.innerWidth * 0.45) return;
      this.touching = true;
      this.lastTouchX = t.clientX;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.touching) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - this.lastTouchX;
      this.orbitOffset -= dx * 0.008; // radians per pixel
      this.lastTouchX = t.clientX;
    }, { passive: true });

    window.addEventListener('touchend', () => { this.touching = false; }, { passive: true });

    // Mouse drag (desktop)
    let mouseDown = false;
    let lastMouseX = 0;
    window.addEventListener('mousedown', (e) => {
      if (e.button !== 0) return;
      mouseDown = true; lastMouseX = e.clientX;
    });
    window.addEventListener('mousemove', (e) => {
      if (!mouseDown) return;
      const dx = e.clientX - lastMouseX;
      this.orbitOffset -= dx * 0.006;
      lastMouseX = e.clientX;
    });
    window.addEventListener('mouseup', () => { mouseDown = false; });
  }

  followOnFoot(pos: THREE.Vector3, heading: number) {
    // Over-right-shoulder TPS camera
    let angleDiff = heading - this.cameraAngle;
    while (angleDiff >  Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    this.cameraAngle += angleDiff * 0.06; // follows heading but not instantly

    // Character forward: (sin(angle), 0, -cos(angle))
    // Character right:   (cos(angle), 0,  sin(angle))
    const behind      = 5.0;
    const rightOffset = 1.8;
    const height      = 2.2;

    this.targetPos.set(
      pos.x - Math.sin(this.cameraAngle) * behind + Math.cos(this.cameraAngle) * rightOffset,
      pos.y + height,
      pos.z + Math.cos(this.cameraAngle) * behind + Math.sin(this.cameraAngle) * rightOffset,
    );
    this.camera.position.lerp(this.targetPos, 0.12);

    // Look at a point just ahead and slightly above the character
    const lookAt = new THREE.Vector3(
      pos.x + Math.sin(this.cameraAngle) * 3,
      pos.y + 1.4,
      pos.z - Math.cos(this.cameraAngle) * 3,
    );
    this.camera.lookAt(lookAt);
  }

  /** Current camera yaw angle — used for camera-relative player movement */
  get angle(): number { return this.cameraAngle + this.orbitOffset; }

  follow(vanPos: THREE.Vector3, velocity: THREE.Vector3, heading: number) {
    // When moving fast, slowly blend orbit offset back to 0 (auto-reset behind van)
    const speed = velocity.length();
    if (speed > 8 && !this.touching) {
      this.orbitOffset *= 0.97; // gentle decay — not instant snap
    }

    // Base angle tracks van heading (instant — no auto-swing)
    this.cameraAngle = heading;
    const effectiveAngle = this.cameraAngle + this.orbitOffset;

    // Camera sits BEHIND the van based on effective angle
    const behindX = Math.sin(effectiveAngle) * -CAMERA_CONFIG.distance;
    const behindZ = -Math.cos(effectiveAngle) * -CAMERA_CONFIG.distance;

    this.targetPos.set(
      vanPos.x + behindX,
      vanPos.y + CAMERA_CONFIG.height,
      vanPos.z + behindZ
    );

    // Smooth position follow
    this.camera.position.lerp(this.targetPos, CAMERA_CONFIG.positionSmoothing);

    // Look slightly ahead of van
    const lookAhead = speed > 0.5
      ? velocity.clone().normalize().multiplyScalar(CAMERA_CONFIG.lookAheadDistance)
      : new THREE.Vector3(0, 0, 0);
    const lookAtTarget = vanPos.clone().add(lookAhead);
    lookAtTarget.y += 2; // look slightly above ground level
    this.camera.lookAt(lookAtTarget);
  }
}
