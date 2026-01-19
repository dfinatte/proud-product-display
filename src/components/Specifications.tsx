import { Check, X } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const specs = [
  { label: "Volume tratado", value: "5-10 L por ciclo" },
  { label: "Tipo de fluxo", value: "Contínuo por gravidade ou batelada" },
  { label: "Sensores", value: "pH, Turbidez, Temperatura" },
  { label: "Microcontrolador", value: "Arduino / ESP32" },
  { label: "Conectividade", value: "WiFi, MQTT, HTTP" },
  { label: "Manutenção", value: "Substituição periódica do cartucho" },
];

const capabilities = [
  { feature: "Redução de turbidez", supported: true },
  { feature: "Estabilização de pH", supported: true },
  { feature: "Degradação de matéria orgânica", supported: true },
  { feature: "Monitoramento em tempo real", supported: true },
  { feature: "Rede distribuída IoT", supported: true },
  { feature: "Potabilização completa", supported: false },
  { feature: "Remoção de metais pesados", supported: false },
  { feature: "Substituição de tratamento industrial", supported: false },
];

const organisms = [
  {
    name: "Trametes versicolor",
    type: "Fungo",
    function: "Degradação enzimática de compostos orgânicos complexos através de enzimas ligninolíticas (laccases, peroxidases)"
  },
  {
    name: "Bacillus subtilis",
    type: "Bactéria",
    function: "Estabilização do biofilme, produção de enzimas hidrolíticas e competição com microrganismos indesejáveis"
  }
];

const Specifications = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <motion.div 
        className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-water-light/50 to-transparent"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
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
            Especificações
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6"
          >
            Detalhes <span className="text-gradient">Técnicos</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Specs & Organisms */}
          <div className="space-y-10">
            {/* Technical Specs */}
            <motion.div 
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
                Especificações do Sistema
              </h3>
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <motion.div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Organisms */}
            <motion.div 
              className="bg-card rounded-2xl p-8 shadow-card border border-border/50"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.1)" }}
            >
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
                Consórcio Biológico
              </h3>
              <div className="space-y-6">
                {organisms.map((org, index) => (
                  <motion.div 
                    key={index} 
                    className="p-4 rounded-xl bg-secondary/50 relative overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    />
                    <div className="flex items-center gap-3 mb-2 relative z-10">
                      <motion.span 
                        className="px-2 py-0.5 rounded text-xs font-medium bg-bio-green text-primary-foreground"
                        whileHover={{ scale: 1.1 }}
                      >
                        {org.type}
                      </motion.span>
                      <span className="font-display font-semibold text-foreground italic">
                        {org.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                      {org.function}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Capabilities */}
          <motion.div 
            className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-fit lg:sticky lg:top-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
              Capacidades e Limitações
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Transparência sobre o que o sistema pode e não pode fazer.
            </p>
            <div className="space-y-3">
              {capabilities.map((cap, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all cursor-default ${
                    cap.supported 
                      ? "bg-bio-green-light border border-bio-green/20" 
                      : "bg-destructive/5 border border-destructive/20"
                  }`}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.05, type: "spring" }}
                  >
                    {cap.supported ? (
                      <div className="w-6 h-6 rounded-full bg-bio-green flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-destructive flex items-center justify-center">
                        <X className="w-4 h-4 text-destructive-foreground" />
                      </div>
                    )}
                  </motion.div>
                  <span className={`font-medium ${cap.supported ? "text-foreground" : "text-muted-foreground"}`}>
                    {cap.feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
