import * as THREE from 'three';
import { CameraController } from '../world/CameraController';

export class Engine {
  renderer!: THREE.WebGLRenderer;
  scene!: THREE.Scene;
  camera!: CameraController;
  private updateCallbacks: Array<(dt: number) => void> = [];
  private lastTime = 0;

  async init() {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: false });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = false; // Performance: no shadows
    document.body.appendChild(this.renderer.domElement);

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
    this.scene.fog = new THREE.Fog(0x87CEEB, 200, 500);

    // Camera
    this.camera = new CameraController();
    this.scene.add(this.camera.camera);

    // Lighting - flat-shaded look, no shadows
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambient);
    const sun = new THREE.DirectionalLight(0xfff4e0, 1.2);
    sun.position.set(50, 80, 50);
    this.scene.add(sun);

    // Ground plane (basic, will be replaced by chunks)
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(2048, 2048),
      new THREE.MeshLambertMaterial({ color: 0x4a7c4e }) // Green grass placeholder
    );
    ground.rotation.x = -Math.PI / 2;
    this.scene.add(ground);

    // Road grid (simple placeholder)
    this.createRoadGrid();

    // Handle resize
    window.addEventListener('resize', () => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      this.camera.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.camera.updateProjectionMatrix();
    });
  }

  private createRoadGrid() {
    // Simple placeholder road grid - grey squares
    const roadMat = new THREE.MeshLambertMaterial({ color: 0x555555 });
    for (let x = -200; x <= 200; x += 40) {
      const h = new THREE.Mesh(new THREE.PlaneGeometry(8, 400), roadMat);
      h.rotation.x = -Math.PI / 2;
      h.position.set(x, 0.01, 0);
      this.scene.add(h);
    }
    for (let z = -200; z <= 200; z += 40) {
      const v = new THREE.Mesh(new THREE.PlaneGeometry(400, 8), roadMat);
      v.rotation.x = -Math.PI / 2;
      v.position.set(0, 0.01, z);
      this.scene.add(v);
    }

    // Some placeholder buildings (boxes)
    const buildingMat = new THREE.MeshLambertMaterial({ color: 0xd4c4a8 });
    for (let x = -180; x <= 180; x += 40) {
      for (let z = -180; z <= 180; z += 40) {
        if (Math.abs(x % 40) < 20 || Math.abs(z % 40) < 20) continue;
        const h = 5 + Math.random() * 20;
        const building = new THREE.Mesh(
          new THREE.BoxGeometry(12 + Math.random() * 8, h, 12 + Math.random() * 8),
          buildingMat
        );
        building.position.set(x + (Math.random() - 0.5) * 10, h / 2, z + (Math.random() - 0.5) * 10);
        this.scene.add(building);
      }
    }
  }

  onUpdate(cb: (dt: number) => void) {
    this.updateCallbacks.push(cb);
  }

  start() {
    const loop = (time: number) => {
      const dt = Math.min((time - this.lastTime) / 1000, 0.05); // Cap at 50ms
      this.lastTime = time;
      for (const cb of this.updateCallbacks) cb(dt);
      this.renderer.render(this.scene, this.camera.camera);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }
}
