import React, { useRef, useEffect, useState } from "react";

const TESTIMONIAL_VIDEO_1 =
  "https://res.cloudinary.com/dlhudsqax/video/upload/v1769014656/test2_fgpurc.mp4";

const TESTIMONIAL_VIDEO_2 =
  "https://res.cloudinary.com/dlhudsqax/video/upload/IMG_6307_ustcqj.mp4";

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
    <section id="testimonials" className="py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl text-[#fec903] font-bold">
            Testimonials
          </h2>
          <p className="text-[#fec903]/80 text-lg">
            Real experiences from large-scale events executed by Growid
          </p>
        </div>

        {/* CARDS */}
        <div
          ref={containerRef}
          className="flex flex-col md:flex-row gap-10 justify-center items-center"
        >
          {[TESTIMONIAL_VIDEO_1, TESTIMONIAL_VIDEO_2].map((video, i) => (
            <div
              key={i}
              onClick={() => setActiveVideo(video)}
              className="relative w-full max-w-[720px] h-[380px] rounded-3xl overflow-hidden bg-black cursor-pointer group shadow-2xl hover:scale-[1.05] transition-all duration-500"
            >
              <video
                playsInline
                preload="metadata"
                muted
                className="absolute inset-0 w-full h-full object-cover"
              >
                {shouldLoad && <source src={video} type="video/mp4" />}
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all" />

              {/* Text */}
              <div className="absolute bottom-8 left-8 z-10">
                <h3 className="text-[#fec903] text-3xl font-semibold">
                  {i === 0 ? "Aarambam ’26" : "AARAMBAM'2k26"}
                </h3>
                <p className="text-[#fec903]/80 text-base">
                  {i === 0
                    ? "Salem’s Biggest New Year Celebration"
                    : "Drone View Experience"}
                </p>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 rounded-full bg-[#fec903] text-black text-3xl font-bold flex items-center justify-center group-hover:scale-125 transition">
                  ▶
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🎬 MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
          
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl z-50"
          >
            ✕
          </button>

          {/* VIDEO */}
          <div className="w-[90%] md:w-[70%] lg:w-[60%]">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TestimonialsSection;