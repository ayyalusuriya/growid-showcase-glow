import { Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/growid-logo.png";
const Footer = () => {
  return <footer className="py-16 bg-card">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Growid Media" className="h-16 w-auto" />
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:hello@growid.com" className="flex items-center gap-2 text-card-foreground/80 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">growid.official25@gmail.com</span>
            </a>
            <a href="tel:+919876543210" className="flex items-center gap-2 text-card-foreground/80 hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
              <span className="hidden sm:inline">8072559071</span>
            </a>
            <a href="https://instagram.com/growid" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-card-foreground/80 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
              <span className="hidden sm:inline">@growid_official</span>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-card-foreground/10 text-center">
          <p className="text-card-foreground/60 text-sm">
            © 2025 Growid Media. All rights reserved. Creating visual excellence.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;