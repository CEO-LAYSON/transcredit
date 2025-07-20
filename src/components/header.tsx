// components/Header.tsx
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

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
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
  ];

  const companyNavLinks = [
    { path: "/how-it-works", label: "How It Works" },
    { path: "/why-tms", label: "Why Choose Us" },
    { path: "/team", label: "Our Team" },
  ];

  const partnerNavLinks = [
    { path: "/partners", label: "Our Partners" },
    { path: "/why-partner", label: "Partner Benefits" },
    { path: "/testimonials", label: "Success Stories" },
  ];

  return (
    <header
      className={`bg-primary text-white sticky top-0 z-50 transition-all duration-300 ${
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
            <NavLink to="/" className="flex items-center">
              <div className="bg-white rounded-full p-2">
                <img
                  src={logo}
                  alt="Transcredit Microfinance Services Logo"
                  className="h-8 w-8 md:h-10 md:w-10 transition-all duration-300 hover:scale-110 transform-gpu"
                />
              </div>
              <h1 className="text-xl md:text-2xl font-bold ml-3">
                <span className="block leading-tight">Transcredit</span>
                <span className="block text-sm md:text-base font-normal text-yellow-300">
                  Microfinance Services
                </span>
              </h1>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Main Links */}
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-white font-medium"
                      : "text-gray-200 hover:text-white hover:bg-primary-dark/30"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-yellow-400"
                        layoutId="activeIndicator"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("company")}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "company" ||
                  companyNavLinks.some(
                    (link) => location.pathname === link.path
                  )
                    ? "text-yellow-300 font-medium bg-primary-dark/80"
                    : "text-gray-200 hover:text-yellow-300 hover:bg-primary-dark/30"
                }`}
              >
                <span>Company</span>
                {openDropdown === "company" ? (
                  <FaChevronUp className="ml-1 text-sm text-yellow-300" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>

              {openDropdown === "company" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100"
                >
                  <div className="py-1">
                    {companyNavLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-gray-800 hover:bg-yellow-400 hover:text-gray-900 
              transition-colors duration-200 ${
                isActive ? "bg-yellow-400 text-gray-900 font-medium" : ""
              }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Partners Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("partners")}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  openDropdown === "partners" ||
                  partnerNavLinks.some(
                    (link) => location.pathname === link.path
                  )
                    ? "text-yellow-300 font-medium bg-primary-dark/80"
                    : "text-gray-200 hover:text-yellow-300 hover:bg-primary-dark/30"
                }`}
              >
                <span>Partners</span>
                {openDropdown === "partners" ? (
                  <FaChevronUp className="ml-1 text-sm text-yellow-300" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>

              {openDropdown === "partners" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 border border-gray-100"
                >
                  <div className="py-1">
                    {partnerNavLinks.map((link) => (
                      <NavLink
                        key={link.path}
                        to={link.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-gray-800 hover:bg-yellow-400 hover:text-gray-900 
              transition-colors duration-200 ${
                isActive ? "bg-yellow-400 text-gray-900 font-medium" : ""
              }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Contact Link */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative px-4 py-2 rounded-md transition-colors ${
                  isActive
                    ? "text-white font-medium"
                    : "text-gray-200 hover:text-white hover:bg-primary-dark/30"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  {isActive && (
                    <motion.span
                      className="absolute bottom-0 left-1/4 w-1/2 h-0.5 bg-yellow-400"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>

            {/* CTA Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <NavLink
                  to="/become-partner"
                  className="bg-yellow-400 text-gray-900 flex items-center px-4 py-2 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all shadow-lg"
                >
                  <FaHandshake className="mr-2" />
                  <span>Become Partner</span>
                </NavLink>
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
            </div>
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
          className={`lg:hidden bg-primary-darker transition-all duration-300 overflow-hidden ${
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
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-md transition-colors flex items-center ${
                    isActive
                      ? "bg-yellow-400 text-gray-900 font-semibold"
                      : "hover:bg-primary-dark"
                  }`
                }
              >
                <span>{link.label}</span>
              </NavLink>
            ))}

            {/* Company Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => toggleDropdown("company-mobile")}
                className={`px-4 py-3 rounded-md transition-colors flex items-center justify-between ${
                  openDropdown === "company-mobile" ||
                  companyNavLinks.some(
                    (link) => location.pathname === link.path
                  )
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-primary-dark"
                }`}
              >
                <span>Company</span>
                {openDropdown === "company-mobile" ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>

              {openDropdown === "company-mobile" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-6"
                >
                  {companyNavLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-md transition-colors ${
                          isActive
                            ? "bg-yellow-400 text-gray-900 font-semibold"
                            : "hover:bg-primary-dark"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Partners Accordion */}
            <div className="flex flex-col">
              <button
                onClick={() => toggleDropdown("partners-mobile")}
                className={`px-4 py-3 rounded-md transition-colors flex items-center justify-between ${
                  openDropdown === "partners-mobile" ||
                  partnerNavLinks.some(
                    (link) => location.pathname === link.path
                  )
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-primary-dark"
                }`}
              >
                <span>Partners</span>
                {openDropdown === "partners-mobile" ? (
                  <FaChevronUp className="ml-1 text-sm" />
                ) : (
                  <FaChevronDown className="ml-1 text-sm" />
                )}
              </button>

              {openDropdown === "partners-mobile" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-6"
                >
                  {partnerNavLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-md transition-colors ${
                          isActive
                            ? "bg-yellow-400 text-gray-900 font-semibold"
                            : "hover:bg-primary-dark"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Contact Link */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-4 py-3 rounded-md transition-colors flex items-center ${
                  isActive
                    ? "bg-yellow-400 text-gray-900 font-semibold"
                    : "hover:bg-primary-dark"
                }`
              }
            >
              <span>Contact</span>
            </NavLink>

            {/* Mobile CTA Buttons */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              <motion.div whileTap={{ scale: 0.95 }}>
                <NavLink
                  to="/become-partner"
                  className="bg-yellow-400 text-gray-900 flex items-center justify-center px-4 py-3 rounded-full font-bold text-sm hover:bg-yellow-500 transition-all"
                >
                  <FaHandshake className="mr-2" />
                  <span>Become Partner</span>
                </NavLink>
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
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
