import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

// Import portfolio images
import image1 from "@/assets/portfolio/image-1.jpg";
import image2 from "@/assets/portfolio/image-2.jpg";
import image3 from "@/assets/portfolio/image-3.jpg";
import image4 from "@/assets/portfolio/image-4.jpg";
import image5 from "@/assets/portfolio/image-5.jpg";

type CategoryFilter = "All" | "Photography" | "Video" | "Events" | "Products" | "Fashion";

const categories: CategoryFilter[] = [
  "All",
  "Photography", 
  "Video",
  "Events",
  "Products",
  "Fashion"
];

// Size variants for masonry-like layout
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
];

const getSizeClasses = (size: SizeVariant): string => {
  switch (size) {
    case "small":
      return "col-span-1 row-span-1";
    case "medium":
      return "col-span-1 row-span-1 md:col-span-1 md:row-span-1";
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

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.filter === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title text-5xl md:text-7xl mb-4">OUR WORK</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8">
            A curated collection of our finest visual content created for brands across industries
          </p>
          
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.map((category) => (
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
          {filteredItems.map((item, index) => (
            <div key={`${item.title}-${index}`} className={getSizeClasses(item.size)}>
              <PortfolioCard
                image={item.image}
                title={item.title}
                category={item.category}
              />
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <p className="text-center text-foreground/50 py-12">No items found in this category.</p>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
