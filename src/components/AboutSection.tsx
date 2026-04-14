import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="nosotros" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-2">
            Quiénes <span className="gradient-text">somos</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mb-10" />

          <div className="glass rounded-2xl p-8 md:p-12 space-y-6 text-foreground/80 text-lg leading-relaxed">
            <p>
              En <strong className="text-foreground">Selek Soluciones Integrales SL</strong> somos especialistas en instalaciones eléctricas con un enfoque cercano, profesional y orientado a las necesidades reales de cada cliente.
            </p>
            <p>
              Con una sólida experiencia en el sector, ofrecemos soluciones eléctricas tanto para viviendas como para negocios, siempre cumpliendo con la normativa vigente y garantizando seguridad, eficiencia y calidad en cada trabajo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
