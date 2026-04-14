import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  { icon: "⚡", title: "Instalaciones eléctricas", desc: "Nuevas instalaciones para viviendas, locales y naves industriales con máxima seguridad." },
  { icon: "🔧", title: "Mantenimiento eléctrico", desc: "Servicio preventivo y correctivo para garantizar el funcionamiento óptimo de tus instalaciones." },
  { icon: "🏠", title: "Domótica", desc: "Automatización inteligente del hogar para mayor confort, ahorro y control." },
  { icon: "☀️", title: "Energía solar", desc: "Instalación de paneles solares para autoconsumo y ahorro energético sostenible." },
  { icon: "🔌", title: "Puntos de recarga", desc: "Instalación de cargadores para vehículos eléctricos en viviendas y empresas." },
  { icon: "🏢", title: "Cuadros eléctricos", desc: "Diseño, montaje y certificación de cuadros eléctricos industriales y residenciales." },
  { icon: "💡", title: "Iluminación LED", desc: "Proyectos de iluminación eficiente para todo tipo de espacios." },
  { icon: "📋", title: "Boletines y certificados", desc: "Tramitación de boletines eléctricos y certificados de instalación." },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicios" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Nuestros <span className="gradient-text">servicios</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass rounded-xl p-6 card-3d energy-border cursor-default transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="text-4xl mb-4 inline-block hover:scale-110 transition-transform duration-300">{s.icon}</div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
