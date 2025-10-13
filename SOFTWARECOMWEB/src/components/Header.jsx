import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo/binarylogixlogo-remove.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check active route
  const isActive = (path) => location.pathname === path;

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "rounded-none shadow-md" : "rounded-t-2xl"
        }`}
    >
      {/* Thin purple bar */}
      {/* <div
        className={`h-[36px] bg-purple-600 transition-all duration-300 ${
          isScrolled ? "opacity-0 -translate-y-2" : "opacity-100 translate-y-0"
        }`}
      ></div> */}

      {/* Navbar */}
      <div className="bg-white">
        <div className="container mx-auto flex h-16 items-center justify-between md:px-6 px-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 md:pl-14 md:mr-24 lg:mr-118"
          >
            <img
              src={logo}
              alt="Binary Logo"
              className="w-35 md:w-45 lg:w-35 h-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-end align-left gap-12">
            <Link
              to="/"
              className={`text-sm font-semibold transition ${isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Home
            </Link>

            <Link
              to="/About"
              className={`text-sm font-semibold transition ${isActive("/About")
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
                }`}
            >
              About
            </Link>

            <Link
              to="/services"
              className={`text-sm font-semibold transition ${isActive("/services")
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className={`text-sm font-semibold transition ${isActive("/projects")
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Portfolio
            </Link>

            <Link
              to="/blogs"
              className={`text-sm font-semibold transition ${isActive("/blogs")
                ? "text-blue-600"
                : "text-gray-700 hover:text-blue-600"
                }`}
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className={`flex items-center gap-1 text-sm font-semibold transition ${isActive("/contact")
                ? "text-blue-600"
                : "text-gray-900 hover:text-blue-600"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button
              className="md:hidden rounded-md  p-2 hover:bg-gray-100"
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

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md border-t">
            <nav className="flex flex-col items-start gap-3 p-4 leading-8">
              <Link
                to="/"
                className={`text-sm font-semibold ${isActive("/") ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                Home
              </Link>

              <Link
                to="/About"
                className={`text-sm font-semibold ${isActive("/About")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                About
              </Link>

              <Link
                to="/services"
                className={`text-sm font-semibold ${isActive("/services")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                Services
              </Link>

              <Link
                to="/projects"
                className={`text-sm font-semibold ${isActive("/projects")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                Portfolio
              </Link>

              <Link
                to="/blogs"
                className={`text-sm font-semibold ${isActive("/blogs")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                Blogs
              </Link>

              <Link
                to="/contact"
                className={`text-sm font-semibold ${isActive("/contact")
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}

      </div>
    </header>
  );
}
