"use client";

import { useState } from "react";
import { Send, Instagram, MessageCircle, Mail } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-t from-accent/5 to-transparent" />
      </div>

      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0 -z-10 rotate-180">
        <svg viewBox="0 0 1440 80" className="w-full fill-card" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Left */}
          <div className="w-full lg:w-5/12">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-6 leading-tight">
              ¿Listo para<br /><span className="text-accent">Surfear?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed">
              Cuéntame sobre tus objetivos y tu nivel actual. Te respondo en menos de 24 horas.
            </p>
            <p className="text-sm text-gray-500 mb-10">
              📍 Reñaca · Viña del Mar · Playa La Boca · Concón
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/56963097435"
                target="_blank"
                className="flex items-center gap-4 bg-card border border-white/5 hover:border-secondary p-4 transition-all group"
              >
                <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageCircle className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5 font-bold">WhatsApp</p>
                  <p className="text-white font-bold">+56 9 6309 7435</p>
                </div>
              </a>

              <a
                href="https://instagram.com/tomas_bock"
                target="_blank"
                className="flex items-center gap-4 bg-card border border-white/5 hover:border-secondary p-4 transition-all group"
              >
                <div className="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Instagram className="text-pink-400" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5 font-bold">Instagram</p>
                  <p className="text-white font-bold">@tomas_bock</p>
                </div>
              </a>

              <a
                href="mailto:Bock.Ltda@gmail.com"
                className="flex items-center gap-4 bg-card border border-white/5 hover:border-secondary p-4 transition-all group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-0.5 font-bold">Email</p>
                  <p className="text-white font-bold">Bock.Ltda@gmail.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-7/12">
            <form onSubmit={handleSubmit} className="glass p-8 md:p-10 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-400">Tu nombre *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600"
                    placeholder="¿Cómo te llamas?"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-400">Email *</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="interest" className="text-sm font-medium text-gray-400">¿Qué te interesa? *</label>
                <select
                  id="interest"
                  required
                  className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="coaching-1to1">Coaching de Surf 1:1</option>
                  <option value="coaching-grupal">Clase Grupal de Surf</option>
                  <option value="intensivo">Programa Intensivo 4 Semanas</option>
                  <option value="curso-online">Curso Online</option>
                  <option value="consulta">Solo tengo una consulta</option>
                </select>
              </div>

              <div className="space-y-2 mb-8">
                <label htmlFor="message" className="text-sm font-medium text-gray-400">¿Cuál es tu nivel y objetivo? *</label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder-gray-600"
                  placeholder="Ej: Soy principiante total, nunca he surfeado pero quiero aprender. Estoy en Viña del Mar..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent-hover text-white font-bold py-4 uppercase tracking-widest flex items-center justify-center gap-2 transition-all text-lg shadow-lg shadow-accent/20 disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : (
                  <>
                    Enviar Mensaje
                    <Send size={20} />
                  </>
                )}
              </button>

              {success && (
                <div className="mt-4 p-4 bg-green-900/30 border border-green-500/40 rounded-xl text-green-400 text-center font-medium">
                  Mensaje recibido. Te respondo pronto.
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
