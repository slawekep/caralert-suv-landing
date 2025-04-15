"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  getAllCarModels,
  getCarModelById,
  getCarModelsByFuelType,
  type FuelType,
  type CarModel,
} from "@/lib/car-models"
import { Filter } from "lucide-react"

export default function ComparatorSection() {
  const [selectedFuelType, setSelectedFuelType] = useState<FuelType | "wszystkie">("wszystkie")
  const [filteredCars, setFilteredCars] = useState<CarModel[]>([])
  const [selectedModels, setSelectedModels] = useState<{
    model1: string | null
    model2: string | null
    model3: string | null
  }>({
    model1: null,
    model2: null,
    model3: null,
  })

  // Inicjalizacja danych przy pierwszym renderowaniu
  useEffect(() => {
    try {
      const allCars = getAllCarModels()
      setFilteredCars(allCars)
    } catch (error) {
      console.error("Error loading car models:", error)
      setFilteredCars([])
    }
  }, [])

  // Aktualizuj filtrowane samochody, gdy zmienia się typ paliwa
  useEffect(() => {
    try {
      setFilteredCars(getCarModelsByFuelType(selectedFuelType))
    } catch (error) {
      console.error("Error filtering car models:", error)
    }
  }, [selectedFuelType])

  const handleModelChange = (modelKey: "model1" | "model2" | "model3", value: string) => {
    setSelectedModels((prev) => ({
      ...prev,
      [modelKey]: value || null,
    }))
  }

  const getSelectedCar = (modelKey: "model1" | "model2" | "model3"): CarModel | undefined => {
    try {
      const selectedId = selectedModels[modelKey]
      return selectedId ? getCarModelById(selectedId) : undefined
    } catch (error) {
      console.error(`Error getting selected car for ${modelKey}:`, error)
      return undefined
    }
  }

  return (
    <section id="comparator" className="bg-gray-50 py-24 md:py-32">
      <div className="container mx-auto px-5">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            Porównywarka
          </div>
          <h2 className="mb-4 text-4xl font-bold">Porównaj Modele SUV</h2>
          <p className="mx-auto max-w-[600px] text-lg text-gray-600">
            Wybierz modele, które Cię interesują i porównaj ich parametry. Znajdź idealny SUV dopasowany do Twoich
            potrzeb.
          </p>
        </div>

        {/* Filtrowanie po typie paliwa */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-md">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <Filter size={20} className="text-primary" />
              <span>Filtruj według typu paliwa:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <FuelTypeButton
                type="wszystkie"
                active={selectedFuelType === "wszystkie"}
                onClick={() => setSelectedFuelType("wszystkie")}
              />
              <FuelTypeButton
                type="benzyna"
                active={selectedFuelType === "benzyna"}
                onClick={() => setSelectedFuelType("benzyna")}
              />
              <FuelTypeButton
                type="diesel"
                active={selectedFuelType === "diesel"}
                onClick={() => setSelectedFuelType("diesel")}
              />
              <FuelTypeButton
                type="hybryda"
                active={selectedFuelType === "hybryda"}
                onClick={() => setSelectedFuelType("hybryda")}
              />
              <FuelTypeButton
                type="elektryczny"
                active={selectedFuelType === "elektryczny"}
                onClick={() => setSelectedFuelType("elektryczny")}
              />
            </div>
          </div>
        </div>

        <div className="mb-10 rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <div className="mb-10 flex flex-wrap justify-between gap-5">
            <ModelSelect
              label="Model 1"
              id="model1"
              value={selectedModels.model1}
              onChange={(value) => handleModelChange("model1", value)}
              carModels={filteredCars}
              selectedCar={getSelectedCar("model1")}
            />
            <ModelSelect
              label="Model 2"
              id="model2"
              value={selectedModels.model2}
              onChange={(value) => handleModelChange("model2", value)}
              carModels={filteredCars}
              selectedCar={getSelectedCar("model2")}
            />
            <ModelSelect
              label="Model 3"
              id="model3"
              value={selectedModels.model3}
              onChange={(value) => handleModelChange("model3", value)}
              carModels={filteredCars}
              selectedCar={getSelectedCar("model3")}
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden rounded-xl shadow-sm">
              <thead>
                <tr>
                  <th className="bg-gray-50 p-4 text-left font-semibold">Parametr</th>
                  <th className="bg-gray-50 p-4 text-center font-semibold">
                    {getSelectedCar("model1")?.name
                      ? `${getSelectedCar("model1")?.brand} ${getSelectedCar("model1")?.name}`
                      : "Wybierz model"}
                  </th>
                  <th className="bg-gray-50 p-4 text-center font-semibold">
                    {getSelectedCar("model2")?.name
                      ? `${getSelectedCar("model2")?.brand} ${getSelectedCar("model2")?.name}`
                      : "Wybierz model"}
                  </th>
                  <th className="bg-gray-50 p-4 text-center font-semibold">
                    {getSelectedCar("model3")?.name
                      ? `${getSelectedCar("model3")?.brand} ${getSelectedCar("model3")?.name}`
                      : "Wybierz model"}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 p-4 font-semibold">Typ paliwa</td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model1")?.fuelType ? (
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getFuelTypeClass(getSelectedCar("model1")?.fuelType)}`}
                      >
                        {getSelectedCar("model1")?.fuelType}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model2")?.fuelType ? (
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getFuelTypeClass(getSelectedCar("model2")?.fuelType)}`}
                      >
                        {getSelectedCar("model2")?.fuelType}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model3")?.fuelType ? (
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getFuelTypeClass(getSelectedCar("model3")?.fuelType)}`}
                      >
                        {getSelectedCar("model3")?.fuelType}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-4 font-semibold">Silnik</td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model1")?.specs.engine || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model2")?.specs.engine || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model3")?.specs.engine || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-4 font-semibold">Moc</td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model1")?.specs.power || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model2")?.specs.power || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model3")?.specs.power || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-4 font-semibold">Zużycie paliwa/energii</td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model1")?.specs.fuel || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model2")?.specs.fuel || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model3")?.specs.fuel || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-4 font-semibold">Pojemność bagażnika</td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model1")?.specs.trunk || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model2")?.specs.trunk || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model3")?.specs.trunk || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-4 font-semibold">Napęd</td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model1")?.specs.drive || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model2")?.specs.drive || "-"}
                  </td>
                  <td className="border-b border-gray-200 p-4 text-center">
                    {getSelectedCar("model3")?.specs.drive || "-"}
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold">Cena od</td>
                  <td className="p-4 text-center">{getSelectedCar("model1")?.price || "-"}</td>
                  <td className="p-4 text-center">{getSelectedCar("model2")?.price || "-"}</td>
                  <td className="p-4 text-center">{getSelectedCar("model3")?.price || "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-xl border-l-4 border-primary bg-primary/10 p-8 text-center">
          <p className="mb-6 text-lg">Chcesz przetestować wybrany model? Umów się na jazdę próbną!</p>
          <button
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="inline-flex items-center justify-center rounded-lg bg-primary px-7 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md"
          >
            Umów jazdę próbną
          </button>
        </div>
      </div>
    </section>
  )
}

interface ModelSelectProps {
  label: string
  id: string
  value: string | null
  onChange: (value: string) => void
  carModels: CarModel[]
  selectedCar?: CarModel
}

function ModelSelect({ label, id, value, onChange, carModels, selectedCar }: ModelSelectProps) {
  return (
    <div className="flex-1 min-w-[200px]">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">
        {label}
      </label>
      <select
        id={id}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 p-3.5 text-base transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        <option value="">Wybierz model</option>
        {carModels &&
          carModels.map((car) => (
            <option key={car.id} value={car.id}>
              {car.brand} {car.name}
            </option>
          ))}
      </select>
      {selectedCar && (
        <div className="mt-2 space-y-2">
          <div className="rounded-lg bg-primary/10 p-2 text-sm">
            <span className="font-medium">
              {selectedCar.brand} {selectedCar.name}
            </span>
            <span
              className={`ml-2 inline-block px-2 py-0.5 rounded-full text-xs font-medium ${getFuelTypeClass(selectedCar.fuelType)}`}
            >
              {selectedCar.fuelType}
            </span>
          </div>
          <div className="relative h-40 w-full overflow-hidden rounded-lg border border-gray-200">
            <Image
              src={
                selectedCar.image ||
                `/placeholder.svg?height=300&width=500&text=${encodeURIComponent(selectedCar.brand + " " + selectedCar.name)}`
              }
              alt={`${selectedCar.brand} ${selectedCar.name}`}
              fill
              className="object-cover"
            />
          </div>
          {selectedCar.description && <div className="text-sm text-gray-600 mt-2">{selectedCar.description}</div>}
        </div>
      )}
    </div>
  )
}

interface FuelTypeButtonProps {
  type: FuelType | "wszystkie"
  active: boolean
  onClick: () => void
}

function FuelTypeButton({ type, active, onClick }: FuelTypeButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
        active
          ? `${type === "wszystkie" ? "bg-gray-800 text-white" : getFuelTypeClass(type)}`
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {type === "wszystkie" ? "Wszystkie" : type.charAt(0).toUpperCase() + type.slice(1)}
    </button>
  )
}

// Funkcja pomocnicza do określania klasy CSS dla typu paliwa
function getFuelTypeClass(fuelType?: FuelType): string {
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

