import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logo from "../assets/logo/binarylogixlogo-remove.png";

export default function Footer() {
  const navigate = useNavigate();

  // Function to handle smooth scroll + navigation
  const handleNavClick = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => navigate(path), 200); // short delay for smoother effect
  };

  return (
    <footer className="bg-[#f4f6fb] pt-20 pb-8 relative border-t rounded-4xl overflow-hidden">
      {/* 🌊 Animated Wavy Top Decoration (Improved) */}
      <div className="absolute -top-10 left-0 w-full overflow-hidden  leading-[0]">
        <div className="relative w-full h-[160px] sm:h-[200px] bg-gradient-to-b from-[#e9eefc] to-[#f4f6fb] overflow-hidden">

          {/* Back wave (lighter) */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-crossWave3 opacity-40"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,40 C150,80 350,0 600,40 C850,80 1050,20 1200,50 L1200,0 L0,0 Z"
              fill="#b0bcde"
              opacity="0.5"
            />
          </svg>

          {/* Front wave (darker) */}
          <svg
            className="absolute bottom-0 left-0 w-[200%] h-full animate-crossWave1 opacity-85"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,60 C200,100 400,20 600,60 C800,100 1000,40 1200,70 L1200,0 L0,0 Z"
              fill="#ced3d9"
              opacity="0.7"
            />
          </svg>
        </div>

        {/* Soft white fade on top for smoother blend */}
        <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-white/90 to-transparent"></div>

        <style>{`
    @keyframes crossWave1 {
      0% { transform: translateX(0) translateY(0); opacity: 0.7;}
      25% {transform: translateX(-10%) translateY(10px); opacity: 0.75;}
      50% {transform: translateX(-30%) translateY(0); opacity: 0.79;}
      75% {transform: translateX(-10%) translateY(-10px); opacity: 0.73;}
      100% {transform: translateX(0) translateY(0); opacity: 0.7;}
    }
    @keyframes crossWave3 {
      0% { transform: translateX(0) translateY(-3px); opacity: 0.4;}
      50% {transform: translateX(-10%) translateY(7px); opacity: 0.5;}
      100% {transform: translateX(0) translateY(-3px); opacity: 0.4;}
    }
    .animate-crossWave1 {
      animation: crossWave1 12s cubic-bezier(0.52,0,0.48,1) infinite;
    }
    .animate-crossWave3 {
      animation: crossWave3 20s cubic-bezier(0.6,0,0.4,1) infinite;
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
            <p className="text-sm leading-relaxed mb-5 text-black">
              Empowering your Business with tailored, innovative Solutions
            </p>
            <div className="flex items-center gap-3">
              {[
                { Icon: Facebook, link: "https://www.facebook.com/share/1EyAb9RB8c/" },
                // { Icon: Twitter, link: "https://twitter.com/yourprofile" },
                { Icon: Linkedin, link: "https://www.linkedin.com/company/binarylogix-technologies/" },
                { Icon: Instagram, link: "https://www.instagram.com/binarylogix_technologies/" },
              ].map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#3487fa]/10 text-black hover:bg-[#3487fa] hover:text-white transition"
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
                { name: "Career", path: "/career" },
              ].map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleNavClick(link.path)}
                    className="hover:text-[#3487fa] transition-colors text-left"
                  >
                    {link.name}
                  </button>
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
          <span className="font-semibold text-[#3487fa]">BinaryLogix Technologies LLP</span>
        </div>
      </div>
    </footer>
  );
}
