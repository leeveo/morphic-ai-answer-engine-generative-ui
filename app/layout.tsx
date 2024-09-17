import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { RightSidebar } from '@/components/right-sidebar'; // Sidebar droite
import { Toaster } from '@/components/ui/sonner';
import { AppStateProvider } from '@/lib/utils/app-state';
import { LeftSidebar } from '@/components/left-sidebar'; // Sidebar gauche

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

const title = 'Adeliade';
const description = 'ChatBot de Anne Kerdi, passionnee de Bretagne, je partage mes decouvertes.';

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
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
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

              {/* Sidebar gauche avec 300px de largeur */}
              <div className="hidden lg:flex mt-[50px]">
                <LeftSidebar result={undefined} includeDomains={['google.com']} />
              </div>

              {/* Contenu central - Grille avec deux colonnes */}
              <main className="flex-1 gap-4 ml-[10px] mr-0 lg:mr-[300px] mt-[50px] mx-auto">
                {children}
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
