import { Droplets, Thermometer, Activity, Shield, RefreshCw, Wifi } from "lucide-react";
import bioModule from "@/assets/bio-module.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Droplets,
    title: "Bioremediação Ativa",
    description: "Consórcio de fungos (Trametes versicolor) e bactérias (Bacillus subtilis) para degradação de poluentes orgânicos."
  },
  {
    icon: Activity,
    title: "Monitoramento pH",
    description: "Sensores de baixo custo monitoram pH, turbidez e temperatura antes e depois do tratamento."
  },
  {
    icon: Thermometer,
    title: "Análise em Tempo Real",
    description: "Dados enviados para plataforma web, permitindo acompanhar o desempenho do sistema remotamente."
  },
  {
    icon: Shield,
    title: "Biossegurança",
    description: "Microrganismos não patogênicos imobilizados em matriz biodegradável, impedindo liberação no ambiente."
  },
  {
    icon: RefreshCw,
    title: "Cartucho Substituível",
    description: "Sistema modular com cartuchos biológicos de fácil substituição, sem contato direto com os microrganismos."
  },
  {
    icon: Wifi,
    title: "Conectividade IoT",
    description: "Comunicação via MQTT ou HTTP com Arduino/ESP32 para integração em rede distribuída."
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className="absolute -inset-1 rounded-3xl bg-gradient-hero opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
      />
      
      <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 h-full">
        {/* Icon with animated background */}
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 relative overflow-hidden"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div
            className="absolute inset-0 bg-white/20"
            initial={{ x: "-100%", y: "-100%" }}
            whileHover={{ x: "100%", y: "100%" }}
            transition={{ duration: 0.6 }}
          />
          <feature.icon className="w-7 h-7 text-primary-foreground relative z-10" />
        </motion.div>

        <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Animated underline */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-hero rounded-b-2xl"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Features = () => {
  const headerRef = useRef(null);
  const imageRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-water relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-accent font-medium text-sm uppercase tracking-wider"
          >
            Funcionalidades
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
          >
            Tecnologia que Une
            <span className="text-gradient"> Biologia e Digital</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            O BioSynthNet Module™ integra processos biológicos avançados com monitoramento 
            digital acessível, oferecendo uma solução sustentável e educativa.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Featured Image with 3D rotation effect */}
        <motion.div 
          ref={imageRef}
          className="mt-20 flex justify-center perspective-1000"
        >
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
            animate={isImageInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
            transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
            whileHover={{ 
              rotateY: 10,
              rotateX: -5,
              scale: 1.05,
              transition: { duration: 0.4 }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="absolute -inset-4 bg-gradient-hero rounded-full blur-2xl"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <img 
              src={bioModule} 
              alt="Bio Module Concept" 
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-elevated border-4 border-card"
            />
            
            {/* Orbiting particles */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full bg-accent"
                style={{
                  top: "50%",
                  left: "50%",
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 6 + i * 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 0.5,
                }}
              >
                <motion.div
                  className="w-3 h-3 rounded-full bg-accent shadow-[0_0_10px_hsl(175,65%,45%)]"
                  style={{
                    transform: `translateX(${130 + i * 15}px) translateY(-50%)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
