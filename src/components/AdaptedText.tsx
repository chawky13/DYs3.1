import React, { useRef } from 'react';
import { Word } from './Word';
import { ReadingRuler } from './ReadingRuler';
import { FocusLine } from './FocusLine';
import { TextToSpeech } from './TextToSpeech';
import { BionicReading } from './BionicReading';
import { ReadingGuide } from './adaptations/ReadingGuide';
import { LineGuides } from './adaptations/LineGuides';
import { processText } from '../utils/textProcessor';
import type { AdaptationOptions } from '../types/adaptation';

interface AdaptedTextProps {
  text: string;
  options: AdaptationOptions;
}

export const AdaptedText: React.FC<AdaptedTextProps> = ({ text, options }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const processedText = processText(text);
  const paragraphs = processedText.split('\n').filter(p => p.trim().length > 0);
  
  const getTextClasses = () => {
    const classes = [
      'relative',
      options.lineHeight ? 'leading-loose' : 'leading-normal',
      options.paragraphSpacing ? 'space-y-8' : 'space-y-6',
      options.wordSpacing ? 'tracking-wide' : '',
      options.fontSize === 'large' ? 'text-lg' : '',
      options.fontSize === 'x-large' ? 'text-xl' : '',
      options.textAlignment === 'center' ? 'text-center' : '',
      options.textAlignment === 'justified' ? 'text-justify' : '',
      options.customFont === 'opendyslexic' ? 'font-opendyslexic' : '',
      options.customFont === 'arial' ? 'font-arial' : '',
      options.customFont === 'comic' ? 'font-comic' : 'font-sans'
    ];

    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="relative min-h-[50vh]">
      <div 
        ref={textRef}
        className={`adapted-text ${getTextClasses()}`}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="py-4">
            {options.bionic ? (
              <BionicReading text={paragraph} enabled={true} />
            ) : (
              paragraph.split(/\s+/).map((word, wordIndex) => (
                <React.Fragment key={`${index}-${wordIndex}`}>
                  <Word 
                    word={word} 
                    options={options} 
                    isFirstWord={wordIndex === 0}
                  />
                </React.Fragment>
              ))
            )}
          </p>
        ))}
        <LineGuides enabled={options.lineGuides} />
      </div>
      
      <ReadingRuler enabled={options.ruler} />
      <FocusLine enabled={options.focusLine} textRef={textRef} />
      <ReadingGuide enabled={options.readingGuide} />
      <TextToSpeech text={processedText} enabled={options.textToSpeech} />
    </div>
  );
};