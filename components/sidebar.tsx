'use client'; // Indique que ce composant doit être rendu côté client

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlusCircle } from 'lucide-react';
import HistoryContainer from './history-container';

interface SearchResultImage {
  url: string;
  description: string;
}

export async function Sidebar() {
  const [images, setImages] = useState<SearchResultImage[]>([]);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    // Exemple d'appel API pour récupérer les images dynamiques
    async function fetchImages() {
      // Remplacer ceci par ton propre appel API ou logique pour charger les images dynamiques
      const fetchedImages: SearchResultImage[] = await fetch('/api/images').then(res => res.json());
      setImages(fetchedImages);
    }

    fetchImages();
  }, []);

  useEffect(() => {
    if (api) {
      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap() + 1);
      api.on('select', () => {
        setCurrent(api.selectedScrollSnap() + 1);
      });
    }
  }, [api]);

  useEffect(() => {
    if (api) {
      api.scrollTo(selectedIndex, true);
    }
  }, [api, selectedIndex]);

  return (
    <div className="h-screen p-2 fixed top-0 left-0 flex flex-col justify-center pb-24 hidden sm:flex sidebar-container w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4"
         style={{ marginTop: '50px' }}>
      
      {/* Carrousel d'images */}
      <div className="w-full space-y-4">
        <h2 className="text-center text-lg font-bold">Résultats de la recherche</h2>
        <div className="flex flex-wrap gap-2">
          {images.length === 0 ? (
            <div className="text-muted-foreground">Pas d&#39;images trouvées</div>
          ) : (
            images.slice(0, 4).map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div
                    className="w-[calc(50%-0.5rem)] md:w-[calc(25%-0.5rem)] aspect-video cursor-pointer relative"
                    onClick={() => setSelectedIndex(index)}
                  >
                    <Card className="flex-1 h-full">
                      <CardContent className="p-2 h-full w-full">
                        <img
                          src={image.url}
                          alt={`Image ${index + 1}`}
                          className="h-full w-full object-cover"
                          onError={(e) => (e.currentTarget.src = '/images/placeholder-image.png')}
                        />
                      </CardContent>
                    </Card>
                    {index === 3 && images.length > 4 && (
                      <div className="absolute inset-0 bg-black/30 rounded-md flex items-center justify-center text-white/80 text-sm">
                        <PlusCircle size={24} />
                      </div>
                    )}
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-3xl max-h-[80vh] overflow-auto">
                  <DialogHeader>
                    <DialogTitle>Rechercher des Images</DialogTitle>
                    <DialogDescription className="text-sm">Détails de la recherche</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <Carousel setApi={setApi} className="w-full bg-muted max-h-[60vh]">
                      <CarouselContent>
                        {images.map((img, idx) => (
                          <CarouselItem key={idx}>
                            <div className="p-1 flex items-center justify-center h-full">
                              <img
                                src={img.url}
                                alt={`Image ${idx + 1}`}
                                className="h-auto w-full object-contain max-h-[60vh]"
                                onError={(e) => (e.currentTarget.src = '/images/placeholder-image.png')}
                              />
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="absolute inset-8 flex items-center justify-between p-4">
                        <CarouselPrevious className="w-10 h-10 rounded-full shadow focus:outline-none">
                          <span className="sr-only">Précédent</span>
                        </CarouselPrevious>
                        <CarouselNext className="w-10 h-10 rounded-full shadow focus:outline-none">
                          <span className="sr-only">Suivant</span>
                        </CarouselNext>
                      </div>
                    </Carousel>
                    <div className="py-2 text-center text-sm text-muted-foreground">
                      {current} sur {count}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))
          )}
        </div>
      </div>

      {/* Historique */}
      <HistoryContainer location="sidebar" />
    </div>
  );
}
