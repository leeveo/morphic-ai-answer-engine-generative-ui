import { useState, useEffect } from 'react';
import HistoryContainer from './history-container';

// Fonction pour sélectionner 3 images aléatoires à partir d'une liste
const getRandomImages = (imagesArray, num) => {
  const shuffled = [...imagesArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

export function Sidebar() {
  // URLs d'images dans le dossier externe
  const imageBaseURL = 'https://www.leeveo.tv/wp-content/uploads/2024/09/';
  const imageList = [
    'image001.jpg',
    'image002.jpg',
    'image003.jpg',
    'image004.jpg', // Ajoutez d'autres images dans cette liste si nécessaire
    'image005.jpg',
    'image006.jpg'
  ];

  // État pour stocker les images sélectionnées aléatoirement
  const [randomImages, setRandomImages] = useState([]);

  // Utiliser useEffect pour sélectionner 3 images au chargement du composant
  useEffect(() => {
    const selectedImages = getRandomImages(imageList, 3);
    setRandomImages(selectedImages);
  }, []);

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4" 
         style={{ marginTop: '100px' }}>
      <div className="flex flex-col items-center space-y-4 w-full">
        {/* Affichage des 3 images sélectionnées aléatoirement */}
        {randomImages.map((image, index) => (
          <img 
            key={index}
            src={`${imageBaseURL}${image}`} 
            alt={`Image ${index + 1}`} 
            className="sidebar-img w-full h-auto object-cover"
          />
        ))}
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  );
}
