/** Centralised audio URL constants — resolved against Vite BASE_URL */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BASE = import.meta.env?.BASE_URL || '/';
export const AUDIO = {
    theme: `${BASE}audio/theme.m4a`, // 3.2-min theme song (m4a = best browser compat)
    theme2: `${BASE}audio/theme2.aac`, // TEM Talk podcast
    credits: `${BASE}audio/credits.m4a`,
    radio1: `${BASE}audio/radio1.m4a`,
    radio2: `${BASE}audio/radio2.m4a`,
    radio3: `${BASE}audio/radio3.m4a`,
};
