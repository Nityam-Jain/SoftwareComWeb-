import React from "react";

export default function AboutUsSection() {
  return (
    <section className="bg-white py-16 px-6 flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Left Image + Experience Badge + Video */}
      <div className="relative w-full md:w-1/2 flex flex-col items-center md:items-start">
        <div className="relative">
          {/* Main Image */}
          <img
            src="/your-image.jpg"
            alt="Team working"
            className="rounded-xl shadow-lg w-80 h-56 object-cover"
          />
          {/* Experience Badge */}
          <div className="absolute top-4 left-4 bg-blue-600 text-white rounded-lg p-4 flex flex-col items-center shadow-md">
            <svg className="w-8 h-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {/* Example icon */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
            </svg>
            <span className="text-lg font-semibold">5 Years</span>
            <span className="text-xs">Working Exp.</span>
          </div>
          {/* Video Thumbnail (simulated) */}
          <div className="absolute bottom-[-24px] left-20 bg-white rounded-lg shadow-md flex items-center p-2 group">
            <img
              src="/your-video-thumb.jpg"
              alt="Video"
              className="w-16 h-16 rounded"
            />
            <button className="ml-2 bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-blue-600">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {/* Play icon */}
                <polygon points="5,3 19,12 5,21" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Right Content */}
      <div className="mt-10 md:mt-0 md:w-1/2 md:pl-12">
        <span className="inline-block mb-2 text-blue-600 font-medium uppercase tracking-wide">About Us</span>
        <h2 className="text-3xl font-bold mb-6">
          Selecting the Finest IT Service Provider
        </h2>
        <p className="mb-6 text-gray-700">
          At Binarylogix, we provide innovative software development and digital marketing solutions tailored to your business needs. Our expert team uses technology to drive growth, streamline operations, and enhance your digital presence. Committed to excellence, we help you build robust software and execute strategic marketing campaigns, turning your vision into reality and unlocking business success.
        </p>
        <div className="mb-6">
          <div className="flex items-start mb-4">
            <div className="text-blue-600 mr-3">
              {/* Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Replace with appropriate icon (e.g., pie chart) */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 11V3a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0zm1 1a8 8 0 1 1-8-8 8 8 0 0 1 8 8z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Customized Solutions for your Business</h3>
              <p className="text-gray-600 text-sm">
                Offering tailored solutions designed specifically for your business, ensuring optimal performance, enhanced efficiency, and long-term success.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="text-blue-600 mr-3">
              {/* Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {/* Replace with appropriate icon (e.g., strategy) */}
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 0 0-8 0v4h-.2A2.8 2.8 0 0 0 5 13.8V16h14v-2.2A2.8 2.8 0 0 0 18.2 11H16z"></path>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Strategic Planning for best Outcomes</h3>
              <p className="text-gray-600 text-sm">
                Providing strategic planning services to achieve the best outcomes, driving growth, optimizing resources, and ensuring long-term business success.
              </p>
            </div>
          </div>
        </div>
        {/* About Us Button */}
        <button className="bg-gradient-to-r from-[#3488fa] to-black/70  text-white font-semibold py-3 px-8 rounded-lg shadow transition duration-200">
          ABOUT US &rarr;
        </button>
      </div>
    </section>
  );
}
