"use client"

import { useState } from "react"
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"

interface ImageObject {
  id: number
  src: string
  thumbnail: string
  alt: string
  width: number
  height: number
}

interface GalleryProps {
  images: ImageObject[]
}

export default function Gallery({ images }: GalleryProps) {
  const [index, setIndex] = useState(-1)

  // Format images for PhotoAlbum
  const photos = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt,
  }))

  return (
    <div className="gallery-container">
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        spacing={8}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1
          if (containerWidth < 768) return 2
          if (containerWidth < 1024) return 3
          return 4
        }}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        plugins={[Thumbnails, Zoom]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
        }}
      />
    </div>
  )
}

