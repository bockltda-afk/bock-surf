"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Coaching", href: "#servicios" },
  { name: "Cursos", href: "#cursos" },
  { name: "Precios", href: "#precios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.substring(1));
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          current = section;
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "glass shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <div className="bg-white text-black px-2 py-0.5 font-bold text-xl tracking-tighter">BSA</div>
          <span 
            className="text-2xl font-bold tracking-tighter text-white uppercase"
            style={{ fontFamily: "'Oswald', sans-serif" }}
          >
            Bock Surf <span className="text-accent">Academy</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-accent",
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-gray-400"
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-6 py-2 bg-white hover:bg-accent text-black hover:text-white font-bold uppercase tracking-widest transition-all text-xs"
          >
            Inscríbete
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass shadow-xl py-4 px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-gray-300 hover:text-accent py-2 border-b border-white/5"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 bg-white text-black font-bold uppercase tracking-widest"
          >
            Inscríbete
          </a>
        </div>
      )}
    </header>
  );
}
