"use client";

import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import MainImg from "@/public/main.png";
import Box1 from "@/public/icon1-1.svg";
import Box2 from "@/public/icon2-1.svg";
import Box3 from "@/public/icon3-1.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ChooseUs() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          {/* Image Section avec effet de flottement */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-4/5 mx-auto lg:w-2/3 overflow-hidden" // Ajout de overflow-hidden ici
          >
            <Image
              src={MainImg}
              alt="car_img"
              className="object-cover rounded-2xl shadow-2xl"
              priority
            />
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine rounded-2xl" />
          </motion.div>

          <div className="mt-20 flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Text Section */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:max-w-xl"
            >
              <h4 className="text-[#ff4d30] text-xl font-semibold mb-4">
                Pourquoi nous choisir
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Les meilleures offres que vous trouverez
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Découvrez les meilleures offres avec nos prix imbattables. Nous
                nous engageons à vous offrir le meilleur rapport qualité-prix,
                pour que vous puissiez profiter de services et de véhicules haut
                de gamme sans vous ruiner.
              </p>
              <Link
                href="#home"
                className="inline-flex items-center px-8 py-4 bg-[#ff4d30] text-white font-bold
                         rounded-lg transition-all duration-300 transform hover:translate-y-[-2px]
                         hover:shadow-[0_10px_20px_rgba(255,77,48,0.4)] group"
              >
                En savoir plus
                <IconChevronRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Right Boxes Section */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-1 space-y-12"
            >
              {[
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
              ].map((box, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-start gap-6 group p-6 rounded-xl 
                           hover:bg-white hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-24 h-24 shrink-0 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={box.icon}
                      alt={box.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-2xl font-bold group-hover:text-[#ff4d30] transition-colors">
                      {box.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{box.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-[#ff4d30]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
}

export default ChooseUs;
