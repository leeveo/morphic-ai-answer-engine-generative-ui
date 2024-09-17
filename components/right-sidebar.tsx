import React from 'react';
import { SearchSection } from './search-section';

const RightSidebar = () => {
  const result = // Obtenez vos données streamables ici
  const includeDomains = ['example.com', 'anotherdomain.com'];

  return (
    <div className="right-sidebar">
      <SearchSection result={result} includeDomains={includeDomains} />
      {/* Autres composants de la barre latérale droite */}
    </div>
  );
};

export default RightSidebar;