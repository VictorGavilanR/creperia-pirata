import React, { useEffect, useState } from "react";
import { Anchor, Clock, MapPin, ChevronDown } from "lucide-react";

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`max-w-4xl mx-auto text-center px-4 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 bg-secondary/10 border border-secondary/30 rounded-full">
        <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <span className="text-secondary text-xs font-bold uppercase tracking-wider">
          Crepería del Caribe
        </span>
      </div>

      {/* Título */}
      <div className="relative mb-6">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-serif text-text-light drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
          Crepería Pirata
        </h1>

        {/* Cuerda inferior */}
        <div className="mt-4 h-2 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full relative">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent 0 8px, rgba(0,0,0,.35) 8px 10px)",
            }}
          />
        </div>
      </div>

      {/* Subtítulo */}
      <p className="text-xl sm:text-2xl md:text-3xl text-text-light/85 font-serif mb-6"> 
        <span className="text-secondary font-bold"> ¡Bienvenido a Bordo!</span>
      </p>

      {/* Descripción */}
      <p className="text-base sm:text-lg text-text-light/75 max-w-2xl mx-auto mb-10 leading-relaxed">
        Zarpa con nosotros en una aventura culinaria donde las crepas son el tesoro y cada bocado es una leyenda del mar
      </p>

      {/* CTA único */}
      <button
        onClick={scrollToMenu}
        className="
          group mx-auto mb-10
          px-10 py-4
          border-2 border-secondary/70
          rounded-lg
          font-bold uppercase tracking-wider
          text-secondary
          hover:bg-secondary/10
          transition-all
          flex items-center gap-2
        "
      >
        <Anchor size={18} className="group-hover:rotate-6 transition-transform" />
        Ver el botín
      </button>

      {/* Info rápida */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <div className="flex items-center gap-3 px-5 py-3 bg-base-dark/40 rounded-full border border-white/10">
          <Clock size={18} className="text-secondary" />
          <div className="text-left">
            <p className="text-xs text-text-light/60 uppercase">Horario</p>
            <p className="text-sm font-bold text-text-light">
              Lun–Sab · 12:00 – 20:00
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-5 py-3 bg-base-dark/40 rounded-full border border-white/10">
          <MapPin size={18} className="text-primary" />
          <div className="text-left">
            <p className="text-xs text-text-light/60 uppercase">Ubicación</p>
            <p className="text-sm font-bold text-text-light">
              Ongolmo 654, Concepción
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToMenu}
        className="group animate-bounce hover:animate-none"
      >
        <ChevronDown
          size={28}
          className="text-text-light/60 group-hover:text-secondary transition-colors"
        />
      </button>
    </div>
  );
};

export default HeroContent;
