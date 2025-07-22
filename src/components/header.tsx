// components/Header.tsx
import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHandshake,
  FaPhoneAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      setIsMenuOpen(false);
      setOpenDropdown(null);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const mainNavLinks = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About Us" },
    { path: "#services", label: "Services" },
  ];

  const companyNavLinks = [
    { path: "#how-it-works", label: "How It Works" },
    { path: "#why-tms", label: "Why Choose Us" },
    { path: "#team", label: "Our Team" },
  ];

  const partnerNavLinks = [
    { path: "#partners", label: "Our Partners" },
    { path: "#why-partner", label: "Partner Benefits" },
    { path: "#testimonials", label: "Success Stories" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
      className={`bg-[#005452] text-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-xl py-2" : "shadow-md py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="flex items-center focus:outline-none">
              <div className="rounded-full p-1 bg-white">
                <img
                  src={logo}
                  alt="Transcredit Microfinance Services Logo"
                  className="h-12 w-12 md:h-16 md:w-16 transition-all duration-300 hover:scale-105 transform-gpu"
                />
              </div>
              <div className="ml-4">
                <h1 className="text-2xl md:text-3xl font-bold leading-tight">
                  Transcredit
                </h1>
                <p className="text-sm md:text-base font-medium text-white/80 mt-1">
                  Microfinance Services
                </p>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Main Links */}
            {mainNavLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <a
                  href={link.path}
                  className={`relative px-4 py-2 rounded-md transition-colors ${
                    currentHash === link.path
                      ? "text-white font-semibold"
                      : "text-white/90 hover:text-white hover:bg-[#005452]/80"
                  }`}
                >
                  <span>{link.label}</span>
                  {currentHash === link.path && (
                    <motion.span
                      className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-[#D20000]"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.div>
            ))}

            {/* Company Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("company")}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "company" ||
                  companyNavLinks.some((link) => currentHash === link.path)
                    ? "text-white font-semibold bg-[#005452]/80"
                    : "text-white/90 hover:text-white hover:bg-[#005452]/80"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + mainNavLinks.length * 0.1 }}
              >
                <span>Company</span>
                {openDropdown === "company" ? (
                  <FaChevronUp className="ml-1 text-sm text-white" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </motion.button>

              {openDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                >
                  <div className="py-1">
                    {companyNavLinks.map((link) => (
                      <a
                        key={link.path}
                        href={link.path}
                        className={`block px-4 py-2.5 text-gray-800 hover:bg-[#000000] hover:text-white 
                          transition-colors duration-200 ${
                            currentHash === link.path
                              ? "bg-[#000000] text-white font-medium"
                              : ""
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Partners Dropdown */}
            <div className="relative">
              <motion.button
                onClick={() => toggleDropdown("partners")}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "partners" ||
                  partnerNavLinks.some((link) => currentHash === link.path)
                    ? "text-white font-semibold bg-[#005452]/80"
                    : "text-white/90 hover:text-white hover:bg-[#005452]/80"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (mainNavLinks.length + 1) * 0.1 }}
              >
                <span>Partners</span>
                {openDropdown === "partners" ? (
                  <FaChevronUp className="ml-1 text-sm text-white" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </motion.button>

              {openDropdown === "partners" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-200"
                >
                  <div className="py-1">
                    {partnerNavLinks.map((link) => (
                      <a
                        key={link.path}
                        href={link.path}
                        className={`block px-4 py-2.5 text-gray-800 hover:bg-[#000000] hover:text-white 
                          transition-colors duration-200 ${
                            currentHash === link.path
                              ? "bg-[#000000] text-white font-medium"
                              : ""
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Contact Link */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (mainNavLinks.length + 2) * 0.1 }}
            >
              <a
                href="#contact"
                className={`relative px-4 py-2 rounded-md transition-colors ${
                  currentHash === "#contact"
                    ? "text-white font-semibold"
                    : "text-white/90 hover:text-white hover:bg-[#005452]/80"
                }`}
              >
                <span>Contact</span>
                {currentHash === "#contact" && (
                  <motion.span
                    className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-[#D20000]"
                    layoutId="activeIndicator"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex items-center space-x-3 ml-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/apply"
                  className="bg-[#000000] text-white flex items-center px-4 py-2 rounded-full font-bold text-sm hover:bg-[#000000] transition-all shadow-lg"
                >
                  <FaHandshake className="mr-2" />
                  <span>Become Partner</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="tel:+255742411411"
                  className="bg-white/10 backdrop-blur-sm flex items-center px-4 py-2 rounded-full border border-white/20 text-sm hover:bg-white/20 transition-all"
                >
                  <FaPhoneAlt className="mr-2" />
                  <span>Call Us</span>
                </a>
              </motion.div>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden bg-[#005452] transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-screen py-4" : "max-h-0 py-0"
          }`}
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-3">
            {/* Main Links */}
            {mainNavLinks.map((link, index) => (
              <motion.a
                key={link.path}
                href={link.path}
                className={`px-4 py-3 rounded-md transition-colors flex items-center ${
                  currentHash === link.path
                    ? "bg-[#000000] text-white font-semibold"
                    : "hover:bg-[#005452]/80 text-white/90 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}

            {/* Company Accordion */}
            <div className="flex flex-col">
              <motion.button
                onClick={() => toggleDropdown("company-mobile")}
                className={`px-4 py-3 rounded-md transition-colors flex items-center justify-between ${
                  openDropdown === "company-mobile" ||
                  companyNavLinks.some((link) => currentHash === link.path)
                    ? "bg-[#000000] text-white font-semibold"
                    : "hover:bg-[#005452]/80 text-white/90 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + mainNavLinks.length * 0.1 }}
              >
                <span>Company</span>
                {openDropdown === "company-mobile" ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </motion.button>

              {openDropdown === "company-mobile" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-6"
                >
                  {companyNavLinks.map((link, index) => (
                    <motion.a
                      key={link.path}
                      href={link.path}
                      className={`block px-4 py-3 rounded-md transition-colors ${
                        currentHash === link.path
                          ? "bg-[#000000] text-white font-semibold"
                          : "hover:bg-[#005452]/80 text-white/90 hover:text-white"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Partners Accordion */}
            <div className="flex flex-col">
              <motion.button
                onClick={() => toggleDropdown("partners-mobile")}
                className={`px-4 py-3 rounded-md transition-colors flex items-center justify-between ${
                  openDropdown === "partners-mobile" ||
                  partnerNavLinks.some((link) => currentHash === link.path)
                    ? "bg-[#000000] text-white font-semibold"
                    : "hover:bg-[#005452]/80 text-white/90 hover:text-white"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + (mainNavLinks.length + 1) * 0.1 }}
              >
                <span>Partners</span>
                {openDropdown === "partners-mobile" ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </motion.button>

              {openDropdown === "partners-mobile" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-6"
                >
                  {partnerNavLinks.map((link, index) => (
                    <motion.a
                      key={link.path}
                      href={link.path}
                      className={`block px-4 py-3 rounded-md transition-colors ${
                        currentHash === link.path
                          ? "bg-[#000000] text-white font-semibold"
                          : "hover:bg-[#005452]/80 text-white/90 hover:text-white"
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact Link */}
            <motion.a
              href="#contact"
              className={`px-4 py-3 rounded-md transition-colors flex items-center ${
                currentHash === "#contact"
                  ? "bg-[#000000] text-white font-semibold"
                  : "hover:bg-[#005452]/80 text-white/90 hover:text-white"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + (mainNavLinks.length + 2) * 0.1 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact</span>
            </motion.a>

            {/* Mobile CTA Buttons */}
            <motion.div
              className="grid grid-cols-2 gap-3 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileTap={{ scale: 0.95 }}>
                <Link
                  to="/apply"
                  className="bg-[#000000] text-white flex items-center justify-center px-4 py-3 rounded-full font-bold text-sm hover:bg-[#B00000] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaHandshake className="mr-2" />
                  <span>Become Partner</span>
                </Link>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <a
                  href="tel:+255742411411"
                  className="bg-white/10 backdrop-blur-sm flex items-center justify-center px-4 py-3 rounded-full border border-white/20 text-sm hover:bg-white/20 transition-all"
                >
                  <FaPhoneAlt className="mr-2" />
                  <span>Call Us</span>
                </a>
              </motion.div>
            </motion.div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
