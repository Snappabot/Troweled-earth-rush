// ── Crew Perks — Jose is the mascot, others support him ─────────────────────

export interface CrewPerk {
  id: string;
  name: string;
  title: string;
  color: string;        // card accent / border color
  skinTone: string;     // avatar skin
  hairColor: string;    // avatar hair
  locked: boolean;      // Jose = always locked in
  passive: { name: string; desc: string };
  active:  { name: string; desc: string };
  perkTag: string;      // 1-liner shown on card

  // ── Runtime modifiers applied when this crew member is active ──────────────
  payMult:       number;   // job payout multiplier (1.0 = no change)
  speedMult:     number;   // van speed multiplier
  spillGuard:    number;   // spill meter drain reduction 0–1
  breakImmune:   boolean;  // immune to random break interrupts
  btcBoost:      number;   // sat→BTC conversion bonus multiplier
  timerBonus:    number;   // extra seconds added to job timer
}

export const CREW_ROSTER: CrewPerk[] = [
  {
    id: 'jose',
    name: 'Jose',
    title: 'Wall Jesus 🙏',
    color: '#E8A830',
    skinTone: '#C8856A',
    hairColor: '#1e0d00',
    locked: true,
    passive: { name: 'Touch of God',    desc: 'Wall jobs pay +15%. Spill meter drains 20% slower.' },
    active:  { name: 'Wall Jesus Mode', desc: 'Instant wall prep — skip the prep phase on any job.' },
    perkTag: 'Always in. He IS the mission.',
    payMult: 1.15, speedMult: 1.0, spillGuard: 0.20,
    breakImmune: false, btcBoost: 1.0, timerBonus: 0,
  },
  {
    id: 'matt',
    name: 'Matt',
    title: 'Diplomatt 💼',
    color: '#4A90D9',
    skinTone: '#E8C0A0',
    hairColor: '#5a3010',
    locked: false,
    passive: { name: 'The Pitch',     desc: 'Unlocks premium jobs. +10% base pay on all work.' },
    active:  { name: 'Renegotiate',   desc: 'Push for up to 30% bonus payout mid-job.' },
    perkTag: '+10% pay. He talks money.',
    payMult: 1.10, speedMult: 1.0, spillGuard: 0.0,
    breakImmune: false, btcBoost: 1.0, timerBonus: 0,
  },
  {
    id: 'tsuyoshi',
    name: 'Tsuyoshi',
    title: 'Mohawk Rush ⚡',
    color: '#FF4444',
    skinTone: '#F0D4B0',
    hairColor: '#080808',
    locked: false,
    passive: { name: 'Defect Detect', desc: 'Spots hidden defects — prevents penalty deductions.' },
    active:  { name: 'RUSH MODE',     desc: 'Van speed +30% for 20 seconds. ANYTIME.' },
    perkTag: '+30% van speed. Does not stop.',
    payMult: 1.0, speedMult: 1.30, spillGuard: 0.0,
    breakImmune: false, btcBoost: 1.0, timerBonus: 5,
  },
  {
    id: 'jarrad',
    name: 'Jarrad',
    title: 'Plan/No Plan 🎲',
    color: '#9B59B6',
    skinTone: '#E0B090',
    hairColor: '#1a1208',
    locked: false,
    passive: { name: 'Coin Flip',     desc: '50/50: reveals best job OR chaos job with 2× payout.' },
    active:  { name: 'Blueprint',     desc: 'Pause mid-job. Get +15 seconds back on the clock.' },
    perkTag: 'High risk. High reward.',
    payMult: 1.0, speedMult: 1.0, spillGuard: 0.0,
    breakImmune: false, btcBoost: 1.0, timerBonus: 15,
  },
  {
    id: 'fabio',
    name: 'Fabio',
    title: 'Andiamo! 🍕',
    color: '#27AE60',
    skinTone: '#D4A070',
    hairColor: '#1a0e00',
    locked: false,
    passive: { name: 'Pressure Play', desc: 'Speed +20% when job timer drops below 30 seconds.' },
    active:  { name: 'Pizza Break',   desc: 'Full bladder reset + +10 seconds added to timer.' },
    perkTag: 'Clutch. Best under pressure.',
    payMult: 1.0, speedMult: 1.20, spillGuard: 0.0,
    breakImmune: false, btcBoost: 1.0, timerBonus: 10,
  },
  {
    id: 'phil',
    name: 'Phil',
    title: 'The Veteran 🧱',
    color: '#7F8C8D',
    skinTone: '#D8B89A',
    hairColor: '#C8C8C4',
    locked: false,
    passive: { name: 'Seen It All',   desc: 'Immune to random break interrupts. No forced stops.' },
    active:  { name: 'Fill Me Crack', desc: 'Auto-completes prep stage on any job. Instant.' },
    perkTag: 'No interruptions. Pure focus.',
    payMult: 1.0, speedMult: 1.0, spillGuard: 0.15,
    breakImmune: true, btcBoost: 1.0, timerBonus: 0,
  },
  {
    id: 'joe',
    name: 'Joe',
    title: 'Knows Too Much 👁️',
    color: '#E67E22',
    skinTone: '#EED8C0',
    hairColor: '#3a2510',
    locked: false,
    passive: { name: 'Intel Drop',    desc: 'Random secret high-pay jobs appear only with Joe.' },
    active:  { name: 'Off the Books', desc: 'Next job\'s full payout goes direct to BTC. No cut.' },
    perkTag: 'Off the books. Sats to stack.',
    payMult: 1.0, speedMult: 1.0, spillGuard: 0.0,
    breakImmune: false, btcBoost: 1.25, timerBonus: 0,
  },
  {
    id: 'connie',
    name: 'Connie',
    title: 'German Efficiency 🔩',
    color: '#E74C3C',
    skinTone: '#F0C8A0',
    hairColor: '#E8D080',
    locked: false,
    passive: { name: 'Zero Tolerance', desc: 'Failed job penalties cut by 50%. She handles it.' },
    active:  { name: 'Drill Sergeant', desc: 'Whole crew works 40% faster for one full job.' },
    perkTag: 'Penalty shield. She will not let you fail.',
    payMult: 1.0, speedMult: 1.0, spillGuard: 0.10,
    breakImmune: false, btcBoost: 1.0, timerBonus: 0,
  },
  {
    id: 'mikayla',
    name: 'Mikayla',
    title: 'Books Full 📞',
    color: '#1ABC9C',
    skinTone: '#FDDBB4',
    hairColor: '#8B4513',
    locked: false,
    passive: { name: 'Full Board',    desc: 'Always 3+ jobs on the board. She keeps it stacked.' },
    active:  { name: 'Priority Book', desc: 'Summons a premium job to your nearest location.' },
    perkTag: 'More jobs. More sats. Always.',
    payMult: 1.05, speedMult: 1.0, spillGuard: 0.0,
    breakImmune: false, btcBoost: 1.0, timerBonus: 0,
  },
];

