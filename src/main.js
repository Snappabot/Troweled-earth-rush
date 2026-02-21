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
import { AchievementGallery } from './ui/AchievementGallery';
import { TrafficSystem } from './entities/TrafficSystem';
import { PedestrianSystem } from './entities/PedestrianSystem';
async function main() {
    const engine = new Engine();
    await engine.init();
    // ── Spawn crew scattered across the city ───────────────────────────────────
    const characters = new Characters(engine.scene);
    characters.spawnCrewAtCityPositions();
    const input = new InputManager();
    const van = new VanModel(engine.scene);
    const spillMeter = new SpillMeter();
    const hud = new HUD();
    const physics = new VanPhysics(van, input, (intensity) => {
        spillMeter.triggerBump(intensity);
    }, engine.collisionWorld);
    // ── Job system ──────────────────────────────────────────────────────────────
    const jobManager = new JobManager();
    const waypointSystem = new WaypointSystem(engine.scene);
    const jobBoard = new JobBoard((job) => {
        // Phase 1 starts: accept the job, point waypoint at the workshop
        jobManager.acceptJob(job);
        waypointSystem.setTarget(JobManager.WORKSHOP_POS);
        jobBoard.hide();
        hud.setActiveJob(job, 1);
        hud.updateCrewStatus([], [], false);
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
    // ── Traffic + Pedestrian systems ────────────────────────────────────────────
    const traffic = new TrafficSystem(engine.scene);
    const pedestrians = new PedestrianSystem(engine.scene);
    // Mini-game manager — overlays the world for plastering mini-games
    const miniGameManager = new MiniGameManager();
    // ── 📸 Photos button + Achievement Gallery ───────────────────────────────────
    const achievementGallery = new AchievementGallery();
    const photosBtn = document.createElement('button');
    photosBtn.textContent = '📸';
    photosBtn.title = 'Photo Collection';
    photosBtn.style.cssText = `
    position: fixed; bottom: 20px; left: 20px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `;
    photosBtn.addEventListener('pointerenter', () => {
        photosBtn.style.background = 'rgba(100,100,100,0.95)';
        photosBtn.style.transform = 'scale(1.1)';
    });
    photosBtn.addEventListener('pointerleave', () => {
        photosBtn.style.background = 'rgba(70,70,70,0.9)';
        photosBtn.style.transform = '';
    });
    photosBtn.addEventListener('click', () => achievementGallery.show());
    document.body.appendChild(photosBtn);
    // Guard to prevent job completion firing more than once per arrival
    let jobCompleting = false;
    // ── Debug panel (small, top-left) ──────────────────────────────────────────
    const dbg = document.createElement('div');
    dbg.style.cssText = `
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `;
    document.body.appendChild(dbg);
    // ── Update loop ─────────────────────────────────────────────────────────────
    engine.onUpdate((dt) => {
        physics.update(dt);
        van.updateSuspension(dt);
        spillMeter.update(dt);
        const vanX = van.mesh.position.x;
        const vanZ = van.mesh.position.z;
        traffic.update(dt, vanX, vanZ);
        pedestrians.update(dt, vanX, vanZ);
        // Traffic collision — AABB resolve (ejects van from car immediately)
        const trafficResolved = traffic.resolveVan(vanX, vanZ);
        if (trafficResolved.hit) {
            van.mesh.position.x = trafficResolved.x;
            van.mesh.position.z = trafficResolved.z;
            physics.applyImpulse(0, 0); // scrub speed only
        }
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
                hud.updateCrewStatus([], [], false);
                // Restore all crew after failed job
                characters.showAllCrew();
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
            else if (jobManager.activePhase === 2) {
                // Distance to next crew member needed
                const nextCrew = jobManager.nextCrewNeeded();
                if (nextCrew) {
                    const crewPos = characters.getCrewPosition(nextCrew);
                    hud.updateJobDistance(jobManager.distanceToPoint(vanX, vanZ, crewPos.x, crewPos.z));
                }
            }
            else {
                // Phase 3: distance to job site
                hud.updateJobDistance(jobManager.distanceTo(vanX, vanZ));
            }
        }
        // ── Phase 1: workshop arrival ─────────────────────────────────────────────
        if (jobManager.activeJob && jobManager.activePhase === 1 && !jobCompleting) {
            if (jobManager.checkPhase1Arrival(vanX, vanZ)) {
                jobCompleting = true;
                jobManager.advanceToPhase2();
                // Point waypoint at first required crew member
                const firstCrew = jobManager.nextCrewNeeded();
                if (firstCrew) {
                    const crewPos = characters.getCrewPosition(firstCrew);
                    waypointSystem.setTarget(crewPos);
                }
                hud.showPhase1Complete();
                hud.setActiveJob(jobManager.activeJob, 2);
                hud.updateCrewStatus(jobManager.crewToPickup, jobManager.crewPickedUp, true);
                setTimeout(() => { jobCompleting = false; }, 2000);
            }
        }
        // ── Phase 2: crew pickup ──────────────────────────────────────────────────
        if (jobManager.activeJob && jobManager.activePhase === 2 && !jobCompleting) {
            for (const name of jobManager.crewToPickup) {
                if (jobManager.crewPickedUp.includes(name))
                    continue;
                const crewPos = characters.getCrewPosition(name);
                const dist = jobManager.distanceToPoint(vanX, vanZ, crewPos.x, crewPos.z);
                if (dist < 10) {
                    // Pick up this crew member
                    jobCompleting = true;
                    characters.hideCrew(name);
                    const allCollected = jobManager.pickupCrew(name);
                    // Update crew status in HUD
                    hud.updateCrewStatus(jobManager.crewToPickup, jobManager.crewPickedUp, true);
                    if (allCollected) {
                        // All crew collected → advance to Phase 3
                        jobManager.advanceToPhase3();
                        waypointSystem.setTarget(jobManager.activeJob.position);
                        hud.showCrewPickup(name, null);
                        hud.setActiveJob(jobManager.activeJob, 3);
                    }
                    else {
                        // Point waypoint at next crew member
                        const nextCrew = jobManager.nextCrewNeeded();
                        if (nextCrew) {
                            const nextPos = characters.getCrewPosition(nextCrew);
                            waypointSystem.setTarget(nextPos);
                            hud.showCrewPickup(name, nextCrew);
                        }
                    }
                    setTimeout(() => { jobCompleting = false; }, 1500);
                    break; // Only pick up one per frame
                }
            }
        }
        // ── Phase 3: job site arrival → troweling mini-game ───────────────────────
        if (jobManager.activeJob &&
            jobManager.activePhase === 3 &&
            !jobCompleting &&
            !miniGameManager.isActive()) {
            const arrived = jobManager.checkArrival(vanX, vanZ);
            if (arrived !== null) {
                jobCompleting = true;
                waypointSystem.setTarget(null);
                hud.setActiveJob(null, 3);
                hud.updateCrewStatus([], [], false);
                // Launch the troweling mini-game
                miniGameManager.startRandom((result) => {
                    const earned = jobManager.completeJob(arrived, result.qualityPct);
                    hud.showJobComplete(arrived.title, earned);
                    hud.updateMoney(jobManager.money);
                    // Restore all crew to their city positions for next job
                    characters.showAllCrew();
                    jobCompleting = false;
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
        // Debug panel
        const job = jobManager.activeJob;
        const phase = job ? `P${jobManager.activePhase}` : 'idle';
        const dist = job
            ? (jobManager.activePhase === 1
                ? Math.round(jobManager.distanceToWorkshop(vanX, vanZ))
                : jobManager.activePhase === 2
                    ? Math.round(jobManager.distanceToPoint(vanX, vanZ, ...(() => {
                        const nc = jobManager.nextCrewNeeded();
                        if (!nc)
                            return [vanX, vanZ];
                        const p = characters.getCrewPosition(nc);
                        return [p.x, p.z];
                    })()))
                    : Math.round(jobManager.distanceTo(vanX, vanZ)))
            : 0;
        const crew = job ? `crew:${jobManager.crewPickedUp.length}/${jobManager.crewToPickup.length}` : '';
        dbg.textContent = `${phase} | dist:${dist} | ${crew} | lock:${jobCompleting} | mg:${miniGameManager.isActive()}`;
    });
    // Show job board on first load so player can pick a job immediately
    setTimeout(() => {
        jobBoard.show(jobManager.getAvailableJobs());
    }, 1000);
    engine.start();
}
main();
