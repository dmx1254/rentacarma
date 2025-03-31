"use client";

import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import MainImg from "./main.png";
import Box1 from "./icon1-1.svg";
import Box2 from "./icon2-1.svg";
import Box3 from "./icon3-1.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BoxProps {
  icon: string;
  title: string;
  desc: string;
}

const boxes: BoxProps[] = [
  {
    icon: Box1,
    title: "Voyages interurbains",
    desc: "Élevez votre expérience de conduite avec nos véhicules de qualité supérieure pour vos voyages à travers le Maroc.",
  },
  {
    icon: Box2,
    title: "Prix tout compris",
    desc: "Bénéficiez de tout ce dont vous avez besoin dans un prix unique et transparent avec notre politique de tarification tout inclus.",
  },
  {
    icon: Box3,
    title: "Pas de frais cachés",
    desc: "Profitez d'une tranquillité d'esprit totale avec notre politique sans frais cachés. Nous croyons en une tarification transparente.",
  },
];

const ChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          {/* Image Section avec effet de flottement */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full md:w-4/5 mx-auto lg:w-2/3 overflow-hidden"
          >
            <Image
              src={MainImg}
              alt="car_img"
              className="object-cover rounded-2xl shadow-2xl"
              priority
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 66vw"
            />
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine rounded-2xl" />
          </motion.div>

          <div className="mt-12 md:mt-16 lg:mt-20 flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-24">
            {/* Left Text Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:max-w-xl"
            >
              <h4 className="text-[#ff4d30] text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Pourquoi nous choisir
              </h4>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                Les meilleures offres que vous trouverez
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                Découvrez les meilleures offres avec nos prix imbattables. Nous
                nous engageons à vous offrir le meilleur rapport qualité-prix,
                pour que vous puissiez profiter de services et de véhicules haut
                de gamme sans vous ruiner.
              </p>
              <Link
                href="#home"
                className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-[#ff4d30] text-white font-bold
                         rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]
                         hover:shadow-[0_10px_20px_rgba(255,77,48,0.4)] group"
              >
                En savoir plus
                <IconChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right Boxes Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-8 md:space-y-12"
            >
              {boxes.map((box, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start gap-4 md:gap-6 group p-4 md:p-6 rounded-xl 
                           hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 md:w-24 md:h-24 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={box.icon}
                      alt={box.title}
                      className="w-full h-full object-contain"
                      width={96}
                      height={96}
                    />
                  </div>
                  <div className="space-y-2 md:space-y-3">
                    <h4 className="text-xl md:text-2xl font-bold group-hover:text-[#ff4d30] transition-colors">
                      {box.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{box.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-48 md:w-72 h-48 md:h-72 bg-[#ff4d30]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default ChooseUs; 