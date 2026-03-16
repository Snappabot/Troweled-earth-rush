import * as THREE from 'three';

const CAMERA_CONFIG = {
  fov: 35,
  height: 38,
  distance: 28,
  rotationSmoothing: 0.06,
  positionSmoothing: 0.1,
  lookAheadDistance: 6,
};

const FOOT_CAM = {
  behind: 7.0,       // pulled back 2m from original 5.0
  rightOffset: 1.8,
  height: 2.2,
};

export class CameraController {
  camera: THREE.PerspectiveCamera;
  private targetPos = new THREE.Vector3();
  private cameraAngle = 0;

  // On-foot swipe orbit
  private footOrbitOffset = 0;
  private lastTouchX = 0;
  private touching = false;
  private onFoot = false;

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
    window.addEventListener('touchstart', (e) => {
      if (!this.onFoot) return;
      const t = e.changedTouches[0];
      // Only right half of screen (left = movement controls)
      if (t.clientX < window.innerWidth * 0.45) return;
      this.touching = true;
      this.lastTouchX = t.clientX;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (!this.touching || !this.onFoot) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - this.lastTouchX;
      this.footOrbitOffset -= dx * 0.008;
      this.lastTouchX = t.clientX;
    }, { passive: true });

    window.addEventListener('touchend', () => { this.touching = false; }, { passive: true });

    // Mouse drag (desktop, on-foot only)
    let mouseDown = false;
    let lastMouseX = 0;
    window.addEventListener('mousedown', (e) => {
      if (!this.onFoot || e.button !== 0) return;
      mouseDown = true; lastMouseX = e.clientX;
    });
    window.addEventListener('mousemove', (e) => {
      if (!mouseDown || !this.onFoot) return;
      const dx = e.clientX - lastMouseX;
      this.footOrbitOffset -= dx * 0.006;
      lastMouseX = e.clientX;
    });
    window.addEventListener('mouseup', () => { mouseDown = false; });
  }

  followOnFoot(pos: THREE.Vector3, heading: number) {
    this.onFoot = true;

    if (this.touching) {
      // While swiping: freeze base angle, swipe directly controls orbit
      this.cameraAngle = heading; // keep in sync so release feels natural
    } else {
      // Not swiping: slowly return orbit offset to 0, base follows heading
      this.footOrbitOffset *= 0.93;
      let angleDiff = heading - this.cameraAngle;
      while (angleDiff >  Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      this.cameraAngle += angleDiff * 0.06;
    }

    // Camera sits BEHIND the character at effectiveAngle
    const effectiveAngle = this.cameraAngle + this.footOrbitOffset;

    this.targetPos.set(
      pos.x - Math.sin(effectiveAngle) * FOOT_CAM.behind + Math.cos(effectiveAngle) * FOOT_CAM.rightOffset,
      pos.y + FOOT_CAM.height,
      pos.z + Math.cos(effectiveAngle) * FOOT_CAM.behind + Math.sin(effectiveAngle) * FOOT_CAM.rightOffset,
    );
    this.camera.position.lerp(this.targetPos, 0.12);

    // Look at point ahead of where camera is facing
    const lookAt = new THREE.Vector3(
      pos.x + Math.sin(effectiveAngle) * 3,
      pos.y + 1.4,
      pos.z - Math.cos(effectiveAngle) * 3,
    );
    this.camera.lookAt(lookAt);
  }

  /** Current camera yaw angle — used for camera-relative player movement */
  get angle(): number {
    return this.onFoot ? this.cameraAngle + this.footOrbitOffset : this.cameraAngle;
  }

  follow(vanPos: THREE.Vector3, velocity: THREE.Vector3, heading: number) {
    this.onFoot = false;
    this.footOrbitOffset = 0; // reset orbit when back in van

    let angleDiff = heading - this.cameraAngle;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    this.cameraAngle += angleDiff * CAMERA_CONFIG.rotationSmoothing;

    const behindX = Math.sin(this.cameraAngle) * -CAMERA_CONFIG.distance;
    const behindZ = -Math.cos(this.cameraAngle) * -CAMERA_CONFIG.distance;

    this.targetPos.set(
      vanPos.x + behindX,
      vanPos.y + CAMERA_CONFIG.height,
      vanPos.z + behindZ
    );

    this.camera.position.lerp(this.targetPos, CAMERA_CONFIG.positionSmoothing);

    const speed = velocity.length();
    const lookAhead = speed > 0.5
      ? velocity.clone().normalize().multiplyScalar(CAMERA_CONFIG.lookAheadDistance)
      : new THREE.Vector3(0, 0, 0);
    const lookAtTarget = vanPos.clone().add(lookAhead);
    lookAtTarget.y += 2;
    this.camera.lookAt(lookAtTarget);
  }
}
