import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const countries = [
  { id: 1, name: "USA", image: "https://via.placeholder.com/200" },
  { id: 2, name: "Canada", image: "https://via.placeholder.com/200" },
  { id: 3, name: "UK", image: "https://via.placeholder.com/200" },
  { id: 4, name: "Australia", image: "https://via.placeholder.com/200" },
  { id: 5, name: "Germany", image: "https://via.placeholder.com/200" },
];

const CountriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === countries.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? countries.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-10 px-6 bg-gray-100">
      {/* Heading & Description */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-black">
          Countries We Provide
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-2">
          Start your transformative educational journey abroad. Immerse in
          diverse cultures, unlock new perspectives, and forge lifelong
          connections. Your adventure begins with studying abroad.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-4xl mx-auto mt-8 overflow-hidden">
        <div className="flex transition-transform ease-out duration-300">
          {countries.map((country, index) => (
            <div
              key={country.id}
              className={`w-full flex-shrink-0 transition-opacity duration-300 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-center mt-2 font-semibold text-lg">
                {country.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {countries.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-black" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default CountriesSection;
