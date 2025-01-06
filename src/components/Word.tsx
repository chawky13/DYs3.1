import React from 'react';
import type { AdaptationOptions } from '../types/adaptation';
import { splitIntoSyllables } from '../utils/syllables';

interface WordProps {
  word: string;
  options: AdaptationOptions;
  isFirstWord?: boolean;
}

export const Word: React.FC<WordProps> = ({ word, options, isFirstWord = false }) => {
  const getWordClasses = () => {
    const classes = [
      options.letterSpacing ? 'tracking-wide' : '',
      options.wordSpacing ? 'mx-1' : '',
      options.highlightHovers ? 'hover:bg-indigo-100 hover:rounded px-0.5' : '',
      options.fontSize === 'large' ? 'text-lg' : '',
      options.fontSize === 'x-large' ? 'text-xl' : '',
    ];
    return classes.filter(Boolean).join(' ');
  };

  const renderPunctuation = (text: string) => {
    if (!options.highlightPunctuation) return text;

    return text.split('').map((char, idx) => {
      const isPunctuation = /[.,!?;:]/.test(char);
      if (!isPunctuation) return char;

      return (
        <span 
          key={idx} 
          className="relative inline-block transform hover:scale-110 transition-transform"
          style={{
            animation: 'pulse 2s infinite',
          }}
        >
          <span 
            className="absolute inset-0 bg-red-100 rounded-full blur-sm"
            style={{ transform: 'scale(1.2)' }}
            aria-hidden="true"
          />
          <span className="relative text-red-600 font-bold text-lg">
            {char}
          </span>
        </span>
      );
    });
  };

  const renderAlternateColors = (text: string) => {
    return text.split('').map((char, idx) => {
      const isPunctuation = /[.,!?;:]/.test(char);
      if (isPunctuation && options.highlightPunctuation) {
        return renderPunctuation(char);
      }

      return (
        <span
          key={idx}
          className={`
            inline-block transition-colors duration-300
            ${options.boldFirstLetter && idx === 0 ? 'font-bold' : ''}
            ${idx % 2 === 0 
              ? 'text-blue-600 hover:text-blue-400' 
              : 'text-purple-600 hover:text-purple-400'}
          `}
        >
          {char}
        </span>
      );
    });
  };

  const renderContent = () => {
    if (options.alternateColors) {
      return renderAlternateColors(word);
    }

    if (options.highlightSyllables) {
      const syllables = splitIntoSyllables(word);
      return syllables.map((syllable, idx) => (
        <span
          key={`syllable-${idx}`}
          className={`
            ${idx % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}
            px-0.5 rounded
          `}
        >
          {idx === 0 && options.boldFirstLetter ? (
            <>
              <span className="font-bold">{syllable[0]}</span>
              {renderPunctuation(syllable.slice(1))}
            </>
          ) : (
            renderPunctuation(syllable)
          )}
        </span>
      ));
    }

    if (options.boldFirstLetter) {
      return (
        <>
          <span className="font-bold">{word[0]}</span>
          {renderPunctuation(word.slice(1))}
        </>
      );
    }

    return renderPunctuation(word);
  };

  return (
    <span className={getWordClasses()}>
      {renderContent()}
      {options.separateWords && (
        <span className="text-indigo-400 mx-1" aria-hidden="true">|</span>
      )}
    </span>
  );
};