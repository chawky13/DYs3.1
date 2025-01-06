import React from 'react';
import { FontSizeSelector } from './FontSizeSelector';
import { ColorOverlaySelector } from './ColorOverlaySelector';
import { TextAlignmentSelector } from './TextAlignmentSelector';
import type { AdaptationCategory, AdaptationOptions } from '../../types/adaptation';

interface AdaptationPanelProps {
  category: AdaptationCategory;
  values: AdaptationOptions;
  onChange: (id: keyof AdaptationOptions) => void;
  onValueChange: <K extends keyof AdaptationOptions>(option: K, value: AdaptationOptions[K]) => void;
}

export function AdaptationPanel({ category, values, onChange, onValueChange }: AdaptationPanelProps) {
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
      {category.options.map(option => (
        <div key={option.id} className="bg-white p-3 rounded-lg shadow-sm">
          {/* Sélecteurs spéciaux */}
          {option.id === 'fontSize' && (
            <FontSizeSelector
              value={values.fontSize}
              onChange={(value) => onValueChange('fontSize', value)}
            />
          )}
          
          {option.id === 'colorOverlay' && (
            <ColorOverlaySelector
              value={values.colorOverlay}
              onChange={(value) => onValueChange('colorOverlay', value)}
            />
          )}
          
          {option.id === 'textAlignment' && (
            <TextAlignmentSelector
              value={values.textAlignment}
              onChange={(value) => onValueChange('textAlignment', value)}
            />
          )}

          {/* Options standards */}
          {!['fontSize', 'colorOverlay', 'textAlignment'].includes(option.id) && (
            <label className="flex items-center gap-2 group cursor-pointer">
              <input
                type="checkbox"
                checked={!!values[option.id as keyof AdaptationOptions]}
                onChange={() => onChange(option.id as keyof AdaptationOptions)}
                className="w-4 h-4 text-indigo-600 rounded border-gray-300 
                         focus:ring-indigo-500 focus:ring-2 
                         transition-colors cursor-pointer"
              />
              <span className="text-sm text-gray-700 group-hover:text-indigo-600 
                             transition-colors font-medium">
                {option.label}
              </span>
            </label>
          )}
        </div>
      ))}
    </div>
  );
}