import React from "react";
import { Link } from "react-router-dom"; 
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">A</span>
              </div>
              <span className="text-xl font-semibold">AppName</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Transform your workflow with our innovative solutions.
            </p>
            <div className="flex gap-3">
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Product Section */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/features"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © 2025 AppName. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
