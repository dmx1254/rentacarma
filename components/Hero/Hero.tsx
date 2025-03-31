"use client";

import BgShape from "./hero-bg.svg";
import HeroCar from "./main-car.png";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Hero: React.FC = () => {
  const [goUp, setGoUp] = useState<boolean>(false);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookBtn = (): void => {
    const bookingSection = document.querySelector("#booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onPageScroll = (): void => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="font-poppins w-full min-h-screen bg-[#f8f8f8] relative"
    >
      {/* Background shape for desktop */}
      <Image
        className="absolute top-0 right-0 z-10 hidden md:block"
        src={BgShape}
        alt="bg-shape"
        width={800}
        height={600}
        priority
      />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex max-md:flex-col min-h-screen">
          {/* Mobile Car Image */}
          <div className="md:hidden w-full -mt-4 mb-8">
            <div className="relative w-full h-[300px]">
              <Image
                src={HeroCar}
                alt="car-img"
                className="object-contain"
                fill
                priority
                sizes="(max-width: 768px) 100vw"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center z-30 md:w-1/2 text-center md:text-left">
            <h4 className="text-xl md:text-2xl text-[#010103] font-bold tracking-wide">
              Planifiez votre voyage maintenant
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-[#010103] leading-tight mt-4 mb-6">
              Faites des <span className="text-[#ff4d30]">économies</span> avec
              notre service de location
            </h1>
            <p className="text-lg md:text-xl text-[#706f7b] leading-relaxed mb-10">
              Louez la voiture de vos rêves. Prix imbattables, kilométrage
              illimité, options de prise en charge flexibles et bien plus
              encore.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link
                onClick={bookBtn}
                href="#booking-section"
                className="w-full sm:w-[200px] bg-[#ff4d30] px-6 py-4 rounded-[6px] text-white font-bold flex items-center justify-center gap-2 border-2 border-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,0.35)] hover:shadow-[0_10px_15px_0_rgba(255,83,48,0.6)] hover:bg-[#fa4226] transition-all duration-300"
              >
                Réserver <IconCircleCheck className="w-5 h-5" />
              </Link>
              <Link
                href="/"
                className="w-full sm:w-[200px] bg-[#010103] px-6 py-4 rounded-[6px] text-white font-bold flex items-center justify-center gap-2 border-2 border-[#010103] hover:bg-transparent hover:text-[#010103] transition-all duration-300"
              >
                En savoir plus <IconChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Desktop Car Image */}
          <div className="hidden md:block md:w-1/2 relative">
            <div className="absolute inset-0 flex items-center">
              <Image
                src={HeroCar}
                alt="car-img"
                className="object-contain z-10"
                width={800}
                height={600}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed text-xl text-white bg-[#ff4d30] border-2 border-white w-12 h-12 bottom-8 right-8 z-50 flex items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:bg-[#fa4226] ${
          goUp ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Retour en haut"
      >
        ^
      </button>
    </section>
  );
};

export default Hero; 