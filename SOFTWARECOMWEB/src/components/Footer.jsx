import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../assets/logo/binarylogixlogo-remove.png";
export default function Footer() {
  return (
    <footer className="bg-[#f4f6fb] pt-20 pb-8 relative overflow-hidden">
      {/* Animated Wavy Top Decoration */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden leading-[0]">
        {/* Wave Container */}
        <div className="relative w-full h-[140px] sm:h-[180px] bg-gradient-to-b from-[#e9eefc] to-[#f4f6fb] overflow-hidden">
          {/* Wave 1 (light blue, moves left and a bit up/down) */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-crossWave1 opacity-85"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29C47.35,68.53,103.77,81.9,162,85 c86,4.74,172-14.4,258-18.36
                C516,62.92,602,75,688,87.12
                c96,13.51,192,27.52,288,13.9
                c66.56-9.51,133.11-30.35,200-38.43V0Z"
              fill="#ced3d9"
              opacity="0.7"
            />
          </svg>
          {/* Wave 2 (deep blue, moves right and a bit up/down, delayed) */}
          {/* <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-crossWave2 opacity-80"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V36.29C60,60,120,75,200,80 c85,5,170-15,255-20
                c90-5,180,10,270,25
                c85,15,170,30,255,15
                c80-13,160-50,220-70V0Z"
              fill="#1e3a8a"
              opacity="0.9"
            />
          </svg> */}
          {/* Wave 3 (soft, background, moves gently left) */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-crossWave3 opacity-40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V30.29C80,49,160,65,240,66
                c110,1,220-17,330-22
                c120-7,240,16,360,34
                c90,18,180,38,270,20
                c100-19,200-61,300-85V0Z"
              fill="#b0bcde"
              opacity="0.5"
            />
          </svg>
        </div>

        {/* Top gradient overlay for soft blend */}
        <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-white/90 to-transparent"></div>

        {/* Animations for Cross Flow */}
        <style>{`
          @keyframes crossWave1 {
            0% { transform: translateX(0) translateY(0); opacity: 0.7;}
            25% {transform: translateX(-10%) translateY(12px); opacity: 0.75;}
            50% {transform: translateX(-30%) translateY(0); opacity: 0.79;}
            75% {transform: translateX(-10%) translateY(-12px); opacity: 0.73;}
            100% {transform: translateX(0) translateY(0); opacity: 0.7;}
          }
          @keyframes crossWave2 {
            0% { transform: translateX(0) translateY(0); opacity: 0.8;}
            25% {transform: translateX(10%) translateY(-15px); opacity: 0.85;}
            50% {transform: translateX(30%) translateY(0); opacity: 0.91;}
            75% {transform: translateX(10%) translateY(15px); opacity: 0.82;}
            100% {transform: translateX(0) translateY(0); opacity: 0.8;}
          }
          @keyframes crossWave3 {
            0% { transform: translateX(0) translateY(-3px); opacity: 0.4;}
            50% {transform: translateX(-10%) translateY(7px); opacity: 0.5;}
            100% {transform: translateX(0) translateY(-3px); opacity: 0.4;}
          }
          .animate-crossWave1 {
            animation: crossWave1 11s cubic-bezier(0.52,0,0.48,1) infinite;
          }
          .animate-crossWave2 {
            animation: crossWave2 14s cubic-bezier(0.45,0,0.55,1) infinite;
            animation-delay: -3s;
          }
          .animate-crossWave3 {
            animation: crossWave3 19s cubic-bezier(0.6,0,0.4,1) infinite;
          }
        `}</style>
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto pt-10 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-gray-700">
          {/* Column 1 - Logo & Socials */}
          <div>
            <img
              src={logo}
              alt="BinaryLogix Logo"
              className="w-28 sm:w-32 h-auto mb-4"
            />
            <p className="text-sm leading-relaxed   mb-5 text-[#2334d1]">
              Empowering your Business with tailored, innovative Solutions
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-[#3487fa]/10 text-[#3487fa] hover:bg-[#3487fa] hover:text-white transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blogs", path: "/blogs" },
                { name: "Contact Us", path: "/contact" },
                { name: "Carriers", path: "/carrier" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-[#3487fa] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                <a href="mailto:binarylogixofficial@gmail.com">
                  binarylogixofficial@gmail.com
                </a>
              </li>
              <li>
                <span className="font-medium text-gray-800">Phone:</span> +91 9617189757
              </li>
              <li>
                <span className="font-medium text-gray-800">Address:</span>{" "}
                11-Himanshu Apartment, Indrapuri, Bhopal 462022
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-600">
          © 2025 BinaryLogix. All Rights Reserved. | Designed by{" "}
          <span className="font-semibold text-[#3487fa]">BinaryLogix</span>
        </div>
      </div>
    </footer>
  );
}