import React from "react";
import darkThemeImg from "../../assets/about_icon.png"; 

export default function DarkThemeSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 gap-10">
        {/* Left: Image inside blob background */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Purple blob background */}
          <div className="absolute top-8 left-1 md:left-10 w-[360px] h-[370px] rounded-full bg-gradient-to-tr from-purple-600 via-purple-400 to-pink-300 blur-2xl opacity-70 -z-10"></div>
          <img
            src={darkThemeImg}
            alt="Dark Theme Screenshot"
            className="w-[350px] h-[350px] object-cover rounded-full shadow-xl relative"
          />
        </div>
        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
          <span className="inline-block text-xs mb-3 px-3 bg-purple-100 text-purple-700 rounded-md">Beautiful Themes</span>
          <h2 className="text-4xl font-extrabold mb-2">
            Focus More With<br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text text-transparent">
              Dark Theme
            </span>
          </h2>
          <p className="mt-3 mb-6 text-gray-700">
            Apply Notero’s elegant themes to your taste. Dark themes work excellently for those who prefer distraction-free mode.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-center gap-2 text-gray-500 font-medium">
              • Filtering notes using matched keywords
            </li>
            <li className="flex items-center gap-2 text-gray-900 font-semibold">
              • 8 Beautiful themes for you select
            </li>
            <li className="flex items-center gap-2 text-gray-500 font-medium">
              • Save energy for your device
            </li>
            <li className="flex items-center gap-2 text-gray-500 font-medium">
              • Easy to switch between light and dark mode
            </li>
          </ul>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition">
            Discovery Now
          </button>
        </div>
      </div>
    </section>
  );
}
