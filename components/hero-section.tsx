"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

export default function HeroSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Tutaj można dodać logikę do obsługi formularza
    console.log("Email submitted:", email)

    // Przewiń do sekcji porównywarki
    const comparatorSection = document.getElementById("comparator")
    if (comparatorSection) {
      comparatorSection.scrollIntoView({ behavior: "smooth" })
    }

    // Resetuj pole email
    setEmail("")
  }

  return (
    <section id="hero" className="relative bg-gradient-to-b from-gray-50 to-white pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Dekoracyjne elementy tła */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/5"></div>
        <div className="absolute top-1/2 -left-20 h-64 w-64 rounded-full bg-primary/5"></div>
      </div>

      <div className="container relative mx-auto px-5">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
              Znajdź idealny SUV
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Porównaj i wybierz <span className="text-primary">najlepszy SUV</span> dla siebie
            </h1>
            <p className="mb-8 text-lg text-gray-600 md:text-xl">
              Pomożemy Ci znaleźć idealny SUV dopasowany do Twoich potrzeb. Porównaj modele, sprawdź parametry i umów
              jazdę próbną.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => {
                  const comparatorSection = document.getElementById("comparator")
                  if (comparatorSection) {
                    comparatorSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
              >
                Porównaj modele
                <ChevronRight className="ml-1 h-5 w-5" />
              </button>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-7 py-3.5 font-semibold text-gray-700 transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:shadow-md"
              >
                Umów jazdę próbną
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] lg:h-[500px]">
              <Image
                src="/images/cars/suv-caralert.png"
                alt="SUV Comparison"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-4 shadow-xl md:-bottom-8 md:-left-8 md:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold">Ponad</div>
                  <div className="text-xl font-bold">15+ modeli SUV</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-gray-50 p-6 md:mt-24 md:p-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Szybkie porównanie</h3>
                <p className="text-gray-600">Porównaj parametry różnych modeli SUV w jednym miejscu.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Bezpieczny wybór</h3>
                <p className="text-gray-600">Sprawdzone informacje i rzetelne dane o każdym modelu.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold">Jazda próbna</h3>
                <p className="text-gray-600">Umów się na jazdę próbną wybranym modelem SUV.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

