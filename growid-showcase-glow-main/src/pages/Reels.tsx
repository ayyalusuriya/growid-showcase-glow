import VideoSection from "@/components/VideoSection";
import Testimonials from "@/pages/Testimonials";

const Reels = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoSection />
      <Testimonials /> {/* TAB appears below reels */}
    </div>
  );
};

export default Reels;
