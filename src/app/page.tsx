"use client"

import { useReveal } from "../../hooks/use-reveal"
import HeroSection from "../../components/hero-section"
import LatestBook from "../../components/latest-books"
import Objectives from "../../components/objectives"
import ImageGallery from "../../components/image-gallery"

export default function Page() {
  useReveal()

  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <LatestBook />
      <section>
        <div className="partners">
          <h1>Our Current Partners</h1>
          {/* Partners content */}
        </div>
      </section>
      <Objectives />
      <ImageGallery />
    </main>
  )
}

