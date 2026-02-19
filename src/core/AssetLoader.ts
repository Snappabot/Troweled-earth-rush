import * as THREE from 'three';

export class AssetLoader {
  static async loadGLTF(_path: string): Promise<THREE.Group> {
    // Will use THREE.GLTFLoader in Phase 1
    return new THREE.Group();
  }
}
