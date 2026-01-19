import { Check, X } from "lucide-react";

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
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-water-light/50 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Especificações</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Detalhes <span className="text-gradient">Técnicos</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column: Specs & Organisms */}
          <div className="space-y-10">
            {/* Technical Specs */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
                Especificações do Sistema
              </h3>
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <div 
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-border/50 last:border-0"
                  >
                    <span className="text-muted-foreground">{spec.label}</span>
                    <span className="font-medium text-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Organisms */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
                Consórcio Biológico
              </h3>
              <div className="space-y-6">
                {organisms.map((org, index) => (
                  <div key={index} className="p-4 rounded-xl bg-secondary/50">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-bio-green text-primary-foreground">
                        {org.type}
                      </span>
                      <span className="font-display font-semibold text-foreground italic">
                        {org.name}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {org.function}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Capabilities */}
          <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 h-fit lg:sticky lg:top-8">
            <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
              Capacidades e Limitações
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              Transparência sobre o que o sistema pode e não pode fazer.
            </p>
            <div className="space-y-3">
              {capabilities.map((cap, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-colors ${
                    cap.supported 
                      ? "bg-bio-green-light border border-bio-green/20" 
                      : "bg-destructive/5 border border-destructive/20"
                  }`}
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
                  <span className={`font-medium ${cap.supported ? "text-foreground" : "text-muted-foreground"}`}>
                    {cap.feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
