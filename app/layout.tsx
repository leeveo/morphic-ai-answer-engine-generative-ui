import type { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider' // Vérifiez si le chemin est correct
import Header from '@/components/header' // Assurez-vous que le chemin est correct
import Footer from '@/components/footer' // Assurez-vous que le chemin est correct
import { Sidebar } from '@/components/sidebar' // Assurez-vous que le chemin est correct
import { RightSidebar } from '@/components/right-sidebar' // Assurez-vous que le chemin est correct
import { Toaster } from '@/components/ui/sonner' // Assurez-vous que le chemin est correct
import { AppStateProvider } from '@/lib/utils/app-state' // Vérifiez si le chemin est correct

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
  children,
  result // Ajoutez result si nécessaire ici
}: Readonly<{
  children: React.ReactNode
  result?: any // Modifiez le type en fonction des données que vous attendez
}>) {
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
              {/* Sidebar gauche - Masquée sur petits écrans */}
              <div className="hidden lg:flex">
                <Sidebar result={result} />
              </div>

              {/* Contenu central - S'ajuste aux marges sur grands écrans */}
              <main className="flex-1 ml-0 lg:ml-[300px] mr-0 lg:mr-[300px] w-full">
                {children}
              </main>

              {/* Sidebar droite - Masquée sur petits écrans */}
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
  )
}
