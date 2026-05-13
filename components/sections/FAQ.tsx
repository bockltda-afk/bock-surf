"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "¿Necesito saber nadar para tomar el coaching?",
    answer: "Sí, es indispensable saber nadar de forma competente antes de entrar al mar con una tabla. No es necesario ser un nadador experto, pero sí sentirte cómodo en el agua. Si tienes dudas, conversamos antes de tu primera sesión.",
  },
  {
    question: "¿Desde qué edad puedo aprender surf con Tomás?",
    answer: "¡Desde los 8 años en adelante! Trabajo con niños, adolescentes y adultos. Cada grupo tiene su metodología específica adaptada al nivel de desarrollo físico y mental.",
  },
  {
    question: "¿Dónde se realizan las sesiones presenciales?",
    answer: "Las sesiones se realizan en las playas de Reñaca, Playa La Boca, Concón y Viña del Mar. Dependiendo de las condiciones del mar y el sólo nos movemos al mejor spot del día. Coordinaremos el lugar de encuentro al confirmar tu reserva.",
  },
  {
    question: "¿Qué incluye el acceso de por vida a los cursos online?",
    answer: "Una vez que compras el curso, puedes verlo cuando quieras, cuantas veces quieras, desde cualquier dispositivo. Además, recibes todas las actualizaciones de contenido sin costo adicional.",
  },
  {
    question: "¿Puedo hacer el curso online si vivo fuera de Chile?",
    answer: "¡Por supuesto! Los cursos online están diseñados para cualquier persona en cualquier parte del mundo. Los fundamentos del surf son universales. Solo necesitas conexión a internet.",
  },
  {
    question: "¿Cuánto tiempo demoro en poder surfear olas?",
    answer: "Depende de tu punto de partida y la frecuencia con la que practiques. Con el programa intensivo presencial, la mayoría de mis alumnos están surfeando olas blancas en la primera sesión y olas verdes en 3-4 semanas de práctica constante.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-card border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">

        <div className="text-center mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Preguntas <span className="text-accent">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-400">
            Todo lo que necesitas saber antes de meterte al agua.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={cn(
                  "border rounded-xl overflow-hidden transition-all duration-300",
                  isOpen ? "border-accent/30 bg-accent/5" : "border-white/10 bg-background/50 hover:border-white/20"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-base md:text-lg text-white">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "text-accent transition-transform duration-300 flex-shrink-0 ml-4",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                    size={22}
                  />
                </button>
                <div
                  className={cn(
                    "px-6 text-gray-400 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "pb-6 max-h-96 opacity-100" : "max-h-0 opacity-0 pb-0"
                  )}
                >
                  <p className="leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
