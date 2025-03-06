"use client"

import { useEffect } from "react"

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal")

    const revealCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }

    const observer = new IntersectionObserver(revealCallback, {
      threshold: 0.1,
    })

    reveals.forEach((reveal) => observer.observe(reveal))

    return () => observer.disconnect()
  }, [])
}

