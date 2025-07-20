import { motion } from "framer-motion";
export default function WhyPartnering() {
  return (
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
            If you run a platform, network, or app with an active user base, TMS
            helps you offer instant, embedded credit to your users, turning your
            platform into a financial enabler.
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
  );
}
