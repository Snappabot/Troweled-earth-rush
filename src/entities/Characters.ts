import * as THREE from 'three';
import { CrewCharacter, CREW_CONFIGS } from './CrewCharacter';

const CREW_CITY_POSITIONS: Record<string, { x: number; z: number }> = {
  Jose:     { x: -80,  z: -40 },
  Jarrad:   { x:  40,  z: -80 },
  Matt:     { x:  80,  z:  40 },
  Phil:     { x: -40,  z:  80 },
  Tsuyoshi: { x: 120,  z: -40 },
  Fabio:    { x: -120, z:  40 },
  Joe:      { x:   0,  z: -120 },
};

export class Characters {
  private scene: THREE.Scene;
  private crewMap: Map<string, { character: CrewCharacter; wrapper: THREE.Group; pos: { x: number; z: number } }> = new Map();

  constructor(scene: THREE.Scene) {
    this.scene = scene;
  }

  spawnCrewAtCityPositions(): void {
    for (const [name, pos] of Object.entries(CREW_CITY_POSITIONS)) {
      const config = CREW_CONFIGS[name];
      if (!config) continue;

      const character = new CrewCharacter(config);
      character.group.scale.set(2, 2, 2);

      const wrapper = new THREE.Group();
      wrapper.add(character.group);

      // Yellow ring beneath
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.2, 1.6, 32),
        new THREE.MeshBasicMaterial({ color: 0xFFCC00, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.05;
      wrapper.add(ring);

      // Name billboard
      const cv = document.createElement('canvas'); cv.width = 256; cv.height = 64;
      const ctx = cv.getContext('2d')!;
      ctx.fillStyle = 'rgba(0,0,0,0.75)';
      if ((ctx as any).roundRect) { (ctx as any).roundRect(2, 2, 252, 60, 8); } else { ctx.rect(2,2,252,60); }
      ctx.fill();
      ctx.fillStyle = '#fff'; ctx.font = 'bold 30px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(name.toUpperCase(), 128, 32);
      const nameBoard = new THREE.Mesh(
        new THREE.PlaneGeometry(2.2, 0.55),
        new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(cv), transparent: true, depthWrite: false })
      );
      nameBoard.position.set(0, 8.5, 0);
      nameBoard.renderOrder = 1;
      wrapper.add(nameBoard);

      wrapper.position.set(pos.x, 0, pos.z);
      this.scene.add(wrapper);
      this.crewMap.set(name, { character, wrapper, pos });
    }
  }

  updateAll(dt: number): void {
    for (const { character } of this.crewMap.values()) character.update(dt);
  }

  hideCrew(name: string): void {
    const e = this.crewMap.get(name); if (e) e.wrapper.visible = false;
  }

  showAllCrew(): void {
    for (const { wrapper } of this.crewMap.values()) wrapper.visible = true;
  }

  showCrew(name: string): void {
    const e = this.crewMap.get(name); if (e) e.wrapper.visible = true;
  }

  getCrewPosition(name: string): { x: number; z: number } {
    return this.crewMap.get(name)?.pos ?? { x: 0, z: 0 };
  }

  dispose(): void {
    for (const { wrapper } of this.crewMap.values()) this.scene.remove(wrapper);
    this.crewMap.clear();
  }
}
