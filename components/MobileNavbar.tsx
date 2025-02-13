"use client";

import React, { useState } from "react";
import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "Models", href: "/" },
    { title: "Testimonials", href: "/" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button
          className={`p-2 hover:bg-gray-100 rounded-lg transition-colors ${
            isOpen ? "hidden" : "block"
          }`}
        >
          <IconMenu2 className="w-6 h-6" />
        </button>
      </SheetTrigger>
      <SheetContent
        className="w-[300px] sm:w-[400px] z-[9999] bg-white"
        side="left"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">
            <span className="text-[#ff4d30]">AUTO</span> Location
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-12">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className="text-lg font-medium text-gray-600 hover:text-[#ff4d30] transition-colors block py-2 px-4 rounded-lg hover:bg-gray-50"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Optional: Contact info at bottom */}
        <div className="absolute bottom-8 left-6">
          <div className="space-y-2 text-sm text-gray-500">
            <p>📞 06 00 00 00 00</p>
            <p>✉️ contact@autolocation.ma</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavbar;
