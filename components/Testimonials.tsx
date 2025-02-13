"use client";

import React from "react";
import { IconQuote } from "@tabler/icons-react";
import Img2 from "@/public/pfp1.jpg";
import Img3 from "@/public/pfp2.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { TestI } from "@/lib/utils";

function Testimonials() {
  const testimonials: TestI[] = [
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

  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-[#ff4d30] font-semibold text-lg mb-4 block">
            Avis de nos clients
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Témoignages clients
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Découvrez l&apos;impact positif que nous avons eu sur nos clients en
            lisant leurs témoignages. Nos clients ont expérimenté nos services
            et nos résultats, et ils souhaitent partager leurs expériences
            positives avec vous.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl 
                       transition-all duration-300 relative group"
            >
              {/* Quote Icon */}
              <div
                className="absolute -top-4 -left-4 bg-[#ff4d30] rounded-full p-4
                          transform group-hover:-translate-y-1 transition-transform duration-300"
              >
                <IconQuote className="text-white w-6 h-6" strokeWidth={3} />
              </div>

              {/* Testimonial Content */}
              <div className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-[#ff4d30]/10">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.author}</h4>
                    <p className="text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>

              {/* Decorative quote mark */}
              <IconQuote
                className="absolute bottom-6 right-8 text-gray-100 w-24 h-24 pointer-events-none"
                strokeWidth={1}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
