import { Engine } from './core/Engine';
import { Characters } from './entities/Characters';
import { VanModel } from './vehicle/VanModel';
import { VanPhysics } from './vehicle/VanPhysics';
import { InputManager } from './core/InputManager';
import { SpillMeter } from './gameplay/SpillMeter';
import { JobManager } from './gameplay/JobManager';
import { WaypointSystem } from './gameplay/WaypointSystem';
import { JobBoard } from './ui/JobBoard';
import { HUD } from './ui/HUD';
import { MiniGameManager } from './minigames/MiniGameManager';
async function main() {
    const engine = new Engine();
    await engine.init();
    // ── Spawn the crew at the depot (Footscray, near start) ────────────────────
    const characters = new Characters(engine.scene);
    characters.spawnCrew(10, -6); // Standing on concrete apron in front of roller door
    const input = new InputManager();
    const van = new VanModel(engine.scene);
    const spillMeter = new SpillMeter();
    const hud = new HUD();
    const physics = new VanPhysics(van, input, (intensity) => {
        spillMeter.triggerBump(intensity);
    });
    // ── Job system ──────────────────────────────────────────────────────────────
    const jobManager = new JobManager();
    const waypointSystem = new WaypointSystem(engine.scene);
    const jobBoard = new JobBoard((job) => {
        // Phase 1 starts: accept the job, point waypoint at the workshop
        jobManager.acceptJob(job);
        waypointSystem.setTarget(JobManager.WORKSHOP_POS);
        jobBoard.hide();
        hud.setActiveJob(job, 1);
    });
    // ── Spill penalty callback ───────────────────────────────────────────────────
    spillMeter.onSpill = (penalty) => {
        jobManager.money = Math.max(0, jobManager.money - penalty);
        hud.updateMoney(jobManager.money);
        hud.showSpillPenalty(penalty);
    };
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
        }
        else {
            jobBoard.show(jobManager.getAvailableJobs());
        }
    });
    document.body.appendChild(jobsBtn);
    // Mini-game manager — overlays the world for plastering mini-games
    const miniGameManager = new MiniGameManager();
    // Guard to prevent job completion firing more than once per arrival
    let jobCompleting = false;
    // ── Update loop ─────────────────────────────────────────────────────────────
    engine.onUpdate((dt) => {
        physics.update(dt);
        van.updateSuspension(dt);
        spillMeter.update(dt);
        const vanX = van.mesh.position.x;
        const vanZ = van.mesh.position.z;
        waypointSystem.update(dt, vanX, vanZ);
        // ── Travel timer ──────────────────────────────────────────────────────────
        if (jobManager.activeJob) {
            const result = jobManager.tickTravel(dt);
            hud.updateTravelTimer(jobManager.travelTimer);
            if (result?.failed) {
                waypointSystem.setTarget(null);
                hud.updateTravelTimer(null);
                hud.showTimerFail(150_000);
                hud.setActiveJob(null, 1);
                hud.updateMoney(jobManager.money);
                // Re-show job board after 3.5 seconds
                setTimeout(() => jobBoard.show(jobManager.getAvailableJobs()), 3500);
            }
        }
        else {
            hud.updateTravelTimer(null);
        }
        // ── HUD distance update (phase-aware) ─────────────────────────────────────
        if (jobManager.activeJob !== null) {
            if (jobManager.activePhase === 1) {
                hud.updateJobDistance(jobManager.distanceToWorkshop(vanX, vanZ));
            }
            else {
                hud.updateJobDistance(jobManager.distanceTo(vanX, vanZ));
            }
        }
        // ── Phase 1: workshop arrival ─────────────────────────────────────────────
        if (jobManager.activeJob && jobManager.activePhase === 1 && !jobCompleting) {
            if (jobManager.checkPhase1Arrival(vanX, vanZ)) {
                jobCompleting = true;
                jobManager.advanceToPhase2();
                // Redirect waypoint to the job site
                waypointSystem.setTarget(jobManager.activeJob.position);
                // Update HUD to Phase 2
                hud.showPhase1Complete();
                hud.setActiveJob(jobManager.activeJob, 2);
                setTimeout(() => { jobCompleting = false; }, 2000);
            }
        }
        // ── Phase 2: job site arrival → troweling mini-game ───────────────────────
        if (jobManager.activeJob &&
            jobManager.activePhase === 2 &&
            !jobCompleting &&
            !miniGameManager.isActive()) {
            const arrived = jobManager.checkArrival(vanX, vanZ);
            if (arrived !== null) {
                jobCompleting = true;
                waypointSystem.setTarget(null);
                hud.setActiveJob(null, 2);
                // Launch the troweling mini-game
                miniGameManager.startTroweling((result) => {
                    const earned = jobManager.completeJob(arrived, result.qualityPct);
                    hud.showJobComplete(arrived.title, earned);
                    hud.updateMoney(jobManager.money);
                    jobCompleting = false;
                    // Show job board 3.5 seconds after result (gives flash overlay time to clear)
                    setTimeout(() => {
                        const available = jobManager.getAvailableJobs();
                        if (available.length > 0) {
                            jobBoard.show(available);
                        }
                    }, 3500);
                });
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
