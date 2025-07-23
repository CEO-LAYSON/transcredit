// components/Header.tsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`bg-[#005452] text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl py-2" : "shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand with Home Link */}
          <motion.div
            className="flex items-center space-x-2 md:space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center focus:outline-none">
              <div className="rounded-full p-1 bg-white">
                <img
                  src={logo}
                  alt="Transcredit Microfinance Services Logo"
                  className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 transition-all duration-300 hover:scale-105 transform-gpu"
                />
              </div>
              <div className="ml-2 md:ml-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">
                  Transcredit
                </h1>
                <p className="text-xs sm:text-sm md:text-base font-medium text-white/80 mt-0 sm:mt-1">
                  Microfinance Services
                </p>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
