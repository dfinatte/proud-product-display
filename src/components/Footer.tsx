import { Droplets, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-water-deep py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Droplets className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-primary-foreground">
              BioSynthNet
            </span>
          </div>

          {/* Copyright */}
          <p className="text-water-medium text-sm">
            © 2025 BioSynthNet Module™. Tecnologia Ambiental.
          </p>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-water-medium/10 flex items-center justify-center text-water-medium hover:bg-accent hover:text-primary-foreground transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-water-medium/10 flex items-center justify-center text-water-medium hover:bg-accent hover:text-primary-foreground transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-water-medium/10 flex items-center justify-center text-water-medium hover:bg-accent hover:text-primary-foreground transition-colors">
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
