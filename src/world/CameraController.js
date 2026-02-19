import * as THREE from 'three';
const CAMERA_CONFIG = {
    fov: 35,
    height: 38,
    distance: 28, // How far behind the car
    rotationSmoothing: 0.06, // How quickly camera swings behind car (lower = lazier)
    positionSmoothing: 0.1,
    lookAheadDistance: 6,
};
export class CameraController {
    camera;
    targetPos = new THREE.Vector3();
    cameraAngle = 0; // smoothed camera angle following van heading
    constructor() {
        this.camera = new THREE.PerspectiveCamera(CAMERA_CONFIG.fov, window.innerWidth / window.innerHeight, 5, 800);
    }
    follow(vanPos, velocity, heading) {
        // Smoothly rotate camera angle toward van heading
        // Normalize angle difference to -PI..PI
        let angleDiff = heading - this.cameraAngle;
        while (angleDiff > Math.PI)
            angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI)
            angleDiff += Math.PI * 2;
        this.cameraAngle += angleDiff * CAMERA_CONFIG.rotationSmoothing;
        // Camera sits BEHIND the van based on smoothed heading
        const behindX = Math.sin(this.cameraAngle) * -CAMERA_CONFIG.distance;
        const behindZ = -Math.cos(this.cameraAngle) * -CAMERA_CONFIG.distance;
        this.targetPos.set(vanPos.x + behindX, vanPos.y + CAMERA_CONFIG.height, vanPos.z + behindZ);
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
