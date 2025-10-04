import React from "react";
import { Link } from "react-router-dom"; // use this if you are using React Router
import { Menu } from "lucide-react";

// If you don't have a custom Button component, replace with <button>
const Button = ({ children, variant, size, className }) => {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium transition-colors";
  const variants = {
    ghost: "bg-transparent hover:bg-gray-100 text-gray-700",
    default: "bg-blue-600 text-white hover:bg-blue-700",
  };
  const sizes = {
    icon: "p-2",
    default: "",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant] || variants.default} ${
        sizes[size] || sizes.default
      } ${className || ""}`}
    >
      {children}
    </button>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
              <span className="text-lg font-bold text-white">A</span>
            </div>
            <span className="text-xl font-semibold">AppName</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/features"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/pricing"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button>Get Started</Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
