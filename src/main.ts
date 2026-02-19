import { Engine } from './core/Engine';
import { VanModel } from './vehicle/VanModel';
import { VanPhysics } from './vehicle/VanPhysics';
import { InputManager } from './core/InputManager';

async function main() {
  const engine = new Engine();
  await engine.init();

  const input = new InputManager();
  const van = new VanModel(engine.scene);
  const physics = new VanPhysics(van, input);

  engine.onUpdate((dt: number) => {
    physics.update(dt);
    engine.camera.follow(van.mesh.position, van.velocity, van.heading);
  });

  engine.start();
}

main();
