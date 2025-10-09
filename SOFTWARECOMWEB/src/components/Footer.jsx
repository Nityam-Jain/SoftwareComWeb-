import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/iteck_logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#f2f1f7] py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
        {/* Download Section */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Ready To{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#623abc] via-[#cc64bc] to-[#f57e8a]">
              Download
            </span>
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-3">
            Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* <a
              href="#"
              className="inline-flex items-center gap-2 bg-[#5842bc] text-white rounded-full px-5 py-2 text-xs sm:text-sm md:text-base font-semibold transition hover:opacity-90"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M16.365 1.43a5.28 5.28 0 0 0-4.42 2.35 4.87 4.87 0 0 0-1.87-2.26 5.7 5.7 0 0 0-3.18-.79c-2.53 0-4.82 1.75-5.2 4.15a4.4 4.4 0 0 0 .97 3.87c1.18 1.38 3 2.1 4.81 2.1a4.88 4.88 0 0 0 3.5-1.47 5.3 5.3 0 0 0 .97-4.17zM20.69 15.26c-.04-1.67-1.2-2.57-2.53-3.04-1.06-.38-2.1-.5-3.23-.52-1.33-.02-2.12.56-3.35.56-1.2 0-2.04-.58-3.53-.58-1.97 0-3.96 1.17-4.56 3.21-1.9 6.03 2.33 13.68 5.29 16.3 2.14 1.73 3.72 1.54 4.91 1.43.8-.08 2.59-1.06 3.72-2.15 1.24-1.2 1.75-2.4 1.77-2.45-.03-.02-2.36-.9-2.42-3.56z" />
              </svg>
              Download On App Store
            </a> */}

            {/* <a
              href="#"
              className="inline-flex items-center gap-2 border border-purple-700 text-black rounded-full px-5 py-2 text-xs sm:text-sm md:text-base font-semibold hover:bg-[#5842bc] hover:text-white transition"
            >
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M7.71 15.71c-1.79-1.06-2.92-2.9-2.92-4.9a5.62 5.62 0 0 1 4.07-5.29c.92-.32 1.82-.48 2.71-.48 2.27 0 4.11 1 5.21 2.85l-5.23 8.46a.5.5 0 0 1-.51.2 3.57 3.57 0 0 1-3.33-1.84zM19.37 11.96c0-.64-.08-1.28-.22-1.9l-1.57 2.55a4.45 4.45 0 0 0-2.89-1.24 3.08 3.08 0 0 0-2.18.88l-6.83-4.65c-.42-.29-1-.76-1.83-1.57 0 0 4.09 10.06 12.18 11.9 1.35.28 2.65.02 3.59-.25-1.26-1.21-2.5-3.87-2.5-4.47z" />
              </svg>
              Download On Google Play
            </a> */}
          </div>
        </div>

        {/* Navigation and Bottom */}
        <div className="border-t border-gray-300 pt-6 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-xs sm:text-sm md:text-base">
          {/* Footer Logo */}
          <div className="flex justify-center md:justify-start items-center gap-2">
            <img src={logo} alt="Iteck Logo" className="w-24 sm:w-28 h-auto object-contain" />
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 font-medium text-gray-700 text-xs sm:text-sm md:text-base">
            <Link to="/" className="text-purple-700 font-semibold">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/services">Services</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>

          {/* Language Selector */}
          <div className="flex justify-center md:justify-end items-center gap-2 cursor-pointer text-gray-700 text-xs sm:text-sm md:text-base">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
              alt="English"
              className="w-5 h-3 sm:w-6 sm:h-4 object-cover rounded-sm border border-gray-300"
            />
            <span>English</span>
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Bottom Copy Section */}
        <div className="border-t border-gray-300 mt-7 pt-5 text-center text-[10px] sm:text-xs md:text-sm text-gray-600 select-none leading-relaxed">
          © 2022 Copyrights by{" "}
          <a
            href="https://iteckco.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-900 hover:underline"
          >
            Iteck Co.
          </a>{" "}
          All Rights Reserved. Designed by{" "}
          <a
            href="https://themescamp.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-900 hover:underline"
          >
            ThemesCamp
          </a>
        </div>
      </div>
    </footer>
  );
}
