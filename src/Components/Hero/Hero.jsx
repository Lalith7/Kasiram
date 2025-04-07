import React, { useEffect, useState } from "react";
import StudyAbroadImg1 from "../../assets/HBG/hbg1.png";
import StudyAbroadImg2 from "../../assets/HBG/hbg2.png";
import StudyAbroadImg3 from "../../assets/HBG/hbg3.png";
import HeroBg from "../../assets/herobg.jpg";

const ContentList = [
  {
    id: 1,
    img: StudyAbroadImg1,
    title: "Study Abroad with Kasiram",
    description: "Expert guidance for university admissions, visas, and scholarships. Start your global journey today!",
  },
  {
    id: 2,
    img: StudyAbroadImg2,
    title: "Unlock Global Opportunities",
    description: "Choose from top universities worldwide and build your dream career with our expert support.",
  },
  {
    id: 3,
    img: StudyAbroadImg3,
    title: "Your Future Begins Here",
    description: "Seamless admission, visa, and scholarship support for your study abroad ambitions.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ContentList.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const bgImage = {
    backgroundImage: `url(${HeroBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="min-h-[600px] sm:min-h-[700px] flex justify-center items-center bg-gray-100 dark:bg-gray-900 dark:text-white duration-200" style={bgImage}>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Section */}
          <div data-aos="fade-right" data-aos-duration="800" data-aos-once="true" className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-4xl sm:text-6xl font-extrabold leading-tight">
              {ContentList[currentIndex].title}
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className="text-lg text-gray-700 dark:text-gray-300">
              {ContentList[currentIndex].description}
            </p>
            <div className="flex justify-start">
<<<<<<< HEAD
            <button 
              data-aos="zoom-in" 
              data-aos-delay="700" 
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out text-white py-2 px-4 rounded-full shadow-lg text-md font-medium transform hover:scale-105"
            >
              Get Started
            </button>

=======
              <button data-aos="zoom-in" data-aos-delay="700" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full shadow-lg text-md font-medium">
                Get Started
              </button>
>>>>>>> 0e5df0c7ead65312faa3f950239dac7beef692ab
            </div>
          </div>
          {/* Image Section */}
          <div className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[400px] overflow-hidden flex justify-center items-center">
              <img data-aos="flip-left" data-aos-duration="600" data-aos-once="true" src={ContentList[currentIndex].img} alt="Study Abroad" className="w-[300px] sm:w-[400px] rounded-lg shadow-xl transition-opacity duration-500" />
            </div>
            <div className="flex lg:flex-col absolute bottom-0 lg:right-[-40px] bg-white/40 backdrop-blur-lg p-3 rounded-full">
              {ContentList.map((item, index) => (
                <img key={item.id} data-aos="zoom-in" data-aos-duration="400" data-aos-once="true" src={item.img} onClick={() => setCurrentIndex(index)} alt="Study Abroad Option" className="w-[80px] h-[80px] object-cover rounded-lg shadow-md cursor-pointer hover:scale-110 transition-transform" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;