"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import "swiper/css/pagination"

const galleryImages = [
  "/image/Ablebooks Africa outreach1.jpeg",
  "/image/Ablebooks Africa outreach1.jpeg",
  "/image/Ablebooks Africa outreach6.jpg",
  "/image/Ablebooks Africa outreach3.jpg",
  "/image/Ablebooks Africa outreach9.jpeg",
  "/image/Ablebooks Africa outreach7.jpg",
  "/image/Ablebooks Africa outreach2.jpeg",
  "/image/Ablebooks Africa outreach4.jpg",
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section id="image-gallery" className="reveal">
      <h1 className="heading">Our Photo Gallery</h1>
      <div className="heading welcome">
        Welcome to the collection of our heartwarming photos from the book tour that feature moments of joy and
        interaction with young readers.
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={true}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + 1}`}
              width={300}
              height={300}
              onClick={() => setSelectedImage(image)}
              className="cursor-pointer"
            />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <a href="/gallery" className="more">
            View More
          </a>
        </SwiperSlide>
      </Swiper>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <Image
            src={selectedImage || "/placeholder.svg"}
            alt="Full size image"
            width={800}
            height={600}
            className="max-w-[90vw] max-h-[90vh] object-contain"
          />
        </div>
      )}
    </section>
  )
}

