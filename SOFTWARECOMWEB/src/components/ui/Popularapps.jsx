import React from "react";
import dropboxIcon from "../../assets/popularimg1.png";
import googleIcon from "../../assets/popularimg2.png";
import zeplinIcon from "../../assets/popularimg3.png";
import slackIcon from "../../assets/popularimg4.png";
import paypalIcon from "../../assets/popularimg5.png";

export default function IntegrationSection() {
  return (
    <section className="w-full bg-white py-16 relative overflow-hidden">
      {/* ✅ Inline style for gradient & floating animations */}
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

        /* ✅ Floating Animation for Icons */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .float-slow { animation: float 4s ease-in-out infinite; }
        .float-medium { animation: float 5s ease-in-out infinite; }
        .float-fast { animation: float 6s ease-in-out infinite; }
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
        <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3">
          Trusted by Our{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Leading Clients
          </span>
        </h2>

        <p className="mt-2 mb-10 text-gray-700 text-sm sm:text-base md:text-lg">
          Our solutions empower businesses to achieve growth, efficiency, and
          excellence. We collaborate closely with clients to deliver measurable
          results and lasting impact.
        </p>

        {/* ✅ Icons container - responsive & animated */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 py-8 relative z-20">
          {/* Each icon - full width on mobile */}
          {[dropboxIcon, googleIcon, zeplinIcon, slackIcon, paypalIcon].map((icon, idx) => (
            <div
              key={idx}
              className="flex justify-center items-center w-full sm:w-auto"
            >
              <img
                src={icon}
                alt={`Client ${idx + 1}`}
                className={`w-24 sm:w-20 md:w-24 lg:w-32 h-auto ${
                  idx % 3 === 0
                    ? "float-slow"
                    : idx % 3 === 1
                    ? "float-medium"
                    : "float-fast"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
