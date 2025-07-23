import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaHome, FaSadTear, FaRocket } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function NotFoundPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [exploded, setExploded] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const constraintsRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.5 });

  // Initialize animation sequences
  useEffect(() => {
    const explosionTimer = setTimeout(() => setExploded(true), 1500);
    const countAnimation = animate(count, 404, { duration: 2 });

    return () => {
      clearTimeout(explosionTimer);
      countAnimation.stop();
    };
  }, [count]);

  // Handle responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Particle explosion component
  const ParticleExplosion = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(exploded ? (isMobile ? 50 : 100) : 0)].map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const distance = Math.random() * 400 + 200;
        const size = Math.random() * 15 + 5;
        const delay = Math.random() * 0.5;

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0
                ? "bg-[#D20000]"
                : i % 2 === 0
                ? "bg-[#00a8a5]"
                : "bg-white"
            }`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              x: 0,
              y: 0,
              originX: 0.5,
              originY: 0.5,
            }}
            initial={{ opacity: 1, scale: 0 }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              opacity: [1, 1, 0],
              scale: [0, 1, 0.5],
              rotate: [0, Math.random() * 360],
            }}
            transition={{
              duration: 1.5,
              delay,
              ease: [0.2, 0.8, 0.4, 1],
            }}
          />
        );
      })}
    </div>
  );

  // Floating interactive elements
  const FloatingElements = () => (
    <>
      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#00a8a5]/20 backdrop-blur-sm border-2 border-[#00a8a5] shadow-lg cursor-grab flex items-center justify-center"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaRocket className="text-[#00a8a5] text-xl" />
      </motion.div>

      <motion.div
        drag
        dragConstraints={constraintsRef}
        className="absolute bottom-1/3 right-1/4 w-20 h-20 rounded-full bg-[#D20000]/20 backdrop-blur-sm border-2 border-[#D20000] shadow-lg cursor-grab flex items-center justify-center"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <FaSadTear className="text-[#D20000] text-2xl" />
      </motion.div>
    </>
  );

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-[#005452] to-[#003d3b] text-white overflow-hidden relative"
      ref={constraintsRef}
    >
      {/* Particle Canvas */}
      <ParticleExplosion />

      {/* Floating interactive elements */}
      <FloatingElements />

      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.005 }}
            />
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          ref={ref}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", damping: 15, stiffness: 100 }}
          className="text-center max-w-2xl relative"
        >
          {/* Animated 404 number with counter */}
          <motion.div className="relative">
            <motion.h1 className="text-7xl sm:text-8xl md:text-9xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00a8a5] to-[#D20000]">
              {rounded}
            </motion.h1>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#00a8a5] to-[#D20000] opacity-20 blur-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 0.3 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>

          {/* Glitch text effect */}
          <motion.div className="relative overflow-hidden h-16 sm:h-20 mb-6">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white absolute inset-0"
              animate={{
                y: [0, -5, 5, -3, 3, 0],
                opacity: [1, 0.8, 0.9, 0.7, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatDelay: 5,
              }}
            >
              {isMobile ? "Page Not Found" : "Critical Navigation Failure"}
            </motion.h2>
            {[...Array(3)].map((_, i) => (
              <motion.h2
                key={i}
                className={`text-2xl sm:text-3xl md:text-4xl font-bold absolute inset-0 ${
                  i % 2 === 0 ? "text-[#00a8a5]" : "text-[#D20000]"
                }`}
                initial={{ x: 0, opacity: 0 }}
                animate={{
                  x: [0, -10, 10, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 0.3,
                  repeatDelay: 5,
                }}
              >
                {isMobile ? "Page Not Found" : "Critical Navigation Failure"}
              </motion.h2>
            ))}
          </motion.div>

          {/* Holographic message */}
          <motion.div
            className="relative mb-8 sm:mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.p
              className="text-lg sm:text-xl text-white/90 relative z-10"
              animate={{
                textShadow: [
                  "0 0 5px rgba(255,255,255,0.3)",
                  "0 0 10px rgba(0,168,165,0.5)",
                  "0 0 15px rgba(210,0,0,0.5)",
                  "0 0 5px rgba(255,255,255,0.3)",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              {isMobile
                ? "This dimension doesn't exist."
                : "Warning: The requested coordinates don't match any known dimensions in our universe."}
            </motion.p>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-[#00a8a5]/20 to-[#D20000]/20 rounded-lg blur-md"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Quantum buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            <Link
              to="/"
              className="relative overflow-hidden group flex items-center justify-center px-8 py-3 sm:py-4 bg-[#D20000] rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500 isolate"
            >
              <motion.span
                className="absolute inset-0 bg-[#b30000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.span
                className="absolute -inset-0.5 bg-[#000000] rounded-lg blur opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                animate={{
                  x: [-10, 10, -10],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10 flex items-center">
                {isMobile ? (
                  <FaHome className="mr-2" />
                ) : (
                  <FaArrowLeft className="mr-3" />
                )}
                {isMobile ? "Return home" : "Back to home"}
              </span>
            </Link>

            <Link
              to="/"
              className="relative overflow-hidden group flex items-center justify-center px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <motion.span
                className="absolute inset-0 bg-[#000000] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <motion.span
                className="absolute -inset-0.5 bg-[#D20000] rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                animate={{
                  x: [5, -5, 5],
                  y: [-3, 3, -3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <span className="relative z-10">Request Rescue</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Interactive brand signature */}
        <motion.div
          className="absolute bottom-8 opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          drag
          dragConstraints={constraintsRef}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00a8a5] to-white">
            Transcredit
          </h3>
          <p className="text-center text-lg sm:text-xl text-white/80">
            Microfinance Services
          </p>
        </motion.div>
      </div>
    </div>
  );
}
