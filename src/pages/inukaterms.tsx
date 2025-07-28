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
      <main className="pt-20 pb-16 bg-gradient-to-b from-white to-gray-50 text-gray-800">
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
      "To access embedded emergency loan services, you must:",
      "1.1 Be a registered user of the partner platform.",
      "1.2 Have an active account with a verifiable balance or activity on the platform, if applicable.",
      "1.3 Fulfill all loan issuance requirements as set by TMS.",
    ],
  },
  {
    title: "Loan Application Process",
    content: [
      "The loan application process works as follows:",
      "2.1 Loan applications are initiated through the integrated platform (mobile app, web app, or other interface) and sent to TMS for evaluation.",
      "2.2 By submitting a loan request, you authorize the platform to share your personal and financial data with TMS for credit assessment, approval, and disbursement.",
      "2.3 TMS will make the final decision on loan approval using internal credit risk evaluation models. The partner platform shall not be held responsible for loan approvals or denials.",
    ],
    important: true,
  },
  {
    title: "Loan Amounts and Terms",
    content: [
      "Loan parameters are determined by TMS and include:",
      "3.1 Loan limits (minimum and maximum) are determined by TMS and are subject to change.",
      "3.2 Loan eligibility may be linked to your activity, deposits, or transaction history on the partner platform.",
      "3.3 You will be shown a complete breakdown of the loan principal, interest, total repayment amount, and any applicable fees before confirming the loan.",
      "3.4 The interest rate may include processing, service, and legal fees as part of a bundled cost.",
      "3.5 Once a loan is approved, the terms provided at disbursement are final and binding.",
    ],
    important: true,
  },
  {
    title: "Collateral Requirements",
    content: [
      "Collateral for your loan includes:",
      "4.1 Your platform-held funds (deposits, wallet balance, or digital assets) may serve as collateral.",
      "4.2 In the event of non-repayment, TMS reserves the right, in agreement with the partner platform, to recover the outstanding loan by liquidating equivalent value from your account or assets on the platform.",
    ],
  },
  {
    title: "Repayment Terms",
    content: [
      "Repayment requirements:",
      "5.1 You must repay the loan within the selected term—typically Daily, 7, 14, or 30 days—from the disbursement date.",
      "5.2 Failure to repay by the due date constitutes default. In such cases, recovery will be initiated using your platform funds or alternative legal means.",
      "5.3 The platform may restrict withdrawals or enforce automatic deductions until full repayment is confirmed.",
      "5.4 Once the loan is disbursed, the transaction is final and non-reversible. You acknowledge the accuracy of the disbursed amount and agree to repay in full.",
    ],
    important: true,
  },
  {
    title: "Loan Disbursement",
    content: [
      "Disbursement process:",
      "6.1 Approved loans will be disbursed to the mobile wallet, bank account, or digital wallet linked to your profile on the partner platform.",
      "6.2 You will receive an SMS, email, or in-app notification with disbursement details, including due date and total payable.",
      "6.3 TMS is not liable for delays caused by mobile networks, bank processing, or other third-party infrastructure issues.",
      "6.4 By accepting the loan disbursement, you agree to the loan amount and repayment obligations.",
      "6.5 Disbursed loans are final and cannot be reversed or withdrawn once processed.",
    ],
  },
  {
    title: "Fees and Charges",
    content: [
      "Financial terms:",
      "7.1 The loan interest rate is inclusive of all fees—no hidden charges.",
      "7.2 You agree to the deduction of these charges as part of loan servicing, either upfront or during repayment, as specified in the offer.",
    ],
    important: true,
  },
  {
    title: "Data Privacy and Sharing",
    content: [
      "Data handling:",
      "8.1 By using the embedded loan service, you authorize your platform to share relevant KYC, usage data, and financial behavior with TMS.",
      "8.2 All personal data is handled according to applicable privacy and data protection laws.",
      "8.3 TMS and its partner platforms are committed to securing your data and using it only for authorized purposes related to loan processing and service delivery.",
    ],
  },
  {
    title: "Loan Denial",
    content: [
      "Approval considerations:",
      "9.1 TMS may reject your loan application based on internal scoring models, platform data, or regulatory limits.",
      "9.2 The partner platform is not responsible for denial outcomes or eligibility issues.",
    ],
  },
  {
    title: "Liability Limitations",
    content: [
      "Legal responsibilities:",
      "10.1 The partner platform acts as a facilitator and does not guarantee loan approval, terms, or repayment conditions.",
      "10.2 All contractual obligations related to the loan are between you and Transcredit Microfinance Services.",
    ],
  },
  {
    title: "Terms Modification",
    content: [
      "Changes to terms:",
      "11.1 TMS reserves the right to amend these terms at any time.",
      "11.2 Any changes will be posted on the platform or communicated via SMS/email. Continued use of the service implies your agreement to the updated terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "Legal jurisdiction:",
      "These terms shall be governed by the laws of the United Republic of Tanzania, or the jurisdiction where the service is offered, if otherwise agreed.",
    ],
  },
  {
    title: "Acceptance of Terms",
    content: [
      "By submitting your loan application through a partner platform, you:",
      "• Confirm the accuracy of your submitted data.",
      "• Accept the loan terms provided upon approval.",
      "• Acknowledge that all disbursed loans are final and must be repaid in full as agreed.",
    ],
    important: true,
  },
];
