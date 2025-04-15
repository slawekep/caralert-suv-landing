import HeroSection from "@/components/hero-section"
import ComparatorSection from "@/components/comparator-section"
import HowItWorksSection from "@/components/how-it-works-section"
import TestimonialsSection from "@/components/testimonials-section"
import FaqSection from "@/components/faq-section"
import ContactSection from "@/components/contact-section"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ComparatorSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}

