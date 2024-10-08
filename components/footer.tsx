import React from 'react'
import Link from 'next/link'
import { SiInstagram, SiLinkedin } from 'react-icons/si'
import { MdOutlineWebAsset } from 'react-icons/md'
import { Button } from './ui/button'
import Image from 'next/image'

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 md:p-6 bg-white-900 text-white fixed bottom-0 left-0">
      <div className="flex flex-col items-center md:items-end justify-between">
        
        {/* Image affichée uniquement sur les petits écrans */}
        <div className="block sm:hidden mb-4">
          <Image
            src="/images/image001.jpg" // Chemin vers ton image dans le dossier public/images
            alt="Image pour les petits écrans"
            width={450} // Largeur de l'image (à ajuster)
            height={270} // Hauteur de l'image (à ajuster)
            className="object-contain"
          />
        </div>

        {/* Liens réseaux sociaux - Masqués sur les petits écrans */}
        <div className="hidden md:flex space-x-4 justify-center md:justify-end">
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

        {/* Texte du footer - Masqué sur les petits écrans */}
        <p className="hidden md:block mt-2 text-xs text-center md:text-right">
          Suivez moi sur les réseaux sociaux - Propulsé par adeliade.ai
        </p>
      </div>
    </footer>
  )
}

export default Footer
