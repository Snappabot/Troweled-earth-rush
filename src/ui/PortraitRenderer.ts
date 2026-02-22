import * as THREE from 'three';
import { CrewCharacter, CrewConfig } from '../entities/CrewCharacter';

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
    this.renderer.setClearColor(0x000000, 0); // transparent bg

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

    // Camera aimed at upper body — slightly 3/4 angle for character
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    this.camera.position.set(1.2, 5.0, 5.5);
    this.camera.lookAt(0.1, 3.8, 0);
  }

  /** Returns a data URL portrait for the given config, cached. */
  renderPortrait(config: CrewConfig): string {
    if (this.cache.has(config.name)) return this.cache.get(config.name)!;

    // Remove any previous character (keep lights)
    const toRemove = this.scene.children.filter(
      c => !(c instanceof THREE.Light)
    );
    toRemove.forEach(c => this.scene.remove(c));

    const character = new CrewCharacter(config);
    character.group.scale.set(2, 2, 2);
    // Slight 3/4 turn
    character.group.rotation.y = -Math.PI * 0.18;
    this.scene.add(character.group);

    this.renderer.render(this.scene, this.camera);
    const dataUrl = this.canvas.toDataURL('image/png');
    this.cache.set(config.name, dataUrl);

    // Clean up this character's geometry (portrait is cached now)
    this.scene.remove(character.group);

    return dataUrl;
  }

  dispose(): void {
    this.renderer.dispose();
  }
}
