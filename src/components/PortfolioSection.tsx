import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

// Images
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
import image26 from "@/assets/portfolio/ugjgj.jpg.jpeg";


type CategoryFilter = "All" | "Photography" | "Video" | "Events" | "Andrea" ;

const categories: CategoryFilter[] = [
  "All",
  "Photography",
  "Video",
  "Events",
  "Andrea",
];

type SizeVariant = "small" | "medium" | "large" | "tall" | "wide";

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
  filter: CategoryFilter;
  size: SizeVariant;
}

const portfolioItems: PortfolioItem[] = [
  { image: image1, title: "Aarambh", category: "Event", filter: "Events", size: "large" },
  { image: image2, title: "Sparkz", category: "Event", filter: "Events", size: "tall" },
  { image: image3, title: "Aarambh", category: "Photography", filter: "Photography", size: "medium" },
  { image: image4, title: "Aarambh", category: "Photography", filter: "Photography", size: "wide" },
  { image: image5, title: "Aarambh", category: "Event", filter: "Events", size: "tall" },
  { image: image6, title: "Aarambh", category: "Event", filter: "Events", size: "large" },
  { image: image7, title: "Aarambh", category: "Event", filter: "Events", size: "tall" },
  { image: image8, title: "Aarambh", category: "Event", filter: "Events", size: "wide" },
  { image: image9, title: "Onam", category: "Event", filter: "Events", size: "tall" },
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
  { image: image10, title: "Aarambh", category: "Event", filter: "Events", size: "medium" },
  { image: image21, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },
  { image: image22, title: "Concert", category: "Andrea", filter: "Andrea", size: "wide" },
  { image: image23, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },
  { image: image24, title: "Concert", category: "Andrea", filter: "Andrea", size: "wide" },
  { image: image25, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },
  { image: image26, title: "Concert", category: "Andrea", filter: "Andrea", size: "medium" },

  
];

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter(item => item.filter === activeFilter);

  return (
    <section className="py-20 md:py-32 bg-[#0b0b0b] text-white">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-7xl text-[#fec903] font-bold mb-4">
            OUR WORK
          </h2>

          <div className="flex justify-center gap-3 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full transition ${activeFilter === category
                    ? "bg-[#fec903] text-black"
                    : "bg-[#fec903]/10 text-[#fec903]"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* GRID */}
        <div
          className="
            grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-5 md:gap-6
            auto-rows-[160px] md:auto-rows-[220px]
            grid-flow-dense
          "
        >
          {filteredItems.map((item, index) => (
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

        {/* FULLSCREEN VIEW */}
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