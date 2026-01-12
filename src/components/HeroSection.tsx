const HeroSection = () => {
  const services = [
    "Event Management",
    "Digital Branding", 
    "Influencer Marketing",
    "Instant Reels",
    "Wedding Shoots",
    "Corporate Events"
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="section-title text-6xl md:text-8xl lg:text-9xl mb-4">
          Growid
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-16 text-foreground/80 font-medium">
          Grow Your Digital Identity
        </h2>
        
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-primary">
            Our Services
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-5 py-3 bg-foreground/10 rounded-full text-sm md:text-base font-semibold hover:bg-primary hover:text-background transition-all duration-300 cursor-pointer"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            View Portfolio
          </a>
          <a
            href="#videos"
            className="inline-flex items-center justify-center px-8 py-4 bg-card text-card-foreground font-semibold rounded-full hover:bg-secondary transition-all duration-300 hover:scale-105"
          >
            Watch Reels
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
