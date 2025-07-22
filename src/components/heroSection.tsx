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
            }}
          />
        </AnimatePresence>
      </div>

      {/* Content Container - Adjusted for full visibility */}
      <div className="container mx-auto px-6 z-10 py-12 text-center max-w-4xl">
        <div className="flex flex-col items-center justify-center h-full">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transcredit
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
              Microfinance Services
            </h2>
            <p className="text-xl md:text-2xl mt-6 text-white/95 font-light">
              Empowering Growth through Embedded Financial Services
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 w-24 bg-gradient-to-r from-transparent via-white/70 to-transparent my-8"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 font-medium mb-8"
          >
            Finance Where You Are. Empowerment When You Need It.
          </motion.p>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4 max-w-3xl"
          >
            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              TMS is pioneering Embedded Financial Services (EFS) across
              Tanzania and East Africa — enabling real-time access to credit
              directly through the platforms people use every day.
            </p>

            <p className="text-base md:text-lg text-white/90 leading-relaxed">
              Whether you're a motorist in need of fuel, a business looking for
              capital, or a digital platform with thousands of users,{" "}
              <span className="font-semibold text-white">
                TMS bridges the gap between need and opportunity.
              </span>
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-8 flex flex-col items-center"
          >
            {/* Highlight Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full backdrop-blur-sm border border-white/20 text-white/95 mb-6">
              <FaCheckCircle className="text-green-300" />
              <span className="text-sm md:text-base font-medium">
                Now embedded in platforms, fuel stations, and mobile apps
              </span>
            </div>

            {/* CTA Button */}
            <button className="bg-[#D20000] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#B00000] transition-all text-lg">
              Become a Partner →
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          goToSlide(
            (currentIndex - 1 + backgrounds.length) % backgrounds.length
          )
        }
        className="absolute left-4 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={() => goToSlide((currentIndex + 1) % backgrounds.length)}
        className="absolute right-4 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-white w-6" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
