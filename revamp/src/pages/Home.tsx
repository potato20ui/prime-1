import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import IndustryInsights from "@/components/IndustryInsights";
import OurServices from "@/components/OurServices";
import AboutSection from "@/components/AboutSection";
import TrustedPartners from '@/components/TrustedPartners';
import Testimonials from '@/components/Testimonials';
import LastSection from '@/components/LastSection';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <Hero/>
      <OurServices />
      <IndustryInsights />
      <AboutSection />
      <TrustedPartners />
      <Testimonials />
      <LastSection />
      <Footer />
    </div>
  );
}

export default Home;