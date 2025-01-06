import React from 'react';
import { Upload, Download, FileText } from 'lucide-react';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { PrintButton } from './PrintButton';
import type { AdaptationOptions } from '../types/adaptation';

interface FileHandlingProps {
  text: string;
  onTextChange: (text: string) => void;
  options: AdaptationOptions;
}

export function FileHandling({ text, onTextChange, options }: FileHandlingProps) {
  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      if (file.name.endsWith('.txt')) {
        const content = await file.text();
        onTextChange(content);
      } else {
        alert('Format de fichier non supporté. Veuillez utiliser un fichier .txt');
      }
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier:', error);
      alert('Erreur lors de la lecture du fichier. Veuillez réessayer.');
    }
  };

  const handleSave = async (format: 'txt' | 'docx') => {
    try {
      if (format === 'txt') {
        // Créer un blob texte
        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        
        // Créer un lien temporaire pour le téléchargement
        const link = document.createElement('a');
        link.href = url;
        link.download = 'texte_adapte.txt';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else if (format === 'docx') {
        // Créer un document Word
        const doc = new Document({
          sections: [{
            properties: {},
            children: text.split('\n').map(paragraph => 
              new Paragraph({
                children: [new TextRun(paragraph)]
              })
            )
          }]
        });

        // Générer le fichier
        const blob = await Packer.toBlob(doc);
        const url = URL.createObjectURL(blob);
        
        // Télécharger le fichier
        const link = document.createElement('a');
        link.href = url;
        link.download = 'texte_adapte.docx';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      alert('Erreur lors de la sauvegarde. Veuillez réessayer.');
    }
  };

  return (
    <div className="flex items-center gap-4 mb-4">
      {/* Upload */}
      <div className="relative">
        <input
          type="file"
          accept=".txt"
          onChange={handleFileUpload}
          className="hidden"
          id="file-upload"
        />
        <label
          htmlFor="file-upload"
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm
                     hover:bg-gray-50 cursor-pointer transition-colors
                     border border-gray-200"
        >
          <Upload className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Charger un fichier</span>
        </label>
      </div>

      {/* Download */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleSave('txt')}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm
                     hover:bg-gray-50 transition-colors border border-gray-200"
          title="Sauvegarder en TXT"
        >
          <FileText className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">TXT</span>
        </button>

        <button
          onClick={() => handleSave('docx')}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm
                     hover:bg-gray-50 transition-colors border border-gray-200"
          title="Sauvegarder en DOCX"
        >
          <Download className="w-5 h-5 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">DOCX</span>
        </button>

        {/* Bouton d'impression */}
        <PrintButton text={text} options={options} />
      </div>
    </div>
  );
}