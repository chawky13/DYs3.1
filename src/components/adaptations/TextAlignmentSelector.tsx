import React from 'react';
import { AlignLeft, AlignCenter, AlignJustify } from 'lucide-react';
import type { AdaptationOptions } from '../../types/adaptation';

interface TextAlignmentSelectorProps {
  value: AdaptationOptions['textAlignment'];
  onChange: (value: AdaptationOptions['textAlignment']) => void;
}

export function TextAlignmentSelector({ value, onChange }: TextAlignmentSelectorProps) {
  return (
    <div className="flex items-center gap-2" role="group" aria-label="Alignement du texte">
      <button
        onClick={() => onChange('left')}
        className={`p-2 rounded ${value === 'left' ? 'bg-indigo-100' : 'hover:bg-gray-100'}`}
        aria-pressed={value === 'left'}
      >
        <AlignLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange('center')}
        className={`p-2 rounded ${value === 'center' ? 'bg-indigo-100' : 'hover:bg-gray-100'}`}
        aria-pressed={value === 'center'}
      >
        <AlignCenter className="w-5 h-5" />
      </button>
      <button
        onClick={() => onChange('justified')}
        className={`p-2 rounded ${value === 'justified' ? 'bg-indigo-100' : 'hover:bg-gray-100'}`}
        aria-pressed={value === 'justified'}
      >
        <AlignJustify className="w-5 h-5" />
      </button>
    </div>
  );
}