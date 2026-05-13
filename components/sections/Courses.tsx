"use client";

export default function Courses() {
  const comingSoon = [
    {
      title: "Surf desde Cero",
      desc: "Todo lo que necesitas saber para tus primeras olas. Fundamentos, seguridad y técnica inicial.",
    },
    {
      title: "Técnica Avanzada de Maniobras",
      desc: "Bottom turn, cutback, floater y más. Análisis de video incluido en cada módulo.",
    },
    {
      title: "Lectura del Océano",
      desc: "Aprende a leer corrientes, bancos, viento y mareas. El conocimiento que cambia todo.",
    },
  ];

  return (
    <section id="cursos" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-3xl -z-10 -translate-x-1/2" />

      <div className="container mx-auto px-4 md:px-6 max-w-6xl">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent text-sm font-bold uppercase tracking-widest mb-3">100% Online</p>
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4">
            Cursos de <span className="text-accent">Surf Online</span>
          </h2>
          <p className="text-lg text-gray-400">
            Estamos trabajando en los mejores cursos de surf online para que puedas aprender desde donde estés. ¡Pronto disponibles!
          </p>
        </div>

        {/* Coming Soon Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {comingSoon.map((course, idx) => (
            <div
              key={idx}
              className="bg-card p-8 border border-white/5 hover:border-secondary transition-colors flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Blur overlay */}
              <div className="absolute inset-0 bg-background/60 z-10 flex flex-col items-center justify-center">
                <span className="bg-white/5 border border-white/20 text-white text-[10px] font-bold uppercase tracking-[0.3em] px-6 py-2">
                  Próximamente
                </span>
              </div>

              <div className="w-16 h-[1px] bg-secondary mb-6 opacity-40" />
              <h3 className="text-xl font-bold text-white mb-2 opacity-40">{course.title}</h3>
              <p className="text-gray-500 text-sm opacity-40 font-light">{course.desc}</p>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-card p-10 md:p-14 text-center border-t-4 border-secondary max-w-2xl mx-auto shadow-2xl">
          <div className="w-16 h-16 bg-white/5 border-2 border-secondary flex items-center justify-center mx-auto mb-6">
            <div className="w-8 h-8 bg-accent" />
          </div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            ¿Quieres ser el primero en saber?
          </h3>
          <p className="text-gray-400 mb-8">
            Déjame tu email y te aviso cuando lancemos el primer curso online. Sin spam, solo surf.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
              if (emailInput) {
                alert(`¡Gracias! Te avisaremos en ${emailInput.value} cuando lancemos.`);
                form.reset();
              }
            }}
          >
            <input
              type="email"
              required
              placeholder="tu@email.com"
              className="flex-1 bg-background/60 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-600 text-sm"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent hover:bg-accent-hover text-white font-bold transition-all text-xs uppercase tracking-widest shadow-lg shadow-accent/20"
            >
              Avisarme
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
