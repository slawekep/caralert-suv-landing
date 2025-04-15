"use client"

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Jak to działa
          </div>
          <h2 className="mb-4 text-4xl font-bold">Prosty proces wyboru SUV-a</h2>
          <p className="mx-auto max-w-[600px] text-lg text-gray-600">
            W kilku prostych krokach pomożemy Ci znaleźć idealny samochód dopasowany do Twoich potrzeb.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="relative rounded-xl bg-gray-50 p-8 text-center">
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              1
            </div>
            <div className="mb-4 mt-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Porównaj modele</h3>
            <p className="text-gray-600">
              Skorzystaj z naszej porównywarki, aby zestawić ze sobą różne modele SUV i ich parametry.
            </p>
          </div>

          <div className="relative rounded-xl bg-gray-50 p-8 text-center">
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              2
            </div>
            <div className="mb-4 mt-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Wybierz model</h3>
            <p className="text-gray-600">
              Na podstawie porównania wybierz model, który najlepiej odpowiada Twoim potrzebom i preferencjom.
            </p>
          </div>

          <div className="relative rounded-xl bg-gray-50 p-8 text-center">
            <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
              3
            </div>
            <div className="mb-4 mt-4 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-8 w-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
                  />
                </svg>
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold">Umów jazdę próbną</h3>
            <p className="text-gray-600">
              Wypełnij formularz kontaktowy, aby umówić się na jazdę próbną wybranym modelem SUV.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-xl bg-primary/10 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold">Potrzebujesz pomocy w wyborze?</h3>
          <p className="mb-6 text-lg">Nasi doradcy chętnie odpowiedzą na Twoje pytania i pomogą w wyborze.</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  )
}

