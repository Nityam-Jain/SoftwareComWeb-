import React from "react";
import sectionImg from "../../assets/bannerimg003.png";
import { ChartColumnDecreasing, ChartPie } from "lucide-react";

export default function CreativeSection() {
  return (
    <section className="w-full bg-white py-8 overflow-hidden">
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

      {/* 🔹 Container with responsive layout fix */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 gap-10 lg:gap-16">
        {/* 🔹 Left: Image (on top for mobile + tablet) */}
        <div className="w-full lg:w-1/2 flex justify-center fade-in-left">
          <img
            src={sectionImg}
            alt="Team working together"
            className="w-full max-w-[420px] sm:max-w-[450px] md:max-w-[480px] lg:max-w-[550px] xl:max-w-[600px] drop-shadow-xl rounded-xl object-contain"
          />
        </div>

        {/* 🔹 Right: Content (below image for <1024px) */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left fade-in-right delay-200">
          <span className="inline-block text-xs sm:text-sm mb-3 px-2.5 py-1 bg-blue-100 text-blue-700 rounded-md">
            About us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-3 text-gray-900 leading-snug fade-in-up delay-200">
            Selecting the Finest IT Service{" "}
            <span className="block md:inline">Provider</span>
          </h2>

          <p className="mt-2 mb-6 text-gray-700 leading-relaxed fade-in-up delay-400 text-sm sm:text-base">
            At Binarylogix, we provide innovative software development and
            digital marketing solutions tailored to your business needs. Our
            expert team uses technology to drive growth, streamline operations,
            and enhance your digital presence. Committed to excellence, we help
            you build robust software and execute strategic marketing campaigns,
            turning your vision into reality and unlocking business success.
          </p>

          <ul className="space-y-6 fade-in-up delay-600">
            <li className="flex items-start sm:items-center gap-4">
              <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <ChartColumnDecreasing size={20} />
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Customized Solutions for your Business
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Offering tailored solutions designed specifically for your
                  business, ensuring optimal performance, enhanced efficiency,
                  and long-term success.
                </p>
              </div>
            </li>

            <li className="flex items-start sm:items-center gap-4">
              <span className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
                <ChartPie size={20} />
              </span>
              <div>
                <h4 className="font-semibold text-gray-900 text-base sm:text-lg">
                  Strategic Planning for best Outcomes
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mt-1">
                  Providing strategic planning services to achieve the best
                  outcomes, driving growth, optimizing resources, and ensuring
                  long-term business success.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}