import React from 'react'
import Link from 'next/link'
import { SiInstagram, SiLinkedin, SiYoutube } from 'react-icons/si'
import { Button } from './ui/button'

const Footer: React.FC = () => {
  return (
    <footer className="w-fit p-1 md:p-2 fixed bottom-0 right-0">
      <div className="flex flex-col items-end">
        <p className="mb-2 text-muted-foreground">Suivez moi sur les réseaux sociaux</p>
        <div className="flex justify-end">
          <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground/50"
          >
            <Link href="https://www.instagram.com/annekerdi/" target="_blank">
              <SiInstagram size={18} />
            </Link>
          </Button>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground/50"
          >
            <Link href="https://www.linkedin.com/in/anne-kerdi-a9ba98281/" target="_blank">
              <SiLinkedin size={18} />
            </Link>
          </Button>
          <Button
            variant={'ghost'}
            size={'icon'}
            className="text-muted-foreground/50"
          >
            <Link href="https://www.youtube.com/channel/UC1234567890" target="_blank">
              <SiYoutube size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer