"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Coaching", href: "#servicios" },
  { name: "Cursos 🔧", href: "#cursos" },
  { name: "Testimonios", href: "#testimonios" },
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
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter text-white">
            TOMÁS<span className="text-accent"> BOCK</span>
          </span>
          <span className="hidden sm:block text-xs text-gray-400 font-medium border-l border-gray-600 pl-2 uppercase tracking-widest">
            Surf Coach
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-accent",
                activeSection === item.href.substring(1)
                  ? "text-accent"
                  : "text-gray-300"
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            className="px-5 py-2 bg-accent hover:bg-accent-hover text-background rounded-md font-bold transition-colors text-sm shadow-lg shadow-accent/20"
          >
            ¡Quiero Surfear!
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
              className="text-base font-medium text-gray-300 hover:text-accent py-2 border-b border-white/5"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 bg-accent text-background rounded-md font-bold"
          >
            ¡Quiero Surfear!
          </a>
        </div>
      )}
    </header>
  );
}
