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
      image: "https://via.placeholder.com/600x300", // Replace with actual image URL
    },
    {
      title: "University of Oxford",
      description:
        "Oxford offers a wide range of scholarships for international students, making world-class education more affordable.",
      image: "https://via.placeholder.com/600x300",
    },
    {
      title: "Harvard University",
      description:
        "Harvard's financial aid program provides scholarships to students from diverse backgrounds, ensuring accessibility.",
      image: "https://via.placeholder.com/600x300",
    },
  ];

  return (
    <section className="py-12 px-6 md:px-16">
      {/* Heading */}
      <h2 className="text-3xl font-semibold mb-6">Blogs</h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="w-full max-w-3xl"
      >
        {blogs.map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <img
                src={blog.image}
                alt="Blog Image"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-700 text-sm">{blog.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Blogs;
