// Normalisation du texte
export function normalizeText(text: string): string {
  return text
    .replace(/([.,!?;:])\s*\1+/g, '$1') // Supprime la ponctuation répétée
    .replace(/\s+/g, ' ') // Normalise les espaces
    .replace(/([.,!?;:])\s*/g, '$1 ') // Normalise la ponctuation
    .trim();
}