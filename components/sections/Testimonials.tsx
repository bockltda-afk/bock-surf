"use client";

import { Star } from "lucide-react";

const mockTestimonials = [
  {
    id: "1",
    client_name: "Sebastián M.",
    client_role: "Diseñador, 29 años",
    client_photo_url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop",
    content: "Llevaba 2 años intentando aprender solo y no avanzaba. Con Tomás en un mes ya estaba surfeando olas de 1 metro. Su forma de explicar la lectura del océano cambió todo.",
    rating: 5,
  },
  {
    id: "2",
    client_name: "Camila F.",
    client_role: "Estudiante, 22 años",
    client_photo_url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2000&auto=format&fit=crop",
    content: "Hice el curso online 'Surf desde Cero' y llegué a mi primer sesión en el agua con bases sólidas. La calidad del contenido es increíble. Tomás lo explica todo de forma clara y apasionada.",
    rating: 5,
  },
  {
    id: "3",
    client_name: "Felipe V.",
    client_role: "Ejecutivo, 38 años",
    client_photo_url: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop",
    content: "El programa intensivo de 4 semanas es brutal. No esperaba progresar tan rápido a mi edad. La paciencia y conocimiento de Tomás son únicos — se nota que es un profesional de verdad.",
    rating: 5,
  },
  {
    id: "4",
    client_name: "Ignacio L.",
    client_role: "Ingeniero, 31 años",
    client_photo_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2000&auto=format&fit=crop",
    content: "El curso de maniobras avanzadas me ayudó a subir otro nivel. Los análisis de video son el diferencial — ver tus errores y corregirlos de inmediato es muy potente.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-28 bg-card border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Lo que dicen mis <span className="text-accent">alumnos</span>
          </h2>
          <p className="text-lg text-gray-400">
            Historias reales de personas que decidieron aprender a surfear con método y pasión.
          </p>
        </div>

        {/* Carrusel */}
        <div className="flex overflow-x-auto pb-6 snap-x snap-mandatory no-scrollbar gap-6 -mx-4 px-4">
          {mockTestimonials.map((t) => (
            <div
              key={t.id}
              className="min-w-[300px] md:min-w-[380px] flex-shrink-0 snap-center glass p-8 rounded-2xl flex flex-col"
            >
              <div className="flex text-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={i >= t.rating ? "text-gray-600" : ""} />
                ))}
              </div>

              <p className="text-gray-300 italic mb-8 flex-grow leading-relaxed">"{t.content}"</p>

              <div className="flex items-center gap-4 mt-auto">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-accent/30 flex-shrink-0"
                  style={{ backgroundImage: `url('${t.client_photo_url}')` }}
                />
                <div>
                  <p className="font-bold text-white">{t.client_name}</p>
                  <p className="text-sm text-gray-500">{t.client_role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
