import React from "react";
import sectionImg from "../../assets/ipad_image.png"; // <-- Adjust the path to where your asset is

export default function CreativeSection() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-4 gap-8">
        {/* Left: Device Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={sectionImg}
            alt="Notero Creative Mockup"
            className="w-[500px] max-w-full drop-shadow-xl rounded-xl"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start md:pl-10">
          <span className="inline-block text-xs mb-2 px-2 bg-purple-100 text-purple-700 rounded-md">Notero - Easy Notes App</span>
          <h2 className="text-4xl font-extrabold mb-2">
            The Notero For{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent">
              Creatives
            </span>
          </h2>
          <p className="mt-2 mb-6 text-gray-700">
            Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc
          </p>
          <ul className="space-y-5 mb-10">
            <li className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M15 17h5l-1.405-1.405M19.595 12.004A7.004 7.004 0 1015 19v-2" />
                </svg>
              </span>
              <span className="font-semibold text-gray-900">Filtering notes using matched keywords</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M3 12h18M12 5l7 7-7 7" />
                </svg>
              </span>
              <span className="font-semibold text-gray-900">Automatically sync in real times</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M4 6h16M4 6v12a2 2 0 002 2h12a2 2 0 002-2V6M4 6V4a2 2 0 012-2h12a2 2 0 012 2v2" />
                </svg>
              </span>
              <span className="font-semibold text-gray-900">Complete note editor with rich text options</span>
            </li>
          </ul>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-2 rounded-full shadow-md transition">
            Free Register
          </button>
        </div>
      </div>
    </section>
  );
}
