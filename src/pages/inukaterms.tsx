import { motion } from "framer-motion";
import { FiExternalLink, FiAlertTriangle } from "react-icons/fi";

interface TermSection {
  title: string;
  content: string[];
  important?: boolean;
}

export default function InukaTerms() {
  return (
    <>
      <main className="pt-28 pb-16 bg-gradient-to-b from-white to-gray-50 text-gray-800">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Hero Section */}
          <motion.div
            className="bg-gradient-to-r from-[#005452] to-[#028a7e] rounded-xl p-8 mb-12 text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-6 md:mb-0">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  Inuka Fund Emergency Loan
                </h1>
                <p className="text-lg opacity-90">Terms and Conditions</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg border border-white/20">
                <p className="text-sm font-medium mb-1">Effective Date</p>
                <p className="text-xl font-semibold">July 19, 2025</p>
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
            <div className="flex items-start mb-4">
              <div className="bg-blue-100 p-2 rounded-lg mr-4">
                <FiAlertTriangle className="text-blue-600" size={20} />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-[#005452] mb-2">
                  Important Notice
                </h2>
                <p className="text-gray-700">
                  These terms constitute a legally binding agreement. Please
                  read them carefully.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Welcome to the Inuka Fund Emergency Loan service. These Terms of
                Use govern your access to and use of the emergency loan facility
                provided through our partnership with Transcredit Microfinance
                Services (TMS). Please read these terms carefully before
                applying for a loan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By submitting a loan application, you acknowledge that you have
                read, understood, and agreed to be bound by these Terms. If you
                do not agree with any part of these Terms, you must not proceed
                with your loan application.
              </p>
            </div>
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-[#005452] flex items-center">
              <span className="w-2 h-2 bg-[#005452] rounded-full mr-3"></span>
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sections.map((section, idx) => (
                <a
                  key={idx}
                  href={`#section-${idx}`}
                  className="text-gray-700 hover:text-[#005452] hover:underline flex items-center text-sm"
                >
                  <FiExternalLink className="mr-2" size={14} />
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Terms Sections - Always Expanded */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <motion.section
                key={idx}
                id={`section-${idx}`}
                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <span className="text-lg font-semibold text-[#005452] mr-4">
                      {idx + 1}.
                    </span>
                    <h2 className="text-xl font-semibold text-left text-[#005452]">
                      {section.title}
                    </h2>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="pl-10 space-y-4">
                    {section.content.map((para, i) => (
                      <p key={i} className="text-gray-700 leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                  {section.important && (
                    <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <FiAlertTriangle
                            className="h-5 w-5 text-yellow-400"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-yellow-700">
                            This section contains important legal terms that may
                            affect your rights.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.section>
            ))}
          </div>

          {/* Acceptance Section */}
          <motion.div
            className="mt-14 bg-[#f8fafc] border border-blue-100 rounded-xl p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-[#005452] text-center">
              Your Acceptance
            </h3>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                By proceeding with a loan application through the Inuka Fund
                platform, you acknowledge that you have read, understood, and
                agreed to be bound by these Terms of Use in their entirety. You
                further confirm that all information provided in connection with
                your loan application is accurate and complete.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-800 mb-3">
                  Key Acknowledgments:
                </h4>
                <ul className="space-y-3 text-blue-800">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-2">
                      •
                    </span>
                    <span>You understand these terms are legally binding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-2">
                      •
                    </span>
                    <span>
                      You confirm all provided information is accurate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-2">
                      •
                    </span>
                    <span>You accept that loan disbursements are final</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-blue-500 mr-2">
                      •
                    </span>
                    <span>
                      You waive any right to cancel or rescind the loan
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FiAlertTriangle
                      className="h-5 w-5 text-red-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3">
                    <h4 className="text-lg font-semibold text-red-800 mb-1">
                      Important Legal Notice
                    </h4>
                    <p className="text-red-700">
                      These terms constitute a legally binding agreement between
                      you and Transcredit Microfinance Services (TMS). Inuka
                      Fund acts solely as a facilitator in this process.
                      Defaulting on your loan may result in legal action and
                      negative credit reporting.
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

const sections: TermSection[] = [
  {
    title: "Eligibility Requirements",
    content: [
      "To be eligible for an Inuka Fund Emergency Loan, you must meet the following criteria:",
      "• Be a registered user of the Inuka Fund platform with an active account",
      "• Maintain a verifiable investment balance in the Inuka Fund",
      "• Comply with all loan issuance requirements established by TMS",
      "• Provide accurate and complete information during the application process",
      "• Be at least 18 years of age and have legal capacity to enter into contracts",
      "• Not be currently in default on any other loan with TMS or Inuka Fund",
    ],
  },
  {
    title: "Loan Application Process",
    content: [
      "The loan application process works as follows:",
      "1. Applications must be submitted through the official Inuka Fund mobile or web application",
      "2. Submitted applications are forwarded to TMS for evaluation and approval",
      "3. By applying, you consent to Inuka Fund sharing your personal and financial data with TMS for loan processing purposes",
      "4. TMS makes the final approval decision based on their internal evaluation criteria",
      "5. Inuka Fund is not responsible for loan approval or denial decisions",
      "6. Application processing time may vary depending on verification requirements",
      "7. You may be required to provide additional documentation upon request",
    ],
    important: true,
  },
  {
    title: "Loan Amounts and Terms",
    content: [
      "Loan parameters are determined by TMS and include:",
      "• Minimum and maximum loan amounts (subject to change without notice)",
      "• Maximum loan amount cannot exceed 50% of your total Inuka Fund deposits",
      "• Only one active emergency loan permitted at a time",
      "• Clear disclosure of principal, interest, fees, and total repayment amount before application submission",
      "• Interest rates include all processing, transaction, application, and legal fees",
      "• TMS-established repayment terms are binding upon loan approval",
      "• Loan terms may be adjusted based on your creditworthiness and repayment history",
      "• Early repayment options may be available without penalty",
    ],
    important: true,
  },
  {
    title: "Collateral Requirements",
    content: [
      "Collateral for your loan includes:",
      "• Your full Inuka Fund deposit balance serves as collateral",
      "• Upon approval, only the repayment amount is held in your account",
      "• You may withdraw/transfer funds as long as balance doesn't fall below held amount",
      "• Default triggers automatic recovery from your deposit balance",
      "• Recovery notifications will be sent via SMS and/or email",
      "• In case of insufficient collateral, TMS may pursue other legal recovery methods",
      "• Collateral valuation is determined at the time of loan approval",
    ],
  },
  {
    title: "Repayment Terms",
    content: [
      "Repayment requirements:",
      "• Full repayment required within selected period (7, 14, or 30 days)",
      "• Default occurs if not repaid within selected period",
      "• Inuka Fund confirms repayment status and releases held funds",
      "• Disbursed loans are final and non-reversible",
      "• Late payments may incur additional charges as specified by TMS",
      "• Partial payments will be applied first to fees and interest, then to principal",
      "• Failure to repay may result in legal action and credit reporting",
    ],
    important: true,
  },
  {
    title: "Loan Disbursement",
    content: [
      "Disbursement process:",
      "• Approved loans disbursed to your mobile money or bank account",
      "• SMS confirmation sent with disbursement details",
      "• TMS not responsible for network or system delay errors",
      "• Disbursed amounts are final, binding, and irrevocable",
      "• Disbursement typically occurs within 24 hours of approval",
      "• You must verify receipt of funds immediately",
      "• Dispute resolution for disbursement issues must be initiated within 48 hours",
    ],
  },
  {
    title: "Fees and Charges",
    content: [
      "Financial terms:",
      "• Interest rate includes all loan-related fees",
      "• You authorize deduction of all disclosed charges",
      "• Fees are non-negotiable once loan is approved",
      "• Standard interest rate: 10% per month (subject to change)",
      "• Late payment fee: 5% of outstanding balance",
      "• All fees are clearly disclosed before loan acceptance",
      "• No hidden charges - all costs are included in the repayment amount",
    ],
    important: true,
  },
  {
    title: "Data Privacy and Sharing",
    content: [
      "Data handling:",
      "• You authorize Inuka Fund to share your information with TMS",
      "• Both parties handle data per applicable protection laws",
      "• Data is used solely for loan processing purposes",
      "• Your information may be shared with credit bureaus",
      "• We implement industry-standard security measures",
      "• You have the right to access and correct your personal data",
      "• Data retention follows regulatory requirements",
    ],
  },
  {
    title: "Loan Denial",
    content: [
      "Approval considerations:",
      "• TMS reserves full discretion to approve or deny applications",
      "• Inuka Fund bears no responsibility for denial outcomes",
      "• Denial decisions are final and not subject to appeal",
      "• Common reasons for denial include insufficient collateral, poor credit history, or incomplete information",
      "• You may reapply after addressing the reason for denial",
      "• No application fee is charged for denied loans",
    ],
  },
  {
    title: "Liability Limitations",
    content: [
      "Legal responsibilities:",
      "• Inuka Fund facilitates the loan process only",
      "• Not liable for disputes between you and TMS",
      "• Not responsible for loan servicing or collection activities",
      "• Not responsible for system outages affecting loan processing",
      "• Maximum liability limited to fees paid for service",
      "• No liability for indirect or consequential damages",
    ],
  },
  {
    title: "Terms Modification",
    content: [
      "Changes to terms:",
      "• Terms may be modified by Inuka Fund or TMS at any time",
      "• Changes will be communicated through the app",
      "• Continued use constitutes acceptance of modified terms",
      "• Material changes will be highlighted for your review",
      "• Current terms are always available in the app",
      "• It's your responsibility to review updates",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "Legal jurisdiction:",
      "• These terms governed by Tanzanian law",
      "• Any disputes subject to Tanzanian courts",
      "• Legal proceedings must be initiated in Tanzania",
      "• English version of terms prevails over translations",
      "• Dispute resolution begins with mandatory mediation",
      "• Each party bears own legal costs unless ordered otherwise",
    ],
  },
  {
    title: "Acceptance of Terms",
    content: [
      "Your agreement:",
      "• Application submission constitutes full acceptance",
      "• You confirm information accuracy",
      "• Approved loans are legally binding and non-reversible",
      "• You waive any right to cancel or rescind the loan",
      "• Electronic acceptance has same force as written signature",
      "• You acknowledge receipt of these terms before applying",
    ],
    important: true,
  },
];
