import React from "react";

// ✅ Replace filenames with real assets later
import stars from "../assets/1.jpg";
import rocket from "../assets/4.jpg";
import team1 from "../assets/9.jpg";
import team2 from "../assets/11.jpg";
import profileStrip from "../assets/about_icon.png";

const ExperienceBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-16 px-6 lg:px-20">
      {/* Floating Icons */}
      <img src={stars} className="absolute top-6 left-6 w-10 animate-pulse" alt="" />
      <img src={rocket} className="absolute top-10 right-1/3 w-14 animate-bounce" alt="" />

      <div className="flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* ---- LEFT TEXT ---- */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            We are <br /> experienced <br /> and creative
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-500 mt-2">
            Web Developer|
          </h2>

          <p className="text-gray-600 mt-5 max-w-md mx-auto lg:mx-0">
            Transform your online presence and climb search engine rankings with
            our cutting-edge SEO strategies.
          </p>
        </div>

        {/* ---- RIGHT GRID ---- */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-6">
          {/* Top Left Image */}
          <img
            src={team1}
            alt=""
            className="rounded-2xl w-full h-64 object-cover"
          />

          {/* Stats Card */}
          <div className="flex items-center justify-center rounded-2xl bg-black text-white text-center">
            <div>
              <h3 className="text-4xl font-extrabold">30+</h3>
              <p className="text-sm font-medium">Active Clients</p>
            </div>
          </div>

          {/* Bottom Left People Strip */}
          <img
            src={profileStrip}
            alt=""
            className="rounded-2xl w-full h-20 object-cover"
          />

          {/* Bottom Right Image */}
          <img
            src={team2}
            alt=""
            className="rounded-2xl w-full h-64 object-cover"
          />
        </div>
      </div>

      <style jsx>{`
        .animate-bounce {
          animation: bounce 3s infinite;
        }
        @keyframes bounce {
          0%,100%{ transform:translateY(0) }
          50%{ transform:translateY(-10px) }
        }
      `}</style>
    </section>
  );
};

export default ExperienceBanner;
