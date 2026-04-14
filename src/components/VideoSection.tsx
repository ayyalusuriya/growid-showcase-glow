import React, { useState } from "react";
import VideoCard from "@/components/VideoCard";

const videos = [
  "https://res.cloudinary.com/dlhudsqax/video/upload/IMG_8531_mlox9a.mov",
  "https://res.cloudinary.com/dlhudsqax/video/upload/WhatsApp_Video_2026-04-05_at_12.34.10_PM_j5qtou.mp4",
  "https://res.cloudinary.com/dlhudsqax/video/upload/growid5_qmiqfv.mp4",
  "https://res.cloudinary.com/dlhudsqax/video/upload/IMG_4443_k1blk1.mp4",
  "https://res.cloudinary.com/dlhudsqax/video/upload/growid2_cvvwgp.mp4",
  "https://res.cloudinary.com/dlhudsqax/video/upload/growid3_toup0j.mp4",
];

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="py-24 bg-black overflow-hidden">

      {/* TITLE */}
      <h2 className="text-center text-5xl font-bold text-[#fec903] mb-16">
        Reels By Growid
      </h2>

      {/* SLIDER */}
      <div className="overflow-hidden w-full">
        <div className="animate-reels gap-8 px-10">

          {/* DUPLICATE FOR SMOOTH LOOP */}
          {[...videos, ...videos].map((video, i) => (
            <VideoCard
              key={i}
              title="Growid"
              subtitle="Reel"
              video={video}
              onClick={setActiveVideo}
            />
          ))}

        </div>
      </div>

      {/* FULLSCREEN VIDEO */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* CLOSE BUTTON */}
          <button
            className="absolute top-6 right-6 text-white text-3xl z-50"
            onClick={() => setActiveVideo(null)}
          >
            ✕
          </button>

          {/* FIXED VERTICAL VIDEO */}
          <video
            src={activeVideo}
            controls
            autoPlay
            className="h-[90vh] w-auto max-h-[90vh] object-contain rounded-xl"
          />

        </div>
      )}

    </section>
  );
};

export default VideoSection;