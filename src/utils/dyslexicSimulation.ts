import type { AdaptationOptions } from '../types/adaptation';

interface CharEffect {
  blur?: boolean;
  reversed?: boolean;
  opacity?: number;
}

interface DyslexicEffects {
  processedWord: string;
  effects: {
    rotation: number;
    scale: number;
    verticalOffset: number;
    blur: number;
    opacity: number;
    isReversed: boolean;
    shouldFloat: boolean;
    showRiver: boolean;
    charEffects: CharEffect[];
  };
}

const confusablePairs = {
  'b': 'd', 'd': 'b',
  'p': 'q', 'q': 'p',
  'm': 'n', 'n': 'm',
  'u': 'n', 'n': 'u',
  'a': 'e', 'e': 'a',
};

function calculateEffectReduction(options: AdaptationOptions) {
  let reduction = 1;

  // Réductions basées sur les adaptations actives
  if (options.letterSpacing) reduction *= 0.6;
  if (options.wordSpacing) reduction *= 0.7;
  if (options.lineHeight) reduction *= 0.8;
  if (options.highlightSyllables) reduction *= 0.5;
  if (options.boldFirstLetter) reduction *= 0.7;
  if (options.separateWords) reduction *= 0.6;
  if (options.highlightPunctuation) reduction *= 0.8;
  if (options.fontSize === 'large') reduction *= 0.7;
  if (options.fontSize === 'x-large') reduction *= 0.5;

  // Limite minimale de réduction
  return Math.max(0.2, reduction);
}

export function simulateDyslexicEffects(
  word: string, 
  frame: number, 
  options: AdaptationOptions
): DyslexicEffects {
  const effectReduction = calculateEffectReduction(options);

  // Probabilités de base des effets
  const baseEffects = {
    letterConfusion: 0.3,
    letterReversal: 0.25,
    blur: 0.35,
    float: 0.2,
    river: 0.15
  };

  // Application de la réduction
  const probabilities = Object.fromEntries(
    Object.entries(baseEffects).map(([key, value]) => [key, value * effectReduction])
  );

  const processedChars: string[] = [];
  const charEffects: CharEffect[] = [];

  // Traitement des caractères
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    let processedChar = char;
    const effect: CharEffect = {};

    const isPunctuation = /[.,!?;:]/.test(char);
    const isFirstLetter = i === 0;

    if (!isPunctuation && !isFirstLetter || !options.boldFirstLetter) {
      // Confusion de lettres
      if (Math.random() < probabilities.letterConfusion && confusablePairs[char.toLowerCase()]) {
        processedChar = confusablePairs[char.toLowerCase()];
        effect.reversed = true;
      }

      // Effet de flou
      if (Math.random() < probabilities.blur) {
        effect.blur = true;
        effect.opacity = 0.7 + Math.sin(frame * 0.1 + i) * 0.3;
      }
    }

    processedChars.push(processedChar);
    charEffects.push(effect);
  }

  // Effets au niveau du mot
  const shouldFloat = Math.random() < probabilities.float;
  const showRiver = Math.random() < probabilities.river && !options.lineHeight;

  // Calcul des effets visuels avec réduction
  const baseRotation = Math.sin(frame * 0.05) * 3;
  const rotation = baseRotation * effectReduction;
  const scale = 1 + Math.sin(frame * 0.1) * 0.03 * effectReduction;
  const verticalOffset = shouldFloat ? Math.sin(frame * 0.1) * 3 * effectReduction : 0;
  const blur = Math.random() < 0.1 ? 0.5 * effectReduction : 0;
  const opacity = 0.8 + (0.2 * (1 - effectReduction));

  return {
    processedWord: processedChars.join(''),
    effects: {
      rotation,
      scale,
      verticalOffset,
      blur,
      opacity,
      isReversed: Math.random() < probabilities.letterReversal,
      shouldFloat,
      showRiver,
      charEffects,
    }
  };
}