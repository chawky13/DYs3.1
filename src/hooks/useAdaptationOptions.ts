import { useState } from 'react';
import type { AdaptationOptions } from '../types/adaptation';

const defaultOptions: AdaptationOptions = {
  // Options visuelles - toutes activées par défaut
  letterSpacing: true,
  wordSpacing: true,
  lineHeight: true,
  paragraphSpacing: true,
  fontSize: 'large',
  
  // Mise en forme du texte
  highlightSyllables: true, // Activé par défaut
  alternateColors: false,
  boldFirstLetter: false,
  separateWords: true, // Activé par défaut
  highlightPunctuation: true, // Activé par défaut
  textAlignment: 'left',
  
  // Aide à la lecture
  ruler: false,
  focusLine: false,
  textToSpeech: false,
  bionic: false,
  readingGuide: false,
  lineGuides: false,
  highlightHovers: false,
  
  // Police personnalisée
  customFont: 'default'
};

export function useAdaptationOptions() {
  const [adaptationOptions, setAdaptationOptions] = useState<AdaptationOptions>(defaultOptions);

  const toggleOption = (option: keyof AdaptationOptions) => {
    setAdaptationOptions(prev => ({
      ...prev,
      [option]: typeof prev[option] === 'boolean' ? !prev[option] : prev[option]
    }));
  };

  const setOptionValue = <K extends keyof AdaptationOptions>(
    option: K,
    value: AdaptationOptions[K]
  ) => {
    setAdaptationOptions(prev => ({
      ...prev,
      [option]: value
    }));
  };

  const resetOptions = () => {
    setAdaptationOptions(defaultOptions);
  };

  return {
    adaptationOptions,
    toggleOption,
    setOptionValue,
    resetOptions
  };
}