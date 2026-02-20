import * as THREE from 'three';
import type { Job } from './JobManager';

export class WaypointSystem {
  private marker: THREE.Group;
  private diamond: THREE.Mesh;
  private ring: THREE.Mesh;
  private routeLine: THREE.Line | null = null;
  private routeGeom: THREE.BufferGeometry | null = null;
  private scene: THREE.Scene;
  private time = 0;
  private activeJob: Job | null = null;

  // Brand red
  private static readonly MARKER_COLOR = 0xC1666B;
  // Floating height above ground
  private static readonly BASE_HEIGHT = 8;
  // Bob amplitude
  private static readonly BOB_AMP = 0.5;

  constructor(scene: THREE.Scene) {
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

    // Hide until a job is active
    this.marker.visible = false;
    this.scene.add(this.marker);
  }

  setJob(job: Job | null): void {
    this.activeJob = job;

    // Remove old route line
    if (this.routeLine) {
      this.scene.remove(this.routeLine);
      this.routeLine.geometry.dispose();
      (this.routeLine.material as THREE.Material).dispose();
      this.routeLine = null;
      this.routeGeom = null;
    }

    if (job === null) {
      this.marker.visible = false;
      return;
    }

    // Position marker at job site
    this.marker.position.set(job.position.x, WaypointSystem.BASE_HEIGHT, job.position.z);
    this.marker.visible = true;

    // Create route line — two points: van (updated each frame) → job
    this.routeGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(6); // 2 points × 3 coords
    // Start and end both at job for now; updated in update()
    positions[0] = job.position.x;
    positions[1] = 0.05;
    positions[2] = job.position.z;
    positions[3] = job.position.x;
    positions[4] = 0.05;
    positions[5] = job.position.z;
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

  update(dt: number, vanX: number, vanZ: number): void {
    this.time += dt;

    if (!this.activeJob || !this.marker.visible) return;

    // ── Animate diamond: bob + slow Y-rotation ──────────────────────────────
    const bob = Math.sin(this.time * 2.2) * WaypointSystem.BOB_AMP;
    this.marker.position.y = WaypointSystem.BASE_HEIGHT + bob;
    this.diamond.rotation.y = this.time * 1.2;

    // ── Animate pulsing ring: scale grows from 0.5→2.5, opacity fades out ──
    const pulse = (this.time * 0.8) % 1.0; // 0..1 cycle ~1.25s
    const ringScale = 0.5 + pulse * 2.0;
    this.ring.scale.set(ringScale, ringScale, 1);
    const ringMat = this.ring.material as THREE.MeshBasicMaterial;
    ringMat.opacity = (1.0 - pulse) * 0.6;

    // ── Update route line from van position to job ──────────────────────────
    if (this.routeGeom) {
      const positions = this.routeGeom.attributes['position'] as THREE.BufferAttribute;
      // Van end (index 0)
      positions.setXYZ(0, vanX, 0.05, vanZ);
      // Job end (index 1)
      positions.setXYZ(1, this.activeJob.position.x, 0.05, this.activeJob.position.z);
      positions.needsUpdate = true;
      this.routeGeom.computeBoundingSphere();
    }
  }

  dispose(): void {
    this.marker.visible = false;
    this.scene.remove(this.marker);

    // Dispose diamond
    this.diamond.geometry.dispose();
    (this.diamond.material as THREE.Material).dispose();

    // Dispose ring
    this.ring.geometry.dispose();
    (this.ring.material as THREE.Material).dispose();

    // Dispose route line
    if (this.routeLine) {
      this.scene.remove(this.routeLine);
      this.routeLine.geometry.dispose();
      (this.routeLine.material as THREE.Material).dispose();
      this.routeLine = null;
      this.routeGeom = null;
    }
  }
}
