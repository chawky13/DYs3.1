import React from 'react';
import { Logo } from './Logo';

export function Introduction() {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <div className="mb-8">
        <Logo />
      </div>
      <p className="text-lg text-gray-600 mb-4">
        DyƨCover est une application web conçue pour rendre la lecture plus accessible 
        aux personnes dyslexiques. Notre outil permet d'adapter les textes selon vos besoins 
        spécifiques, offrant une expérience de lecture personnalisée et confortable.
      </p>
      <p className="text-lg text-gray-600 mb-4">
        Utilisez les différentes options d'adaptation pour ajuster l'apparence du texte : 
        espacement des lettres, coloration des syllabes, guides de lecture et bien plus encore. 
        Vous pouvez également simuler les difficultés de lecture pour sensibiliser à la dyslexie.
      </p>
      <p className="text-sm text-gray-500">
        Contact : <a href="mailto:ckazi1@hotmail.com" className="text-indigo-600 hover:text-indigo-800">ckazi1@hotmail.com</a>
        <span className="ml-2">par C.KAZI-AOUAL</span>
      </p>
    </div>
  );
}