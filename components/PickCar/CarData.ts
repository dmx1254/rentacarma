import { StaticImageData } from "next/image";
import Golf6 from "../images/optimized/golf6.webp";
import AudiA1 from "../images/optimized/audia1.webp";
import Toyota from "../images/optimized/toyotacamry.webp";
import Bmw320 from "../images/optimized/bmw320.webp";
import Benz from "../images/optimized/benz.webp";
import Passat from "../images/optimized/passatcc.webp";
import audia3v8 from "../images/optimized/audiA3V8.webp";

export interface Car {
  name: string;
  price: number;
  img: StaticImageData;
  model: string;
  mark: string;
  year: string;
  doors: string;
  air: string;
  transmission: string;
  fuel: string;
}

export const CAR_DATA: Car[] = [
  {
    name: "VW Golf 6",
    price: 137,
    img: Golf6,
    model: "Golf 6",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Oui",
    transmission: "Manuelle",
    fuel: "Diesel",
  },

  {
    name: "Audi A1 S-Line",
    price: 145,
    img: AudiA1,
    model: "Audi",
    mark: "A1",
    year: "2012",
    doors: "4/5",
    air: "Oui",
    transmission: "Automatique",
    fuel: "Gasoline",
  },

  {
    name: "Toyota Camry",
    price: 130,
    img: Toyota,
    model: "Camry",
    mark: "Toyota",
    year: "2006",
    doors: "4/5",
    air: "Oui",
    transmission: "Automatic",
    fuel: "Hybrid",
  },

  {
    name: "BMW 320 ModernLine",
    price: 135,
    img: Bmw320,
    model: "320",
    mark: "BMW",
    year: "2012",
    doors: "4/5",
    air: "Oui",
    transmission: "Automatic",
    fuel: "Diesel",
  },

  {
    name: "Mercedes-Benz GLK",
    price: 150,
    img: Benz,
    model: "Benz GLK",
    mark: "Mercedes",
    year: "2006",
    doors: "4/5",
    air: "Oui",
    transmission: "Manuelle",
    fuel: "Diesel",
  },

  {
    name: "VW Passat CC",
    price: 125,
    img: Passat,
    model: "Passat CC",
    mark: "Volkswagen",
    year: "2008",
    doors: "4/5",
    air: "Oui",
    transmission: "Automatic",
    fuel: "Gasoline",
  },
  {
    name: "Audi A3 (8V)",
    price: 225,
    img: audia3v8,
    model: "A3",
    mark: "Audi",
    year: "2014",
    doors: "3",
    air: "Oui",
    transmission: "Automatic",
    fuel: "Diesel",
  },
];

export const CAR_IMAGES: Record<string, StaticImageData> = {
  Golf6,
  AudiA1,
  Toyota,
  Bmw320,
  Benz,
  Passat,
  audia3v8,
}; 