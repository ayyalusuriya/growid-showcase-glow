import React, { useRef, useState, useEffect } from "react";

const VideoCard = ({ title, subtitle, video, onClick }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [hovered, setHovered] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(video)}
      className="relative w-[260px] h-[520px] rounded-3xl overflow-hidden 
                 cursor-pointer bg-black flex-shrink-0
                 border border-[#fec903]/20 
                 transition-all duration-500 
                 hover:scale-105 hover:shadow-[0_0_40px_#fec903]"
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {shouldLoad && <source src={video} type="video/mp4" />}
      </video>

      {/* OVERLAY */}
      {!hovered && <div className="absolute inset-0 bg-black/50 z-10" />}

      {/* PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <div className="w-16 h-16 bg-[#fec903] rounded-full flex items-center justify-center text-black font-bold shadow-[0_0_25px_#fec903]">
          ▶
        </div>
      </div>

      {/* TEXT */}
      <div className="absolute bottom-6 w-full text-center z-30">
        <p className="text-[#fec903] text-sm font-semibold uppercase">
          {title}
        </p>
        <p className="text-gray-300 text-xs">{subtitle}</p>
      </div>
    </div>
  );
};

export default VideoCard;