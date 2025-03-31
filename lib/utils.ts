import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD",
  }).format(price);
}

export function convertDate(dateString: string): string {
  if (!dateString) return "";
  
  try {
    // Convertir la chaîne datetime-local en objet Date
    const date = new Date(dateString.replace('T', ' '));
    
    // Vérifier si la date est valide
    if (isNaN(date.getTime())) {
      console.warn("Invalid date string:", dateString);
      return "";
    }

    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  } catch (error) {
    console.error("Error formatting date:", error);
    return "";
  }
} 