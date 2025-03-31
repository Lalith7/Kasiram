import React from "react";
import USAImg from "../../assets/usf.png";
import UKImg from "../../assets/ukf.jpg";
import CanadaImg from "../../assets/ukf.png";

const ServicesData = [
  {
    id: 1,
    img: USAImg,
    name: "United States",
    description:
      "World-class universities, top research opportunities, and a global job market.",
  },
  {
    id: 2,
    img: UKImg,
    name: "United Kingdom",
    description:
      "Prestigious universities, shorter degree durations, and strong post-study work options.",
  },
  {
    id: 3,
    img: CanadaImg,
    name: "Canada",
    description:
      "Affordable education, high quality of life, and excellent PR pathways for students.",
  },
];

const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Destinations for International Students
            </p>
            <h1 className="text-3xl font-bold">Top Countries to Study Abroad</h1>
            <p className="text-xs text-gray-400">
              Explore the best countries offering high-quality education, career opportunities, and post-study benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="zoom-in"
                data-aos-duration="300"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[150px] flex justify-center items-center">
                  <img
                    src={service.img}
                    alt={service.name}
                    className="w-[200px] h-[150px] object-contain block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;