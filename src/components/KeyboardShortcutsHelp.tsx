import React from 'react';
import { Keyboard } from 'lucide-react';

export function KeyboardShortcutsHelp() {
  return (
    <div className="fixed top-4 right-4">
      <button
        aria-label="Afficher les raccourcis clavier"
        className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => document.getElementById('shortcuts-modal')?.showModal()}
      >
        <Keyboard className="w-6 h-6 text-gray-600" />
      </button>

      <dialog
        id="shortcuts-modal"
        className="fixed inset-0 p-4 bg-white rounded-lg shadow-xl max-w-md mx-auto mt-20"
        aria-labelledby="shortcuts-title"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 id="shortcuts-title" className="text-xl font-bold text-gray-900">
              Raccourcis clavier
            </h2>
            <button
              onClick={() => document.getElementById('shortcuts-modal')?.close()}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Fermer"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-700">Toutes les commandes utilisent la touche Alt</p>
            <ul className="space-y-2 text-gray-600">
              <li><kbd>Alt + L</kbd> : Espacement des lettres</li>
              <li><kbd>Alt + S</kbd> : Syllabes en couleur</li>
              <li><kbd>Alt + H</kbd> : Hauteur de ligne</li>
              <li><kbd>Alt + D</kbd> : Mode sombre</li>
              <li><kbd>Alt + R</kbd> : Règle de lecture</li>
              <li><kbd>Alt + F</kbd> : Ligne de focus</li>
              <li><kbd>Alt + T</kbd> : Lecture audio</li>
            </ul>
            <p className="mt-4 font-medium text-gray-700">Polices de caractères</p>
            <ul className="space-y-2 text-gray-600">
              <li><kbd>Alt + 1</kbd> : Police par défaut</li>
              <li><kbd>Alt + 2</kbd> : OpenDyslexic</li>
              <li><kbd>Alt + 3</kbd> : Arial</li>
              <li><kbd>Alt + 4</kbd> : Comic Sans MS</li>
            </ul>
          </div>
        </div>
      </dialog>
    </div>
  );
}