import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex flex-col justify-center items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div className="flex flex-col items-center">
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Anne Kerdy</span>
        </a>
        {/* Phrase d'introduction centrée */}
        <p className="text-lg font-semibold mt-2 text-black text-center">
          Bienvenue sur mon site ! Découvrez mes projets et mon parcours.
        </p>
      </div>
      <div className="flex gap-0.5 mt-4">
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header
