import { useRef, useState, useEffect } from "react";

interface VideoCardProps {
  title: string;
  subtitle: string;
  video: string;
}

const VideoCard = ({ title, subtitle, video }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current && shouldLoad) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);
    setMuted(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }
  };

  const toggleAudio = () => {
    if (!videoRef.current) return;
    const newMuted = !muted;
    setMuted(newMuted);
    videoRef.current.muted = newMuted;
    videoRef.current.play().catch(() => {});
  };

  return (
    <div
      ref={containerRef}
      className="relative w-[260px] h-[520px] rounded-3xl overflow-hidden border-4 border-red-800 bg-black cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        muted
        className="absolute inset-0 w-full h-full object-cover"
      >
        {shouldLoad && <source src={video} type="video/mp4" />}
      </video>

      {!hovered && <div className="absolute inset-0 bg-black/40 z-10" />}

      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
            ▶
          </div>
        </div>
      )}

      {hovered && (
        <button
          onClick={toggleAudio}
          className="absolute top-4 right-4 z-30 bg-black/70 text-white px-3 py-2 rounded-full text-sm"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}

      <div className="absolute bottom-6 w-full text-center z-30">
        <p className="text-yellow-400 font-bold text-sm uppercase">
          {title}
        </p>
        <p className="text-yellow-500 text-xs mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
