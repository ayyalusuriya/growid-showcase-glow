import VideoCard from "./VideoCard";

// Using portfolio images as thumbnails for video placeholders
import image2 from "@/assets/portfolio/image-2.jpg";
import image6 from "@/assets/portfolio/image-6.jpg";
import image12 from "@/assets/portfolio/image-12.jpg";
import image14 from "@/assets/portfolio/image-14.jpg";
import image15 from "@/assets/portfolio/image-15.jpg";
import image18 from "@/assets/portfolio/image-18.jpg";
import image24 from "@/assets/portfolio/image-24.jpg";
import image25 from "@/assets/portfolio/image-25.jpg";
import image28 from "@/assets/portfolio/image-28.jpg";
import image29 from "@/assets/portfolio/image-29.jpg";

// Sample video URLs (using sample video URLs for demonstration)
const videoItems = [
  {
    thumbnail: image2,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Brand Commercial",
    category: "Commercial"
  },
  {
    thumbnail: image6,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Corporate Event Highlights",
    category: "Event Coverage"
  },
  {
    thumbnail: image12,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Automotive Showcase",
    category: "Automotive"
  },
  {
    thumbnail: image14,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Travel Vlog",
    category: "Travel"
  },
  {
    thumbnail: image15,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Music Video",
    category: "Entertainment"
  },
  {
    thumbnail: image18,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Sports Reel",
    category: "Sports"
  },
  {
    thumbnail: image24,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Concert Film",
    category: "Live Event"
  },
  {
    thumbnail: image25,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Adventure Documentary",
    category: "Documentary"
  },
  {
    thumbnail: image28,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Aerial Cinematography",
    category: "Drone"
  },
  {
    thumbnail: image29,
    videoUrl: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Wellness Brand Film",
    category: "Lifestyle"
  },
];

const VideoSection = () => {
  return (
    <section id="videos" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title text-5xl md:text-7xl mb-4">VIDEO REELS</h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Hover over any video to preview. Cinematic storytelling that brings brands to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videoItems.map((item, index) => (
            <VideoCard
              key={index}
              thumbnail={item.thumbnail}
              videoUrl={item.videoUrl}
              title={item.title}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
