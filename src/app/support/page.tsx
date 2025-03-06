"use client"

import { useState } from "react"
import Image from "next/image"
import PaymentForm from "./payment-form"
// import "./styles.scss"

export default function DonatePage() {
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const toggleDonate = () => {
    setShowPaymentForm(!showPaymentForm)
  }

  return (
    <section id="amazing-students">
      <div className="spec">
        <Image src="/image/IMG_4458.jpg" alt="Students reading books" width={1200} height={800} priority />
      </div>

      {showPaymentForm && (
        <div id="payment">
          <div className="container" id="container">
            <div id="close" onClick={toggleDonate}>
              &times;
            </div>
            <div className="support" id="remark">
              <Image src="/image/support.png" alt="Support icon" width={50} height={50} />
              <div className="det">Payment Details</div>
            </div>

            <PaymentForm />
          </div>
        </div>
       )} 

      <div className="payment-section">
        <div className="quote payment">
          <div className="make-a-difference" id="differ">
            <p>
              Would you love to be a part of something that creates and leaves a lasting change for an inclusive
              society?
            </p>
            <p>
              Please, be part of our story. With the storybooks from Ablebooks Africa, children with disabilities get
              the chance to relate with their stories and improve their literacy skills while having fun. Be part of
              this initiative by giving your support.
            </p>
          </div>
          <div id="donate" onClick={toggleDonate}>
            Buy a book for a child
          </div>
        </div>
      </div>
    </section>
  )
}

