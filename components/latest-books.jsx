import Image from "next/image"
import Link from "next/link"

export default function LatestBook() {
  return (
    <div className="booklog braimic reveal" id="books">
      <div className="inspiro">Our latest book</div>

      <div className="the-book">
        <div className="background funchia yellow-gold">
          <Image
            className="dolly"
            src="/image/dollyworld.jpg"
            alt="An illustration of Dolly, a young girl jumping in delight"
            width={400}
            height={600}
            priority
          />
          <Image src="/image/shadow.png" alt="shadow" width={400} height={100} className="shadow" />
        </div>
        <div className="contents stick">
          <p>
            You are welcome to explore "Dolly's World: Story of a Deaf Nigerian Girl," our latest storybook that brings
            to life the fascinating journey of Dolly, an 8-year-old girl with dreams as big as her heart. We invite you
            to be part of the story that celebrates diversity, inclusion, and the joy of reading.
          </p>
          <div className="but">
            <Link href="/books" className="but">
              Explore Library
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

