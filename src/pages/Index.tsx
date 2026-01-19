import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Specifications from "@/components/Specifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <section id="sobre">
        <Features />
      </section>
      <section id="como-funciona">
        <HowItWorks />
      </section>
      <section id="especificacoes">
        <Specifications />
      </section>
      <section id="contato">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
