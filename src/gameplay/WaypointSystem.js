import * as THREE from 'three';
export class WaypointSystem {
    marker;
    diamond;
    ring;
    routeLine = null;
    routeGeom = null;
    scene;
    time = 0;
    targetPos = null;
    // Brand red
    static MARKER_COLOR = 0xC1666B;
    // Floating height above ground
    static BASE_HEIGHT = 8;
    // Bob amplitude
    static BOB_AMP = 0.5;
    constructor(scene) {
        this.scene = scene;
        // ── Diamond marker group ──────────────────────────────────────────────────
        this.marker = new THREE.Group();
        // Octahedron scaled into a diamond (x,y,z scale → 1.2, 2.0, 1.2)
        const diamondGeo = new THREE.OctahedronGeometry(1, 0);
        const diamondMat = new THREE.MeshLambertMaterial({
            color: WaypointSystem.MARKER_COLOR,
            emissive: new THREE.Color(WaypointSystem.MARKER_COLOR),
            emissiveIntensity: 0.35,
        });
        this.diamond = new THREE.Mesh(diamondGeo, diamondMat);
        this.diamond.scale.set(1.2, 2.0, 1.2);
        this.diamond.castShadow = false;
        this.marker.add(this.diamond);
        // Pulsing flat ring below the diamond
        const ringGeo = new THREE.RingGeometry(0.5, 2.0, 32);
        const ringMat = new THREE.MeshBasicMaterial({
            color: WaypointSystem.MARKER_COLOR,
            transparent: true,
            opacity: 0.6,
            side: THREE.DoubleSide,
            depthWrite: false,
        });
        this.ring = new THREE.Mesh(ringGeo, ringMat);
        this.ring.rotation.x = -Math.PI / 2; // Lay flat
        this.ring.position.y = -WaypointSystem.BASE_HEIGHT + 0.3; // Near ground
        this.marker.add(this.ring);
        // Hide until a target is set
        this.marker.visible = false;
        this.scene.add(this.marker);
    }
    /**
     * Point the waypoint at a raw map position.
     * Pass null to hide the marker and clear the route line.
     */
    setTarget(pos) {
        this.targetPos = pos;
        // Remove old route line
        if (this.routeLine) {
            this.scene.remove(this.routeLine);
            this.routeLine.geometry.dispose();
            this.routeLine.material.dispose();
            this.routeLine = null;
            this.routeGeom = null;
        }
        if (pos === null) {
            this.marker.visible = false;
            return;
        }
        // Position marker at target
        this.marker.position.set(pos.x, WaypointSystem.BASE_HEIGHT, pos.z);
        this.marker.visible = true;
        // Create route line — two points: van (updated each frame) → target
        this.routeGeom = new THREE.BufferGeometry();
        const positions = new Float32Array(6); // 2 points × 3 coords
        // Both start at target; van end updated in update()
        positions[0] = pos.x;
        positions[1] = 0.05;
        positions[2] = pos.z;
        positions[3] = pos.x;
        positions[4] = 0.05;
        positions[5] = pos.z;
        this.routeGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const lineMat = new THREE.LineBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.75,
            depthTest: false,
        });
        this.routeLine = new THREE.Line(this.routeGeom, lineMat);
        this.routeLine.renderOrder = 999;
        this.scene.add(this.routeLine);
    }
    /**
     * Backwards-compatible helper: set the waypoint to a job's position.
     * Calls setTarget(job.position) or setTarget(null).
     */
    setJob(job) {
        this.setTarget(job?.position ?? null);
    }
    /** Returns the current target position so callers can save/restore it. */
    get currentTarget() {
        return this.targetPos ? { ...this.targetPos } : null;
    }
    update(dt, vanX, vanZ) {
        this.time += dt;
        if (!this.targetPos || !this.marker.visible)
            return;
        // ── Animate diamond: bob + slow Y-rotation ──────────────────────────────
        const bob = Math.sin(this.time * 2.2) * WaypointSystem.BOB_AMP;
        this.marker.position.y = WaypointSystem.BASE_HEIGHT + bob;
        this.diamond.rotation.y = this.time * 1.2;
        // ── Animate pulsing ring: scale grows from 0.5→2.5, opacity fades out ──
        const pulse = (this.time * 0.8) % 1.0; // 0..1 cycle ~1.25s
        const ringScale = 0.5 + pulse * 2.0;
        this.ring.scale.set(ringScale, ringScale, 1);
        const ringMat = this.ring.material;
        ringMat.opacity = (1.0 - pulse) * 0.6;
        // ── Update route line from van position to target ──────────────────────
        if (this.routeGeom) {
            const positions = this.routeGeom.attributes['position'];
            // Van end (index 0)
            positions.setXYZ(0, vanX, 0.05, vanZ);
            // Target end (index 1)
            positions.setXYZ(1, this.targetPos.x, 0.05, this.targetPos.z);
            positions.needsUpdate = true;
            this.routeGeom.computeBoundingSphere();
        }
    }
    dispose() {
        this.marker.visible = false;
        this.scene.remove(this.marker);
        // Dispose diamond
        this.diamond.geometry.dispose();
        this.diamond.material.dispose();
        // Dispose ring
        this.ring.geometry.dispose();
        this.ring.material.dispose();
        // Dispose route line
        if (this.routeLine) {
            this.scene.remove(this.routeLine);
            this.routeLine.geometry.dispose();
            this.routeLine.material.dispose();
            this.routeLine = null;
            this.routeGeom = null;
        }
    }
}
