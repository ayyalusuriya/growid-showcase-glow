interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
}

const PortfolioCard = ({ image, title, category }: PortfolioCardProps) => {
  return (
    <div className="portfolio-card group h-full">
      <div className="h-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <p className="text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-1">
            {category}
          </p>
          <h3 className="text-white text-lg md:text-xl font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
