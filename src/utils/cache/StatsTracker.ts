import { CacheStats } from './types';

export class StatsTracker {
  private hits: number = 0;
  private misses: number = 0;

  recordHit(): void {
    this.hits++;
  }

  recordMiss(): void {
    this.misses++;
  }

  reset(): void {
    this.hits = 0;
    this.misses = 0;
  }

  getStats(cacheSize: number): CacheStats {
    const total = this.hits + this.misses;
    return {
      size: cacheSize,
      hits: this.hits,
      misses: this.misses,
      hitRate: total > 0 ? (this.hits / total) * 100 : 0
    };
  }
}