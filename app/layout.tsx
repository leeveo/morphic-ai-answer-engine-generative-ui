'use client'; // Indique que ce composant est un Client Component

import { Sidebar } from '@/components/sidebar';
import { RightSidebar } from '@/components/right-sidebar';
import { SearchResultImage } from '@/lib/types';
import { useEffect, useState } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { AppStateProvider } from '@/lib/utils/app-state';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const [images, setImages] = useState<SearchResultImage[]>([]);

  // Exemple de récupération d'images (à remplacer par votre logique)
  useEffect(() => {
    async function fetchImages() {
      // Remplacez par votre appel API ou autre logique pour récupérer les images
      const fetchedImages = await fetch('/api/images').then(res => res.json());
      setImages(fetchedImages);
    }

    fetchImages();
  }, []);

  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppStateProvider>
            <Header />
            <div className="flex">
              {/* Sidebar gauche - Masquée sur petits écrans */}
              <div className="hidden lg:flex">
                {/* Passer les images récupérées à la Sidebar */}
                <Sidebar images={images} />
              </div>

              {/* Contenu central */}
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
