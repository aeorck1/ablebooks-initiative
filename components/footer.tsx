import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer>
      <div className="leggo">
        <div className="logo">
          <Image src="/image/logo.png" alt="logo" width={150} height={50} className="w-auto h-auto" />
          <p>ABLEBOOKS INITATIVE</p>
        </div>

        <div className="navigate">
          <h2>Links</h2>
          <div className="nav">
            <Link href="/">Home</Link>
          </div>
          <div className="nav">
            <Link href="/about-us">Who we are</Link>
          </div>
          <div className="nav">
            <Link href="/support">Support Us</Link>
          </div>
          <div className="nav">
            <Link href="/books">Books</Link>
          </div>
          <div className="nav">
            <a href="https://blog.ablebooksafrica.com" target="_blank" rel="noopener noreferrer">
              Our Blog
            </a>
          </div>
          <div className="nav">
            <Link href="/gallery">Our Gallery</Link>
          </div>
        </div>

        <div className="social-media">
          <div className="nest">
            <h2>Social Links</h2>
            <div className="social-connect">
              <div className="social">
                <a
                  href="https://www.facebook.com/profile.php?id=61550243214499&mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image src="/image/facebook.svg" alt="Facebook logo" width={24} height={24} />
            
                </a>
              </div>
              <div className="social">
                <a href="https://x.com/AbleBooksAfrica" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/x-twitter.svg" alt="Twitter logo" width={24} height={24} />
                </a>
              </div>
              <div className="social">
                <a href="https://www.linkedin.com/company/ablebooks-africa/" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/linkedin-in.svg" alt="Linkedin logo" width={24} height={24} />
                </a>
              </div>
              <div className="social">
                <a href="https://instagram.com/ablebooksafrica/" target="_blank" rel="noopener noreferrer">
                  <Image src="/image/instagram.svg" alt="Instagram logo" width={24} height={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mobile-mail">
            <div id="phone">
              <Image src="/image/phone-solid.svg" alt="Phone" width={24} height={24} />
              <a href="tel:+2347065475016">
                {" "}
                +2347065475016 <b>(SMS Only)</b>
              </a>
            </div>

            <div id="mail">
              <Image src="/image/envelope-solid.svg" alt="Envelope" width={24} height={24} />
              <a href="mailto:ablebooksafrica.com@gmail.com">ablebooksafrica.com@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">&copy; Ablebooks Initiative ({currentYear})</div>
    </footer>
  )
}

