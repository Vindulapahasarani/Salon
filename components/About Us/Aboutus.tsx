"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    text: "I had the most wonderful experience at Hodor! The staff was incredibly friendly and professional, and the ambiance was so relaxing. My hair has never looked better, and I felt truly pampered. I can’t wait for my next appointment!" ,
          author: "Axel Farrow",
  },
  {
    text: "Absolutely love this salon! The hairstylists are talented, and they truly listen to what you want. My hair color came out perfect, and the treatment left it feeling so soft and healthy. Highly recommended!",
    author: "Angela Charlton",
  },
  {
    text: "From the moment I walked in, I felt welcomed and relaxed. The team is amazing, and the service is top-notch. Whether it’s a haircut, styling, or a spa treatment, they always exceed my expectations. Five stars!" ,


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

        
        <div className="flex flex-col items-center text-center px-4 md:px-16">
  {/* Image */}
  <img 
    src="/images/12.png" 
    alt="Luxury Salon Experience" 
    className="w-full max-w-lg rounded-lg shadow-lg"
  />

  {/* Text Content */}
  <p className="text-gray-300 mt-6 text-justify leading-relaxed">
    Welcome to Saloon, where style meets sophistication. Since 2000, we’ve provided top-notch grooming with a touch of luxury. Our expert barbers craft the perfect look with precision and care. Whether you need a classic cut, modern style, or a relaxing shave, we use the latest techniques and high-quality products to ensure excellence. Step in, relax, and let us perfect your style.
  </p>
</div>


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
            Since 2000, Saloon has been dedicated to top-tier grooming with style and precision. Our expert team blends tradition with modern trends, ensuring every client leaves looking and feeling their best. Step in, relax, and let us craft your perfect look.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-white text-5xl font-bold text-left">Our Mission</h2>
            <p className="text-gray-300 mt-4 leading-relaxed text-justify">
            At Saloon, we strive to redefine grooming with precision, style, and excellence. Our mission is to provide top-quality services in a welcoming space, ensuring every client leaves with confidence and satisfaction.


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

        

    
            </div>
          </div>
       
  );
};

export default Aboutus;
