import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

// 👉 IMPORT YOUR IMAGES (same as yours)
import image26 from "@/assets/portfolio/ugjgj.jpg.jpeg";
import image2 from "@/assets/portfolio/image-2.jpg";
import image3 from "@/assets/portfolio/image-3.jpg";
import image4 from "@/assets/portfolio/image-4.jpg";
import image6 from "@/assets/portfolio/image-6.jpg";
import image7 from "@/assets/portfolio/image-7.jpg";
import image9 from "@/assets/portfolio/image-9.jpg";
import image27 from "@/assets/portfolio/IMG_1052 copy.jpg.jpeg";
import image28 from "@/assets/portfolio/IMG_1039 copy.jpg.jpeg";
import image29 from "@/assets/portfolio/IMG_1042 copy.jpg.jpeg";
import image30 from "@/assets/portfolio/IMG_1061 copy.jpg (1).jpeg";
import image31 from "@/assets/portfolio/10.jpg.jpeg";
import image32 from "@/assets/portfolio/7.jpg.jpeg";
import image33 from "@/assets/portfolio/IMG_1121 copy.jpg.jpeg"
import image10 from "@/assets/portfolio/vizag.jpg";
import image11 from "@/assets/portfolio/Onam.jpg";
import image12 from "@/assets/portfolio/onam25.jpg";
import image13 from "@/assets/portfolio/IMG_7427_2.jpg.jpeg";
import image14 from "@/assets/portfolio/IMG_7441_2.jpg.jpeg";
import image15 from "@/assets/portfolio/IMG_7558_2.jpg.jpeg";
import image16 from "@/assets/portfolio/ugjgj.jpg.jpeg";
import image17 from "@/assets/portfolio/anddd.jpg.jpeg";
import image18 from "@/assets/portfolio/pro 2.jpg.jpeg";
import image19 from "@/assets/portfolio/pro 3.jpg.jpeg";
import image20 from "@/assets/portfolio/fsfsf.jpg.jpeg";
import image21 from "@/assets/portfolio/A1.jpg.jpeg";
import image22 from "@/assets/portfolio/IMG_0009.jpg.jpeg";
import image23 from "@/assets/portfolio/IMG_0223.jpg.jpeg";
import image24 from "@/assets/portfolio/IMG_0289.jpg.jpeg";
import image25 from "@/assets/portfolio/IMG_0474.jpg.jpeg";
import image1 from "@/assets/portfolio/image-1.jpg";
import image5 from "@/assets/portfolio/image-5.jpg";

// TYPES
type CategoryFilter = "All" | "Events" | "Andrea" | "Tovino & Kayadu Lohar";
const categories: CategoryFilter[] = ["All", "Events", "Andrea" , "Tovino & Kayadu Lohar"];

// ✅ SUBFILTERS
const eventSubFilters = ["Sparkz", "Aarambam"];

type SizeVariant = "small" | "medium" | "large" | "tall" | "wide";

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  filter: CategoryFilter;
  size: SizeVariant;
}

