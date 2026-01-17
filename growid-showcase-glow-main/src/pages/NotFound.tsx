import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-8xl font-display font-bold text-foreground">404</h1>
        <p className="mb-4 text-xl text-foreground/80">Oops! Page not found</p>
        <a href="/" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
