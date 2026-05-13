import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video / Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center brightness-75"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        {/* Overlay degradado oceánico suave para que destaque el video */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-accent/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-[30%] w-48 h-48 bg-blue-500/10 rounded-full blur-2xl z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border-l-4 border-accent bg-accent/5 px-4 py-2 text-sm font-bold uppercase tracking-widest text-white mb-8">
            Surfista Profesional
          </div>

          {/* Title */}
          <h1
            className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6 leading-[0.85] uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            TOMÁS<br />
            <span className="text-accent">
              BOCK
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-4 font-bold uppercase tracking-tighter leading-relaxed max-w-2xl">
            Técnica · Potencia · Lectura de Océano
          </p>
          <p className="text-sm font-mono text-muted uppercase mb-10 max-w-xl">
            Reñaca · Viña del Mar · La Boca · Concón | Chile
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-none font-bold text-lg uppercase tracking-widest transition-all shadow-xl shadow-accent/20 text-center"
            >
              Ver Coaching
            </a>
            <a
              href="#cursos"
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded-none font-bold text-lg uppercase tracking-widest transition-all text-center"
            >
              Cursos Online
            </a>
          </div>
        </div>
      </div>

      {/* Wave decoration bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" className="w-full fill-background" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
