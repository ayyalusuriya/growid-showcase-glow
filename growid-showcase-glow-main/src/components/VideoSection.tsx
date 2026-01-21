import VideoCard from "@/components/VideoCard";

// import growid5 from "@/assets/growid5.mp4";
// import growid3 from "@/assets/growid3.mp4";
// import growid2 from "@/assets/growid2.mp4";
// import growidReel from "@/assets/IMG_4443.mp4";

const GROWID5_URL =
  "https://res.cloudinary.com/dlhudsqax/video/upload/growid5_qmiqfv.mp4";

const GROWID3_URL =
  "https://res.cloudinary.com/dlhudsqax/video/upload/growid3_toup0j.mp4";

const GROWID2_URL =
  "https://res.cloudinary.com/dlhudsqax/video/upload/growid2_cvvwgp.mp4";

const GROWID_REEL_URL =
  "https://res.cloudinary.com/dlhudsqax/video/upload/IMG_4443_k1blk1.mp4";


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
          video={GROWID5_URL}
        />

        <VideoCard
          title="Event Coverage"
          subtitle="Corporate Event Highlights"
          video={GROWID3_URL}
        />

        <VideoCard
          title="Instant Reels"
          subtitle="By Growid"
          video={GROWID2_URL}
        />

        <VideoCard
          title="Reels"
          subtitle="Reels By Growid"
          video={GROWID_REEL_URL}
        />

      </div>
    </section>
  );
};

export default VideoSection;