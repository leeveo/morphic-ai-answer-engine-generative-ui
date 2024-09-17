import type { Metadata, Viewport } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Sidebar } from '@/components/sidebar';
import { RightSidebar } from '@/components/right-sidebar'; // Importer la sidebar droite
import { Toaster } from '@/components/ui/sonner';
import { AppStateProvider } from '@/lib/utils/app-state';
import type { SearchResultImage } from '@/lib/types'; // Import du type d'images

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
});

const title = 'Adeliade';
const description =
  'ChatBot de Anne Kerdi, passionnee de Bretagne, je partage mes decouvertes.';

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
  // Exemple d'images statiques, tu peux remplacer par des images dynamiques via API
  const images: SearchResultImage[] = [
    { url: 'https://www.leeveo.tv/wp-content/uploads/2024/09/image001.jpg', description: 'Image 1' },
    { url: 'https://www.leeveo.tv/wp-content/uploads/2024/09/image002.jpg', description: 'Image 2' },
    { url: 'https://www.leeveo.tv/wp-content/uploads/2024/09/image003.jpg', description: 'Image 3' }
  ];

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
                <Sidebar images={images} /> {/* Ajout de la propriété images */}
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
  );
}
