// Funkcja pomocnicza do śledzenia zdarzeń Facebook Pixel
export const trackFacebookPixelEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && (window as any).fbq) {
    ;(window as any).fbq("track", eventName, params)
  }
}
