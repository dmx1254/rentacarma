import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import BookCar from "@/components/BookCar/BookCar";
import PlanTrip from "@/components/PlanTrip/PlanTrip";
import PickCar from "@/components/PickCar/PickCar";
import ChooseUs from "@/components/ChooseUs/ChooseUs";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/faq/Faq";
import Footer from "@/components/Footer/Footer";


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
