"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Scissors, ArrowLeft } from "lucide-react";

const hairServices = [
  {
    id: 1,
    name: "Buzz Cut",
    image: "/images/5.png",
    price: "$24.00",
    duration: "30min",
    employees: 1,
  },
  {
    id: 2,
    name: "Haircut",
    image: "/images/6.png",
    price: "$39.00",
    duration: "30min",
    employees: 1,
  },
  {
    id: 3,
    name: "Kids Cut",
    image: "/images/7.png",
    price: "$20.00",
    duration: "30min",
    employees: 1,
  },
  {
    id: 4,
    name: "Styled Haircut",
    image: "/images/8.png",
    price: "$45.00",
    duration: "30min",
    employees: 1,
  },
];

const beautyServices = [
  {
    id: 5,
    name: "Hair Coloring",
    image: "/images/9.png",
    price: "$145.00",
    duration: "1h",
    employees: 1,
  },
  {
    id: 6,
    name: "Hair Straightening",
    image: "/images/10.png",
    price: "$100.00",
    duration: "30min",
    employees: 1,
  },
];

const Booking = () => {
  const [selectedService, setSelectedService] = useState<null | string>(null);

  const getServices = () => {
    if (selectedService === "hair") return hairServices;
    if (selectedService === "beauty") return beautyServices;
    return [];
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-start bg-black">
      <div className="absolute inset-0">
        <Image
          src="/images/4.png"
          alt="Booking Background"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="relative text-center text-white z-10 py-20">
        <Scissors size={40} className="mx-auto mb-4" />
        <h1 className="text-5xl md:text-6xl font-bold uppercase" style={{ fontFamily: "Old English, serif" }}>
          Book Now
        </h1>
      </div>

      {selectedService ? (
        <div className="relative w-full bg-white py-20 z-10">
          <div className="max-w-7xl mx-auto px-6">
            <button
              onClick={() => setSelectedService(null)}
              className="mb-6 flex items-center text-sm text-gray-600 hover:text-black"
            >
              <ArrowLeft className="mr-2" size={16} />
              Go Back
            </button>

            <h2 className="text-3xl font-bold text-center mb-10" style={{ fontFamily: "Old English, serif" }}>
              Book Our Services Now
            </h2>

            <div className="flex gap-6">
              <div className="w-60 bg-[#b3884b] rounded-lg p-4 text-white font-semibold text-sm">
                <ul className="space-y-4">
                  <li
                    className={`pl-2 cursor-pointer ${selectedService === "hair" ? "text-blue-200 border-l-4 border-blue-300" : "hover:text-white"}`}
                    onClick={() => setSelectedService("hair")}
                  >
                    Hair Services
                  </li>
                  <li
                    className={`pl-2 cursor-pointer ${selectedService === "beauty" ? "text-blue-200 border-l-4 border-blue-300" : "hover:text-white"}`}
                    onClick={() => setSelectedService("beauty")}
                  >
                    Beauty Services
                  </li>
                </ul>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Available - {getServices().length} Services</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {getServices().map((service) => (
                    <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                      <Image src={service.image} alt={service.name} width={400} height={250} className="w-full h-48 object-cover" />
                      <div className="p-4 text-left">
                        <h3 className="font-bold text-lg">{service.name}</h3>
                        <span className="text-blue-600 font-semibold">{service.price}</span>
                        <div className="text-gray-500 text-sm flex gap-4 mt-2">
                          <span>⏱ {service.duration}</span>
                          <span>👤 {service.employees}</span>
                        </div>
                        <button className="bg-[#b3884b] hover:bg-[#9d6e34] text-white px-4 py-2 text-sm rounded-md mt-4 w-full">
                          Continue
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative w-full bg-white py-20 z-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "Old English, serif" }}>
              Book Our Services Now
            </h2>
            <div className="flex justify-center gap-8">
              {[{ title: "Hair Services", type: "hair", icon: "💇‍♀️", count: hairServices.length }, { title: "Beauty Services", type: "beauty", icon: "💄", count: beautyServices.length }].map(({ title, type, icon, count }) => (
                <div key={type} className="bg-blue-100 p-6 rounded-lg shadow-md text-center w-64 cursor-pointer">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-gray-600">{icon} {count}</p>
                  <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" onClick={() => setSelectedService(type)}>
                    View All
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Booking;
