import { ArrowDown } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Captação da Água",
    description: "A água é inserida no sistema por gravidade ou bombeamento. Sensores registram pH, turbidez e temperatura de referência.",
    highlight: "Medição inicial"
  },
  {
    number: "02",
    title: "Pré-filtragem Física",
    description: "Camada de algodão ou fibras naturais remove partículas sólidas maiores, protegendo o cartucho biológico.",
    highlight: "Proteção do sistema"
  },
  {
    number: "03",
    title: "Tratamento Biológico",
    description: "No cartucho, o consórcio de Trametes versicolor e Bacillus subtilis degrada poluentes orgânicos através de enzimas ligninolíticas.",
    highlight: "Core do sistema"
  },
  {
    number: "04",
    title: "Polimento Final",
    description: "Camada opcional de areia fina ou carvão vegetal estabiliza a aparência visual e reduz turbidez remanescente.",
    highlight: "Opcional"
  },
  {
    number: "05",
    title: "Medição Pós-Tratamento",
    description: "Os mesmos sensores registram novamente os parâmetros, permitindo calcular a eficácia do tratamento.",
    highlight: "Comparação de dados"
  },
  {
    number: "06",
    title: "Visualização Digital",
    description: "Dados são processados pelo microcontrolador e enviados para a plataforma web com gráficos e alertas.",
    highlight: "Monitoramento IoT"
  }
];

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div 
      ref={ref}
      className="relative"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Animated Connector Line */}
      {index < steps.length - 1 && (
        <motion.div 
          className="absolute left-8 lg:left-12 top-24 bottom-0 w-0.5 origin-top"
          style={{
            background: "linear-gradient(to bottom, hsl(185, 70%, 35%), hsl(175, 65%, 45%), hsl(160, 60%, 40%))"
          }}
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      )}
      
      <motion.div 
        className="flex gap-6 lg:gap-10 pb-12 group"
        initial={{ x: -50, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
      >
        {/* Number Circle */}
        <motion.div 
          className="relative z-10 flex-shrink-0"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.div 
            className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-card relative overflow-hidden"
            whileHover={{ boxShadow: "0 20px 40px -15px rgba(0, 150, 136, 0.4)" }}
          >
            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <span className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground relative z-10">
              {step.number}
            </span>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div 
          className="flex-1 pt-2 lg:pt-4"
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
              {step.title}
            </h3>
            <motion.span 
              className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--accent))", color: "white" }}
              transition={{ duration: 0.2 }}
            >
              {step.highlight}
            </motion.span>
          </div>
          <p className="text-muted-foreground leading-relaxed lg:text-lg">
            {step.description}
          </p>
        </motion.div>
      </motion.div>

      {/* Animated Arrow */}
      {index < steps.length - 1 && (
        <motion.div 
          className="flex justify-start pl-5 lg:pl-9 -mt-4 mb-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-accent" />
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

const HowItWorks = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} className="py-24 bg-card relative overflow-hidden">
      {/* Parallax Background Elements */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

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
            Processo
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
          >
            Como <span className="text-gradient">Funciona</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Um fluxo integrado que combina filtragem física, tratamento biológico 
            e monitoramento digital para resultados transparentes.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
