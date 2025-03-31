"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { formatPrice } from "@/lib/utils";
import { CAR_DATA } from "./CarData";

interface CarSpec {
  label: string;
  value: string;
}

interface CarBoxProps {
  carID: number;
}

const CarBox: React.FC<CarBoxProps> = ({ carID }) => {
  const [carLoad, setCarLoad] = useState<boolean>(true);
  const [car, setCar] = useState(CAR_DATA[0]);

  const handleImageLoad = (): void => {
    setCarLoad(false);
  };

  useEffect(() => {
    if (carID !== undefined) {
      const selectedCar = CAR_DATA.find((car, index) => index === carID);
      if (selectedCar) {
        setCar(selectedCar);
      }
    }
  }, [carID]);

  const carSpecs: CarSpec[] = [
    { label: "Modèle", value: car.model },
    { label: "Marque", value: car.mark },
    { label: "Année", value: car.year },
    { label: "Portes", value: car.doors },
    { label: "Climatisation", value: car.air },
    { label: "Transmission", value: car.transmission },
    { label: "Carburant", value: car.fuel },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 p-4 md:p-8 rounded-xl"
    >
      {/* Car Image */}
      <div className="md:col-span-8 relative h-[300px] md:h-[400px] lg:h-[500px]">
        {carLoad && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 md:w-12 md:h-12 border-4 border-[#ff4d30] border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={car.img}
          alt={car.name}
          fill
          className="object-contain"
          onLoad={handleImageLoad}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
        />
      </div>

      {/* Car Details */}
      <div className="md:col-span-4 w-full md:w-[300px] flex flex-col">
        {/* Price */}
        <div className="bg-[#ff4d30] text-white py-2 md:py-3 px-3 md:px-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <span className="text-2xl md:text-3xl font-bold">{formatPrice(car.price)}</span>
            <span className="text-sm md:text-base">/ par jour</span>
          </div>
        </div>

        {/* Specs */}
        <div className="border-x border-b border-gray-200">
          {carSpecs.map((spec, index) => (
            <div
              key={index}
              className="grid grid-cols-[1fr,auto,1fr] items-center border-b border-gray-200 last:border-b-0"
            >
              <span className="p-3 md:p-4 text-sm md:text-base text-gray-700">{spec.label}</span>
              <span className="text-gray-300">|</span>
              <span className="p-3 md:p-4 text-sm md:text-base text-right">{spec.value}</span>
            </div>
          ))}
        </div>

        {/* Book Button */}
        <Link
          href="#booking-section"
          className="mt-4 md:mt-6 text-center py-3 md:py-4 bg-[#ff4d30] text-white text-base md:text-lg font-bold
                   rounded-lg transition-all duration-300 hover:bg-[#fa3816]
                   shadow-lg hover:shadow-[#ff4d30]/30"
        >
          Réserver maintenant
        </Link>
      </div>
    </motion.div>
  );
};

export default CarBox; 