import React, { ReactNode } from 'react';
import HistoryContainer from './history-container';

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      <div className="grid grid-cols-2 gap-4 w-full">
        {children}
      </div>
      <HistoryContainer location="sidebar" />
    </div>
  );
}