// DATA (your same)
const portfolioItems: PortfolioItem[] = [
  { image: image26, title: "Concert", category: "Andrea", filter: "Andrea", size: "large" },
  { image: image1, title: "Aarambam", category: "Event", filter: "Events", size: "wide" },
  { image: image2, title: "Sparkz", category: "Event", filter: "Events", size: "wide" },
  { image: image3, title: "Aarambam", category: "Event", filter: "Events", size: "medium" },
  { image: image5, title: "Aarambam", category: "Event", filter: "Events", size: "tall" },
  { image: image6, title: "Aarambam", category: "Event", filter: "Events", size: "large" },
  { image: image7, title: "Aarambam", category: "Event", filter: "Events", size: "tall" },
  { image: image9, title: "Onam", category: "Event", filter: "Events", size: "medium" },
  { image: image27,title: "Tovino" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "large" },
  { image: image28, title: "Tovino" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "wide" },
  { image: image29, title: "Tovino" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "medium"  },
  { image: image30, title: "Tovino" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "medium" },
  { image: image31, title: "Kayadu Lohar" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "large" },
  { image: image32, title: "Kayadu Lohar" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "tall"},
  { image: image33, title: "Kayadu Lohar" , category: "Event", filter: "Tovino & Kayadu Lohar", size: "tall"},
  { image: image11, title: "Sparkz", category: "Event", filter: "Events", size: "tall" },
  { image: image12, title: "Onam", category: "Event", filter: "Events", size: "tall" },
  { image: image13, title: "Sparkz", category: "Event", filter: "Events", size: "large" },
  { image: image14, title: "Sparkz", category: "Event", filter: "Events", size: "tall" },
  { image: image15, title: "Sparkz", category: "Event", filter: "Events", size: "tall" },
  { image: image16, title: "Sparkz", category: "Event", filter: "Events", size: "tall" },
  { image: image17, title: "Concert", category: "Andrea", filter: "Andrea", size: "tall" },
  { image: image18, title: "Concert", category: "Andrea", filter: "Andrea", size: "large" },
  { image: image19, title: "Concert", category: "Andrea", filter: "Andrea", size: "large" },
  { image: image20, title: "Concert", category: "Event", filter: "Events", size: "tall" },
  { image: image10, title: "Aarambam", category: "Event", filter: "Events", size: "large" },
  { image: image21, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },
  { image: image22, title: "Concert", category: "Andrea", filter: "Andrea", size: "wide" },
  { image: image23, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },
  { image: image24, title: "Concert", category: "Andrea", filter: "Andrea", size: "wide" },
  { image: image25, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },
  { image: image1, title: "Aarambam", category: "Event", filter: "Events", size: "medium" },
  { image: image4, title: "Aarambam", category: "Event", filter: "Events", size: "wide" },
];

// GRID SIZE
const getSizeClasses = (size: SizeVariant): string => {
  switch (size) {
    case "large":
      return "col-span-2 row-span-2";
    case "tall":
      return "row-span-2";
    case "wide":
      return "col-span-2";
    default:
      return "col-span-1 row-span-1";
  }
};

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("All");
  const [activeSubFilter, setActiveSubFilter] = useState("All"); // ✅ NEW
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // ✅ FILTER LOGIC
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(item => {
          if (activeFilter === "Events") {
            return (
              item.filter === "Events" &&
              (activeSubFilter === "All" ||
                item.title === activeSubFilter)
            );
          }
          return item.filter === activeFilter;
        });

  const visibleItems = showAll ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section className="py-20 md:py-32 bg-[#0b0b0b] text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl text-[#fec903] font-bold mb-4">
            OUR WORK
          </h2>

          {/* MAIN FILTERS */}
          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => {
                  setActiveFilter(category);
                  setActiveSubFilter("All");
                  setShowAll(false);
                }}
                className={`px-5 py-2 rounded-full transition ${
                  activeFilter === category
                    ? "bg-[#fec903] text-black"
                    : "bg-[#fec903]/10 text-[#fec903]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* SUBFILTERS */}
          {activeFilter === "Events" && (
            <div className="flex justify-center gap-3 mt-6 flex-wrap">
              {eventSubFilters.map(sub => (
                <button
                  key={sub}
                  onClick={() => {
                    setActiveSubFilter(sub);
                    setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-full transition ${
                    activeSubFilter === sub
                      ? "bg-[#fec903] text-black"
                      : "bg-[#fec903]/10 text-[#fec903]"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 auto-rows-[160px] md:auto-rows-[220px] grid-flow-dense">
          {visibleItems.map((item, index) => (
            <div key={index} className={getSizeClasses(item.size)}>
              <PortfolioCard
                image={item.image}
                title={item.title}
                category={item.category}
                onClick={() => setSelectedImage(item.image)}
              />
            </div>
          ))}
        </div>

        {/* VIEW MORE / LESS */}
        <div className="flex justify-center mt-12 gap-4">
          {!showAll && filteredItems.length > 8 && (
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 border border-[#fec903] text-[#fec903] rounded-full hover:bg-[#fec903] hover:text-black transition-all duration-300"
            >
              View More
            </button>
          )}
          {showAll && (
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 border border-[#fec903] text-[#fec903] rounded-full hover:bg-[#fec903] hover:text-black transition-all duration-300"
            >
              View Less
            </button>
          )}
        </div>

        {/* FULLSCREEN */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white text-4xl">
              ✕
            </button>
            <img
              src={selectedImage}
              alt="preview"
              className="max-w-[90%] max-h-[90%] rounded-2xl"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;