import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";

const projects = [
  { src: project1, title: "Instalación solar residencial" },
  { src: project2, title: "Paneles solares industriales" },
  { src: project3, title: "Proyecto domótica integral" },
  { src: project4, title: "Cuadro eléctrico industrial" },
  { src: project5, title: "Instalación solar urbana" },
  { src: project6, title: "Energía solar vivienda" },
  { src: project7, title: "Iluminación exterior" },
  { src: project8, title: "Iluminación interior premium" },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="trabajos" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Nuestros <span className="gradient-text">trabajos</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative group rounded-xl overflow-hidden cursor-pointer aspect-square transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <img
                src={p.src}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4">
                <span className="font-heading font-semibold text-sm text-foreground">{p.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-fade-in cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground/60 hover:text-foreground text-3xl transition-colors"
          >
            ✕
          </button>
          <img
            src={projects[lightbox].src}
            alt={projects[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg animate-fade-up"
          />
          <div className="absolute bottom-6 flex gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === lightbox ? "bg-primary w-6" : "bg-foreground/30"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
