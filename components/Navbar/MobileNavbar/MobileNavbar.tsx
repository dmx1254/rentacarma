"use client";

import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  href: string;
}

const menuItems: MenuItem[] = [
  { title: "Accueil", href: "/" },
  { title: "À propos", href: "#about" },
  { title: "Nos véhicules", href: "#pick__section" },
  { title: "Témoignages", href: "#testimonials" },
];

const MobileNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleLinkClick = (): void => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
            isOpen ? "hidden" : "block"
          }`}
          aria-label="Menu"
        >
          <IconMenu2 className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] z-[9999] bg-white">
        <SheetHeader className="mb-8">
          <SheetTitle className="text-xl md:text-2xl font-bold">
            <span className="text-[#ff4d30]">AUTO</span> Location
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 md:mt-12">
          <ul className="space-y-3 md:space-y-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  onClick={handleLinkClick}
                  className="text-base md:text-lg font-medium text-gray-600 hover:text-[#ff4d30] transition-colors block py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact info at bottom */}
        <div className="absolute bottom-8 left-6 right-6">
          <div className="space-y-2 text-sm text-gray-500">
            <p className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:0600000000" className="hover:text-[#ff4d30] transition-colors">
                06 00 00 00 00
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:contact@autolocation.ma" className="hover:text-[#ff4d30] transition-colors">
                contact@autolocation.ma
              </a>
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar; 