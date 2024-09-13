"use client";

import { useEffect, useState } from 'react';
import HistoryContainer from './history-container';

// Liste des noms de fichiers d'images dans le dossier public/images
const imageFilenames = [
  'image001.jpg',
  'image002.jpg',
  'image003.jpg',
  'image004.jpg',
  'image005.jpg'
];

function getRandomImages(imageArray: string[], count: number) {
  const shuffled = imageArray.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export function Sidebar() {
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    const images = getRandomImages(imageFilenames, 3);
    setRandomImages(images);
  }, []);

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex-col justify-center pb-24 hidden sm:flex" style={{ width: '450px', marginTop: '80px' }}>
      <div className="flex flex-col items-center space-y-4">
        {randomImages.map((src, index) => (
          <img key={index} src={`/images/${src}`} alt={`Random ${index + 1}`} className="w-450 h-270 object-cover" />
        ))}
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  );
}