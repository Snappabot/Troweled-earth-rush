import { Engine } from './core/Engine';
import { VanModel } from './vehicle/VanModel';
import { VanPhysics } from './vehicle/VanPhysics';
import { InputManager } from './core/InputManager';
import { SpillMeter } from './gameplay/SpillMeter';
import { JobManager } from './gameplay/JobManager';
import { WaypointSystem } from './gameplay/WaypointSystem';
import { JobBoard } from './ui/JobBoard';
import { HUD } from './ui/HUD';

async function main() {
  const engine = new Engine();
  await engine.init();

  const input = new InputManager();
  const van = new VanModel(engine.scene);
  const spillMeter = new SpillMeter();
  const hud = new HUD();

  const physics = new VanPhysics(van, input, (intensity: number) => {
    spillMeter.triggerBump(intensity);
  });

  // ── Job system ──────────────────────────────────────────────────────────────
  const jobManager = new JobManager();
  const waypointSystem = new WaypointSystem(engine.scene);

  const jobBoard = new JobBoard((job) => {
    jobManager.acceptJob(job);
    waypointSystem.setJob(job);
    jobBoard.hide();
    hud.setActiveJob(job);
  });

  // ── JOBS button — bottom-right, unobtrusive ─────────────────────────────────
  const jobsBtn = document.createElement('button');
  jobsBtn.textContent = '📋 JOBS';
  jobsBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(193, 102, 107, 0.9);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    font-family: system-ui, sans-serif;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    letter-spacing: 0.5px;
    min-height: 48px;
    transition: background 0.15s, transform 0.1s;
    touch-action: manipulation;
  `;
  jobsBtn.addEventListener('pointerenter', () => {
    jobsBtn.style.background = 'rgba(212, 120, 125, 0.95)';
    jobsBtn.style.transform = 'translateY(-2px)';
  });
  jobsBtn.addEventListener('pointerleave', () => {
    jobsBtn.style.background = 'rgba(193, 102, 107, 0.9)';
    jobsBtn.style.transform = '';
  });
  jobsBtn.addEventListener('click', () => {
    if (jobBoard.isVisible()) {
      jobBoard.hide();
    } else {
      jobBoard.show(jobManager.getAvailableJobs());
    }
  });
  document.body.appendChild(jobsBtn);

  // Guard to prevent job completion firing more than once per arrival
  let jobCompleting = false;

  // ── Update loop ─────────────────────────────────────────────────────────────
  engine.onUpdate((dt: number) => {
    physics.update(dt);
    van.updateSuspension(dt);
    spillMeter.update(dt);

    const vanX = van.mesh.position.x;
    const vanZ = van.mesh.position.z;

    waypointSystem.update(dt, vanX, vanZ);

    // Update job distance in HUD
    if (jobManager.activeJob !== null) {
      const dist = jobManager.distanceTo(vanX, vanZ);
      hud.updateJobDistance(dist);
    }

    // Check job arrival
    if (!jobCompleting) {
      const arrived = jobManager.checkArrival(vanX, vanZ);
      if (arrived !== null) {
        jobCompleting = true;
        const earned = jobManager.completeJob(arrived, 1.0);
        waypointSystem.setJob(null);
        hud.showJobComplete(arrived.title, earned);
        hud.setActiveJob(null);
        hud.updateMoney(jobManager.money);

        // Show job board 3 seconds after completing
        setTimeout(() => {
          jobCompleting = false;
          const available = jobManager.getAvailableJobs();
          if (available.length > 0) {
            jobBoard.show(available);
          }
        }, 3000);
      }
    }

    engine.camera.follow(van.mesh.position, van.velocity, van.heading);
    hud.update(physics.speed, spillMeter.level);
  });

  // Show job board on first load so player can pick a job immediately
  setTimeout(() => {
    jobBoard.show(jobManager.getAvailableJobs());
  }, 1000);

  engine.start();
}

main();
