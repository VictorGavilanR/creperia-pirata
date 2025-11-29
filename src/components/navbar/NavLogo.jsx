import React from "react";
import { Anchor } from "lucide-react";

const NavLogo = () => {
  return (
    <a href="/" className="flex items-center gap-3 group">
      {/* --- ICONO / IMAGEN --- */}
      <div className="relative">
        {/* Resplandor de fondo */}
        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:bg-secondary/40 group-hover:blur-xl transition-all duration-500"></div>

        {/* Anillo exterior */}
        <div className="absolute -inset-1 bg-linear-to-br from-secondary/30 to-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Contenedor principal */}
        <div className="relative bg-linear-to-br from-secondary/20 via-secondary/10 to-transparent p-2 rounded-full border-2 border-secondary/40 group-hover:border-secondary group-hover:rotate-12 group-hover:scale-105 transition-all duration-500 shadow-lg shadow-secondary/20 group-hover:shadow-xl group-hover:shadow-secondary/40 flex items-center justify-center">
          <img
            src="/logo-pirata.png"
            alt="Logo Crepería Pirata"
            className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-lg"
          />
        </div>

        {/* Detalle pequeño */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* --- TEXTO --- */}
      <div className="flex flex-col">
        <span className="relative text-xl md:text-2xl font-black tracking-widest uppercase font-serif leading-none overflow-hidden">
          <span className="bg-linear-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-500">
            Crepería Pirata
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-secondary via-primary to-secondary group-hover:w-full transition-all duration-700 ease-out"></span>
        </span>

        <span className="text-[10px] md:text-xs text-text-light/60 tracking-[0.2em] uppercase font-sans mt-1 flex items-center gap-1 group-hover:text-text-light/80 transition-colors duration-300">
          <span className="inline-block w-3 h-px bg-secondary/40 group-hover:w-4 transition-all"></span>
          Del Caribe
          <span className="inline-block w-3 h-px bg-secondary/40 group-hover:w-4 transition-all"></span>
        </span>
      </div>

      {/* --- ICONO DECORATIVO (ANTES EMOJI) --- */}
      <Anchor
        size={18}
        className="
          hidden lg:block
          text-secondary
          opacity-0
          -translate-x-2
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-500
          delay-100
        "
      />
    </a>
  );
};

export default NavLogo;
