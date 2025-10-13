import React from "react";
import Icon1 from "../../assets/vardhanicon.jpeg";
import Icon2 from "../../assets/SHicon.jpeg";
import Icon3 from "../../assets/ruchiicon.jpeg";
import Icon4 from "../../assets/robusticon.jpeg";
import Icon5 from "../../assets/howtocleanicon.jpeg";

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

        /* ✅ Smooth infinite horizontal scroll */
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
      `}</style>

      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-16 w-5 h-5 rounded-full bg-purple-300 opacity-60"></div>
        <div className="absolute bottom-12 right-32 w-6 h-6 rounded-full bg-pink-300 opacity-60"></div>
        <div className="absolute top-1/2 left-24 w-4 h-4 rounded-full bg-purple-200 opacity-80"></div>
        <div className="absolute bottom-24 left-0 w-8 h-8 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-5 right-12 w-9 h-9 rounded-full bg-pink-200 opacity-70"></div>

        {/* Wavy SVG */}
        <svg
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-[600px] sm:w-[800px] md:w-[900px]"
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
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">
          Trusted by Our{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Leading Clients
          </span>
        </h2>

        <p className="mt-2 mb-10 text-gray-700">
          Our solutions empower businesses to achieve growth, efficiency, and
          excellence. We collaborate closely with clients to deliver measurable
          results and lasting impact.
        </p>

        {/* ✅ Continuous sliding icons */}
        <div className="relative overflow-hidden w-full">
          <div className="slider flex items-center gap-10 px-4">
            {[Icon1, Icon2, Icon3, Icon4, Icon5, Icon1, Icon2, Icon3, Icon4, Icon5].map(
              (icon, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center flex-shrink-0"
                >
                  <img
                    src={icon}
                    alt={`Client ${idx + 1}`}
                    className="w-24 sm:w-20 md:w-24 lg:w-28 h-auto object-contain  hover:scale-105 transition-transform duration-300"
                    style={{ background: "transparent" }}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
