import React from "react";
import Home from "@/components/Home/Home";
import AboutUs from "@/components/About Us/Aboutus";
import Services from "@/components/Services/Services";
import Booking from "@/components/Booking/Booking";
import Contact from "@/components/Contact/Contact";

const HomePage = () => {
  return ( 
    <div>
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <AboutUs />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="booking">
        <Booking />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
