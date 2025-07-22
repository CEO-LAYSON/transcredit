import { motion } from "framer-motion";
import {
  FaGasPump,
  FaBusinessTime,
  FaFirstAid,
  FaHandshake,
} from "react-icons/fa";
import partnersBg from "../assets/hero-bg2.jpg";

export default function OurPartners() {
  return (
    <section
      id="partners"
      className="relative py-28 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 84, 82, 0.92), rgba(0, 84, 82, 0.92)), url(${partnersBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Our Partners
          </h2>
          <div className="h-1 w-20 bg-white mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90">
            We work with a broad range of platforms that help us deliver
            embedded finance at the last mile.
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Fuel & Logistics",
              desc: "Offer pay-later fuel options for drivers and fleet operators.",
              icon: <FaGasPump className="text-3xl text-yellow-300" />,
            },
            {
              title: "SACCOs & Groups",
              desc: "Digitize and automate member credit access and management.",
              icon: <FaHandshake className="text-3xl text-green-300" />,
            },
            {
              title: "E-commerce",
              desc: "Enable inventory financing and vendor credit for marketplaces.",
              icon: <FaBusinessTime className="text-3xl text-blue-300" />,
            },
            {
              title: "Digital Wallets",
              desc: "Provide float loans and business top-ups for agents.",
              icon: <span className="text-3xl">💳</span>,
            },
            {
              title: "Healthcare",
              desc: "Embed emergency medical loans directly into service platforms.",
              icon: <FaFirstAid className="text-3xl text-red-300" />,
            },
            {
              title: "Education",
              desc: "School fee financing integrated with education portals.",
              icon: <span className="text-3xl">🎓</span>,
            },
          ].map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/10 p-8 rounded-2xl backdrop-blur-md hover:shadow-lg hover:backdrop-blur-xl transition-all"
            >
              <div className="mb-5">{partner.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{partner.title}</h3>
              <p className="text-sm opacity-90">{partner.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-all"
          >
            Partner with Us →
          </motion.button>
        </div>
      </div>
    </section>
  );
}
