import React from 'react';
import { TextInput } from './components/TextInput';
import { AdaptedText } from './components/AdaptedText';
import { FontSelector } from './components/FontSelector';
import { useAdaptationOptions } from './hooks/useAdaptationOptions';
import { AdaptationTabs } from './components/adaptations/AdaptationTabs';
import { FileHandling } from './components/FileHandling';
import { ComparisonView } from './components/DyslexicSimulation/ComparisonView';
import { ResearchOverview } from './components/ResearchOverview';
import { Introduction } from './components/Introduction';
import { sampleText } from './data/sampleText';
import { PageLayout } from './components/layout/PageLayout';

export default function App() {
  const [text, setText] = React.useState(sampleText);
  const { adaptationOptions, toggleOption, setOptionValue, resetOptions } = useAdaptationOptions();
  const [showComparison, setShowComparison] = React.useState(true);

  return (
    <PageLayout>
      <div className="space-y-8">
        <Introduction />
        <FileHandling 
          text={text} 
          onTextChange={setText} 
          options={adaptationOptions}
        />
        <TextInput text={text} onTextChange={setText} />
        
        <ResearchOverview />

        <section 
          className="rounded-2xl shadow-lg p-6 bg-white"
          aria-labelledby="options-title"
        >
          <h2 
            id="options-title"
            className="text-xl font-semibold mb-6 text-gray-900"
          >
            Options d'adaptation
          </h2>
          
          <div className="space-y-6">
            <AdaptationTabs
              values={adaptationOptions}
              onChange={toggleOption}
              onValueChange={setOptionValue}
              onReset={resetOptions}
            />
            <FontSelector
              value={adaptationOptions.customFont}
              onChange={(value) => setOptionValue('customFont', value)}
            />
          </div>
        </section>

        {text && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                Visualisation du texte
              </h2>
              <button
                onClick={() => setShowComparison(!showComparison)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 
                         transition-colors focus:outline-none focus:ring-2 
                         focus:ring-offset-2 focus:ring-indigo-500"
              >
                {showComparison ? 'Masquer' : 'Voir'} la simulation dyslexique
              </button>
            </div>

            {showComparison ? (
              <ComparisonView text={text} options={adaptationOptions} />
            ) : (
              <section 
                className="rounded-2xl shadow-lg p-6 bg-white"
                aria-labelledby="adapted-text-title"
              >
                <h2 
                  id="adapted-text-title"
                  className="text-xl font-semibold mb-6 text-gray-900"
                >
                  Texte Adapté
                </h2>
                <AdaptedText text={text} options={adaptationOptions} />
              </section>
            )}
          </>
        )}
      </div>
    </PageLayout>
  );
}