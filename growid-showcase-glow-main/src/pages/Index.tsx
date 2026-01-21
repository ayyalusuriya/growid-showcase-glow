import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import EventManagementSection from "@/components/EventManagementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
<HeroSection />



<EventManagementSection />   

<PortfolioSection />         // OUR WORK
<VideoSection />
<TestimonialsSection />
<Footer />


      
    </div>
  );
};

export default Index;
