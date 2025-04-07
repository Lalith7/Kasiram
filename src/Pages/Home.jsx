<<<<<<< HEAD
import React from 'react'
import HeroSection from '../components/HeroSection'
import TopCountries from '../components/TopCountries'
import Blogs from '../components/Blogs'
import Newsletter from '../components/NewsLetter'
import WhyKasiram from '../components/WhyKasiram'
import CountriesSection from '../components/CountriesSection'
import ContactUs from '../components/ContactUs'

export const Home = () => {
  return (
    <React.Fragment>
        <HeroSection />
        <TopCountries/>
        <Blogs/>
        <Newsletter/>
        <WhyKasiram/>
        <CountriesSection/>
        <ContactUs/>
    </React.Fragment>
  )
}
=======
import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import TopCountries from '../Components/TopCountries/TopCountries';
import Blogs from '../Components/Blogs/Blogs';
import Newsletter from '../Components/Notify me/NewsLetter';
import WhyKasiram from "../Components/WhyKasiram/WhyKasiram";
import Testimonials from '../Components/Countries/Countries';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true);
  }, []);

  return (
    <>
      <Navbar />
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl w-80 sm:w-96 relative border border-gray-300">
            <button className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-gray-800" onClick={() => setShowPopup(false)}>
              &times;
            </button>
            <h2 className="text-2xl font-semibold mb-3 text-center text-blue-700">Free Consultation!</h2>
            <p className="text-center text-gray-700 mb-3 italic">"Your journey starts here. Let’s make it happen!"</p>
            <form action="https://formspree.io/f/mjkyelgv" method="POST">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-800">Name: </label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-800">Email: </label>
                <input type="email" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-800">Phone: </label>
                <input type="tel" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" required />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">Submit</button>
            </form>
          </div>
        </div>
      )}
      <Hero />
      <About />
      <TopCountries />
      <Blogs />
      <Newsletter />
      <WhyKasiram />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
>>>>>>> 0e5df0c7ead65312faa3f950239dac7beef692ab
