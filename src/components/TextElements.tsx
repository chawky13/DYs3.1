import React from 'react';

interface SyllableProps {
  syllable: string;
  index: number;
  letterSpacing: boolean;
}

export const Syllable: React.FC<SyllableProps> = ({ syllable, index, letterSpacing }) => (
  <span
    className={`
      ${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}
      ${letterSpacing ? 'tracking-wide' : ''}
      px-0.5 rounded
    `}
  >
    {syllable}
  </span>
);

interface ColoredCharProps {
  char: string;
  index: number;
}

export const ColoredChar: React.FC<ColoredCharProps> = ({ char, index }) => (
  <span className={index % 2 === 0 ? 'text-blue-800' : 'text-purple-800'}>
    {char}
  </span>
);

interface WordProps {
  word: string;
  letterSpacing?: boolean;
}

export const Word: React.FC<WordProps> = ({ word, letterSpacing }) => (
  <span className={letterSpacing ? 'tracking-wide' : ''}>
    {word}
  </span>
);