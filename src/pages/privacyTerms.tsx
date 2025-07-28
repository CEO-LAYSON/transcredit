import { motion } from "framer-motion";
import {
  FiShield,
  FiLock,
  FiDatabase,
  FiUserCheck,
  FiAlertTriangle,
} from "react-icons/fi";

export default function PrivacyTerms() {
  return (
    <>
      <main className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Section */}
          <motion.div
            className="bg-gradient-to-r from-[#004a48] to-[#027a70] rounded-xl p-8 mb-12 text-white shadow-xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  <span className="block">Privacy & Terms for</span>
                  <span className="block">Emergency Loan Services</span>
                </h1>
                <div className="flex items-center mt-4">
                  <FiShield className="mr-2" size={20} />
                  <p className="text-lg opacity-90">
                    Your Data Protection Rights
                  </p>
                </div>
              </div>
              <div className="bg-white/15 p-4 rounded-lg border border-white/25 shadow-sm">
                <p className="text-sm font-medium mb-1 text-white/90">
                  Effective Date
                </p>
                <p className="text-xl font-semibold text-white">
                  February 14, 2025
                </p>
              </div>
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-start mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                <FiLock className="text-blue-600" size={24} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#005452] mb-3">
                  Our Commitment to Your Privacy
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Transcredit Microfinance Services (TMS) and our partner
                  platforms are committed to protecting your personal
                  information. These Privacy Terms explain how we collect, use,
                  and safeguard your data when you use our emergency loan
                  services.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                  <h3 className="font-medium text-blue-800 mb-2">
                    Key Principles:
                  </h3>
                  <ul className="text-blue-700 space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span>
                        We only collect necessary data for loan processing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span>
                        Your information is protected with industry-standard
                        security
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span>We never sell your data to third parties</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Privacy Sections */}
          <div className="space-y-8">
            {/* Data Collection Section */}
            <motion.section
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center">
                <FiDatabase className="text-[#005452] mr-3" size={20} />
                <h2 className="text-xl font-semibold text-gray-800">
                  1. Information We Collect
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    When you apply for an emergency loan through our partner
                    platforms, we collect:
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                      <strong>Personal Identification:</strong> Full name, date
                      of birth, government-issued ID details
                    </li>
                    <li>
                      <strong>Contact Information:</strong> Phone number, email
                      address, physical address
                    </li>
                    <li>
                      <strong>Financial Data:</strong> Account balances,
                      transaction history, repayment capacity
                    </li>
                    <li>
                      <strong>Device Information:</strong> IP address, device
                      type, operating system for security purposes
                    </li>
                    <li>
                      <strong>Usage Data:</strong> How you interact with our
                      loan services on the partner platform
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Data Use Section */}
            <motion.section
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50 flex items-center">
                <FiUserCheck className="text-[#005452] mr-3" size={20} />
                <h2 className="text-xl font-semibold text-gray-800">
                  2. How We Use Your Information
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    Your data is used exclusively for providing and improving
                    our loan services:
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                      <h3 className="font-medium text-green-800 mb-2">
                        Loan Processing
                      </h3>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• Verify your identity and eligibility</li>
                        <li>• Assess creditworthiness and risk</li>
                        <li>• Determine appropriate loan terms</li>
                        <li>• Process disbursements and repayments</li>
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                      <h3 className="font-medium text-purple-800 mb-2">
                        Service Improvement
                      </h3>
                      <ul className="text-purple-700 space-y-1 text-sm">
                        <li>• Enhance fraud detection</li>
                        <li>• Improve customer experience</li>
                        <li>• Develop better loan products</li>
                        <li>• Ensure regulatory compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Data Sharing Section */}
            <motion.section
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">
                  3. Information Sharing
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    We only share your information under these circumstances:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            With
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Purpose
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Data Shared
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            Partner Platforms
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Loan application processing and account management
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Identification, contact, and financial data
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            Credit Bureaus
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Credit reporting and risk assessment
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Loan performance and repayment history
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                            Regulatory Authorities
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Legal compliance and anti-fraud measures
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Required by law or court order
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <FiAlertTriangle className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          We never sell your personal data to marketing
                          companies or third-party advertisers.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Data Protection Section */}
            <motion.section
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">
                  4. Data Security Measures
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    We implement robust security measures to protect your
                    information:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg text-center">
                      <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiLock className="text-blue-600" size={20} />
                      </div>
                      <h3 className="font-medium text-blue-800 mb-1">
                        Encryption
                      </h3>
                      <p className="text-blue-700 text-sm">
                        All data transmissions encrypted with TLS 1.2+
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiShield className="text-green-600" size={20} />
                      </div>
                      <h3 className="font-medium text-green-800 mb-1">
                        Access Controls
                      </h3>
                      <p className="text-green-700 text-sm">
                        Strict role-based access to sensitive data
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FiDatabase className="text-purple-600" size={20} />
                      </div>
                      <h3 className="font-medium text-purple-800 mb-1">
                        Secure Storage
                      </h3>
                      <p className="text-purple-700 text-sm">
                        Data stored in certified secure facilities
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm mt-4">
                    We regularly audit our systems and train staff on data
                    protection best practices to maintain the highest security
                    standards.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Your Rights Section */}
            <motion.section
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="p-6 border-b border-gray-100 bg-gray-50">
                <h2 className="text-xl font-semibold text-gray-800">
                  5. Your Data Protection Rights
                </h2>
              </div>
              <div className="px-8 py-6">
                <div className="space-y-5">
                  <p className="text-gray-700 leading-relaxed">
                    Under data protection laws, you have the right to:
                  </p>
                  <ul className="list-disc pl-5 space-y-3 text-gray-700">
                    <li>
                      <strong>Access:</strong> Request copies of your personal
                      data we hold
                    </li>
                    <li>
                      <strong>Rectification:</strong> Correct inaccurate or
                      incomplete information
                    </li>
                    <li>
                      <strong>Erasure:</strong> Request deletion of your data
                      under certain conditions
                    </li>
                    <li>
                      <strong>Restriction:</strong> Limit how we use your data
                    </li>
                    <li>
                      <strong>Portability:</strong> Receive your data in a
                      structured, machine-readable format
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to certain processing
                      activities
                    </li>
                  </ul>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-4">
                    <h3 className="font-medium text-blue-800 mb-2">
                      How to Exercise Your Rights
                    </h3>
                    <p className="text-blue-700 text-sm">
                      To make a request regarding your data rights, please
                      contact our Data Protection Officer at dpo@tmsfinance.com
                      or through your partner platform's support channel.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Final Acceptance Section */}
          <motion.div
            className="mt-16 bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-[#005452] mb-3">
                Privacy Policy Acceptance
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                By using our emergency loan services through any partner
                platform, you acknowledge that you have read, understood, and
                agreed to these Privacy Terms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-800 mb-3">
                  Our Commitment
                </h4>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      We protect your data with industry-leading security
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>
                      We're transparent about how we use your information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-5 h-5 flex items-center justify-center mr-3 flex-shrink-0">
                      ✓
                    </span>
                    <span>We respect your privacy rights and choices</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <div className="flex items-start">
                  <FiAlertTriangle
                    className="text-amber-500 mt-1 mr-3 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">
                      Changes to This Policy
                    </h4>
                    <p className="text-amber-700 text-sm">
                      We may update these Privacy Terms periodically. The
                      updated version will be indicated by an updated "Effective
                      Date" and will be effective as soon as it is accessible.
                      We will notify you via your partner platform or email of
                      any material changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
