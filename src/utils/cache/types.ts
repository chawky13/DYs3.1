export interface CacheStats {
  size: number;
  hits: number;
  misses: number;
  hitRate: number;
}

export interface Cache<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
  clear(): void;
  size(): number;
}