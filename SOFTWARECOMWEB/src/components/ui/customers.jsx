import React from "react";
import icon1 from "../../assets/vardhanicon_img.png";
import icon2 from "../../assets/howtocleanicon_img.png";
import icon3 from "../../assets/pachamariicon_img.png";
import icon4 from "../../assets/jjinticon.png";
import icon5 from "../../assets/mohanicon_img.png";
import icon6 from "../../assets/SSVMicon.jpeg";
import Icon1 from "../../assets/projectcompleted.png";
import Icon2 from "../../assets/projectdeilivered.png";
import Icon3 from "../../assets/happyclientsnew.png";




const testimonials = [
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

// Duplicate last 3 testimonials for seamless loop
const displayTestimonials = [...testimonials.slice(-3), ...testimonials.slice(-3)];

export default function TestimonialsSection() {
  return (
    <section className="text-black py-20 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center z-10 space-y-6 items-start min-w-[300px]">
          <span className="inline-flex w-fit text-xs px-2 py-1 rounded bg-blue-50 text-blue-600">
            Testimonials
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Loved by{" "}
            <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
              Clients
            </span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-full sm:max-w-md">
            Binarylogix has empowered businesses globally with cutting-edge
            software solutions, cloud services, and IT consulting trusted by
            enterprise-level companies.
          </p>

          {/* Stats / Achievements */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center mt-4">
            {[
              { icon: Icon1, label: "Projects Completed", count: "120+" },
              { icon: Icon2, label: "Happy Clients", count: "150+" },
              { icon: Icon3, label: "Years in Business", count: "10+" },
            ].map(({ icon, label, count }, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <img src={icon} alt={label} className="w-14 h-14 sm:w-16 sm:h-16" />
                <div>
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">
                    {count}
                  </span>
                  <p className="text-gray-500 text-sm">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT - infinite vertical scroll */}
        <div className="flex-1 w-full max-w-[500px] relative">
          <div className="testimonial-container h-[480px] sm:h-[480px] overflow-hidden relative">
            <div className="animate-scrollUp flex flex-col gap-6">
              {displayTestimonials.map((t, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row items-center bg-white rounded-2xl shadow-lg px-6 py-5 bg-gradient-to-br from-white/90 to-gray-100/70 text-gray-800 text-left backdrop-blur-lg border border-gray-200/50 w-full"
                >
                  {/* Avatar/Logo */}
                  <div className="flex-shrink-0   flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 relative">
                    <img
                      src={t.img}
                      alt={`${t.name} logo`}
                      className="w-12 sm:w-18 h-auto object-cover animate-float"
                    />
                    <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full -z-10 animate-pulse-slow"></div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="flex-1 flex flex-col gap-2 items-start">
                    <div className="flex gap-1 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="16"
                          height="16"
                          fill="#FFC700"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path d="M8 12.472l-4.326 2.362.828-4.832L.659 6.581l4.862-.707L8 1.273l2.479 4.601 4.862.707-3.843 3.421.828 4.832z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-900 font-medium leading-snug text-sm sm:text-base mb-1">
                      “{t.text}”
                    </p>
                    <div className="text-xs sm:text-sm text-gray-700 font-semibold flex flex-wrap items-center">
                      {t.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Animations */}
          <style>{`
            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-6px); }
            }
            .animate-float {
              animation: float 3s ease-in-out infinite;
            }

            @keyframes pulse-slow {
              0%, 100% { opacity: 0.6; transform: scale(1); }
              50% { opacity: 0.9; transform: scale(1.2); }
            }
            .animate-pulse-slow {
              animation: pulse-slow 5s ease-in-out infinite;
            }

            /* 🔹 Infinite Scroll Animation */
            @keyframes scrollUp {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            .animate-scrollUp {
              animation: scrollUp 15s linear infinite;
            }

            /* 🔹 Responsive Adjustments */
            @media (max-width: 768px) {
              .testimonial-container {
                height: 360px; /* Only 3 visible cards on mobile */
              }
              .animate-scrollUp {
                animation: scrollUp 12s linear infinite;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}