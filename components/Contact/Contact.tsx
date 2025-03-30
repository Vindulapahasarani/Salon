import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <section className="relative bg-gray-50 py-16 px-6">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <Image 
          src="/pattern.svg" 
          alt="Background Pattern" 
          layout="fill" 
          objectFit="cover" 
          className="opacity-5"
        />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex flex-col items-center mb-8">
          <div className="text-3xl font-semibold tracking-wide">✂️</div>
          <h2 className="text-sm text-yellow-600 font-medium uppercase">Contact</h2>
          <h1 className="text-3xl font-bold text-gray-800 mt-2">Send a Message</h1>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-lg p-8 rounded-xl space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={5}
            className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            type="submit"
            className="bg-yellow-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700 mt-10">
          <div>
            <h3 className="font-semibold">Visit Us</h3>
            <p className="text-sm">13801 N Florida Ave, Suite C, Tampa, FL, USA</p>
          </div>
          <div>
            <h3 className="font-semibold">Get In Touch</h3>
            <p className="text-sm">+1 813-644-6006</p>
            <p className="text-sm">info@makeitviralmedia.com</p>
          </div>
          <div>
            <h3 className="font-semibold">Open Hours</h3>
            <p className="text-sm">Monday - Friday: 2 PM - 10 PM</p>
            <p className="text-sm">Saturday - Sunday: 10 AM - 10 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
