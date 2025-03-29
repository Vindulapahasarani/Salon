import React from 'react';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';
import Services from '../Services/Services';
import Aboutus from '../About Us/Aboutus';
import Booking from '../Booking/Booking';

const Home = () => {
  return (
    <div className='overflow-hidden '>
      <Hero />
      <Booking />
      <Aboutus />
      <Services />
      <Footer />

    </div>
  );
};

export default Home;