"use client";

import SelectCar from "@/public/icon1.svg";
import Contact from "@/public/icon2.svg";
import Drive from "@/public/icon3.svg";
import Image from "next/image";

function PlanTrip() {
  return (
    <section
      id="about"
      className="bg-white py-20 flex justify-center items-center text-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col">
          {/* Title Section */}
          <div className="mx-auto text-center text-[#010103]">
            <h3 className="text-2xl font-medium font-poppins">
              Planifiez votre voyage maintenant
            </h3>
            <h2 className="text-4xl font-poppins font-bold my-5">
              Location de voiture rapide &amp; facile
            </h2>
          </div>

          {/* Boxes Grid */}
          <div className="flex max-md:flex-col flex-row items-center justify-center gap-12 mt-8">
            {/* Box 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <Image src={SelectCar} alt="icon_img" loading="lazy" />
              <h3 className="text-2xl mb-4 font-bold">
                Choisissez votre voiture
              </h3>
              <p className="text-base text-[#706f7b] leading-relaxed font-poppins">
                Nous proposons une large gamme de véhicules pour tous vos
                besoins. Nous avons la voiture parfaite qui vous correspond
              </p>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col items-center text-center px-4">
              <Image src={Contact} alt="icon_img" loading="lazy" />
              <h3 className="text-2xl mb-4 font-bold">
                Contactez un conseiller
              </h3>
              <p className="text-base text-[#706f7b] leading-relaxed font-poppins">
                Nos conseillers expérimentés et sympathiques sont toujours prêts
                à répondre à vos questions ou préoccupations
              </p>
            </div>

            {/* Box 3 */}
            <div className="flex flex-col items-center text-center px-4">
              <Image src={Drive} alt="icon_img" loading="lazy" />
              <h3 className="text-2xl mb-4 font-bold">Prenez la route</h3>
              <p className="text-base text-[#706f7b] leading-relaxed font-poppins">
                Que vous partiez à l&apos;aventure, nous vous accompagnons avec
                notre large gamme de véhicules
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlanTrip;
