// Type definitions for Paystack integration

interface PaystackResponse {
    reference: string
    status: string
    trans: string
    transaction: string
    message: string
  }
  
  interface PaystackHandler {
    openIframe(): void
  }
  
  interface PaystackOptions {
    key: string
    email: string
    amount: number
    currency?: string
    ref?: string
    callback: (response: PaystackResponse) => void
    onClose: () => void
    metadata?: Record<string, any>
  }
  
  interface PaystackStatic {
    setup(options: PaystackOptions): PaystackHandler
  }
  
  interface Window {
    PaystackPop?: PaystackStatic
  }
  
  