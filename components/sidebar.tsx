'use client';

import { useEffect, useState } from 'react'; // Pour gérer l'état et les effets
import { SearchResultsImageSection } from './search-results-image'; // Pour afficher les images dynamiques
import HistoryContainer from './history-container';
import { useStreamableValue } from 'ai/rsc'; // Pour la gestion des flux de résultats
import type { SearchResultImage } from '@/lib/types'; // Pour le type des résultats d'image

export async function Sidebar({ result }: { result?: string }) {
  const [searchResults, setSearchResults] = useState<SearchResultImage[]>([]); // État des résultats d'image
  const [query, setQuery] = useState<string>(''); // Query de l'utilisateur

  // Utilisation de `useStreamableValue` pour obtenir les résultats de recherche
  const [data, error, pending] = useStreamableValue(result);

  // Lorsque les données de recherche changent, on met à jour les images et la requête
  useEffect(() => {
    if (data) {
      const parsedData = JSON.parse(data); // On parse les résultats JSON
      setSearchResults(parsedData.images || []); // On récupère les images
      setQuery(parsedData.query || ''); // On récupère la requête utilisateur
    }
  }, [data]);

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      
      {/* Section pour afficher les images dynamiques */}
      {searchResults.length > 0 ? (
        <div className="w-full space-y-4">
          <h2 className="text-center text-lg font-bold">Résultats pour: {query}</h2>
          <SearchResultsImageSection images={searchResults} query={query} />
        </div>
      ) : (
        <p className="text-center text-muted">Aucune image trouvée</p>
      )}

      {/* Historique des recherches */}
      <HistoryContainer location="sidebar" />
    </div>
  );
}
