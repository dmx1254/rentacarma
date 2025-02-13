"use client";

import { useState } from "react";
// import "./navbar.css";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
// import MobileNavbar from './MobileNavbar/MobileNavbar'

function Navbar() {
  const [nav, setNav] = useState<boolean>(false);

  return (
    <div className="w-full font-poppins">
      <nav className="w-full">
        {/* desktop */}

        <div className="absolute w-full flex items-center justify-between px-11 py-8 my-0 mx-auto top-0 left-0 right-0 z-[9999] bg-transparent h-auto">
          <div className="w-28">
            <Link href="/" onClick={() => window.scrollTo(0, 0)}>
              <Image
                src={logo}
                alt="logo-img"
                loading="lazy"
                width={100}
                height={100}
                className="object-cover object-center"
              />
            </Link>
          </div>
          <ul className="hidden md:flex items-center gap-8 transition-colors">
            <li className="hover:text-[#ff4d30]">
              <Link href="/">Accueil</Link>
            </li>
            <li className="hover:text-[#ff4d30]">
              <Link href="#about">À propos</Link>
            </li>
            <li className="hover:text-[#ff4d30]">
              <Link href="#pick__section">Nos véhicules</Link>
            </li>
            <li className="hover:text-[#ff4d30]">
              <Link href="#testimonials">Témoignages</Link>
            </li>
          </ul>
          <div className="hidden md:flex items-center gap-4">
            <Link className="hover:text-[#ff4d30]" href="/">
              Connexion
            </Link>
            <Link className="bg-[#ff4d30] text-white p-4 rounded" href="/">
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
}

export default Navbar;
