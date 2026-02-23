/** Troweled Earth — The Anthem. Shared across intro, start menu and radio. */

export interface AnthemVerse {
  character: string | null; // null = chorus/bridge
  label: string;
  lines: string[];
  color: string;
}

export const ANTHEM: AnthemVerse[] = [
  {
    character: 'Jose',
    label: 'JOSE GARCIA',
    color: '#8B6A3A',
    lines: [
      'Jose Garcia — the Spaniard cloaked in shadows, grim veil',
      'An artist of chaos where darkness and dreams prevail',
      'With brutal hands he sculpts the earth\'s unyielding core',
      'His trowel, a weapon — top class, none can ignore',
      'From blood red clay to concrete\'s cold, unfeeling embrace',
      'He molds the void to find foundations of time',
    ],
  },
  {
    character: null,
    label: 'CHORUS',
    color: '#C8A86A',
    lines: [
      'Troweled Earth — where shadows fall',
      'Unyielding — it calls to all',
      'This spirit\'s rise beneath the skies',
      'The spark of architects\' darkest dreams',
    ],
  },
  {
    character: 'Matt',
    label: 'MATT',
    color: '#C1666B',
    lines: [
      'Matt, the warlord — fire raging deep in his veins',
      'Charismatic, don\'t matter, wielding hearts in unyielding chains',
      'From Marbellino\'s wrath to metallic\'s cold, cruel, clean',
      'His energy — tempest, relentless, untamed and wild',
      'Unyielding strokes cut deep and true',
      'His trowel carved dark — Troweled Earth\'s anchor bold',
    ],
  },
  {
    character: 'Tsuyoshi',
    label: 'TSUYOSHI',
    color: '#4A8A6A',
    lines: [
      'A samurai — perfect engineer',
      'Crafts Tadelakt with a blade\'s cold glare',
      'Positions master, slicing through despair',
      'The future\'s written in shadows he\'s claimed as his own',
    ],
  },
  {
    character: 'Connie',
    label: 'CONNIE',
    color: '#E8A050',
    lines: [
      'Connie — tight on wheels, a trowel school might',
      'Turning more queen, driving through the night',
    ],
  },
  {
    character: 'Jarrad',
    label: 'JARRAD',
    color: '#8080C0',
    lines: [
      'Jarrad — iron-forged, a time built in flame',
      'His strength runs deep, no force can break or tame',
      'He etches the earth with hands of steel',
      'His honour worn in fire',
    ],
  },
  {
    character: 'Fabio',
    label: 'FABIO',
    color: '#D4602A',
    lines: [
      'Like fire among the wise — "you have no power here, Gandalf the Grey"',
      'Conjuring dark nights, his lore makes the unwilling pay',
    ],
  },
  {
    character: null,
    label: 'BRIDGE — MELBOURNE',
    color: '#8B9EC8',
    lines: [
      'St Kilda confined — Fitzroy, raw forms rise',
      'No facade — let the heavy stone speak',
      'Trowel the fruit of beauty, cold and true',
      'Polish scars are steel in all grids and grooves',
      'Good dreams forged in the fire of steel',
      'Tadelakt stone lit sheen — custom strokes, no polish',
      'Just the fight in every scene',
    ],
  },
  {
    character: null,
    label: 'FINAL CHORUS',
    color: '#C8A86A',
    lines: [
      'Melbourne\'s concrete sonnet — unyielding, profound',
      'Trowel dust builds the goal on hallowed ground',
      'Troweled Earth — we shatter the stone',
      'Crafting brutal spaces — this is home',
    ],
  },
];

/** All lines flat, for scrolling display */
export const ANTHEM_ALL_LINES: string[] = ANTHEM.flatMap(v => v.lines);
