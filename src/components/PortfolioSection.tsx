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
  { image: image1, title: "Product Collection", category: "Product Photography", filter: "Products", size: "large" },
  { image: image2, title: "Behind The Scenes", category: "Video Production", filter: "Video", size: "medium" },
  { image: image3, title: "Editorial Shoot", category: "Fashion", filter: "Fashion", size: "tall" },
  { image: image4, title: "Gourmet Experience", category: "Photography", filter: "Photography", size: "small" },
  { image: image5, title: "Luxury Timepiece", category: "Product", filter: "Products", size: "medium" },
  { image: image6, title: "Corporate Event", category: "Event Coverage", filter: "Events", size: "wide" },
  { image: image7, title: "Modern Living", category: "Real Estate", filter: "Photography", size: "small" },
  { image: image8, title: "Fitness Campaign", category: "Photography", filter: "Photography", size: "tall" },
  { image: image9, title: "Beauty Products", category: "Cosmetics", filter: "Products", size: "medium" },
  { image: image10, title: "Wedding Story", category: "Wedding", filter: "Events", size: "large" },
  { image: image11, title: "Street Style", category: "Fashion", filter: "Fashion", size: "small" },
  { image: image12, title: "Automotive Elite", category: "Automotive", filter: "Products", size: "wide" },
  { image: image13, title: "Tech Showcase", category: "Technology", filter: "Products", size: "medium" },
  { image: image14, title: "Paradise Found", category: "Travel", filter: "Photography", size: "tall" },
  { image: image15, title: "Artist Portrait", category: "Music", filter: "Photography", size: "small" },
  { image: image16, title: "Café Culture", category: "Photography", filter: "Photography", size: "medium" },
  { image: image17, title: "Diamond Dreams", category: "Jewelry", filter: "Products", size: "large" },
  { image: image18, title: "Game Day", category: "Sports", filter: "Events", size: "wide" },
  { image: image19, title: "Best Friend", category: "Pet Photography", filter: "Photography", size: "small" },
  { image: image20, title: "Fine Dining", category: "Photography", filter: "Photography", size: "medium" },
  { image: image21, title: "Executive Portrait", category: "Corporate", filter: "Photography", size: "tall" },
  { image: image22, title: "Style Guide", category: "E-Commerce", filter: "Products", size: "medium" },
  { image: image23, title: "New Beginnings", category: "Family", filter: "Events", size: "small" },
  { image: image24, title: "Live Concert", category: "Event", filter: "Events", size: "large" },
  { image: image25, title: "Summit Views", category: "Adventure", filter: "Photography", size: "wide" },
  { image: image26, title: "Sneaker Culture", category: "Product", filter: "Products", size: "medium" },
  { image: image27, title: "Sweet Indulgence", category: "Photography", filter: "Photography", size: "small" },
  { image: image28, title: "City Lights", category: "Aerial", filter: "Photography", size: "tall" },
  { image: image29, title: "Mindful Moments", category: "Fashion", filter: "Fashion", size: "medium" },
  { image: image30, title: "Signature Scent", category: "Luxury", filter: "Products", size: "large" },
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
