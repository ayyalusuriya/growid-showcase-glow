import { useEffect, useState } from "react";
import video1 from "../assets/growid3.mp4";
import video2 from "../assets/growid2.mp4";
import video3 from "../assets/growid5.mp4";

const videos = [video1, video2, video3];

const services = [
  "Event Management",
  "Celebrity Management",
  "Instant Reels",
  "Digital Marketing",
  "Digital Branding",
  "Page Maintenance",
  "Influencer Marketing",
  "Ads Shoot",
  "Graphics Designing",
  "Corporate Events",
  "Poster Designing",
  "Editing Services",
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">

      {/* BACKGROUND VIDEO */}
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

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">

        {/* BRAND */}
        <h1 className="section-title text-7xl md:text-8xl lg:text-9xl mb-6 font-extrabold tracking-wide text-[#fec903]">
          Growid
        </h1>

        <h2 className="text-xl md:text-3xl lg:text-3xl mb-20 text-[#fec903]/80 font-bold tracking-wide">
          Grow Your Digital Identity
        </h2>

        {/* ================= ABOUT US ================= */}
        <div className="max-w-4xl mx-auto mb-24">
          <div
            className="
              bg-[#222222]
              border border-[#fec903]/30
              rounded-3xl
              p-8 md:p-10
              shadow-[0_20px_50px_rgba(254,201,3,0.25)]
              animate-fade-up
            "
          >
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#fec903] tracking-wide">
              About Us
            </h3>

            <p className="text-[#fec903]/80 text-base md:text-bold leading-relaxed">
              Grow.id is a creative production and event management company
              specializing in event production, instant reels, celebrity
              management, and large-scale executions, along with complete
              branding, content, design, and marketing support — built to turn
              moments into impact and brands into experiences.
            </p>
          </div>
        </div>

        {/* ================= OUR SERVICES ================= */}
        <div className="mt-10">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-16 text-[#fec903] animate-fade-up tracking-wide">
            Our Services
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="
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

        {/* ================= CTA BUTTONS ================= */}
        <div className="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#portfolio"
            className="
              px-10 py-4 rounded-full
              border border-[#fec903]
              text-[#fec903] font-semibold
              hover:bg-[#fec903] hover:text-black
              transition-all duration-300
            "
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
