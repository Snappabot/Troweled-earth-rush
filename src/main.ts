import { Engine } from './core/Engine';
import { VanModel } from './vehicle/VanModel';
import { VanPhysics } from './vehicle/VanPhysics';
import { InputManager } from './core/InputManager';
import { SpillMeter } from './gameplay/SpillMeter';
import { ObstacleSystem } from './entities/Obstacles';

async function main() {
  const engine = new Engine();
  await engine.init();

  const input = new InputManager();
  const van = new VanModel(engine.scene);
  const spillMeter = new SpillMeter();
  const obstacles = new ObstacleSystem(engine.scene);

  const physics = new VanPhysics(van, input, (intensity: number) => {
    spillMeter.triggerBump(intensity);
  });

  engine.onUpdate((dt: number) => {
    physics.update(dt);
    van.updateSuspension(dt);
    spillMeter.update(dt);
    obstacles.checkVanCollision(van.mesh.position.x, van.mesh.position.z);
    engine.camera.follow(van.mesh.position, van.velocity, van.heading);
  });

  engine.start();
}

main();
