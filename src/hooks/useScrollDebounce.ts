import { useCallback, useRef } from 'react';

export function useScrollDebounce(callback: () => void, delay: number = 16) {
  const timeoutRef = useRef<number>();
  const lastCallRef = useRef<number>(0);

  return useCallback(() => {
    const now = Date.now();
    
    // Throttle les appels trop rapprochés
    if (now - lastCallRef.current < delay) {
      if (timeoutRef.current) {
        window.cancelAnimationFrame(timeoutRef.current);
      }
      
      timeoutRef.current = window.requestAnimationFrame(() => {
        lastCallRef.current = now;
        callback();
      });
      return;
    }

    // Exécution immédiate si assez de temps s'est écoulé
    lastCallRef.current = now;
    callback();
  }, [callback, delay]);
}