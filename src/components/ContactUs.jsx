const ContactUs = () => {
    return (
      <section className="py-10 px-6 bg-gradient-to-b from-indigo-600 to-blue-400">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-6">
          <span className="text-indigo-900">Contact</span> us
        </h2>
  
        {/* Form Container */}
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <form className="flex flex-col gap-4">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
  
            {/* Message Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              ></textarea>
            </div>
  
            {/* Submit Button */}
            <button className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactUs;
  