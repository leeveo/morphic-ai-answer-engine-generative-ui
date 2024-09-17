import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { RightSidebar } from '@/components/right-sidebar' // Importer la sidebar droite
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

import { SearchResultsImageSection } from '@/components/search-results-image';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  // Ici, les images doivent être chargées dynamiquement à partir de votre logique de recherche
  // Utilisez votre propre logique pour charger les images (via une API, state global, etc.)
  const images = [/* Les images dynamiques seront passées ici */];
  const query = 'Votre requête de recherche'; // La requête peut être dynamique également

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
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
              <main className="grid grid-cols-1 lg:grid-cols-3 gap-4 ml-[10px] mr-0 lg:mr-[300px] mt-[50px] max-w-[760px] mx-auto">
                {/* Colonne 1 : Occupant 2/3 de la largeur */}
                <div className="lg:col-span-2">
                  {children}
                </div>

                {/* Colonne 2 : Occupant 1/3 de la largeur, Carrousel d'images */}
                <div className="lg:col-span-1">
                  {/* Intégrer le carrousel d'images dans la deuxième colonne */}
                  <SearchResultsImageSection images={images} query={query} />
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
      </body>
    </html>
  );
}
