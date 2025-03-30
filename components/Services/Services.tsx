import React from "react";
import { Scissors } from "lucide-react";

const Services = () => {
  return (
    <section className="bg-gray-800 text-white py-20 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <span className="w-20 h-px bg-gray-500"></span>
        <Scissors size={40} className="text-yellow-500" />
        <span className="w-20 h-px bg-gray-500"></span>
      </div>
      <h2 className="text-4xl font-bold mt-4 tracking-wide">OUR SERVICES</h2>
      <p className="text-gray-400 text-lg mt-2 max-w-2xl text-center">
        Experience the finest grooming services tailored just for you. From precision haircuts to luxurious shaves, we ensure you look and feel your best.
      </p>

      {/* Pricing Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        {/* Left Box */}
        <div className="bg-white text-black p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Haircuts & Grooming</h3>
          <div className="space-y-4">
            {["Classic Haircut", "Buzz Cut", "Kids Cut", "Beard Trim", "Clean Shave"].map((service, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span>{service}</span>
                <span className="font-bold">${[39, 24, 20, 29, 45][index]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Box */}
        <div className="border-2 border-yellow-500 p-8 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Premium Styling</h3>
          <div className="space-y-4">
            {["Styled Haircut", "Long Sheer Cut", "Straight Razor Shave", "Clipper Haircut"].map((service, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span>{service}</span>
                <span className="font-bold">${[45, 85, 75, 50][index]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open Time Section (Horizontal) */}
      <div className="w-full max-w-5xl mt-12 bg-gray-900 p-6 rounded-2xl shadow-lg border border-yellow-500">
        <h2 className="text-yellow-500 text-4xl font-bold text-center">Open Time</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-4 text-yellow-400 font-semibold">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day, index) => (
            <p key={index} className="flex items-center bg-gray-700 px-4 py-2 rounded-xl shadow-md">
              <span className="mr-2">🕒</span>{day}: {["7 AM – 10 PM", "7 AM – 10 PM", "7 AM – 10 PM", "7 AM – 10 PM", "7 AM – 10 PM", "8 AM – 10 PM", "8 AM – 11 PM"][index]}
            </p>
          ))}
        </div>
      </div>

      {/* Book an Appointment Section */}
      <div className="relative bg-gray-800 text-white py-24 px-6 text-center w-full mt-12">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('images/4.png')" }}></div>
        <div className="relative z-10">
          <h2 className="text-5xl font-bold">BOOK AN APPOINTMENT</h2>
          <p className="text-xl text-yellow-500 mt-2">+1 813-644-6006</p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
