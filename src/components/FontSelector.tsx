import React from 'react';
import type { AdaptationOptions } from '../types/adaptation';
import { Type } from 'lucide-react';

type FontOption = AdaptationOptions['customFont'];

interface FontSelectorProps {
  value: FontOption;
  onChange: (value: FontOption) => void;
}

export function FontSelector({ value, onChange }: FontSelectorProps) {
  return (
    <div className="flex items-center gap-4">
      <Type className="w-5 h-5 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as FontOption)}
        className="flex-1 rounded-lg border-gray-200 py-2 px-3 text-sm 
                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent 
                   dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="default">Police par défaut</option>
        <option value="opendyslexic">OpenDyslexic</option>
        <option value="arial">Arial</option>
        <option value="comic">Comic Sans MS</option>
      </select>
    </div>
  );
}