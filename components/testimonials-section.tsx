import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Opinie klientów
          </div>
          <h2 className="mb-4 text-4xl font-bold">Co mówią nasi klienci</h2>
          <p className="mx-auto max-w-[600px] text-lg text-gray-600">
            Poznaj opinie osób, które skorzystały z naszej pomocy przy wyborze idealnego SUV-a.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Anna Kowalska"
            role="Właścicielka Toyota RAV4 Hybrid"
            image="/placeholder.svg?height=100&width=100&text=AK"
            quote="Dzięki porównywarce CarAlert.pl mogłam łatwo porównać różne modele hybrydowe. Zdecydowałam się na RAV4 i jestem bardzo zadowolona z wyboru!"
          />
          <TestimonialCard
            name="Piotr Nowak"
            role="Właściciel Mazda CX-5"
            image="/placeholder.svg?height=100&width=100&text=PN"
            quote="Porównywarka pomogła mi wybrać samochód idealny dla mojej rodziny. Jazda próbna tylko potwierdziła, że Mazda CX-5 to strzał w dziesiątkę."
          />
          <TestimonialCard
            name="Katarzyna Wiśniewska"
            role="Właścicielka Kia EV6"
            image="/placeholder.svg?height=100&width=100&text=KW"
            quote="Szukałam elektrycznego SUV-a i dzięki CarAlert.pl mogłam porównać wszystkie dostępne modele. Kia EV6 spełnia wszystkie moje oczekiwania."
          />
          <TestimonialCard
            name="Michał Lewandowski"
            role="Właściciel Volkswagen Tiguan"
            image="/placeholder.svg?height=100&width=100&text=ML"
            quote="Profesjonalna obsługa i świetna porównywarka. Dzięki CarAlert.pl znalazłem idealny samochód dla siebie i mojej rodziny."
          />
          <TestimonialCard
            name="Agnieszka Dąbrowska"
            role="Właścicielka Hyundai Tucson Hybrid"
            image="/placeholder.svg?height=100&width=100&text=AD"
            quote="Porównywarka CarAlert.pl pozwoliła mi znaleźć hybrydowy SUV w moim budżecie. Jestem bardzo zadowolona z Tucsona!"
          />
          <TestimonialCard
            name="Tomasz Zieliński"
            role="Właściciel Audi Q4 e-tron"
            image="/placeholder.svg?height=100&width=100&text=TZ"
            quote="Szukałem premium elektrycznego SUV-a i dzięki CarAlert.pl mogłem porównać wszystkie opcje. Audi Q4 e-tron to świetny wybór!"
          />
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  image: string
  quote: string
}

function TestimonialCard({ name, role, image, quote }: TestimonialCardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{quote}</p>
      <div className="mt-4 flex text-yellow-400">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  )
}

