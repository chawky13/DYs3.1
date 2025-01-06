// Règles de découpage syllabique en français
export const syllableRules = {
  vowels: new Set(['a', 'e', 'i', 'o', 'u', 'y', 'é', 'è', 'ê', 'à', 'â', 'ô', 'û', 'ù', 'î', 'ï']),
  consonants: new Set(['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']),
  
  // Groupes consonantiques inséparables
  inseparableGroups: new Set([
    'bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr',
    'ph', 'pl', 'pr', 'th', 'tr', 'vr'
  ]),
  
  // Terminaisons communes
  commonEndings: new Set([
    'tion', 'sion', 'ment', 'able', 'ible', 'euse', 'esse'
  ])
};