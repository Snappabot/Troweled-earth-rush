// ── RivalCrews — AI rival plastering crews for CONTRACT WARS ────────────────

export type RivalHairStyle =
  | 'short'
  | 'afro'
  | 'buzz'
  | 'long'
  | 'bald'
  | 'slicked'
  | 'bun'
  | 'ponytail'
  | 'slick';

export interface RivalMember {
  name: string;
  skinTone: string;
  hairColor: string;
  hairStyle: RivalHairStyle;
  accentColor: string;
}

export interface RivalCrew {
  id: string;
  name: string;
  tagline: string;
  color: string;          // hex accent colour
  difficulty: number;     // 0.0 – 1.0
  speed: number;          // how fast rival fills progress bar 0.0 – 1.0
  members: RivalMember[];
}

export const RIVAL_CREWS: RivalCrew[] = [
  {
    id: 'perth_plasterers',
    name: 'Perth Plasterers',
    tagline: 'They drove 3000km just to lose.',
    color: '#FF4444',
    difficulty: 0.45,
    speed: 0.55,
    members: [
      { name: 'Barry',  skinTone: '#D4B090', hairColor: '#444444', hairStyle: 'buzz',  accentColor: '#FF4444' },
      { name: 'Dazza',  skinTone: '#E8C8A0', hairColor: '#8B4513', hairStyle: 'short', accentColor: '#FF4444' },
      { name: 'Shazza', skinTone: '#FDDBB4', hairColor: '#C4832A', hairStyle: 'long',  accentColor: '#FF4444' },
    ],
  },
  {
    id: 'sydney_stucco',
    name: 'Sydney Stucco',
    tagline: 'Fancy tools, slow hands.',
    color: '#4488FF',
    difficulty: 0.60,
    speed: 0.65,
    members: [
      { name: 'Blake',   skinTone: '#E0B090', hairColor: '#1a0e00', hairStyle: 'slicked',  accentColor: '#4488FF' },
      { name: 'Jaxon',   skinTone: '#D4A070', hairColor: '#2a1800', hairStyle: 'bun',      accentColor: '#4488FF' },
      { name: 'Tiffany', skinTone: '#F5DEB3', hairColor: '#C8A060', hairStyle: 'ponytail', accentColor: '#4488FF' },
    ],
  },
  {
    id: 'brisbane_brushmen',
    name: 'Brisbane Brushmen',
    tagline: 'Rough as guts, twice as slow.',
    color: '#FF8C00',
    difficulty: 0.35,
    speed: 0.42,
    members: [
      { name: 'Cobber', skinTone: '#D4A060', hairColor: '#888888', hairStyle: 'bald',  accentColor: '#FF8C00' },
      { name: 'Mozzie', skinTone: '#C89050', hairColor: '#2a1000', hairStyle: 'afro',  accentColor: '#FF8C00' },
      { name: 'Bazza',  skinTone: '#E0C090', hairColor: '#5a3010', hairStyle: 'short', accentColor: '#FF8C00' },
    ],
  },
  {
    id: 'melbourne_mafia',
    name: 'Melbourne Mafia',
    tagline: 'They know this city. So does Jose.',
    color: '#9B59B6',
    difficulty: 0.80,
    speed: 0.82,
    members: [
      { name: 'Dante',  skinTone: '#B07040', hairColor: '#1a0e00', hairStyle: 'slick', accentColor: '#9B59B6' },
      { name: 'Viktor', skinTone: '#C08060', hairColor: '#333333', hairStyle: 'buzz',  accentColor: '#9B59B6' },
      { name: 'Rosa',   skinTone: '#E8C0A0', hairColor: '#4a2010', hairStyle: 'long',  accentColor: '#9B59B6' },
    ],
  },
  {
    id: 'adelaide_arches',
    name: 'Adelaide Arches',
    tagline: 'Church Hall heroes. Still lost.',
    color: '#E74C3C',
    difficulty: 0.55,
    speed: 0.58,
    members: [
      { name: 'Murray', skinTone: '#D4A878', hairColor: '#5a3010', hairStyle: 'short',  accentColor: '#E74C3C' },
      { name: 'Cheryl', skinTone: '#F0D0A8', hairColor: '#C87040', hairStyle: 'bun',    accentColor: '#E74C3C' },
      { name: 'Wazza',  skinTone: '#C89060', hairColor: '#222222', hairStyle: 'buzz',   accentColor: '#E74C3C' },
    ],
  },
  {
    id: 'gold_coast_grinders',
    name: 'Gold Coast Grinders',
    tagline: 'All tan, no technique.',
    color: '#F1C40F',
    difficulty: 0.50,
    speed: 0.52,
    members: [
      { name: 'Bryce',  skinTone: '#E8C090', hairColor: '#D4A840', hairStyle: 'slicked', accentColor: '#F1C40F' },
      { name: 'Kylie',  skinTone: '#F5D8B0', hairColor: '#E0B040', hairStyle: 'long',    accentColor: '#F1C40F' },
      { name: 'Damo',   skinTone: '#D09060', hairColor: '#6a4020', hairStyle: 'short',   accentColor: '#F1C40F' },
    ],
  },
  {
    id: 'tazzy_devils',
    name: 'Tazzy Devils',
    tagline: 'Remote. Feral. Surprisingly fast.',
    color: '#1ABC9C',
    difficulty: 0.70,
    speed: 0.75,
    members: [
      { name: 'Reg',    skinTone: '#C88858', hairColor: '#333333', hairStyle: 'bald',    accentColor: '#1ABC9C' },
      { name: 'Shelby', skinTone: '#E0B888', hairColor: '#8B4513', hairStyle: 'ponytail',accentColor: '#1ABC9C' },
      { name: 'Dozer',  skinTone: '#B87848', hairColor: '#1a0e00', hairStyle: 'afro',    accentColor: '#1ABC9C' },
    ],
  },
];

/** Return a random rival crew from the roster */
export function getRandomRival(): RivalCrew {
  return RIVAL_CREWS[Math.floor(Math.random() * RIVAL_CREWS.length)];
}
