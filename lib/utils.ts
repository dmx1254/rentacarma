import { clsx, type ClassValue } from "clsx";
import { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertDate = (date: string | Date) => {
  const dateConverted = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return dateConverted;
};

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("ar-MA", {
    style: "currency",
    currency: "MAD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number(price));
};

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TestI {
  quote: string;
  author: string;
  location: string;
  image: StaticImageData;
}
