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
];

/** Return a random rival crew from the roster */
export function getRandomRival(): RivalCrew {
  return RIVAL_CREWS[Math.floor(Math.random() * RIVAL_CREWS.length)];
}
