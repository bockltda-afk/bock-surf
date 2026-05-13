import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Video / Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://dukesurf.com/wp-content/uploads/2021/08/Andino_K_21MEX_Diz_TOD_5039-uai-1309x982.jpg"
          alt="Tomás Bock en acción"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
        {/* Overlay degradado oceánico */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Partículas decorativas */}
      <div className="absolute top-1/3 right-[15%] w-72 h-72 bg-accent/10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-1/4 right-[30%] w-48 h-48 bg-blue-500/10 rounded-full blur-2xl z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6 max-w-6xl">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            🏄 Surfista Profesional Chileno
          </div>

          {/* Title */}
          <h1
            className="text-6xl md:text-8xl font-black tracking-tight text-white mb-6 leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "2px" }}
          >
            TOMÁS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
              BOCK
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light leading-relaxed max-w-2xl">
            Surf Coach Profesional — Te enseño a leer el océano, dominar las olas y surfear con propósito.
          </p>
          <p className="text-base text-gray-400 mb-10 max-w-xl">
            📍 Reñaca · Viña del Mar · La Boca · Concón &nbsp;|&nbsp; 🏆 Surfista Profesional &nbsp;|&nbsp; 🌊 +10 años en el agua
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#servicios"
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-background rounded-lg font-black text-lg transition-all shadow-xl shadow-accent/20 text-center"
            >
              🏄 Ver Coaching
            </a>
            <a
              href="#cursos"
              className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-accent hover:text-accent text-white rounded-lg font-bold text-lg transition-all text-center backdrop-blur-sm"
            >
              Ver Cursos Online
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
