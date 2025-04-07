import React from "react";
import CImg from "../../assets/abg.webp";
import { BiBook } from "react-icons/bi";
import { FaGlobeAmericas, FaPlaneDeparture, FaHouseUser } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoSchool } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="min-h-[550px] bg-white">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={CImg}
                  alt="Kasiram Logo"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>

              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0 lg:px-16">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Your Gateway to Global Education
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-8"
                >
                  At Kasiram Overseas Education Consultancy, we empower students to 
                  achieve their dreams of studying abroad. With expert guidance, 
                  seamless admissions, and personalized support, we make global 
                  education accessible and stress-free.
                </p>
                <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 text-sm">
                    <BiBook size={20} />
                    <p className="text-gray-500 font-semibold">University Admissions</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <FaGlobeAmericas size={20} />
                    <p className="text-gray-500 font-semibold">Visa Assistance</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <BsFillPersonCheckFill size={20} />
                    <p className="text-gray-500 font-semibold">Scholarship Guidance</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <IoSchool size={20} />
                    <p className="text-gray-500 font-semibold">Career Counseling</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <FaPlaneDeparture size={20} />
                    <p className="text-gray-500 font-semibold">Pre-departure Support</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <FaHouseUser size={20} />
                    <p className="text-gray-500 font-semibold">Post-arrival Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
