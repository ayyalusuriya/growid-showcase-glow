const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="section-title text-6xl md:text-8xl lg:text-9xl mb-6">
          VISUAL STORIES
        </h1>
        <h2 className="section-title text-4xl md:text-6xl lg:text-7xl mb-8 text-primary/80">
          THAT CAPTIVATE
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-foreground/80 font-medium">
          Premium content creation for brands that demand excellence. 
          From stunning photography to cinematic video production.
        </p>
        
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
