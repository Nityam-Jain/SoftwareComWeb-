import React from "react";
import dropboxIcon from "../../assets/popularimg1.png";
import googleIcon from "../../assets/popularimg2.png";
import zeplinIcon from "../../assets/popularimg3.png";
import slackIcon from "../../assets/popularimg4.png";
import paypalIcon from "../../assets/popularimg5.png";

export default function IntegrationSection() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-5 h-5 rounded-full bg-purple-300 opacity-60"></div>
        <div className="absolute bottom-12 right-32 w-6 h-6 rounded-full bg-pink-300 opacity-60"></div>
        <div className="absolute top-1/2 left-24 w-4 h-4 rounded-full bg-purple-200 opacity-80"></div>
        <div className="absolute bottom-24 left-0 w-8 h-8 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-5 right-12 w-9 h-9 rounded-full bg-pink-200 opacity-70"></div>

        {/* Wavy SVG */}
        <svg
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
          width="900"
          height="90"
          viewBox="0 0 900 90"
          fill="none"
        >
          <path
            d="M0,75 Q225,10 450,75 Q675,140 900,75"
            stroke="#e2e8f0"
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="inline-block text-xs sm:text-sm mb-3 px-3 bg-purple-100 text-purple-700 rounded-md">
          One-Time Payment
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3">
          Integration With{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
            Popular Apps
          </span>
        </h2>

        <p className="mt-2 mb-10 text-gray-700 text-sm sm:text-base md:text-lg">
          Notero integrates with popular apps. Helps you easily connect and collaborate.
        </p>

        {/* Icons container */}
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-10 md:gap-14 py-8 relative z-20">
          <div className="flex flex-col items-center">
            <img src={dropboxIcon} alt="Dropbox" className="w-20 sm:w-24 md:w-32 h-auto" />
          </div>
          <div className="flex flex-col items-center">
            <img src={googleIcon} alt="Google Calendar" className="w-20 sm:w-24 md:w-32 h-auto" />
          </div>
          <div className="flex flex-col items-center">
            <img src={zeplinIcon} alt="Zeplin" className="w-20 sm:w-24 md:w-32 h-auto" />
          </div>
          <div className="flex flex-col items-center">
            <img src={slackIcon} alt="Slack" className="w-20 sm:w-24 md:w-32 h-auto" />
          </div>
          <div className="flex flex-col items-center">
            <img src={paypalIcon} alt="PayPal" className="w-20 sm:w-24 md:w-32 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
