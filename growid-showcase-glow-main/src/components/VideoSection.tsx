import VideoCard from "@/components/VideoCard";

import growid5 from "@/assets/growid5.mp4";
import growid3 from "@/assets/growid3.mp4";
import growid2 from "@/assets/growid2.mp4";
import growidReel from "@/assets/IMG_4443.mp4";

const VideoSection = () => {
  return (
    <section className="py-24 bg-background">
      
      {/* SECTION HEADING */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide text-[#fec903]">
          Reels By Growid
        </h2>
        <p className="mt-3 text-[#fec903] text-sm md:text-base">
          High-impact visual stories crafted by Growid
        </p>
      </div>

      {/* VIDEO CARDS */}
      <div className="flex flex-wrap gap-10 justify-center">

        <VideoCard
          title="Aarambam"
          subtitle="Brand Commercial"
          video={growid5}
        />

        <VideoCard
          title="Event Coverage"
          subtitle="Corporate Event Highlights"
          video={growid3}
        />

        <VideoCard
          title="Instant Reels"
          subtitle="By Growid"
          video={growid2}
        />

        <VideoCard
          title="Reels"
          subtitle="Reels By Growid"
          video={growidReel}
        />

      </div>
    </section>
  );
};

export default VideoSection;
