"use client";

import { useEffect, useState, memo } from "react";
import CarAudi from "@/public/images/optimized/audia1.webp";
import CarGolf from "@/public/images/optimized/golf6.webp";
import CarToyota from "@/public/images/optimized/toyotacamry.webp";
import CarBmw from "@/public/images/optimized/bmw320.webp";
import CarMercedes from "@/public/images/optimized/benz.webp";
import CarPassat from "@/public/images/optimized/passatcc.webp";
import audia3v8 from "@/public/images/optimized/audiA3V8.webp";
import {
  IconCar,
  IconInfoCircleFilled,
  IconMapPin,
  IconX,
} from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import BookingDialog from "./BookingDialog";

// import "./bookcar.css";

function BookCar() {
  const [modal, setModal] = useState(false); //  class - active-modal
  const [errorMessage, setErrorMessage] = useState(false); // Ajout de cet état
  const [bookingDone, setBookingDone] = useState(false); // Ajout de cet état

  // booking car
  const [carType, setCarType] = useState<string>("");
  const [pickUp, setPickUp] = useState<string>("");
  const [dropOff, setDropOff] = useState<string>("");
  const [pickTime, setPickTime] = useState<string>("");
  const [dropTime, setDropTime] = useState<string>("");
  const [carImg, setCarImg] = useState<string>("");

  // modal infos
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipcode, setZipCode] = useState<string>("");

  const [ageError, setAgeError] = useState<string>("");
  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAge = e.target.value;
    setAge(newAge);

    if (newAge && Number(newAge) < 18) {
      setAgeError("The age is too low");
    } else {
      setAgeError("");
    }
  };

  // const confirmBooking = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   if (ageError) {
  //     alert("Please correct the errors before confirming your booking.");
  //     return;
  //   }

  //   setModal(!modal);
  //   const doneMsg = document.querySelector(".booking-done");
  //   doneMsg.style.display = "flex";
  // };

  // taking value of modal inputs
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };
  /*
  const handleAge = (e) => {
    setAge(e.target.value);
  };
  */

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };

  const handleZip = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

  // taking value of booking inputs
  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDropTime(e.target.value);
  };

  // based on value name show car img
  let imgUrl: StaticImageData;
  switch (carImg) {
    case "Audi A1 S-Line":
      imgUrl = CarAudi;
      break;
    case "VW Golf 6":
      imgUrl = CarGolf;
      break;
    case "Toyota Camry":
      imgUrl = CarToyota;
      break;
    case "BMW 320 ModernLine":
      imgUrl = CarBmw;
      break;
    case "Mercedes-Benz GLK":
      imgUrl = CarMercedes;
      break;
    case "VW Passat CC":
      imgUrl = CarPassat;
      break;
    case "Audi A3 (8V)":
      imgUrl = audia3v8;
      break;
    default:
      imgUrl = CarAudi;
  }

  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  return (
    <section
      id="booking-section"
      className="relative bg-gradient-to-b from-[#f8f8f8] via-[#f8f8f8] to-white font-poppins flex justify-center items-center"
    >
      {/* Overlay */}
      <div
        onClick={openModal}
        className={`fixed w-full h-full bg-black/30 z-[999999999] top-0 right-0 ${
          modal ? "opacity-100 flex" : "opacity-0 hidden"
        }`}
      ></div>
      <div className="container mx-auto mt-10">
        <div className="relative">
          {/* Book Content Box */}
          <div className="herobg-url w-full p-16 sm:p-10 shadow-lg relative z-10 text-[#010103] rounded-lg bg-white bg-[url('/images/optimized/book-bg.png')] bg-center bg-no-repeat bg-cover flex flex-col">
            <h2 className="text-2xl font-bold mb-10">Réserver une voiture</h2>

            {/* Error Message */}
            <p
              className={`text-[#721c24] bg-[#f8d7da] border border-[#f5c6cb] p-4 mb-7 -mt-4 rounded-lg text-base font-medium ${
                errorMessage ? "flex" : "hidden"
              } justify-between items-center`}
            >
              Tous les champs sont obligatoires !
              <IconX className="w-5 h-5 cursor-pointer" />
            </p>

            {/* Booking Done Message */}
            <p
              className={`text-[#2a6817] bg-[#c3fabe] border border-[#f5c6cb] p-4 mb-7 -mt-4 rounded-lg text-base font-medium ${
                bookingDone ? "flex" : "hidden"
              } justify-between items-center`}
            >
              Vérifiez votre email pour confirmer la réservation.
              <IconX className="w-5 h-5 cursor-pointer" onClick={hideMessage} />
            </p>

            {/* Form Grid */}
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Car Select */}
              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconCar className="text-[#ff4d30]" /> &nbsp; Sélectionnez
                  votre véhicule
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  value={carType}
                  onChange={handleCar}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                >
                  <option>Sélectionnez votre véhicule</option>
                  <option>Select your car type</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                  <option value="Audi A3 (8V)">Audi A3 (8V)</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconMapPinFilled className="text-[#ff4d30]" /> &nbsp; Lieu de
                  prise en charge <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  value={pickUp}
                  onChange={handlePick}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                >
                  <option>Sélectionnez le lieu de prise en charge</option>
                  <option>Casablanca</option>
                  <option>Rabat</option>
                  <option>Marrakech</option>
                  <option>Agadir</option>
                  <option>Tanger</option>
                  <option>Fès</option>
                  <option>Meknès</option>
                  <option>Oujda</option>
                  <option>Tétouan</option>
                  <option>El Jadida</option>
                  <option>Nador</option>
                  <option>Kenitra</option>
                  <option>Essaouira</option>
                  <option>Ouarzazate</option>
                  <option>Safi</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconMapPinFilled className="text-[#ff4d30]" /> &nbsp; Lieu de
                  retour <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  value={dropOff}
                  onChange={handleDrop}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                >
                  <option>Sélectionnez le lieu de retour</option>
                  <option>Casablanca</option>
                  <option>Rabat</option>
                  <option>Marrakech</option>
                  <option>Agadir</option>
                  <option>Tanger</option>
                  <option>Fès</option>
                  <option>Meknès</option>
                  <option>Oujda</option>
                  <option>Tétouan</option>
                  <option>El Jadida</option>
                  <option>Nador</option>
                  <option>Kenitra</option>
                  <option>Essaouira</option>
                  <option>Ouarzazate</option>
                  <option>Safi</option>
                </select>
              </div>

              {/* Pick Up Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="picktime"
                  className="flex items-center gap-2 mb-3"
                >
                  <IconCalendarEvent size={20} className="text-[#ff4d30]" />
                  <span className="flex items-center">
                    Date de départ <b className="text-[#ff4d30] ml-1">*</b>
                  </span>
                </label>
                <div className="relative">
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    className="w-full text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none appearance-none"
                  />
                  <IconCalendarEvent
                    size={20}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ababab] pointer-events-none"
                  />
                </div>
              </div>

              {/* Drop Off Date */}
              <div className="flex flex-col">
                <label
                  htmlFor="droptime"
                  className="flex items-center gap-2 mb-3"
                >
                  <IconCalendarEvent size={20} className="text-[#ff4d30]" />
                  <span className="flex items-center">
                    Date de retour <b className="text-[#ff4d30] ml-1">*</b>
                  </span>
                </label>
                <div className="relative">
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                    className="w-full text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none appearance-none"
                  />
                  <IconCalendarEvent
                    size={20}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#ababab] pointer-events-none"
                  />
                </div>
              </div>

              <button
                onClick={openModal}
                type="submit"
                className="px-5 py-3 h-fit self-end border-none text-lg font-medium text-white bg-[#ff4d30] shadow-[0_10px_15px_rgba(255,83,48,0.35)] cursor-pointer transition-all duration-300 hover:shadow-[0_10px_15px_rgba(255,83,48,0.55)]"
              >
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Modal */}
      <BookingDialog
        // États du modal
        modal={modal}
        setModal={setModal}
        openModal={openModal}
        // Dates et lieux
        pickTime={pickTime}
        dropTime={dropTime}
        pickUp={pickUp}
        dropOff={dropOff}
        handlePickTime={handlePickTime}
        handleDropTime={handleDropTime}
        // Informations sur la voiture
        carType={carType}
        imgUrl={imgUrl}
        // Informations personnelles et leurs handlers
        name={name}
        lastName={lastName}
        phone={phone}
        age={age}
        email={email}
        address={address}
        city={city}
        zipcode={zipcode}
        handleName={handleName}
        handleLastName={handleLastName}
        handlePhone={handlePhone}
        handleAge={handleAge}
        handleEmail={handleEmail}
        handleAddress={handleAddress}
        handleCity={handleCity}
        handleZip={handleZip}
        // Action de réservation
        confirmBooking={confirmBooking}
      />
    </section>
  );
}

export default memo(BookCar);
