/* eslint-disable @next/next/no-img-element */
'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { useEffect, useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { SearchResultImage } from '@/lib/types'

interface SearchResultsImageSectionProps {
  images: SearchResultImage[]
  query?: string
}

export const SearchResultsImageSection: React.FC<
  SearchResultsImageSectionProps
> = ({ images, query }) => {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Update the current and count state when the carousel api is available
  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  // Scroll to the selected index
  useEffect(() => {
    if (api) {
      api.scrollTo(selectedIndex, true)
    }
  }, [api, selectedIndex])

  if (!images || images.length === 0) {
    return <div className="text-muted-foreground">Pas d images trouvee</div>
  }

  // If enabled the include_images_description is true, the images will be an array of { url: string, description: string }
  // Otherwise, the images will be an array of strings
  let convertedImages: { url: string; description: string }[] = []
  if (typeof images[0] === 'string') {
    convertedImages = (images as string[]).map(image => ({
      url: image,
      description: ''
    }))
  } else {
    convertedImages = images as { url: string; description: string }[]
  }

  
}
