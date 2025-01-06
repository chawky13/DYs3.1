import React, { useState } from 'react';
import { Eye, Type, BookOpen, Layout, RotateCcw } from 'lucide-react';
import { adaptationCategories } from '../../data/adaptationCategories';
import { AdaptationPanel } from './AdaptationPanel';
import { AdaptationInfo } from '../AdaptationInfo';
import type { AdaptationOptions } from '../../types/adaptation';

interface AdaptationTabsProps {
  values: AdaptationOptions;
  onChange: (id: keyof AdaptationOptions) => void;
  onValueChange: <K extends keyof AdaptationOptions>(option: K, value: AdaptationOptions[K]) => void;
  onReset: () => void;
}

export function AdaptationTabs({ values, onChange, onValueChange, onReset }: AdaptationTabsProps) {
  const [activeTab, setActiveTab] = useState('visual');

  const tabIcons = {
    visual: Eye,
    text: Type,
    reading: BookOpen,
    layout: Layout
  };

  const activeCategory = adaptationCategories.find(cat => cat.id === activeTab);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        {/* Tabs Navigation */}
        <nav className="flex space-x-2 border-b" role="tablist">
          {adaptationCategories.map(category => {
            const Icon = tabIcons[category.id as keyof typeof tabIcons];
            return (
              <button
                key={category.id}
                role="tab"
                aria-selected={activeTab === category.id}
                aria-controls={`panel-${category.id}`}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors text-base
                  ${activeTab === category.id 
                    ? 'bg-white text-indigo-600 border-b-2 border-indigo-600' 
                    : 'text-gray-600 hover:text-indigo-600'}
                `}
                onClick={() => setActiveTab(category.id)}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{category.title}</span>
              </button>
            );
          })}
        </nav>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 
                     hover:text-indigo-600 transition-colors rounded-lg hover:bg-indigo-50"
          title="Réinitialiser tous les filtres"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Réinitialiser</span>
        </button>
      </div>

      {/* Panels */}
      {adaptationCategories.map(category => (
        <div
          key={category.id}
          role="tabpanel"
          id={`panel-${category.id}`}
          aria-labelledby={`tab-${category.id}`}
          hidden={activeTab !== category.id}
          className="space-y-6"
        >
          <AdaptationPanel
            category={category}
            values={values}
            onChange={onChange}
            onValueChange={onValueChange}
          />
          
          {activeCategory && <AdaptationInfo category={activeCategory} />}
        </div>
      ))}
    </div>
  );
}