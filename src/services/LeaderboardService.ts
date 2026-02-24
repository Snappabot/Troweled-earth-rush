// ── Leaderboard Service ───────────────────────────────────────────────────────
// Async score submission + fetching via Supabase REST API.
// Falls back to localStorage when no backend is configured.
// Configure by setting VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY in .env

const SUPABASE_URL  = import.meta.env.VITE_SUPABASE_URL  as string | undefined;
const SUPABASE_KEY  = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const TABLE         = 'tem_scores';
const LOCAL_KEY     = 'tem-leaderboard-v1';
const MAX_LOCAL     = 100;

export interface ScoreEntry {
  id?:                string;
  player_name:        string;
  job_title:          string;
  crew_ids:           string[];
  completion_time_s:  number;
  payout:             number;
  created_at?:        string;
}

const hasBackend = () => !!(SUPABASE_URL && SUPABASE_KEY);

// ── Submit a score ─────────────────────────────────────────────────────────────
export async function submitScore(entry: Omit<ScoreEntry, 'id' | 'created_at'>): Promise<void> {
  // Always save locally first
  _saveLocal(entry);

  if (!hasBackend()) return;

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY!,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify(entry),
    });
  } catch (e) {
    console.warn('[Leaderboard] submit failed (offline?)', e);
  }
}

// ── Fetch top scores for a job ─────────────────────────────────────────────────
export async function getLeaderboard(jobTitle: string, limit = 5): Promise<ScoreEntry[]> {
  if (hasBackend()) {
    try {
      const clean = encodeURIComponent(jobTitle.replace(/^⚔️\s*/, '').trim());
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/${TABLE}?job_title=ilike.*${clean}*&order=completion_time_s.asc&limit=${limit}`,
        {
          headers: {
            'apikey': SUPABASE_KEY!,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
          },
        },
      );
      if (res.ok) {
        const data: ScoreEntry[] = await res.json();
        if (data.length > 0) return data;
      }
    } catch (e) {
      console.warn('[Leaderboard] fetch failed (offline?)', e);
    }
  }

  // Fallback: local scores for this job
  return _getLocal()
    .filter(s => s.job_title.toLowerCase().includes(jobTitle.replace(/^⚔️\s*/, '').trim().toLowerCase()))
    .sort((a, b) => a.completion_time_s - b.completion_time_s)
    .slice(0, limit);
}

// ── Fetch global top scores (all jobs) ────────────────────────────────────────
export async function getGlobalLeaderboard(limit = 10): Promise<ScoreEntry[]> {
  if (hasBackend()) {
    try {
      const res = await fetch(
        `${SUPABASE_URL}/rest/v1/${TABLE}?order=payout.desc&limit=${limit}`,
        {
          headers: {
            'apikey': SUPABASE_KEY!,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
          },
        },
      );
      if (res.ok) {
        const data: ScoreEntry[] = await res.json();
        if (data.length > 0) return data;
      }
    } catch (e) {
      console.warn('[Leaderboard] global fetch failed', e);
    }
  }
  return _getLocal().sort((a, b) => b.payout - a.payout).slice(0, limit);
}

// ── Player name (stored in localStorage) ─────────────────────────────────────
const NAME_KEY = 'tem-player-name';
export function getPlayerName(): string | null {
  return localStorage.getItem(NAME_KEY);
}
export function setPlayerName(name: string): void {
  localStorage.setItem(NAME_KEY, name.trim().slice(0, 20));
}

// ── Local storage helpers ─────────────────────────────────────────────────────
function _getLocal(): ScoreEntry[] {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? '[]'); } catch { return []; }
}
function _saveLocal(entry: Omit<ScoreEntry, 'id' | 'created_at'>): void {
  const all = _getLocal();
  all.unshift({ ...entry, id: crypto.randomUUID(), created_at: new Date().toISOString() });
  if (all.length > MAX_LOCAL) all.length = MAX_LOCAL;
  localStorage.setItem(LOCAL_KEY, JSON.stringify(all));
}
