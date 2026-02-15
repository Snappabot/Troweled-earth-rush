/**
 * ScoreManager - Handles high score persistence using localStorage
 */
export class ScoreManager {
  private static readonly STORAGE_KEY = 'troweled_earth_rush_scores';

  // Get all high scores
  public static getHighScores(): { level: number; score: number; date: string }[] {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        return JSON.parse(data);
      }
    } catch (e) {
      console.warn('Failed to load high scores:', e);
    }
    return [];
  }

  // Get high score for a specific level
  public static getLevelHighScore(level: number): number {
    const scores = this.getHighScores();
    const levelScore = scores.find(s => s.level === level);
    return levelScore?.score || 0;
  }

  // Save a new score (only if it's a high score)
  public static saveScore(level: number, score: number): boolean {
    const currentHigh = this.getLevelHighScore(level);
    
    if (score > currentHigh) {
      const scores = this.getHighScores().filter(s => s.level !== level);
      scores.push({
        level,
        score: Math.floor(score),
        date: new Date().toISOString()
      });
      
      // Sort by level
      scores.sort((a, b) => a.level - b.level);
      
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(scores));
        return true; // New high score!
      } catch (e) {
        console.warn('Failed to save high score:', e);
      }
    }
    return false;
  }

  // Get total score across all levels
  public static getTotalScore(): number {
    return this.getHighScores().reduce((sum, s) => sum + s.score, 0);
  }

  // Get number of levels completed
  public static getLevelsCompleted(): number {
    return this.getHighScores().length;
  }

  // Clear all scores (for testing)
  public static clearScores(): void {
    try {
      localStorage.removeItem(this.STORAGE_KEY);
    } catch (e) {
      console.warn('Failed to clear scores:', e);
    }
  }

  // Get player rank based on total score
  public static getPlayerRank(): string {
    const total = this.getTotalScore();
    const levels = this.getLevelsCompleted();

    if (levels >= 10 && total >= 50000) return '🏆 Plastering Legend';
    if (levels >= 7 && total >= 30000) return '⭐ Master Tradesman';
    if (levels >= 5 && total >= 15000) return '🔨 Skilled Plasterer';
    if (levels >= 3 && total >= 5000) return '👷 Apprentice';
    if (levels >= 1) return '🌱 Newbie';
    return '❓ Unknown';
  }

  // Export scores (for sharing)
  public static exportShareText(): string {
    const total = this.getTotalScore();
    const levels = this.getLevelsCompleted();
    const rank = this.getPlayerRank();
    
    return `🚐 Troweled Earth Rush 🚐\n` +
           `${rank}\n` +
           `Levels Completed: ${levels}/10\n` +
           `Total Score: ${total}\n` +
           `#TroweledEarthRush`;
  }
}
