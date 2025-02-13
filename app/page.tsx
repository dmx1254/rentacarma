import React from "react";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"));
const Hero = dynamic(() => import("@/components/Hero"));
const BookCar = dynamic(() => import("@/components/BookCar"));
const PlanTrip = dynamic(() => import("@/components/PlanTrip"));
const PickCar = dynamic(() => import("@/components/PickCar"));
const ChooseUs = dynamic(() => import("@/components/ChooseUs"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Faq = dynamic(() => import("@/components/Faq"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <div className="font-poppins w-full flex flex-col gap-12">
      <div>
        <Navbar />
        <Hero />
      </div>
      <BookCar />
      <PlanTrip />
      <PickCar />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  );
}
