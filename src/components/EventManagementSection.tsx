const EventManagementSection = () => {
  return (
    <section className="py-24 bg-black">
      {/* SECTION TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#fec903]">
          Event Management By Growid
        </h2>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">

        {/* AARAMBAM 26 */}
        <div className="group bg-black rounded-3xl p-8 border border-[#fec903]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(254,201,3,0.25)]">
          
          <h3 className="text-2xl font-bold text-[#fec903] mb-5">
            AARAMBAM ’26
          </h3>

          {/* STATS */}
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold text-[#fec903] mb-6">
            <span>10,000+ people</span>
            <span>•</span>
            <span>One night</span>
            <span>•</span>
            <span>Countless moments</span>
          </p>

          <p className="text-[#fec903]/80 leading-relaxed">
            Aarambam ’26 was Salem’s biggest New Year Party, welcoming an audience
            of over 7,500+ people. Grow.id was entrusted with both event management
            and real-time digital content creation, delivering a seamless
            on-ground experience along with instant online visibility.
          </p>
        </div>

        {/* MIRTH 25 */}
        <div className="group bg-[#222222] rounded-3xl p-8 border border-[#fec903]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(254,201,3,0.25)]">
          
          <h3 className="text-2xl font-bold text-[#fec903] mb-5">
            MIRTH ’25
          </h3>

          {/* STATS */}
          <p className="flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-semibold text-[#fec903] mb-6">
            <span>5,000+ students</span>
            <span>•</span>
            <span>Two days</span>
            <span>•</span>
            <span>High-energy fest</span>
          </p>

          <p className="text-[#fec903]/80 leading-relaxed">
            MIRTH’25, the cultural fest of the Fine Arts Club (PYROS) at
            Kalasalingam University, brought together over 5,000+ students for
            two days of performances, shows, and large-scale attractions.
            Grow.id ensured flawless event execution and strong digital presence.
          </p>
        </div>

      </div>
    </section>
  );
};

export default EventManagementSection;
