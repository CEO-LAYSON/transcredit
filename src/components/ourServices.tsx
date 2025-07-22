import { motion } from "framer-motion";
import {
  FaGasPump,
  FaBusinessTime,
  FaFirstAid,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function OurServices() {
  return (
    <section id="services" className="py-28 bg-white">
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
              Refuel now and pay later with our seamless fuel credit solutions.
            </p>

            <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
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

            <h4 className="font-semibold mb-3 text-gray-800">Loan Options:</h4>
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
              {["Retailers", "Agents", "Shop Owners", "Traders", "Agents"].map(
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
  );
}
