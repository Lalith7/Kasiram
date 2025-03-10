const AboutUs = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-semibold">About us</h2>
        <p className="text-gray-600">
          Transformative education journeys abroad. Tailored guidance, 
          integrity-driven. Navigating selection, applications, tests, 
          visas, scholarships. Unlocking global potential, forging trust.
        </p>
        <ul className="text-gray-700 space-y-1">
          <li>✅ Quality consultancy</li>
          <li>✅ 100% scholarship to study abroad</li>
          <li>✅ Gateway to Global Opportunities</li>
        </ul>
      </div>

      {/* Right Content (Image) */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="/flags-image.jpg" // Replace with actual image path
          alt="Student holding flags"
          className="rounded-lg w-80 md:w-96 shadow-lg"
        />
      </div>
    </section>
  );
};

export default AboutUs;
