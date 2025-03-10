import { useState } from "react";

const WhyKasiram = () => {
  const points = [
    { title: "Personalized Approach" },
    { title: "Expertise and Experience" },
    { title: "Innovative Solutions" },
    { title: "Global Network" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % points.length);
  };

  return (
    <section className="bg-gray-200 py-10 px-6 text-center relative">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6">
        Why <span className="text-indigo-600">kasiram?</span>
      </h2>

      {/* Card Container */}
      <div className="flex justify-center items-center gap-4 overflow-x-auto scrollbar-hide">
        {points.map((point, index) => (
          <div
            key={index}
            className="bg-white w-48 h-40 p-4 rounded-lg shadow-md flex justify-center items-center text-center"
          >
            <p className="font-semibold">{point.title}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {points.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-indigo-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default WhyKasiram;
