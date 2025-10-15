import React, { useRef, useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ Update the image imports according to your assets folder
import seoImg from "../../assets/3dseoimg.png";
import adsImg from "../../assets/websiteicon.png";
import emailImg from "../../assets/emailmark3Dnew.png";
import socialImg from "../../assets/contentimg.png";
import webdevImg from "../../assets/websiteicon.png";
import appImg from "../../assets/3dappimgbg.png";

const Services = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "SEO Strategy",
      desc: "Boost visibility and rank higher with smart SEO tactics.",
      img: seoImg,
    },
    {
      title: "Google/FB Ads",
      desc: "Drive instant traffic and conversions with targeted ads.",
      img: adsImg,
    },
    {
      title: "Email Marketing",
      desc: "Engage users and grow loyalty with personalized emails.",
      img: emailImg,
    },
    {
      title: "Social Media",
      desc: "Build your brand and grow faster on every platform.",
      img: socialImg,
    },
    {
      title: "Website Design & Development",
      desc: "Create stunning, responsive, and high-converting websites.",
      img: webdevImg,
    },
    {
      title: "App Development",
      desc: "Develop sleek, secure, and scalable mobile applications.",
      img: appImg,
    },
  ];

  // ✅ Scroll function
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 24; // gap
      scrollRef.current.scrollTo({
        left: index * cardWidth - window.innerWidth / 2 + cardWidth / 2,
        behavior: "smooth",
      });
    }
  };

  // ✅ Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [services.length]);

  // ✅ Move scroll when index changes
  useEffect(() => {
    scrollToIndex(currentIndex);
  }, [currentIndex]);

  return (
    <section className="py-16 px-6 bg-white">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <span className="text-sm text-blue-600 font-semibold  tracking-wide bg-purple-50 px-3 py-1 rounded-full">
          Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Our Top{" "}
          <span className="bg-gradient-to-r from-[#3488fa] to-black/70 bg-clip-text text-transparent">
            Services
          </span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Binarylogix seamlessly connects with your favorite tools for effortless collaboration.
        </p>

      </div>

      {/* Slider */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth px-10"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className={`min-w-[230px] sm:min-w-[250px] md:min-w-[270px] rounded-2xl  transition-all duration-500 p-6 flex flex-col items-center text-center bg-[#f8faff] ${i === currentIndex
                ? "scale-110  bg-white"
                : "scale-95 opacity-80"
                }`}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="font-semibold text-gray-800 mb-2 text-lg">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Manual Controls (Optional) */}
        {/* <button
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? services.length - 1 : prev - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-purple-100 hover:bg-purple-200 p-2 rounded-full shadow-md"
        >
          <ChevronLeft className="text-purple-600 w-5 h-5" />
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % services.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-purple-100 hover:bg-purple-200 p-2 rounded-full shadow-md"
        >
          <ChevronRight className="text-purple-600 w-5 h-5" />
        </button> */}
      </div>
    </section>
  );
};

export default Services;
