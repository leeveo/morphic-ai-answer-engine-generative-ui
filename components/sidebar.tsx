import React, { ReactNode } from 'react'

interface SidebarProps {
  children: ReactNode
}

export const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  return (
    <aside className="sidebar">
      {children}
    </aside>
  )
}