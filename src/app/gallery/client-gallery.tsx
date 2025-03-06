"use client"

import { useState, useEffect } from "react"
// import Gallery from "./gallery-client"
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
        console.log(response)

        if (!response.ok) {
          throw new Error("Failed to fetch gallery images")
        }

        const data = await response.json()
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

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
        >
          Try Again
        </button>
      </div>
    )
  }

  return <Gallery images={images} />
}

