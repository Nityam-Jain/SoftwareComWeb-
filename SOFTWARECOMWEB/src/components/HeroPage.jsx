import React, { useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import AppLanding from "./ui/AppLandingPage";
import Features from "./ui/Features";
import Creative from "./ui/Creatives";
import Notes from "./ui/Notes";
import About from "./ui/About";
import Popular from "./ui/Popularapps";
import MobileSlider from "./ui/mobileslider";
import Customers from "./ui/customers";
import Stats from "./ui/stats";
import ServicesComp from "../components/ui/ServicesCom";
import ContactComp from "../components/contactcomp";
import Support from "./ui/Support";
import HeroBanner from "./Herobanner1";
import AboutPageScroll from "./pageAboutcom";

function HomePage() {

  // ✅ Track visitor when homepage loads
  useEffect(() => {
    axios
      .get("/api/visitor/track")
      .then((res) => console.log("Visitor tracked:", res.data))
      .catch((err) => console.log("Visitor track error:", err));
  }, []);

  // 🌀 Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // ✨ Optional: fade-in animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-section");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          el.classList.add("visible");
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Header />

      <div className="fade-in-section">
        <HeroBanner />
      </div>

      <div className="fade-in-section">
        <Popular />
      </div>

      <div className="fade-in-section">
        <AboutPageScroll />
      </div>

      <div className="fade-in-section">
        <ServicesComp />
      </div>

      <div className="fade-in-section">
        <Notes />
      </div>

      <div className="fade-in-section">
        <Customers />
      </div>

      <div className="fade-in-section">
        <Stats />
      </div>

      <div className="fade-in-section">
        <Support />
      </div>

      <div className="fade-in-section">
        <ContactComp />
      </div>

      <Footer />

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        .fade-in-section {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        body {
          scroll-behavior: smooth;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
