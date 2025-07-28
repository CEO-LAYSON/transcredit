import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Transcredit Microfinance Services
            </h3>
            <p className="text-gray-400 mb-6">
              Empowering Growth through Embedded Financial Services across East
              Africa
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/tmstanzania/"
                className="text-gray-400 hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/tmsmafuta"
                className="text-gray-400 hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/tmstanzania/"
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
                  href="#home"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  className="text-gray-400 hover:text-white transition"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#contact"
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
                <Link
                  to="/privacy-terms"
                  className="text-gray-400 hover:text-white transition"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/inuka-funds-terms-and-conditions"
                  className="text-gray-400 hover:text-white transition"
                >
                  Inuka Fund Loan Terms
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition"
                >
                  FAQ
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
                <Link
                  to="/apply"
                  className="text-gray-400 hover:text-white transition"
                >
                  Become a Partner
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Transcredit Microfinance Services. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Terms of Use | Effective Date: 14th February 2025
          </p>
        </div>
      </div>
    </footer>
  );
}
