import React, { useState } from 'react';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

export function ResearchOverview() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8 bg-white rounded-xl shadow-sm border border-indigo-100">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-indigo-50 rounded-xl transition-colors"
      >
        <div className="flex items-center gap-3">
          <Info className="w-5 h-5 text-indigo-600" />
          <span className="font-semibold text-gray-900">
            Pourquoi ces adaptations sont importantes ?
          </span>
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-indigo-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-indigo-500" />
        )}
      </button>

      {isExpanded && (
        <div className="px-6 pb-6 space-y-4">
          <p className="text-gray-600">
            La dyslexie affecte environ 5-10% de la population mondiale. Les adaptations proposées
            ici sont basées sur des recherches scientifiques rigoureuses qui ont démontré leur
            efficacité pour améliorer la lecture chez les personnes dyslexiques.
          </p>
          
          <div className="space-y-3">
            <h5 className="font-medium text-gray-900">Points clés de la recherche :</h5>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Les adaptations visuelles peuvent améliorer la vitesse de lecture jusqu'à 50%</li>
              <li>La personnalisation des paramètres est cruciale car chaque personne est unique</li>
              <li>L'utilisation combinée de plusieurs adaptations produit les meilleurs résultats</li>
              <li>Les bénéfices sont observables dès les premières utilisations</li>
            </ul>
          </div>

          <div className="text-sm text-gray-500 italic">
            Sources : British Dyslexia Association, International Dyslexia Association,
            et diverses études académiques citées dans les détails de chaque option.
          </div>
        </div>
      )}
    </div>
  );
}