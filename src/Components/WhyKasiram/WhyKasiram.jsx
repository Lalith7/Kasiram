import React from "react";

const ProductsData = [
  {
    id: 1,
    img: "https://lodgingmagazine.com/wp-content/uploads/2022/02/OMLede1.jpg",
    title: "Personalized Approach",
  },
  {
    id: 2,
    img: "https://masteringtheheart.com/wp-content/uploads/2023/02/Day-299-Experience-vs.-Expertise-1024x576.jpg",
    title: "Expertise and Experience",
  },
  {
    id: 3,
    img: "https://www.cde.si/uploads/images/header/content_project.jpg",
    title: "Innovative Solutions",
  },
  {
    id: 4,
    img: "https://resultant.com/wp-content/uploads/2024/04/it-managed-services-blog.jpg",
    title: "Comprehensive Services",
  },
  {
    id: 5,
    img: "https://skydo-assets.s3.ap-south-1.amazonaws.com/thumbnail_How_to_Get_Global_Clients_for_Your_Web_Development_Agency_th_27aae5d379.png",
    title: "Global Network",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Why Kasiram Overseas?
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            We provide expert guidance, strong university partnerships, scholarship assistance, and end-to-end support to help students achieve their study abroad dreams.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100} // Add animation delay dynamically
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {/* View All button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-blue-700 transition duration-300">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;