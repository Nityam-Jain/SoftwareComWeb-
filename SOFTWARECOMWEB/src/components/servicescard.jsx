import React from "react";

import seoImg from "../assets/seonew.png";
import adsImg from "../assets/adsnew.png";
import emailImg from "../assets/emailmarnew.png";
import socialImg from "../assets/sicialmedianew2.png";
import webdevImg from "../assets/webdevnew.png";
import appImg from "../assets/mobilenew.png";
import uiuxImg from "../assets/uiuxnew1.png";
import wordpress from "../assets/wordpressnew.png";
import gd from "../assets/graphicdesignicon.png";

// You can change this padding easily
const PL_CONTROL = "px-4 sm:px-6 md:px-16 lg:px-30";

const ServicesGrid = () => {
  const services = [
    { title: "SEO Strategy", desc: "Boost visibility and rank higher with smart SEO tactics.", img: seoImg },
    { title: "Google/FB Ads", desc: "Drive instant traffic and conversions with targeted ads.", img: adsImg },
    { title: "Email Marketing", desc: "Engage users and grow loyalty with personalized emails.", img: emailImg },
    { title: "Social Media Marketing", desc: "Build your brand and grow faster on every platform.", img: socialImg },
    { title: "Website Design & Development", desc: "Create stunning, responsive websites.", img: webdevImg },
    { title: "App Development", desc: "Develop sleek and scalable mobile applications.", img: appImg },
    // NEW ADDED
    { title: "UI/UX Design", desc: "Design seamless interfaces with user-centered approach.", img: uiuxImg },
    { title: "Graphic Designing", desc: "Creative visuals for brand identity and promotions.", img: gd },
    { title: "WordPress Development", desc: "Custom and fast WordPress business solutions.", img: wordpress },
  ];

  return (
    <section className={`py-10 bg-white ${PL_CONTROL}`}>
      <style>{`
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

      {/* ===== Header ===== */}
      <div className="text-center mb-10 px-2 sm:px-0">
        <span className="text-sm text-blue-600 font-semibold tracking-wide bg-purple-50 px-3 py-1 rounded-full">
          Services
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4">
          Our Top{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          Binarylogix seamlessly connects with your favorite tools for effortless collaboration.
        </p>
      </div>

      {/* ===== Grid Cards ===== */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#f8faff] hover:bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all duration-500 animate-[floatCard_4s_ease-in-out_infinite] hover:scale-[1.03]"
          >
            <img
              src={service.img}
              alt={service.title}
              className={`mx-auto mb-4 object-contain
            ${service.title === "Graphic Designing"
                  ? "w-20 h-28 sm:w-29 sm:h-32"
                  : "w-16 h-16 sm:w-20 sm:h-20"
                }
  `}
            />

            <h3 className="font-semibold text-gray-800 mb-2 text-lg sm:text-xl">{service.title}</h3>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
