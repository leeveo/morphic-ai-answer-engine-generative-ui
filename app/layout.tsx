import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import { RightSidebar } from '@/components/right-sidebar'
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { SearchResultsImageSection } from '@/components/search-results-image'
import { useEffect, useState } from 'react'

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

export default function Layout({ children }) {
  const [images, setImages] = useState([])

  // Exemple de fonction pour obtenir les résultats de recherche d'images dynamiques
  const fetchImages = async (query) => {
    // Remplacez cette URL par l'URL de votre API ou service de recherche d'images
    const response = await fetch(`/api/search-images?query=${query}`)
    const data = await response.json()
    setImages(data.images)
  }

  useEffect(() => {
    // Exemple de requête de recherche d'images
    fetchImages('example query')
  }, [])

  return (
    <AppStateProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className={cn('min-h-screen bg-gray-100 font-sans', fontSans.variable)}>
          <Header />
          <div className="flex">
            <Sidebar>
              <SearchResultsImageSection images={images} query="Example Query" /> {/* Ajoutez le carrousel d'images ici */}
            </Sidebar>
            <main className="flex-1">
              {children}
            </main>
            <RightSidebar />
          </div>
          <Footer />
          <Toaster />
        </div>
      </ThemeProvider>
    </AppStateProvider>
  )
}