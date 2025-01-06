// Nouvelle fonction pour le traitement avancé du texte
export function processText(text: string): string {
  if (!text) return '';
  
  // Divise le texte en phrases
  const sentences = text.split(/([.!?]+)/).filter(Boolean);
  
  return sentences.map(sentence => {
    // Garde la ponctuation intacte
    if (/^[.!?]+$/.test(sentence)) return sentence;
    
    // Traite les mots de la phrase
    const words = sentence.split(/\s+/);
    const processedWords = [];
    let skipNext = false;
    
    for (let i = 0; i < words.length; i++) {
      if (skipNext) {
        skipNext = false;
        continue;
      }
      
      const currentWord = words[i].toLowerCase();
      const nextWord = words[i + 1]?.toLowerCase();
      
      // Vérifie les répétitions directes
      if (currentWord === nextWord) {
        skipNext = true;
        processedWords.push(words[i]);
        continue;
      }
      
      // Vérifie les répétitions partielles
      if (nextWord && (
        currentWord.includes(nextWord) ||
        nextWord.includes(currentWord)
      )) {
        skipNext = true;
        processedWords.push(words[i]);
        continue;
      }
      
      processedWords.push(words[i]);
    }
    
    return processedWords.join(' ');
  }).join('');
}