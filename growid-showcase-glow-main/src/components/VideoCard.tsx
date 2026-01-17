import { useRef, useState } from "react";

interface VideoCardProps {
  title: string;
  subtitle: string;
  video: string;
}

const VideoCard = ({ title, subtitle, video }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [muted, setMuted] = useState(true);

  const handleEnter = () => {
    setHovered(true);
    if (videoRef.current) {
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

    const newMutedState = !muted;
    setMuted(newMutedState);
    videoRef.current.muted = newMutedState;

    // ensure playback continues with sound
    videoRef.current.play().catch(() => {});
  };

  return (
    <div
      className="relative w-[260px] h-[520px] rounded-3xl overflow-hidden border-4 border-red-800 bg-black cursor-pointer"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* DARK OVERLAY (only when not hovered) */}
      {!hovered && (
        <div className="absolute inset-0 bg-black/40 z-10" />
      )}

      {/* PLAY ICON */}
      {!hovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl font-bold">
            ▶
          </div>
        </div>
      )}

      {/* AUDIO TOGGLE BUTTON */}
      {hovered && (
        <button
          onClick={toggleAudio}
          className="absolute top-4 right-4 z-30 bg-black/70 text-white px-3 py-2 rounded-full text-sm"
        >
          {muted ? "🔇" : "🔊"}
        </button>
      )}

      {/* TEXT */}
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
