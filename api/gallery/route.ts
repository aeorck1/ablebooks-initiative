import { readdir } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"
import sharp from "sharp"

export async function GET() {
  try {
    // Define the directory path relative to the public folder
    const directoryPath = path.join(process.cwd(), "public/image/more_photos")

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

    const images = await Promise.all(imagePromises)

    return NextResponse.json({ images })
  } catch (error) {
    console.error("Error reading directory:", error)
    return NextResponse.json({ error: "Failed to load gallery images" }, { status: 500 })
  }
}

