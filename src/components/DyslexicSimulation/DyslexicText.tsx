import React, { useEffect, useState } from 'react';
import { simulateDyslexicEffects } from '../../utils/dyslexicSimulation';
import type { AdaptationOptions } from '../../types/adaptation';

interface DyslexicTextProps {
  text: string;
  options: AdaptationOptions;
}

export function DyslexicText({ text, options }: DyslexicTextProps) {
  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 60);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-lg leading-relaxed relative">
      {text.split('\n').map((paragraph, pIndex) => (
        <div key={pIndex} className="mb-6 relative">
          {paragraph.split(/\s+/).map((word, wIndex) => {
            const { processedWord, effects } = simulateDyslexicEffects(word, animationFrame, options);
            
            return (
              <React.Fragment key={`${pIndex}-${wIndex}`}>
                {wIndex > 0 && ' '}
                <span
                  style={{
                    display: 'inline-block',
                    transform: `
                      rotate(${effects.rotation}deg)
                      scale(${effects.scale})
                      translateY(${effects.verticalOffset}px)
                    `,
                    filter: `blur(${effects.blur}px)`,
                    opacity: effects.opacity,
                    transition: 'all 0.3s ease',
                    position: 'relative',
                  }}
                  className={`
                    ${effects.isReversed ? 'scale-x-[-1]' : ''}
                    ${effects.shouldFloat ? 'animate-float' : ''}
                  `}
                >
                  {processedWord.split('').map((char, cIndex) => (
                    <span
                      key={cIndex}
                      style={{
                        display: 'inline-block',
                        filter: effects.charEffects[cIndex]?.blur ? 'blur(1px)' : 'none',
                        transform: effects.charEffects[cIndex]?.reversed ? 'scale(-1, 1)' : 'none',
                        opacity: effects.charEffects[cIndex]?.opacity || 1,
                      }}
                    >
                      {char}
                    </span>
                  ))}

                  {effects.showRiver && (
                    <span 
                      className="absolute inset-0 bg-gray-100 -z-10 transform -skew-x-12"
                      style={{ opacity: 0.5 }}
                      aria-hidden="true"
                    />
                  )}
                </span>
              </React.Fragment>
            );
          })}
        </div>
      ))}

      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 90%, rgba(0,0,0,0.05) 100%)',
          animation: 'pulse 4s infinite',
        }}
        aria-hidden="true"
      />
    </div>
  );
}