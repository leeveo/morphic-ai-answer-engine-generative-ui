/* eslint-disable @next/next/no-img-element */
'use client'

import { useEffect, useState } from 'react';
import { SearchResultsImageSection } from './search-results-image';
import HistoryContainer from './history-container';
import { SearchResultImage } from '@/lib/types'; // S'assurer que le type est bien importé

export async function Sidebar() {
  const [images, setImages] = useState<SearchResultImage[]>([]);

  useEffect(() => {
    // Remplacer par ton appel API pour récupérer les images dynamiques
    async function fetchImages() {
      const fetchedImages = await fetch('/api/images').then(res => res.json());
      setImages(fetchedImages);
    }

    fetchImages();
  }, []);

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      {/* Carrousel d'images dynamiques */}
      <div className="w-full space-y-4">
        <h2 className="text-center text-lg font-bold">Résultats de la recherche</h2>
        <SearchResultsImageSection images={images} query="Recherche utilisateur" />
      </div>

      {/* Historique */}
      <HistoryContainer location="sidebar" />
    </div>
  );
}
