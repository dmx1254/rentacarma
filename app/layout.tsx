import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "rentacarma | Location de Voiture au Maroc | Prix Imbattables | Kilométrage Illimité",
  description: "Location de voiture au Maroc avec les meilleurs prix. Service de location de voiture avec kilométrage illimité, assurance tous risques et prise en charge flexible. Réservez votre voiture de location au Maroc en ligne.",
  keywords: "location voiture maroc, location auto maroc, location voiture pas cher maroc, location voiture kilométrage illimité maroc, location voiture aéroport maroc, location voiture casablanca, location voiture marrakech, location voiture agadir, location voiture rabat, location voiture maroc prix, location voiture maroc pas cher, location voiture maroc kilométrage illimité, location voiture maroc assurance tous risques, location voiture maroc en ligne, location voiture maroc réservation, location voiture maroc service client, location voiture maroc prix bas, location voiture maroc sans caution, location voiture maroc sans carte de crédit, location voiture maroc sans frais cachés",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
