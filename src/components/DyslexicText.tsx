import React from 'react';

interface DyslexicTextProps {
  text: string;
}

export function DyslexicText({ text }: DyslexicTextProps) {
  const simulateDyslexia = (text: string) => {
    return text.split('').map((char, index) => {
      const rotation = Math.random() * 20 - 10;
      const processedChar = Math.random() > 0.7 ? 
        (char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()) : 
        char;

      return (
        <span
          key={index}
          style={{
            display: 'inline-block',
            transform: `rotate(${rotation}deg)`,
            position: 'relative',
            top: Math.random() * 2 - 1 + 'px',
            marginRight: char === ' ' ? '0.25em' : '0',
          }}
          className="transition-transform duration-300 hover:rotate-0"
        >
          {processedChar}
        </span>
      );
    });
  };

  return (
    <div className="dyslexic-text">
      {text.split('\n').map((paragraph, index) => (
        <p key={index} className="mb-4">
          {simulateDyslexia(paragraph)}
        </p>
      ))}
    </div>
  );
}