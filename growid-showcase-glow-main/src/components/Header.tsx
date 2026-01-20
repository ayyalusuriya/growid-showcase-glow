import logo from "@/assets/GROWID LOGO UPDATE CUT (1).png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-2 md:p-6">
      <div className="flex items-center justify-end">
        <img
          src={logo}
          alt="Growid Media"
          className="
            h-40 md:h-30
            w-30 md:w-30
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
