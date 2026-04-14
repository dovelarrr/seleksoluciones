import { useEffect, useState } from "react";

const HeroSection = () => {
  const title = "Soluciones Electricas";
  const [visibleChars, setVisibleChars] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= title.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[150px]" />
      </div>

      {/* Electric lines SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="30%" x2="100%" y2="70%" stroke="hsl(48,100%,50%)" strokeWidth="1" className="electric-line" />
        <line x1="100%" y1="20%" x2="0" y2="80%" stroke="hsl(48,100%,50%)" strokeWidth="0.5" className="electric-line" style={{ animationDelay: "1.5s" }} />
      </svg>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-5xl mx-auto">
          {title.split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-200 ${
                i < visibleChars
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              } ${char === " " ? "w-[0.3em]" : ""}`}
              style={{ color: i < visibleChars ? (i > 22 && i < 36 ? "hsl(48,100%,50%)" : "") : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        <p
          className={`mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-[2000ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Instalaciones, mantenimiento, domótica y movilidad eléctrica con trato cercano y máxima profesionalidad
        </p>

        <div
          className={`mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-[2500ms] ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="tel:+34672385890"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:glow-primary-strong pulse-glow transition-all duration-300 hover:scale-105"
          >
            📞 Llamar ahora
          </a>
          <a
            href="https://wa.me/34672385890?text=Hola%2C%20necesito%20un%20electricista"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg border border-primary/30 text-foreground font-bold text-lg hover:bg-primary/10 hover:border-primary/60 transition-all duration-300 hover:scale-105"
          >
            💬 Solicitar presupuesto
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[3000ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
        <div className="w-6 h-10 rounded-full border-2 border-foreground/20 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
