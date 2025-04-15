// Konfiguracja API
export const API_CONFIG = {
  url: process.env.API_URL || "https://backend.osmg.pl/index.php",
  token: process.env.API_TOKEN || "bda551d4-ff34-4c31-b894-39dfecfbc8bc",
}

// Mapowanie danych z formularza na format API
export function mapFormDataToApiFormat(formData: {
  firstName: string
  lastName: string
  email: string
  phone: string
  carModel: string
  message?: string
}) {
  return {
    first_name: formData.firstName,
    surname: formData.lastName,
    email: formData.email,
    phone_number: formData.phone,
    car_model: formData.carModel,
    message: formData.message || "",
  }
}