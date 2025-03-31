"use client";

import SelectCar from "./icon1.svg";
import Contact from "./icon2.svg";
import Drive from "./icon3.svg";
import Image from "next/image";

interface TripBoxProps {
  icon: string;
  title: string;
  description: string;
}

const tripBoxes: TripBoxProps[] = [
  {
    icon: SelectCar,
    title: "Choisissez votre voiture",
    description: "Nous proposons une large gamme de véhicules pour tous vos besoins. Nous avons la voiture parfaite qui vous correspond",
  },
  {
    icon: Contact,
    title: "Contactez un conseiller",
    description: "Nos conseillers expérimentés et sympathiques sont toujours prêts à répondre à vos questions ou préoccupations",
  },
  {
    icon: Drive,
    title: "Prenez la route",
    description: "Que vous partiez à l'aventure, nous vous accompagnons avec notre large gamme de véhicules",
  },
];

const PlanTrip: React.FC = () => {
  return (
    <section
      id="about"
      className="bg-white py-12 md:py-16 lg:py-20 flex justify-center items-center text-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="mx-auto text-center text-[#010103]">
            <h3 className="text-xl md:text-2xl font-medium font-poppins">
              Planifiez votre voyage maintenant
            </h3>
            <h2 className="text-3xl md:text-4xl font-poppins font-bold my-3 md:my-5">
              Location de voiture rapide &amp; facile
            </h2>
          </div>

          {/* Boxes Grid */}
          <div className="flex max-md:flex-col flex-row items-center justify-center gap-8 md:gap-12 mt-8">
            {tripBoxes.map((box, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center px-4 w-full md:w-1/3"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
                  <Image 
                    src={box.icon} 
                    alt={`${box.title} icon`} 
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl md:text-2xl mb-3 md:mb-4 font-bold">
                  {box.title}
                </h3>
                <p className="text-sm md:text-base text-[#706f7b] leading-relaxed font-poppins">
                  {box.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanTrip; 