import React from "react";
import Icon1 from "../../assets/vardhanicon.jpeg";
import Icon2 from "../../assets/SHicon.jpeg";
import Icon3 from "../../assets/ruchiicon.jpeg";
import Icon4 from "../../assets/abhichaturicon.png";
import Icon5 from "../../assets/howtocleanicon.jpeg";
import Icon6 from "../../assets/shardamoicon.jpeg";
import Icon7 from "../../assets/jjinticon.png";
import Icon8 from "../../assets/ayurwayicon.png";
import Icon9 from "../../assets/ssvmicon.png";

export default function IntegrationSection() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      {/* ✅ Inline style for gradient & slider animation */}
      <style>{`
        .bg-gradient-animate {
          background: linear-gradient(135deg, #ffffff, #eaf2ff, #fdfcfb, #dbe8ff);
          background-size: 400% 400%;
          animation: gradientShift 15s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Smooth infinite horizontal scroll (base) */
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slider {
          display: flex;
          width: max-content;
          animation: slide 10s linear infinite;
        }

        .slider:hover {
          animation-play-state: paused; /* Pause on hover */
        }

        /* Responsive tweaks for slider animation speed (improves feel on different screens) */
        @media (max-width: 639px) { /* mobile */
          .slider { animation-duration: 14s; }
        }
        @media (min-width: 640px) and (max-width: 1023px) { /* tablet */
          .slider { animation-duration: 12s; }
        }
        @media (min-width: 1024px) { /* desktop */
          .slider { animation-duration: 10s; }
        }
      `}</style>

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 w-5 h-5 rounded-full bg-purple-300 opacity-60"></div>
        <div className="absolute bottom-12 right-8 w-6 h-6 rounded-full bg-pink-300 opacity-60"></div>
        <div className="absolute top-1/2 left-24 w-4 h-4 rounded-full bg-purple-200 opacity-80"></div>
        <div className="absolute bottom-24 left-0 w-8 h-8 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-5 right-12 w-9 h-9 rounded-full bg-pink-200 opacity-70"></div>

        {/* Wavy SVG */}
        <svg
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[420px] sm:w-[600px] md:w-[800px] lg:w-[900px]"
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
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-20 relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">
          Trusted by Our{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Leading Clients
          </span>
        </h2>

        <p className="mt-2 mb-10 text-gray-700 flex flex-wrap justify-center items-center text-center leading-relaxed gap-x-2">
          Our solutions empower businesses to achieve growth, efficiency, and
          excellence.
        </p>

        {/* ✅ Continuous sliding icons */}
        <div className="relative overflow-hidden w-full">
          {/* responsive gaps: mobile -> tablet -> desktop */}
          <div className="slider flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-36 px-2 sm:px-6">
            {[
              Icon1,
              Icon2,
              Icon3,
              Icon4,
              Icon5,
              Icon6,
              Icon7,
              Icon8,
              Icon9,
              Icon1,
              Icon2,
              Icon3,
              Icon4,
              Icon5,
              Icon6,
              Icon7,
              Icon8,
              Icon9,
            ].map((icon, idx) => (
              <div
                key={idx}
                className="flex justify-center items-center flex-shrink-0"
              >
                <img
                  src={icon}
                  alt={`Client ${idx + 1}`}
                  className="w-40 sm:w-24 md:w-28 lg:w-36 h-auto object-contain hover:scale-110 transition-transform duration-300"
                  style={{ background: "transparent" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
