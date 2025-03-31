import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const destinations = [
  {
    id: 1,
    name: "United Kingdom",
    text: "Home to top universities, 1-year master’s, and strong post-study work options.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
  },
  {
    id: 2,
    name: "Canada",
    text: "Affordable education, diverse culture, and easy PR pathways.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
  },
  {
    id: 3,
    name: "Australia",
    text: "Globally ranked universities, work while studying, and PR opportunities.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
  },
  {
    id: 4,
    name: "Germany",
    text: "Tuition-free public universities, strong research, and job prospects.",
    img: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
  },
  {
    id: 5,
    name: "Ireland",
    text: "Tech-driven economy, top universities, and EU job access.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg",
  },
];

const DestinationSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="max-w-3xl mx-auto py-10">
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800">Top Study Destinations</h2>
        <p className="text-gray-600 mt-2 text-lg">Unlock global education and career opportunities.</p>
      </div>
      <Slider {...settings}>
        {destinations.map((item) => (
          <div key={item.id} className="px-4">
            <div className="bg-gradient-to-b from-blue-50 to-white shadow-lg rounded-xl p-6 text-center border border-gray-200">
              <img
                src={item.img}
                alt={item.name}
                className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DestinationSlider;