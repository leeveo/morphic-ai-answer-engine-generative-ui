import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex flex-col items-center">
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Anne Kerdy test</span>
        </a>
        <p className="mt-2 text-sm font-semibold">Bienvenue en Bretagne!</p>
        <img src="path_to_image.jpg" alt="Bretagne" className="mt-1 w-16 h-16 object-cover rounded-full" />
      </div>
     
      <div className="flex gap-0.5">
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header