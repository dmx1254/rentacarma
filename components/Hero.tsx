"use client";

import BgShape from "@/public/hero-bg.svg";
import HeroCar from "@/public/main-car.png";
import { useEffect, useState, memo } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
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
      className="font-poppins w-full h-[97vh] bg-[#f8f8f8] relative pl-5 flex items-center justify-center"
    >
      <div className="container">
        <Image
          className="absolute top-0 right-0 z-10 md:block hidden"
          src={BgShape}
          alt="bg-shape"
          loading="lazy"
        />
        <div className="w-full h-screen flex items-center relative md:justify-start justify-center">
          <div className="flex flex-col z-30 max-w-[55rem] mt-40 md:mt-20 md:text-left text-center md:items-start items-center">
            <h4 className="text-2xl text-[#010103] font-bold">
              Planifiez votre voyage maintenant
            </h4>
            <h1 className="text-5xl font-bold text-[#010103] leading-tight mt-4 mb-6">
              Faites des <span className="text-[#ff4d30]">économies</span> avec
              notre service de location
            </h1>
            <p className="text-2xl leading-relaxed text-[#3f3f43] mb-16">
              Louez la voiture de vos rêves. Prix imbattables, kilométrage
              illimité, options de prise en charge flexibles et bien plus
              encore.
            </p>
            <div className="flex gap-8 text-base cursor-pointer sm:flex-row flex-col">
              <Link
                onClick={bookBtn}
                className="bg-[#ff4d30] px-8 py-4 rounded text-white font-bold flex items-center border-2 border-[#ff4d30] shadow-[0_10px_15px_0_rgba(255,83,48,0.35)] hover:shadow-[0_10px_15px_0_rgba(255,83,48,0.6)] hover:bg-[#fa4226] transition-all duration-300"
                href="#booking-section"
              >
                Réserver &nbsp; <IconCircleCheck />
              </Link>
              <Link
                className="bg-[#010103] px-5 py-4 rounded text-white font-bold flex items-center border-2 border-[#010103] hover:bg-transparent hover:text-[#010103] transition-all duration-300"
                href="/"
              >
                En savoir plus &nbsp; <IconChevronRight />
              </Link>
            </div>
          </div>

          <Image
            src={HeroCar}
            alt="car-img"
            className="z-20 absolute right-0 w-1/2 mt-20 md:block hidden"
            loading="lazy"
          />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`fixed text-xl text-white bg-[#ff4d30] border-3 border-white w-5 h-5 bottom-20 right-20 z-20 items-center text-center justify-center p-4 cursor-pointer ${
          goUp ? "flex" : "hidden"
        }`}
      >
        ^
      </div>
    </section>
  );
}

export default memo(Hero);
