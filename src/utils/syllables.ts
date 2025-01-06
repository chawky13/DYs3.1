import { syllableRules } from './syllableRules';
import { syllableCache } from './cache/SyllableCache';
import { commonPatterns } from './textPatterns';

function isVowel(char: string): boolean {
  return syllableRules.vowels.has(char.toLowerCase());
}

function isConsonant(char: string): boolean {
  return syllableRules.consonants.has(char.toLowerCase());
}

function getConsonantGroup(word: string, startIndex: number): string {
  let group = '';
  let i = startIndex;
  while (i < word.length && isConsonant(word[i])) {
    group += word[i].toLowerCase();
    i++;
  }
  return group;
}

function shouldSkipSyllableSplit(word: string): boolean {
  return commonPatterns.shortWords.includes(word.toLowerCase()) || 
         word.length <= 2;
}

export function splitIntoSyllables(word: string): string[] {
  // Check cache first
  const cached = syllableCache.get(word);
  if (cached) return cached;

  // Don't split short words
  if (shouldSkipSyllableSplit(word)) {
    const result = [word];
    syllableCache.set(word, result);
    return result;
  }

  const syllables: string[] = [];
  let currentSyllable = '';
  let i = 0;

  while (i < word.length) {
    currentSyllable += word[i];

    if (isVowel(word[i])) {
      if (i === word.length - 1) {
        syllables.push(currentSyllable);
        break;
      }

      if (i + 1 < word.length && isConsonant(word[i + 1])) {
        const consonantGroup = getConsonantGroup(word, i + 1);
        
        if (syllableRules.inseparableGroups.has(consonantGroup.toLowerCase())) {
          if (i + consonantGroup.length < word.length) {
            syllables.push(currentSyllable);
            currentSyllable = '';
            i++;
            continue;
          }
        }
        
        if (consonantGroup.length === 1) {
          if (i + 2 < word.length && isVowel(word[i + 2])) {
            syllables.push(currentSyllable);
            currentSyllable = '';
            i++;
            continue;
          }
        }
      }
    }

    if (i === word.length - 1) {
      syllables.push(currentSyllable);
    }

    i++;
  }

  const result = syllables.length ? syllables : [word];
  syllableCache.set(word, result);
  return result;
}