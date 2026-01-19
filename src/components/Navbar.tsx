import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Plataforma", href: "#plataforma" },
    { label: "Especificações", href: "#especificacoes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              isScrolled ? "bg-gradient-hero" : "bg-accent/20"
            }`}>
              <Droplets className={`w-5 h-5 transition-colors ${
                isScrolled ? "text-primary-foreground" : "text-accent"
              }`} />
            </div>
            <span className={`font-display text-xl font-semibold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              BioSynthNet
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-muted-foreground" : "text-water-medium"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button variant={isScrolled ? "default" : "hero"} size="sm">
              Começar
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium ${
                    isScrolled ? "text-muted-foreground" : "text-water-medium"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant={isScrolled ? "default" : "hero"} size="sm" className="w-fit">
                Começar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
