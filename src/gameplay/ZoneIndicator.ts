/**
 * ZoneIndicator — coloured ground circles that show interactive zones.
 * - Flat circle on the ground, slightly raised to avoid z-fighting
 * - Pulsing opacity so they catch the eye
 * - Van must be inside the radius AND near-stopped (speed < 3) to trigger
 */
import * as THREE from 'three';

export interface ZoneConfig {
  id: string;
  x: number;
  z: number;
  radius: number;
  color: number;
  label?: string;
  requireStop?: boolean; // default true
}

interface Zone {
  cfg: ZoneConfig;
  mesh: THREE.Mesh;
  labelMesh?: THREE.Mesh;
  active: boolean;
  triggered: boolean;
  onTrigger?: () => void;
}

export class ZoneIndicator {
  private scene: THREE.Scene;
  private zones: Zone[] = [];
  private time = 0;

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  /** Add a zone. Returns the zone id for later removal/retrieval. */
  add(cfg: ZoneConfig, onTrigger?: () => void): string {
    const geo = new THREE.CircleGeometry(cfg.radius, 48);
    const mat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.set(cfg.x, 0.08, cfg.z);
    mesh.renderOrder = 1;
    this.scene.add(mesh);

    // Outer ring (slightly larger, same colour, lower opacity)
    const ringGeo = new THREE.RingGeometry(cfg.radius * 0.88, cfg.radius, 48);
    const ringMat = new THREE.MeshBasicMaterial({
      color: cfg.color,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(cfg.x, 0.1, cfg.z);
    ring.renderOrder = 2;
    this.scene.add(ring);

    // Optional floating label
    let labelMesh: THREE.Mesh | undefined;
    if (cfg.label) {
      const cv = document.createElement('canvas');
      cv.width = 256; cv.height = 64;
      const ctx = cv.getContext('2d')!;
      ctx.clearRect(0, 0, 256, 64);
      ctx.fillStyle = `#${cfg.color.toString(16).padStart(6, '0')}CC`;
      if ((ctx as any).roundRect) { (ctx as any).roundRect(4, 4, 248, 56, 10); } else { ctx.rect(4, 4, 248, 56); }
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px system-ui, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(cfg.label, 128, 32);
      const tex = new THREE.CanvasTexture(cv);
      labelMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(cfg.radius * 2.2, cfg.radius * 0.7),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })
      );
      labelMesh.position.set(cfg.x, 1.4, cfg.z);
      labelMesh.renderOrder = 3;
      this.scene.add(labelMesh);
    }

    const zone: Zone = {
      cfg,
      mesh,
      labelMesh,
      active: true,
      triggered: false,
      onTrigger,
    };
    this.zones.push(zone);

    // Store ring ref for cleanup — attach to mesh userData
    mesh.userData.ring = ring;
    mesh.userData.ringMat = ringMat;

    return cfg.id;
  }

  /** Remove a zone by id */
  remove(id: string): void {
    const idx = this.zones.findIndex(z => z.cfg.id === id);
    if (idx === -1) return;
    const zone = this.zones[idx];
    this.scene.remove(zone.mesh);
    (zone.mesh.material as THREE.Material).dispose();
    zone.mesh.geometry.dispose();
    const ring = zone.mesh.userData.ring as THREE.Mesh | undefined;
    if (ring) {
      this.scene.remove(ring);
      (ring.material as THREE.Material).dispose();
      ring.geometry.dispose();
    }
    if (zone.labelMesh) {
      this.scene.remove(zone.labelMesh);
      (zone.labelMesh.material as THREE.MeshBasicMaterial).map?.dispose();
      (zone.labelMesh.material as THREE.Material).dispose();
      zone.labelMesh.geometry.dispose();
    }
    this.zones.splice(idx, 1);
  }

  /** Remove all zones */
  clear(): void {
    [...this.zones].forEach(z => this.remove(z.cfg.id));
  }

  /** Reset triggered state (e.g. for re-use) */
  reset(id: string): void {
    const z = this.zones.find(z => z.cfg.id === id);
    if (z) z.triggered = false;
  }

  /**
   * Call every frame.
   * vanX/Z: van position. vanSpeed: units/s.
   * Returns ids of zones triggered this frame.
   */
  update(dt: number, vanX: number, vanZ: number, vanSpeed: number): string[] {
    this.time += dt;
    const triggered: string[] = [];

    for (const zone of this.zones) {
      if (!zone.active || zone.triggered) continue;

      const dx = vanX - zone.cfg.x;
      const dz = vanZ - zone.cfg.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      const inside = dist < zone.cfg.radius;
      const stopped = vanSpeed < 3;
      const requireStop = zone.cfg.requireStop !== false;

      // Animate: pulse fill opacity, label faces camera
      const mat = zone.mesh.material as THREE.MeshBasicMaterial;
      const pulse = 0.32 + Math.abs(Math.sin(this.time * 2.5)) * 0.25;
      mat.opacity = inside ? pulse + 0.15 : pulse;

      const ring = zone.mesh.userData.ring as THREE.Mesh | undefined;
      if (ring) {
        const ringMat = zone.mesh.userData.ringMat as THREE.MeshBasicMaterial;
        ringMat.opacity = inside ? 1.0 : 0.85;
        // Scale ring slightly to show "you're inside"
        const s = inside ? 1.0 + Math.sin(this.time * 4) * 0.04 : 1.0;
        ring.scale.setScalar(s);
      }

      // Label always faces camera (billboard) — rotate on Y only
      if (zone.labelMesh) {
        zone.labelMesh.position.y = 1.4 + Math.sin(this.time * 2) * 0.12;
        // Billboard: handled by camera look — just keep upright
        zone.labelMesh.rotation.y = this.time * 0.4;
      }

      // Trigger condition
      if (inside && (!requireStop || stopped)) {
        zone.triggered = true;
        triggered.push(zone.cfg.id);
        zone.onTrigger?.();
      }
    }

    return triggered;
  }

  dispose(): void {
    this.clear();
  }
}

// ── Colour palette for zones ─────────────────────────────────────────────────
export const ZONE_COLORS = {
  // Destinations / job sites
  jobSite:   0x22DD44, // bright green
  workshop:  0xFF8800, // orange — TEM brand
  coffee:    0xD4622A, // coffee brown
  toilet:    0x2196F3, // blue
  // Crew — matches shirt colours from CREW_CONFIGS
  Matt:      0x111111, // black shirt → use accent
  Jose:      0x111111,
  Jarrad:    0x222230,
  Phil:      0x3A5080, // blue pants
  Tsuyoshi:  0x111111,
  Fabio:     0x1B7EC4, // blue shirt
  Joe:       0xF0C000, // hi-vis yellow
  Mikayla:   0x992244, // hair colour (shirt too plain)
  Connie:    0xF5D060, // blonde
} as const;
