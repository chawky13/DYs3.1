import React from 'react';
import { AdaptationCard } from './AdaptationCard';
import { climateAdaptations } from '../data/adaptationOptions';

export function ClimateAdaptations() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Options d'adaptation aux changements climatiques
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {climateAdaptations.map(adaptation => (
          <AdaptationCard 
            key={adaptation.id} 
            adaptation={adaptation}
          />
        ))}
      </div>
    </div>
  );
}