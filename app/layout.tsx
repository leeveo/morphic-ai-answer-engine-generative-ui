'use client';  // Activer le rendu côté client si nécessaire

import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { RightSidebar } from '@/components/right-sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { SearchResultsImageSection } from '@/components/search-results-image';
import { SearchSection } from '@/components/search-section'; // Ajout du composant SearchSection

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://adeliade.ai'),
  title: 'Adeliade',
  description: 'ChatBot de Anne Kerdi, passionnée de Bretagne, je partage mes découvertes.',
  openGraph: {
    title: 'Adeliade',
    description: 'ChatBot de Anne Kerdi, passionnée de Bretagne, je partage mes découvertes.'
  },
  twitter: {
    title: 'Adeliade',
    description: 'ChatBot de Anne Kerdi, passionnée de Bretagne, je partage mes découvertes.',
    card: 'summary_large_image',
    creator: '@leeveo'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AppStateProvider>
        <div className={cn('font-sans antialiased', fontSans.variable)}>
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
                {children}
              </div>
            </main>

            {/* Sidebar droite - Masquée sur petits écrans */}
            <div className="hidden lg:flex mt-[50px]">
              <RightSidebar />
            </div>
          </div>
          <Footer />
          <Toaster />
        </div>
      </AppStateProvider>
    </ThemeProvider>
  )
}
