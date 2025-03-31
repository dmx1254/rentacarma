"use client";

import React, { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: "q1",
    question: "1. Pourquoi comparer les offres de location de voitures ?",
    answer:
      "Comparer les offres de location est important car cela permet de trouver la meilleure offre adaptée à votre budget et à vos besoins, vous garantissant ainsi le meilleur rapport qualité-prix. En comparant différentes options, vous pouvez trouver des offres proposant des prix plus bas, des services supplémentaires ou de meilleurs modèles de voitures.",
  },
  {
    id: "q2",
    question: "2. Comment trouver les meilleures offres de location ?",
    answer:
      "Vous pouvez trouver les meilleures offres en comparant les prix sur notre site. Nous vous recommandons également de vous inscrire à notre newsletter et de nous suivre sur les réseaux sociaux pour être informé de toutes nos promotions et offres spéciales. Notre équipe est également disponible pour vous conseiller sur les meilleures options selon vos besoins.",
  },
  {
    id: "q3",
    question: "3. Comment bénéficier des meilleurs tarifs ?",
    answer:
      "Réservez à l'avance : la réservation anticipée permet souvent d'obtenir de meilleurs tarifs. Profitez de nos offres saisonnières et de nos promotions spéciales. Consultez régulièrement notre site pour les offres exclusives et n'hésitez pas à nous contacter directement pour des devis personnalisés. Pour les locations longue durée, nous proposons des tarifs préférentiels.",
  },
];

const Faq: React.FC = () => {
  const [activeQ, setActiveQ] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
        >
          <span className="text-[#ff4d30] font-bold text-lg md:text-xl mb-2 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Questions fréquemment posées
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Questions fréquentes sur le processus de réservation de voiture sur
            notre site : réponses aux préoccupations et interrogations
            courantes.
          </p>
        </motion.div>

        {/* FAQ Boxes */}
        <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              style={{
                boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              }}
            >
              {/* Question */}
              <button
                onClick={() => setActiveQ(activeQ === faq.id ? null : faq.id)}
                className={`w-full flex justify-between items-center p-4 md:p-6 text-left transition-all duration-300
                          ${
                            activeQ === faq.id
                              ? "bg-[#ff4d30] text-white"
                              : "hover:bg-gray-50"
                          }`}
                aria-expanded={activeQ === faq.id}
              >
                <span className="text-base md:text-lg font-medium">{faq.question}</span>
                <IconChevronDown
                  className={`transform transition-transform duration-300 w-5 h-5 md:w-6 md:h-6
                           ${
                             activeQ === faq.id
                               ? "rotate-180 text-white"
                               : "text-[#ff4d30]"
                           }`}
                />
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeQ === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 md:p-6 bg-white text-gray-600 text-base md:text-lg leading-relaxed border-t">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq; 