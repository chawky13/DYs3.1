import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';
import { adaptationResearch } from '../data/adaptationResearch';
import type { AdaptationCategory } from '../types/adaptation';

interface AdaptationInfoProps {
  category: AdaptationCategory;
}

export function AdaptationInfo({ category }: AdaptationInfoProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  return (
    <div className="mt-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg shadow-sm">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-indigo-50 rounded-lg transition-colors"
      >
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-gray-900">
            En savoir plus sur ces adaptations
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-indigo-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-indigo-500" />
        )}
      </button>

      {isExpanded && (
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            {category.options.map(option => {
              const research = adaptationResearch[option.id];
              if (!research) return null;
              
              const isOptionExpanded = expandedOption === option.id;

              return (
                <div 
                  key={option.id} 
                  className="border border-indigo-100 rounded-lg bg-white"
                >
                  <button
                    onClick={() => setExpandedOption(isOptionExpanded ? null : option.id)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <span className="font-medium text-gray-900">{option.label}</span>
                    {isOptionExpanded ? (
                      <ChevronUp className="w-5 h-5 text-indigo-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-indigo-500" />
                    )}
                  </button>
                  
                  {isOptionExpanded && (
                    <div className="px-4 pb-4 space-y-3">
                      <p className="text-sm text-gray-600">{research.description}</p>
                      <div className="space-y-2">
                        <div className="text-sm">
                          <span className="font-medium text-indigo-900">Impact démontré : </span>
                          <span className="text-gray-600">{research.impact}</span>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-indigo-900">Source : </span>
                          <span className="text-gray-600 italic">{research.source}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}