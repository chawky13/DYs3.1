import React, { useState, useRef } from 'react';
import { Volume2, Pause, Play, RotateCcw, Volume1, Volume2 as VolumeHigh } from 'lucide-react';

interface TextToSpeechProps {
  text: string;
  enabled: boolean;
}

export function TextToSpeech({ text, enabled }: TextToSpeechProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [rate, setRate] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = () => {
    if (!enabled) return;
    
    window.speechSynthesis.cancel();
    utteranceRef.current = new SpeechSynthesisUtterance(text);
    utteranceRef.current.lang = 'fr-FR';
    utteranceRef.current.volume = volume;
    utteranceRef.current.rate = rate;
    
    utteranceRef.current.onend = () => setIsPlaying(false);
    utteranceRef.current.onpause = () => setIsPlaying(false);
    utteranceRef.current.onresume = () => setIsPlaying(true);
    
    window.speechSynthesis.speak(utteranceRef.current);
    setIsPlaying(true);
  };

  const togglePlay = () => {
    if (isPlaying) {
      window.speechSynthesis.pause();
    } else if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    } else {
      speak();
    }
  };

  const stop = () => {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
  };

  if (!enabled) return null;

  return (
    <div className="fixed bottom-4 right-4 flex items-center gap-4 bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center gap-2">
        <button
          onClick={() => setVolume(v => Math.max(0, v - 0.1))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <Volume1 className="h-4 w-4" />
        </button>
        <span className="w-12 text-center">{Math.round(volume * 100)}%</span>
        <button
          onClick={() => setVolume(v => Math.min(1, v + 0.1))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          <VolumeHigh className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setRate(r => Math.max(0.5, r - 0.1))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          -
        </button>
        <span className="w-12 text-center">{rate.toFixed(1)}x</span>
        <button
          onClick={() => setRate(r => Math.min(2, r + 0.1))}
          className="p-2 hover:bg-gray-100 rounded"
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={togglePlay}
          className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
        </button>
        <button
          onClick={stop}
          className="p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          <RotateCcw className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}