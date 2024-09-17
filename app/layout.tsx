'use client'; // Ajoutez ceci au tout début du fichier pour activer le rendu client

import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { RightSidebar } from '@/components/right-sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

const title = 'Adeliade'
const description =
  'ChatBot de Anne Kerdi, passionnee de Bretagne, je partage mes decouvertes.'

export const metadata: Metadata = {
  metadataBase: new URL('https://adeliade.ai'),
  title,
  description,
  openGraph: {
    title,
    description
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@leeveo'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

import { SearchResultsImageSection } from '@/components/search-results-image';
import { SearchSection } from '@/components/search-section'; // Ajout du composant SearchSection

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AppStateProvider>
        <Header />
        <div className="flex">
          
          {/* Contenu central - Grille avec deux colonnes */}
          <main className="flex gap-4 ml-[10px] mr-0 lg:mr-[300px] mt-[50px] mx-auto">
            
            {/* Colonne 1 : Occupant 300px de largeur */}
            <div className="w-[300px]">
              <SearchResultsImageSection images={/* Insérer les images dynamiques ici */} query="Votre requête" />
            </div>

            {/* Colonne 2 : Occupant 680px de largeur */}
            <div className="w-[680px]">
              <SearchSection result={/* Insérer le résultat de recherche ici */} includeDomains={['domain1.com', 'domain2.com']} />
              {children} {/* Vous pouvez garder cela si vous voulez un contenu supplémentaire */}
            </div>

          </main>

          {/* Sidebar droite - Masquée sur petits écrans */}
          <div className="hidden lg:flex mt-[50px]">
            <RightSidebar />
          </div>
        </div>
        <Footer />
        <Toaster />
      </AppStateProvider>
    </ThemeProvider>
  )
}
