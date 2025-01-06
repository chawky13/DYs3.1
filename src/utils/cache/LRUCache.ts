import { Cache } from './types';

export class LRUCache<K, V> implements Cache<K, V> {
  private cache: Map<K, V>;
  private readonly limit: number;

  constructor(limit: number) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key: K): V | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      // Refresh entry by moving it to the end
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: K, value: V): void {
    // Remove oldest entry if cache is full
    if (this.cache.size >= this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }

  size(): number {
    return this.cache.size;
  }
}