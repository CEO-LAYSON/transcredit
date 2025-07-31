import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import {
  FaCheckCircle,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
  FaRegDotCircle,
  FaCircle,
} from "react-icons/fa";

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
      title: "Finance Where You Are",
      subtitle: "Empowerment When You Need It",
      tagline: "TMS Microfinance Services",
      description: [
        "Revolutionizing Embedded Financial Services (EFS)",
        "Real-time access to credit across Tanzania & East Africa",
      ],
      ctaText: "Discover More",
      badgeText: "Trusted by thousands across platforms",
      colorScheme: {
        primary: "#005452",
        secondary: "#003A38",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(0, 84, 82, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
  {
    image: heroBg2,
    content: {
      title: "Motorists & Fuel Access",
      subtitle: "Fuel Credit On the Go",
      tagline: "Driving Tanzania Forward",
      description: [
        "Get credit directly at fuel stations",
        "Embedded credit for transport efficiency",
      ],
      ctaText: "Fuel Up Now",
      badgeText: "Integrated with 200+ fuel stations",
      colorScheme: {
        primary: "#1A3E6F",
        secondary: "#0D3C11",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(26, 62, 111, 0.3)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
  {
    image: heroBg3,
    content: {
      title: "Empowering Businesses",
      subtitle: "Capital Without Barriers",
      tagline: "Business Meets Finance",
      description: [
        "Instant financing for SMEs & traders",
        "Seamless access through digital channels",
      ],
      ctaText: "Apply for Capital",
      badgeText: "$100M+ disbursed",
      colorScheme: {
        primary: "#005452",
        secondary: "#003A38",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(0, 84, 82, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
  {
    image: heroBg4,
    content: {
      title: "Digital Platforms",
      subtitle: "Monetize with Embedded Finance",
      tagline: "Your Platform, Now Financial",
      description: [
        "Integrate credit & savings APIs",
        "Boost user engagement & loyalty",
      ],
      ctaText: "Partner With Us",
      badgeText: "50+ digital platforms integrated",
      colorScheme: {
        primary: "#311B92",
        secondary: "#1A1260",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(49, 27, 146, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
  {
    image: heroBg5,
    content: {
      title: "TMS Embedded Systems",
      subtitle: "Everywhere You Go",
      tagline: "Credit in Your Pocket",
      description: [
        "Now available in mobile apps & smart devices",
        "Seamless integration with daily routines",
      ],
      ctaText: "Use On the Go",
      badgeText: "📲 Available on apps & smart stations",
      colorScheme: {
        primary: "#005452",
        secondary: "#003A38",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(0, 84, 82, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
  {
    image: heroBg6,
    content: {
      title: "Financial Inclusion",
      subtitle: "Serving the Unbanked",
      tagline: "Empowering Every Tanzanian",
      description: [
        "Bridging financial gaps with mobile-first credit",
        "Expanding access beyond traditional banks",
      ],
      ctaText: "Join the Network",
      badgeText: "2K+ active monthly users",
      colorScheme: {
        primary: "#1B5E20",
        secondary: "#0D3C11",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(27, 94, 32, 0.5)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
  {
    image: heroBg7,
    content: {
      title: "Need Meets Opportunity",
      subtitle: "Data-Driven Credit Decisions",
      tagline: "Smarter Lending for Everyone",
      description: [
        "Credit tailored to behavior, not just history",
        "Unlocking potential for underserved segments",
      ],
      ctaText: "Start Scoring",
      badgeText: "AI-based risk scoring system",
      colorScheme: {
        primary: "#311B92",
        secondary: "#1A1260",
        accent: "#E63946", // Vibrant red
        overlay: "rgba(49, 27, 146, 0.4)",
        text: "#FFFFFF",
        textSecondary: "#F1FAEE",
        textAccent: "#FFFFFF",
      },
    },
  },
];

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
      when: "beforeChildren" as const,
    },
  },
};

const staggerItem = {
  hidden: {
    y: 40,
    opacity: 0,
    scale: 0.95,
    filter: "blur(2px)",
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 120,
      damping: 12,
    },
  },
};

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: "spring" as const, stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  }),
};

const floatingVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimation();
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = useCallback(() => {
    intervalRef.current = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % backgrounds.length);
    }, 7000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const goToSlide = useCallback(
    (index: number) => {
      const newDirection = index > currentIndex ? 1 : -1;
      setDirection(newDirection);
      setCurrentIndex(index);

      if (intervalRef.current) window.clearInterval(intervalRef.current);
      startAutoPlay();
    },
    [currentIndex, startAutoPlay]
  );

  const currentSlide = backgrounds[currentIndex];
  const { colorScheme } = currentSlide.content;

  const handleHoverStart = () => {
    controls.start("hover");
    setIsHovering(true);
  };

  const handleHoverEnd = () => {
    controls.start("rest");
    setIsHovering(false);
  };

  const particles = Array.from({ length: 30 }).map((_, i) => {
    const size = Math.random() * 8 + 4;
    return (
      <motion.div
        key={i}
        className="absolute rounded-full bg-white/20 backdrop-blur-sm"
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          width: size,
          height: size,
          opacity: 0,
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
          opacity: [0, 0.8, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: Math.random() * 25 + 15,
          repeat: Infinity,
          repeatDelay: Math.random() * 5,
          ease: "linear",
        }}
      />
    );
  });

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden text-white"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Particle Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">{particles}</div>

      {/* Background Slideshow */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{
              backgroundImage: `linear-gradient(${colorScheme.overlay}, ${colorScheme.overlay}), url(${currentSlide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              style={{
                background: `linear-gradient(135deg, ${colorScheme.primary}20 0%, ${colorScheme.secondary}80 100%)`,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Main Content - Centered Layout */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 h-full flex flex-col justify-center items-center text-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            className="w-full max-w-4xl"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
            >
              {/* Main Title */}
              <motion.h1
                variants={staggerItem}
                className="text-4xl xs:text-5xl sm:text-6xl font-bold leading-tight mb-2"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Clash Display', sans-serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {currentSlide.content.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                variants={staggerItem}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Clash Display', sans-serif",
                  textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                }}
              >
                {currentSlide.content.subtitle}
              </motion.h2>

              {/* Divider Line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                  scaleX: 1,
                  boxShadow: `0 0 15px ${colorScheme.accent}`,
                }}
                transition={{
                  delay: 0.4,
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="h-1 w-24 sm:w-32 my-4 mx-auto"
                style={{
                  background: `linear-gradient(90deg, transparent, ${colorScheme.accent}, transparent)`,
                }}
              />

              {/* Tagline */}
              <motion.p
                variants={floatingVariants}
                animate="float"
                className="text-xl sm:text-2xl italic mb-8"
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                  textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                {currentSlide.content.tagline}
              </motion.p>

              {/* Description Points */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="space-y-3 mb-8"
              >
                {currentSlide.content.description.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    variants={staggerItem}
                    className="text-lg sm:text-xl"
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "'Inter', sans-serif",
                      textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Badge and CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <motion.div
                variants={floatingVariants}
                animate="pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-6"
                style={{
                  boxShadow: `0 0 20px ${colorScheme.accent}60`,
                }}
              >
                <motion.div
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  <FaCheckCircle
                    className="text-lg"
                    style={{
                      color: colorScheme.accent,
                      filter: `drop-shadow(0 0 5px ${colorScheme.accent})`,
                    }}
                  />
                </motion.div>
                <span
                  className="text-sm sm:text-base font-medium"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {currentSlide.content.badgeText}
                </span>
              </motion.div>

              <a href="#contact">
                <motion.button
                  initial={{ scale: 0.95 }}
                  animate={{
                    scale: 1,
                    boxShadow: `0 0 0 ${colorScheme.accent}`,
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: `0 0 30px ${colorScheme.accent}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 rounded-full font-bold text-lg w-full max-w-xs relative overflow-hidden group"
                  style={{
                    backgroundColor: "#B00000", // Deep red color
                  }}
                >
                  <span
                    className="relative z-10 flex items-center justify-center gap-3 uppercase"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    {currentSlide.content.ctaText}
                    <motion.span
                      animate={{
                        x: isHovering ? [0, 8, 0] : 0,
                        rotate: isHovering ? [0, 360] : 0,
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    >
                      <FaArrowRight />
                    </motion.span>
                  </span>
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{
                      x: ["-100%", "100%"],
                      opacity: [0, 0.4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.button>
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <motion.div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 z-20 px-4 sm:px-6 flex justify-between">
        <motion.button
          onClick={() =>
            goToSlide(
              (currentIndex - 1 + backgrounds.length) % backgrounds.length
            )
          }
          className="p-3 sm:p-4 rounded-full backdrop-blur-md"
          style={{
            backgroundColor: colorScheme.overlay,
            color: "#FFFFFF",
          }}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#B00000", // Deep red color
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="text-xl sm:text-2xl" />
        </motion.button>

        <motion.button
          onClick={() => goToSlide((currentIndex + 1) % backgrounds.length)}
          className="p-3 sm:p-4 rounded-full backdrop-blur-md"
          style={{
            backgroundColor: colorScheme.overlay,
            color: "#FFFFFF",
          }}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#B00000", // Deep red color
          }}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="text-xl sm:text-2xl" />
        </motion.button>
      </motion.div>

      {/* Slide Indicators */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {backgrounds.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative p-1"
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.8 }}
          >
            {currentIndex === index ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              >
                <FaCircle
                  className="text-xs sm:text-sm"
                  style={{
                    color: "#B00000", // Deep red color
                    filter: `drop-shadow(0 0 5px #B00000)`,
                  }}
                />
              </motion.div>
            ) : (
              <FaRegDotCircle
                className="text-xs sm:text-sm"
                style={{
                  color: "#FFFFFF",
                  filter: `drop-shadow(0 0 3px ${colorScheme.secondary}40)`,
                }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-0 right-0 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0],
          y: [10, 0, -10],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p
          className="text-xs sm:text-sm flex items-center justify-center gap-2"
          style={{
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <motion.span
            animate={{
              y: [0, 5, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore
          </motion.span>
          <motion.span
            animate={{
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          >
            ↓
          </motion.span>
        </p>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-10 h-10 rounded-full z-0"
        style={{
          backgroundColor: "#B00000", // Deep red color
          filter: `blur(10px)`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.3, 0],
          scale: [0, 1, 0],
          x: ["-50%", "-30%", "-50%"],
          y: ["-50%", "-70%", "-50%"],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-lg z-0"
        style={{
          backgroundColor: "#B00000", // Deep red color
          filter: `blur(8px)`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.2, 0],
          scale: [0, 1, 0],
          x: ["50%", "70%", "50%"],
          y: ["50%", "30%", "50%"],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />

      <motion.div
        className="absolute top-1/3 right-1/5 w-8 h-8 rounded-full z-0"
        style={{
          backgroundColor: "#FFFFFF",
          filter: `blur(6px)`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.15, 0],
          scale: [0, 0.8, 0],
          x: ["40%", "60%", "40%"],
          y: ["-30%", "-50%", "-30%"],
          rotate: [0, 90, 180],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 3,
        }}
      />
    </section>
  );
};

export default HeroSection;
