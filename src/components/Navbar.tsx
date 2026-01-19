import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["sobre", "como-funciona", "plataforma", "especificacoes", "contato"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
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
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-card/95 backdrop-blur-xl shadow-soft py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a 
            href="#" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all overflow-hidden relative ${
                isScrolled ? "bg-gradient-hero" : "bg-accent/20"
              }`}
              whileHover={{ rotate: 10 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%", y: "-100%" }}
                whileHover={{ x: "100%", y: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <Droplets className={`w-5 h-5 transition-colors relative z-10 ${
                isScrolled ? "text-primary-foreground" : "text-accent"
              }`} />
            </motion.div>
            <span className={`font-display text-xl font-semibold transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              BioSynthNet
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.a 
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isScrolled 
                    ? activeSection === link.href.slice(1) 
                      ? "text-primary" 
                      : "text-muted-foreground hover:text-primary" 
                    : activeSection === link.href.slice(1)
                      ? "text-accent"
                      : "text-water-medium hover:text-accent"
                }`}
              >
                {link.label}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="ml-4"
            >
              <Button 
                variant={isScrolled ? "default" : "hero"} 
                size="sm"
                className="relative overflow-hidden group"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Começar</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button 
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="pt-4 pb-4 border-t border-border/20 mt-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.a 
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isScrolled 
                          ? "text-muted-foreground hover:bg-secondary hover:text-primary" 
                          : "text-water-medium hover:bg-white/10 hover:text-accent"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="mt-2"
                  >
                    <Button variant={isScrolled ? "default" : "hero"} size="sm" className="w-full">
                      Começar
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
