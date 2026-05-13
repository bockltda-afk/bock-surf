import { CheckCircle, Award, Waves, Globe } from "lucide-react";

import Image from "next/image";

export default function About() {
  const credentials = [
    "Surfista profesional con trayectoria en competencias nacionales e internacionales",
    "Certificado como Surf Coach con metodología avalada",
    "Especialista en técnica de shortboard y longboard",
    "Más de 10 años surfeando las mejores olas de Chile y el mundo",
  ];

  const stats = [
    { value: "+10", label: "Años\nSurfeando", icon: <Waves size={24} className="text-accent" /> },
    { value: "+150", label: "Alumnos\nFormados", icon: <Award size={24} className="text-accent" /> },
    { value: "CHI", label: "Surfista\nProfesional", icon: <Globe size={24} className="text-accent" /> },
  ];

  return (
    <section id="sobre-mi" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Column */}
          <div className="w-full lg:w-5/12 relative">
            {/* Stats inline */}
            <div className="flex gap-4 mb-6">
              {[
                { value: "+10", label: "Años" },
                { value: "+150", label: "Alumnos" },
                { value: "CHI", label: "Pro" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 bg-white/5 border border-white/10 p-4 text-center">
                  <p className="text-3xl font-bold text-white tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl">
              <Image
                src="https://dukesurf.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-07-at-9.57.03-PM-scaled.jpeg"
                alt="Tomás Bock Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full lg:w-7/12">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">Mi historia</p>
            <h2 
              className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 uppercase"
              style={{ fontFamily: "'Oswald', sans-serif" }}
            >
              Hola, soy <span className="text-accent">Tomás Bock</span>
            </h2>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              Soy surfista profesional chileno y he dedicado mi vida al océano. Crecí surfeando las olas de Reñaca, Concón y toda la costa de Viña del Mar, esos spots son mi casa y los conozco como nadie.
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Hoy canalizo toda esa experiencia para enseñarte a surfear de verdad — con técnica, seguridad y conexión real con el mar. Mi metodología combina la comprensión del océano, la técnica corporal y la mentalidad de un competidor. Opero en Reñaca, Playa La Boca, Concón y Viña del Mar.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {credentials.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-2 h-[2px] bg-accent" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contacto"
              className="inline-block px-10 py-4 bg-transparent hover:bg-white text-white hover:text-black border-2 border-white font-bold text-lg uppercase tracking-widest transition-all"
            >
              Conoce mi método
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
