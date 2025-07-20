import { motion } from "framer-motion";
import aboutBg from "../assets/hero-bg1.jpg";

export default function AboutUs() {
  return (
    <section
      className="py-28 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.96)), url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            About Us
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Transforming financial services across East Africa through
            <span className="font-medium text-primary">
              {" "}
              innovative technology
            </span>
          </p>
        </motion.div>

        {/* Grid Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Who We Are
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Transcredit Microfinance Services is a digitally-driven Tanzanian
              microfinance institution transforming traditional lending through
              <span className="font-semibold text-primary">
                {" "}
                embedded credit services
              </span>
              . Our focus is on empowering underserved individuals and
              businesses by integrating credit into digital ecosystems where
              customers already operate.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We believe
              <span className="font-semibold text-primary">
                {" "}
                finance should be instant, accessible, and useful
              </span>{" "}
              — not trapped behind long forms or bank queues.
            </p>
          </motion.div>

          {/* Right Column - Vision and Mission */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl shadow-xl p-10"
          >
            <div className="mb-10 pb-8 border-b border-gray-200">
              <h4 className="text-2xl font-semibold text-primary mb-3">
                Our Vision
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                To be East Africa’s
                <span className="font-semibold">
                  {" "}
                  most innovative provider of Embedded Financial Services
                </span>
                , supporting financial inclusion, business growth, and economic
                resilience.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-semibold text-primary mb-3">
                Our Mission
              </h4>
              <p className="text-gray-700 text-base leading-relaxed">
                To unlock financial access through
                <span className="font-semibold">
                  {" "}
                  smart, personalized, and technology-enabled microfinance
                </span>
                , embedded into platforms used daily by individuals and
                businesses.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
