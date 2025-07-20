import TeamSection from "../components/teamSection";
import Header from "../components/header";
import HeroSection from "../components/heroSection";
import AboutUs from "../components/aboutUs";
import OurServices from "../components/ourServices";
import HowItWorks from "../components/howItWorks";
import WhyTms from "../components/whyTms";
import WhyPartnering from "../components/whyPartnering";
import OurPartners from "../components/ourPartners";
import Testimonials from "../components/testimonials";
import Contact from "../components/contact";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      <Header />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <HowItWorks />
      <WhyTms />
      <TeamSection />
      <WhyPartnering />
      <OurPartners />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
