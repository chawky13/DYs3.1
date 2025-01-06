import { LRUCache } from './LRUCache';
import { StatsTracker } from './StatsTracker';
import { CacheStats } from './types';

const CACHE_SIZE_LIMIT = 1000;

export class SyllableCache {
  private cache: LRUCache<string, string[]>;
  private stats: StatsTracker;

  constructor(limit: number = CACHE_SIZE_LIMIT) {
    this.cache = new LRUCache(limit);
    this.stats = new StatsTracker();
  }

  get(word: string): string[] | undefined {
    const key = this.normalizeKey(word);
    const result = this.cache.get(key);
    
    if (result) {
      this.stats.recordHit();
    } else {
      this.stats.recordMiss();
    }
    
    return result;
  }

  set(word: string, syllables: string[]): void {
    const key = this.normalizeKey(word);
    this.cache.set(key, syllables);
  }

  clear(): void {
    this.cache.clear();
    this.stats.reset();
  }

  getStats(): CacheStats {
    return this.stats.getStats(this.cache.size());
  }

  private normalizeKey(word: string): string {
    return word.toLowerCase().trim();
  }
}

// Export a singleton instance for the application
export const syllableCache = new SyllableCache();