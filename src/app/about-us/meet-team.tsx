"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function TeamSection() {
  // Add reveal effect for elements with the 'reveal' class
  useEffect(() => {
    const handleReveal = () => {
      const reveals = document.querySelectorAll(".reveal")

      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight
        const elementTop = reveals[i].getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active")
        } else {
          reveals[i].classList.remove("active")
        }
      }
    }

    window.addEventListener("scroll", handleReveal)
    handleReveal() // Initial check

    return () => window.removeEventListener("scroll", handleReveal)
  }, [])

  return (
    <section>
      <div id="meet-the-team" className="reveal">
        <h1>Meet the team</h1>

        <div className="team-members">
          <div className="team">
            <Image
              draggable={false}
              src="/image/Godwin-Daniel.jpg"
              alt="Godwin Daniel"
              className="img"
              width={250}
              height={250}
            />
            <div className="name">Godwin Daniel</div>

            <div className="role">Technical Director</div>
            <div className="social-media">
              <a href="https://facebook.com/datphonenixx" target="_blank" rel="noopener noreferrer">
                <Image src="/image/facebook.svg" alt="Facebook icon" width={24} height={24} />
              </a>
              <a href="https://twitter.com/godwinfinity" target="_blank" rel="noopener noreferrer">
                <Image src="/image/x-twitter.svg" alt="Twitter icon" width={24} height={24} />
              </a>
              <a href="https://instagram.com/datphonenixx" target="_blank" rel="noopener noreferrer">
                <Image src="/image/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://linkedin.com/in/ikwebe" target="_blank" rel="noopener noreferrer">
                <Image src="/image/linkedin-in.svg" alt="LinkedIn Icon" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="team">
            <Image
              draggable={false}
              src="/image/Douglas Izuchukwu.jpg"
              alt="A photo of Douglas Izuchukwu"
              className="img"
              width={250}
              height={250}
            />
            <div className="name">Douglas Izuchukwu</div>

            <div className="role">Writer</div>
            <div className="social-media">
              <a href="https://facebook.com/douglas.izuu" target="_blank" rel="noopener noreferrer">
                <Image src="/image/facebook.svg" alt="Facebook icon" width={24} height={24} />
              </a>
              <a href="https://twitter.com/douglas_izuu" target="_blank" rel="noopener noreferrer">
                <Image src="/image/x-twitter.svg" alt="Twitter icon" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/douglizu" target="_blank" rel="noopener noreferrer">
                <Image src="/image/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/douglas-izuchukwu-709359183/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/image/linkedin-in.svg" alt="LinkedIn Icon" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="team">
            <Image
              draggable={false}
              className="ife"
              src="/image/Ifeoma-Chime.jpg"
              alt="A photo of Ifeoma Chime"
              width={250}
              height={250}
            />
            <div className="name">Ifeoma Chime</div>

            <div className="role">Writer</div>
            <div className="social-media">
              <a href="https://www.facebook.com/eunice.onyemaechi.71" target="_blank" rel="noopener noreferrer">
                <Image src="/image/facebook.svg" alt="Facebook icon" width={24} height={24} />
              </a>
              <a href="https://twitter.com/Double_Ada" target="_blank" rel="noopener noreferrer">
                <Image src="/image/x-twitter.svg" alt="Twitter icon" width={24} height={24} />
              </a>
              <a
                href="https://instagram.com/datphonenixx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "none" }}
              >
                <Image src="/image/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/ifeoma-chime-ab4762228/" target="_blank" rel="noopener noreferrer">
                <Image src="/image/linkedin-in.svg" alt="LinkedIn Icon" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="team">
            <Image
              draggable={false}
              src="/image/Nehemiah Danjuma.jpg"
              alt="A photo of Nehemiah Danjuma"
              className="img"
              width={250}
              height={250}
            />
            <div className="name">Nehemiah Danjuma</div>

            <div className="role">Writer and Editor</div>
            <div className="social-media">
              <a href="https://www.facebook.com/toroson.nehemiah/" target="_blank" rel="noopener noreferrer">
                <Image src="/image/facebook.svg" alt="Facebook icon" width={24} height={24} />
              </a>
              <a href="https://twitter.com/nehemiahdan19" target="_blank" rel="noopener noreferrer">
                <Image src="/image/x-twitter.svg" alt="Twitter icon" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/danshanum/" target="_blank" rel="noopener noreferrer">
                <Image src="/image/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/nehemiah-danjuma/" target="_blank" rel="noopener noreferrer">
                <Image src="/image/linkedin-in.svg" alt="LinkedIn Icon" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="team">
            <Image
              draggable={false}
              src="/image/Aanuoluwapo Omoleye.png"
              alt="A photo of Aanuoluwapo Omoleye"
              className="img"
              width={250}
              height={250}
            />
            <div className="name">Aanuoluwapo Omoleye</div>

            <div className="role">Director</div>
            <div className="social-media">
              <a href="https://facebook.com/omoleye.mercy" target="_blank" rel="noopener noreferrer">
                <Image src="/image/facebook.svg" alt="Facebook icon" width={24} height={24} />
              </a>
              <a href="https://twitter.com/Aanu_Omoleye" target="_blank" rel="noopener noreferrer">
                <Image src="/image/x-twitter.svg" alt="Twitter icon" width={24} height={24} />
              </a>
              <a href="https://www.instagram.com/aanu_omoleye/" target="_blank" rel="noopener noreferrer">
                <Image src="/image/instagram.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="https://www.linkedin.com/in/aanuoluwapo-omoleye" target="_blank" rel="noopener noreferrer">
                <Image src="/image/linkedin-in.svg" alt="LinkedIn Icon" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

