import React from 'react'
import { ModeToggle } from './mode-toggle'
import { IconLogo } from './ui/icons'
import { cn } from '@/lib/utils'
import HistoryContainer from './history-container'

export const Header: React.FC = async () => {
  return (
    <header className="fixed w-full p-1 md:p-2 flex justify-between items-center z-10 backdrop-blur md:backdrop-blur-none bg-background/80 md:bg-transparent">
      <div>
        <a href="/">
          <IconLogo className={cn('w-5 h-5')} />
          <span className="sr-only">Anne Kerdy</span>
        </a>
      </div>
      <div className="flex-1 text-center">
        <h1 className="text-lg font-semibold">Poser Vos Questions à Anne Kerdi</h1>
        <img src="/public/images/placeholder-image.png" alt="Photo de bienvenue" className="mx-auto mt-2 w-16 h-16 rounded-full" />
      </div>
      <div className="flex gap-0.5">
        <ModeToggle />
        <HistoryContainer location="header" />
      </div>
    </header>
  )
}

export default Header