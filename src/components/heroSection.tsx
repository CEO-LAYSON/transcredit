import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import your high-quality background images
import heroBg1 from "../assets/hero-bg1.jpg";
import heroBg2 from "../assets/hero-bg2.jpg";
import heroBg3 from "../assets/hero-bg3.jpg";
import heroBg4 from "../assets/hero-bg4.jpg";
import heroBg5 from "../assets/hero-bg5.jpg";
import heroBg6 from "../assets/hero-bg6.jpg";
import heroBg7 from "../assets/hero-bg7.jpg";
import { Link } from "react-router-dom";

const backgrounds = [
  { image: heroBg1, overlay: "rgba(0, 84, 82, 0.4)" },
  { image: heroBg2, overlay: "rgba(0, 84, 82, 0.3)" },
  { image: heroBg3, overlay: "rgba(0, 84, 82, 0.5)" },
  { image: heroBg4, overlay: "rgba(0, 84, 82, 0.4)" },
  { image: heroBg5, overlay: "rgba(0, 84, 82, 0.3)" },
  { image: heroBg6, overlay: "rgba(0, 84, 82, 0.5)" },
  { image: heroBg7, overlay: "rgba(0, 84, 82, 0.4)" },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              backgroundImage: `linear-gradient(${backgrounds[currentIndex].overlay}, ${backgrounds[currentIndex].overlay}), url(${backgrounds[currentIndex].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: isMobile ? "scroll" : "fixed",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Content Container - Responsive adjustments */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 text-center w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8">
          {/* Main Heading - Responsive text sizes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              Transcredit
            </h1>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mt-2 sm:mt-3 md:mt-4">
              Microfinance Services
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl mt-4 sm:mt-5 md:mt-6 text-white/95 font-light max-w-2xl mx-auto">
              Empowering Growth through Embedded Financial Services
            </p>
          </motion.div>

          {/* Divider - Responsive sizing */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-0.5 sm:h-1 w-16 sm:w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent my-6 sm:my-8 md:my-10"
          />

          {/* Tagline - Responsive text and spacing */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto text-white/90 font-medium mb-6 sm:mb-8"
          >
            Finance Where You Are. Empowerment When You Need It.
          </motion.p>

          {/* Description - Responsive layout */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-3 sm:space-y-4 w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-0"
          >
            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-white/90 leading-relaxed sm:leading-loose">
              TMS is pioneering Embedded Financial Services (EFS) across
              Tanzania and East Africa — enabling real-time access to credit
              directly through the platforms people use every day.
            </p>

            <p className="text-sm xs:text-base sm:text-lg md:text-lg text-white/90 leading-relaxed sm:leading-loose">
              Whether you're a motorist in need of fuel, a business looking for
              capital, or a digital platform with thousands of users,{" "}
              <span className="font-semibold text-white">
                TMS bridges the gap between need and opportunity.
              </span>
            </p>
          </motion.div>

          {/* CTA Section - Responsive adjustments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center w-full"
          >
            {/* Highlight Badge - Responsive sizing */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm border border-white/20 text-white/95 mb-4 sm:mb-6">
              <FaCheckCircle className="text-sm sm:text-base text-green-300" />
              <span className="text-xs sm:text-sm md:text-base font-medium">
                Now embedded in platforms, fuel stations, and mobile apps
              </span>
            </div>

            {/* CTA Button - Responsive sizing */}
            <Link to="/apply">
              <button className="bg-[#D20000] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold shadow-lg hover:bg-[#B00000] transition-all text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-sm">
                Become a Partner →
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows - Responsive positioning */}
      <button
        onClick={() =>
          goToSlide(
            (currentIndex - 1 + backgrounds.length) % backgrounds.length
          )
        }
        className="absolute left-2 sm:left-4 z-20 p-1 sm:p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
        aria-label="Previous slide"
      >
        <FaChevronLeft className="text-lg sm:text-xl" />
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % backgrounds.length)}
        className="absolute right-2 sm:right-4 z-20 p-1 sm:p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
        aria-label="Next slide"
      >
        <FaChevronRight className="text-lg sm:text-xl" />
      </button>

      {/* Slide Indicators - Responsive sizing */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-1 sm:gap-2 z-10">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-4 sm:w-6" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Mobile-specific optimizations */}
      {isMobile && (
        <div className="absolute bottom-2 left-0 right-0 text-center z-10">
          <p className="text-xs text-white/80">Swipe to view more</p>
        </div>
      )}
    </section>
  );
}
