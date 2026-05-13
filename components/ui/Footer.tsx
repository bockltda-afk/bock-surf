import { Instagram, Mail, MessageCircle, Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          <div className="max-w-xs">
            <a href="#inicio" className="inline-block mb-4">
              <span className="text-3xl font-black tracking-tighter text-white">
                TOMÁS<span className="text-accent"> BOCK</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed">
              Surfista profesional chileno. Coaching presencial y cursos online para todos los que quieran surfear mejor.
            </p>
            <div className="flex mt-6 gap-3">
              <a href="https://instagram.com/tomas_bock" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/50 transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/56963097435" target="_blank" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/50 transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="mailto:Bock.Ltda@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/50 transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-sm">Servicios</h4>
            <div className="flex flex-col space-y-3">
              <a href="#servicios" className="text-gray-400 hover:text-accent transition-colors text-sm">Coaching 1:1</a>
              <a href="#servicios" className="text-gray-400 hover:text-accent transition-colors text-sm">Clases Grupales</a>
              <a href="#servicios" className="text-gray-400 hover:text-accent transition-colors text-sm">Programa Intensivo</a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-sm">Cursos Online</h4>
            <div className="flex flex-col space-y-3">
              <a href="#cursos" className="text-gray-400 hover:text-accent transition-colors text-sm">Surf desde Cero</a>
              <a href="#cursos" className="text-gray-400 hover:text-accent transition-colors text-sm">Técnica Avanzada</a>
              <a href="#cursos" className="text-gray-400 hover:text-accent transition-colors text-sm">Lectura del Océano</a>
            </div>
          </div>

          <div className="flex flex-col">
            <h4 className="text-white font-bold mb-5 uppercase tracking-widest text-sm">Contacto</h4>
            <div className="flex flex-col space-y-3 text-sm text-gray-400">
              <span>Bock.Ltda@gmail.com</span>
              <span>+56 9 6309 7435</span>
              <span>Reñaca · Viña del Mar 🇨🇱</span>
            </div>
          </div>

        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Tomás Bock. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2 text-gray-600">
            <Waves size={14} className="text-accent/50" />
            <span>Hecho con pasión por el surf</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
