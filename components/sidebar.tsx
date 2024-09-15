import HistoryContainer from './history-container';
import { SearchSection } from './search-section'; // Importer le composant de recherche
import { StreamableValue } from 'ai/rsc'; // Pour gérer les valeurs streamées si nécessaire

export async function Sidebar({ searchResult }: { searchResult?: StreamableValue<string> }) {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      {/* Images statiques initiales */}
      <div className="flex flex-col items-center space-y-4 w-full">
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image001.jpg" 
          alt="Anne 1" 
          className="sidebar-img w-full max-w-full h-auto object-cover"
        />
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image002.jpg" 
          alt="Anne 2" 
          className="sidebar-img w-full max-w-full h-auto object-cover"
        />
        <img 
          src="https://www.leeveo.tv/wp-content/uploads/2024/09/image003.jpg" 
          alt="Anne 3" 
          className="sidebar-img w-full max-w-full h-auto object-cover"
        />
      </div>

      {/* Section pour les images de la recherche */}
      <div className="w-full space-y-4">
        <h2 className="text-center text-lg font-bold">Résultats de la recherche</h2>
        {/* Afficher les images de la recherche */}
        <SearchSection result={searchResult} />
      </div>

      {/* Historique */}
      <HistoryContainer location="sidebar" />
    </div>
  );
}
