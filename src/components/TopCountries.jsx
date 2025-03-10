const TopCountries = () => {
    return (
      <section className="py-12 px-6 md:px-16">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-center">
          <span className="text-blue-600 font-bold">Top Countries</span> to Study Abroad
        </h2>
  
        {/* Card Container */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {/* Country Cards */}
          {[
            {
              country: "Australia",
              description:
                "Studying in Australia offers diverse benefits: world-class education.",
            },
            {
              country: "UK",
              description:
                "Studying in the UK provides top-tier education, rich cultural exp...",
            },
            {
              country: "Canada",
              description:
                "Studying in Canada offers high-quality education, diverse cultural experiences.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-200 w-72 h-44 p-4 rounded-lg shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.country}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
              <button className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition">
                view details
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TopCountries;
  