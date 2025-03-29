import React from "react";
import { Scissors } from "lucide-react";

const Services = () => {
  return (
    <section className="bg-black text-white py-20 flex flex-col items-center">
      {/* Header Section */}
      <div className="flex items-center gap-4">
        <span className="w-20 h-px bg-gray-500"></span>
        <Scissors size={40} className="text-gold" />
        <span className="w-20 h-px bg-gray-500"></span>
      </div>
      <h2 className="text-4xl font-bold mt-4">SERVICES</h2>
      <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
        BOOK AN APPOINTMENT
      </button>

      {/* Pricing Section */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 max-w-5xl w-full px-4">
        {/* Left Box (White Background) */}
        <div className="bg-white text-black p-6 w-full md:w-1/2 shadow-lg relative">
  {/* Barcode Effect */}
  <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,_black_0px,_black_3px,_transparent_3px,_transparent_6px)]"></div>

  <h3 className="text-xl font-bold">HAIRCUT - $39</h3>
  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus nisi, sed dictum eros.</p>

  <h3 className="text-xl font-bold mt-4">BUZZ CUT - $24</h3>
  <p className="text-gray-600">Quisque aliquet velit sit amet sem interdum faucibus. In feugiat aliquet mollis etiam tincidunt ligula.</p>

  <h3 className="text-xl font-bold mt-4">KIDS CUT - $20</h3>
  <p className="text-gray-600">Luctus lectus non quisque turpis bibendum posuere. Morbi tortor nibh, fringilla sed pretium sit amet.</p>

  <h3 className="text-xl font-bold mt-4">BEARD TRIM - $29</h3>
  <p className="text-gray-600">In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra efficitur elit.</p>

  <h3 className="text-xl font-bold mt-4">CLEAN SHAVE - $45</h3>
  <p className="text-gray-600">Nisl massa, ultrices vitae ornare sit amet, ultricies eget orci. Sed vitae nulla et justo pellentesque congue nec eu risus.</p>
</div>

 {/* Right Box (Black Background with Gold Outline) */}
<div className="border-2 border-[#FFD700] p-6 w-full md:w-1/2 shadow-lg">
  <h3 className="text-xl font-bold">STYLED HAIRCUT - $45</h3>
  <p className="text-gray-400">Ac feugiat ante. Donec ultricies lobortis eros, nec auctor nisl semper ultricies. Aliquam sodales nulla dolor.</p>

  <h3 className="text-xl font-bold mt-4">LONG SHEER CUT - $85</h3>
  <p className="text-gray-400">Quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id felis pellentesque.</p>

  <h3 className="text-xl font-bold mt-4">STRAIGHT RAZOR - $75</h3>
  <p className="text-gray-400">Semper leo et sapien lobortis facilisis aliquam feugiat ut diam non tempus et malesuada.</p>

  <h3 className="text-xl font-bold mt-4">CLIPPER HAIRCUT - $50</h3>
  <p className="text-gray-400">Fermentum nulla non justo aliquet, quis vehicula quam consequat duis ut hendrerit.</p>
</div>



      </div>

      <div className="bg-black text-white py-12 px-6 md:px-16">
  {/* FAQ Title */}
  <h1 className="text-white text-4xl font-bold mr-6">FAQ</h1>
  <div className="border-t-2 border-dotted border-yellow-500 w-24 mx-auto mt-2 mb-8"></div>    
        
<br />
<br />

  {/* FAQ Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
    {/* Left Column */}
    <div>
      <h3 className="font-bold text-lg uppercase">Lorem ipsum dolor sit amet?</h3>
      <br />
      <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed finibus nisi, sed dictum eros.</p>

      <h3 className="font-bold text-lg uppercase mt-6">Donec sed finibus nisi?</h3>
      <br/>
      <p className="text-gray-400">Donec ullamcorper libero nisl, nec blandit dolor tempus feugiat. Aenean neque felis, fringilla nec placerat eget, sollicitudin a sapien. Maecenas at consectetur ex, vitae consequat augue. Vivamus eget dolor vel quam condimentum sodales. In bibendum odio urna, sit amet fermentum purus venenatis a. Fusce vel egestas nisl.</p>

      <h3 className="font-bold text-lg uppercase mt-6">Quisque aliquet velit sit amet?</h3>
      <br/>
      <p className="text-gray-400">Luctus lectus non quisque turpis bibendum posuere. Morbi tortor nibh, fringilla sed pretium sit amet.</p>

      <h3 className="font-bold text-lg uppercase mt-6">Morbi tortor nibh fringilla?</h3>
      <br/>
      <p className="text-gray-400">In non pulvinar purus. Curabitur nisi odio, blandit et elit at, suscipit pharetra efficitur elit. In non pulvinar purus curabitur nisi odio vel.</p>
    </div>

    {/* Right Column */}
    <div>
      <h3 className="font-bold text-lg uppercase">Curabitur non bibendum ligula?</h3>
      <br/>
      <p className="text-gray-400">Nisl massa, ultrices vitae ornare sit amet, ultricies eget orci. Sed vitae nulla et justo pellentesque congue nec eu risus.</p>

      <h3 className="font-bold text-lg uppercase mt-6">In non pulvinar purus curabitur nisi odio vel?</h3>
      <br/>
      <p className="text-gray-400">Ac feugiat ante. Donec ultricies lobortis eros, nec auctor nisl semper ultricies. Aliquam sodales nulla dolor. Curabitur non bibendum ligula. Lorem ipsum dolor sit amet.</p>

      <h3 className="font-bold text-lg uppercase mt-6">Sed vitae nulla et justo pellentesque congue nec?</h3>
      <br/>
      <p className="text-gray-400">Quis blandit erat. Donec laoreet libero non metus volutpat consequat in vel metus. Sed non augue id felis pellentesque. Semper leo et sapien lobortis facilisis aliquam feugiat ut diam non tempus et malesuada.</p>

      <h3 className="font-bold text-lg uppercase mt-6">Etiam quis blandit erat donec laoreet libero non metus?</h3>
      <br/>
      <p className="text-gray-400">Vitae consequat augue. Vivamus eget dolor vel quam condimentum sodales in bibendum odio urna sit amet.</p>
    </div>
  </div>

{/* Book an Appointment Section */}
<div className="relative bg-black text-white py-24 px-6 text-center w-full">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('images/4.png')" }}></div>
        <div className="relative z-10">
          <div className="flex justify-center items-center mb-4">
            <span className="w-20 h-px bg-gray-500"></span>
            <img src="images/11.png" alt="Mustache Icon" className="mx-4 w-16 h-auto" />

            <span className="w-20 h-px bg-gray-500"></span>
          </div>
          <h2 className="text-5xl font-bold">BOOK AN APPOINTMENT</h2>
          <p className="text-xl text-gold mt-2">+1 813-644-6006</p>
          <button className="mt-6 px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition">
            CONTACT US
          </button>
        </div>
      </div>
                      


</div>

    </section>
  );
};

export default Services;
