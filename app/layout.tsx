import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Sidebar } from '@/components/sidebar'
import RightSidebar from '@/components/right-sidebar' // Importer la sidebar droite par défaut
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

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter&display=swap" />
      </head>
      <body className={cn(fontSans.variable, 'font-sans antialiased')}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AppStateProvider>
            <Header />
            <div className="layout">
              <Sidebar />
              <main>{children}</main>
              <RightSidebar /> {/* Ajout de la barre latérale droite */}
            </div>
            <Footer />
            <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}