import React, { useEffect, useState } from "react";
import icon1 from "../../assets/vardhanicon_img.png";
import icon2 from "../../assets/howtocleanicon_img.png";
import icon3 from "../../assets/pachamariicon_img.png";
import icon4 from "../../assets/jjinticon.png";
import icon5 from "../../assets/mohanicon_img.png";
import icon6 from "../../assets/SSVMicon.jpeg";

const testimonialsData = [
  {
    img: icon1,
    text: "BinaryLogix consistently delivers quality work with great communication, strong technical skills, and on-time project completion.",
    name: "OSHIN JAIN.",
    role: "Owner, Vardhan Interiors",
  },
  {
    img: icon2,
    text: "Outstanding service by BinaryLogix — efficient, knowledgeable, and always delivering projects on time with top quality.",
    name: "Vedant Bhardwaj",
    role: "Owner, How to Clean",
  },
  {
    img: icon3,
    text: "Great experience with BinaryLogix. They deliver innovative solutions, on time and with complete professionalism.",
    name: "Aadarsh.",
    role: "Owner, Pachmarhi Ayurveda",
  },
  {
    img: icon4,
    text: "Highly satisfied with BinaryLogix’s service. They are professional, skilled, and consistently exceed expectations on every project.",
    name: "Jayant Ahirwar.",
    role: "Owner, JJ International Group ",
  },
  {
    img: icon5,
    text: "BinaryLogix delivers excellent service with strong expertise, timely delivery, and great communication. Highly recommended for any tech needs.",
    name: "Dr. Parul Agrawal",
    role: "Owner, Sharda Mohan Homoeopathic Clinic ",
  },
  {
    img: icon6,
    text: "Working with Binarylogix was seamless! Their innovative approach and dedication to our project delivered incredible results. A perfect partner for scaling businesses online",
    name: "Narendra Singh Dangi.",
    role: "Principle, SSVM ",
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
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-30 flex flex-col md:flex-row items-stretch justify-between relative overflow-hidden">
      {/* Left section */}
      <div className="flex-1 flex flex-col justify-center z-10 space-y-6">
        <span className="inline-flex w-fit text-xs px-1 py-1 rounded bg-blue-50 text-blue-600">
          Testimonials
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
          Loved by{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Clients
          </span>
        </h2>

        <p className="text-gray-600 text-sm sm:text-base md:text-base max-w-full sm:max-w-md">
          Binarylogix has empowered businesses globally with cutting-edge software solutions, cloud services, and IT consulting trusted by enterprise-level companies.
        </p>

        {/* Stats / Achievements */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center mt-4">
          <div className="flex items-center gap-3">
            {/* <div className="bg-blue-50 p-2 rounded-full">
              <img src={icon1} className="w-6 h-6" />
            </div> */}
            <div>
              <span className="text-2xl font-bold text-gray-900">120+</span>
              <p className="text-gray-500 text-sm">Projects Completed</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* <div className="bg-green-50 p-2 rounded-full">
              <img src={icon2} className="w-6 h-6" />
            </div> */}
            <div>
              <span className="text-2xl font-bold text-gray-900">150+</span>
              <p className="text-gray-500 text-sm">Happy Clients</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* <div className="bg-purple-50 p-2 rounded-full">
              <img src={icon3} className="w-6 h-6" />
            </div> */}
            <div>
              <span className="text-2xl font-bold text-gray-900">10+</span>
              <p className="text-gray-500 text-sm">Years in Business</p>
            </div>
          </div>
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
    