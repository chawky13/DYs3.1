import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useScrollDebounce } from '../hooks/useScrollDebounce';

interface FocusLineProps {
  enabled: boolean;
  textRef: React.RefObject<HTMLDivElement>;
}

export function FocusLine({ enabled, textRef }: FocusLineProps) {
  const [position, setPosition] = useState<{ top: number; height: number } | null>(null);
  const lastPositionRef = useRef<{ top: number; height: number } | null>(null);

  const updatePosition = useCallback(() => {
    if (!textRef.current) return;

    const paragraphs = textRef.current.getElementsByTagName('p');
    if (!paragraphs.length) return;

    const viewportHeight = window.innerHeight;
    const viewportCenter = viewportHeight / 2;
    
    let closestParagraph = paragraphs[0];
    let minDistance = Infinity;

    Array.from(paragraphs).forEach(paragraph => {
      const rect = paragraph.getBoundingClientRect();
      const paragraphCenter = rect.top + rect.height / 2;
      const distance = Math.abs(paragraphCenter - viewportCenter);

      if (distance < minDistance) {
        minDistance = distance;
        closestParagraph = paragraph;
      }
    });

    const rect = closestParagraph.getBoundingClientRect();
    const newPosition = {
      top: rect.top,
      height: rect.height
    };

    // Ne met à jour que si la position a changé significativement
    if (!lastPositionRef.current ||
        Math.abs(lastPositionRef.current.top - newPosition.top) > 2 ||
        Math.abs(lastPositionRef.current.height - newPosition.height) > 2) {
      lastPositionRef.current = newPosition;
      setPosition(newPosition);
    }
  }, [textRef]);

  const debouncedUpdatePosition = useScrollDebounce(updatePosition, 32); // Augmenté à 32ms

  useEffect(() => {
    if (!enabled) return;

    updatePosition();
    window.addEventListener('scroll', debouncedUpdatePosition, { passive: true });
    
    const resizeObserver = new ResizeObserver(debouncedUpdatePosition);
    if (textRef.current) {
      resizeObserver.observe(textRef.current);
    }

    return () => {
      window.removeEventListener('scroll', debouncedUpdatePosition);
      resizeObserver.disconnect();
    };
  }, [enabled, textRef, debouncedUpdatePosition, updatePosition]);

  if (!enabled || !position) return null;

  return (
    <div 
      role="presentation"
      aria-hidden="true"
      className="fixed left-0 right-0 pointer-events-none transform-gpu"
      style={{
        top: position.top,
        height: position.height,
        transition: 'all 150ms ease-out',
        background: 'linear-gradient(180deg, rgba(79, 70, 229, 0.05) 0%, rgba(79, 70, 229, 0.1) 50%, rgba(79, 70, 229, 0.05) 100%)',
        boxShadow: '0 0 15px rgba(79, 70, 229, 0.15)',
        zIndex: 40
      }}
    />
  );
}