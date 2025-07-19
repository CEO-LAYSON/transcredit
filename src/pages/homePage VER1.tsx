import { motion } from "framer-motion";
import {
  FaGasPump,
  FaBusinessTime,
  FaFirstAid,
  FaCode,
  FaCheckCircle,
  FaHandshake,
  FaQuoteLeft,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

// Background images (replace with your actual image paths)
import heroBg from "../assets/hero-bg3.jpg";
import aboutBg from "./assets/about-bg.jpg";
import partnersBg from "./assets/partners-bg.jpg";

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section with Parallax Effect */}
      <section
        className="relative min-h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 84, 82, 0.85), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>

        <div className="container mx-auto px-6 z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                Transcredit Microfinance Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-light">
                Empowering Growth through Embedded Financial Services
              </p>

              <div className="w-24 h-1 bg-white mx-auto mb-12"></div>

              <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                Finance Where You Are. <br /> Empowerment When You Need It.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-lg mb-8">
                TMS is pioneering Embedded Financial Services (EFS) across
                Tanzania and East Africa—enabling real-time access to credit
                directly through the platforms people use every day.
              </p>

              <p className="text-lg mb-12">
                Whether you're a motorist in need of fuel, a business looking
                for capital, or a digital platform with thousands of users,{" "}
                <span className="font-semibold">
                  TMS bridges the gap between need and opportunity.
                </span>
              </p>

              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                  <FaCheckCircle className="mr-2 text-xl text-green-300" />
                  <span>
                    Now embedded in platforms, fuel stations, and mobile apps
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all flex items-center mx-auto"
              >
                Become a Partner
                <span className="ml-2">→</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white text-2xl"
          >
            ↓
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <section
        className="py-28 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-4"
            >
              About Us
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transforming financial services across East Africa through
              innovative technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:pr-12"
            >
              <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                Who We Are
              </h3>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Transcredit Microfinance Services is a digitally-driven
                Tanzanian microfinance institution transforming traditional
                lending through{" "}
                <span className="font-semibold text-primary">
                  embedded credit services
                </span>
                . Our focus is on empowering underserved individuals and
                businesses by integrating credit into digital ecosystems where
                customers already operate.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe{" "}
                <span className="font-semibold text-primary">
                  finance should be instant, accessible, and useful
                </span>
                —not trapped behind long forms or bank queues.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="mb-10 pb-10 border-b border-gray-100">
                <h4 className="text-2xl font-semibold mb-4 text-primary">
                  Our Vision
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To be East Africa's{" "}
                  <span className="font-semibold">
                    most innovative provider of Embedded Financial Services
                  </span>
                  , supporting financial inclusion, business growth, and
                  economic resilience.
                </p>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 text-primary">
                  Our Mission
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  To unlock financial access through{" "}
                  <span className="font-semibold">
                    smart, personalized, and technology-enabled microfinance
                  </span>{" "}
                  embedded into platforms used daily by individuals and
                  businesses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-4"
            >
              Our Services
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative financial solutions designed for your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Fuel Loans */}
            <motion.div
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-primary text-5xl mb-6">
                <FaGasPump />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Fuel Loans
              </h3>
              <p className="mb-6 text-gray-600">
                Refuel now and pay later with our seamless fuel credit
                solutions.
              </p>

              <h4 className="font-semibold mb-3 text-gray-800">
                Key Features:
              </h4>
              <ul className="space-y-3 mb-6">
                {[
                  "Simple mobile-based application",
                  "No collateral required",
                  "Direct disbursement to fuel stations",
                  "Flexible repayment options",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-2 text-gray-800">Ideal for:</h4>
              <div className="flex flex-wrap gap-2">
                {["Boda-boda", "Logistics", "Taxis", "Bajaj", "Commuters"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </motion.div>

            {/* MSME Financing */}
            <motion.div
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-primary text-5xl mb-6">
                <FaBusinessTime />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                MSME Financing
              </h3>
              <p className="mb-6 text-gray-600">
                Working capital solutions to help your business grow.
              </p>

              <h4 className="font-semibold mb-3 text-gray-800">
                Loan Options:
              </h4>
              <ul className="space-y-3 mb-6">
                {[
                  "Inventory financing",
                  "Short-term working capital",
                  "Business float/top-up",
                  "Customized solutions",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold mb-2 text-gray-800">For:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Retailers",
                  "Agents",
                  "Shop Owners",
                  "Traders",
                  "Agents",
                ].map((tag, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Emergency Loans */}
            <motion.div
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-primary text-5xl mb-6">
                <FaFirstAid />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Emergency Loans
              </h3>
              <p className="mb-6 text-gray-600">
                Fast financial support when you need it most.
              </p>

              <h4 className="font-semibold mb-3 text-gray-800">Covers:</h4>
              <ul className="space-y-3 mb-6">
                {[
                  "Medical expenses",
                  "School fees",
                  "Home repairs",
                  "Business emergencies",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  Credit decisions made using behavior-based data for fast
                  approvals.
                </p>
              </div>
            </motion.div>

            {/* Embedded APIs */}
            <motion.div
              whileHover={{ y: -15 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="text-primary text-5xl mb-6">
                <FaCode />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Embedded APIs
              </h3>
              <p className="mb-6 text-gray-600">
                Integrate credit solutions directly into your platform.
              </p>

              <h4 className="font-semibold mb-3 text-gray-800">We Offer:</h4>
              <ul className="space-y-3 mb-8">
                {[
                  "Seamless loan APIs",
                  "Instant decision-making",
                  "Performance dashboards",
                  "Developer support",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-dark transition-all flex items-center justify-center">
                Contact Us
                <FiSend className="ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-28 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              How It Works
            </motion.h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Simple steps to access the financial support you need
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Sign Up",
                desc: "Register directly or through any of our partner platforms.",
                icon: "01",
              },
              {
                title: "Assessment",
                desc: "We use platform behavior or mobile transaction data to assess loan eligibility. No collateral required.",
                icon: "02",
              },
              {
                title: "Disbursement",
                desc: "Loans are disbursed through mobile money, direct fuel station credit, or platform wallet.",
                icon: "03",
              },
              {
                title: "Repayment",
                desc: "Automatic or manual repayment using the same channels with alerts and reminders.",
                icon: "04",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:backdrop-blur-md transition-all border border-white/10"
              >
                <div className="text-4xl font-bold mb-6 text-white/20">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="opacity-90">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Start Your Application
            </motion.button>
          </div>
        </div>
      </section>

      {/* Why Choose TMS */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-4"
            >
              Why Choose TMS
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover what makes our financial solutions stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Embedded Convenience",
                desc: "Credit where you already are: fuel stations, mobile apps, or savings groups.",
              },
              {
                title: "Flexible & Inclusive",
                desc: "Personalized loans designed for real-world needs and diverse users.",
              },
              {
                title: "Partner-Driven",
                desc: "We scale through trusted local and digital partnerships across East Africa.",
              },
              {
                title: "Fast Disbursement",
                desc: "Access money or fuel in minutes, not days.",
              },
              {
                title: "Reliable Technology",
                desc: "Fully automated system with 99.9% uptime and robust API integrations.",
              },
              {
                title: "Data Security",
                desc: "Bank-level encryption and compliance with all financial regulations.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all border-l-4 border-primary"
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4">
                    <FaCheckCircle className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-4"
            >
              Why Partner With Us
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your platform into a financial enabler with our embedded
              solutions
            </p>
          </div>

          <div className="max-w-5xl mx-auto mb-16 text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700"
            >
              If you run a platform, network, or app with an active user base,
              TMS helps you offer instant, embedded credit to your users,
              turning your platform into a financial enabler.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "New Revenue Streams",
                desc: "Monetize users by earning through interest share and increased transactions.",
                icon: "💸",
              },
              {
                title: "User Loyalty",
                desc: "Credit solutions increase platform usage and repeat engagement by 3x.",
                icon: "❤️",
              },
              {
                title: "Zero Lending Burden",
                desc: "We handle approvals, disbursements, collections, and reporting.",
                icon: "🏋️",
              },
              {
                title: "Boost Transactions",
                desc: "Users with access to credit transact more—buying more goods and services.",
                icon: "📈",
              },
              {
                title: "Quick Integration",
                desc: "Developer-friendly APIs with full documentation and support.",
                icon: "⚡",
              },
              {
                title: "Smart Decisions",
                desc: "Behavior-based scoring using your platform data—fair and adaptive.",
                icon: "🧠",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        className="py-28 text-white relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 84, 82, 0.9), url(${partnersBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4"
            >
              Our Partners
            </motion.h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              We work with a broad range of platforms that help us deliver
              embedded finance at the last mile
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fuel & Logistics",
                desc: "Offer pay-later fuel options for drivers and fleet operators.",
                icon: <FaGasPump className="text-2xl" />,
              },
              {
                title: "SACCOs & Groups",
                desc: "Digitize and automate member credit access and management.",
                icon: <FaHandshake className="text-2xl" />,
              },
              {
                title: "E-commerce",
                desc: "Enable inventory financing and vendor credit for marketplaces.",
                icon: <FaBusinessTime className="text-2xl" />,
              },
              {
                title: "Digital Wallets",
                desc: "Provide float loans and business top-ups for agents.",
                icon: "💳",
              },
              {
                title: "Healthcare",
                desc: "Embed emergency medical loans directly into service platforms.",
                icon: <FaFirstAid className="text-2xl" />,
              },
              {
                title: "Education",
                desc: "School fee financing integrated with education portals.",
                icon: "🎓",
              },
            ].map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/10 p-8 rounded-xl backdrop-blur-sm hover:backdrop-blur-md transition-all border border-white/10"
              >
                <div className="text-3xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{partner.title}</h3>
                <p className="opacity-90">{partner.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-20">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all"
            >
              Partner with Us
            </motion.button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-4"
            >
              What Our Partners Say
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Success stories from our growing network of partners and customers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "TMS helped me keep my boda-boda business going when I ran out of fuel. Repayment was easy and flexible!",
                author: "John, Driver",
                location: "Dar es Salaam",
              },
              {
                quote:
                  "Our agents now access float loans directly through our app—thanks to TMS integration. Our transaction volume increased by 40%.",
                author: "Platform Partner",
                location: "Arusha",
              },
              {
                quote:
                  "Stocking my kiosk became easier. I get inventory now and repay after I sell. My business has grown 3x since using TMS.",
                author: "Asha, Shop Owner",
                location: "Mwanza",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="mb-6">
                  <div className="text-primary text-4xl opacity-20 mb-4">
                    <FaQuoteLeft />
                  </div>
                  <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="font-semibold text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-primary mb-4"
            >
              Contact Us
            </motion.h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get in touch to learn more about our solutions and partnership
              opportunities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-10 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-8 text-gray-800">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-4 rounded-lg font-medium hover:bg-primary-dark transition-all flex items-center justify-center"
                >
                  Send Message
                  <FiSend className="ml-2" />
                </motion.button>
              </form>
            </div>

            <div>
              <div className="bg-white p-10 rounded-2xl shadow-lg mb-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                  Office Address
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        Transcredit Microfinance Services
                      </p>
                      <p className="text-gray-600">P.O. Box 105798</p>
                      <p className="text-gray-600">Dar Es Salaam, Tanzania</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <FaPhoneAlt className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">+255 742411411</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@transcredit.co.tz</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <FaGlobe className="text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Website</p>
                      <p className="text-gray-600">www.transcredit.co.tz</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://facebook.com/trustanzania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all"
                  >
                    <FaFacebookF />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://twitter.com/trustanzania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full text-gray-700 hover:bg-blue-400 hover:text-white transition-all"
                  >
                    <FaTwitter />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://linkedin.com/company/trusmafuta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <FaLinkedinIn />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://instagram.com/trustanzania"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-4 rounded-full text-gray-700 hover:bg-pink-600 hover:text-white transition-all"
                  >
                    <FaInstagram />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-20 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">
                Transcredit Microfinance Services
              </h3>
              <p className="text-gray-400 mb-6">
                Empowering Growth through Embedded Financial Services across
                East Africa
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Legal & Support</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Compliance
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6">Our Partners</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Inuka Fund
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Become a Partner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition"
                  >
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Transcredit Microfinance Services.
              All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Terms of Use | Effective Date: 14th February 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
