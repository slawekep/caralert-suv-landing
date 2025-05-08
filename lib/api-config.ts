// Konfiguracja API
export const API_CONFIG = {
  URL: process.env.API_URL || "https://backend.osmg.pl/index.php",
  TOKEN: process.env.API_TOKEN || "bda551d4-ff34-4c31-b894-39dfecfbc8bc",
}

// Typy danych dla API
export interface ApiPayload {
  first_name: string
  surname: string
  email: string
  phone_number: string
  car_model: string
  message: string
}

// Funkcja do mapowania danych formularza na format API
export function mapFormDataToApiPayload(formData: any): ApiPayload {
  return {
    first_name: formData.firstName,
    surname: formData.lastName,
    email: formData.email,
    phone_number: formData.phone,
    car_model: formData.carModel,
    message: formData.message || "",
  }
}
