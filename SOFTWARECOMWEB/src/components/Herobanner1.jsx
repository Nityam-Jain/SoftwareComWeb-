import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroPerson from "../assets/bannerimg001.png";
import rocket3 from "../assets/bannerimg002.png";
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
    const speed = deleting ? 60 : 100;

    const timer = setTimeout(() => {
      setDisplayed(prev =>
        deleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!deleting && displayed === currentWord) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && displayed === "") {
        setDeleting(false);
        setIndex(prev => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, deleting, index]);

  return (
    <section
      className="relative w-full min-h-screen overflow-hidden flex items-center py-10 md:py-15 px-6 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgHero})` }}
    >

      <img src={starsIcon} className="absolute top-6 -left-3 w-8 md:w-16 animate-pulse" alt="" />
      <img src={rocket3} className="absolute bottom-15 right-5 md:right-10 w-12 md:w-39 drop-shadow-[0_50px_40px_rgba(0,0,0,0.55)] animate-float-slow" alt="" />

      {/* ✅ TABLET FIX HERE */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10">

        {/* LEFT TEXT */}
        <div className="w-full md:w-1/2 px-7 text-center md:text-left md:-mt-10 lg:-mt-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            We Build & Scale
            <span> Your Business With <br /></span>
            <span className="text-[#3488fa]">{displayed}</span>
            <span className="w-[2px] h-7 bg-blue-600 inline-block animate-pulse ml-1" />
          </h1>

          <p className="text-gray-600 mt-4 max-w-md mx-auto md:mx-0">
            We help businesses grow online with creative digital marketing & modern web solutions.
          </p>

          {/* ✅ LINK INSTEAD OF navigate */}
          <Link
            to="/Services"
            className="inline-block mt-6 bg-[#3488fa] text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            View Services
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <img
            src={heroPerson}
            alt="hero"
            className="w-[260px] md:w-[450px] lg:w-[750px] relative z-10 drop-shadow-[0_50px_40px_rgba(0,0,0,0.55)]"
          />
          <img src={mailIcon} className="absolute top-5 right-4 w-10 md:w-25 animate-float-slow" alt="" />
          <img src={heartIcon} className="absolute bottom-16 left-84 w-10 md:w-38 animate-float-medium z-30" alt="" />
        </div>

      </div>
       <style jsx>{`
        /* === Floating Organic Circles === */
        @keyframes float-circle-1 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.6; }
          50% { transform: translate(-20px, -30px) scale(1.15); opacity:0.9; }
        }
        @keyframes float-circle-2 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.5; }
          50% { transform: translate(25px, -10px) scale(1.3); opacity:0.8; }
        }
        @keyframes float-circle-3 {
          0%,100% { transform: translate(0,0) scale(1); opacity:0.5; }
          50% { transform: translate(-15px, 25px) scale(0.9); opacity:0.7; }
        }

        .circle-1 {
          width:140px; height:140px;
          background:radial-gradient(circle,#3487fa,#003e96);
          filter:blur(40px);
          animation: float-circle-1 9s ease-in-out infinite;
          border-radius:50%;
        }
        .circle-2 {
          width:110px; height:110px;
          background:radial-gradient(circle,#8a2be2,#4f0092);
          filter:blur(35px);
          animation: float-circle-2 11s ease-in-out infinite;
          border-radius:50%;
        }
        .circle-3 {
          width:90px; height:90px;
          background:radial-gradient(circle,#ff4d4d,#c40000);
          filter:blur(30px);
          animation: float-circle-3 10s ease-in-out infinite;
          border-radius:50%;
        }

        /* === Animated Blue Vertical Lines === */
        @keyframes blueLineMove {
          0% {
            transform: translateY(0%);
            opacity: 0.7;
          }
          40% {
            opacity: 1;
          }
          75% {
            transform: translateY(-40%);
          }
          100% {
            transform: translateY(-100%);
            opacity: 0.3;
          }
        }
        .animate-blueLineMove {
          animation: blueLineMove 3.8s cubic-bezier(0.7,0,0.3,1) infinite;
        }

        /* Optional: If you have float/bounce animations for mail/heart icons */
        @keyframes float-slow {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 4.5s ease-in-out infinite;
        }

        @keyframes float-medium {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        .animate-float-medium {
          animation: float-medium 3.2s ease-in-out infinite;
        }

      `}</style>

    </section>
  );
};

export default HeroBanner;
