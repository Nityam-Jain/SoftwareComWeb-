import React, { useEffect, useState } from "react";
import firstPageBg from "../../assets/project1.jpg";
import secondPageBg from "../../assets/Bannerimg2.png";
import thirdPageBg from "../../assets/Bannerimg3.png";
import fourthPageBg from "../../assets/bannerimg4.png";

import avatar1 from "../../assets/ruchiicon.jpeg";
import avatar2 from "../../assets/jjinticon.png";
import avatar3 from "../../assets/shardamoicon.jpeg";
import avatar4 from "../../assets/vardhanicon.jpeg";

const slides = [
  {
    bg: firstPageBg,
    tagline: "Best IT Solution Provider",
    heading: "Excellent IT Services for Your Success",
    caption:
      "Delivering excellent IT services tailored to your needs, ensuring seamless operations, enhanced productivity, and ultimate business success.",
    button: "View Services",
    clients: [avatar1, avatar2, avatar3, avatar4],
    clientLabel: "Satisfied Clients",
  },
  {
    bg: secondPageBg,
    tagline: "End-to-End IT Services",
    heading: "Transform Your Ideas Into Digital Reality",
    caption:
      "From software development to cloud deployment — we help businesses turn their vision into cutting-edge digital experiences.",
    button: "View Services",
    clients: [avatar1, avatar2, avatar3, avatar4],
    clientLabel: "Trusted by Companies",
  },
  {
    bg: thirdPageBg,
    tagline: "Creative Technology Experts",
    heading: "Building Smart, Scalable & Secure Solutions",
    caption:
      "Our expert team delivers tailor-made solutions designed to scale effortlessly and drive your business towards long-term growth.",
    button: "Get Started",
    clients: [avatar1, avatar2, avatar3, avatar4],
    clientLabel: "Worldwide Partners",
  },
  {
    bg: fourthPageBg,
    tagline: "Your IT Growth Partner",
    heading: "Innovate. Transform. Succeed.",
    caption:
      "We combine innovation and technology to empower businesses, helping them thrive in the era of digital transformation.",
    button: "Contact Us",
    clients: [avatar1, avatar2, avatar3, avatar4],
    clientLabel: "Satisfied Clients",
  },
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

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-[#052250]/70" />

      {/* Main content */}
      <div className="relative z-20 w-full max-w-5xl px-4 py-10 md:px-8 md:py-16 lg:py-20">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute top-0 left-0 right-0 w-full transition-all duration-800 ${
              current === idx
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
              <span className="flex items-center justify-center sm:justify-start gap-2 mb-4 sm:mb-5 text-white/80 font-semibold tracking-widest text-xs sm:text-sm uppercase">
                <span className="block w-6 sm:w-8 h-1.5 sm:h-2 rounded-full bg-blue-400" />
                {slide.tagline}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight text-white mb-4 sm:mb-5 drop-shadow-xl">
                {slide.heading}
              </h1>

              <p className="text-white/85 font-light text-sm sm:text-base md:text-lg max-w-xl sm:max-w-2xl mb-6 sm:mb-8 mx-auto sm:mx-0">
                {slide.caption}
              </p>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                <button className="bg-blue-600 hover:bg-blue-700 font-bold text-white text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 rounded-md shadow-lg transition flex items-center gap-2">
                  {slide.button}
                  <span className="ml-1">→</span>
                </button>

                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-2 sm:ml-2">
                  {/* Client avatars */}
                  <div className="flex -space-x-3 sm:-space-x-4">
                    {slide.clients.map((imgsrc, i) => (
                      <img
                        src={imgsrc}
                        key={i}
                        alt={`Client ${i + 1}`}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 border-2 border-white rounded-full object-cover bg-white shadow-md"
                      />
                    ))}
                  </div>
                  <span className="text-white text-sm sm:text-base font-medium">
                    {slide.clientLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

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
