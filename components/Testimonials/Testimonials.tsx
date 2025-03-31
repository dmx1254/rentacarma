"use client";

import React from "react";
import { IconQuote } from "@tabler/icons-react";
import Img2 from "./pfp1.jpg";
import Img3 from "./pfp2.jpg";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Nous avons loué une voiture sur ce site et l'expérience était exceptionnelle ! La réservation était simple et les tarifs très abordables.",
    author: "Hassan Alami",
    location: "Casablanca",
    image: Img2,
  },
  {
    quote:
      "La voiture était en excellent état et a rendu notre voyage encore plus agréable. Je recommande vivement ce site de location de voitures !",
    author: "Karim Benani",
    location: "Marrakech",
    image: Img3,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-48 md:w-72 h-48 md:h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-20"
        >
          <span className="text-[#ff4d30] font-semibold text-base md:text-lg mb-3 md:mb-4 block">
            Avis de nos clients
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Témoignages clients
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Découvrez l&apos;impact positif que nous avons eu sur nos clients en
            lisant leurs témoignages. Nos clients ont expérimenté nos services
            et nos résultats, et ils souhaitent partager leurs expériences
            positives avec vous.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div
                className="absolute -top-4 -left-4 bg-[#ff4d30] rounded-full p-3 md:p-4
                          transform group-hover:-translate-y-1 transition-transform duration-300"
              >
                <IconQuote className="text-white w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
              </div>

              {/* Testimonial Content */}
              <div className="pt-4 md:pt-6">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8 italic">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ring-4 ring-[#ff4d30]/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-base md:text-lg">{testimonial.author}</h4>
                    <p className="text-gray-500 text-sm md:text-base">{testimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <IconQuote
                className="absolute bottom-4 md:bottom-6 right-6 md:right-8 text-gray-100 w-16 h-16 md:w-24 md:h-24 pointer-events-none"
                strokeWidth={1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 