import { useScrollReveal } from "@/hooks/useScrollReveal";

const reasons = [
  { icon: "🤝", title: "Cercanía", desc: "Trato directo y personalizado con cada cliente." },
  { icon: "🏆", title: "Profesionalidad", desc: "Técnicos cualificados y trabajo de máxima calidad." },
  { icon: "⚡", title: "Rapidez", desc: "Respuesta ágil y cumplimiento de plazos." },
  { icon: "🎯", title: "Soluciones a medida", desc: "Cada proyecto es único, cada solución también." },
];

const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Por qué <span className="gradient-text">elegirnos</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`text-center p-8 glass rounded-xl card-3d transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <div className="text-5xl mb-4 inline-block hover:scale-110 transition-transform duration-300">{r.icon}</div>
              <h3 className="font-heading font-semibold text-lg mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
