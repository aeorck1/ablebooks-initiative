import Image from "next/image"

export default function MissionVisionSection() {
  return (
    <section>
      <div className="books" id="who-are-we">
        <div className="mission-vision">
          <div className="container_1">
            <h2 className="mobile_header">Our Mission</h2>
            <div className="mission">
              <div className="mission-words">
                <h1>Our Mission</h1>
                {/* <Image 
                  src="/resources/images/Our Mission.jpg" 
                  alt="Image of a girl with blue eyes holding a book titled Dollyword" 
                  className="mobile"
                  width={400}
                  height={300}
                /> */}
                <p>
                  We are on a mission to fill libraries and bookshelves with disability-inclusive illustrative
                  storybooks that aim to have children who say, "Yes, that is me." Our commitment is to impact early
                  reading/learning experiences and pave the path of inclusion and representation for every child with a
                  disability who reads our books.
                </p>
              </div>
              <Image src="/image/mission.jpg" alt="mission" width={500} height={400} />
              {/* <h1 className="mobile-1">Our Mission</h1> */}
            </div>
          </div>
          <div className="container_2 reveal">
            <h2 className="mobile_header">Our Vision</h2>
            <div className="vision">
              <Image
                src="/image/Our Vision.jpg"
                alt="Children reading books in class"
                width={500}
                height={400}
              />
              <div className="mission-words">
                <h1 className="vis">Our Vision</h1>
                <p>
                  To set the legacy of disability-inclusive storybooks in schools across 54 African countries and in
                  over 50 languages.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

