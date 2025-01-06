import React from 'react';
import { OptionGroup } from './OptionGroup';
import { adaptationCategories } from '../data/adaptationCategories';
import { FontSizeSelector } from './adaptations/FontSizeSelector';
import { ColorOverlaySelector } from './adaptations/ColorOverlaySelector';
import { TextAlignmentSelector } from './adaptations/TextAlignmentSelector';
import type { AdaptationOptions } from '../types/adaptation';

interface AdaptationCategoriesProps {
  values: AdaptationOptions;
  onChange: (id: keyof AdaptationOptions) => void;
  onValueChange: <K extends keyof AdaptationOptions>(option: K, value: AdaptationOptions[K]) => void;
}

export function AdaptationCategories({ values, onChange, onValueChange }: AdaptationCategoriesProps) {
  return (
    <div className="space-y-6">
      {adaptationCategories.map(category => (
        <div key={category.id} className="bg-white p-4 rounded-lg shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
          
          <div className="space-y-4">
            {/* Options standards */}
            <div className="space-y-3">
              {category.options.filter(opt => 
                !['fontSize', 'colorOverlay', 'textAlignment'].includes(opt.id)
              ).map(option => (
                <label key={option.id} className="flex items-center gap-3 group cursor-pointer">
                  <input
                    type="checkbox"
                    checked={!!values[option.id as keyof AdaptationOptions]}
                    onChange={() => onChange(option.id as keyof AdaptationOptions)}
                    className="w-5 h-5 text-indigo-600 rounded border-gray-300 
                             focus:ring-indigo-500 focus:ring-2 
                             transition-colors cursor-pointer"
                  />
                  <span className="text-lg text-gray-700 group-hover:text-indigo-600 
                                 transition-colors font-medium">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Sélecteurs spéciaux */}
            {category.options.some(opt => opt.id === 'fontSize') && (
              <div className="pt-2">
                <FontSizeSelector
                  value={values.fontSize}
                  onChange={(value) => onValueChange('fontSize', value)}
                />
              </div>
            )}

            {category.options.some(opt => opt.id === 'colorOverlay') && (
              <div className="pt-2">
                <ColorOverlaySelector
                  value={values.colorOverlay}
                  onChange={(value) => onValueChange('colorOverlay', value)}
                />
              </div>
            )}

            {category.options.some(opt => opt.id === 'textAlignment') && (
              <div className="pt-2">
                <TextAlignmentSelector
                  value={values.textAlignment}
                  onChange={(value) => onValueChange('textAlignment', value)}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}