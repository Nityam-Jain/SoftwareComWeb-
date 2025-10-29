import React, { useEffect, useState } from "react";

// ✅ import your slide components instead of images
import Banner1 from "../../components/Herobanner1";
// import Banner2 from "../../components/Herobanner2";
// example: you can also import Servicescard etc if needed

const slides = [
  { Component: Banner1 },
  // { Component: Banner2 },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((c) => (c + 1) % slides.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section
      className="
        relative
        w-full
        h-[60vh] sm:h-[70vh] md:h-[85vh] lg:h-[100vh]
        min-h-[320px]
        flex
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background Components instead of images */}
      {slides.map(({ Component }, idx) => (
        <div
          key={idx}
          className={`
            absolute inset-0
            w-full h-full
            transition-opacity duration-1000
            ${current === idx ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        >
          <Component />
        </div>
      ))}

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-[#052250]/40" />

      {/* Dots */}
      <div
        className="
          absolute
          left-3 sm:left-6 lg:left-8
          bottom-5 sm:top-1/2 sm:-translate-y-1/2
          flex sm:flex-col gap-3
          z-30
        "
      >
        {slides.map((_, i) => (
          <span
            key={i}
            className={`
              block
              w-2.5 h-2.5 
              sm:w-3.5 sm:h-3.5 
              lg:w-4 lg:h-4                      
              rounded-full border-2
              transition
              ${current === i
                ? "border-white bg-blue-500"
                : "border-white/40 bg-white/20"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}
