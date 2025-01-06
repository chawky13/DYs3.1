import { useEffect } from 'react';
import type { AdaptationOptions } from '../types/adaptation';

interface ShortcutHandlers {
  toggleOption: (option: keyof AdaptationOptions) => void;
  setFontOption: (font: AdaptationOptions['customFont']) => void;
}

export function useKeyboardShortcuts({ toggleOption, setFontOption }: ShortcutHandlers) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ne pas interférer avec la saisie de texte
      if (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement) {
        return;
      }

      if (e.altKey) {
        switch (e.key.toLowerCase()) {
          case 'l': // Espacement des lettres
            toggleOption('letterSpacing');
            break;
          case 's': // Syllabes en couleur
            toggleOption('highlightSyllables');
            break;
          case 'h': // Hauteur de ligne
            toggleOption('lineHeight');
            break;
          case 'd': // Mode sombre
            toggleOption('darkMode');
            break;
          case 'r': // Règle de lecture
            toggleOption('ruler');
            break;
          case 'f': // Ligne de focus
            toggleOption('focusLine');
            break;
          case 't': // Lecture audio
            toggleOption('textToSpeech');
            break;
          case '1':
            setFontOption('default');
            break;
          case '2':
            setFontOption('opendyslexic');
            break;
          case '3':
            setFontOption('arial');
            break;
          case '4':
            setFontOption('comic');
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [toggleOption, setFontOption]);
}