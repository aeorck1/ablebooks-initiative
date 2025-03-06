"use client"

import { useState, useCallback } from "react"
import PhotoAlbum from "react-photo-album"
import Lightbox from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"
import "yet-another-react-lightbox/plugins/captions.css"

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

  // Handle click on an image to open the lightbox
  const handleClick = useCallback((index: number) => {
    setIndex(index)
  }, [])

  // Close the lightbox
  const handleClose = () => {
    setIndex(-1)
  }

  // Format images for PhotoAlbum
  const photos = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
    alt: image.alt,
  }))

  // Format images for Lightbox
  const slides = images.map((image) => ({
    src: image.src,
    alt: image.alt,
    width: image.width,
    height: image.height,
    description: image.alt,
  }))

  return (
    <div className="gallery-container gallery">
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        onClick={({ index }) => handleClick(index)}
  
        spacing={4}
        columns={(containerWidth) => {
          if (containerWidth < 640) return 1
          if (containerWidth < 768) return 2
          if (containerWidth < 1024) return 3
          return 0
        }}
      />
  
      <Lightbox
        open={index >= 0}
        index={index}
        close={handleClose}
        slides={slides}
        plugins={[Thumbnails, Zoom, Captions]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
        captions={{
          showToggle: false,
          descriptionTextAlign: "center",
          hidden: true,
        }}
      />
    </div>
  );
  
}

