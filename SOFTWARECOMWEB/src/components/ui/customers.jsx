import React, { useEffect, useState } from "react";
import icon1 from "../../assets/customerimg.png";
import icon2 from "../../assets/customerimg2.png";
import icon3 from "../../assets/customerimg3.png";
import icon4 from "../../assets/digimark.png";

const testimonialsData = [
  {
    img: icon1,
    text: "BinaryLogix consistently delivers quality work with great communication, strong technical skills, and on-time project completion."

,
    name: "OSHIN JAIN.",
    role: "Owner, Vardhan Interiors",
  },
  {
    img: icon2,
    text: "Outstanding service by BinaryLogix — efficient, knowledgeable, and always delivering projects on time with top quality.",
    name: "FODEN P.",
    role: "Director, Ecoland Resort",
  },
  {
    img: icon3,
    text: "Great experience with BinaryLogix. They deliver innovative solutions, on time and with complete professionalism.",
    name: "KERRY T.",
    role: "Lead Developer, Teckzone Inc",
  },
  {
    img: icon4,
    text: "Highly satisfied with BinaryLogix’s service. They are professional, skilled, and consistently exceed expectations on every project.",
    name: "Jayant Ahirwar.",
    role: "Owner, JJ International Group ",
  }, 
];

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [];
  for (let i = 0; i < 3; i++) {
    visibleTestimonials.push(testimonialsData[(startIndex + i) % testimonialsData.length]);
  }

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-20 flex flex-col md:flex-row items-stretch justify-between relative overflow-hidden">
      {/* Left section */}
      <div className="flex-1 flex flex-col justify-center z-10">
        <span className="inline-block text-xs px-3 py-1 rounded bg-blue-50 text-blue-600 mb-4 sm:mb-6">
          Testimonials
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
          Loved by{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            IT Clients
          </span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-full sm:max-w-md mb-8 sm:mb-12">
          Binarylogix has empowered businesses globally with cutting-edge software solutions, cloud services, and IT consulting trusted by enterprise-level companies.
        </p>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-center mb-10">
          {/* <div className="flex flex-col items-start sm:items-center border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 pr-0 sm:pr-12">
            <img src={icon1} alt="" className="w-6 h-6 mb-1" />
            <span className="text-2xl sm:text-3xl font-semibold text-gray-900">2,5M+</span>
            <span className="text-gray-500 text-xs">Downloads & Installations</span>
          </div> */}
          {/* <div className="flex flex-col items-start sm:items-center pt-4 sm:pt-0 pl-0 sm:pl-12">
            <img src={icon2} alt="" className="w-6 h-6 mb-1" />
            <span className="text-2xl sm:text-3xl font-semibold text-gray-900">4.8/5</span>
            <span className="text-yellow-400 flex items-center font-medium text-sm mb-0.5">
              {Array(5).fill(0).map((_, i) => (<span key={i}>★</span>))}
            </span>
            <span className="text-gray-500 text-xs">Based on 1,258 reviews</span>
          </div> */}
        </div>
      </div>

      {/* Right section */}
      <div className="flex-1 flex flex-col justify-center items-center space-y-6 sm:space-y-7 mt-10 md:mt-0 relative z-10 w-full">
        {visibleTestimonials.map((item, idx) => (
          <div
            key={item.name + idx}
            className={`
              bg-white rounded-2xl shadow-lg px-5 sm:px-7 py-5 sm:py-6 w-full max-w-md
              flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5
              transition-all duration-700 ease-in-out
              animate-float
              ${idx === 0 ? 'translate-y-0 z-20' : idx === 1 ? 'translate-y-4 z-10' : 'translate-y-8 z-0 opacity-60 scale-95'}
            `}
            style={{
              animationDelay: `${idx * 0.2}s`,
            }}
          >
            <img src={item.img} alt={item.name} className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center mb-1">
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-base sm:text-lg">★</span>
                ))}
              </div>
              <blockquote className="text-gray-700 text-sm sm:text-base font-medium leading-relaxed mb-2">
                “{item.text}”
              </blockquote>
              <div className="font-semibold text-purple-600 text-xs sm:text-sm">{item.name}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{item.role}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Animate float keyframes */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); box-shadow: 0 10px 32px 0 rgba(80,74,139,0.09);}
            50% { transform: translateY(-14px); box-shadow: 0 20px 50px 0 rgba(80,74,139,0.15);}
          }
          .animate-float {
            animation-name: float;
            animation-duration: 3s;
            animation-iteration-count: infinite;
          }
        `}
      </style>
    </section>
  );
}
