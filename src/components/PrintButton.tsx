import React from 'react';
import { Printer } from 'lucide-react';
import type { AdaptationOptions } from '../types/adaptation';

interface PrintButtonProps {
  text: string;
  options: AdaptationOptions;
}

export function PrintButton({ text, options }: PrintButtonProps) {
  const handlePrint = () => {
    // Créer une nouvelle fenêtre pour l'impression
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    // Appliquer les styles d'adaptation
    const getAdaptationStyles = () => {
      const styles = [];
      if (options.letterSpacing) styles.push('letter-spacing: 0.1em;');
      if (options.wordSpacing) styles.push('word-spacing: 0.3em;');
      if (options.lineHeight) styles.push('line-height: 2;');
      if (options.paragraphSpacing) styles.push('margin-bottom: 2em;');
      if (options.fontSize === 'large') styles.push('font-size: 1.125rem;');
      if (options.fontSize === 'x-large') styles.push('font-size: 1.25rem;');
      
      // Police personnalisée
      if (options.customFont === 'opendyslexic') {
        styles.push('font-family: OpenDyslexic, sans-serif;');
      } else if (options.customFont === 'arial') {
        styles.push('font-family: Arial, sans-serif;');
      } else if (options.customFont === 'comic') {
        styles.push('font-family: "Comic Sans MS", cursive;');
      }

      return styles.join('\n');
    };

    // Contenu HTML pour l'impression
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Texte adapté - Impression</title>
          <style>
            @import url('https://cdn.jsdelivr.net/npm/opendyslexic@1.0.3/dist/regular/OpenDyslexic-Regular.otf');
            
            body {
              padding: 2rem;
              max-width: 800px;
              margin: 0 auto;
              ${getAdaptationStyles()}
            }
            
            p {
              margin-bottom: 1em;
              page-break-inside: avoid;
            }

            @media print {
              body {
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          ${text.split('\n').map(p => `<p>${p}</p>`).join('')}
        </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();

    // Attendre le chargement de la police avant d'imprimer
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <button
      onClick={handlePrint}
      className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm
                hover:bg-gray-50 transition-colors border border-gray-200"
      title="Imprimer le texte adapté"
    >
      <Printer className="w-5 h-5 text-gray-500" />
      <span className="text-sm font-medium text-gray-700">Imprimer</span>
    </button>
  );
}