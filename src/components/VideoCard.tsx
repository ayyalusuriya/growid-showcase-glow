import { Play } from "lucide-react";
import { useRef, useState } from "react";

interface VideoCardProps {
  thumbnail: string;
  videoUrl: string;
  title: string;
  category: string;
}

const VideoCard = ({ thumbnail, videoUrl, title, category }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="video-card group mx-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ maxWidth: '280px' }}
    >
      {/* Mobile phone frame */}
      <div className="relative bg-card rounded-[2.5rem] p-2 shadow-2xl border-4 border-card/80">
        {/* Phone notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-20" />
        
        {/* Screen container with 9:16 aspect ratio */}
        <div className="relative overflow-hidden rounded-[2rem] bg-black" style={{ aspectRatio: '9/16' }}>
          {/* Thumbnail image */}
          <img
            src={thumbnail}
            alt={title}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          
          {/* Video element */}
          <video
            ref={videoRef}
            src={videoUrl}
            muted
            loop
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Play overlay */}
          <div className={`play-overlay ${isHovered ? "opacity-0" : "opacity-100"}`}>
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
              <Play className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        
        {/* Phone home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-foreground/30 rounded-full" />
      </div>

      {/* Info below phone */}
      <div className="text-center mt-4">
        <p className="text-primary text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="text-foreground text-base md:text-lg font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default VideoCard;
