import React, { ReactNode } from 'react'
import type { Viewport } from 'next'
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
import { metadata } from './metadata' // Importer les métadonnées
import ClientComponent from '@/components/ClientComponent' // Importer le composant client

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
}

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <AppStateProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className={cn('min-h-screen bg-gray-100 font-sans', fontSans.variable)}>
          <Header />
          <div className="flex">
            <Sidebar>
              <ClientComponent /> {/* Utiliser le composant client ici */}
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