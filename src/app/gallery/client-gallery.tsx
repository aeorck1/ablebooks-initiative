"use client"

import { useState, useEffect } from "react"
import Gallery from "./gallery-client"

// This is an alternative approach using client-side data fetching
export default function ClientGallery() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGalleryImages() {
      try {
        const response = await fetch("/api/gallery")

        if (!response.ok) {
          throw new Error(`Failed to fetch gallery images: ${response.status} ${response.statusText}`)
        }

        const data = await response.json()

        if (!data.images || !Array.isArray(data.images)) {
          throw new Error("Invalid response format: images array not found")
        }

        setImages(data.images)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching gallery images:", err)
        setError(err instanceof Error ? err.message : "An unknown error occurred")
        setLoading(false)
      }
    }

    fetchGalleryImages()
  }, [])

  // We'll pass the loading state to Gallery component
  // and let it handle the skeleton loading
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>

      {error ? (
        <div className="text-center py-8">
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
          >
            Try Again
          </button>
        </div>
      ) : (
        <Gallery images={images} />
      )}
    </div>
  )
}

