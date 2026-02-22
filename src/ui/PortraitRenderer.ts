import * as THREE from 'three';
import { CrewCharacter, CrewConfig } from '../entities/CrewCharacter';

/** Special per-character portrait config (scale, extra geometry) */
interface PortraitOverrides {
  scale?: [number, number, number];
  addGeometry?: (group: THREE.Group) => void;
}

const PORTRAIT_OVERRIDES: Record<string, PortraitOverrides> = {
  Connie: {
    scale: [2.0, 2.35, 2.0],
    addGeometry: (group) => {
      // Add bust geometry matching Connie.ts — on the front (+z) of the torso
      // In group local space: torso spine at y≈1.55, front of chest at z≈+0.19
      const bustMat = new THREE.MeshLambertMaterial({ color: 0xF0EDE8 });
      const bustL = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), bustMat);
      bustL.position.set(-0.12, 1.55, 0.19);
      const bustR = new THREE.Mesh(new THREE.SphereGeometry(0.16, 8, 6), bustMat);
      bustR.position.set( 0.12, 1.55, 0.19);
      group.add(bustL);
      group.add(bustR);
    },
  },
  Mikayla: {
    scale: [1.9, 1.9, 1.9],
  },
};

/**
 * Off-screen WebGL renderer that produces character portrait images.
 * Portraits are cached by character name.
 */
export class PortraitRenderer {
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private canvas: HTMLCanvasElement;
  private cache: Map<string, string> = new Map();

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.width = 160;
    this.canvas.height = 160;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
      preserveDrawingBuffer: true,
    });
    this.renderer.setSize(160, 160);
    this.renderer.setClearColor(0x000000, 0);

    this.scene = new THREE.Scene();

    // Warm front light + soft fill
    const ambient = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambient);

    const key = new THREE.DirectionalLight(0xfff5e0, 1.0);
    key.position.set(2, 4, 5);
    this.scene.add(key);

    const fill = new THREE.DirectionalLight(0xe0f0ff, 0.4);
    fill.position.set(-3, 2, 3);
    this.scene.add(fill);

    // Camera aimed at upper body — slightly 3/4 angle
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.camera.position.set(1.2, 5.0, 5.5);
    this.camera.lookAt(0.1, 3.8, 0);
  }

  /** Returns a data URL portrait for the given config, cached. */
  renderPortrait(config: CrewConfig): string {
    if (this.cache.has(config.name)) return this.cache.get(config.name)!;

    // Remove any previous character (keep lights)
    const toRemove = this.scene.children.filter(c => !(c instanceof THREE.Light));
    toRemove.forEach(c => this.scene.remove(c));

    const overrides = PORTRAIT_OVERRIDES[config.name];
    const character = new CrewCharacter(config);

    // Apply scale — use per-character override or default 2×
    const [sx, sy, sz] = overrides?.scale ?? [2, 2, 2];
    character.group.scale.set(sx, sy, sz);

    // Slight 3/4 turn so face is visible
    character.group.rotation.y = -Math.PI * 0.18;

    // Add any extra geometry (bust, etc.)
    overrides?.addGeometry?.(character.group);

    this.scene.add(character.group);
    this.renderer.render(this.scene, this.camera);
    const dataUrl = this.canvas.toDataURL('image/png');
    this.cache.set(config.name, dataUrl);

    this.scene.remove(character.group);
    return dataUrl;
  }

  dispose(): void {
    this.renderer.dispose();
  }
}
