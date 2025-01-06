import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useGuidedReading } from '../hooks/useGuidedReading';

interface GuidedReadingProps {
  enabled: boolean;
  words: string[];
}

export function GuidedReading({ enabled, words }: GuidedReadingProps) {
  const { currentWordIndex, isPlaying, start, stop } = useGuidedReading(words);

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 left-4 flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg">
      <button
        onClick={isPlaying ? stop : start}
        className="p-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
        aria-label={isPlaying ? "Arrêter la lecture guidée" : "Démarrer la lecture guidée"}
      >
        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
      </button>
      <span className="text-sm text-gray-600">
        {isPlaying ? `Mot ${currentWordIndex + 1}/${words.length}` : 'Lecture guidée'}
      </span>
    </div>
  );
}