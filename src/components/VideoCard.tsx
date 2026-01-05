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
      className="video-card group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="aspect-video overflow-hidden relative">
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
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
            <Play className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Info overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="text-[hsl(47,97%,51%)] text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="text-white text-lg md:text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
