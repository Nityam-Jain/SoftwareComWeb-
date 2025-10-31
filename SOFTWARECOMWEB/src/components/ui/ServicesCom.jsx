import React, { useRef, useEffect, useState } from "react";

import seoImg from "../../assets/seonew.png";
import adsImg from "../../assets/adsnew.png";
import emailImg from "../../assets/emailmarnew.png";
import socialImg from "../../assets/sicialmedianew2.png";
import webdevImg from "../../assets/webdevnew.png";
import appImg from "../../assets/mobilenew.png";

const Services = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    { title: "SEO Strategy", desc: "Boost visibility and rank higher with smart SEO tactics.", img: seoImg },
    { title: "Google/FB Ads", desc: "Drive instant traffic and conversions with targeted ads.", img: adsImg },
    { title: "Email Marketing", desc: "Engage users and grow loyalty with personalized emails.", img: emailImg },
    { title: "Social Media Marketing", desc: "Build your brand and grow faster on every platform.", img: socialImg },
    { title: "Website Design & Development", desc: "Create stunning, responsive websites.", img: webdevImg },
    { title: "App Development", desc: "Develop sleek and scalable mobile applications.", img: appImg },
  ];

  // Helper for responsive breakpoint
  const getCardWidth = () => {
    if (!scrollRef.current || !scrollRef.current.children[0]) return 0;
    const w = scrollRef.current.children[0].offsetWidth;
    return w;
  };

  // Scroll to the selected index
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth();
      // Centering logic for mobile vs desktop
      const isMobile = window.innerWidth < 640; // sm
      const left = isMobile
        ? index * cardWidth
        : index * (cardWidth + 24) - window.innerWidth / 2 + cardWidth / 2;
      scrollRef.current.scrollTo({
        left,
        behavior: "smooth",
      });
    }
  };

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [services.length, isPaused]);

  // Scroll when index changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  // Responsive adjustment on resize
  useEffect(() => {
    const handleResize = () => scrollToIndex(currentIndex);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentIndex]);

  return (
    <section className="relative py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-[#f9fbff] to-[#eef3ff] overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-sm sm:text-base text-blue-600 font-semibold tracking-wide bg-blue-50 px-4 py-1.5 rounded-full">
          Services
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 text-gray-900 leading-tight">
          Our Top{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/80 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm sm:text-base">
          Binarylogix seamlessly connects with your favorite tools for effortless collaboration.
        </p>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-scroll scroll-smooth px-2 sm:px-8 md:px-10 py-8 justify-center hide-scrollbar"
          style={{
            scrollSnapType: 'x mandatory'
          }}
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 flex flex-col items-center text-center transition-all duration-500 bg-white shadow-md border border-transparent relative
                  ${i === currentIndex
                    ? "scale-100 shadow-xl border-blue-200 bg-gradient-to-b from-white to-blue-50"
                    : "sm:scale-95 sm:opacity-85"}
                  hover:sm:scale-105 hover:sm:shadow-xl hover:sm:border-blue-200
                  w-[90vw] min-w-[90vw] max-w-[90vw] sm:w-auto sm:min-w-[250px] md:min-w-[270px] lg:min-w-[300px]`}
              style={{
                scrollSnapAlign: 'center'
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-100/40 to-transparent opacity-0 hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-20 h-20 mb-4 object-contain drop-shadow-md transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-lg sm:text-xl">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xs">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle decorative gradient blur */}
      <div className="absolute left-0 top-0 w-[200px] h-[200px] bg-blue-200/20 blur-3xl rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-[250px] h-[250px] bg-blue-300/20 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Services;