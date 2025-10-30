import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroPerson from "../assets/bannerimg001.png";
import rocket3 from "../assets/bannerimg002.png";
import rocket2 from "../assets/bannerimg002.png";
import mailIcon from "../assets/messageiconnew.png";
import heartIcon from "../assets/Likeiconnew.png";
import starsIcon from "../assets/Staricon.png";
import bgHero from "../assets/designedbackground.png";

const words = ["Web Development", "App Development", "Digital Marketing"];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const speed = deleting ? 80 : 120;
    const timer = setTimeout(() => {
      setDisplayed((prev) =>
        deleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!deleting && displayed === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayed === "") {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, deleting, index]);

  return (
    <section
      className="relative w-full   overflow-hidden flex items-center justify-center py-10 md:py-16 px-4 sm:px-8 lg:px-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHero})` }}
    >
      {/* floating icons */}
      <img
        src={starsIcon}
        className="absolute top-2 md:top-8 left-6 sm:left-12 md:left-20 w-6 sm:w-10 lg:w-16 animate-pulse"
        alt=""
      />
      <img
        src={rocket3}
        className="absolute bottom-10 right-6 sm:right-10 md:right-16 w-10 sm:w-14 md:w-40 drop-shadow-[0_50px_40px_rgba(0,0,0,0.55)] animate-float-slow"
        alt=""
      />

      {/* main layout */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10 xl:px-8  ">
        {/* LEFT TEXT SECTION */}
        <div className="w-full md:w-1/2 text-left md:text-left space-y-4 md:space-y-6 lg:space-y-8 px-2 sm:px-0">
          <h1 className="text-2xl sm:text-4xl md:text-4xl xl:text-6xl font-bold leading-snug md:leading-tight">
            We Build & Scale
            <span> Your Business With <br /></span>
            <span
              className="text-[#3488fa] relative inline-flex items-center whitespace-nowrap transition-all duration-300 ease-in-out"
              style={{ opacity: deleting ? 0.8 : 1 }}
            >
              {displayed}
              <img
                src={rocket2}
                alt="Rocket Cursor"
                className="w-8 sm:w-10 md:w-12 lg:w-26 ml-2 inline-block rotate-45 align-middle transition-transform duration-300 ease-in-out drop-shadow-[0_50px_40px_rgba(0,0,0,0.55)]"
                style={{
                  transform: deleting
                    ? "translateY(-3px) scale(0.9)"
                    : "translateY(0px) scale(1)",
                }}
              />
            </span>
          </h1>

          <p className="text-gray-600   max-w-md mx-auto md:mx-0">
            We help businesses grow online with creative digital marketing &
            modern web solutions.
          </p>

         <Link
  to="/Services"
  className="group relative inline-flex items-center justify-center overflow-hidden mt-6 sm:mt-10 md:mt-12 px-6 sm:px-8 py-3 rounded-xl font-semibold text-white transition-all duration-500 bg-gradient-to-r from-[#2a6ff8] via-[#3488fa] to-[#4ba8ff] shadow-lg shadow-blue-400/30 hover:shadow-blue-500/50 hover:scale-105"
>
  <span className="relative z-10">View Services</span>

  {/* ✨ Shine Effect */}
  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></span>

  {/* 💫 Glow Border */}
  <span className="absolute inset-0 border border-white/20 rounded-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500"></span>
</Link>

        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-6 md:mt-0">
          <img
            src={heroPerson}
            alt="hero"
            className="w-[220px] sm:w-[320px] md:w-[450px] lg:w-[650px] relative z-10 drop-shadow-[0_50px_40px_rgba(0,0,0,0.55)]"
          />
          <img
            src={mailIcon}
            className="absolute top-4 sm:top-8 right-6 sm:right-12 w-8 sm:w-12 md:w-26 animate-float-slow"
            alt=""
          />
          <img
            src={heartIcon}
            className="absolute bottom-10 sm:bottom-10 left-10 sm:left-70 w-8 sm:w-10 md:w-40 animate-float-medium z-30"
            alt=""
          />
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float-slow {
          animation: float-slow 4.5s ease-in-out infinite;
        }

        @keyframes float-medium {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-float-medium {
          animation: float-medium 3.2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;