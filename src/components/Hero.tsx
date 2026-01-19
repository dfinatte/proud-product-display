import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-biosynthnet.jpg";
import { Droplets, Activity, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="BioSynthNet Module"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-water-deep/95 via-water-deep/80 to-transparent" />
      </div>

      {/* Animated Water Ripples */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <div className="absolute bottom-10 left-20 w-24 h-24 rounded-full border border-water-medium/30 animate-ripple" />
        <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full border border-water-medium/20 animate-ripple delay-500" />
        <div className="absolute bottom-5 right-1/4 w-20 h-20 rounded-full border border-water-medium/25 animate-ripple delay-1000" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent mb-8 animate-fade-up">
            <Leaf className="w-4 h-4" />
            <span className="text-sm font-medium">Tecnologia Ambiental Sustentável</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up leading-tight">
            BioSynthNet
            <span className="block text-accent">Module™</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg lg:text-xl text-water-medium leading-relaxed mb-10 animate-fade-up max-w-2xl">
            Sistema modular de tratamento de água integrando bioremediação 
            com monitoramento ambiental em tempo real. Transformando processos 
            biológicos invisíveis em informações acessíveis.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up">
            <Button variant="hero" size="lg" className="group">
              <span>Saiba Mais</span>
              <Droplets className="w-5 h-5 ml-2 group-hover:animate-pulse" />
            </Button>
            <Button variant="heroOutline" size="lg">
              <Activity className="w-5 h-5 mr-2" />
              <span>Ver Plataforma</span>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-water-medium/20">
            <div className="animate-fade-up">
              <p className="font-display text-3xl lg:text-4xl font-bold text-accent">pH</p>
              <p className="text-water-medium text-sm mt-1">Monitoramento</p>
            </div>
            <div className="animate-fade-up delay-100">
              <p className="font-display text-3xl lg:text-4xl font-bold text-accent">24/7</p>
              <p className="text-water-medium text-sm mt-1">Tempo Real</p>
            </div>
            <div className="animate-fade-up delay-200">
              <p className="font-display text-3xl lg:text-4xl font-bold text-accent">IoT</p>
              <p className="text-water-medium text-sm mt-1">Conectividade</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-water-medium animate-bounce">
        <span className="text-sm">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-water-medium flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-accent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
