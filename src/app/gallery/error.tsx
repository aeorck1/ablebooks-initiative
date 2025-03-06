"use client"

import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Something went wrong!</h1>
      <p className="mb-4 text-red-500">{error.message || "Failed to load gallery"}</p>
      <button onClick={reset} className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90">
        Try again
      </button>
    </div>
  )
}

