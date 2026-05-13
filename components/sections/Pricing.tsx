import { Check, X } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const plans = [
  {
    name: "COACH 1 SESSION",
    price: 30000,
    period: "sesión",
    description: "Sesión puntual de trabajo técnico con video y retroalimentación.",
    features: [
      { name: "1 sesión en el agua", included: true },
      { name: "Análisis de movimiento", included: true },
      { name: "Envío de registros", included: true },
      { name: "Video de olas tomadas", included: true },
      { name: "Plan de mejora progresivo", included: false },
    ],
    isFeatured: false,
    cta: "Reservar",
  },
  {
    name: "PACK 5 SESSIONS",
    price: 130000,
    period: "pack",
    unitPrice: 26000,
    description: "Máximo rendimiento con seguimiento continuo entre sesiones.",
    features: [
      { name: "5 sesiones en el agua", included: true },
      { name: "Análisis detallado", included: true },
      { name: "Envío de registros HD", included: true },
      { name: "Video de cada sesión", included: true },
      { name: "Ahorro de $20.000", included: true },
      { name: "Plan de mejora técnica", included: true },
    ],
    isFeatured: true,
    cta: "Comenzar",
  },
  {
    name: "PACK 3 SESSIONS",
    price: 81000,
    period: "pack",
    unitPrice: 27000,
    description: "Ideal para bloques concentrados de mejora técnica.",
    features: [
      { name: "3 sesiones en el agua", included: true },
      { name: "Análisis de movimiento", included: true },
      { name: "Envío de registros", included: true },
      { name: "Video de cada sesión", included: true },
      { name: "Ahorro de $9.000", included: true },
      { name: "Plan de mejora técnica", included: false },
    ],
    isFeatured: false,
    cta: "Reservar",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Precios</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Elige tu <span className="text-accent">Pack</span>
          </h2>
          <p className="text-lg text-gray-400">
            Todas las clases incluyen <span className="text-white font-semibold">análisis de video, envío de tomas y coaching de maniobras</span>. Sin letra chica.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col flex-1 p-8 ${
                plan.isFeatured
                  ? "bg-card border-2 border-accent relative shadow-2xl shadow-accent/10 lg:-translate-y-4"
                  : "bg-card border border-white/5 hover:border-secondary transition-colors"
              }`}
            >
              {plan.isFeatured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                  Recomendado
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 text-sm mb-6 min-h-[48px]">{plan.description}</p>

              <div className="mb-2">
                <span className="text-4xl font-black text-white">{formatPrice(plan.price)}</span>
                <span className="text-gray-500 text-sm"> /{plan.period}</span>
              </div>
              {"unitPrice" in plan && (
                <p className="text-accent text-sm font-semibold mb-6">
                  = {formatPrice(plan.unitPrice as number)} por clase
                </p>
              )}
              {!("unitPrice" in plan) && <div className="mb-6" />}

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm gap-3">
                    {feature.included ? (
                      <Check className="text-accent flex-shrink-0" size={16} />
                    ) : (
                      <X className="text-gray-700 flex-shrink-0" size={16} />
                    )}
                    <span className={feature.included ? "text-gray-300" : "text-gray-600"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className={`w-full text-center py-4 font-bold uppercase tracking-widest transition-all text-xs ${
                  plan.isFeatured
                    ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/20"
                    : "bg-transparent border-2 border-white hover:bg-white hover:text-black text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-[10px] uppercase tracking-widest font-bold mt-10">
          * Los packs no tienen fecha de vencimiento. Coordina cada sesión directo por WhatsApp.
        </p>
      </div>
    </section>
  );
}
