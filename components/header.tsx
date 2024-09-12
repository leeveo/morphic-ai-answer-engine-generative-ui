import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header
      className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent"
      style={{ backgroundImage: 'url(/images/high-angle-view-of-the-beach-of-saint-malo-2023-11-27-04-51-01-utc.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '50px' }}
    >
      <div className="flex items-center">
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Anne Kerdy</span>
        </a>
        <p className="ml-4 text-sm font-semibold">Bienvenue en Bretagne!</p>
      </div>
     
      <div className="flex gap-0.5">
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header