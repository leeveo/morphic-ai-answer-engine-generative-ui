'use client'

import { cn } from '@/lib/utils'
import {
  BookCheck,
  Film,
  Image as ImageIcon,
  MessageCircleMore,
  Newspaper,
  Repeat2,
  Search
} from 'lucide-react'
import React from 'react'
import { Separator } from './ui/separator'

type SectionProps = {
  children: React.ReactNode
  className?: string
  size?: 'sm' | 'md' | 'lg'
  title?: string
  separator?: boolean
}

export const Section: React.FC<SectionProps> = ({
  children,
  className,
  size = 'md',
  title,
  separator = false
}) => {
  const iconSize = 16
  const iconClassName = 'mr-1.5 text-muted-foreground'
  let icon: React.ReactNode

  // Choix de l'icône en fonction du titre
  switch (title) {
    case 'Images':
      // eslint-disable-next-line jsx-a11y/alt-text
      icon = <ImageIcon size={iconSize} className={iconClassName} />
      break
    case 'Videos':
      icon = <Film size={iconSize} className={iconClassName} />
      break
    case 'Sources':
      icon = <Newspaper size={iconSize} className={iconClassName} />
      break
    case 'Answer':
      icon = <BookCheck size={iconSize} className={iconClassName} />
      break
    case 'Related':
      icon = <Repeat2 size={iconSize} className={iconClassName} />
      break
    case 'Follow-up':
      icon = <MessageCircleMore size={iconSize} className={iconClassName} />
      break
    default:
      icon = <Search size={iconSize} className={iconClassName} />
  }

  return (
    <>
      {separator && <Separator className="my-2 bg-primary/10" />}
      <section
        className={cn(
          ` ${size === 'sm' ? 'py-1' : size === 'lg' ? 'py-4' : 'py-2'}`,
          className
        )}
      >
        {title && (
          <h2 className="flex items-center leading-none py-2">
            {icon}
            {title}
          </h2>
        )}
        {children}
      </section>
    </>
  )
}

// Composant qui va organiser les sections en colonnes
export const ContentWithImagesLayout: React.FC<{ sections: SectionProps[] }> = ({ sections }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Colonne de gauche : seulement la section "Images" */}
      <div className="lg:w-1/4 p-4 max-h-screen overflow-y-auto">
        {sections
          .filter((section) => section.title === 'Images')
          .map((section, index) => (
            <Section key={index} title={section.title} className={section.className} size={section.size} separator={section.separator}>
              {section.children}
            </Section>
          ))}
      </div>

      {/* Colonne de droite : autres sections */}
      <div className="lg:w-3/4 p-4 max-h-screen overflow-y-auto">
        {sections
          .filter((section) => section.title !== 'Images')
          .map((section, index) => (
            <Section key={index} title={section.title} className={section.className} size={section.size} separator={section.separator}>
              {section.children}
            </Section>
          ))}
      </div>
    </div>
  )
}
