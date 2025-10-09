import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../../assets/popularimg1.png";
import img2 from "../../assets/popularimg2.png";
import img3 from "../../assets/popularimg3.png";

const screenshots = [img1, img2, img3];

export default function ScreenSlider() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start center
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef();

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isAnimating) {
      timeoutRef.current = setTimeout(() => setIsAnimating(false), 600);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isAnimating]);

  const getVisibleImages = () => {
    let result = [];
    for (let i = -2; i <= 2; i++) {
      result.push(screenshots[(currentIndex + i + screenshots.length) % screenshots.length]);
    }
    return result;
  };

  const visibleImages = getVisibleImages();

  return (
    <section className="py-10 sm:py-14 bg-gray-50 text-center overflow-hidden">
      <div className="flex items-center justify-center gap-3 sm:gap-6 relative">
        {/* Left Button */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          aria-label="Previous"
          className="p-1 sm:p-2 rounded-full bg-purple-100 hover:bg-purple-200 disabled:opacity-50 z-20"
        >
          <ChevronLeft size={12} className="sm:size-10" />
        </button>

        {/* Carousel */}
        <div className="relative flex w-full max-w-[1100px] h-[280px] sm:h-[360px] md:h-[480px] justify-center items-center overflow-hidden">
          {visibleImages.map((src, idx) => {
            const offset = idx - 2;
            const active = idx === 2;

            // Adjust transform distance for smaller screens
            const baseTranslate =
              window.innerWidth < 640
                ? offset * 120
                : window.innerWidth < 1024
                ? offset * 180
                : offset * 230;

            const scale = active
              ? 1
              : offset === -1 || offset === 1
              ? 0.88
              : 0.78;
            const opacity = active ? 1 : 0.7 - Math.abs(offset) * 0.1;
            const rotateY = active ? "0deg" : offset < 0 ? "-25deg" : "25deg";
            const zIndex = 100 - Math.abs(offset);

            return (
              <div
                key={idx}
                className="absolute transition-all duration-500"
                style={{
                  transform: `
                    translateX(${baseTranslate}px)
                    scale(${scale})
                    rotateY(${rotateY})
                  `,
                  opacity,
                  zIndex,
                  filter: active
                    ? "drop-shadow(0 8px 24px rgba(120,35,200,0.14))"
                    : "drop-shadow(0 0px 12px rgba(110,80,225,0.10))",
                }}
              >
                <div
                  className={`relative flex flex-col justify-center items-center ${
                    active
                      ? "w-[160px] h-[320px] sm:w-[200px] sm:h-[400px] md:w-[250px] md:h-[480px]"
                      : "w-[120px] h-[220px] sm:w-[150px] sm:h-[300px] md:w-[180px] md:h-[370px]"
                  }`}
                >
                  {/* Mobile Frame */}
                  <div
                    className={`relative bg-black rounded-[2rem] border-[4px] sm:border-[6px] border-gray-300 shadow-2xl overflow-hidden ${
                      active
                        ? "w-[160px] h-[320px] sm:w-[200px] sm:h-[400px] md:w-[250px] md:h-[480px]"
                        : "w-[120px] h-[220px] sm:w-[150px] sm:h-[300px] md:w-[180px] md:h-[370px]"
                    }`}
                  >
                    {/* notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 sm:w-20 md:w-24 h-4 sm:h-6 md:h-7 bg-gray-900 rounded-b-xl z-10"></div>
                    {/* Side buttons */}
                    <div className="absolute top-16 sm:top-20 md:top-24 -left-[5px] sm:-left-[7px] w-[3px] sm:w-[4px] h-8 sm:h-10 bg-gray-500 rounded-r-xl"></div>
                    <div className="absolute top-32 sm:top-40 md:top-48 -left-[5px] sm:-left-[7px] w-[3px] sm:w-[4px] h-10 sm:h-16 bg-gray-500 rounded-r-xl"></div>
                    <div className="absolute top-24 sm:top-32 md:top-36 -right-[5px] sm:-right-[7px] w-[3px] sm:w-[4px] h-8 sm:h-12 bg-gray-500 rounded-l-xl"></div>
                    {/* Inner image */}
                    <img
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover rounded-[1.5rem] sm:rounded-[2rem]"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Button */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          aria-label="Next"
          className="p-1 sm:p-2 rounded-full bg-purple-100 hover:bg-purple-200 disabled:opacity-50 z-20"
        >
          <ChevronRight size={12} className="sm:size-10" />
        </button>
      </div>
    </section>
  );
}
