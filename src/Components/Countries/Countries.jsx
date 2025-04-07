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
<<<<<<< HEAD
  {
    id: 6,
    name: "USA",
    text: "World-renowned institutions, innovation hubs, and extensive campus life.",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
  },
  {
    id: 7,
    name: "New Zealand",
    text: "Safe environment, innovative teaching, and quality life.",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg",
  },
  {
    id: 8,
    name: "France",
    text: "Cultural capital, affordable tuition, and top engineering schools.",
    img: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
  },
  {
    id: 9,
    name: "Italy",
    text: "Rich history, quality education, and affordable living.",
    img: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg",
  },
  {
    id: 10,
    name: "Singapore",
    text: "Top Asian universities, tech growth, and global hub.",
    img: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg",
  },
  {
    id: 11,
    name: "Dubai",
    text: "Modern campus infrastructure, diverse programs, and growing opportunities.",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
  },
  {
    id: 12,
    name: "Malaysia",
    text: "Cost-effective education, multi-ethnic society, and English-medium courses.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg",
  },
  {
    id: 13,
    name: "Sweden",
    text: "Innovative education, sustainability focus, and high living standards.",
    img: "https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg",
  },
  {
    id: 14,
    name: "Switzerland",
    text: "Top hospitality schools, global finance, and multilingual culture.",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg",
  },
  {
    id: 15,
    name: "Netherlands",
    text: "English-taught programs, progressive society, and EU access.",
    img: "https://upload.wikimedia.org/wikipedia/en/2/20/Flag_of_the_Netherlands.svg",
  },
  {
    id: 16,
    name: "Poland",
    text: "Affordable tuition, growing education sector, and EU lifestyle.",
    img: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
  },
  {
    id: 17,
    name: "Norway",
    text: "No tuition fees, modern campuses, and high quality of life.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg",
  },
  {
    id: 18,
    name: "Finland",
    text: "Education innovation, free universities, and safe society.",
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg",
  }
=======
>>>>>>> 0e5df0c7ead65312faa3f950239dac7beef692ab
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
<<<<<<< HEAD
        <h2 className="text-4xl font-bold text-gray-800">Countries We Offer</h2>
=======
        <h2 className="text-4xl font-bold text-gray-800">Top Study Destinations</h2>
>>>>>>> 0e5df0c7ead65312faa3f950239dac7beef692ab
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