import { motion } from "framer-motion";
export default function HowItWorks() {
  return (
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
  );
}
