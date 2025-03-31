"use client";

import { useState } from "react";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar/MobileNavbar";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full font-poppins">
      <nav className="w-full">
        {/* desktop */}
        <div className="absolute w-full flex items-center justify-between px-4 md:px-8 lg:px-11 py-4 md:py-6 lg:py-8 my-0 mx-auto top-0 left-0 right-0 z-[9999] bg-transparent h-auto">
          <div className="w-20 md:w-24 lg:w-28">
            <Link href="/" onClick={scrollToTop}>
              <Image
                src={logo}
                alt="logo-img"
                width={100}
                height={100}
                className="object-cover object-center"
                priority
              />
            </Link>
          </div>
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 transition-colors">
            <li className="hover:text-[#ff4d30] transition-colors">
              <Link href="/" className="text-base lg:text-lg">Accueil</Link>
            </li>
            <li className="hover:text-[#ff4d30] transition-colors">
              <Link href="#about" className="text-base lg:text-lg">À propos</Link>
            </li>
            <li className="hover:text-[#ff4d30] transition-colors">
              <Link href="#pick__section" className="text-base lg:text-lg">Nos véhicules</Link>
            </li>
            <li className="hover:text-[#ff4d30] transition-colors">
              <Link href="#testimonials" className="text-base lg:text-lg">Témoignages</Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <Link 
              className="hover:text-[#ff4d30] transition-colors text-base lg:text-lg" 
              href="/"
            >
              Connexion
            </Link>
            <Link 
              className="bg-[#ff4d30] text-white px-4 py-2 md:px-6 md:py-3 rounded transition-all duration-300 hover:bg-[#fa4226] text-base lg:text-lg" 
              href="/"
            >
              Inscription
            </Link>
          </div>

          {/* mobile */}
          <div className="flex md:hidden">
            <MobileNavbar />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 