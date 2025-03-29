"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus nisi, sed dictum eros. 
          Fermentum nulla non justo aliquet, quis vehicula quam consequat duis ut hendrerit. Ac feugiat ante. 
          Donec ultricies lobortis eros, nec auctor nisl semper ultricies. Aliquam sodales nulla dolor.`,
    author: "Axel Farrow",
  },
  {
    text: "In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra efficitur elit. Quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id felis pellentesque.",
    author: "Angela Charlton",
  },
  {
    text: "Donec ultricies lobortis eros, nec auctor nisl semper ultricies. Aliquam sodales nulla dolor, sed vulputate sapien efficitur ut. Etiam tincidunt ligula ut hendrerit semper. Quisque luctus lectus non turpis bibendum posuere. Morbi tortor nibh, fringilla sed pretium sit amet, pharetra non ex. Aliquam ornare nunc nibh, sit amet porta diam pretium in.",
    author: "Igor Landry",
  },
];

const Aboutus = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-black text-white py-16">
      <div className="w-[90%] xl:w-[80%] mx-auto">
        {/* About Us Title */}
        <h1 className="text-center text-3xl md:text-5xl font-bold uppercase border-b-4 border-yellow-500 pb-4">
          About Us
        </h1>

        {/* Video Section */}
        <div className="mt-10 flex justify-center">
          <video
            className="w-full md:w-[70%] rounded-lg shadow-lg h-full object-cover"
            controls
            autoPlay
            muted
            loop
            preload="metadata"
          >
            <source src="/images/MIVDemoVideoFinal.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Text Content */}
        <p className="text-gray-300 mt-6 text-justify px-4 md:px-16 leading-relaxed">
          Vivamus id gravida mi, nec ullamcorper purus. Suspendisse ut nibh sagittis lacus viverra aliquam. Praesent ac lobortis mauris, non imperdiet quam. Praesent laoreet elit nisi, id feugiat ante accumsan sed. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
        </p>

        {/* Our Story Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/1.png"
              alt="Our Story"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-5xl font-bold text-left">Our Story</h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-justify">
              Vivamus id gravida mi, nec ullamcorper purus. Suspendisse ut nibh sagittis lacus viverra aliquam. Praesent ac lobortis mauris, non imperdiet quam.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-5xl font-bold text-left">Our Mission</h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-justify">
              Donec ultricies lobortis eros, nec auctor nisl semper ultricies. Aliquam sodales nulla dolor, sed vulputate sapien efficitur ut.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/images/2.png"
              alt="Our Mission"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 text-center border p-10 rounded-lg border-yellow-600">
          <h2 className="text-white text-5xl font-bold">Testimonials</h2>
          <p className="text-gray-300 mt-4 italic">{testimonials[currentIndex].text}</p>
          <p className="text-yellow-400 mt-2">- {testimonials[currentIndex].author}</p>
          <div className="flex justify-between items-center mt-6">
            <button onClick={handlePrev} className="p-2 hover:text-yellow-500">
              <ChevronLeft size={32} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-yellow-500" : "bg-gray-600"
                  }`}
                ></span>
              ))}
            </div>
            <button onClick={handleNext} className="p-2 hover:text-yellow-500">
              <ChevronRight size={32} />
            </button>
          </div>
        </div>

        {/* Services & Info Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex items-center justify-center min-h-screen bg-[#121212] px-6 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl w-full">
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-yellow-500 text-5xl font-bold">Hodor</h2>
                <br />
                <ul className="text-gray-300 mt-4 text-4xl space-y-2 font-bold">
                  <li>Services & Pricing</li>
                  <li>Barbers</li>
                  <li>About Us</li>
                  <li>Booking</li>
                  <li>Join Our Team</li>
                  <li>Contact</li>
                </ul>
                <br />
                <p className="text-yellow-500 mt-4 font-semibold">
                  Mon – Fri: 7am – 10pm<br />​​Saturday: 8am – 10pm<br />​Sunday: 8am – 11pm
                </p>
                {/* Social Icons */}
                <div className="flex justify-center md:justify-start space-x-4 mt-6 text-yellow-500">
                  <i className="fab fa-facebook text-2xl"></i>
                  <i className="fab fa-x-twitter text-2xl"></i>
                  <i className="fab fa-instagram text-2xl"></i>
                </div>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <Image
                  src="/images/3.png"
                  alt="Barber Shop"
                  width={400}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
