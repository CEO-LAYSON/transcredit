import { motion } from "framer-motion";
import heroBg from "../assets/hero-bg3.jpg";
import { FaCheckCircle } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 84, 82, 0.8), rgba(0, 84, 82, 0.8)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional darker overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="container mx-auto px-6 z-10 py-24 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Transcredit Microfinance Services
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-white/90 font-light">
            Empowering Growth through Embedded Financial Services
          </p>

          {/* Decorative gradient divider */}
          <div className="h-1 w-16 bg-gradient-to-r from-white/30 to-white/70 mx-auto my-8 rounded-full" />

          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 font-medium">
            Finance Where You Are. Empowerment When You Need It.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 space-y-6"
        >
          <p className="text-base md:text-lg text-white/80">
            TMS is pioneering Embedded Financial Services (EFS) across Tanzania
            and East Africa — enabling real-time access to credit directly
            through the platforms people use every day.
          </p>

          <p className="text-base md:text-lg text-white/80">
            Whether you're a motorist in need of fuel, a business looking for
            capital, or a digital platform with thousands of users,{" "}
            <span className="font-semibold text-white">
              TMS bridges the gap between need and opportunity.
            </span>
          </p>

          {/* Highlight Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20 text-white/90">
            <FaCheckCircle className="text-green-300" />
            <span className="text-sm md:text-base font-medium">
              Now embedded in platforms, fuel stations, and mobile apps
            </span>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition-all"
          >
            Become a Partner →
          </motion.button>
        </motion.div>
      </div>

      {/* Animated scroll hint */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white text-2xl"
        >
          <span className="animate-bounce">↓</span>
        </motion.div>
      </div>
    </section>
  );
}
