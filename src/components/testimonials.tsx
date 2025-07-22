import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-white">
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
  );
}
