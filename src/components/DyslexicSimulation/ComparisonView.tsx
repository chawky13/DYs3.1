import React from 'react';
import { DyslexicText } from './DyslexicText';
import { AdaptedText } from '../AdaptedText';
import { ArrowRight } from 'lucide-react';
import type { AdaptationOptions } from '../../types/adaptation';

interface ComparisonViewProps {
  text: string;
  options: AdaptationOptions;
}

export function ComparisonView({ text, options }: ComparisonViewProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
          Vue simulée dyslexique
          <span className="text-sm font-normal text-gray-500">
            (Ce que certaines personnes dyslexiques peuvent percevoir)
          </span>
        </h3>
        <DyslexicText text={text} options={options} />
      </div>

      <div className="relative">
        <div className="hidden md:block absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-2 rounded-full shadow-lg">
            <ArrowRight className="w-6 h-6 text-indigo-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-2">
            Texte adapté
            <span className="text-sm font-normal text-gray-500">
              (Avec les options d'adaptation sélectionnées)
            </span>
          </h3>
          <AdaptedText text={text} options={options} />
        </div>
      </div>
    </div>
  );
}