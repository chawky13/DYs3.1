import React from 'react';
import { Type } from 'lucide-react';
import type { AdaptationOptions } from '../../types/adaptation';

interface FontSizeSelectorProps {
  value: AdaptationOptions['fontSize'];
  onChange: (value: AdaptationOptions['fontSize']) => void;
}

export function FontSizeSelector({ value, onChange }: FontSizeSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <Type className="w-5 h-5 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as AdaptationOptions['fontSize'])}
        className="flex-1 rounded-lg border-gray-200 py-2 px-3 text-sm 
                 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        aria-label="Taille du texte"
      >
        <option value="normal">Normale</option>
        <option value="large">Grande</option>
        <option value="x-large">Très grande</option>
      </select>
    </div>
  );
}