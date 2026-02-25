/** Centralised audio URL constants — resolved against Vite BASE_URL */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BASE: string = ((import.meta as any).env?.BASE_URL as string) || '/';

export const AUDIO = {
  theme:   `${BASE}audio/theme.aac`,    // menu/intro theme song
  theme2:  `${BASE}audio/theme2.aac`,   // TEM Talk podcast
  credits: `${BASE}audio/credits.m4a`,  // closing credits track
  radio1:  `${BASE}audio/radio1.m4a`,
  radio2:  `${BASE}audio/radio2.m4a`,
  radio3:  `${BASE}audio/radio3.m4a`,
  radio4:  `${BASE}audio/theme.m4a`,    // The Scaffold station
  radio5:  `${BASE}audio/radio5.m4a`,   // Jose's Mix station
  radio6:  `${BASE}audio/radio6.aac`,   // Warlord Sessions station
  radio7:  `${BASE}audio/radio7.aac`,   // Tsuyoshi FM station
  radio8:  `${BASE}audio/radio8.m4a`,   // Jarrad's station
  connie:   `${BASE}audio/connie.aac`,   // Connie's Gold station
  scaffold: `${BASE}audio/scaffold.m4a`, // The Scaffold station
} as const;
