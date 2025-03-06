import { readdir } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"
import { stat } from "fs/promises"
import sharp from "sharp"

// This API route can be used if you want to fetch gallery images client-side
export async function GET() {
  try {
    // Define the directory path relative to the public folder
    const directoryPath = path.join(process.cwd(), "public/image/more_photos")

    // Read the directory
    const files = await readdir(directoryPath)

    // Filter for image files
    const imageExtensions = ["jpg", "jpeg", "png", "gif", "heic", "webp"]
    const images = files.filter((file) => {
      const extension = path.extname(file).toLowerCase().substring(1)
      return imageExtensions.includes(extension)
    })

    // Get image dimensions and create image objects
    const imagePromises = images.map(async (image, index) => {
      const imagePath = path.join(directoryPath, image)

      try {
        // Get file stats
        const fileStats = await stat(imagePath)

        // Get image dimensions using sharp
        const metadata = await sharp(imagePath).metadata()

        return {
          id: index,
          src: `public/image/more_photos/${image}`,
          thumbnail: `public/image/more_photos/${image}`,
          alt: image.replace(/\.[^/.]+$/, ""), // Remove file extension for alt text
          width: metadata.width || 200,
          height: metadata.height || 800,
          size: fileStats.size,
          created: fileStats.birthtime,
        }
      } catch (error) {
        console.error(`Error processing image ${image}:`, error)
        return {
          id: index,
          src: `public/image/more_photos/${image}`,
          thumbnail: `public/image/more_photos/${image}`,
          alt: image.replace(/\.[^/.]+$/, ""),
          width: 1200,
          height: 800,
          size: 0,
          created: new Date(),
        }
      }
    })

    const imageObjects = await Promise.all(imagePromises)

    return NextResponse.json({ images: imageObjects })
  } catch (error) {
    console.error("Error reading gallery directory:", error)
    return NextResponse.json({ error: "Failed to load gallery images" }, { status: 500 })
  }
}

