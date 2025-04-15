import Image from "next/image"
import type { CarModel, FuelType } from "@/lib/car-models"

interface CarDetailsProps {
  car: CarModel | undefined
  showFullDetails?: boolean
}

export default function CarDetails({ car, showFullDetails = false }: CarDetailsProps) {
  // Dodajemy sprawdzenie, czy car istnieje
  if (!car) {
    return (
      <div className="overflow-hidden rounded-xl bg-white shadow-md p-4 text-center">
        <p className="text-gray-500">Brak danych o samochodzie</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={
            car.image || `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(car.brand + " " + car.name)}`
          }
          alt={`${car.brand} ${car.name}`}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-lg font-bold text-white">
            {car.brand} {car.name}
          </h3>
        </div>
        <div className="absolute right-3 top-3">
          <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getFuelTypeClass(car.fuelType)}`}>
            {car.fuelType}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="text-sm font-medium text-gray-600">{car.specs.engine}</div>
          <div className="text-lg font-bold text-primary">{car.price}</div>
        </div>

        {showFullDetails ? (
          <div className="mt-4 space-y-3">
            <p className="text-sm text-gray-600">{car.description}</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg bg-gray-50 p-2 text-center">
                <div className="text-xs text-gray-500">Moc</div>
                <div className="font-medium">{car.specs.power}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-2 text-center">
                <div className="text-xs text-gray-500">Zużycie</div>
                <div className="font-medium">{car.specs.fuel}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-2 text-center">
                <div className="text-xs text-gray-500">Bagażnik</div>
                <div className="font-medium">{car.specs.trunk}</div>
              </div>
              <div className="rounded-lg bg-gray-50 p-2 text-center">
                <div className="text-xs text-gray-500">Napęd</div>
                <div className="font-medium">{car.specs.drive}</div>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-2 line-clamp-2 text-sm text-gray-600">{car.description}</p>
        )}
      </div>
    </div>
  )
}

// Funkcja pomocnicza do określania klasy CSS dla typu paliwa
function getFuelTypeClass(fuelType: FuelType): string {
  switch (fuelType) {
    case "benzyna":
      return "bg-red-100 text-red-800"
    case "diesel":
      return "bg-blue-100 text-blue-800"
    case "hybryda":
      return "bg-green-100 text-green-800"
    case "elektryczny":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

