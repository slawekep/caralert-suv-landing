import { mapFormDataToApiFormat } from "./api-config"

/**
 * Funkcja do testowania połączenia z API
 */
export async function testApiConnection() {
  const testData = {
    firstName: "Test",
    lastName: "Testowy",
    email: "test@example.com",
    phone: "123456789",
    carModel: "Toyota RAV4",
    message: "Wiadomość testowa",
  }

  const apiData = mapFormDataToApiFormat(testData)
  
  try {
    const response = await fetch("https://backend.osmg.pl/index.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer bda551d4-ff34-4c31-b894-39dfecfbc8bc"
      },
      body: JSON.stringify(apiData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log("API test successful:", data)
    return { success: true, data }
  } catch (error) {
    console.error("API test failed:", error)
    return { success: false, error }
  }
}