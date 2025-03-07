import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="firstOfIt xy ri">
      <div className="art">
        <div className="overlay"></div>
        <div className="biggie herodom">
          <div className="slider">
            <Image
              src="/image/desktop-1.jpg"
              alt="Hero image"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto"
            />
          </div>

          <div className="content word left-capt">
            <h1>Bridging the gap with illustrative and Representative storybooks.</h1>

            <div className="get book">
              Welcome to AbleBooks Initiative where we nurture the early learning journey of children with disabilities
              through disability-inclusive storytelling.
            </div>

            <div className="donate">
              <Link href="/support">Sponsor a Book</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

