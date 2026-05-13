import { CheckCircle, Award, Waves, Globe } from "lucide-react";

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
            <div className="flex gap-4 mb-6 justify-center lg:justify-start">
              {stats.map((stat, i) => (
                <div key={i} className="flex-1 glass rounded-xl p-4 text-center">
                  <div className="flex justify-center mb-1">{stat.icon}</div>
                  <p className="text-2xl font-black text-white">{stat.value}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-medium whitespace-pre-line">{stat.label}</p>
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
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Hola, soy <span className="text-accent">Tomás Bock</span>
            </h2>
            <p className="text-lg text-gray-300 mb-5 leading-relaxed">
              Soy surfista profesional chileno y he dedicado mi vida al océano. Crecí surfeando las olas de Reñaca, Concón y toda la costa de Viña del Mar, esos spots son mi casa y los conozco como nadie.
            </p>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Hoy canalizo toda esa experiencia para enseñarte a surfear de verdad — con técnica, seguridad y conexión real con el mar. Mi metodología combina la comprensión del océano, la técnica corporal y la mentalidad de un competidor. Opero en Reñaca, Playa La Boca, Concón y Viña del Mar.
            </p>

            <ul className="space-y-4 mb-10">
              {credentials.map((item, idx) => (
                <li key={idx} className="flex items-start text-gray-200 gap-3">
                  <CheckCircle className="text-accent mt-0.5 flex-shrink-0" size={22} />
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contacto"
              className="inline-block px-8 py-4 bg-white/10 hover:bg-accent hover:text-background text-white border border-white/20 hover:border-accent rounded-lg font-bold text-lg transition-all"
            >
              Conoce mi método 🌊
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
