// Analyse avancée du texte
export function analyzeText(text: string) {
  const words = text.toLowerCase().split(/\s+/);
  const wordCounts = new Map<string, number>();
  const adjacentRepetitions = new Set<string>();
  
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
    
    if (i > 0 && words[i] === words[i - 1]) {
      adjacentRepetitions.add(word);
    }
  }
  
  return { wordCounts, adjacentRepetitions };
}