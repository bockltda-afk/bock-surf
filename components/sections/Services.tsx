"use client";

import ProductCard from "@/components/ui/ProductCard";

const mockServices = [
  {
    id: "1",
    name: "COACH 1 SESSION",
    short_description: "Incluye video de olas, análisis de movimiento, retroalimentación y envío de registros.",
    price: 30000,
    duration_weeks: null,
    type: "presencial" as const,
    image_url: "https://dukesurf.com/wp-content/uploads/2021/08/Andino_K_21MEX_Diz_TOD_5039-uai-1309x982.jpg",
  },
  {
    id: "2",
    name: "PACK 3 SESSIONS",
    short_description: "Seguimiento técnico extendido con análisis de video y retroalimentación en cada sesión.",
    price: 81000,
    original_price: 90000,
    duration_weeks: null,
    type: "presencial" as const,
    image_url: "https://dukesurf.com/wp-content/uploads/2021/08/Andino_K_21MEX_Diz_TOD_5039-uai-1309x982.jpg",
  },
  {
    id: "3",
    name: "PACK 5 SESSIONS",
    short_description: "Máximo rendimiento. Análisis detallado, envío de videos y plan de maniobras profesional.",
    price: 130000,
    original_price: 150000,
    duration_weeks: null,
    type: "presencial" as const,
    image_url: "https://dukesurf.com/wp-content/uploads/2021/08/Andino_K_21MEX_Diz_TOD_5039-uai-1309x982.jpg",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 bg-card border-y border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Presencial · Reñaca · Viña · Concón</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Coaching de <span className="text-accent">Surf</span>
          </h2>
          <p className="text-lg text-gray-400 font-light">
            Sesiones de alto rendimiento que incluyen <span className="text-white font-bold">video de olas, análisis de movimiento y retroalimentación técnica</span>. 
            Todos los registros se envían al cliente para su mejora continua.
          </p>
        </div>

        {/* Included badge */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["Video de Olas Tomadas", "Análisis de Movimiento", "Retroalimentación", "Envío de Videos", "Análisis Detallado Extra"].map((feature) => (
            <span key={feature} className="bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-300 border border-white/10">
              {feature}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockServices.map(service => (
            <ProductCard
              key={service.id}
              {...service}
              onClick={() => {}}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
