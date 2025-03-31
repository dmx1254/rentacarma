"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  IconInfoCircleFilled,
  IconMapPin,
  IconCar,
  IconX,
} from "@tabler/icons-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { convertDate } from "@/lib/utils";

interface BookingDialogProps {
  modal: boolean;
  setModal: (value: boolean) => void;
  pickTime: string;
  dropTime: string;
  pickUp: string;
  dropOff: string;
  carType: string;
  imgUrl: string;
  name: string;
  lastName: string;
  phone: string;
  age: string;
  email: string;
  address: string;
  city: string;
  zipcode: string;
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLastName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAge: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAddress: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCity: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleZip: (e: React.ChangeEvent<HTMLInputElement>) => void;
  confirmBooking: () => void;
}

const BookingDialog: React.FC<BookingDialogProps> = ({
  modal,
  setModal,
  pickTime,
  dropTime,
  pickUp,
  dropOff,
  carType,
  imgUrl,
  name,
  lastName,
  phone,
  age,
  email,
  address,
  city,
  zipcode,
  handleName,
  handleLastName,
  handlePhone,
  handleAge,
  handleEmail,
  handleAddress,
  handleCity,
  handleZip,
  confirmBooking,
}) => {
  return (
    <Dialog open={modal} onOpenChange={setModal}>
      <DialogContent className="max-w-5xl h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-gray-50">
        {/* Header */}
        <DialogHeader className="sticky top-0 z-50 bg-white/60 backdrop-blur-md border-b pb-6">
          <div className="flex justify-between items-center p-2">
            <div>
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#ff4d30] to-orange-600 bg-clip-text text-transparent">
                Finaliser la réservation
              </DialogTitle>
              <p className="text-gray-500 mt-2">
                Plus que quelques étapes pour confirmer votre réservation
              </p>
            </div>
            <Button
              variant="ghost"
              onClick={() => setModal(false)}
              className="rounded-full p-2 hover:bg-red-50"
            >
              <IconX className="text-[#ff4d30]" />
            </Button>
          </div>
        </DialogHeader>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 my-4">
          <div className="flex items-start gap-4">
            <IconInfoCircleFilled className="text-[#ff4d30] mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-[#ff4d30] mb-2">
                Ce que vous recevrez :
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Bon de location à présenter à votre arrivée</li>
                <li>• Numéro d'assistance clientèle gratuit</li>
                <li>• Confirmation de réservation par email</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Booking Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-8">
          {/* Dates & Location */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <IconMapPin className="text-[#ff4d30]" />
              Lieu et Date
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-500">Départ</p>
                <p className="font-medium mt-1">{pickUp}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{convertDate(pickTime)}</span>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Retour</p>
                <p className="font-medium mt-1">{dropOff}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>{convertDate(dropTime)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Car Details */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <IconCar className="text-[#ff4d30]" />
              Véhicule sélectionné
            </h3>
            <p className="text-gray-600 mb-4">
              <span className="font-medium">Modèle : </span>
              <span className="text-[#ff4d30] font-semibold">{carType}</span>
            </p>
            {imgUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={imgUrl}
                  alt={carType}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Personal Information Form */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-800">
            Informations personnelles
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Prénom <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={handleName}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your first name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Nom <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={handleLastName}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your last name"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Téléphone <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={handlePhone}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Âge <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="number"
                value={age}
                onChange={handleAge}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="18"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Email <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={handleEmail}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your email address"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium text-gray-700">
                Adresse <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                value={address}
                onChange={handleAddress}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your street address"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Ville <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                value={city}
                onChange={handleCity}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your city"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Code postal <span className="text-[#ff4d30]">*</span>
              </label>
              <input
                type="text"
                value={zipcode}
                onChange={handleZip}
                className="w-full px-4 py-2.5 rounded-lg border bg-white/50
                         focus:outline-none focus:ring-2 focus:ring-[#ff4d30]/20 focus:border-[#ff4d30]
                         transition-all duration-200"
                placeholder="Enter your zip code"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            onClick={confirmBooking}
            className="w-full bg-[#ff4d30] text-white font-bold py-4 px-8 rounded-lg
                     shadow-[0_10px_15px_rgba(255,77,48,0.35)] hover:shadow-[0_10px_15px_rgba(255,77,48,0.6)]
                     hover:bg-[#fa4226] transition-all duration-300"
          >
            Confirmer la réservation
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog; 