import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { name: "María G.", text: "Excelente trabajo, muy profesionales y puntuales. Nos instalaron todo el sistema eléctrico de la casa nueva y quedó perfecto.", rating: 5 },
  { name: "Carlos R.", text: "Contraté a Selek para la instalación de paneles solares y no puedo estar más contento. Ahorro real desde el primer mes.", rating: 5 },
  { name: "Ana P.", text: "Rápidos, limpios y con muy buen precio. Sin duda repetiré para cualquier tema eléctrico. Muy recomendables.", rating: 5 },
  { name: "Javier M.", text: "La domótica que nos instalaron ha cambiado nuestra forma de vivir. Todo funciona a la perfección.", rating: 5 },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className={`glass rounded-2xl p-8 md:p-12 text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
            <div className="text-primary text-2xl mb-4">
              {"★".repeat(testimonials[current].rating)}
            </div>
            <p className="text-lg text-foreground/80 italic mb-6 leading-relaxed transition-opacity duration-500">
              "{testimonials[current].text}"
            </p>
            <p className="font-heading font-semibold text-foreground">
              {testimonials[current].name}
            </p>

            <div className="flex gap-2 justify-center mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-foreground/20"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
