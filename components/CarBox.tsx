// CarBox.js
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CAR_DATA, Car } from "@/lib/cardata";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";

function CarBox({ carID }: { carID: number }) {
  const [carLoad, setCarLoad] = useState(true);
  const [car, setCar] = useState<Car | null>(CAR_DATA[0]);

  const handleImageLoad = () => {
    setCarLoad(false);
  };

  useEffect(() => {
    if (carID) {
      setCar(CAR_DATA.find((car, index) => index === carID) || null);
    }
  }, [carID]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-12 gap-8 p-8 rounded-xl"
    >
      {/* Car Image - Now takes 8 columns */}
      <div className="col-span-8 relative h-[500px]">
        {carLoad && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-[#ff4d30] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={car?.img || ""}
          alt={car?.name || "car"}
          fill
          className="object-contain"
          onLoad={handleImageLoad}
          priority
        />
      </div>

      {/* Car Details - Takes 4 columns */}
      <div className="w-[300px] flex flex-col">
        {/* Price */}
        <div className="bg-[#ff4d30] text-white py-3 px-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">
              {formatPrice(car?.price || 0)}
            </span>
            <span className="text-base">/ par jour</span>
          </div>
        </div>

        {/* Specs - Alternative style with cards */}
        <div className="border-x border-b border-gray-200">
          {[
            { label: "Model", value: car?.model },
            { label: "Mark", value: car?.mark },
            { label: "Year", value: car?.year },
            { label: "Doors", value: car?.doors },
            { label: "AC", value: car?.air },
            { label: "Transmission", value: car?.transmission },
            { label: "Fuel", value: car?.fuel },
          ].map((spec, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr,auto,1fr] items-center border-b border-gray-200 last:border-b-0"
            >
              <span className="p-4 text-gray-700">{spec.label}</span>
              <span className="text-gray-300">|</span>
              <span className="p-4 text-right">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Book Button */}
        <Link
          href="#booking-section"
          className="mt-6 text-center py-4 bg-[#ff4d30] text-white text-lg font-bold
                   rounded-lg transition-all duration-300 hover:bg-[#fa3816]
                   shadow-lg hover:shadow-[#ff4d30]/30"
        >
          Réserver maintenant
        </Link>
      </div>
    </motion.div>
  );
}

export default CarBox;
