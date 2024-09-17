import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { RightSidebar } from '@/components/right-sidebar' // Importer la sidebar droite
import { Toaster } from '@/components/ui/sonner'
import { AppStateProvider } from '@/lib/utils/app-state'
import { SearchResultsImageSection } from '@/components/search-results-image';  // Assurez-vous que le chemin est correct
import { ChatPanel } from '@/components/chat-panel'; 
import { SearchResultsSection } from '@/components/search-section';  // Utiliser des accolades pour un export nommé
import { AnswerSection } from '@/components/answer-section';  // Utiliser des accolades pour un export nommé
import { SearchSection } from '@/components/search-section';


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

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
              {/* Contenu central divisé en deux colonnes */}
              <main className="flex flex-col lg:flex-row w-full">
                {/* Colonne de gauche - Images */}
                <div className="w-full lg:w-1/2 p-4">
                  <SearchResultsImageSection images={images} query={query} />
                </div>

                {/* Colonne de droite - Autres composants */}
                <div className="w-full lg:w-1/2 p-4">
                  {children}
                  <ChatPanel />
                  <SearchResultsSection />
                  <AnswerSection />
                </div>
              </main>

              {/* Sidebar droite */}
              <div className="hidden lg:flex">
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
