interface Props {
  image: string;
  title: string;
  category: string;
  onClick?: () => void;
}

const PortfolioCard = ({ image, title, category, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-full overflow-hidden rounded-2xl group cursor-pointer bg-[#111]"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition" />

      {/* TEXT */}
      <div className="absolute bottom-4 left-4 z-10">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <p className="text-white/70 text-sm">{category}</p>
      </div>

      {/* BORDER GLOW */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-[#fec903]/60 transition" />
    </div>
  );
};

export default PortfolioCard;