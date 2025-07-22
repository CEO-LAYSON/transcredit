import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
export default function WhyTms() {
  return (
    <section id="why-tms" className="py-28 bg-white">
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
  );
}
