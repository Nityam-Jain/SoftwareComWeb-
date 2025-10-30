import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/binarylogixlogo-remove.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [transitionActive, setTransitionActive] = useState(false);
  const [targetPath, setTargetPath] = useState("/");
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // Handle menu click with shutter effect + scroll to top
  const handleNavClick = (path) => {
    if (location.pathname === path) return;
    setTargetPath(path);
    setTransitionActive(true);

    // Smoothly scroll to top before navigation
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => navigate(path), 500);
    setTimeout(() => {
      setTransitionActive(false);
      setMenuOpen(false);
    }, 1000);
  };


  return (
    <>
      {/* Shutter Animation Overlay */}
      {transitionActive && (
        <div className="fixed inset-0 backdrop-blur-lg bg-indigo-500/10 z-50 flex justify-center items-center overflow-hidden">
          <div
            className="
          grid grid-cols-5 gap-2 
          sm:gap-3 md:gap-4
      "
          >
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="
            bg-indigo-400 rounded-xl animate-pulseGrid 
            w-5 h-5 sm:w-10 sm:h-10 md:w-12 md:h-12
          "
                style={{
                  animationDelay: `${(i % 5 + Math.floor(i / 5)) * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>
      )}




      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 backdrop-blur-md ${isScrolled
          ? "bg-white/90 shadow-md"
          : "bg-white/70 shadow-sm"
          }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between md:px-6 px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 md:pl-14 md:mr-24 animate-floatLogo"
          >
            <img
              src={logo}
              alt="Binary Logo"
              className="w-35 md:w-225 lg:w-35 h-auto object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-end gap-12">
            {["/", "/About", "/services", "/portfolio", "/blogs", "/contact"].map((path) => {
              const name =
                path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                  path.replace("/", "").slice(1);
              return (
                <button
                  key={path}
                  onClick={() => handleNavClick(path)}
                  className={`relative text-sm font-semibold transition-all duration-300 group
                    ${isActive(path)
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                    }`}
                >
                  {name}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 rounded-full transition-all duration-500 ${isActive(path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                      }`}
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              className="rounded-md p-2 hover:bg-blue-50 transition duration-300"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="h-5 w-5 text-gray-700" />
              ) : (
                <Menu className="h-5 w-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md border-t animate-slideDown">
            <nav className="flex flex-col items-start gap-3 p-4 leading-8">
              {["/", "/About", "/services", "/portfolio", "/blogs", "/contact"].map((path) => {
                const name =
                  path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                    path.replace("/", "").slice(1);
                return (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path)}
                    className={`relative text-sm font-semibold transition-all duration-300
                      ${isActive(path)
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                  >
                    {name}
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </header>

      {/* Animations */}
      <style>
        {`
          /* Logo subtle floating effect */
          @keyframes floatLogo {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .animate-floatLogo {
            animation: floatLogo 4s ease-in-out infinite;
          }

          /* Shutter animation */
          @keyframes shutter {
            0% { transform: scaleY(0); opacity: 0; }
            50% { transform: scaleY(1); opacity: 1; }
            100% { transform: scaleY(0); opacity: 0; }
          }
          .animate-shutter {
            animation: shutter 1.2s ease-in-out forwards;
            transform-origin: center;
          }

          /* Mobile menu slide down */
          @keyframes slideDown {
            from { transform: translateY(-10px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-slideDown {
            animation: slideDown 0.4s ease forwards;
          }
        `}
      </style>
    </>
  );
}
