"use client"

import type React from "react"

import { useState, type FormEvent } from "react"

interface FormData {
  email: string
  firstName: string
  lastName: string
  amount: string
}

export default function PaymentForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    amount: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id === "email-address"
        ? "email"
        : id === "first-name"
          ? "firstName"
          : id === "last-name"
            ? "lastName"
            : "amount"]: value,
    })
  }

  const payWithPaystack = async (e: FormEvent) => {
    e.preventDefault()

    // This is where you would integrate with Paystack
    // For example:
    try {
      // Example implementation - replace with actual Paystack integration
      console.log("Processing payment with Paystack", formData)

      // You would typically initialize Paystack here
      // For example:
      if (window.PaystackPop) {
        const handler = window.PaystackPop.setup({
          key: 'your_paystack_public_key',
          email: formData.email,
          amount: parseFloat(formData.amount) * 100, // Paystack expects amount in kobo
          currency: 'NGN',
          ref: `ref-${Math.floor(Math.random() * 1000000000)}`,
          callback: function(response: any) {
            // Handle successful payment
            console.log('Payment complete! Reference:', response.reference);
          },
          onClose: function() {
            // Handle when user closes payment modal
            console.log('Payment window closed');
          }
        });
        handler.openIframe();
      }

      alert("Thank you for your donation! This is a placeholder for the actual payment processing.")
    } catch (error) {
      console.error("Payment error:", error)
      alert("There was an error processing your payment. Please try again.")
    }
  }

  return (
    <form id="paymentForm" method="post" onSubmit={payWithPaystack}>
      <div className="form-group">
        <label htmlFor="email-address">Email Address:</label>
        <input
          type="email"
          id="email-address"
          pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="first-name">First Name:</label>
        <input type="text" id="first-name" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="last-name">Last Name:</label>
        <input type="text" id="last-name" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={formData.amount} onChange={handleChange} required />
      </div>
      <div className="form-submit">
        <button type="submit" id="start-payment-button">
          Buy a book for a child
        </button>
      </div>
    </form>
  )
}

