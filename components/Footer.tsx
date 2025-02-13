import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-4 gap-20 lg:grid-cols-2 sm:grid-cols-1 sm:gap-10">
          {/* Company Info */}
          <div className="space-y-6 sm:text-center">
            <h2 className="text-2xl">
              <span className="font-bold">AUTO</span> Location
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nous proposons une large gamme de véhicules pour tous vos besoins
              de conduite. Nous avons la voiture parfaite qui vous correspond.
            </p>
            <div className="space-y-2">
              <Link
                href="tel:0600000000"
                className="flex items-center hover:text-[#ff4d30] transition-colors sm:justify-center"
              >
                📞 06 00 00 00 00
              </Link>
              <Link
                href="/"
                className="flex items-center hover:text-[#ff4d30] transition-colors sm:justify-center"
              >
                ✉️ contact@autolocation.ma
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div className="sm:text-center">
            <h2 className="text-2xl font-bold uppercase mb-6">Société</h2>
            <ul className="space-y-4">
              {[
                "À propos",
                "Carrières",
                "Application mobile",
                "Blog",
                "Comment ça marche",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#home"
                    className="text-gray-600 hover:text-[#ff4d30] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="sm:text-center">
            <h2 className="text-2xl font-bold uppercase mb-6">
              Horaires d&apos;ouverture
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>Lun - Ven : 9h00 - 21h00</li>
              <li>Sam : 9h00 - 19h00</li>
              <li>Dim : Fermé</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="sm:text-center">
            <h2 className="text-2xl font-bold uppercase mb-6">Newsletter</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Inscrivez-vous à notre newsletter pour recevoir nos actualités
                et offres.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Entrez votre adresse email"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg outline-none focus:ring-2 focus:ring-[#ff4d30] transition-all"
                />
                <button className="w-full bg-[#ff4d30] text-white font-bold py-4 px-8 rounded-lg shadow-[0_10px_15px_rgba(255,77,48,0.25)] hover:shadow-[0_10px_15px_rgba(255,77,48,0.4)] hover:bg-[#fa4226] transition-all duration-300 border-2 border-[#ff4d30]">
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Add a bottom bar */}
        <div className="mt-10 pt-8 border-t border-gray-100 text-center text-gray-500">
          <p>
            © {new Date().getFullYear()} Auto Location. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
