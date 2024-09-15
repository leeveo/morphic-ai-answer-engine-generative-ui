import React from 'react'
import Link from 'next/link'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
import { MdOutlineWebAsset } from 'react-icons/md'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 md:p-6 bg-gray-900 text-white fixed bottom-0 left-0">
      <div className="flex flex-col items-center md:items-end justify-between">
        {/* Liens réseaux sociaux */}
        <div className="flex space-x-4 justify-center md:justify-end">
          <Button variant={'ghost'} size={'icon'} className="text-white/70">
            <Link href="https://www.instagram.com/annekerdi/" target="_blank">
              <SiInstagram size={18} />
            </Link>
          </Button>
          <Button variant={'ghost'} size={'icon'} className="text-white/70">
            <Link href="https://www.linkedin.com/in/anne-kerdi-a9ba98281/" target="_blank">
              <SiLinkedin size={18} />
            </Link>
          </Button>
          <Button variant={'ghost'} size={'icon'} className="text-white/70">
            <Link href="https://www.adeliade.ai" target="_blank">
              <MdOutlineWebAsset size={18} />
            </Link>
          </Button>
        </div>
        {/* Texte du footer */}
        <p className="mt-2 text-xs text-center md:text-right">
          Suivez moi sur les réseaux sociaux - Propulsé par adeliade.ai
        </p>
      </div>
    </footer>
  )
}

export default Footer
