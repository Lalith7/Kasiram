import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Blogs = () => {
  const blogs = [
    {
      title: "University of Hertfordshire",
      description:
        "Save up to £9,000 on your three-year undergraduate degree with the UH Tri-annual UG Scholarship, which offers £2,000 per year. Additionally, if you pay the full tuition fee before or at registration, you will receive an extra discount of £1,000 per year.",
      image: "https://images.squarespace-cdn.com/content/v1/5e4fedf06085c566476437f9/f1f8ce40-dc7e-49ff-87c7-b5c88ee38f8e/1fad02ca-b44c-c441-dec2-06a6ecc69563.jpg", // Replace with actual image URL
    },
    {
      title: "University of Oxford",
      description:
        "Oxford offers a wide range of scholarships for international students, making world-class education more affordable.",
      image: "https://www.ethoshotels.co.uk/wp-content/uploads/2020/02/161947_Viator_Shutterstock_121978.jpg",
    },
    {
      title: "Harvard University",
      description:
        "Harvard's financial aid program provides scholarships to students from diverse backgrounds, ensuring accessibility.",
      image: "https://images.shiksha.com/mediadata/images/1533035366php2MWezz.jpeg",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 text-center bg-white">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">Latest Blogs</h2>
      <p className="text-md text-gray-600 mb-8 max-w-2xl mx-auto">Stay updated with the latest insights, scholarship opportunities, and university news curated just for you.</p>

      {/* Swiper Carousel */}
      <div className="flex justify-center">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full max-w-6xl"
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300 flex flex-col h-full border border-gray-200">
                <img
                  src={blog.image}
                  alt="Blog Image"
                  className="w-full h-56 object-cover rounded-t-xl"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{blog.title}</h3>
                  <p className="text-gray-700 text-md flex-grow">{blog.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View More Button */}
      <div className="mt-10">
        <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-indigo-800 transition duration-300 transform hover:scale-105">
          Explore More Blogs
        </button>
      </div>
    </section>
  );
};

export default Blogs;
