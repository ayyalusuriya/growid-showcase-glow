import React, { useState, useRef, useEffect } from "react";
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

  const sliderRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // AUTO SCROLL
  useEffect(() => {
    const slider = sliderRef.current;

    const autoScroll = () => {
      if (!isDown.current) {
        slider.scrollLeft += 1;

        if (slider.scrollLeft >= slider.scrollWidth / 2) {
          slider.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(autoScroll, 20);
    return () => clearInterval(interval);
  }, []);

  // DRAG START
  const handleMouseDown = (e) => {
    isDown.current = true;
    sliderRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseUp = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    sliderRef.current.classList.remove("cursor-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="py-24 bg-black overflow-hidden">

      {/* TITLE */}
      <h2 className="text-center text-5xl font-bold text-[#fec903] mb-16">
        Reels By Growid
      </h2>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-8 px-10 overflow-x-scroll scrollbar-hide cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
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

      {/* FULLSCREEN VIDEO */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 text-white text-3xl z-50"
            onClick={() => setActiveVideo(null)}
          >
            ✕
          </button>

          {/* VIDEO */}
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