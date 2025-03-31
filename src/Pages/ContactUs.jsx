import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[50vh] flex flex-col items-center justify-center text-white text-center px-4 shadow-lg" 
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x800/?business,teamwork')" }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-extrabold drop-shadow-lg"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.2 }} 
          className="text-lg mt-2 max-w-2xl font-medium drop-shadow-md"
        >
          Let’s connect and make your overseas education journey seamless.
        </motion.p>
      </section>

      {/* Contact Form & Details Section */}
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
          <form action='https://formspree.io/f/xldjwzdb' method='POST'>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Name: </label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Email: </label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Phone: </label>
              <input type="tel" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Subject: </label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>General Inquiry</option>
                <option>Admissions</option>
                <option>Visa Process</option>
                <option>Scholarships</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Country of Interest: </label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Eg: Canada, USA, UK" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Preferred Contact Method: </label>
              <div className="flex gap-4">
                <label className="flex items-center"><input type="radio" name="contact" className="mr-2" /> Email</label>
                <label className="flex items-center"><input type="radio" name="contact" className="mr-2" /> Phone</label>
                <label className="flex items-center"><input type="radio" name="contact" className="mr-2" /> WhatsApp</label>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-medium mb-2">Message: </label>
              <textarea rows="4" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
          </form>
        </motion.div>

        {/* Contact Information & Map Section */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1 }}
          className="bg-blue-600 text-white p-8 shadow-lg rounded-lg flex flex-col gap-6"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="flex items-center mb-4">
              <FaMapMarkerAlt className="text-2xl" />
              <p className="ml-4 text-lg">148, AVVAI ST, THIRUVALLESWARAR NAGAR, THIRUMANGALAM, ANNA NAGAR WEST EXTN, CHENNAI-40, India</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-2xl" />
              <p className="ml-4 text-lg">+91 86808 00440</p>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-2xl" />
              <p className="ml-4 text-lg">kasiramoverseas@gmail.com</p>
            </div>
            <h3 className="text-xl font-semibold mt-6">Office Hours</h3>
            <p className="text-lg">Monday - Friday: 9:00 AM - 10:00 PM</p>
            <p className="text-lg">Saturday - Sunday: 9:00 AM - 9:00 PM</p>
          </div>
          <iframe
            className="w-full h-64 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3071.5364175750065!2d80.19265967507837!3d13.084776287241077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzA1LjIiTiA4MMKwMTEnNDIuOCJF!5e1!3m2!1sen!2sin!4v1743396635331!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
