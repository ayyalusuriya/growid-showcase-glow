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

type CategoryFilter =
  | "All"
  | "Photography"
  | "Video"
  | "Events"
  | "Products"
  | "Fashion";

const categories: CategoryFilter[] = [
  "All",
  "Photography",
  "Video",
  "Events",
  "Products",
  "Fashion",
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
  { image: image9, title: "Onam Celebration", category: "Cultural Events", filter: "Events", size: "medium" },
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
          <h2 className="text-4xl md:text-7xl font-extrabold tracking-wide text-[#fec903]">
            OUR WORK
          </h2>
          <p className="text-[#fec903] text-lg max-w-2xl mx-auto mb-8">
            A curated collection of our finest visual content created for brands across industries
          </p>

          {/* FILTER TABS */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-[#fec903]">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-foreground text-background shadow-lg"
                    : "bg-foreground/10 text-foreground hover:bg-foreground/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 🔥 MASONRY GRID – NO EMPTY SPACES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
                        gap-4 md:gap-6
                        auto-rows-[200px] md:auto-rows-[250px]
                        grid-flow-dense">

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
          <p className="text-center text-foreground/50 py-12">
            No items found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
