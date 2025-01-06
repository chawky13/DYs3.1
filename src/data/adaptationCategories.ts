import { AdaptationCategory } from '../types/adaptation';

export const adaptationCategories: AdaptationCategory[] = [
  {
    id: 'visual',
    title: 'Adaptations visuelles',
    options: [
      { id: 'letterSpacing', label: 'Espacement des lettres' },
      { id: 'wordSpacing', label: 'Espacement des mots' },
      { id: 'lineHeight', label: 'Hauteur de ligne augmentée' },
      { id: 'paragraphSpacing', label: 'Espacement des paragraphes' },
      { id: 'fontSize', label: 'Taille du texte' }
    ]
  },
  {
    id: 'text',
    title: 'Mise en forme du texte',
    options: [
      { id: 'highlightSyllables', label: 'Syllabes en couleur' },
      { id: 'alternateColors', label: 'Lettres alternées' },
      { id: 'boldFirstLetter', label: 'Première lettre en gras' },
      { id: 'separateWords', label: 'Séparer les mots' },
      { id: 'highlightPunctuation', label: 'Ponctuation en évidence' },
      { id: 'textAlignment', label: 'Alignement du texte' }
    ]
  },
  {
    id: 'reading',
    title: 'Aide à la lecture',
    options: [
      { id: 'ruler', label: 'Règle de lecture' },
      { id: 'focusLine', label: 'Ligne de focus' },
      { id: 'textToSpeech', label: 'Lecture audio' },
      { id: 'bionic', label: 'Lecture bionique' },
      { id: 'readingGuide', label: 'Guide de lecture' },
      { id: 'lineGuides', label: 'Lignes guides' },
      { id: 'highlightHovers', label: 'Surlignage au survol' }
    ]
  }
];