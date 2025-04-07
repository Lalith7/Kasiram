import React from 'react';
import Navbar from '../Components/New folder/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import backgroundImage from '../assets/kabg.jpg'; // Ensure this image is placed correctly

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-60 flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-lg w-3/4">
          <h1 className="text-4xl font-bold">About Kasiram Overseas</h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Kasiram Overseas Education is one of the most trusted & reputed overseas education consulting firms in India with rich industry experience specializing in assisting students and parents comprehensively and providing them a seamless experience for studying abroad.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            At Kasiram Overseas, our mission is to empower students with the knowledge, resources, and guidance required to achieve academic success in leading universities across the world. We strive to make international education accessible, ensuring students make informed decisions and achieve their goals confidently.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            To become the leading overseas education consultancy, recognized for our excellence in guiding students towards fulfilling their dreams of studying abroad and building successful global careers.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800">Why Choose Us?</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
              <li>Comprehensive Services: From counseling to pre-departure support, we provide end-to-end services.</li>
              <li>Experienced Counselors: Our team consists of knowledgeable professionals with years of experience.</li>
              <li>Global University Network: We partner with top universities to offer the best options to students.</li>
              <li>Personalized Approach: We understand each student’s unique goals and tailor our services accordingly.</li>
              <li>High Visa Success Rate: We boast an impressive track record in helping students secure visas successfully.</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800">Our Services</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
              <li><strong>Free Career Counselling</strong></li>
              <li><strong>University Selection</strong></li>
              <li><strong>Country Selection</strong></li>
              <li><strong>Course Selection</strong></li>
              <li><strong>Application Assistance</strong></li>
              <li><strong>Documentation Guidance</strong></li>
              <li><strong>Visa Processing</strong></li>
              <li><strong>Mock Interviews</strong></li>
              <li><strong>Pre-departure Briefing</strong></li>
              <li><strong>Post-Arrival Assistance</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
