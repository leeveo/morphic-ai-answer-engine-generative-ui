import React from 'react'
import { ThemeProvider } from 'next-themes'
import { cn } from '@/lib/utils'
import { AppStateProvider } from '@/context/app-state'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import Footer from '@/components/footer'
import { Toaster } from '@/components/ui/toaster'
import { fontSans } from '@/lib/fonts'

export const metadata = {
  openGraph: {
    title: 'Your Title',
    description: 'Your Description'
  },
  twitter: {
    title: 'Your Title',
    description: 'Your Description',
    card: 'summary_large_image',
    creator: '@miiura'
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
            <main className="mt-300px"> {/* Ajout d'une marge supérieure pour compenser la hauteur du header */}
              {children}
            </main>
            <Sidebar />
            <Footer />
            <Toaster />
          </AppStateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}