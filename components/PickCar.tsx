// PickCar.js
"use client";

import { useState } from "react";
import CarBox from "./CarBox";

function PickCar() {
  const [active, setActive] = useState<string>("SecondCar");
  const [colorBtn, setColorBtn] = useState<string>("btn1");

  const btnID = (id: string) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  return (
    <section className="py-20 px-4 bg-white" id="pick__section">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-medium text-[#ff4d30]">Nos véhicules</h3>
          <h2 className="text-4xl font-bold my-4">Notre flotte de location</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choisissez parmi notre variété de véhicules exceptionnels pour votre
            prochaine aventure ou voyage d&apos;affaires
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Car Buttons */}
          <div className="lg:w-1/5 flex flex-col gap-1">
            {[
              { id: "btn1", car: "SecondCar", name: "Audi A1 S-Line" },
              { id: "btn2", car: "FirstCar", name: "VW Golf 6" },
              { id: "btn3", car: "ThirdCar", name: "Toyota Camry" },
              { id: "btn4", car: "FourthCar", name: "BMW 320 ModernLine" },
              { id: "btn5", car: "FifthCar", name: "Mercedes-Benz GLK" },
              { id: "btn6", car: "SixthCar", name: "VW Passat CC" },
              { id: "btn7", car: "SeventhCar", name: "Audi A3 (8V)" },
            ].map((button) => (
              <button
                key={button.id}
                className={`text-left p-4 transition-all duration-300
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
                <span className="text-lg font-medium">{button.name}</span>
              </button>
            ))}
          </div>

          {/* Right Column - CarBox Component */}
          <div className="lg:w-4/5">
            {active === "SecondCar" && <CarBox carID={0} />}
            {active === "FirstCar" && <CarBox carID={1} />}
            {active === "ThirdCar" && <CarBox carID={2} />}
            {active === "FourthCar" && <CarBox carID={3} />}
            {active === "FifthCar" && <CarBox carID={4} />}
            {active === "SixthCar" && <CarBox carID={5} />}
            {active === "SeventhCar" && <CarBox carID={6} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PickCar;
