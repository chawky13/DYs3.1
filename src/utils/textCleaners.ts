// Fonctions de nettoyage spécifiques
export function cleanSpaces(text: string): string {
  return text
    .replace(/\s+/g, ' ')
    .replace(/\s+([.,!?;])/g, '$1')
    .replace(/([.,!?;])\s+/g, '$1 ')
    .trim();
}

export function cleanPunctuation(text: string): string {
  return text
    .replace(/([.,!?;])\1+/g, '$1')
    .replace(/\s*([.,!?;])\s*/g, '$1 ')
    .trim();
}

export function cleanRepeatedChars(text: string): string {
  return text.replace(/([a-zà-ÿ])\1{2,}/gi, '$1$1');
}