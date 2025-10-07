import React from "react";
import { Link } from "react-router-dom";
import { Menu, User, Gift } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full  bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Left: Logo + tagline */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-r from-purple-500 to-indigo-500">
            <span className="text-lg font-bold text-white">I</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-semibold">Iteck</span>
            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Tech & IT Solutions
            </span>
          </div>
        </Link>

        {/* Center: Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition">
              HOMES <span className="ml-1">▼</span>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden w-46 rounded-2xl  bg-white shadow-md group-hover:block">
              <Link
                to="/landing-preview"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                LANDING PREVIEW
              </Link>
              <Link
                to="/creative-it-solutions"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                CREATIVE IT SOLUTIONS
              </Link>
              <Link
                to="/data-analysis"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                DATA ANALYSIS
              </Link>
              <Link
                to="/app-landing"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                APP LANDING
              </Link>
              <Link
                to="/saas-technology"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                SAAS TECHNOLOGY
              </Link>
              <Link
                to="/marketing-startup"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                MARKETING STARTUP
              </Link>
              <Link
                to="/it-solution"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                IT SOLUTION
              </Link>
              <Link
                to="/software-company"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                SOFTWARE COMPANY
              </Link>
              <Link
                to="/digital-agency"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                DIGITAL AGENCY
              </Link>
              <Link
                to="/modern-shop"
                className="block px-4 py-2 text-[14px] text-gray-600 hover:bg-gray-100"
              >
                MODERN SHOP
              </Link>
            </div>

          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-purple-600 transition">
              PAGES{" "}
              <span className="ml-1 inline-flex items-center rounded bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-600">
                HOT
              </span>
            </button>
            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden w-32 rounded-2xl  bg-white shadow-md group-hover:block">
              <Link
                to="/about"
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
              >
                ABOUT
              </Link>
              <Link
                to="/product"
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
              >
                PRODUCT
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
              >
                SERVICES
              </Link>
              <Link
                to="/shop"
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
              >
                SHOP
              </Link>
              <Link
                to="/single-project"
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
              >
                SINGLE PROJECT
              </Link>
              <Link
                to="/single-post"
                className="block px-4 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
              >
                SINGLE POST
              </Link>

          </div>
      </div>

      <Link
        to="/projects"
        className="text-sm font-semibold text-gray-700 hover:text-purple-600 transition"
      >
        PORTFOLIO
      </Link>
      <Link
        to="/Blogs"
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

        {/* Right: User + CTA */ }
  <div className="flex items-center gap-4">
    <button className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition">
      <User className="h-5 w-5 text-gray-700" />
    </button>
    <Link
      to="/join"
      className="rounded-full border border-gray-300 px-5 py-2 font-medium text-gray-800 hover:bg-gray-100 transition"
    >
      Join Iteck Hub →
    </Link>

    {/* Mobile Menu */}
    <button className="md:hidden rounded-md border p-2 hover:bg-gray-100">
      <Menu className="h-5 w-5 text-gray-700" />
    </button>
  </div>
      </div >
    </header >
  );
}
