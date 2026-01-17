import logo from "@/assets/growid-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="flex items-center">
        <img 
          src={logo} 
          alt="Growid Media" 
          className="h-12 md:h-16 w-auto drop-shadow-lg"
        />
      </div>
    </header>
  );
};

export default Header;
