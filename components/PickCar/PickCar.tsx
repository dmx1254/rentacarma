"use client";

import { useState } from "react";
import CarBox from "./CarBox";

interface CarButton {
  id: string;
  car: string;
  name: string;
}

const carButtons: CarButton[] = [
  { id: "btn1", car: "SecondCar", name: "Audi A1 S-Line" },
  { id: "btn2", car: "FirstCar", name: "VW Golf 6" },
  { id: "btn3", car: "ThirdCar", name: "Toyota Camry" },
  { id: "btn4", car: "FourthCar", name: "BMW 320 ModernLine" },
  { id: "btn5", car: "FifthCar", name: "Mercedes-Benz GLK" },
  { id: "btn6", car: "SixthCar", name: "VW Passat CC" },
  { id: "btn7", car: "SeventhCar", name: "Audi A3 (8V)" },
];

const carIDMap: { [key: string]: number } = {
  SecondCar: 0,
  FirstCar: 1,
  ThirdCar: 2,
  FourthCar: 3,
  FifthCar: 4,
  SixthCar: 5,
  SeventhCar: 6,
};

const PickCar: React.FC = () => {
  const [active, setActive] = useState<string>("SecondCar");
  const [colorBtn, setColorBtn] = useState<string>("btn1");

  const btnID = (id: string): void => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white" id="pick__section">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h3 className="text-xl md:text-2xl font-medium text-[#ff4d30]">Nos véhicules</h3>
          <h2 className="text-3xl md:text-4xl font-bold my-3 md:my-4">Notre flotte de location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Choisissez parmi notre variété de véhicules exceptionnels pour votre
            prochaine aventure ou voyage d&apos;affaires
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
          {/* Left Column - Car Buttons */}
          <div className="lg:w-1/5 flex flex-col gap-1">
            {carButtons.map((button) => (
              <button
                key={button.id}
                className={`text-left p-3 md:p-4 transition-all duration-300
                          ${
                            colorBtn === button.id
                              ? "bg-[#ff4d30] text-white"
                              : "bg-[#f8f8f8] hover:bg-gray-100"
                          }`}
                onClick={() => {
                  setActive(button.car);
                  btnID(button.id);
                }}
              >
                <span className="text-base md:text-lg font-medium">{button.name}</span>
              </button>
            ))}
          </div>

          {/* Right Column - CarBox Component */}
          <div className="lg:w-4/5">
            {Object.entries(carIDMap).map(([carName, carID]) => (
              active === carName && <CarBox key={carName} carID={carID} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickCar; 