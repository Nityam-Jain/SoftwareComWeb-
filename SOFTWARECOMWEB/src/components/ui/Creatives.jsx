import React from "react";
import sectionImg from "../../assets/ipad_image.png";

export default function CreativeSection() {
  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeInLeft {
            0% { opacity: 0; transform: translateX(-50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          @keyframes fadeInRight {
            0% { opacity: 0; transform: translateX(50px); }
            100% { opacity: 1; transform: translateX(0); }
          }
          .fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
          .fade-in-left { animation: fadeInLeft 1s ease-out forwards; }
          .fade-in-right { animation: fadeInRight 1s ease-out forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 sm:px-6 lg:px-8 gap-10 md:gap-16">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center fade-in-left">
          <img
            src={sectionImg}
            alt="Team working together"
            className="w-full max-w-[500px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[550px] drop-shadow-xl rounded-xl"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-6 lg:pl-10 fade-in-right delay-200">
          <span className="inline-block text-xs mb-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-md">
            ABOUT US
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold mb-2 text-gray-900 fade-in-up delay-200">
            Selecting the Finest IT Service <span className="block md:inline">Provider</span>
          </h2>

          <p className="mt-2 mb-6 text-gray-700 leading-relaxed text-sm sm:text-base md:text-base lg:text-lg fade-in-up delay-400">
            At Binarylogix, we provide innovative software development and
            digital marketing solutions tailored to your business needs. Our
            expert team uses technology to drive growth, streamline operations,
            and enhance your digital presence. Committed to excellence, we help
            you build robust software and execute strategic marketing campaigns,
            turning your vision into reality and unlocking business success.
          </p>

          <ul className="space-y-5 mb-10 fade-in-up delay-600">
            <li className="flex flex-col sm:flex-row items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M11 3v10l6-3-6-3z" />
                </svg>
              </span>
              <div className="mt-2 sm:mt-0">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  Customized Solutions for your Business
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Offering tailored solutions designed specifically for your
                  business, ensuring optimal performance, enhanced efficiency,
                  and long-term success.
                </p>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row items-start gap-3">
              <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 6v6l4 2" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </span>
              <div className="mt-2 sm:mt-0">
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                  Strategic Planning for best Outcomes
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Providing strategic planning services to achieve the best
                  outcomes, driving growth, optimizing resources, and ensuring
                  long-term business success.
                </p>
              </div>
            </li>
          </ul>

          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 sm:px-8 py-2 rounded-full shadow-md transition fade-in-up delay-600 text-sm sm:text-base">
            ABOUT US
          </button>
        </div>
      </div>
    </section>
  );
}
