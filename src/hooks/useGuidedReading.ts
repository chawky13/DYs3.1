import { useState, useCallback, useRef } from 'react';

export function useGuidedReading(words: string[]) {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<number>();

  const start = useCallback(() => {
    setIsPlaying(true);
    setCurrentWordIndex(0);
    
    intervalRef.current = window.setInterval(() => {
      setCurrentWordIndex(i => {
        if (i >= words.length - 1) {
          setIsPlaying(false);
          clearInterval(intervalRef.current);
          return -1;
        }
        return i + 1;
      });
    }, 300); // Ajustable selon les préférences
  }, [words.length]);

  const stop = useCallback(() => {
    setIsPlaying(false);
    setCurrentWordIndex(-1);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  return {
    currentWordIndex,
    isPlaying,
    start,
    stop
  };
}