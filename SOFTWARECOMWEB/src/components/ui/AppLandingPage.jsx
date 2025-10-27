import React, { useEffect, useState } from "react";
import firstPageBg from "../../assets/Banner01.png";
import secondPageBg from "../../assets/Banner02.png";

const slides = [
  { bg: firstPageBg },
  { bg: secondPageBg },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, idx) => (
        <img
          key={idx}
          src={slide.bg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover duration-1000 transition-opacity ${
            current === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          draggable={false}
        />
      ))}

      {/* Optional Overlay (remove if not needed) */}
      <div className="absolute inset-0 bg-[#052250]/40" />

      {/* Slide indicators (dots) */}
      <div className="absolute left-4 sm:left-7 bottom-8 sm:top-1/2 sm:-translate-y-1/2 flex sm:flex-col gap-3 z-30">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`block w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${
              current === i
                ? "border-white bg-blue-500"
                : "border-white/40 bg-white/20"
            } transition`}
          />
        ))}
      </div>
    </section>
  );
}
