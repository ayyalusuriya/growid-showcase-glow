import logo from "@/assets/GROWID LOGO UPDATE CUT (1).png";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-2 md:p-6">
      <div className="flex items-center justify-end">
        <img
          src={logo}
          alt="Growid Media"
          className="
            h-20 md:h-40
            w-30 md:w-20
            rounded-full
            object-cover
            drop-shadow-lg
            animate-logo-slide
          "
        />
      </div>
    </header>
  );
};

export default Header;
