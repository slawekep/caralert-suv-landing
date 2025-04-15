"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold">
          <span className="font-black tracking-tighter">
            Car<span className="text-primary">Alert</span>.pl
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("hero")
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                }}
                className="font-medium text-gray-700 transition-colors hover:text-primary"
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
                className="font-medium text-gray-700 transition-colors hover:text-primary"
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
                className="font-medium text-gray-700 transition-colors hover:text-primary"
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
                className="font-medium text-gray-700 transition-colors hover:text-primary"
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
                className="font-medium text-gray-700 transition-colors hover:text-primary"
              >
                FAQ
              </button>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="rounded-lg bg-primary px-5 py-2.5 font-semibold text-white transition-all hover:bg-primary/90"
          >
            Kontakt
          </button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[60px] z-50 bg-white p-5 shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav>
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("hero")
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="w-full text-left font-medium text-gray-700"
              >
                Strona Główna
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("comparator")
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="w-full text-left font-medium text-gray-700"
              >
                Porównywarka
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("how-it-works")
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="w-full text-left font-medium text-gray-700"
              >
                Jak To Działa
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("testimonials")
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="w-full text-left font-medium text-gray-700"
              >
                Opinie
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const section = document.getElementById("faq")
                  if (section) section.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="w-full text-left font-medium text-gray-700"
              >
                FAQ
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact")
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" })
                  }
                  setIsMenuOpen(false)
                }}
                className="w-full rounded-lg bg-primary px-5 py-2.5 text-center font-semibold text-white"
              >
                Kontakt
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

