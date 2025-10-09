import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, User, Gift } from "lucide-react";
import logo from "../assets/logo/iteck_logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Iteck Logo"
            className="w-28 h-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition"
          >
            HOME
          </Link>
          <Link
            to="/projects"
            className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition"
          >
            PORTFOLIO
          </Link>
          <Link
            to="/blogs"
            className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition"
          >
            BLOGS
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-1 text-sm font-semibold text-gray-900 hover:text-purple-600 transition"
          >
            <Gift className="h-4 w-4 text-yellow-500" /> CONTACT
          </Link>
        </nav>

        {/* Right: User + CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <button className="hidden md:flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
            <User className="h-5 w-5 text-gray-700" />
          </button>
          <Link
            to="/join"
            className="hidden md:block rounded-full border border-gray-300 px-3 py-1 font-medium text-gray-800 hover:bg-gray-100 transition"
          >
            Join Iteck Hub →
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md border p-2 hover:bg-gray-100"
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
          <nav className="flex flex-col items-start gap-2 p-4">
            <Link
              to="/"
              className="text-sm font-semibold text-gray-700 hover:text-purple-600"
            >
              HOME
            </Link>
            <Link
              to="/projects"
              className="text-sm font-semibold text-gray-700 hover:text-purple-600"
            >
              PORTFOLIO
            </Link>
            <Link
              to="/blogs"
              className="text-sm font-semibold text-gray-700 hover:text-purple-600"
            >
              BLOGS
            </Link>
            <Link
              to="/contact"
              className="text-sm font-semibold text-gray-700 hover:text-purple-600"
            >
              CONTACT
            </Link>
            <Link
              to="/join"
              className="mt-2 w-full text-center rounded-full border border-gray-300 px-4 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              Join Iteck Hub →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
