import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FaBuilding,
  FaLaptop,
  FaUserShield,
  FaMoneyBillWave,
  FaCode,
  FaFileContract,
  FaCheck,
  FaChevronRight,
  FaChevronLeft,
  FaPaperclip,
  FaGlobe,
  FaMobile,
} from "react-icons/fa";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import Header2 from "../components/header2";

// Form validation schema
const formSchema = yup.object().shape({
  // SECTION A: Company Information
  legalCompanyName: yup.string().required("Legal company name is required"),
  tradingName: yup.string(),
  registrationNumber: yup.string().required("Registration number is required"),
  countryOfIncorporation: yup
    .string()
    .required("Country of incorporation is required"),
  physicalAddress: yup.string().required("Physical address is required"),
  websiteUrl: yup.string().url("Must be a valid URL"),
  primaryContact: yup.object().shape({
    fullName: yup.string().required("Full name is required"),
    position: yup.string().required("Position is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().required("Phone number is required"),
  }),

  // SECTION B: Business Model & Platform Details
  natureOfBusiness: yup.array().min(1, "Select at least one business type"),
  otherBusinessNature: yup.string(),
  businessModelDescription: yup
    .string()
    .required("Business model description is required"),
  monthlyActiveUsers: yup.string().required("Monthly active users is required"),
  platformType: yup.array().min(1, "Select at least one platform type"),
  platformLink: yup.string().url("Must be a valid URL"),

  // SECTION C: KYC & Customer Data
  kycInfo: yup.array().min(1, "Select at least one KYC information"),
  otherKycInfo: yup.string(),
  customerConsent: yup.string().required("Customer consent is required"),
  creditScoring: yup.string().required("Credit scoring is required"),
  creditScoringDescription: yup.string().when("creditScoring", {
    is: (val: string) => val === "Yes",
    then: (schema) => schema.required("Credit scoring description is required"),
  }),

  // SECTION D: Loan Product Interest
  loanProducts: yup.array().min(1, "Select at least one loan product"),
  loanAmountRange: yup.string().required("Loan amount range is required"),
  repaymentDuration: yup.string().required("Repayment duration is required"),

  // SECTION E: Technical Integration
  devTeam: yup.string().required("Development team is required"),
  integrationTimeline: yup
    .string()
    .required("Integration timeline is required"),

  // SECTION F: Compliance
  regulated: yup.string().required("Regulation status is required"),
  regulatedDetails: yup.string().when("regulated", {
    is: (val: string) => val === "Yes",
    then: (schema) => schema.required("Regulation details are required"),
  }),
  kycAgreement: yup.string().required("KYC agreement is required"),
});

const PartnershipForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: "onChange",
  });

  const sections = [
    { id: 1, title: "Company Info", icon: <FaBuilding /> },
    { id: 2, title: "Business Model", icon: <FaLaptop /> },
    { id: 3, title: "KYC & Data", icon: <FaUserShield /> },
    { id: 4, title: "Loan Products", icon: <FaMoneyBillWave /> },
    { id: 5, title: "Integration", icon: <FaCode /> },
    { id: 6, title: "Compliance", icon: <FaFileContract /> },
  ];

  //Generating a beautiful PDF
  interface PartnershipFormData {
    legalCompanyName: string;
    tradingName?: string;
    registrationNumber: string;
    countryOfIncorporation: string;
    physicalAddress: string;
    websiteUrl?: string;
    primaryContact: {
      fullName: string;
      position: string;
      email: string;
      phone: string;
    };
    natureOfBusiness: string[];
    otherBusinessNature?: string;
    businessModelDescription: string;
    monthlyActiveUsers: string;
    platformType: string[];
    platformLink?: string;
    kycInfo: string[];
    otherKycInfo?: string;
    customerConsent: string;
    creditScoring: string;
    creditScoringDescription?: string;
    loanProducts: string[];
    loanAmountRange: string;
    repaymentDuration: string;
    devTeam: string;
    integrationTimeline: string;
    regulated: string;
    regulatedDetails?: string;
    kycAgreement: string;
  }

  const generateBeautifulPDF = (data: PartnershipFormData) => {
    const pdf = new jsPDF("p", "pt", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 40;
    let yPosition = 50;

    // Add logo and header
    pdf.setFontSize(20);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("Transcredit Microfinance Services", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 30;

    pdf.setFontSize(16);
    pdf.text("Partner Onboarding Application", pageWidth / 2, yPosition, {
      align: "center",
    });
    yPosition += 40;

    // Add application date
    pdf.setFontSize(10);
    pdf.setTextColor(100);
    pdf.text(
      `Application Date: ${new Date().toLocaleDateString()}`,
      pageWidth - margin,
      yPosition,
      { align: "right" }
    );
    yPosition += 30;

    // SECTION A: Company Information
    pdf.setFontSize(14);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("SECTION A: COMPANY INFORMATION", margin, yPosition);
    yPosition += 25;

    const companyInfo = [
      ["Legal Company Name", data.legalCompanyName],
      ["Trading Name", data.tradingName || "N/A"],
      ["Registration Number", data.registrationNumber],
      ["Country of Incorporation", data.countryOfIncorporation],
      ["Physical Address", data.physicalAddress],
      ["Website URL", data.websiteUrl || "N/A"],
    ];

    autoTable(pdf, {
      startY: yPosition,
      head: [["Field", "Details"]],
      body: companyInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 8,
        fontSize: 10,
        valign: "middle",
        halign: "left",
      },
      headStyles: {
        fillColor: [0, 84, 82],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
    });

    yPosition =
      (pdf as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
        .finalY + 15;

    // Primary Contact Person
    pdf.setFontSize(12);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("PRIMARY CONTACT PERSON", margin, yPosition);
    yPosition += 20;

    const contactInfo = [
      ["Full Name", data.primaryContact.fullName],
      ["Position/Title", data.primaryContact.position],
      ["Email", data.primaryContact.email],
      ["Phone", data.primaryContact.phone],
    ];

    autoTable(pdf, {
      startY: yPosition,
      body: contactInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 6,
        fontSize: 10,
      },
      columnStyles: {
        0: { cellWidth: 100, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
    });

    yPosition =
      (pdf as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
        .finalY + 25;

    // SECTION B: Business Model & Platform Details
    pdf.setFontSize(14);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("SECTION B: BUSINESS MODEL & PLATFORM DETAILS", margin, yPosition);
    yPosition += 25;

    const businessInfo = [
      ["Nature of Business", data.natureOfBusiness.join(", ")],
      ["Other Business Nature", data.otherBusinessNature || "N/A"],
      ["Business Model Description", data.businessModelDescription],
      ["Monthly Active Users", data.monthlyActiveUsers],
      ["Platform Type", data.platformType.join(", ")],
      ["Platform Link", data.platformLink || "N/A"],
    ];

    autoTable(pdf, {
      startY: yPosition,
      body: businessInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 6,
        fontSize: 10,
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
      didDrawCell: (data) => {
        if (
          data.section === "body" &&
          data.column.index === 1 &&
          data.row.index === 2
        ) {
          const cellValue =
            typeof data.cell.raw === "string" ? data.cell.raw : "";
          const lines = pdf.splitTextToSize(
            cellValue,
            pageWidth - margin * 2 - 150
          );
          data.row.height = lines.length * 10;
        }
      },
    });

    yPosition =
      (pdf as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
        .finalY + 25;

    // SECTION C: KYC & Customer Data
    pdf.setFontSize(14);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("SECTION C: KYC & CUSTOMER DATA", margin, yPosition);
    yPosition += 25;

    const kycInfo = [
      ["KYC Information Collected", data.kycInfo.join(", ")],
      ["Other KYC Information", data.otherKycInfo || "N/A"],
      ["Customer Consent", data.customerConsent],
      ["Credit Scoring", data.creditScoring],
    ];

    if (data.creditScoringDescription) {
      kycInfo.push([
        "Credit Scoring Description",
        data.creditScoringDescription,
      ]);
    }

    autoTable(pdf, {
      startY: yPosition,
      body: kycInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 6,
        fontSize: 10,
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
    });

    yPosition =
      (pdf as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
        .finalY + 25;

    // SECTION D: Loan Product Interest
    pdf.setFontSize(14);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("SECTION D: LOAN PRODUCT INTEREST", margin, yPosition);
    yPosition += 25;

    const loanInfo = [
      ["Loan Products", data.loanProducts.join(", ")],
      ["Loan Amount Range", data.loanAmountRange],
      ["Repayment Duration", data.repaymentDuration],
    ];

    autoTable(pdf, {
      startY: yPosition,
      body: loanInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 6,
        fontSize: 10,
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
    });

    yPosition =
      (pdf as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
        .finalY + 25;

    // SECTION E: Technical Integration
    pdf.setFontSize(14);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("SECTION E: TECHNICAL INTEGRATION", margin, yPosition);
    yPosition += 25;

    const techInfo = [
      ["Development Team", data.devTeam],
      ["Integration Timeline", data.integrationTimeline],
    ];

    autoTable(pdf, {
      startY: yPosition,
      body: techInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 6,
        fontSize: 10,
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
    });

    yPosition =
      (pdf as jsPDF & { lastAutoTable: { finalY: number } }).lastAutoTable
        .finalY + 25;

    // SECTION F: Compliance
    pdf.setFontSize(14);
    pdf.setTextColor(0, 84, 82);
    pdf.setFont("helvetica", "bold");
    pdf.text("SECTION F: COMPLIANCE", margin, yPosition);
    yPosition += 25;

    const complianceInfo = [["Regulated", data.regulated]];

    if (data.regulatedDetails) {
      complianceInfo.push(["Regulation Details", data.regulatedDetails]);
    }

    complianceInfo.push(["KYC Agreement", data.kycAgreement]);

    autoTable(pdf, {
      startY: yPosition,
      body: complianceInfo,
      margin: { left: margin, right: margin },
      styles: {
        cellPadding: 6,
        fontSize: 10,
      },
      columnStyles: {
        0: { cellWidth: 150, fontStyle: "bold" },
        1: { cellWidth: "auto" },
      },
    });

    // Add footer
    const totalPages = pdf.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      pdf.setPage(i);
      pdf.setFontSize(8);
      pdf.setTextColor(100);
      pdf.text(
        `Page ${i} of ${totalPages}`,
        pageWidth - margin,
        pdf.internal.pageSize.getHeight() - 20,
        { align: "right" }
      );
      pdf.text(
        "Confidential - Transcredit Microfinance Services",
        margin,
        pdf.internal.pageSize.getHeight() - 20
      );
    }

    return pdf;
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);

    try {
      // Generate beautiful PDF
      const pdf = generateBeautifulPDF(data);

      // Save PDF first
      pdf.save(`Partnership_Application_${data.legalCompanyName}.pdf`);

      // Generate PDF as blob for email attachment
      const pdfBlob = pdf.output("blob");
      const pdfUrl = URL.createObjectURL(pdfBlob);

      // Create download link and trigger download
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `Partnership_Application_${data.legalCompanyName}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Prepare email parameters
      const subject = `Partnership Application - ${data.legalCompanyName}`;
      const body = `Dear Transcredit Team,%0D%0A%0D%0APlease find attached our partnership application.%0D%0A%0D%0ABest regards,%0D%0A${data.primaryContact.fullName}`;

      // Open Gmail compose window with parameters
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=info@transcredit.co.tz&su=${encodeURIComponent(
        subject
      )}&body=${body}`;

      // Try to open Gmail directly
      window.open(gmailUrl, "_blank");

      // Fallback to regular mailto if Gmail fails
      setTimeout(() => {
        if (!window.open(gmailUrl)) {
          window.open(
            `mailto:info@transcredit.co.tz?subject=${encodeURIComponent(
              subject
            )}&body=${body}`
          );
        }
      }, 500);

      setIsSuccess(true);
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextStep = async () => {
    let isValid = false;

    // Validate current section fields
    switch (step) {
      case 1:
        isValid = await trigger([
          "legalCompanyName",
          "registrationNumber",
          "countryOfIncorporation",
          "physicalAddress",
          "primaryContact.fullName",
          "primaryContact.position",
          "primaryContact.email",
          "primaryContact.phone",
        ]);
        break;
      case 2:
        isValid = await trigger([
          "natureOfBusiness",
          "businessModelDescription",
          "monthlyActiveUsers",
          "platformType",
        ]);
        break;
      case 3:
        isValid = await trigger([
          "kycInfo",
          "customerConsent",
          "creditScoring",
        ]);
        if (watch("creditScoring") === "Yes") {
          isValid = isValid && (await trigger(["creditScoringDescription"]));
        }
        break;
      case 4:
        isValid = await trigger([
          "loanProducts",
          "loanAmountRange",
          "repaymentDuration",
        ]);
        break;
      case 5:
        isValid = await trigger(["devTeam", "integrationTimeline"]);
        break;
      case 6:
        isValid = await trigger(["regulated", "kycAgreement"]);
        if (watch("regulated") === "Yes") {
          isValid = isValid && (await trigger(["regulatedDetails"]));
        }
        break;
    }

    if (isValid && step < sections.length) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (isSuccess) {
    const handleGoBack = () => {
      window.location.reload();
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#005452] to-[#003332] p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 max-w-xl w-full text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
            <FaCheck className="text-green-500 text-3xl sm:text-4xl" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3 sm:mb-4">
            Application Submitted!
          </h2>

          <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
            Thank you for your partnership application. A confirmation email has
            been opened in your default email client. Please send it to complete
            your application process.
          </p>

          <p className="text-gray-500 text-xs sm:text-sm mb-6 sm:mb-8">
            If the email didn't open automatically, please send your application
            to{" "}
            <span className="text-[#005452] font-medium">
              info@transcredit.co.tz
            </span>
          </p>

          {/* Return Back Button */}
          <button
            onClick={handleGoBack}
            className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-[#005452] to-[#00736f] text-white rounded-full text-sm sm:text-base font-semibold shadow-md hover:shadow-lg hover:from-[#006c69] hover:to-[#005452] transition-all duration-300"
          >
            ← Return Back
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <Header2 />
      <div className="min-h-screen bg-gradient-to-br from-[#005452] to-[#003332] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Form Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Partner Onboarding Application
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto">
              Become a Partner – Enable Embedded Financial Services on Your
              Platform
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/20 -z-10"></div>
              {sections.map((section) => (
                <div key={section.id} className="flex flex-col items-center">
                  <button
                    onClick={() => step >= section.id && setStep(section.id)}
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-medium transition-all ${
                      step === section.id
                        ? "bg-white text-[#005452] scale-110"
                        : step > section.id
                        ? "bg-white/30 text-white"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {step > section.id ? <FaCheck /> : section.icon}
                  </button>
                  <span
                    className={`mt-2 text-sm font-medium ${
                      step >= section.id ? "text-white" : "text-white/50"
                    }`}
                  >
                    {section.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Container */}
          <div
            className="bg-white rounded-xl shadow-2xl overflow-hidden"
            ref={formRef}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {/* SECTION A: Company Information */}
                  {step === 1 && (
                    <motion.div
                      key="section1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaBuilding className="text-[#005452]" /> Company
                        Information
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            1. Legal Company Name *
                          </label>
                          <input
                            {...register("legalCompanyName")}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.legalCompanyName
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="Enter legal company name"
                          />
                          {errors.legalCompanyName && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.legalCompanyName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            2. Trading Name (if different)
                          </label>
                          <input
                            {...register("tradingName")}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent"
                            placeholder="Enter trading name"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            3. Registration Number *
                          </label>
                          <input
                            {...register("registrationNumber")}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.registrationNumber
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="Enter registration number"
                          />
                          {errors.registrationNumber && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.registrationNumber.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            4. Country of Incorporation *
                          </label>
                          <input
                            {...register("countryOfIncorporation")}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.countryOfIncorporation
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="Enter country"
                          />
                          {errors.countryOfIncorporation && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.countryOfIncorporation.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            5. Physical Address *
                          </label>
                          <input
                            {...register("physicalAddress")}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.physicalAddress
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="Enter physical address"
                          />
                          {errors.physicalAddress && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.physicalAddress.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            6. Website URL
                          </label>
                          <input
                            {...register("websiteUrl")}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.websiteUrl
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="https://example.com"
                          />
                          {errors.websiteUrl && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.websiteUrl.message}
                            </p>
                          )}
                        </div>

                        <div className="pt-4">
                          <h3 className="text-xl font-bold text-gray-800 mb-4">
                            7. Primary Contact Person *
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Full Name *
                              </label>
                              <input
                                {...register("primaryContact.fullName")}
                                className={`w-full px-4 py-3 rounded-lg border ${
                                  errors.primaryContact?.fullName
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                                placeholder="Enter full name"
                              />
                              {errors.primaryContact?.fullName && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.primaryContact.fullName.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Position/Title *
                              </label>
                              <input
                                {...register("primaryContact.position")}
                                className={`w-full px-4 py-3 rounded-lg border ${
                                  errors.primaryContact?.position
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                                placeholder="Enter position"
                              />
                              {errors.primaryContact?.position && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.primaryContact.position.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Email *
                              </label>
                              <input
                                {...register("primaryContact.email")}
                                className={`w-full px-4 py-3 rounded-lg border ${
                                  errors.primaryContact?.email
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                                placeholder="Enter email"
                              />
                              {errors.primaryContact?.email && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.primaryContact.email.message}
                                </p>
                              )}
                            </div>

                            <div>
                              <label className="block text-gray-700 font-medium mb-2">
                                Phone *
                              </label>
                              <input
                                {...register("primaryContact.phone")}
                                className={`w-full px-4 py-3 rounded-lg border ${
                                  errors.primaryContact?.phone
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                                placeholder="Enter phone number"
                              />
                              {errors.primaryContact?.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.primaryContact.phone.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SECTION B: Business Model & Platform Details */}
                  {step === 2 && (
                    <motion.div
                      key="section2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaLaptop className="text-[#005452]" /> Business Model &
                        Platform Details
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            8. Nature of Business (select all that apply) *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              "Digital Marketplace",
                              "E-commerce Platform",
                              "Logistics/Elect Services",
                              "Fuel Card or Distributor",
                              "Agritech Platform",
                              "SaaS or Utility Platform",
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-3"
                              >
                                <input
                                  type="checkbox"
                                  {...register("natureOfBusiness")}
                                  value={option}
                                  className="h-5 w-5 text-[#005452] rounded border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                            <div className="sm:col-span-2 flex items-center space-x-3">
                              <input
                                type="checkbox"
                                {...register("natureOfBusiness")}
                                value="Other"
                                className="h-5 w-5 text-[#005452] rounded border-gray-300 focus:ring-[#005452]"
                              />
                              <span className="text-gray-700">Other:</span>
                              <input
                                {...register("otherBusinessNature")}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent"
                                placeholder="Specify other business nature"
                              />
                            </div>
                          </div>
                          {errors.natureOfBusiness && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.natureOfBusiness.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            9. Describe your business model and platform
                            functionality (in 2-3 sentences) *
                          </label>
                          <textarea
                            {...register("businessModelDescription")}
                            rows={4}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.businessModelDescription
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="Describe your business model..."
                          ></textarea>
                          {errors.businessModelDescription && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.businessModelDescription.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            10. Monthly Active Users on Platform *
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                              "< 1,000",
                              "1,000–10,000",
                              "10,000–100,000",
                              ">100,000",
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="radio"
                                  {...register("monthlyActiveUsers")}
                                  value={option}
                                  className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {errors.monthlyActiveUsers && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.monthlyActiveUsers.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            11. Do you have an App or Web Platform? *
                          </label>
                          <div className="flex flex-wrap gap-4">
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                {...register("platformType")}
                                value="Android App"
                                className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                              />
                              <span className="text-gray-700 flex items-center">
                                <FaMobile className="mr-1" /> Android App
                              </span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                {...register("platformType")}
                                value="iOS App"
                                className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                              />
                              <span className="text-gray-700 flex items-center">
                                <FaMobile className="mr-1" /> iOS App
                              </span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                {...register("platformType")}
                                value="Web Platform"
                                className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                              />
                              <span className="text-gray-700 flex items-center">
                                <FaGlobe className="mr-1" /> Web Platform
                              </span>
                            </label>
                          </div>
                          {errors.platformType && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.platformType.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            12. Link to App or Web Portal (if public)
                          </label>
                          <input
                            {...register("platformLink")}
                            className={`w-full px-4 py-3 rounded-lg border ${
                              errors.platformLink
                                ? "border-red-500"
                                : "border-gray-300"
                            } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                            placeholder="https://example.com"
                          />
                          {errors.platformLink && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.platformLink.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SECTION C: KYC & Customer Data */}
                  {step === 3 && (
                    <motion.div
                      key="section3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaUserShield className="text-[#005452]" /> KYC &
                        Customer Data
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            13. What KYC information do you collect from users?
                            *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              "Full Name",
                              "Phone",
                              "NIDA",
                              "Email",
                              "GPS/Location",
                              "TIN",
                              "Business License",
                              "Photos or Documents",
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-3"
                              >
                                <input
                                  type="checkbox"
                                  {...register("kycInfo")}
                                  value={option}
                                  className="h-5 w-5 text-[#005452] rounded border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                            <div className="sm:col-span-2 flex items-center space-x-3">
                              <input
                                type="checkbox"
                                {...register("kycInfo")}
                                value="Other"
                                className="h-5 w-5 text-[#005452] rounded border-gray-300 focus:ring-[#005452]"
                              />
                              <span className="text-gray-700">Other:</span>
                              <input
                                {...register("otherKycInfo")}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent"
                                placeholder="Specify other KYC info"
                              />
                            </div>
                          </div>
                          {errors.kycInfo && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.kycInfo.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            14. Do you have customer consent to share KYC and
                            transaction behavior with financing partners? *
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {[
                              "Yes",
                              "No",
                              "Will update our terms to include",
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="radio"
                                  {...register("customerConsent")}
                                  value={option}
                                  className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {errors.customerConsent && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.customerConsent.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            15. Do you use any credit scoring or behavioral
                            analysis on your users? *
                          </label>
                          <div className="flex flex-wrap gap-4 mb-3">
                            {["Yes", "No"].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="radio"
                                  {...register("creditScoring")}
                                  value={option}
                                  className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {watch("creditScoring") === "Yes" && (
                            <div className="mt-3">
                              <label className="block text-gray-700 font-medium mb-2">
                                If yes, briefly describe:
                              </label>
                              <textarea
                                {...register("creditScoringDescription")}
                                rows={3}
                                className={`w-full px-4 py-3 rounded-lg border ${
                                  errors.creditScoringDescription
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                                placeholder="Describe your credit scoring methods..."
                              ></textarea>
                              {errors.creditScoringDescription && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.creditScoringDescription.message}
                                </p>
                              )}
                            </div>
                          )}
                          {errors.creditScoring && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.creditScoring.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SECTION D: Loan Product Interest */}
                  {step === 4 && (
                    <motion.div
                      key="section4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaMoneyBillWave className="text-[#005452]" /> Loan
                        Product Interest
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            16. Which embedded loan products are you interested
                            in enabling for your users? *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                              "Emergency Loans",
                              "MSME Working Capital Loans",
                              "Fuel Loans (for transport/fleet)",
                              "Custom Loan Solutions",
                              "All of the above",
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-3"
                              >
                                <input
                                  type="checkbox"
                                  {...register("loanProducts")}
                                  value={option}
                                  className="h-5 w-5 text-[#005452] rounded border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {errors.loanProducts && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.loanProducts.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            17. Preferred Loan Amount Range (TZS) *
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                            {[
                              "< 50,000",
                              "50,000–200,000",
                              "200,000–500,000",
                              "500,000–1,000,000",
                              "> 1,000,000",
                            ].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="radio"
                                  {...register("loanAmountRange")}
                                  value={option}
                                  className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {errors.loanAmountRange && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.loanAmountRange.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            18. Preferred Repayment Duration *
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {["7 Days", "14 Days", "30 Days", "Custom"].map(
                              (option) => (
                                <label
                                  key={option}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="radio"
                                    {...register("repaymentDuration")}
                                    value={option}
                                    className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                  />
                                  <span className="text-gray-700">
                                    {option}
                                  </span>
                                </label>
                              )
                            )}
                          </div>
                          {errors.repaymentDuration && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.repaymentDuration.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SECTION E: Technical Integration */}
                  {step === 5 && (
                    <motion.div
                      key="section5"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaCode className="text-[#005452]" /> Technical
                        Integration
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            19. Do you have a development team capable of API
                            integration? *
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {["Yes", "No", "Outsourced"].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="radio"
                                  {...register("devTeam")}
                                  value={option}
                                  className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {errors.devTeam && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.devTeam.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            20. Estimated Timeline to Complete Integration *
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {["1 Week", "2–4 Weeks", "> 1 Month"].map(
                              (option) => (
                                <label
                                  key={option}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="radio"
                                    {...register("integrationTimeline")}
                                    value={option}
                                    className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                  />
                                  <span className="text-gray-700">
                                    {option}
                                  </span>
                                </label>
                              )
                            )}
                          </div>
                          {errors.integrationTimeline && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.integrationTimeline.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* SECTION F: Compliance */}
                  {step === 6 && (
                    <motion.div
                      key="section6"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                        <FaFileContract className="text-[#005452]" /> Compliance
                      </h2>

                      <div className="space-y-6">
                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            21. Are you regulated by any financial, tech, or
                            data authority? *
                          </label>
                          <div className="flex flex-wrap gap-4 mb-3">
                            {["Yes", "No"].map((option) => (
                              <label
                                key={option}
                                className="flex items-center space-x-2"
                              >
                                <input
                                  type="radio"
                                  {...register("regulated")}
                                  value={option}
                                  className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                />
                                <span className="text-gray-700">{option}</span>
                              </label>
                            ))}
                          </div>
                          {watch("regulated") === "Yes" && (
                            <div className="mt-3">
                              <label className="block text-gray-700 font-medium mb-2">
                                If yes, specify:
                              </label>
                              <input
                                {...register("regulatedDetails")}
                                className={`w-full px-4 py-3 rounded-lg border ${
                                  errors.regulatedDetails
                                    ? "border-red-500"
                                    : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-[#005452] focus:border-transparent`}
                                placeholder="Specify regulatory authorities"
                              />
                              {errors.regulatedDetails && (
                                <p className="text-red-500 text-sm mt-1">
                                  {errors.regulatedDetails.message}
                                </p>
                              )}
                            </div>
                          )}
                          {errors.regulated && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.regulated.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-3">
                            22. Are you willing to sign our KYC & Data Sharing
                            Agreement (Annex A)? *
                          </label>
                          <div className="flex flex-wrap gap-4">
                            {["Yes", "No", "Need Legal Review"].map(
                              (option) => (
                                <label
                                  key={option}
                                  className="flex items-center space-x-2"
                                >
                                  <input
                                    type="radio"
                                    {...register("kycAgreement")}
                                    value={option}
                                    className="h-4 w-4 text-[#005452] border-gray-300 focus:ring-[#005452]"
                                  />
                                  <span className="text-gray-700">
                                    {option}
                                  </span>
                                </label>
                              )
                            )}
                          </div>
                          {errors.kycAgreement && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.kycAgreement.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Form Navigation */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005452]"
                    >
                      <FaChevronLeft className="mr-2" /> Previous
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {step < sections.length ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#005452] hover:bg-[#00403e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005452]"
                    >
                      Next <FaChevronRight className="ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#005452] hover:bg-[#00403e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#005452] disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          <FaPaperclip className="mr-2" /> Submit Application
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnershipForm;
