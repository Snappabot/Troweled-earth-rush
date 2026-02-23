/**
 * TEM Rush — Slogans, loading tips & flavour text
 *
 * Three pools:
 *  BRAND_SLOGANS  — straight-faced TEM brand voice (loading screen, dialogue footers)
 *  GAME_TIPS      — GTA-style loading tips, deadpan game advice
 *  JOB_OPENERS    — one-liner tagline prepended to mission briefings
 */

export const BRAND_SLOGANS: string[] = [
  // From TEM brand concepts
  "Our finishes don't copy the earth.\nThey breathe it.",
  "Our surfaces don't mimic stone.\nThey become it.",
  "Our renders don't imitate time.\nThey carry it.",
  "Our finishes don't fake patina.\nThey earn it.",
  "Our textures don't pretend wilderness.\nThey invite it in.",
  "Our coatings don't replicate nature.\nThey speak its language.",
  "Our renders don't echo the land.\nThey belong to it.",
  "Our surfaces don't borrow beauty.\nThey grow it.",
  "Our finishes don't chase authenticity.\nThey live it.",
  "Our textures don't follow nature.\nThey walk beside it.",
  // New originals — same tone
  "Our plaster doesn't cover walls.\nIt tells their story.",
  "The trowel doesn't rush.\nNeither do we.",
  "One wall. One coat. One very long explanation to the client.\nWe do this every day.",
  "From blank concrete to the red glow of Kimberley stone.\nThrough craft. Through patience. Through Connie.",
  "A city of walls waiting to become something.\nWe're on our way.",
];

export const GAME_TIPS: string[] = [
  // Driving
  "DRIVING TIP: The spill meter doesn't care about your excuses. Neither does the road.",
  "DRIVING TIP: Traffic in Melbourne has never once moved for a plastering van. You are not the exception.",
  "DRIVING TIP: Hitting a car at speed is, technically, texture development. We do not recommend it.",
  "DRIVING TIP: The crew will comment on your driving. They are not wrong.",
  "DRIVING TIP: Every bump is just the plaster finding its character. That's what you're telling yourself.",
  // Crew
  "CREW TIP: Tsuyoshi once vaulted into a moving van. He's done it again. You weren't watching.",
  "CREW TIP: Phil will finish his tea before he gets in. Always. Plan for this.",
  "CREW TIP: Jose was ready before you left the workshop. He's been ready since Tuesday.",
  "CREW TIP: Jarrad has been standing there fifteen minutes. He will mention it.",
  "CREW TIP: Fabio is smiling. He's also judging your gearwork. Smile back.",
  // Clients
  "CLIENT TIP: Brad has never been to Europe. The wall will be 'very European' regardless.",
  "CLIENT TIP: Darren is stressed. Darren is always stressed. The wall is fine. Darren is not.",
  "CLIENT TIP: Patricia has read the full TDS. She's highlighted it. She will quiz you.",
  "CLIENT TIP: Zephyr tried to do it himself. You're not here to judge. You are here to fix it.",
  "CLIENT TIP: Mustafa's health inspector doesn't ask questions. You shouldn't either.",
  // Bladder
  "HEALTH TIP: Coffee steadies the trowel. What it does to the bladder is your problem.",
  "HEALTH TIP: The toilet block is 100 metres east of the intersection. You know this now.",
  "HEALTH TIP: Hydration is important. Timing is more important.",
  "HEALTH TIP: The barista knows your order. So does your bladder.",
  // Business
  "BUSINESS TIP: TEM has been in business since before your GPS was a thing. Follow the waypoint anyway.",
  "BUSINESS TIP: Quality render takes time. So does finding parking. Plan accordingly.",
  "BUSINESS TIP: A finish that breathes with the wall is worth more than one that cracks by Thursday. Ask Zephyr.",
  "BUSINESS TIP: Authenticity cannot be rushed. Darren is rushing you. Do your best.",
  // Miscellaneous
  "The road to perfection runs through three crew pickups, a coffee stop, and a very urgent toilet.",
  "Connie has seen everything. She is still laughing.",
  "The van has been in worse situations. The plaster has not.",
  "This city has 240 square units of roads and exactly one decent flat white. Find it.",
  "The walls remember every hand that shaped them.\nThe van remembers nothing. Drive carefully.",
];

export const JOB_OPENERS: string[] = [
  "One wall. One chance. The render decides everything.",
  "A surface waiting to become something real.",
  "From bare substrate to finished art — this is the job.",
  "The craft doesn't care about the deadline.\nYou do. Get there.",
  "Clients don't buy plaster. They buy the moment the wall changes everything.",
  "Not every wall gets a second coat.\nThis one does. Make it count.",
  "The difference between ordinary and extraordinary is one hand-applied layer.",
  "Somewhere between the bucket and the wall, something real happens.",
  "They called TEM because they want it done right.\nDon't prove them wrong.",
  "This isn't a wall. It's a surface waiting to breathe.",
];

/** Pick a random item from any slogan pool. */
export function randomFrom(pool: string[]): string {
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Rotate through a pool index (for sequential cycling). */
export function cycleFrom(pool: string[], index: number): string {
  return pool[index % pool.length];
}
