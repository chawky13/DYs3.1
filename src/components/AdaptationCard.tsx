import React from 'react';
import type { AdaptationOption } from '../types/adaptation';

interface AdaptationCardProps {
  adaptation: AdaptationOption;
}

export function AdaptationCard({ adaptation }: AdaptationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-indigo-600 mb-4">{adaptation.title}</h3>
      <p className="text-gray-600 mb-4">{adaptation.description}</p>
      
      <div className="space-y-4">
        <section>
          <h4 className="font-semibold text-gray-700 mb-2">Mise en œuvre</h4>
          <p className="text-gray-600">{adaptation.implementation}</p>
        </section>

        <section>
          <h4 className="font-semibold text-gray-700 mb-2">Ressources nécessaires</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Financières : {adaptation.resources.financial}</li>
            <li>Humaines : {adaptation.resources.human}</li>
            <li>Matérielles : {adaptation.resources.material}</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-gray-700 mb-2">Faisabilité</h4>
          <ul className="list-disc list-inside text-gray-600">
            <li>Technique : {adaptation.feasibility.technical}</li>
            <li>Économique : {adaptation.feasibility.economic}</li>
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-gray-700 mb-2">Calendrier</h4>
          <p className="text-gray-600">{adaptation.timeline}</p>
        </section>

        <section>
          <h4 className="font-semibold text-gray-700 mb-2">Acteurs à impliquer</h4>
          <ul className="list-disc list-inside text-gray-600">
            {adaptation.stakeholders.map((stakeholder, index) => (
              <li key={index}>{stakeholder}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4 className="font-semibold text-gray-700 mb-2">Défis et solutions</h4>
          {adaptation.challenges.map((challenge, index) => (
            <div key={index} className="mb-2">
              <p className="text-gray-600">
                <span className="font-medium">Obstacle : </span>
                {challenge.obstacle}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Solution : </span>
                {challenge.solution}
              </p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}