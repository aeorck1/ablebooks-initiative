import Link from "next/link";
import Image from "next/image";

export default function BooksPage() {
  return (
      
      <>
        <section>
          <div className="headings text-3xl text-white-100">
            <h3>
              {" "}
              In 2023, we published our first book titled{" "}
              <span>
                {" "}
                <Link href="#library">
                  "Dolly's World: Story of a Deaf Nigerian Girl"
                </Link>{" "}
              </span>
              . The illustrated book tells the story of Dolly, a happy 8 year
              old girl who loves math, helping her mom in the market, playing
              with friends, growing up in a loving home and multicultural
              environment, and dreams of becoming a Neurosurgeon.
            </h3>
            <h3>
              With this first publication, we embarked on a book tour to{" "}
              <span>
                {" "}
                <Link href="./gallery">
                  25 Deaf schools in 20 States across the 6 Geopolitical zones
                  in Nigeria
                </Link>{" "}
              </span>
              , donating 1,000 copies of the books to the schools libraries and
              classroom shelves and engaging young deaf readers in the art of
              reading an illustrated storybook. This book tour and donation
              project positively impacted 5,000+ Deaf young readers by
              developing a positive reading culture in them and giving them a
              sense of representation, completeness, and inspiration to dream
              big.
            </h3>
          </div>
        </section>
        <section>
          <div className="package" id="library">
            <div className="cont-header">
              <h3 className="mt-30px">New Release</h3>
            
            </div>
            <div className="books-library">
              <div className="book">
                <div className="cover">
                  <Image
                    src="/image/dollyworld.jpg"
                    alt="Dolly's World"
                    width={200}
                    height={300}
                  />
                  
                </div>
                <div className="title">Dolly's World</div>
                <a
                  className="read"
                style={{ color: "white", backgroundColor: "#69180b", padding:"5px 15px", width:"fit-content", borderRadius:"5px", margin:"0 auto" }}  
                  href="https://drive.google.com/file/d/18ZuTRpmj-Egmq7NT5S3QpPvxjBdzf1UZ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                </a>

         
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="package" id="library">
            <div className="cont-header">
              <h3>Book Library</h3>
              {/* <a href="#">See More</a> */}
            </div>
            <div className="books-library library-override">
              <div className="book">
                <div className="cover">
                  <Image
                    src="/image/dollyworld.jpg"
                    alt="Dolly's World"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="title">Dolly's World</div>
                <a
                  className="read text-black"
                  style={{ color: "white", backgroundColor: "#69180b", padding:"5px 15px", width:"fit-content", borderRadius:"5px", margin:"0 auto" }}  
                  href="https://drive.google.com/file/d/18ZuTRpmj-Egmq7NT5S3QpPvxjBdzf1UZ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                </a>
              </div>

              <div className="book">
                <div className="information">Coming Soon...</div>
                <div className="cover">
                  <Image
                    src="/image/dollyworld.jpg"
                    alt="Dolly's World"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="title">Dolly's World</div>
                {/* <div className="author">Aanuoluwapo Omoleye</div> */}
              </div>

              <div className="book">
                <div className="information">Coming Soon...</div>
                <div className="cover">
                  <Image
                    src="/image/dollyworld.jpg"
                    alt="Dolly's World"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="title">Dolly's World</div>
                {/* <div className="author">Aanuoluwapo Omoleye</div> */}
              </div>

              <div className="book">
                <div className="information">Coming Soon...</div>
                <div className="cover">
                  <Image
                    src="/image/dollyworld.jpg"
                    alt="Dolly's World"
                    width={200}
                    height={300}
                  />
                </div>
                <div className="title">Dolly's World</div>
                {/* <div className="author">Aanuoluwapo Omoleye</div> */}
              </div>
            </div>
          </div>
        </section>
        </>
  );
}
