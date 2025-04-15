"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            FAQ
          </div>
          <h2 className="mb-4 text-4xl font-bold">Najczęściej zadawane pytania</h2>
          <p className="mx-auto max-w-[600px] text-lg text-gray-600">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące wyboru SUV-a.
          </p>
        </div>

        <div className="mx-auto max-w-[800px] space-y-4">
          <FaqItem
            question="Jaki typ SUV-a będzie najlepszy dla rodziny z dziećmi?"
            answer="Dla rodziny z dziećmi polecamy przestronne SUV-y średniej wielkości, takie jak Toyota RAV4, Honda CR-V czy Volkswagen Tiguan. Warto zwrócić uwagę na pojemność bagażnika, systemy bezpieczeństwa oraz wygodny dostęp do tylnych siedzeń."
          />
          <FaqItem
            question="Czy SUV-y hybrydowe są oszczędne w eksploatacji?"
            answer="Tak, SUV-y hybrydowe są zazwyczaj bardziej oszczędne w eksploatacji niż ich odpowiedniki z silnikami benzynowymi. Oferują niższe zużycie paliwa, szczególnie w mieście, gdzie mogą częściowo korzystać z napędu elektrycznego. Dodatkowo, często mają niższe koszty serwisowe i dłuższą żywotność układu hamulcowego."
          />
          <FaqItem
            question="Jaka jest różnica między napędem AWD a 4x4?"
            answer="AWD (All-Wheel Drive) to stały napęd na wszystkie koła, który automatycznie dostosowuje moc przekazywaną na poszczególne koła w zależności od warunków. 4x4 to tradycyjny napęd terenowy, często z możliwością ręcznego włączania i wyłączania, który równomiernie rozdziela moc między przednią i tylną oś. SUV-y z napędem AWD są lepsze do codziennej jazdy, podczas gdy 4x4 sprawdza się lepiej w trudnym terenie."
          />
          <FaqItem
            question="Czy SUV-y elektryczne mają wystarczający zasięg?"
            answer="Nowoczesne SUV-y elektryczne oferują zasięg od 300 do ponad 500 km na jednym ładowaniu, co dla większości kierowców jest wystarczające do codziennego użytkowania. Warto jednak pamiętać, że rzeczywisty zasięg może być niższy w zależności od stylu jazdy, warunków atmosferycznych i używania klimatyzacji lub ogrzewania."
          />
          <FaqItem
            question="Jak długo trwa jazda próbna i co obejmuje?"
            answer="Standardowa jazda próbna trwa około 30-60 minut i obejmuje jazdę po mieście oraz, jeśli to możliwe, po drodze szybkiego ruchu. Podczas jazdy próbnej możesz przetestować różne tryby jazdy, sprawdzić komfort, widoczność oraz działanie systemów wspomagających kierowcę. Nasz doradca będzie obecny podczas jazdy, aby odpowiedzieć na wszystkie pytania."
          />
          <FaqItem
            question="Czy mogę porównać więcej niż 3 modele SUV?"
            answer="Nasza porównywarka standardowo pozwala na jednoczesne porównanie 3 modeli, co zapewnia czytelność wyników. Jeśli chcesz porównać więcej modeli, możesz wykonać kilka porównań lub skontaktować się z naszym doradcą, który przygotuje dla Ciebie szczegółowe zestawienie interesujących Cię modeli."
          />
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <button
        className="flex w-full items-center justify-between bg-white p-6 text-left transition-all hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold">{question}</h3>
        <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <div className={`overflow-hidden bg-gray-50 transition-all ${isOpen ? "max-h-96 p-6" : "max-h-0"}`}>
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  )
}

