import React from 'react';
import { Palette } from 'lucide-react';
import type { AdaptationOptions } from '../../types/adaptation';

interface ColorOverlaySelectorProps {
  value: AdaptationOptions['colorOverlay'];
  onChange: (value: AdaptationOptions['colorOverlay']) => void;
}

export function ColorOverlaySelector({ value, onChange }: ColorOverlaySelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <Palette className="w-5 h-5 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as AdaptationOptions['colorOverlay'])}
        className="flex-1 rounded-lg border-gray-200 py-2 px-3 text-sm 
                 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        aria-label="Filtre de couleur"
      >
        <option value="none">Aucun</option>
        <option value="yellow">Jaune</option>
        <option value="blue">Bleu</option>
        <option value="green">Vert</option>
      </select>
    </div>
  );
}