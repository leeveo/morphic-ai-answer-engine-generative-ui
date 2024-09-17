import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { RightSidebar } from '@/components/right-sidebar'
import { SearchResultsImageSection } from '@/components/search-results-image'
import { SearchSection } from '@/components/search-section'

// Définir la police Google Inter
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

// Exporter les métadonnées de la page
export const metadata: Metadata = {
  title: 'Adeliade',
  description: 'ChatBot de Anne Kerdi, passionnée de Bretagne, je partage mes découvertes.',
}

// Fonction RootLayout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Le div contenant principal, avec la police globale appliquée
    <div className={cn('font-sans antialiased', fontSans.variable)}>
      <Header />
      <div className="flex">
        {/* Contenu principal */}
        <main className="flex gap-4 ml-[10px] mr-0 lg:mr-[300px] mt-[50px] mx-auto">
          {/* Première colonne - Images */}
          <div className="w-[300px]">
            <SearchResultsImageSection images={[]} query="Votre requête" />
          </div>
          {/* Deuxième colonne - Autres informations */}
          <div className="w-[680px]">
            <SearchSection result={[]} includeDomains={['domain1.com', 'domain2.com']} />
            {children}
          </div>
        </main>
        {/* Sidebar droite */}
        <div className="hidden lg:flex mt-[50px]">
          <RightSidebar />
        </div>
      </div>
      <Footer />
    </div>
  )
}
