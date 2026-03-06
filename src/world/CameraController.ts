import * as THREE from 'three';

const CAMERA_CONFIG = {
  fov: 35,
  height: 38,
  distance: 28,           // How far behind the car
  rotationSmoothing: 0.06, // How quickly camera swings behind car (lower = lazier)
  positionSmoothing: 0.1,
  lookAheadDistance: 6,
};

export class CameraController {
  camera: THREE.PerspectiveCamera;
  private targetPos = new THREE.Vector3();
  private cameraAngle = 0; // smoothed camera angle following van heading

  constructor() {
    this.camera = new THREE.PerspectiveCamera(
      CAMERA_CONFIG.fov,
      window.innerWidth / window.innerHeight,
      5,
      800
    );
  }

  followOnFoot(pos: THREE.Vector3, heading: number) {
    // 60° top-down camera, close to character, minimal sway
    let angleDiff = heading - this.cameraAngle;
    while (angleDiff >  Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    this.cameraAngle += angleDiff * 0.008; // very slow pan — barely reacts to movement

    // 60° down angle: tan(60°) ≈ 1.73 → height = behind * 1.73
    const behind = 10;
    const height  = behind * 1.73; // ≈17.3 — gives ~60° downward look
    this.targetPos.set(
      pos.x - Math.sin(this.cameraAngle) * behind,
      pos.y + height,
      pos.z + Math.cos(this.cameraAngle) * behind,
    );
    // Very slow position lerp — camera barely moves with player micro-movements
    this.camera.position.lerp(this.targetPos, 0.04);
    const lookAt = pos.clone();
    lookAt.y += 1.0;
    this.camera.lookAt(lookAt);
  }

  /** Current camera yaw angle — used for camera-relative player movement */
  get angle(): number { return this.cameraAngle; }

  follow(vanPos: THREE.Vector3, velocity: THREE.Vector3, heading: number) {
    // Smoothly rotate camera angle toward van heading
    // Normalize angle difference to -PI..PI
    let angleDiff = heading - this.cameraAngle;
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    this.cameraAngle += angleDiff * CAMERA_CONFIG.rotationSmoothing;

    // Camera sits BEHIND the van based on smoothed heading
    const behindX = Math.sin(this.cameraAngle) * -CAMERA_CONFIG.distance;
    const behindZ = -Math.cos(this.cameraAngle) * -CAMERA_CONFIG.distance;

    this.targetPos.set(
      vanPos.x + behindX,
      vanPos.y + CAMERA_CONFIG.height,
      vanPos.z + behindZ
    );

    // Smooth position follow
    this.camera.position.lerp(this.targetPos, CAMERA_CONFIG.positionSmoothing);

    // Look slightly ahead of van
    const speed = velocity.length();
    const lookAhead = speed > 0.5
      ? velocity.clone().normalize().multiplyScalar(CAMERA_CONFIG.lookAheadDistance)
      : new THREE.Vector3(0, 0, 0);
    const lookAtTarget = vanPos.clone().add(lookAhead);
    lookAtTarget.y += 2; // look slightly above ground level
    this.camera.lookAt(lookAtTarget);
  }
}
