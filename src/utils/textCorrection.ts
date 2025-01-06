import { commonPatterns } from './textPatterns';
import { cleanSpaces, cleanPunctuation, cleanRepeatedChars } from './textCleaners';

function fixWordRepetitions(text: string): string {
  let result = text;
  
  // Correction des répétitions immédiates
  const immediateRepeat = /\b(\w+)\s+\1\b/gi;
  while (immediateRepeat.test(result)) {
    result = result.replace(immediateRepeat, '$1');
  }
  
  // Correction des répétitions avec mots entre deux
  const distantRepeat = /\b(\w+)\s+(?:\w+\s+){1,2}\1\b/gi;
  while (distantRepeat.test(result)) {
    result = result.replace(distantRepeat, (match, word) => {
      const words = match.split(/\s+/);
      // Ne supprime que si les mots intermédiaires sont des mots courts
      const middleWords = words.slice(1, -1);
      if (middleWords.every(w => commonPatterns.shortWords.includes(w.toLowerCase()))) {
        return word;
      }
      return match;
    });
  }
  
  return result;
}

function fixShortWordRepetitions(text: string): string {
  let result = text;
  
  commonPatterns.shortWords.forEach(word => {
    const pattern = new RegExp(`\\b${word}\\s+(?:${word}\\s*)+`, 'gi');
    result = result.replace(pattern, word);
  });
  
  return result;
}

export function removeCharacterRepetitions(text: string): string {
  if (!text) return text;
  
  let result = text;
  
  // Étape 1: Nettoyage des caractères répétés
  result = cleanRepeatedChars(result);
  
  // Étape 2: Correction des répétitions de mots
  result = fixWordRepetitions(result);
  
  // Étape 3: Correction des répétitions de mots courts
  result = fixShortWordRepetitions(result);
  
  // Étape 4: Nettoyage final
  result = cleanPunctuation(result);
  result = cleanSpaces(result);
  
  return result;
}