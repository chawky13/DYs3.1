import React from 'react';

interface LineGuidesProps {
  enabled: boolean;
}

export function LineGuides({ enabled }: LineGuidesProps) {
  if (!enabled) return null;

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(0deg, transparent 39px, rgba(79, 70, 229, 0.1) 40px)',
        backgroundSize: '100% 40px'
      }}
      role="presentation"
      aria-hidden="true"
    />
  );
}