import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

// Import portfolio images
import image1 from "@/assets/portfolio/image-1.jpg";
import image2 from "@/assets/portfolio/image-2.jpg";
import image3 from "@/assets/portfolio/image-3.jpg";
import image4 from "@/assets/portfolio/image-4.jpg";
import image5 from "@/assets/portfolio/image-5.jpg";
import image6 from "@/assets/portfolio/image-6.jpg";
import image7 from "@/assets/portfolio/image-7.jpg";
import image8 from "@/assets/portfolio/image-8.jpg";
import image9 from "@/assets/portfolio/image-9.jpg";
import image10 from "@/assets/portfolio/vizag.jpg";
import image11 from "@/assets/portfolio/Onam.jpg";
import image12 from "@/assets/portfolio/onam25.jpg";  //

type CategoryFilter =
  | "All"
  | "Photography"
  | "Video"
  | "Events"
  | "Products"
  

const categories: CategoryFilter[] = [
  "All",
  "Photography",
  "Video",
  "Events",
  "Products",

];

// Masonry size variants
type SizeVariant = "small" | "medium" | "large" | "tall" | "wide";

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  filter: CategoryFilter;
  size: SizeVariant;
}

const portfolioItems: PortfolioItem[] = [
  { image: image1, title: "Vani Bojan Performance", category: "Event Photography", filter: "Events", size: "large" },
  { image: image2, title: "Stage Performance", category: "Event Coverage", filter: "Events", size: "tall" },
  { image: image3, title: "Concert Moment", category: "Photography", filter: "Photography", size: "medium" },
  { image: image4, title: "Artist Portrait", category: "Portrait Photography", filter: "Photography", size: "wide" },
  { image: image5, title: "Heart Gesture", category: "Event Photography", filter: "Events", size: "tall" },
  { image: image6, title: "Hari Charan Live", category: "Concert Photography", filter: "Events", size: "large" },
  { image: image7, title: "Hari Charan Performance", category: "Event Coverage", filter: "Events", size: "tall" },
  { image: image8, title: "Maalavika Concert", category: "Live Performance", filter: "Events", size: "wide" },
  { image: image9, title: "Onam Celebration", category: "Cultural Events", filter: "Events", size: "tall" },
  { image: image11, title: "Onam celeb", category: "Cultural Event" , filter: "Events" , size: "tall"},
  { image: image12, title: "Onam 2025", category: "Cultural Event" , filter: "Events" , size: "tall"},
  {
    image: image10,
    title: "Vizag Event Coverage",
    category: "Live Event Photography",
    filter: "Events",
    size: "medium",
  },
];

const getSizeClasses = (size: SizeVariant): string => {
  switch (size) {
    case "large":
      return "col-span-2 row-span-2";
    case "tall":
      return "col-span-1 row-span-2";
    case "wide":
      return "col-span-2 row-span-1";
    default:
      return "col-span-1 row-span-1";
  }
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.filter === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="section-title text-5xl md:text-7xl mb-4 text-[#fec903]">
            OUR WORK
          </h2>
          <p className="text-[#fec903]/80 text-lg max-w-2xl mx-auto mb-8">
            A curated collection of our finest visual content created for brands across industries
          </p>

          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#fec903] text-black shadow-lg"
                    : "bg-[#fec903]/10 text-[#fec903] hover:bg-[#fec903]/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 MASONRY GRID — NO EMPTY SPACES */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-4 md:gap-6
            auto-rows-[200px] md:auto-rows-[250px]
            grid-flow-dense
          "
        >
          {filteredItems.map((item, index) => (
            <div
              key={`${item.title}-${index}`}
              className={getSizeClasses(item.size)}
            >
              <PortfolioCard
                image={item.image}
                title={item.title}
                category={item.category}
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="text-center text-[#fec903]/50 py-12">
            No items found in this category.
          </p>
        )}
      </div>
              {/* SHOT ON IPHONE TEXT */}
        <div className="mt-16 flex items-center justify-center gap-3 text-[#fec903]">
  {/* Apple Logo SVG */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className="w-9 h-9 fill-[#ffffff]"
  >
    <path d="M318.7 268.6c-.2-38.7 31.6-57.2 33-58.1-18-26.3-46-29.9-55.9-30.3-23.8-2.4-46.5 14-58.6 14-12.1 0-30.9-13.6-50.7-13.3-26 .4-50 15.2-63.4 38.7-27.1 46.9-6.9 116.4 19.4 154.4 12.9 18.5 28.3 39.3 48.5 38.5 19.5-.8 26.8-12.6 50.3-12.6 23.5 0 30 12.6 50.7 12.2 21-.4 34.3-19.1 47.1-37.7 14.8-21.6 20.9-42.6 21.1-43.7-.5-.2-40.4-15.5-40.6-61.1zM260.6 78.8c10.7-13 17.9-31.2 15.9-49.4-15.4.6-34.1 10.3-45.2 23.3-9.9 11.4-18.6 29.7-16.3 47.1 17.2 1.3 34.9-8.7 45.6-21z"/>
  </svg>

  <span className="text-lg md:text-xl font-semibold tracking-wide text-[#ffffff]">
    Shot on iPhone
  </span>
</div>
    </section>
  );
};

export default PortfolioSection;
