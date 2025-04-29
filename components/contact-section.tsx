"use client"

import type React from "react"
import { useState, type FormEvent, useEffect } from "react"
import { Loader2 } from "lucide-react"
import { getAllCarModels } from "@/lib/car-models"
import { useRouter } from "next/navigation"

export default function ContactSection() {
  const router = useRouter()
  const [carModels, setCarModels] = useState<Array<{ id: string; name: string }>>([])
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carModel: "",
    message: "",
  })

  useEffect(() => {
    // Pobierz modele samochodów
    const models = getAllCarModels().map((car) => ({
      id: car.id,
      name: `${car.brand} ${car.name}`,
    }))
    setCarModels(models)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Wystąpił problem z wysłaniem formularza")
      }

      // Śledzenie zdarzenia Facebook Pixel - wysłanie formularza
      // trackFacebookPixelEvent("Lead", {
      //   content_name: "Formularz jazdy próbnej",
      //   content_category: "Jazda próbna",
      //   car_model: formData.carModel,
      // })

      // Przekieruj na stronę potwierdzenia
      router.push("/thank-you")
    } catch (error) {
      console.error("Error:", error)
      setFormState("error")
      setErrorMessage(error instanceof Error ? error.message : "Wystąpił nieznany błąd")
    }
  }

  return (
    <section id="contact" className="bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Kontakt
          </div>
          <h2 className="mb-4 text-4xl font-bold">Umów Jazdę Próbną</h2>
          <p className="mx-auto max-w-[600px] text-lg text-gray-600">
            Wypełnij formularz, a nasz doradca skontaktuje się z Tobą w ciągu 24 godzin, aby ustalić szczegóły jazdy
            próbnej.
          </p>
        </div>

        <div className="mx-auto max-w-[800px] rounded-3xl bg-white p-8 shadow-xl md:p-12">
          {formState === "success" ? (
            <div className="rounded-xl bg-green-50 p-6 text-center text-green-700">
              <h3 className="mb-2 text-xl font-bold">Dziękujemy za wypełnienie formularza!</h3>
              <p>Nasz doradca skontaktuje się z Tobą w ciągu 24 godzin.</p>
            </div>
          ) : formState === "error" ? (
            <div className="rounded-xl bg-red-50 p-6 text-center text-red-700">
              <h3 className="mb-2 text-xl font-bold">Wystąpił błąd!</h3>
              <p>{errorMessage || "Nie udało się wysłać formularza. Spróbuj ponownie później."}</p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-4 rounded-lg bg-primary px-5 py-2 text-white hover:bg-primary/90"
              >
                Spróbuj ponownie
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="mb-2 block text-sm font-semibold">
                    Imię
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Twoje imię"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-2 block text-sm font-semibold">
                    Nazwisko
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Twoje nazwisko"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>
              </div>

              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Twój email"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Twój numer telefonu"
                    required
                    disabled={formState === "submitting"}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="carModel" className="mb-2 block text-sm font-semibold">
                  Interesujący Cię model
                </label>
                <select
                  id="carModel"
                  name="carModel"
                  value={formData.carModel}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  required
                  disabled={formState === "submitting"}
                >
                  <option value="">Wybierz model</option>
                  {carModels.map((model) => (
                    <option key={model.id} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                  Wiadomość (opcjonalnie)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Twoja wiadomość..."
                  disabled={formState === "submitting"}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="mt-4 w-full rounded-xl bg-primary p-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 disabled:opacity-70 flex justify-center items-center"
              >
                {formState === "submitting" ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Wysyłanie...
                  </>
                ) : (
                  "Umów jazdę próbną"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
