const ALL_JOBS = [
    {
        id: 'job_01',
        type: 'commercial',
        zone: 'cbd',
        position: { x: 40, z: -40 },
        title: 'Marbellino Boardroom',
        client: 'Brad from Accounts',
        description: "Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",
        pay: 420_000,
        timeLimit: 0,
        travelTimeLimit: 120,
        triggerRadius: 18,
        crewNeeded: 2,
        completed: false,
    },
    {
        id: 'job_02',
        type: 'commercial',
        zone: 'footscray',
        position: { x: -120, z: 60 },
        title: 'Hemp Render — Big Kev\'s Shed',
        client: 'Big Kev',
        description: "Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",
        pay: 680_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 2,
        completed: false,
    },
    {
        id: 'job_03',
        type: 'residential',
        zone: 'brunswick',
        position: { x: -80, z: 80 },
        title: 'Antique Stucco Terrace',
        client: 'Matilda',
        description: "Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",
        pay: 550_000,
        timeLimit: 0,
        travelTimeLimit: 150,
        triggerRadius: 18,
        crewNeeded: 1,
        completed: false,
    },
    {
        id: 'job_04',
        type: 'heritage',
        zone: 'richmond',
        position: { x: 120, z: 40 },
        title: 'Antique Stucco Heritage Restore',
        client: 'The Council',
        description: "Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",
        pay: 800_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 3,
        completed: false,
    },
    {
        id: 'job_05',
        type: 'residential',
        zone: 'stkilda',
        position: { x: 40, z: -120 },
        title: 'Tadelakt Beachfront Bathroom',
        client: 'Chloe',
        description: "Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",
        pay: 610_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 1,
        completed: false,
    },
    {
        id: 'job_06',
        type: 'emergency',
        zone: 'cbd',
        position: { x: -40, z: 20 },
        title: '🚨 Emergency Antique Stucco Patch',
        client: 'Darren (Stressed)',
        description: "Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",
        pay: 950_000,
        timeLimit: 240,
        travelTimeLimit: 240,
        triggerRadius: 18,
        crewNeeded: 2,
        completed: false,
    },
    {
        id: 'job_07',
        type: 'residential',
        zone: 'brunswick',
        position: { x: -120, z: -80 },
        title: 'Hemp Render Repair — DIY Gone Wrong',
        client: 'Zephyr',
        description: "Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",
        pay: 390_000,
        timeLimit: 0,
        travelTimeLimit: 150,
        triggerRadius: 18,
        crewNeeded: 1,
        completed: false,
    },
    {
        id: 'job_08',
        type: 'commercial',
        zone: 'footscray',
        position: { x: -160, z: 20 },
        title: 'Rokka — Kebab Shop Reno',
        client: 'Mustafa',
        description: "Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",
        pay: 470_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 2,
        completed: false,
    },
    {
        id: 'job_09',
        type: 'heritage',
        zone: 'stkilda',
        position: { x: 80, z: -160 },
        title: 'Antique Stucco — Edwardian Cottage',
        client: 'Patricia',
        description: "Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",
        pay: 720_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 3,
        completed: false,
    },
    {
        id: 'job_10',
        type: 'residential',
        zone: 'richmond',
        position: { x: 160, z: -40 },
        title: 'Tadelino New Build',
        client: 'The Hendersons',
        description: "Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",
        pay: 580_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 1,
        completed: false,
    },
    {
        id: 'job_11',
        type: 'emergency',
        zone: 'brunswick',
        position: { x: -40, z: 120 },
        title: '🚨 Tadelakt Water Damage Repair',
        client: 'Gary',
        description: "Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",
        pay: 880_000,
        timeLimit: 300,
        travelTimeLimit: 300,
        triggerRadius: 18,
        crewNeeded: 2,
        completed: false,
    },
    {
        id: 'job_12',
        type: 'commercial',
        zone: 'stkilda',
        position: { x: -20, z: -160 },
        title: 'Rokka Feature Wall — Wine Bar',
        client: 'Alejandro',
        description: "Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",
        pay: 640_000,
        timeLimit: 0,
        travelTimeLimit: 180,
        triggerRadius: 18,
        crewNeeded: 2,
        completed: false,
    },
];
const ALL_CREW_NAMES = ['Jose', 'Jarrad', 'Matt', 'Phil', 'Tsuyoshi', 'Fabio'];
export class JobManager {
    /** Fixed workshop location — near spawn, TEM depot */
    static WORKSHOP_POS = { x: 10, z: 15 };
    jobs = ALL_JOBS.map(j => ({ ...j }));
    activeJob = null;
    activePhase = 1;
    completedJobIds = new Set();
    money = 500_000; // sats
    travelTimer = 0; // counts down while job is active
    travelFailed = false; // true if timer expired
    /** Which crew members need to be picked up for the current job */
    crewToPickup = [];
    /** Which crew members have been collected so far */
    crewPickedUp = [];
    getAvailableJobs() {
        return this.jobs.filter(j => !this.completedJobIds.has(j.id) && j !== this.activeJob);
    }
    acceptJob(job, crewOverride) {
        this.activeJob = job;
        this.activePhase = 1;
        this.crewToPickup = (crewOverride && crewOverride.length > 0)
            ? crewOverride
            : this._pickCrew(job.crewNeeded);
        this.crewPickedUp = [];
        this.startTravelTimer();
    }
    /** Pick N random crew from the 6, no duplicates */
    _pickCrew(n) {
        const shuffled = [...ALL_CREW_NAMES].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, Math.min(n, ALL_CREW_NAMES.length));
    }
    startTravelTimer() {
        if (this.activeJob) {
            this.travelTimer = this.activeJob.travelTimeLimit ?? 120;
            this.travelFailed = false;
        }
    }
    /**
     * Check if the van has arrived at the workshop (Phase 1 target).
     */
    checkPhase1Arrival(vanX, vanZ) {
        const dx = vanX - JobManager.WORKSHOP_POS.x;
        const dz = vanZ - JobManager.WORKSHOP_POS.z;
        return Math.sqrt(dx * dx + dz * dz) < 18;
    }
    /**
     * Transition from Phase 1 (workshop pickup) to Phase 2 (crew pickup).
     */
    advanceToPhase2() {
        this.activePhase = 2;
        this.startTravelTimer();
    }
    /**
     * Transition from Phase 2 (crew pickup) to Phase 3 (job site).
     */
    advanceToPhase3() {
        this.activePhase = 3;
        this.startTravelTimer();
    }
    /**
     * Try to pick up a crew member by name. Returns true if all required crew
     * are now collected.
     */
    pickupCrew(name) {
        if (!this.crewPickedUp.includes(name) && this.crewToPickup.includes(name)) {
            this.crewPickedUp.push(name);
        }
        return this.allCrewCollected();
    }
    /** Returns true when every required crew member has been picked up */
    allCrewCollected() {
        return this.crewToPickup.every(name => this.crewPickedUp.includes(name));
    }
    /** Returns the next crew member still needed (for waypoint targeting) */
    nextCrewNeeded() {
        for (const name of this.crewToPickup) {
            if (!this.crewPickedUp.includes(name))
                return name;
        }
        return null;
    }
    tickTravel(dt) {
        if (!this.activeJob || this.travelFailed)
            return null;
        this.travelTimer -= dt;
        if (this.travelTimer <= 0) {
            this.travelFailed = true;
            const penalty = 150_000;
            this.money = Math.max(0, this.money - penalty);
            this.activeJob = null;
            this.crewToPickup = [];
            this.crewPickedUp = [];
            return { failed: true, penalty };
        }
        return null;
    }
    /**
     * Check if the van has arrived at the job site.
     * Only triggers in Phase 3.
     */
    checkArrival(vanX, vanZ) {
        if (!this.activeJob || this.activePhase !== 3)
            return null;
        const dx = vanX - this.activeJob.position.x;
        const dz = vanZ - this.activeJob.position.z;
        if (Math.sqrt(dx * dx + dz * dz) < this.activeJob.triggerRadius) {
            return this.activeJob;
        }
        return null;
    }
    /**
     * Complete a job and apply payment.
     * qualityPct >= 0 → add earnings.
     * qualityPct <  0 → deduct penalty (e.g. -0.3 = lose 30% of job pay).
     * Money floor: 0 (can't go negative).
     */
    completeJob(job, qualityPct = 1.0) {
        const earned = Math.round(job.pay * qualityPct); // negative if penalty
        this.money = Math.max(0, this.money + earned);
        this.completedJobIds.add(job.id);
        this.activeJob = null;
        this.crewToPickup = [];
        this.crewPickedUp = [];
        return earned; // caller checks sign to determine penalty vs pay
    }
    /** Distance from van to the active job site (for Phase 3 HUD display). */
    distanceTo(vanX, vanZ) {
        if (!this.activeJob)
            return 0;
        const dx = vanX - this.activeJob.position.x;
        const dz = vanZ - this.activeJob.position.z;
        return Math.sqrt(dx * dx + dz * dz);
    }
    /** Distance from van to the workshop (for Phase 1 HUD display). */
    distanceToWorkshop(vanX, vanZ) {
        const dx = vanX - JobManager.WORKSHOP_POS.x;
        const dz = vanZ - JobManager.WORKSHOP_POS.z;
        return Math.sqrt(dx * dx + dz * dz);
    }
    /** Distance from van to a given world position */
    distanceToPoint(vanX, vanZ, px, pz) {
        const dx = vanX - px;
        const dz = vanZ - pz;
        return Math.sqrt(dx * dx + dz * dz);
    }
    // ── CONTRACT WARS — Contested Jobs ───────────────────────────────────────
    /**
     * Generate a one-off contested premium job (not in the fixed ALL_JOBS list).
     * Pay is 1.5× a random job's pay, prefixed with ⚔️, and isContested = true.
     */
    generateContestedJob() {
        const bases = this.getAvailableJobs();
        const base = bases.length > 0
            ? bases[Math.floor(Math.random() * bases.length)]
            : ALL_JOBS[Math.floor(Math.random() * ALL_JOBS.length)];
        const contested = {
            ...base,
            id: `contested_${Date.now()}_${Math.floor(Math.random() * 9999)}`,
            title: `⚔️ ${base.title}`,
            pay: Math.round(base.pay * 1.5),
            isContested: true,
            completed: false,
        };
        return contested;
    }
    /**
     * Returns the normal available jobs list, occasionally mixed with 1 contested job.
     * 20% chance of a contested job appearing on the board.
     */
    getContestedJobs() {
        const result = [];
        if (Math.random() < 0.20) {
            result.push(this.generateContestedJob());
        }
        return result;
    }
}
