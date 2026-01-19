import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-water-deep to-primary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-1/4 w-80 h-80 bg-water-medium/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Contato</span>
            </motion.div>
            
            <motion.h2 
              className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Vamos Construir um
              <span className="block text-accent">Futuro Sustentável</span>
            </motion.h2>
            <motion.p 
              className="text-water-medium text-lg leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Interessado em implementar o BioSynthNet Module™ em sua comunidade, 
              escola ou organização? Entre em contato para saber mais sobre parcerias 
              e implantação do sistema.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "contato@biosynthnet.com.br" },
                { icon: Phone, label: "Telefone", value: "+55 (11) 99999-0000" },
                { icon: MapPin, label: "Localização", value: "São Paulo, Brasil" },
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center gap-4 group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <motion.div 
                    className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <item.icon className="w-5 h-5 text-accent group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-water-medium text-sm">{item.label}</p>
                    <p className="text-primary-foreground font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div 
            className="bg-card rounded-3xl p-8 lg:p-10 shadow-elevated relative overflow-hidden"
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -10 }}
          >
            {/* Decorative gradient */}
            <motion.div
              className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-hero rounded-full blur-3xl opacity-20"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6 relative z-10">
              Envie sua Mensagem
            </h3>
            <form className="space-y-5 relative z-10">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { label: "Nome", placeholder: "Seu nome", type: "text" },
                  { label: "Email", placeholder: "seu@email.com", type: "email" },
                ].map((field, index) => (
                  <motion.div
                    key={field.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">
                      {field.label}
                    </label>
                    <Input 
                      type={field.type}
                      placeholder={field.placeholder} 
                      className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Organização
                </label>
                <Input 
                  placeholder="Escola, ONG, Empresa..." 
                  className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos sobre seu interesse no BioSynthNet Module™" 
                  rows={4}
                  className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" size="lg" className="w-full group relative overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Enviar Mensagem</span>
                  <motion.div
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send className="w-5 h-5 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
