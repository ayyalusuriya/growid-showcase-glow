import { useRef } from "react";
import testimonialVideo from "@/assets/IMG_6307.mp4";

const TestimonialsSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Hover preview (muted)
  const handleHover = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Click → FULLSCREEN + AUDIO
  const handleClick = async () => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    video.muted = false;
    video.controls = true;

    if (video.requestFullscreen) {
      await video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    }

    video.play();
  };

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="section-title text-5xl md:text-7xl mb-4 text-[#fec903]">
            Client Testimonials
          </h2>
          <p className="text-[#fec903]/80 text-lg">
            Real experiences from large-scale events executed by Growid
          </p>
        </div>

        {/* CENTERED TESTIMONIAL */}
        <div className="flex justify-center">
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={handleClick}
            className="
              relative w-full max-w-[620px] h-[360px]
              rounded-3xl overflow-hidden bg-black
              cursor-pointer group
              shadow-2xl
              hover:scale-[1.05]
              transition-all duration-500
            "
          >
            {/* VIDEO */}
            <video
              ref={videoRef}
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={testimonialVideo} type="video/mp4" />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/45 group-hover:bg-black/20 transition-all" />

            {/* TEXT */}
            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-[#fec903] text-3xl font-semibold mb-1">
                Aarambam ’26
              </h3>
              <p className="text-[#fec903]/80 text-base">
                Salem’s Biggest New Year Celebration
              </p>
            </div>

            {/* PLAY ICON */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="
                w-20 h-20 rounded-full bg-[#fec903]
                text-black text-3xl font-bold
                flex items-center justify-center
                group-hover:scale-125 transition
              ">
                ▶
              </div>
            </div>

            {/* HINT */}
            <div className="absolute top-6 right-6 text-[#fec903]/80 text-sm z-10">
              Click to watch full screen
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