// ── Active Crew State ─────────────────────────────────────────────────────────
let _activeCrew: string[] = ['jose'];

export function setActiveCrew(ids: string[]): void {
  _activeCrew = ['jose', ...ids.filter(id => id !== 'jose')];
}

export function getActiveCrew(): string[] { return _activeCrew; }

export function crewHas(id: string): boolean { return _activeCrew.includes(id); }

export function getCrewMember(id: string): CrewPerk | undefined {
  return CREW_ROSTER.find(c => c.id === id);
}

/** Combined pay multiplier from all active crew */
export function crewPayMult(): number {
  return _activeCrew.reduce((acc, id) => {
    const c = getCrewMember(id);
    return c ? acc * c.payMult : acc;
  }, 1.0);
}

/** Combined speed multiplier from all active crew */
export function crewSpeedMult(): number {
  return _activeCrew.reduce((max, id) => {
    const c = getCrewMember(id);
    return c ? Math.max(max, c.speedMult) : max;
  }, 1.0);
}

/** Combined spill guard (additive, capped at 0.5) */
export function crewSpillGuard(): number {
  const total = _activeCrew.reduce((acc, id) => {
    const c = getCrewMember(id);
    return c ? acc + c.spillGuard : acc;
  }, 0);
  return Math.min(total, 0.5);
}

/** True if any crew member is break-immune (Phil) */
export function crewBreakImmune(): boolean {
  return _activeCrew.some(id => getCrewMember(id)?.breakImmune);
}

/** Combined BTC boost multiplier */
export function crewBtcBoost(): number {
  return _activeCrew.reduce((acc, id) => {
    const c = getCrewMember(id);
    return c ? acc * c.btcBoost : acc;
  }, 1.0);
}

/** Total timer bonus seconds from crew */
export function crewTimerBonus(): number {
  return _activeCrew.reduce((acc, id) => {
    const c = getCrewMember(id);
    return c ? acc + c.timerBonus : acc;
  }, 0);
}
