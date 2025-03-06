import type React from "react"
import type { Metadata } from "next"
import { Roboto, Anton } from "next/font/google"
import Header from "../../components/header"
import Footer from "../../components/footer"
import "./globals.css"
import "./styles.scss"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
})

const anton = Anton({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "ABLEBOOKS AFRICA",
  description:
    "Bridging The Gap With Illustrative And Representative Storybooks. Welcome to AbleBooks Africa where we nurture the early learning journey of children with disabilities through disability-inclusive storytelling",
  icons: {
    icon: "/images/fav-icon.ico",
  },
  verification: {
    google: "DjjnPDgx-j9guQp8nlfoeP3NE6af8N9fekOF4qvlFhM",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

