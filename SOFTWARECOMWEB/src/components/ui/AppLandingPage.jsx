import React from "react";

import Mobilehandle from "../../assets/handholdingmobile.png";
import row1 from "../../assets/row1SS.png";
import row2 from "../../assets/row2SS.png";
import row3 from "../../assets/row3SS.png";
import row4 from "../../assets/row4SS.png";
import row5 from "../../assets/row5SS.png";
import row6 from "../../assets/row6SS.png";

export default function AppLandingPage() {
  return (
    <>
      {/* Main App Landing Section */}
      <section className="relative w-full min-h-screen bg-white overflow-x-hidden flex items-center justify-center py-10 sm:py-16 px-4 md:px-8">
        {/* Background blobs */}
        <div className="absolute right-0 lg:right-[-5vw] top-20 w-[280px] sm:w-[380px] md:w-[480px] h-[280px] sm:h-[380px] md:h-[480px] bg-gradient-to-tr from-purple-500 via-purple-400 to-pink-300 rounded-full blur-3xl opacity-50 animate-pulse-slow pointer-events-none z-0" />
        <div className="absolute left-0 bottom-0 w-24 sm:w-40 h-16 sm:h-24 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-2xl opacity-60 pointer-events-none z-0" />

        <div className="max-w-6xl w-full mx-auto flex flex-col-reverse lg:flex-row items-center z-10 relative gap-10 md:gap-20">
          {/* Left Text */}
          <div className="lg:w-1/2 w-full flex flex-col items-start justify-center text-center sm:text-left mb-10 lg:mb-0 z-10 -mt-8 sm:-mt-20 md:-mt-28">
            <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-md mb-5 text-xs sm:text-sm font-semibold tracking-wider animate-fade-in">
              Notero - Easy Notes App
            </span>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 animate-fade-in"
              style={{ lineHeight: "1.1" }}
            >
              Note{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-400">
                Your Everything
              </span>
              <br />
              In One App
            </h1>
            <p className="text-gray-500 font-medium mb-6 max-w-xl mx-auto sm:mx-0 animate-fade-in text-sm sm:text-base">
              No coding required to make customizations. The live customizer has
              everything you need.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-3 mb-8 animate-fade-in">
              <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold px-7 py-3 rounded-full shadow-lg focus:outline-none text-sm sm:text-base flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="white"
                  viewBox="0 0 384 512"
                >
                  <path d="M318.7 268.7c-3.8-2.7-8.8-3.9-13.3-2.9-4.5 1-8.4 4.1-10.6 8.4-6.7 13.4-13.8 35.1-12.6 77.5.2 6.7 4.7 12.3 11.1 14.1 6.3 1.8 12.7-.9 16.2-6.4 17.4-28.3 16.9-56.5 8.9-90.7zM334.7 74C312.5 50 282 38.3 255.3 27.9c-37.5-14-68-32.7-106.1-32.7C127.5-4.8 98 8.5 75.8 32.4 53.6 56.3 42 87.3 41.9 117.1c-.3 69.5 50.2 136.9 125.7 178.5 6.4 3.5 13.5 3.5 19.8 0 75.4-41.6 126-109 125.7-178.5-.1-29.7-11.9-60.8-33.1-83.1zm-60.7 111.1c-3.1-8-10.8-13.1-19.2-12.8-8.4.3-15.4 6-18.1 13.7-6.7 18.3-18.3 29.8-37.4 37.5-5.9 2.3-9.8 8.1-9.2 14.3.6 6.1 5.5 10.8 11.6 10.8 6.5 0 14.1-3.1 23.7-6.7 17.9-7.1 32.5-21.7 38-41.1 1.1-3.7.7-7.8-1.4-11.2z" />
                </svg>
                Download App
              </button>
              <span className="inline-flex items-center gap-2 text-sm sm:text-base font-medium text-gray-700 cursor-pointer">
                <svg
                  className="w-5 h-5 text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.293 15.707a1 1 0 001.414 0l5-5a1 1 0 00-1.414-1.414L11 12.586V5a1 1 0 10-2 0v7.586l-4.293-4.293A1 1 0 003.293 10.707l5 5z" />
                </svg>
                View Promotion
              </span>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center sm:justify-start mb-4 animate-fade-in">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 12l2 2l4 -4"></path>
                </svg>
                FREE 14 DAYS TRIAL
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
                ONE TIME PAYMENT
              </div>
            </div>
          </div>

          {/* Right phone mockup */}
          <div className="lg:w-1/2 w-full flex items-center justify-center relative animate-float">
            <img
              src={Mobilehandle}
              alt="App mockup"
              className="w-[260px] sm:w-[400px] md:w-[480px] lg:w-[520px] h-auto drop-shadow-2xl rounded-2xl z-10"
              style={{ animation: "float 3.2s ease-in-out infinite" }}
            />
          </div>
        </div>
      </section>

      {/* Featured on Section */}
      <section className="relative w-full bg-[#f5f3ff] overflow-hidden py-12 sm:py-16 mt-10">
        {/* Top wave */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 left-0 w-full h-20 sm:h-32"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,0L0,0Z"
          ></path>
        </svg>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
            <span className="text-purple-600 font-bold text-2xl sm:text-3xl">
              25K+
            </span>{" "}
            Installation and Featured on
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 mt-6 sm:mt-8">
            {[row1, row2, row3, row4, row5, row6].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Logo ${i + 1}`}
                className="h-6 sm:h-8 md:h-10 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>

        {/* Bottom wave */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full h-20 sm:h-32"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,186.7C480,171,600,149,720,138.7C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </section>
    </>
  );
}
