import React, { useEffect, useState } from 'react';

interface ReadingRulerProps {
  enabled: boolean;
}

export function ReadingRuler({ enabled }: ReadingRulerProps) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div 
      className="fixed left-0 right-0 h-12 bg-yellow-100/30 pointer-events-none z-50 backdrop-blur-sm"
      style={{ 
        top: position - 24,
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}
    />
  );
}