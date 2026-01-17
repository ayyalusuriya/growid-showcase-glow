import VideoSection from "@/components/VideoSection";
import Testimonials from "@/pages/testimonials";

const Reels = () => {
  return (
    <div className="min-h-screen bg-background">
      <VideoSection />
      <Testimonials /> {/* TAB appears below reels */}
    </div>
  );
};

export default Reels;
