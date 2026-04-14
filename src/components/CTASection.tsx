import { useScrollReveal } from "@/hooks/useScrollReveal";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto text-center glass rounded-2xl p-12 md:p-16 relative overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-primary/20 blur-[80px] rounded-full" />

          <h2 className="font-heading text-3xl md:text-4xl font-bold relative z-10 mb-4">
            ¿Necesitas un electricista de confianza en <span className="gradient-text">Valencia</span>?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 relative z-10">
            Cuéntanos tu proyecto y te asesoramos sin compromiso
          </p>
          <a
            href="https://wa.me/34672385890?text=Hola%2C%20necesito%20un%20electricista"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block px-10 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg pulse-glow hover:glow-primary-strong transition-all duration-300 hover:scale-105"
          >
            💬 Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
