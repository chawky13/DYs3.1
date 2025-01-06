const CACHE_SIZE_LIMIT = 1000;

class LRUCache<K, V> {
  private cache: Map<K, V>;
  private readonly limit: number;

  constructor(limit: number) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // Refresh l'entrée
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    if (this.cache.size >= this.limit) {
      // Supprime la plus ancienne entrée
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }
}

const syllableCache = new LRUCache<string, string[]>(CACHE_SIZE_LIMIT);

export function getCachedSyllables(word: string): string[] | undefined {
  return syllableCache.get(word.toLowerCase());
}

export function cacheSyllables(word: string, syllables: string[]): void {
  syllableCache.set(word.toLowerCase(), syllables);
}

export function clearSyllableCache(): void {
  syllableCache.clear();
}