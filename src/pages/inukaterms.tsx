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
    title: "Eligibility",
    content: [
      "To be eligible for the emergency loan service, you must meet the following requirements:",
      "1.1 You must be a registered user of the Inuka Fund.",
      "1.2 You must have an active account with a verifiable investment balance in the Inuka Fund.",
      "1.3 You must comply with all loan issuance requirements set by TMS.",
    ],
  },
  {
    title: "Loan Application Process",
    content: [
      "The loan application process works as follows:",
      "2.1 Loan applications will be initiated through the Inuka Fund mobile and web App and forwarded to Transcredit Microfinance Services (TMS) for evaluation and approval.",
      "2.2 By submitting your loan request through the app, you consent to Inuka Fund sharing relevant personal and financial data with TMS for loan processing purposes.",
      "2.3 TMS will make the final decision regarding loan approval based on its internal evaluation criteria, and Inuka Fund holds no responsibility for the approval or denial of loan applications.",
    ],
    important: true,
  },
  {
    title: "Loan Amounts and Terms",
    content: [
      "Loan parameters are determined by TMS and include:",
      "3.1 The minimum and maximum loan amounts you can apply for are determined by Transcredit Microfinance Services (TMS) and are subject to change at any time without prior notice.",
      "3.2 The loan amount cannot exceed 50% of your total deposits in the Inuka Fund.",
      "3.3 Only one emergency loan can be active at a time. If you have a pending loan (unpaid), you will not be eligible to apply for another loan until the existing one is fully repaid.",
      "3.4 Before you submit your loan application, TMS will display a clear breakdown of the principal amount, interest amount, and the total repayment amount, including all applicable fees. By proceeding with the loan request, you acknowledge and accept these terms and conditions, including the amounts specified.",
      "3.5 The loan will be subject to an interest rate, which includes all processing, transaction, application, and legal fees.",
      "3.6 TMS will set loan repayment terms, interest rates, and any associated fees, and these will be binding upon approval of your loan.",
    ],
    important: true,
  },
  {
    title: "Collateral",
    content: [
      "Collateral for your loan includes:",
      "4.1 Although you may borrow up to 50% of your total deposits in the Inuka Fund, your full deposit balance serves as collateral for the loan. This means that in the event of loan default, the outstanding amount may be recovered from any portion of your total deposits.",
      "4.2 Upon loan approval, only the loan repayment amount (i.e., the sum of the principal and all applicable fees or interest) will be held or reserved in your account. You may continue to withdraw or transfer funds, provided the remaining balance does not fall below the held repayment amount.",
      "4.3 If the loan is not repaid by the due date, Transcredit Microfinance Services (TMS), in collaboration with the Inuka Fund, reserves the right to automatically recover the outstanding balance by deducting it from your total deposit balance, without requiring further approval from you.",
      "4.4 A notification confirming the recovery transaction will be sent to you via SMS and/or email. By accepting these terms, you agree to this automatic deduction process.",
    ],
  },
  {
    title: "Repayment Terms",
    content: [
      "Repayment requirements:",
      "5.1 Upon loan disbursement, you are required to repay the loan in full within the repayment period you have selected, commencing on the date of loan issuance.",
      "5.2 If the loan is not repaid within the repayment period you have selected, it will be classified as default. In such cases, the Inuka Fund will automatically transfer units from your savings, equivalent to the outstanding loan amount, including interest, to TMS for the recovery of the loan.",
      "5.3 Inuka Fund will confirm repayment status through TMS and will release your held funds according to clause 4.1.",
      "5.4 Once the loan is disbursed to your designated account, the transaction is final and cannot be reversed. By accepting the disbursed loan, you acknowledge that the amount received is correct and agree to fully honor the repayment terms and schedule as specified.",
    ],
    important: true,
  },
  {
    title: "Loan Disbursement",
    content: [
      "Disbursement process:",
      "6.1 Once your loan is approved, TMS will disburse the approved amount directly to the mobile money account or bank account linked to your Inuka Fund profile.",
      "6.2 You will receive an SMS confirmation from TMS containing the disbursement details, including the disbursed amount, repayment amount, and due date.",
      "6.3 Disbursement timelines may vary depending on system availability and network providers, and TMS shall not be held liable for delays caused by external factors beyond its control.",
      "6.4 By accepting the disbursed loan, you agree that the amount received is accurate and you are bound by the repayment terms.",
      "6.5 Loan disbursements are final and irrevocable. Once the funds are sent to your designated account, they cannot be returned, reversed, or canceled.",
    ],
  },
  {
    title: "Fees and Charges",
    content: [
      "Financial terms:",
      "7.1 The interest rate on the loan covers all loan-related fees, including processing, transactions, application, and legal fees.",
      "7.2 You agree to the deduction of this interest from the loan amount or as outlined in this loan agreement.",
    ],
    important: true,
  },
  {
    title: "Data Privacy",
    content: [
      "Data handling:",
      "8.1 By submitting your loan request, you authorize Inuka Fund to share your personal and financial information with TMS as required for loan processing.",
      "8.2 Inuka Fund and TMS will handle all personal data in accordance with applicable data protection laws.",
    ],
  },
  {
    title: "Loan Denial",
    content: [
      "Approval considerations:",
      "9.1 TMS reserves the right to deny your loan request based on its internal credit evaluation process.",
      "9.2 Inuka Fund will not be responsible for any consequences arising from loan denial.",
    ],
  },
  {
    title: "Liability",
    content: [
      "Legal responsibilities:",
      "10.1 Inuka Fund is solely a facilitator in the loan request process and shall not be held liable for any disputes between you and TMS regarding loan issuance, repayment terms, or loan amounts.",
    ],
  },
  {
    title: "Terms Modification",
    content: [
      "Changes to terms:",
      "11.1 Inuka Fund and TMS reserve the right to modify these terms at any time. Any changes will be communicated via the Inuka Fund App, and continued use of the app after such changes indicates your acceptance of the new terms.",
    ],
  },
  {
    title: "Governing Law",
    content: [
      "Legal jurisdiction:",
      "12.1 These terms shall be governed by and construed in accordance with the laws of United Republic of Tanzania.",
    ],
  },
  {
    title: "Acceptance",
    content: [
      "13.1 By submitting a loan request via the Inuka Fund App, you agree to the above terms and conditions and acknowledge that all information provided is accurate to the best of your knowledge.",
      "13.2 You expressly understand and accept that once a loan is approved and disbursed, the transaction is final, non-reversible, and must be repaid in full under the agreed terms.",
    ],
    important: true,
  },
];
