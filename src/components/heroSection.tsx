import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// Import your high-quality background images
import heroBg1 from "../assets/hero-bg1.jpg";
import heroBg2 from "../assets/hero-bg2.jpg";
import heroBg3 from "../assets/hero-bg3.jpg";
import heroBg4 from "../assets/hero-bg4.jpg";
import heroBg5 from "../assets/hero-bg5.jpg";
import heroBg6 from "../assets/hero-bg6.jpg";
import heroBg7 from "../assets/hero-bg7.jpg";

interface BackgroundContent {
  image: string;
  content: {
    title: string;
    subtitle: string;
    tagline: string;
    description: string[];
    ctaText: string;
    badgeText: string;
    colorScheme: {
      primary: string;
      secondary: string;
      accent: string;
      overlay: string;
      text: string;
      textSecondary: string;
      textAccent: string;
    };
  };
}

const backgrounds: BackgroundContent[] = [
  {
    image: heroBg1,
    content: {
      title: "Transcredit",
      subtitle: "Microfinance Services",
      tagline: "Finance Where You Are",
      description: [
        "Real-time credit access through platforms you use daily",
        "Bridging financial gaps for motorists, businesses & digital platforms",
      ],
      ctaText: "Become a Partner",
      badgeText: "Embedded in platforms & fuel stations",
      colorScheme: {
        primary: "#005452",
        secondary: "#003A38",
        accent: "#FFD700",
        overlay: "rgba(0, 84, 82, 0.4)",
        text: "#FFFFFF", // White text for dark backgrounds
        textSecondary: "#F0F0F0", // Light gray for secondary text
        textAccent: "#D20000", // Gold for highlights
      },
    },
  },
  {
    image: heroBg2,
    content: {
      title: "Instant Credit",
      subtitle: "When You Need It",
      tagline: "Fast Financial Solutions",
      description: [
        "Instant approvals with minimal paperwork",
        "Redefining capital access across East Africa",
      ],
      ctaText: "Apply Now",
      badgeText: "90% approval rate",
      colorScheme: {
        primary: "#1A3E6F",
        secondary: "#FF6B35",
        accent: "#94c100",
        overlay: "rgba(26, 62, 111, 0.3)",
        text: "#FFFFFF",
        textSecondary: "#E0E0E0",
        textAccent: "#FFA726", // Orange accent
      },
    },
  },
  {
    image: heroBg3,
    content: {
      title: "Embedded Finance",
      subtitle: "For Platforms",
      tagline: "Monetize Your User Base",
      description: [
        "Add financial services to your platform",
        "Credit, savings & payment infrastructure",
      ],
      ctaText: "Integrate API",
      badgeText: "50+ platform partners",
      colorScheme: {
        primary: "#4C2A85",
        secondary: "#361D5E",
        accent: "#9C27B0",
        overlay: "rgba(76, 42, 133, 0.5)",
        text: "#FFFFFF",
        textSecondary: "#E0E0E0",
        textAccent: "#BA68C8", // Light purple
      },
    },
  },
  {
    image: heroBg4,
    content: {
      title: "Fuel Financing",
      subtitle: "For Transport",
      tagline: "Keep Moving Forward",
      description: [
        "Fuel credit for transport businesses",
        "200+ partner stations nationwide",
      ],
      ctaText: "Get Credit",
      badgeText: "Flexible payment terms",
      colorScheme: {
        primary: "#006064",
        secondary: "#004144",
        accent: "#00ACC1",
        overlay: "rgba(0, 96, 100, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#E0F7FA", // Very light cyan
        textAccent: "#00E5FF", // Bright cyan
      },
    },
  },
  {
    image: heroBg5,
    content: {
      title: "Business Growth",
      subtitle: "Capital Solutions",
      tagline: "Smart Financing",
      description: ["Tailored SME financing", "Data-driven decisions"],
      ctaText: "Explore Loans",
      badgeText: "$10M+ disbursed",
      colorScheme: {
        primary: "#BF360C",
        secondary: "#8C2709",
        accent: "#00FFFF",
        overlay: "rgba(191, 54, 12, 0.3)",
        text: "#FFFFFF",
        textSecondary: "#FFCCBC", // Light orange
        textAccent: "#FFEA00", // Yellow
      },
    },
  },
  {
    image: heroBg6,
    content: {
      title: "Mobile Finance",
      subtitle: "For Inclusion",
      tagline: "Banking Without Banks",
      description: ["Serving the unbanked", "Mobile-first solutions"],
      ctaText: "Join Network",
      badgeText: "100K+ monthly users",
      colorScheme: {
        primary: "#1B5E20",
        secondary: "#0D3C11",
        accent: "#4CAF50",
        overlay: "rgba(27, 94, 32, 0.5)",
        text: "#FFFFFF",
        textSecondary: "#C8E6C9", // Light green
        textAccent: "#76FF03", // Bright green
      },
    },
  },
  {
    image: heroBg7,
    content: {
      title: "Data-Driven",
      subtitle: "Credit Scoring",
      tagline: "Your Behavior = Your Score",
      description: [
        "Alternative credit assessment",
        "Reaching overlooked customers",
      ],
      ctaText: "Learn More",
      badgeText: "70% no formal history",
      colorScheme: {
        primary: "#311B92",
        secondary: "#1A1260",
        accent: "#e1fb50",
        overlay: "rgba(49, 27, 146, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#D1C4E9", // Light purple
        textAccent: "#B388FF", // Bright purple
      },
    },
  },
];

const textVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction > 0 ? -50 : 50,
    opacity: 0,
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const staggerItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = setTimeout(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
      startAutoPlay();
    }, 6000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearTimeout(intervalRef.current);
    };
  }, [startAutoPlay]);

  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;

      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);

      if (intervalRef.current) clearTimeout(intervalRef.current);
      startAutoPlay();
    },
    [currentIndex, startAutoPlay]
  );

  const currentSlide = backgrounds[currentIndex];
  const { colorScheme } = currentSlide.content;

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
            }}
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Background Slideshow with Parallax Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={true} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            initial={{ opacity: 0, x: direction * 100, scale: 1.1 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction * -100, scale: 1.1 }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
              scale: { duration: 10, ease: "linear" },
            }}
            style={{
              backgroundImage: `linear-gradient(${colorScheme.overlay}, ${colorScheme.overlay}), url(${currentSlide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundAttachment: isMobile ? "scroll" : "fixed",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 z-1"
        style={{
          background: `linear-gradient(to bottom, ${colorScheme.primary}00 0%, ${colorScheme.secondary}80 100%)`,
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 text-center w-full max-w-6xl">
        <div className="flex flex-col items-center justify-center h-full px-4 sm:px-8">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={textVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
              }}
              className="w-full"
            >
              {/* Main Heading */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.h1
                  variants={staggerItem}
                  className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
                  style={{
                    textShadow: `0 2px 10px ${colorScheme.secondary}80`,
                  }}
                >
                  {currentSlide.content.title}
                </motion.h1>
                <motion.h2
                  variants={staggerItem}
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold mt-2 sm:mt-3 md:mt-4 bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(to right, white, ${colorScheme.accent})`,
                    WebkitBackgroundClip: "text",
                    textShadow: `0 2px 4px ${colorScheme.secondary}40`,
                  }}
                >
                  {currentSlide.content.subtitle}
                </motion.h2>
              </motion.div>

              {/* Animated Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-0.5 sm:h-1 w-16 sm:w-24 my-6 sm:my-8 md:my-10"
                style={{
                  background: `linear-gradient(to right, transparent, ${colorScheme.accent}, transparent)`,
                  boxShadow: `0 0 10px ${colorScheme.accent}`,
                }}
              />

              {/* Tagline */}
              <motion.p
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="text-xl sm:text-2xl md:text-3xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto font-medium mb-6 sm:mb-8"
                style={{ color: colorScheme.accent }}
              >
                {currentSlide.content.tagline}
              </motion.p>

              {/* Description */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-3 sm:space-y-4 w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl px-2 sm:px-0"
              >
                {currentSlide.content.description.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="text-sm xs:text-base sm:text-lg md:text-lg leading-relaxed sm:leading-loose"
                    style={{ textShadow: `0 1px 3px ${colorScheme.secondary}` }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-6 sm:mt-8 md:mt-10 flex flex-col items-center w-full"
          >
            {/* Highlight Badge */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm border border-white/20 text-white/95 mb-4 sm:mb-6"
              style={{ boxShadow: `0 0 15px ${colorScheme.accent}40` }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <FaCheckCircle
                  className="text-sm sm:text-base"
                  style={{ color: colorScheme.accent }}
                />
              </motion.div>
              <span className="text-xs sm:text-sm md:text-base font-medium">
                {currentSlide.content.badgeText}
              </span>
            </motion.div>

            {/* CTA Button */}
            <Link to="/apply">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 20px ${colorScheme.accent}`,
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold shadow-lg transition-all text-sm sm:text-base md:text-lg w-full max-w-xs sm:max-w-sm relative overflow-hidden"
                style={{
                  backgroundColor: colorScheme.accent,
                  color: "white",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {currentSlide.content.ctaText}
                  <motion.span
                    animate={{ x: isHovering ? [0, 5, 0] : 0 }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >
                    <FaArrowRight />
                  </motion.span>
                </span>
                <motion.span
                  className="absolute inset-0 bg-white/10"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.3, 0],
                    left: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {!isMobile && (
        <>
          <motion.button
            onClick={() =>
              goToSlide(
                (currentIndex - 1 + backgrounds.length) % backgrounds.length
              )
            }
            className="absolute left-4 sm:left-8 z-20 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
            style={{ backgroundColor: colorScheme.overlay }}
            whileHover={{
              scale: 1.1,
              backgroundColor: colorScheme.accent,
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-xl sm:text-2xl" />
          </motion.button>
          <motion.button
            onClick={() => goToSlide((currentIndex + 1) % backgrounds.length)}
            className="absolute right-4 sm:right-8 z-20 p-2 sm:p-3 rounded-full backdrop-blur-sm transition-all"
            style={{ backgroundColor: colorScheme.overlay }}
            whileHover={{
              scale: 1.1,
              backgroundColor: colorScheme.accent,
            }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <FaChevronRight className="text-xl sm:text-2xl" />
          </motion.button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3 z-10">
        {backgrounds.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            className={`rounded-full transition-all relative`}
            style={{
              width: currentIndex === index ? "24px" : "8px",
              height: "8px",
              backgroundColor:
                currentIndex === index
                  ? colorScheme.accent
                  : "rgba(255,255,255,0.5)",
            }}
            aria-label={`Go to slide ${index + 1}`}
          >
            {currentIndex === index && (
              <motion.span
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                style={{
                  boxShadow: `0 0 8px ${colorScheme.accent}`,
                }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-2 left-0 right-0 text-center z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className="text-xs text-white/80 flex items-center justify-center gap-1">
          <span>Scroll to explore</span>
          <motion.span
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.span>
        </p>
      </motion.div>

      {/* Floating Elements */}
      {!isMobile && (
        <>
          <motion.div
            className="absolute top-1/4 left-10 w-8 h-8 rounded-full z-0"
            style={{ backgroundColor: colorScheme.accent }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.4, 0],
              scale: [0, 1, 0],
              y: [0, -100],
              x: [0, 50],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-12 h-12 rounded-lg z-0"
            style={{ backgroundColor: colorScheme.accent }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0],
              rotate: [0, 180],
              y: [0, -50, 50],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-6 h-6 rounded-full z-0"
            style={{ backgroundColor: colorScheme.accent }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0, 1, 0],
              y: [0, 100],
              x: [0, -50],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "linear",
            }}
          />
        </>
      )}
    </section>
  );
}
