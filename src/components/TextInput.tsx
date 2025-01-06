import React from 'react';
import { FileText } from 'lucide-react';
import { removeCharacterRepetitions } from '../utils/textCorrection';

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
}

export function TextInput({ text, onTextChange }: TextInputProps) {
  const handleTextChange = (value: string) => {
    const correctedText = removeCharacterRepetitions(value);
    onTextChange(correctedText);
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-4">
        <FileText className="w-5 h-5 text-gray-400" />
      </div>
      <textarea
        value={text}
        onChange={(e) => handleTextChange(e.target.value)}
        className="w-full min-h-[120px] pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
        placeholder="Écrivez ou collez votre texte ici..."
      />
    </div>
  );
}