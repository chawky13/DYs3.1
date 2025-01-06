export interface AdaptationOptions {
  // Options visuelles
  letterSpacing: boolean;
  wordSpacing: boolean;
  lineHeight: boolean;
  paragraphSpacing: boolean;
  fontSize: 'normal' | 'large' | 'x-large';
  
  // Mise en forme du texte
  highlightSyllables: boolean;
  alternateColors: boolean;
  boldFirstLetter: boolean;
  separateWords: boolean;
  highlightPunctuation: boolean;
  textAlignment: 'left' | 'center' | 'justified';
  
  // Aide à la lecture
  ruler: boolean;
  focusLine: boolean;
  textToSpeech: boolean;
  bionic: boolean;
  readingGuide: boolean;
  lineGuides: boolean;
  highlightHovers: boolean;
  
  // Police personnalisée
  customFont: 'default' | 'opendyslexic' | 'arial' | 'comic';
}