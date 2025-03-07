"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { usePaystackPayment } from "react-paystack"

interface FormData {
  email: string
  firstName: string
  lastName: string
  amount: string
}

interface PaystackResponse {
  reference: string
  trans: string
  status: string
  message: string
  transaction: string
  trxref: string
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

  // Paystack configuration
  const config = {
    reference: `ref-${Math.floor(Math.random() * 1000000000)}`,
    email: formData.email,
    amount: formData.amount ? Number.parseFloat(formData.amount) * 100 : 0, // Convert to kobo
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "pk_live_a3e87b987e26df178975b2461258c917d9ebfb60",
    currency: "NGN",
    metadata: {
      custom_fields: [
        {
          display_name: "First Name",
          variable_name: "first_name",
          value: formData.firstName,
        },
        {
          display_name: "Last Name",
          variable_name: "last_name",
          value: formData.lastName,
        },
      ],
    },
  }

  // Initialize Paystack payment hook
  const initializePayment = usePaystackPayment(config)

  // Success callback
  const onSuccess = (response: PaystackResponse) => {
    console.log("Payment complete! Reference:", response.reference)
    alert(`Thank you for your donation! Reference: ${response.reference}`)
  }

  // Close callback
  const onClose = () => {
    console.log("Payment window closed")
    alert("Payment canceled")
  }

  const payWithPaystack = (e: FormEvent) => {
    e.preventDefault()

    // Validate form
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.amount) {
      alert("Please fill all fields")
      return
    }

    // Initialize payment
    // @ts-ignore - The type definitions for usePaystackPayment are not perfect
    initializePayment(onSuccess, onClose)
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

