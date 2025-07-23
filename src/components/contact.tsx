import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create email content
    const subject = encodeURIComponent(
      formData.subject || "Contact Form Submission"
    );
    const body = encodeURIComponent(
      `Dear Transcredit Team,\n\n` +
        `${formData.message}\n\n` +
        `Best regards,\n${formData.name}\n` +
        `Email: ${formData.email}`
    );

    // Open Gmail compose window
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=info@transcredit.co.tz&su=${subject}&body=${body}`,
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-28 bg-gray-50">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your email"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Subject"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your message"
                  required
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
                  href="https://www.facebook.com/tmstanzania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-4 rounded-full text-gray-700 hover:bg-primary hover:text-white transition-all"
                >
                  <FaFacebookF />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.linkedin.com/company/tmsmafuta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 p-4 rounded-full text-gray-700 hover:bg-blue-600 hover:text-white transition-all"
                >
                  <FaLinkedinIn />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="https://www.instagram.com/tmstanzania/"
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
  );
}
