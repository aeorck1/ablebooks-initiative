import { readdir } from "fs/promises"
import path from "path"
import sharp from "sharp"
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
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"]
    const imageFiles = files.filter((file) => {
      const extension = path.extname(file).toLowerCase().substring(1)
      return imageExtensions.includes(extension)
    })

    // Create image objects with dimensions
    const imagePromises = imageFiles.map(async (file, index) => {
      const filePath = path.join(directoryPath, file)

      try {
        // Get image dimensions using sharp
        const metadata = await sharp(filePath).metadata()

        return {
          id: index,
          src: `/image/more_photos/${file}`,
          thumbnail: `/image/more_photos/${file}`,
          alt: file.replace(/\.[^/.]+$/, ""), // Remove file extension for alt text
          width: metadata.width || 1200,
          height: metadata.height || 800,
        }
      } catch (err) {
        console.error(`Error processing image ${file}:`, err)
        // Return default dimensions if we can't get the actual ones
        return {
          id: index,
          src: `/image/more_photos/${file}`,
          thumbnail: `/image/more_photos/${file}`,
          alt: file.replace(/\.[^/.]+$/, ""),
          width: 1200,
          height: 800,
        }
      }
    })

    const imageObjects = await Promise.all(imagePromises)

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

