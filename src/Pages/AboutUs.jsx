import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
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
            Kasiram Overseas Educational Consultancy is dedicated to helping students fulfill
            their aspirations of studying abroad. We provide personalized guidance and
            comprehensive support, ensuring a seamless experience from university selection
            to visa approval and beyond.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            At Kasiram Overseas, our mission is to empower students with the knowledge,
            resources, and guidance required to achieve academic success in leading
            universities across the world. We strive to make international education
            accessible, ensuring students make informed decisions and achieve their goals
            confidently.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center text-blue-800">Our Vision</h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Our vision is to be recognized globally as a premier overseas educational
            consultancy known for transparency, ethical guidance, and a commitment to
            student success. We aspire to build strong partnerships with top universities
            worldwide and shape the future of aspiring students through high-quality
            education.
          </p>
        </div>
      </section>

      <section className="py-16 px-8 md:px-20 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800">Why Choose Us?</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
              <li>Expert Guidance: Our team of experienced consultants provides professional and reliable advice.</li>
              <li>Comprehensive Support: We assist with every stage, from course selection to post-arrival support.</li>
              <li>Strong University Network: Partnerships with top global universities ensure better opportunities for students.</li>
              <li>Personalized Career Counseling: Tailored counseling to align students' academic paths with their career goals.</li>
              <li>Visa & Financial Assistance: Step-by-step guidance in securing student visas and managing financial aid.</li>
            </ul>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-800">Our Services</h3>
            <ul className="mt-4 text-lg text-gray-700 list-disc pl-6">
              <li><strong>University Selection:</strong> Helping students find the best-fit universities worldwide.</li>
              <li><strong>Application Assistance:</strong> Ensuring smooth application processing for maximum acceptance chances.</li>
              <li><strong>Visa Guidance:</strong> Assistance with documentation, interviews, and application submission.</li>
              <li><strong>Scholarship & Financial Aid:</strong> Guidance on securing scholarships and student loans.</li>
              <li><strong>Pre-Departure & Post-Arrival Support:</strong> Orientation sessions and assistance with accommodation.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;