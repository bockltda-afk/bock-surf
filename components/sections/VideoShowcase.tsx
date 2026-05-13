export default function VideoShowcase() {
  return (
    <section className="py-20 bg-background relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold tracking-tighter text-white mb-10 uppercase"
          style={{ fontFamily: "'Oswald', sans-serif" }}
        >
          Mira mi <span className="text-accent">nivel</span> en el agua
        </h2>
        <div className="relative w-full aspect-video border border-white/10 shadow-2xl p-2 bg-card">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/RbcWihRe19o?autoplay=0&rel=0&showinfo=0"
            title="Tomás Bock Surf Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
