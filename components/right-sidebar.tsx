import React from 'react';
import { SearchSection } from './search-section';

const RightSidebar = () => {
  const result = []; // Remplacez ceci par vos données streamables
  const includeDomains = ['example.com', 'anotherdomain.com'];

  return (
    <div className="right-sidebar">
      <SearchSection result={result} includeDomains={includeDomains} />
      {/* Autres composants de la barre latérale droite */}
    </div>
  );
};

export default RightSidebar;