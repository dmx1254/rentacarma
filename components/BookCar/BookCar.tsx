"use client";

import { useEffect, useState } from "react";
import CarAudi from "../images/audia1.jpg";
import CarGolf from "../images/golf6.jpg";
import CarToyota from "../images/toyotacamry.jpg";
import CarBmw from "../images/bmw320.jpg";
import CarMercedes from "../images/benz.jpg";
import CarPassat from "../images/passatcc.jpg";
import audia3v8 from "../images/audiA3V8.png";
import {
  IconCar,
  IconInfoCircleFilled,
  IconMapPin,
  IconX,
} from "@tabler/icons-react";
import { IconMapPinFilled } from "@tabler/icons-react";
import { IconCalendarEvent } from "@tabler/icons-react";
import Image, { StaticImageData } from "next/image";
import BookingDialog from "../BookingDialog";

interface CarImage {
  [key: string]: StaticImageData;
}

const carImages: CarImage = {
  "Audi A1 S-Line": CarAudi,
  "VW Golf 6": CarGolf,
  "Toyota Camry": CarToyota,
  "BMW 320 ModernLine": CarBmw,
  "Mercedes-Benz GLK": CarMercedes,
  "VW Passat CC": CarPassat,
  "Audi A3 (8V)": audia3v8,
};

const BookCar: React.FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [bookingDone, setBookingDone] = useState<boolean>(false);

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

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newAge = e.target.value;
    setAge(newAge);

    if (newAge && parseInt(newAge) < 18) {
      setAgeError("The age is too low");
    } else {
      setAgeError("");
    }
  };

  const confirmBooking = (): void => {
    if (ageError) {
      alert("Please correct the errors before confirming your booking.");
      return;
    }

    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done") as HTMLElement;
    if (doneMsg) {
      doneMsg.style.display = "flex";
    }
  };

  // taking value of modal inputs
  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setName(e.target.value);
  };

  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setLastName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPhone(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setAddress(e.target.value);
  };

  const handleCity = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCity(e.target.value);
  };

  const handleZip = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setZipCode(e.target.value);
  };

  // open modal when all inputs are fulfilled
  const openModal = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message") as HTMLElement;
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickTime === "" ||
      dropTime === "" ||
      carType === ""
    ) {
      if (errorMsg) {
        errorMsg.style.display = "flex";
      }
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal") as HTMLElement;
      if (modalDiv) {
        modalDiv.scroll(0, 0);
      }
      if (errorMsg) {
        errorMsg.style.display = "none";
      }
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

  // taking value of booking inputs
  const handleCar = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setCarType(e.target.value);
    setCarImg(e.target.value);
  };

  const handlePick = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setPickUp(e.target.value);
  };

  const handleDrop = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setDropOff(e.target.value);
  };

  const handlePickTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPickTime(e.target.value);
  };

  const handleDropTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDropTime(e.target.value);
  };

  // hide message
  const hideMessage = (): void => {
    const doneMsg = document.querySelector(".booking-done") as HTMLElement;
    if (doneMsg) {
      doneMsg.style.display = "none";
    }
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
          <div className="herobg-url w-full p-16 sm:p-10 shadow-lg relative z-10 text-[#010103] rounded-lg bg-white bg-[url('../components/images/book-bg.png')] bg-center bg-no-repeat bg-cover flex flex-col">
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
                  <option value="">Sélectionnez votre voiture</option>
                  <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                  <option value="VW Golf 6">VW Golf 6</option>
                  <option value="Toyota Camry">Toyota Camry</option>
                  <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                  <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                  <option value="VW Passat CC">VW Passat CC</option>
                  <option value="Audi A3 (8V)">Audi A3 (8V)</option>
                </select>
              </div>

              {/* Pick Up Location */}
              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconMapPinFilled className="text-[#ff4d30]" /> &nbsp; Lieu de
                  prise en charge
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  value={pickUp}
                  onChange={handlePick}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                >
                  <option value="">Sélectionnez le lieu de prise en charge</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Agadir">Agadir</option>
                  <option value="Tanger">Tanger</option>
                </select>
              </div>

              {/* Drop Off Location */}
              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconMapPin className="text-[#ff4d30]" /> &nbsp; Lieu de
                  restitution
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <select
                  value={dropOff}
                  onChange={handleDrop}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                >
                  <option value="">Sélectionnez le lieu de restitution</option>
                  <option value="Casablanca">Casablanca</option>
                  <option value="Rabat">Rabat</option>
                  <option value="Marrakech">Marrakech</option>
                  <option value="Agadir">Agadir</option>
                  <option value="Tanger">Tanger</option>
                </select>
              </div>

              {/* Pick Up Time */}
              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconCalendarEvent className="text-[#ff4d30]" /> &nbsp; Date et
                  heure de prise en charge
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  type="datetime-local"
                  value={pickTime}
                  onChange={handlePickTime}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                />
              </div>

              {/* Drop Off Time */}
              <div className="flex flex-col">
                <label className="text-base font-semibold mb-3 flex items-center">
                  <IconCalendarEvent className="text-[#ff4d30]" /> &nbsp; Date et
                  heure de restitution
                  <b className="text-[#ff4d30]">*</b>
                </label>
                <input
                  type="datetime-local"
                  value={dropTime}
                  onChange={handleDropTime}
                  className="text-[#ababab] text-base font-normal border border-[#ccd7e6] rounded p-3 outline-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col justify-end">
                <button
                  onClick={openModal}
                  className="bg-[#ff4d30] text-white font-bold py-4 px-8 rounded-lg
                           shadow-[0_10px_15px_rgba(255,77,48,0.35)] hover:shadow-[0_10px_15px_rgba(255,77,48,0.6)]
                           hover:bg-[#fa4226] transition-all duration-300"
                >
                  Rechercher
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Booking Dialog */}
      <BookingDialog
        modal={modal}
        setModal={setModal}
        pickTime={pickTime}
        dropTime={dropTime}
        pickUp={pickUp}
        dropOff={dropOff}
        carType={carType}
        imgUrl={carImages[carImg]?.src || ""}
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
        confirmBooking={confirmBooking}
      />
    </section>
  );
};

export default BookCar; 