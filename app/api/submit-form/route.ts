import { NextResponse } from "next/server"
import { API_CONFIG, mapFormDataToApiPayload } from "@/lib/api-config"

export async function POST(request: Request) {
  try {
    // Pobierz dane z formularza
    const formData = await request.json()

    // Mapowanie danych formularza do wymaganej struktury API
    const apiPayload = mapFormDataToApiPayload(formData)

    // Walidacja danych
    if (
      !apiPayload.first_name ||
      !apiPayload.surname ||
      !apiPayload.email ||
      !apiPayload.phone_number ||
      !apiPayload.car_model
    ) {
      return NextResponse.json({ error: "Wszystkie wymagane pola muszą być wypełnione" }, { status: 400 })
    }

    console.log("Wysyłanie danych do API:", apiPayload)

    // Wysłanie danych do API
    const apiResponse = await fetch(API_CONFIG.URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_CONFIG.TOKEN}`,
      },
      body: JSON.stringify(apiPayload),
    })

    // Sprawdzenie odpowiedzi z API
    if (!apiResponse.ok) {
      const errorData = await apiResponse.text()
      console.error("Błąd API:", apiResponse.status, errorData)
      return NextResponse.json(
        {
          error: "Wystąpił błąd podczas komunikacji z serwerem",
          details: errorData,
        },
        { status: apiResponse.status },
      )
    }

    // Próba parsowania odpowiedzi jako JSON
    let responseData
    try {
      responseData = await apiResponse.json()
    } catch (e) {
      // Jeśli odpowiedź nie jest w formacie JSON, użyj tekstu
      responseData = { message: await apiResponse.text() }
    }

    console.log("Odpowiedź z API:", responseData)

    // Zwróć sukces
    return NextResponse.json({
      success: true,
      message: "Formularz został pomyślnie wysłany",
      apiResponse: responseData,
    })
  } catch (error) {
    console.error("Error processing form:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Wystąpił nieznany błąd" },
      { status: 500 },
    )
  }
}
