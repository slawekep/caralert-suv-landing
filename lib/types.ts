// Zastąp istniejącą definicję interfejsu Car nową, bardziej rozbudowaną wersją
export type FuelType = "benzyna" | "diesel" | "hybryda" | "elektryczny"

export interface Car {
  id: string
  name: string
  brand: string
  image: string
  fuelType: FuelType
  specs: {
    engine: string
    power: string
    fuel: string
    trunk: string
    drive: string
  }
  price: string
  description?: string
}

