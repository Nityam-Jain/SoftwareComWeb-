import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../assets/logo/binarylogixlogo-remove.png";

export default function Footer() {
  return (
    <footer className="bg-[#f4f6fb] pt-20 pb-8 relative overflow-hidden">
      {/* 🔹 Animated Wavy Top Decoration (Main) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        {/* Duplicate Layer 1 (Slightly Above) */}
        <div className="absolute top-[20px] left-0 w-full h-[100px] sm:h-[120px] opacity-80">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[120px] animate-waveMotionSlow"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29C47.35,68.53,103.77,81.9,162,85c86,4.74,172-14.4,258-18.36
              C516,62.92,602,75,688,87.12c96,13.51,192,27.52,288,13.9c66.56-9.51,133.11-30.35,200-38.43V0Z"
              fill="#ffffff"
              opacity="0.9"
            ></path>
          </svg>
        </div>

        {/* Main Wave Layer */}
        <div className="relative w-full h-[100px] sm:h-[120px] bg-gradient-to-b from-[#e9eefc] to-[#f4f6fb]">
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-[120px] animate-waveMotion"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29C47.35,68.53,103.77,81.9,162,85c86,4.74,172-14.4,258-18.36
              C516,62.92,602,75,688,87.12c96,13.51,192,27.52,288,13.9c66.56-9.51,133.11-30.35,200-38.43V0Z"
              fill="#ffffff"
              opacity="0.95"
            ></path>
            <path
              d="M0,0V30c60,20,120,35,200,40,85,5,170-15,255-20,90-5,180,10,270,25,85,15,170,30,255,15,80-13,160-50,220-70V0Z"
              fill="#ffffff"
              opacity="0.6"
            ></path>
          </svg>
        </div>

        {/* Subtle gradient overlay to reduce white gap */}
        <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-white/90 to-transparent"></div>

        <style>{`
          @keyframes waveMotion {
            0% { transform: translateX(0); }
            50% { transform: translateX(-25%); }
            100% { transform: translateX(0); }
          }
          @keyframes waveMotionSlow {
            0% { transform: translateX(0); }
            50% { transform: translateX(-15%); }
            100% { transform: translateX(0); }
          }
          .animate-waveMotion {
            animation: waveMotion 10s ease-in-out infinite;
          }
          .animate-waveMotionSlow {
            animation: waveMotionSlow 16s ease-in-out infinite;
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
            <p className="text-sm leading-relaxed text-gray-600 mb-5">
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
                { name: "Our Team", path: "/team" },
                { name: "Our Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
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
                info@binarylogix.com
              </li>
              <li>
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                +91 99999 99999
              </li>
              <li>
                <span className="font-medium text-gray-800">Address:</span>{" "}
                Surat, Gujarat, India
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
