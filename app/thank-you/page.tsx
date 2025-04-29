"use client"

import { useEffect } from "react"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { trackFacebookPixelEvent } from "@/lib/facebook-pixel"

export default function ThankYouPage() {
  useEffect(() => {
    // Wywołaj zdarzenie Lead po załadowaniu strony
    trackFacebookPixelEvent("Lead", {
      content_name: "Formularz jazdy próbnej",
      content_category: "Jazda próbna",
      value: 1,
      currency: "PLN",
    })
  }, [])

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="container mx-auto py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Dziękujemy za wypełnienie formularza, skontaktujemy się najpóźniej w ciągu 48h
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Twoje zgłoszenie zostało przyjęte i jest przetwarzane przez nasz zespół.
          </p>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
          >
            Wróć do strony głównej
          </a>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
