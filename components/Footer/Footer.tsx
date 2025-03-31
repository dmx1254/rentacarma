"use client";

import React, { useState } from "react";
import Link from "next/link";

interface CompanyLink {
  text: string;
  href: string;
}

const companyLinks: CompanyLink[] = [
  { text: "À propos", href: "#about" },
  { text: "Carrières", href: "#careers" },
  { text: "Application mobile", href: "#app" },
  { text: "Blog", href: "#blog" },
  { text: "Comment ça marche", href: "#how-it-works" },
];

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
          {/* Company Info */}
          <div className="space-y-4 md:space-y-6 text-center sm:text-left">
            <h2 className="text-xl md:text-2xl">
              <span className="font-bold">AUTO</span> Location
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Nous proposons une large gamme de véhicules pour tous vos besoins
              de conduite. Nous avons la voiture parfaite qui vous correspond.
            </p>
            <div className="space-y-2">
              <Link
                href="tel:0600000000"
                className="flex items-center hover:text-[#ff4d30] transition-colors justify-center sm:justify-start"
              >
                📞 06 00 00 00 00
              </Link>
              <Link
                href="mailto:contact@autolocation.ma"
                className="flex items-center hover:text-[#ff4d30] transition-colors justify-center sm:justify-start"
              >
                ✉️ contact@autolocation.ma
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-4 md:mb-6">Société</h2>
            <ul className="space-y-3 md:space-y-4">
              {companyLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-[#ff4d30] transition-colors text-sm md:text-base"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-4 md:mb-6">
              Horaires d&apos;ouverture
            </h2>
            <ul className="space-y-3 md:space-y-4 text-gray-600 text-sm md:text-base">
              <li>Lun - Ven : 9h00 - 21h00</li>
              <li>Sam : 9h00 - 19h00</li>
              <li>Dim : Fermé</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl md:text-2xl font-bold uppercase mb-4 md:mb-6">Newsletter</h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm md:text-base">
                Inscrivez-vous à notre newsletter pour recevoir nos actualités
                et offres.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre adresse email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-[#ff4d30] transition-all text-sm md:text-base"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-[#ff4d30] text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-lg shadow-[0_10px_15px_rgba(255,77,48,0.25)] hover:shadow-[0_10px_15px_rgba(255,77,48,0.4)] hover:bg-[#fa4226] transition-all duration-300 border-2 border-[#ff4d30] text-sm md:text-base"
                >
                  S&apos;inscrire
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 md:mt-10 pt-6 md:pt-8 border-t border-gray-100 text-center text-gray-500 text-sm md:text-base">
          <p>
            © {new Date().getFullYear()} Auto Location. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 