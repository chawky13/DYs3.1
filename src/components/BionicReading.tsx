import React from 'react';

interface BionicReadingProps {
  text: string;
  enabled: boolean;
}

export function BionicReading({ text, enabled }: BionicReadingProps) {
  if (!enabled) return <>{text}</>;

  const processWord = (word: string) => {
    const length = word.length;
    const boldLength = Math.ceil(length * 0.6);
    return (
      <span key={word}>
        <strong>{word.slice(0, boldLength)}</strong>
        {word.slice(boldLength)}
      </span>
    );
  };

  return (
    <>
      {text.split(' ').map((word, index) => (
        <React.Fragment key={index}>
          {index > 0 && ' '}
          {processWord(word)}
        </React.Fragment>
      ))}
    </>
  );
}