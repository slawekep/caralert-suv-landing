"use client"

import Link from "next/link"
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin } from "lucide-react"
import { useEffect, useState } from "react"
import { getAllCarModels } from "@/lib/car-models"

export default function SiteFooter() {
  const currentYear = new Date().getFullYear()
  const [popularModels, setPopularModels] = useState<Array<{ id: string; name: string; brand: string }>>([])

  useEffect(() => {
    // Pobierz 6 pierwszych modeli jako popularne
    const models = getAllCarModels()
      .slice(0, 6)
      .map((car) => ({
        id: car.id,
        name: car.name,
        brand: car.brand,
      }))
    setPopularModels(models)
  }, [])

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-5 pt-20">
        <div className="mb-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="mb-5 flex items-center gap-2 text-2xl font-extrabold">
              <span className="font-black tracking-tighter">
                Car<span className="text-primary">Alert</span>.pl
              </span>
            </Link>
            <p className="mb-6 text-gray-400">
              Pomagamy wybrać idealny SUV dopasowany do Twoich potrzeb. Porównuj, testuj, wybieraj.
            </p>
           </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Szybkie Linki</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("hero")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Strona Główna
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("comparator")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Porównywarka
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("how-it-works")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Jak To Działa
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("testimonials")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Opinie
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("faq")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const section = document.getElementById("contact")
                    if (section) section.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Popularne Modele</h3>
            <ul className="space-y-3">
              {popularModels.map((model) => (
                <li key={model.id}>
                    {model.brand} {model.name}
                 
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-bold">Kontakt</h3>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                <Phone size={18} />
              </div>
              <span className="text-gray-400">+48 728 853 079</span>
            </div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                <Mail size={18} />
              </div>
              <span className="text-gray-400">kontakt@osmg.pl</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-800">
                <MapPin size={18} />
              </div>
              <span className="text-gray-400">ul. Walecznych 68/9, 03-926 Warszawa</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-gray-800 py-10 text-center text-sm text-gray-400 md:flex-row md:text-left">
          <div>&copy; {currentYear} CarAlert.pl. Wszelkie prawa zastrzeżone.</div>
          <div className="flex flex-col gap-3 md:flex-row md:gap-6">
            <a href="https://osmg.pl/polityka-prywatnosci/" className="transition-colors hover:text-white">
              Polityka Prywatności
            </a>
                        
          </div>
        </div>
      </div>
    </footer>
  )
}

