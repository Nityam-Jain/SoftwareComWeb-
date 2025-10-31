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
import projectBg2 from "../assets/ServiceBanner.jpg";

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
    <div>
      <section
        className="relative w-full h-[60vh] flex flex-col items-center justify-center text-center bg-fixed md:bg-cover bg-center mb-10 text-white bg-black/40 bg-blend-overlay bg-[length:auto_100%] sm:bg-cover"
        style={{
          backgroundImage: `url(${projectBg2})`,
        }}
      >

        <div className="px-6 md:px-16 max-w-3xl">
          <span className="inline-block bg-white/20 text-blue-200 px-4 py-1 rounded-full text-xs uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Services
            </span>
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-100">
            We deliver expert solutions in web development, digital marketing, and UI/UX design to help businesses grow online.
          </p>


          {/* <button className="mt-6 px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold rounded-full shadow-lg transition-all duration-300">
            Learn More
          </button> */}
        </div>
      </section>
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
    </div>
  );
};

export default ServicesGrid;
