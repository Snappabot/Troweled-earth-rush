import * as THREE from 'three';
const CAMERA_CONFIG = {
    fov: 30,
    height: 45,
    pitchAngle: 55,
    followSmoothing: 0.08,
    lookAheadDistance: 8,
};
export class CameraController {
    camera;
    targetPos = new THREE.Vector3();
    constructor() {
        this.camera = new THREE.PerspectiveCamera(CAMERA_CONFIG.fov, window.innerWidth / window.innerHeight, 10, 800);
    }
    follow(vanPos, velocity) {
        const pitchRad = THREE.MathUtils.degToRad(CAMERA_CONFIG.pitchAngle);
        const horizontalDist = CAMERA_CONFIG.height / Math.tan(pitchRad);
        // Fixed-north offset (camera always looks from south, fixed orientation)
        const offset = new THREE.Vector3(0, CAMERA_CONFIG.height, horizontalDist);
        this.targetPos.copy(vanPos).add(offset);
        // Smooth follow
        this.camera.position.lerp(this.targetPos, CAMERA_CONFIG.followSmoothing);
        // Look-ahead
        const lookAhead = velocity.clone().normalize().multiplyScalar(CAMERA_CONFIG.lookAheadDistance);
        const lookAtTarget = vanPos.clone().add(lookAhead);
        this.camera.lookAt(lookAtTarget);
    }
}
