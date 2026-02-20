import { Engine } from './core/Engine';
import { VanModel } from './vehicle/VanModel';
import { VanPhysics } from './vehicle/VanPhysics';
import { InputManager } from './core/InputManager';
import { SpillMeter } from './gameplay/SpillMeter';
async function main() {
    const engine = new Engine();
    await engine.init();
    const input = new InputManager();
    const van = new VanModel(engine.scene);
    const spillMeter = new SpillMeter();
    const physics = new VanPhysics(van, input, (intensity) => {
        spillMeter.triggerBump(intensity);
    });
    engine.onUpdate((dt) => {
        physics.update(dt);
        van.updateSuspension(dt);
        spillMeter.update(dt);
        engine.camera.follow(van.mesh.position, van.velocity, van.heading);
    });
    engine.start();
}
main();
