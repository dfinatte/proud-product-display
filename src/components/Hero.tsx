import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-biosynthnet.jpg";
import { Droplets, Activity, Leaf } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <img 
          src={heroImage} 
          alt="BioSynthNet Module"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-water-deep/95 via-water-deep/80 to-transparent" />
      </motion.div>

      {/* Animated Water Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent/30"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: window.innerHeight + 100,
              opacity: 0.3 + Math.random() * 0.5
            }}
            animate={{ 
              y: -100,
              x: `+=${(Math.random() - 0.5) * 200}`,
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Animated Ripples */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-accent/20"
            style={{
              left: `${15 + i * 20}%`,
              bottom: `${10 + i * 5}%`,
            }}
            initial={{ width: 20, height: 20, opacity: 0.6 }}
            animate={{ 
              width: [20, 150], 
              height: [20, 150], 
              opacity: [0.6, 0] 
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="container mx-auto px-6 lg:px-12 relative z-10"
        style={{ opacity }}
      >
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8"
          >
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">{t("hero.badge")}</span>
          </motion.div>

          {/* Title with staggered animation */}
          <motion.h1 
            className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="block"
            >
              BioSynthNet
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="block text-accent"
            >
              Module™
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg lg:text-xl text-water-medium leading-relaxed mb-10 max-w-2xl"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="hero" 
              size="lg" 
              className="group"
              onClick={() => {
                const featuresSection = document.getElementById('features');
                featuresSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>{t("hero.learnMore")}</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Droplets className="w-5 h-5 ml-2" />
              </motion.div>
            </Button>
            <Link to="/demo">
              <Button variant="heroOutline" size="lg" className="group overflow-hidden relative">
                <motion.div
                  className="absolute inset-0 bg-accent/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Activity className="w-5 h-5 mr-2 relative z-10" />
                <span className="relative z-10">{t("hero.viewPlatform")}</span>
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-water-medium/20"
          >
            {[
              { value: "pH", label: t("hero.monitoring") },
              { value: "24/7", label: t("hero.realTime") },
              { value: "IoT", label: t("hero.connectivity") },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-default"
              >
                <p className="font-display text-3xl lg:text-4xl font-bold text-accent">{stat.value}</p>
                <p className="text-water-medium text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-water-medium"
      >
        <span className="text-sm">{t("hero.scroll")}</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-water-medium flex justify-center pt-2"
        >
          <motion.div 
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 rounded-full bg-accent" 
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
