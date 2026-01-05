import PortfolioCard from "./PortfolioCard";

// Import all portfolio images
import image1 from "@/assets/portfolio/image-1.jpg";
import image2 from "@/assets/portfolio/image-2.jpg";
import image3 from "@/assets/portfolio/image-3.jpg";
import image4 from "@/assets/portfolio/image-4.jpg";
import image5 from "@/assets/portfolio/image-5.jpg";
import image6 from "@/assets/portfolio/image-6.jpg";
import image7 from "@/assets/portfolio/image-7.jpg";
import image8 from "@/assets/portfolio/image-8.jpg";
import image9 from "@/assets/portfolio/image-9.jpg";
import image10 from "@/assets/portfolio/image-10.jpg";
import image11 from "@/assets/portfolio/image-11.jpg";
import image12 from "@/assets/portfolio/image-12.jpg";
import image13 from "@/assets/portfolio/image-13.jpg";
import image14 from "@/assets/portfolio/image-14.jpg";
import image15 from "@/assets/portfolio/image-15.jpg";
import image16 from "@/assets/portfolio/image-16.jpg";
import image17 from "@/assets/portfolio/image-17.jpg";
import image18 from "@/assets/portfolio/image-18.jpg";
import image19 from "@/assets/portfolio/image-19.jpg";
import image20 from "@/assets/portfolio/image-20.jpg";
import image21 from "@/assets/portfolio/image-21.jpg";
import image22 from "@/assets/portfolio/image-22.jpg";
import image23 from "@/assets/portfolio/image-23.jpg";
import image24 from "@/assets/portfolio/image-24.jpg";
import image25 from "@/assets/portfolio/image-25.jpg";
import image26 from "@/assets/portfolio/image-26.jpg";
import image27 from "@/assets/portfolio/image-27.jpg";
import image28 from "@/assets/portfolio/image-28.jpg";
import image29 from "@/assets/portfolio/image-29.jpg";
import image30 from "@/assets/portfolio/image-30.jpg";

const portfolioItems = [
  { image: image1, title: "Product Collection", category: "Product Photography" },
  { image: image2, title: "Behind The Scenes", category: "Video Production" },
  { image: image3, title: "Editorial Shoot", category: "Fashion" },
  { image: image4, title: "Gourmet Experience", category: "Food Photography" },
  { image: image5, title: "Luxury Timepiece", category: "Product" },
  { image: image6, title: "Corporate Event", category: "Event Coverage" },
  { image: image7, title: "Modern Living", category: "Real Estate" },
  { image: image8, title: "Fitness Campaign", category: "Lifestyle" },
  { image: image9, title: "Beauty Products", category: "Cosmetics" },
  { image: image10, title: "Wedding Story", category: "Wedding" },
  { image: image11, title: "Street Style", category: "Fashion" },
  { image: image12, title: "Automotive Elite", category: "Automotive" },
  { image: image13, title: "Tech Showcase", category: "Technology" },
  { image: image14, title: "Paradise Found", category: "Travel" },
  { image: image15, title: "Artist Portrait", category: "Music" },
  { image: image16, title: "Café Culture", category: "Beverage" },
  { image: image17, title: "Diamond Dreams", category: "Jewelry" },
  { image: image18, title: "Game Day", category: "Sports" },
  { image: image19, title: "Best Friend", category: "Pet Photography" },
  { image: image20, title: "Fine Dining", category: "Restaurant" },
  { image: image21, title: "Executive Portrait", category: "Corporate" },
  { image: image22, title: "Style Guide", category: "E-Commerce" },
  { image: image23, title: "New Beginnings", category: "Family" },
  { image: image24, title: "Live Concert", category: "Event" },
  { image: image25, title: "Summit Views", category: "Adventure" },
  { image: image26, title: "Sneaker Culture", category: "Product" },
  { image: image27, title: "Sweet Indulgence", category: "Food" },
  { image: image28, title: "City Lights", category: "Aerial" },
  { image: image29, title: "Mindful Moments", category: "Wellness" },
  { image: image30, title: "Signature Scent", category: "Luxury" },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl md:text-7xl mb-4">OUR WORK</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            A curated collection of our finest visual content created for brands across industries
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
