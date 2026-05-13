export default function Courses() {
  const comingSoon = [
    {
      emoji: "🏄",
      title: "Surf desde Cero",
      desc: "Todo lo que necesitas saber para tus primeras olas. Fundamentos, seguridad y técnica inicial.",
    },
    {
      emoji: "🎯",
      title: "Técnica Avanzada de Maniobras",
      desc: "Bottom turn, cutback, floater y más. Análisis de video incluido en cada módulo.",
    },
    {
      emoji: "🌊",
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
              className="glass rounded-2xl p-8 border border-white/10 flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Blur overlay */}
              <div className="absolute inset-0 backdrop-blur-[2px] bg-background/40 z-10 flex flex-col items-center justify-center rounded-2xl">
                <span className="bg-accent/10 border border-accent/30 text-accent text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full">
                  🚧 Próximamente
                </span>
              </div>

              <span className="text-5xl mb-4 opacity-40">{course.emoji}</span>
              <h3 className="text-xl font-bold text-white mb-2 opacity-40">{course.title}</h3>
              <p className="text-gray-500 text-sm opacity-40">{course.desc}</p>
            </div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="glass rounded-3xl p-10 md:p-14 text-center border border-accent/20 max-w-2xl mx-auto shadow-2xl shadow-accent/5">
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
            🔔
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
              className="px-6 py-3 bg-accent hover:bg-accent-hover text-background rounded-lg font-black transition-all text-sm whitespace-nowrap shadow-lg shadow-accent/20"
            >
              Avisarme 🤙
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
