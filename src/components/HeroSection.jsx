const HeroSection = () => {
    return (
      <section className="flex flex-col md:flex-row items-center justify-between bg-[#f3f1fc] h-screen px-8 md:px-16">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            A plan for every <br />
            <span className="text-purple-700">dream</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Expand your horizons: study abroad with Kasiram!
          </p>
          <button className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition">
            Learn more
          </button>
        </div>
  
        {/* Right Content (Image Placeholder) */}
        <div className="md:w-1/2 h-64 md:h-96 bg-gray-300 rounded-lg mt-6 md:mt-0">
          {/* Replace this with an actual image */}
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  