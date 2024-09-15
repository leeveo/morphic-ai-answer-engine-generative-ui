import HistoryContainer from './history-container';
import { SearchResultsImageSection } from './search-results-image'; // Importer la section d'images de recherche
import { SearchResultImage } from '@/lib/types'; // S'assurer que le type est bien importé

// Supposons que les images viennent de la recherche utilisateur
export async function Sidebar({ images }: { images: SearchResultImage[] }) {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      {/* Images statiques initiales */}


      {/* Section pour les images issues de la recherche */}
      <div className="w-full space-y-4">
        <h2 className="text-center text-lg font-bold">Résultats de la recherche</h2>
        {/* Afficher les images dynamiques de la recherche */}
        <SearchResultsImageSection images={images} query="Recherche utilisateur" />
      </div>

      {/* Historique */}
      <HistoryContainer location="sidebar" />
    </div>
  );
}
