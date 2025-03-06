import { readdir } from "fs/promises"
import path from "path"
import Gallery from "./gallery-client"
import "./gallery.css"
// This is a Server Component that reads the directory and passes image data to the client component
export default async function GalleryPage() {
  // Define the directory path relative to the public folder
  const directoryPath = path.join(process.cwd(), "public/image/more_photos")

  try {
    // Read the directory
    const files = await readdir(directoryPath)

    // Filter for image files
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "heic", "webp"]
    const images = files.filter((file) => {
      const extension = path.extname(file).toLowerCase().substring(1)
      return imageExtensions.includes(extension)
    })

    // Create image objects for the gallery
    const imageObjects = images.map((image, index) => {
      return {
        id: index,
        src: `/image/more_photos/${image}`,
        thumbnail: `/image/more_photos/${image}`,
        alt: image.replace(/\.[^/.]+$/, ""), // Remove file extension for alt text
        width: 1200, // These will be overridden by the actual image dimensions
        height: 800, // These will be overridden by the actual image dimensions
      }
    })

    return (
      <main className="mx-auto px-4 py-8 gallery">
        <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
        <Gallery images={imageObjects} />
      </main>
    )
  } catch (error) {
    console.error("Error reading directory:", error)
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
        <p className="text-center text-red-500">Error loading gallery images.</p>
      </main>
    )
  }
}

// This is a server route that returns the Server Component