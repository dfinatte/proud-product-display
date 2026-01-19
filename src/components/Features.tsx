import { Droplets, Thermometer, Activity, Shield, RefreshCw, Wifi } from "lucide-react";
import bioModule from "@/assets/bio-module.jpg";

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

const Features = () => {
  return (
    <section className="py-24 bg-gradient-water relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Funcionalidades</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Tecnologia que Une
            <span className="text-gradient"> Biologia e Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            O BioSynthNet Module™ integra processos biológicos avançados com monitoramento 
            digital acessível, oferecendo uma solução sustentável e educativa.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-border/50 hover:border-primary/30 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-card-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div className="mt-20 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-hero rounded-full blur-2xl opacity-20 animate-pulse-slow" />
            <img 
              src={bioModule} 
              alt="Bio Module Concept" 
              className="relative w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-elevated border-4 border-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
