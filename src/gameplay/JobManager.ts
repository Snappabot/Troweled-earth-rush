export type JobType = 'residential' | 'commercial' | 'heritage' | 'emergency';
export type Zone = 'cbd' | 'footscray' | 'brunswick' | 'richmond' | 'stkilda';

export interface Job {
  id: string;
  type: JobType;
  zone: Zone;
  position: { x: number; z: number };
  title: string;
  client: string;
  description: string;
  pay: number;
  timeLimit: number;       // seconds (0 = no limit)
  triggerRadius: number;   // distance to trigger job completion
  completed: boolean;
}

const ALL_JOBS: Job[] = [
  {
    id: 'job_01',
    type: 'commercial',
    zone: 'cbd',
    position: { x: 40, z: -40 },
    title: 'Office Render Touch-Up',
    client: 'Brad from Accounts',
    description: "Brad wants the boardroom feature wall to look expensive. It doesn't.",
    pay: 420_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_02',
    type: 'commercial',
    zone: 'footscray',
    position: { x: -120, z: 60 },
    title: 'Warehouse Render',
    client: 'Big Kev',
    description: "Big Kev's got a massive shed. Bigger than he let on over the phone.",
    pay: 680_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_03',
    type: 'residential',
    zone: 'brunswick',
    position: { x: -80, z: 80 },
    title: 'Terrace Renovation',
    client: 'Matilda',
    description: "Matilda's doing a reno and needs three rooms done by Thursday. It's Wednesday.",
    pay: 550_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_04',
    type: 'heritage',
    zone: 'richmond',
    position: { x: 120, z: 40 },
    title: 'Heritage Restoration',
    client: 'The Council',
    description: "Council heritage job. Nobody told you about the asbestos audit. Nobody.",
    pay: 800_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_05',
    type: 'residential',
    zone: 'stkilda',
    position: { x: 40, z: -120 },
    title: 'Beachfront Apartment',
    client: 'Chloe',
    description: "Chloe wants 'something textured but also smooth'. Good luck with that, mate.",
    pay: 610_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_06',
    type: 'emergency',
    zone: 'cbd',
    position: { x: -40, z: 20 },
    title: 'Emergency Patch Job',
    client: 'Darren (Stressed)',
    description: "Darren's got an open home in 4 hours and a hole in his feature wall. Actual hole.",
    pay: 950_000,
    timeLimit: 240,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_07',
    type: 'residential',
    zone: 'brunswick',
    position: { x: -120, z: -80 },
    title: 'Mudbrick Repair',
    client: 'Zephyr',
    description: "Zephyr built a mudbrick wall himself. He was not qualified to do that.",
    pay: 390_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_08',
    type: 'commercial',
    zone: 'footscray',
    position: { x: -160, z: 20 },
    title: 'Kebab Shop Freshen-Up',
    client: 'Mustafa',
    description: "Mustafa wants the walls done before the health inspector returns. No questions.",
    pay: 470_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_09',
    type: 'heritage',
    zone: 'stkilda',
    position: { x: 80, z: -160 },
    title: 'Edwardian Cottage Reno',
    client: 'Patricia',
    description: "Patricia insists on lime render only. She's printed 11 pages of Wikipedia to prove it.",
    pay: 720_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_10',
    type: 'residential',
    zone: 'richmond',
    position: { x: 160, z: -40 },
    title: 'New Build Render',
    client: 'The Hendersons',
    description: "The Hendersons want it done before Christmas. You ask which Christmas.",
    pay: 580_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_11',
    type: 'emergency',
    zone: 'brunswick',
    position: { x: -40, z: 120 },
    title: 'Water Damage Repair',
    client: 'Gary',
    description: "Gary's upstairs neighbor left the bath running. Gary is not speaking to upstairs.",
    pay: 880_000,
    timeLimit: 300,
    triggerRadius: 12,
    completed: false,
  },
  {
    id: 'job_12',
    type: 'commercial',
    zone: 'stkilda',
    position: { x: -20, z: -160 },
    title: 'Wine Bar Feature Wall',
    description: "The owner wants 'industrial rustic chic'. You write down 'grey with bumps'.",
    client: 'Alejandro',
    pay: 640_000,
    timeLimit: 0,
    triggerRadius: 12,
    completed: false,
  },
];

export class JobManager {
  private jobs: Job[] = ALL_JOBS.map(j => ({ ...j }));
  activeJob: Job | null = null;
  completedJobIds: Set<string> = new Set();
  money: number = 500_000;  // sats

  getAvailableJobs(): Job[] {
    return this.jobs.filter(
      j => !this.completedJobIds.has(j.id) && j !== this.activeJob
    );
  }

  acceptJob(job: Job): void {
    this.activeJob = job;
  }

  checkArrival(vanX: number, vanZ: number): Job | null {
    if (!this.activeJob) return null;
    const dx = vanX - this.activeJob.position.x;
    const dz = vanZ - this.activeJob.position.z;
    if (Math.sqrt(dx * dx + dz * dz) < this.activeJob.triggerRadius) {
      return this.activeJob;
    }
    return null;
  }

  completeJob(job: Job, qualityPct: number = 1.0): number {
    const earned = Math.round(job.pay * qualityPct);
    this.money += earned;
    this.completedJobIds.add(job.id);
    this.activeJob = null;
    return earned;
  }

  distanceTo(vanX: number, vanZ: number): number {
    if (!this.activeJob) return 0;
    const dx = vanX - this.activeJob.position.x;
    const dz = vanZ - this.activeJob.position.z;
    return Math.sqrt(dx * dx + dz * dz);
  }
}
