export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
        <div className="flex justify-center items-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }
  
  