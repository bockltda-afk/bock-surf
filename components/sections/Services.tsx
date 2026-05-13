"use client";

import ProductCard from "@/components/ui/ProductCard";

const mockServices = [
  {
    id: "1",
    name: "Clase Individual",
    short_description: "Una sesión completa en el agua con análisis de video, envío de tomas y coaching personalizado de maniobras.",
    price: 30000,
    duration_weeks: null,
    type: "presencial" as const,
    image_url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Pack 3 Clases",
    short_description: "3 sesiones en el agua. Incluye análisis de video de cada sesión, envío de tomas y coaching de maniobras y mejora continua.",
    price: 81000,
    original_price: 90000,
    duration_weeks: null,
    type: "presencial" as const,
    image_url: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "Pack 5 Clases",
    short_description: "5 sesiones intensivas. Análisis de video profesional, envío de tomas, coaching de maniobras y plan de mejora personalizado.",
    price: 130000,
    original_price: 150000,
    duration_weeks: null,
    type: "presencial" as const,
    image_url: "https://images.unsplash.com/photo-1455264745730-cb3b76250ae8?q=80&w=2070&auto=format&fit=crop",
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
          <p className="text-lg text-gray-400">
            Cada clase incluye <span className="text-white font-semibold">análisis de video, envío de tomas y coaching de maniobras</span>. 
            Ves tus errores, los corriges y surfeas mejor en cada sesión.
          </p>
        </div>

        {/* Included badge */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["🎥 Análisis de Video", "📱 Envío de Tomas", "🏄 Coach de Maniobras", "📈 Plan de Mejora"].map((feature) => (
            <span key={feature} className="glass px-4 py-2 rounded-full text-sm text-gray-300 border border-white/10">
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
