import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Landingpage/Hero";
import Footer from "@/components/Footer";
import IndustryInsights from "@/components/Landingpage/IndustryInsights";
import OurServices from "@/components/Landingpage/OurServices";
import AboutSection from "@/components/Landingpage/AboutSection";
import BlogSection from "@/components/Landingpage/BlogSection";
import TrustedPartners from '@/components/Landingpage/TrustedPartners';
import Testimonials from '@/components/Landingpage/Testimonials';
import LastSection from '@/components/Landingpage/InquireSection';

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero/>
      <OurServices />
      <IndustryInsights />
      <AboutSection />
      <BlogSection />
      <TrustedPartners />
      <Testimonials />
      <LastSection />
      <Footer />
    </div>
  );
}

export default Home;