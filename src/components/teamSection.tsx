import { motion, AnimatePresence } from "framer-motion";
import KabendaImg from "../assets/team/kabenda.png";
import asheriImg from "../assets/team/asheri.jpg";
import mwangalabaImg from "../assets/team/mwangalaba.jpg";
import gikiImg from "../assets/team/giki.png";
import elizabethImg from "../assets/team/elizabeth.jpeg";
import nestoryImg from "../assets/team/nestoryImg.jpg";
import {
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaQuoteLeft,
} from "react-icons/fa";
import { useState } from "react";

interface TeamMember {
  name: string;
  position: string;
  bio: string;
  image: string;
  social: {
    linkedin: string;
    twitter: string;
    email: string;
  };
  quote: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
}

interface SocialIconProps {
  platform: string;
  url: string;
}

const SocialIcon = ({ platform, url }: SocialIconProps) => {
  const Icon =
    platform === "linkedin"
      ? FaLinkedinIn
      : platform === "twitter"
      ? FaTwitter
      : FaEnvelope;

  return (
    <motion.a
      href={platform === "email" ? `mailto:${url}` : url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-primary/10 text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all"
    >
      <Icon className="text-sm" />
    </motion.a>
  );
};

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Eng. Kabenda Balete",
      position: "Managing Director",
      bio: "A seasoned systems analyst and fintech entrepreneur with over 10 years' experience in digital finance innovation. Founder of Transcredit and lead developer of the TLMS platform.",
      image: KabendaImg,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "kabenda@transcredit.co.tz",
      },
      quote:
        "We're not just providing loans, we're enabling economic ecosystems through embedded finance.",
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Platforms Built", value: "5" },
        { label: "Team Members", value: "50+" },
      ],
    },
    {
      name: "Dr. Ibrahim Mwangalaba",
      position: "Financial Adviser",
      bio: "Former Founding Managing Director of Maendeleo Bank PLC with 20+ years of experience in banking. He brings deep expertise in financial strategy, compliance, and institutional growth.",
      image: mwangalabaImg,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "ibrahim@transcredit.co.tz",
      },
      quote:
        "Financial inclusion begins with understanding the real needs of underserved communities.",
      stats: [
        { label: "Years in Banking", value: "20+" },
        { label: "Banks Founded", value: "2" },
        { label: "Regulatory Frameworks", value: "12" },
      ],
    },
    {
      name: "Paschal Giki",
      position: "Chief Technology Officer (CTO)",
      bio: "Skilled in system deployment and fintech platform support. Manages technical integrations and ensures TLMS system reliability.",
      image: gikiImg,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "paschal@transcredit.co.tz",
      },
      quote:
        "Reliable technology is the backbone of financial inclusion - we build systems that never sleep.",
      stats: [
        { label: "Systems Deployed", value: "15+" },
        { label: "Uptime", value: "99.9%" },
        { label: "API Integrations", value: "30+" },
      ],
    },
    {
      name: "Nestory Mboli",
      position: "Operations Officer",
      bio: "Experienced in client support, loan disbursement coordination, and back-office operations for microfinance institutions.",
      image: nestoryImg,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "nestory@transcredit.co.tz",
      },
      quote:
        "Efficiency in operations means more people get access to credit when they need it most.",
      stats: [
        { label: "Processes Optimized", value: "8" },
        { label: "Client Satisfaction", value: "98%" },
        { label: "Disbursements Handled", value: "10,000+" },
      ],
    },
    {
      name: "Elizabeth Kavalanibi",
      position: "Loan Manager",
      bio: "Specializes in loan processing, client screening, and recovery. Well-versed in lending practices for micro-transport and small businesses.",
      image: elizabethImg,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "elizabeth@transcredit.co.tz",
      },
      quote:
        "Every loan we approve changes someone's story - we take that responsibility seriously.",
      stats: [
        { label: "Loans Processed", value: "5,000+" },
        { label: "Recovery Rate", value: "96%" },
        { label: "Client Retention", value: "89%" },
      ],
    },
    {
      name: "Asheri Milga",
      position: "Accountant",
      bio: "Oversees financial reporting, reconciliations, and compliance. Brings experience in MFI bookkeeping and regulatory submissions.",
      image: asheriImg,
      social: {
        linkedin: "#",
        twitter: "#",
        email: "asheri@transcredit.co.tz",
      },
      quote:
        "Precision in finance builds trust - the foundation of all our relationships.",
      stats: [
        { label: "Regulatory Audits", value: "25+" },
        { label: "Reporting Accuracy", value: "100%" },
        { label: "Years in MFI Finance", value: "8" },
      ],
    },
  ];

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-yellow-400 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-dark">
              Our Leadership Team
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-yellow-400 mx-auto rounded-full mb-6" />
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            The visionaries and executors behind our financial innovation
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedMember(member)}
              className="relative cursor-pointer group"
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  hoveredIndex === index ? "scale-105" : ""
                }`}
              ></div>

              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all h-full flex flex-col">
                {/* Image Container with parallax effect */}
                <motion.div
                  className="h-72 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10">
                    <img
                      src={member.image}
                      alt={`Portrait of ${member.name}`}
                      className="absolute inset-0 w-full h-auto object-cover"
                      loading="lazy" // Optional: lazy loading
                    />
                  </div>
                  {/* Stats overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <div className="flex justify-between text-white">
                      {member.stats.map((stat, i) => (
                        <div key={i} className="text-center">
                          <div className="text-2xl font-bold">{stat.value}</div>
                          <div className="text-xs opacity-80">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div>
                    <motion.h3
                      className="text-2xl font-bold text-gray-800 mb-1"
                      whileHover={{ color: "#005452" }}
                    >
                      {member.name}
                    </motion.h3>
                    <p className="text-primary font-medium mb-4">
                      {member.position}
                    </p>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  {/* Quote and social links */}
                  <div className="mt-auto">
                    <div className="flex items-start mb-4">
                      <FaQuoteLeft className="text-primary/30 text-2xl mr-3 mt-1" />
                      <p className="text-gray-500 italic text-sm line-clamp-2">
                        {member.quote}
                      </p>
                    </div>

                    <div className="flex space-x-4 border-t border-gray-100 pt-4">
                      {Object.entries(member.social).map(([platform, url]) => (
                        <SocialIcon
                          key={platform}
                          platform={platform}
                          url={url as string}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedMember(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="h-full relative">
                  <img
                    src={selectedMember.image}
                    alt={`Portrait of ${selectedMember.name}`}
                    className="h-full min-h-96 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="text-white">
                      <h3 className="text-3xl font-bold">
                        {selectedMember.name}
                      </h3>
                      <p className="text-primary-light">
                        {selectedMember.position}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      Bio
                    </h4>
                    <p className="text-gray-700">{selectedMember.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {selectedMember.stats.map((stat, i) => (
                        <div key={i} className="bg-primary/5 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-primary">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      Philosophy
                    </h4>
                    <div className="flex items-start bg-primary/5 p-4 rounded-lg">
                      <FaQuoteLeft className="text-primary/30 text-2xl mr-3 mt-1" />
                      <p className="text-gray-700 italic">
                        {selectedMember.quote}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">
                      Connect
                    </h4>
                    <div className="flex space-x-4">
                      {Object.entries(selectedMember.social).map(
                        ([platform, url]) => (
                          <SocialIcon
                            key={platform}
                            platform={platform}
                            url={url as string}
                          />
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TeamSection;
