import React from 'react';
import { KeyboardShortcutsHelp } from '../KeyboardShortcutsHelp';
import { Logo } from '../Logo';

export function Header() {
  return (
    <header 
      className="bg-white sticky top-0 z-50"
      role="banner"
    >
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Navigation principale"
      >
        <div className="flex items-center justify-between h-16">
          <div className="w-10">
            <KeyboardShortcutsHelp />
          </div>
          <div className="flex flex-col items-center">
            <a 
              href="/"
              className="focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
              aria-label="Accueil"
            >
              <Logo />
            </a>
            <p className="text-xs text-gray-500 mt-1 font-medium">
              par C.KAZI-AOUAL
            </p>
          </div>
          <div className="w-10" aria-hidden="true" />
        </div>
      </nav>
    </header>
  );
}