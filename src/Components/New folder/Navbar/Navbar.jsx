import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import Logo from "../../../assets/klogo.png";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.desktop-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <div>
      {/* Top Navbar - Hidden on mobile */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2" data-aos="fade-down">
          {/* Left: Email */}
          <div className="flex items-center space-x-2">
            <MdEmail className="mr-1" />
            <span>kasiramoverseas@gmail.com</span>
          </div>
          {/* Right: Phone */}
          <div className="flex items-center space-x-2">
            <MdPhone className="mr-1" />
            <span>+91 86808 00440</span>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white shadow-md relative z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4" data-aos="fade-down">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={Logo}
              alt="Crack Developers Logo"
              className="h-20 w-60 bg-primary rounded-2xl p-2 shadow-md"
            />
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex space-x-8 text-black font-semibold">
            <a href="/" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Home</a>
            <a href="/aboutus" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">About Us</a>
            <a href="/blog" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Blog</a>
            <a href="/services" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Services</a>
            <a href="/contact" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Contact Us</a>

            {/* Dropdown for Countries */}
            <div className="relative desktop-dropdown">
              <button
                onClick={toggleDropdown}
                className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300 focus:outline-none"
              >
                Countries
              </button>
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-lg py-2 w-40 z-50">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">UK</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Canada</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Australia</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">New Zealand</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Ireland</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">USA</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">View More</a>
                </div>
              )}
            </div>
          </div>

          {/* Sign In */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">SIGN IN</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md p-4 flex flex-col items-center justify-center">
            <a href="/" className="block py-2 text-black hover:text-gray-700 transition duration-300">Home</a>
            <a href="/aboutus" className="block py-2 text-black hover:text-gray-700 transition duration-300">About Us</a>

            {/* Mobile Dropdown */}
            <div className="w-full text-center">
              <button
                onClick={toggleMobileDropdown}
                className="block w-full py-2 text-black hover:text-gray-700 transition duration-300"
              >
                Countries {mobileDropdownOpen ? '▲' : '▼'}
              </button>

              {mobileDropdownOpen && (
                <div className="w-full flex flex-col items-center bg-white shadow-lg mt-2 rounded-lg py-2">
                  <a href="/about" className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300">UK</a>
                  <a href="/leadership" className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300">Canada</a>
                </div>
              )}
            </div>

            <a href="/services" className="block py-2 text-black hover:text-gray-700 transition duration-300">Services</a>
            <a href="/blog" className="block py-2 text-black hover:text-gray-700 transition duration-300">Blog</a>
            <a href="/contact" className="block py-2 text-black hover:text-gray-700 transition duration-300">Contact Us</a>
            <button className="bg-primary text-white w-full py-2 rounded hover:bg-gray-800 transition duration-300 mt-2">SIGN IN</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
