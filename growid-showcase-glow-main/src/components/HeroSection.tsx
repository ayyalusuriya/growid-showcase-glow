import { useEffect, useState } from "react";
import video1 from "../assets/growid3.mp4";
import video2 from "../assets/growid2.mp4";
import video3 from "../assets/growid5.mp4";

const videos = [video1, video2, video3];

const services = [
  "Event Management",
  "Digital Branding",
  "Influencer Marketing",
  "Instant Reels",
  "Wedding Shoots",
  "Corporate Events",
  "Celebrity Management",
];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

      {/* Background Video */}
      <video
        key={currentVideo}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="section-title text-6xl md:text-8xl lg:text-9xl mb-4 font-extrabold tracking-wide text-[#fec903]">
          Growid
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl mb-16 text-[#fec903]/80 font-semibold">
          Grow Your Digital Identity
        </h2>

        {/* SERVICES */}
        <div className="mt-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 text-[#fec903] animate-fade-up tracking-wide">
  Our Services
</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  service-card
                  bg-black/40
                  border border-[#fec903]/30
                  rounded-2xl
                  py-5 px-4
                  text-[#fec903]
                  font-semibold
                  text-sm md:text-base
                  cursor-pointer
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:scale-105
                  hover:shadow-[0_15px_40px_rgba(254,201,3,0.35)]
                "
              >
                {service}
              </div>
            ))}
          </div>
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-14 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#portfolio"
            className="px-8 py-4 rounded-full border border-[#fec903]
                       text-[#fec903] font-semibold
                       hover:bg-[#fec903] hover:text-black
                       transition-all duration-300"
          >
            View Portfolio
          </a>

          <a
            href="#videos"
            className="flex items-center gap-3 text-[#fec903] font-semibold"
          >
            <span className="w-10 h-14 rounded-full border-2 border-[#fec903] flex items-center justify-center">
              ●
            </span>
            Watch Reels
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
