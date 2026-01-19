import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-water-deep to-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-water-medium rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info */}
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">Contato</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Vamos Construir um
              <span className="block text-accent">Futuro Sustentável</span>
            </h2>
            <p className="text-water-medium text-lg leading-relaxed mb-10">
              Interessado em implementar o BioSynthNet Module™ em sua comunidade, 
              escola ou organização? Entre em contato para saber mais sobre parcerias 
              e implantação do sistema.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-water-medium text-sm">Email</p>
                  <p className="text-primary-foreground font-medium">contato@biosynthnet.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-water-medium text-sm">Telefone</p>
                  <p className="text-primary-foreground font-medium">+55 (11) 99999-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-water-medium text-sm">Localização</p>
                  <p className="text-primary-foreground font-medium">São Paulo, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-elevated">
            <h3 className="font-display text-2xl font-semibold text-card-foreground mb-6">
              Envie sua Mensagem
            </h3>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Nome
                  </label>
                  <Input 
                    placeholder="Seu nome" 
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com" 
                    className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Organização
                </label>
                <Input 
                  placeholder="Escola, ONG, Empresa..." 
                  className="h-12 rounded-xl bg-secondary/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos sobre seu interesse no BioSynthNet Module™" 
                  rows={4}
                  className="rounded-xl bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button variant="hero" size="lg" className="w-full group">
                <span>Enviar Mensagem</span>
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
