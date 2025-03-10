import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0c0c50] p-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 relative">
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/kasiram-logo.png"
            alt="Kasiram Logo"
            className="h-10 md:h-12"
          />
          <div className="text-white font-bold text-lg text-center md:text-left">
            KASIRAM <br />
            <span className="text-sm">OVERSEAS EDUCATIONAL CONSULTANCY</span>
          </div>
        </div>
        {/* Mobile Menu Icon */}
        <button 
          className="md:hidden text-white text-xl" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </div>

      {/* Search Bar (Hidden on Mobile) */}
      <div className="relative flex-grow max-w-md w-full md:mx-4 hidden md:block">
        <input
          type="text"
          placeholder="search"
          className="w-full p-2 pl-10 rounded-full bg-gray-200 text-black focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-600" />
      </div>

      {/* Contact Button */}
      <button className="bg-white text-[#0c0c50] px-4 py-2 rounded-full border border-white hover:bg-gray-200 w-full md:w-auto">
        Contact us
      </button>

      {/* Navigation Links (Shown below on mobile) */}
      <div 
        className={`w-full md:flex md:items-center md:justify-center ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-black bg-white md:bg-transparent p-4 md:p-0 w-full md:w-auto">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">About us</li>
          <li className="hover:underline cursor-pointer">Blogs</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Country</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
