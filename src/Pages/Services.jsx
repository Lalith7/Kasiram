import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import img1 from "../assets/university-admissions.webp"
import img2 from "../assets/visa-assistance.jpg"
import img3 from "../assets/scholarship-guidance.jpeg"
import img4 from "../assets/test-preparation.jpg"
import img5 from "../assets/pre-departure-support.jpg"
import { motion } from 'framer-motion';

const services = [
  {
    title: "University Admissions",
    description: "Guiding students to secure admissions in top-ranked universities worldwide with expert counseling and personalized guidance.",
    image: img1
  },
  {
    title: "Visa Assistance",
    description: "Ensuring a smooth visa application process with complete documentation support and expert consultations.",
    image: img2
  },
  {
    title: "Scholarship Guidance",
    description: "Helping students find and apply for the best scholarships to reduce financial burdens while studying abroad.",
    image: img3
  },
  {
    title: "Test Preparation",
    description: "Providing training for IELTS, TOEFL, GRE, GMAT, and other exams to help students achieve top scores.",
    image: img4
  },
  {
    title: "Pre-Departure Support",
    description: "Offering pre-departure sessions to prepare students for their journey abroad, covering cultural adaptation, housing, and travel tips.",
    image: img5
  }
];

const Services = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-cover bg-center h-[40vh] flex flex-col items-center justify-center text-white text-center px-4 shadow-lg relative" style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/graduation-cap-with-earth-globe-concept-global-business-study-abroad-educational-back-school-education-global-world-study-abroad-business-universities-worldwide-language-study_721781-1592.jpg?semt=ais_hybrid')" }}>
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-extrabold drop-shadow-lg">Our Premium Services</motion.h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="text-lg mt-2 max-w-2xl font-medium drop-shadow-md">We offer comprehensive solutions for students aspiring to study abroad, making their journey seamless and stress-free.</motion.p>
      </section>
      
      <div className="container mx-auto px-6 py-12">
        {services.map((service, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <img src={service.image} alt={service.title} className="w-full md:w-1/2 rounded-lg shadow-lg" />
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800">{service.title}</h2>
              <p className="text-gray-600 mt-4">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default Services;
