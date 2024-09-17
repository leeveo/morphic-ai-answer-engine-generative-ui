// sidebar.tsx
import React from 'react';
import { SearchSection, SearchSectionProps } from './search-section';

type SidebarProps = {
  searchSectionProps: SearchSectionProps;
};

export function Sidebar({ searchSectionProps }: SidebarProps) {
  return (
    <div className="sidebar">
      <SearchSection {...searchSectionProps} />
    </div>
  );
}