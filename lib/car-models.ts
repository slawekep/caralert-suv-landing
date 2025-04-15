export type FuelType = "benzyna" | "diesel" | "hybryda" | "elektryczny"

export interface CarModel {
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

// Przykładowe dane o modelach samochodów
export const carModels: CarModel[] = [
  {
    id: "toyota-rav4-hybrid",
    name: "RAV4 Hybrid",
    brand: "Toyota",
    image: "/images/cars/toyota_rav_4_plugin-hybrid.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "2.5L Hybrid",
      power: "184 KM",
      fuel: "5.6 l/100km",
      trunk: "580 l",
      drive: "FWD",
    },
    price: "189 900 zł",
    description: "Nowoczesny SUV z napędem hybrydowym, łączący przestronność, oszczędność i niezawodność.",
  },
  {
    id: "toyota-rav4-phev",
    name: "RAV4 Plug-in Hybrid",
    brand: "Toyota",
    image: "/images/cars/toyota_rav_4_plugin-hybrid.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "2.5L Plug-in Hybrid",
      power: "306 KM",
      fuel: "2.2 l/100km",
      trunk: "520 l",
      drive: "AWD",
    },
    price: "219 200 zł",
    description: "Wersja Plug-in Hybrid oferująca możliwość jazdy w trybie elektrycznym do 75 km.",
  },
  {
    id: "honda-crv-hybrid",
    name: "CR-V Hybrid",
    brand: "Honda",
    image: "/images/cars/honda-crv-hybrid.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "2.0L Hybrid",
      power: "189 KM",
      fuel: "5.9 l/100km",
      trunk: "587 l",
      drive: "AWD",
    },
    price: "222 000 zł",
    description: "Przestronny SUV z innowacyjnym napędem hybrydowym i-MMD.",
  },
  {
    id: "mazda-cx5-benzyna",
    name: "CX-5 SkyActive G FWD",
    brand: "Mazda",
    image: "/images/cars/mazda-cx-5.jpg",
    fuelType: "benzyna",
    specs: {
      engine: "2.0L",
      power: "165 KM",
      fuel: "6.5 l/100km",
      trunk: "506 l",
      drive: "FWD",
    },
    price: "160 900 zł",
    description: "Elegancki SUV z dynamicznym silnikiem benzynowym i sportowym charakterem.",
  },
  {
    id: "mazda-cx5-awd",
    name: "CX-5 SkyActiv-G AWD",
    brand: "Mazda",
    image: "/images/cars/mazda-cx-5.jpg",
    fuelType: "benzyna",
    specs: {
      engine: "2.5L SkyActiv-G",
      power: "194 KM",
      fuel: "7.6 l/100km",
      trunk: "506 l",
      drive: "AWD",
    },
    price: "222 900 zł",
    description: "Wersja idealna na dalekie trasy z mocnym silnikiem.",
  },
  {
    id: "mazda-cx30-fwd",
    name: "CX-30 e-SKYACTIV X FWD",
    brand: "Mazda",
    image: "/images/cars/mazda-cx-30.jpg",
    fuelType: "benzyna",
    specs: {
      engine: "2.0L e-SKYACTIV X",
      power: "186 KM",
      fuel: "6.1 l/100km",
      trunk: "506 l",
      drive: "FWD",
    },
    price: "137 400 zł",
    description: "Wersja idealna na dalekie trasy z mocnym silnikiem.",
  },
    {
    id: "mazda-cx30-awd",
    name: "CX-30 e-SKYACTIV X AWD",
    brand: "Mazda",
    image: "/images/cars/mazda-cx-30.jpg",
    fuelType: "benzyna",
    specs: {
      engine: "2.0L e-SKYACTIV X",
      power: "186 KM",
      fuel: "6.6 l/100km",
      trunk: "506 l",
      drive: "AWD",
    },
    price: "168 400 zł",
    description: "Wersja idealna na dalekie trasy z mocnym silnikiem i napędem na 4 koła.",
  },
      {
    id: "mazda-cx60-phev",
    name: "CX-60 2.5L e-SKYACTIV PHEV 327 AWD",
    brand: "Mazda",
    image: "/images/cars/mazda-cx-60.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "2.5L e-SKYACTIV PHEV 327",
      power: "186 KM",
      fuel: "7.7 l/100km",
      trunk: "506 l",
      drive: "AWD",
    },
    price: "269 200 zł",
    description: "Wersja idealna na dalekie trasy z mocnym silnikiem i napędem na 4 koła.",
  },
    {
    id: "mazda-cx60-diesel",
    name: "CX-60 3.3L e-SKYACTIV D 254 AWD",
    brand: "Mazda",
    image: "/images/cars/mazda-cx-60.jpg",
    fuelType: "diesel",
    specs: {
      engine: "3.3L e-SKYACTIV D 254",
      power: "254 KM",
      fuel: "5.3 l/100km",
      trunk: "506 l",
      drive: "AWD",
    },
    price: "262 200 zł",
    description: "Wersja idealna na dalekie trasy z mocnym silnikiem diesla i napędem na 4 koła.",
  },
  {
    id: "hyundai-kona-benzyna",
    name: "Kona 1.6 T-GDI Executive",
    brand: "Hyundai",
    image: "/images/cars/hyundai-kona-hybrid-7.jpg",
    fuelType: "benzyna",
    specs: {
      engine: "1.6 T-GDI",
      power: "138 KM",
      fuel: "6.2 l/100km",
      trunk: "466 l",
      drive: "FWD",
    },
    price: "130 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
    {
    id: "hyundai-kona-hybrid",
    name: "Kona Hybrid",
    brand: "Hyundai",
    image: "/images/cars/hyundai-kona-hybrid-7.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "1.6 GDI HEV 2WD",
      power: "129 KM",
      fuel: "4.5 l/100km",
      trunk: "361 l",
      drive: "FWD",
    },
    price: "138 400 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
      {
    id: "hyundai-kona-electric",
    name: "Kona Electric",
    brand: "Hyundai",
    image: "/images/cars/hyundai-kona-electric.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "49kWh",
      power: "136 KM",
      fuel: "15kWh/100km",
      trunk: "332 l",
      drive: "FWD",
    },
    price: "159 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
         {
    id: "hyundai-tucson-hybrid",
    name: "Tuscon Hybrid",
    brand: "Hyundai",
    image: "/images/cars/hyundai-tucson-hybrid.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "1.6 T-GDI HEV 6AT",
      power: "215 KM",
      fuel: "5.7 l/100km",
      trunk: "616 l",
      drive: "FWD",
    },
    price: "161 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
     {
    id: "hyundai-tucson-benzyna",
    name: "Tuscon 1.6 T-GDI 6MT",
    brand: "Hyundai",
    image: "/images/cars/hyundai-tucson-hybrid.jpg",
    fuelType: "benzyna",
    specs: {
      engine: "1.6 T-GDI 6MT",
      power: "160 KM",
      fuel: "6.9 l/100km",
      trunk: "577 l",
      drive: "FWD",
    },
    price: "151 000 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
     {
    id: "volvo-xc60-hybrid",
    name: "XC60",
    brand: "Volvo",
    image: "/images/cars/volvo-xc60.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "B5 AWD Mild hybrid",
      power: "250 KM",
      fuel: "7.5 l/100km",
      trunk: "483 l",
      drive: "AWD",
    },
    price: "221 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
   {
    id: "volvo-xc90-hybrid",
    name: "XC90",
    brand: "Volvo",
    image: "/images/cars/volvo-xc-90.png",
    fuelType: "hybryda",
    specs: {
      engine: "B5 AWD Mild hybrid",
      power: "250 KM",
      fuel: "8.5 l/100km",
      trunk: "680 l",
      drive: "AWD",
    },
    price: "339 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
   {
    id: "volvo-ex90-electric",
    name: "EX90",
    brand: "Volvo",
    image: "/images/cars/volvo-ex90.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "Single lub Twin Motor",
      power: "279 KM",
      fuel: "18.2 kWh/100km",
      trunk: "690 l",
      drive: "RWD",
    },
    price: "399 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
   {
    id: "volvo-ex30-electric",
    name: "EX30",
    brand: "Volvo",
    image: "/images/cars/volvo-EX30.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "Single lub Twin Motor",
      power: "272 KM",
      fuel: "17.1 kWh/100km",
      trunk: "318 l",
      drive: "RWD",
    },
    price: "176 990 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
   {
    id: "volvo-ec40-electric",
    name: "EC40",
    brand: "Volvo",
    image: "/images/cars/volvo-ec40.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "Single lub Twin Motor",
      power: "238 KM",
      fuel: "16.7 kWh/100km",
      trunk: "318 l",
      drive: "RWD",
    },
    price: "243 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
   {
    id: "peugeot-5008-electric",
    name: "e-5008",
    brand: "Peugeot",
    image: "/images/cars/peugeot-e-5008.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "74kWh",
      power: "210 KM",
      fuel: "15.0 kWh/100km",
      trunk: "780 l",
      drive: "RWD",
    },
    price: "214 200 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
    {
    id: "peugeot-5008-hybrid",
    name: "5008 Hybrid",
    brand: "Peugeot",
    image: "/images/cars/peugeot-5008-hybrid.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "Hybrid 145 eDCS6",
      power: "130 KM",
      fuel: "5.5 l/100km",
      trunk: "780 l",
      drive: "RWD",
    },
    price: "164 100 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
    {
    id: "peugeot-3008-hybrid",
    name: "3008 Hybrid",
    brand: "Peugeot",
    image: "/images/cars/peugeot-3008-hybrid.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "Hybrid 145 eDCS6",
      power: "145 KM",
      fuel: "5.1 l/100km",
      trunk: "420 l",
      drive: "FWD",
    },
    price: "149 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
    {
    id: "peugeot-3008-electric",
    name: " e-3008",
    brand: "Peugeot",
    image: "/images/cars/peugeot-e-3008.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "74kWh",
      power: "210 KM",
      fuel: "16,8 kWh/100km",
      trunk: "520 l",
      drive: "FWD",
    },
    price: "199 950 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
    {
    id: "citroen-c4-hybrid",
    name: " C4 You",
    brand: "Citroën",
    image: "/images/cars/citroen-c4.jpg",
    fuelType: "hybryda",
    specs: {
      engine: "110 KM",
      power: "110 KM",
      fuel: "4.8 l/100km",
      trunk: "380 l",
      drive: "FWD",
    },
    price: "103 300 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
  {
    id: "citroen-c4-electric",
    name: "e-C4 You",
    brand: "Citroën",
    image: "/images/cars/citroen-ec4.jpg",
    fuelType: "elektryczny",
    specs: {
      engine: "50 kWh",
      power: "136 KM",
      fuel: "15.3 kWh/100km",
      trunk: "380 l",
      drive: "FWD",
    },
    price: "138 900 zł",
    description: "Nowoczesny SUV z futurystycznym designem i bogatym wyposażeniem.",
  },
]

// Funkcje pomocnicze
export function getAllCarModels(): CarModel[] {
  return carModels
}

export function getCarModelById(id: string): CarModel | undefined {
  return carModels.find((car) => car.id === id)
}

export function getCarModelsByFuelType(fuelType: FuelType | "wszystkie"): CarModel[] {
  if (fuelType === "wszystkie") {
    return carModels
  }
  return carModels.filter((car) => car.fuelType === fuelType)
}

export function getAvailableFuelTypes(): FuelType[] {
  const fuelTypes = new Set<FuelType>()
  carModels.forEach((car) => {
    fuelTypes.add(car.fuelType)
  })
  return Array.from(fuelTypes)
}

