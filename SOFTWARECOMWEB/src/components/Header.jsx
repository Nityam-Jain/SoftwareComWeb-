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

  // Handle menu click with shutter effect
  const handleNavClick = (path) => {
    if (location.pathname === path) return;
    setTargetPath(path);
    setTransitionActive(true);

    setTimeout(() => {
      navigate(path);
    }, 500);

    setTimeout(() => {
      setTransitionActive(false);
      setMenuOpen(false);
    }, 1000);
  };

  return (
    <>
      {/* Shutter Animation Overlay */}
      {transitionActive && (
        <div className="fixed inset-0 bg-blue-600 z-50 flex justify-center items-center overflow-hidden">
          <div className="absolute inset-0 bg-blue-600 animate-shutter"></div>
        </div>
      )}

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? "rounded-none shadow-md" : "rounded-t-2xl"
          }`}
      >
        <div className="bg-white">
          <div className="container mx-auto flex h-16 items-center justify-between md:px-6 px-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 md:pl-14 md:mr-24 lg:mr-118">
              <img
                src={logo}
                alt="Binary Logo"
                className="w-35 md:w-125 lg:w-35 h-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-end gap-12">
              {["/", "/About", "/services", "/portfolio", "/blogs", "/contact"].map((path) => {
                const name = path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1);
                return (
                  <button
                    key={path}
                    onClick={() => handleNavClick(path)}
                    className={`relative text-sm font-semibold transition 
                      ${isActive(path)
                        ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full"
                        : "text-gray-700 hover:text-blue-600"
                      }`}
                  >
                    {name}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                className="rounded-md p-2 hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X className="h-5 w-5 text-gray-700" /> : <Menu className="h-5 w-5 text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden bg-white shadow-md border-t">
              <nav className="flex flex-col items-start gap-3 p-4 leading-8">
                {["/", "/About", "/services", "/portfolio", "/blogs", "/contact"].map((path) => {
                  const name = path === "/" ? "Home" : path.replace("/", "").charAt(0).toUpperCase() + path.replace("/", "").slice(1);
                  return (
                    <button
                      key={path}
                      onClick={() => handleNavClick(path)}
                      className={`relative text-sm font-semibold 
                        ${isActive(path)
                          ? "text-blue-600 after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-blue-600 after:rounded-full"
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
        </div>

        {/* Shutter animation CSS */}
        <style>
          {`
           @keyframes shutter {
              0%   { transform: scaleY(0); }
              50%  { transform: scaleY(1); }
              100% { transform: scaleY(0); }
            }
            .animate-shutter {
              animation: shutter 3s ease-in-out forwards;
              transform-origin: center;
            }
          `}
        </style>
      </header>
    </>
  );
}
