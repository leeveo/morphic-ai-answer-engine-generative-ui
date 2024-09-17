'use client'

import { useEffect, useState } from 'react'
import { SearchResultsImageSection } from '@/components/search-results-image'

export default function ClientComponent() {
  const [images, setImages] = useState([])

  // Exemple de fonction pour obtenir les résultats de recherche d'images dynamiques
  const fetchImages = async (query) => {
    // Remplacez cette URL par l'URL de votre API ou service de recherche d'images
    const response = await fetch(`/api/search-images?query=${query}`)
    const data = await response.json()
    setImages(data.images)
  }

  useEffect(() => {
    // Exemple de requête de recherche d'images
    fetchImages('example query')
  }, [])

  return (
    <SearchResultsImageSection images={images} query="Example Query" />
  )
}