import React, { useState, useEffect } from 'react';

interface ReadingGuideProps {
  enabled: boolean;
}

export function ReadingGuide({ enabled }: ReadingGuideProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      className="fixed pointer-events-none z-50"
      style={{
        left: position.x - 100,
        top: position.y - 10,
        width: '200px',
        height: '20px',
        background: 'rgba(79, 70, 229, 0.1)',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(79, 70, 229, 0.2)'
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}