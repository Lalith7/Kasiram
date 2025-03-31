import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const blogs = [
  {
    id: 1,
    title: "University of Hertfordshire",
      description:
        "Save up to £9,000 on your three-year undergraduate degree with the UH Tri-annual UG Scholarship, which offers £2,000 per year. Additionally, if you pay the full tuition fee before or at registration, you will receive an extra discount of £1,000 per year.",
      image: "https://images.squarespace-cdn.com/content/v1/5e4fedf06085c566476437f9/f1f8ce40-dc7e-49ff-87c7-b5c88ee38f8e/1fad02ca-b44c-c441-dec2-06a6ecc69563.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "University of Oxford",
      description:
        "Oxford offers a wide range of scholarships for international students, making world-class education more affordable.",
      image: "https://www.ethoshotels.co.uk/wp-content/uploads/2020/02/161947_Viator_Shutterstock_121978.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Harvard University",
      description:
        "Harvard's financial aid program provides scholarships to students from diverse backgrounds, ensuring accessibility.",
      image: "https://images.shiksha.com/mediadata/images/1533035366php2MWezz.jpeg",
    link: "#"
  }
];

const Blogs = () => {
  return (
    <>
      <Navbar />
      
      <section className="bg-cover bg-center h-[40vh] flex flex-col items-center justify-center text-white text-center px-4 shadow-lg" style={{ backgroundImage: "url('https://uceap.universityofcalifornia.edu/sites/default/files/marketing-images/country-page-images/japan-page-header.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(90%)' }}>
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Our Latest Blogs</h1>
        <p className="text-lg mt-2 max-w-2xl font-medium drop-shadow-md">Stay updated with the latest insights on overseas education, university admissions, scholarships, and more.</p>
      </section>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
              <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.description}</p>
                <a href={blog.link} className="mt-4 inline-block text-blue-600 font-semibold hover:underline">Read More →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default Blogs;