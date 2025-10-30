import React from "react";
import Icon1 from "../../assets/vardhanicon_img.png";
import Icon2 from "../../assets/SHicon_img.png";
import Icon3 from "../../assets/ruchiicon_img.png";
import Icon4 from "../../assets/abhichaturicon_img.png";
import Icon5 from "../../assets/howtocleanicon_img.png";
import Icon6 from "../../assets/mohanicon_img.png";
import Icon7 from "../../assets/jjinticon.png";
import Icon8 from "../../assets/ayurwayicon_img.png";
import Icon9 from "../../assets/pachamariicon_img.png";

export default function IntegrationSection() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      <style>{`
        .bg-gradient-animate {
          background: linear-gradient(135deg, #ffffff, #eaf2ff, #fdfcfb, #dbe8ff);
          background-size: 400% 400%;
          animation: gradientShift 25s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slider {
          display: flex;
          width: max-content;
          animation: slide 30s linear infinite;
        }

        .slider:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* BG circles + wave */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-6 w-5 h-5 rounded-full bg-purple-300 opacity-60"></div>
        <div className="absolute bottom-12 right-8 w-6 h-6 rounded-full bg-pink-300 opacity-60"></div>
        <div className="absolute top-1/2 left-24 w-4 h-4 rounded-full bg-purple-200 opacity-80"></div>
        <div className="absolute bottom-24 left-0 w-8 h-8 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute bottom-5 right-12 w-9 h-9 rounded-full bg-pink-200 opacity-70"></div>

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

      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-20 relative z-10">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">
          Trusted by Our{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Leading Clients
          </span>
        </h2>

        <p className="mt-2 mb-10 text-gray-700">
          Our solutions empower businesses to achieve growth, efficiency, and excellence.
        </p>

        <div className="relative overflow-hidden w-full">
          <div className="slider flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 px-2 sm:px-6">
            {[
              Icon1,Icon2,Icon3,Icon4,Icon5,Icon6,Icon7,Icon8,Icon9,
              Icon1,Icon2,Icon3,Icon4,Icon5,Icon6,Icon7,Icon8,Icon9,
            ].map((icon, idx) => (
              <div key={idx} className="flex justify-center items-center flex-shrink-0">
                <img
                  src={icon}
                  alt={`Client ${idx + 1}`}
                  className="w-30 sm:w-14 md:w-28 lg:w-36 h-auto object-contain hover:scale-110 transition-transform duration-100"
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
 