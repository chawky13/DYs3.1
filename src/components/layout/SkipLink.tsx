import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 
                 bg-indigo-600 text-white px-4 py-2 rounded-md z-50
                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Aller au contenu principal
    </a>
  );
}