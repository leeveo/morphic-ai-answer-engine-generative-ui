// components/left-sidebar.tsx

import { SearchSection } from './search-section';
import type { StreamableValue } from 'ai/rsc';

export type LeftSidebarProps = {
  result?: StreamableValue<string>;
  includeDomains?: string[];
};

export function LeftSidebar({ result, includeDomains }: LeftSidebarProps) {
  return (
    <div className="w-[300px] p-4">
      {/* Contenu de la sidebar gauche */}
      <SearchSection result={result} includeDomains={includeDomains} />
    </div>
  );
}
