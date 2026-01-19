import { ArrowDown } from "lucide-react";

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

const HowItWorks = () => {
  return (
    <section className="py-24 bg-card relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">Processo</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6">
            Como <span className="text-gradient">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Um fluxo integrado que combina filtragem física, tratamento biológico 
            e monitoramento digital para resultados transparentes.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 lg:left-12 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-bio-green" />
              )}
              
              <div className="flex gap-6 lg:gap-10 pb-12 group">
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-2xl bg-gradient-hero flex items-center justify-center shadow-card group-hover:shadow-elevated transition-shadow duration-300">
                    <span className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 lg:pt-4">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl lg:text-2xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground">
                      {step.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed lg:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="flex justify-start pl-5 lg:pl-9 -mt-4 mb-4">
                  <ArrowDown className="w-6 h-6 text-accent animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
