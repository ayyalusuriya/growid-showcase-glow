import { useRef } from "react";
import video1 from "@/assets/IMG_6307.mp4";
import video2 from "@/assets/test1.mp4";

const TestimonialsSection = () => {
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);

  // Generic handlers
  const handleHover = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = (videoRef: React.RefObject<HTMLVideoElement>) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = async (videoRef: React.RefObject<HTMLVideoElement>) => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.controls = true;

    if (video.requestFullscreen) {
      await video.requestFullscreen();
    } else if ((video as any).webkitRequestFullscreen) {
      (video as any).webkitRequestFullscreen();
    } else if ((video as any).msRequestFullscreen) {
      (video as any).msRequestFullscreen();
    }

    video.play();
  };

  return (
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="section-title text-5xl md:text-7xl mb-4 text-[#fec903]">
            Testimonials
          </h2>
          <p className="text-[#fec903]/80 text-lg">
            Real experiences from large-scale events executed by Growid
          </p>
        </div>

        {/* TESTIMONIAL CONTAINERS */}
        <div className="flex flex-wrap justify-center gap-12">

          {/* TESTIMONIAL 1 */}
          <div
            onMouseEnter={() => handleHover(videoRef1)}
            onMouseLeave={() => handleLeave(videoRef1)}
            onClick={() => handleClick(videoRef1)}
            className="
              relative w-full max-w-[720px] h-[380px]
              rounded-3xl overflow-hidden bg-black
              cursor-pointer group
              shadow-2xl
              hover:scale-[1.05]
              transition-all duration-500
            "
          >
            <video
              ref={videoRef1}
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video1} />
            </video>

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all" />

            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-[#fec903] text-3xl font-semibold">
                Aarambam ’26
              </h3>
              <p className="text-[#fec903]/80 text-base">
                Salem’s Biggest New Year Celebration
              </p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-[#fec903] text-black text-3xl font-bold flex items-center justify-center group-hover:scale-125 transition">
                ▶
              </div>
            </div>
          </div>

          {/* TESTIMONIAL 2 */}
          <div
            onMouseEnter={() => handleHover(videoRef2)}
            onMouseLeave={() => handleLeave(videoRef2)}
            onClick={() => handleClick(videoRef2)}
            className="
              relative w-full max-w-[720px] h-[380px]
              rounded-3xl overflow-hidden bg-black
              cursor-pointer group
              shadow-2xl
              hover:scale-[1.05]
              transition-all duration-500
            "
          >
            <video
              ref={videoRef2}
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={video2} />
            </video>

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all" />

            <div className="absolute bottom-8 left-8 z-10">
              <h3 className="text-[#fec903] text-3xl font-semibold">
                Aarambam ’26
              </h3>
              <p className="text-[#fec903]/80 text-base">
                Salems Biggest New Year Event!!
              </p>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 rounded-full bg-[#fec903] text-black text-3xl font-bold flex items-center justify-center group-hover:scale-125 transition">
                ▶
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
