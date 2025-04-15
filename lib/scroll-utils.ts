/**
 * Funkcja pomocnicza do przewijania do określonej sekcji strony
 */
export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

