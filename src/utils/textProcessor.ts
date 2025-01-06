import { analyzeText } from './textAnalyzer';
import { normalizeText } from './textNormalizer';

export function processText(text: string): string {
  if (!text) return '';

  // Normalisation initiale
  let processed = normalizeText(text);
  
  // Traitement des phrases
  const sentences = processed.split(/(?<=[.!?])\s+/);
  
  return sentences.map(sentence => {
    // Analyse de la phrase
    const words = sentence.split(/\s+/);
    const processedWords: string[] = [];
    
    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      const nextWord = words[i + 1];
      
      // Évite les répétitions directes
      if (currentWord.toLowerCase() === nextWord?.toLowerCase()) {
        continue;
      }
      
      // Évite les répétitions partielles
      if (nextWord && (
        currentWord.toLowerCase().includes(nextWord.toLowerCase()) ||
        nextWord.toLowerCase().includes(currentWord.toLowerCase())
      )) {
        continue;
      }
      
      processedWords.push(currentWord);
    }
    
    return processedWords.join(' ');
  }).join(' ');
}