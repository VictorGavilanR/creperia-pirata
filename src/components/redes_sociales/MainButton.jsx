import React from 'react';
import { Anchor } from 'lucide-react';

const MainButton = ({ toggle, isExpanded }) => {
  return (
    <button
      onClick={toggle}
      className="relative group cursor-pointer mr-1 md:mr-0"
      aria-label="Abrir redes sociales"
    >
      {/* Cuerda superior */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-1 h-20 bg-linear-to-b from-transparent to-amber-700/60 rounded-full">
        <div className="absolute inset-0 opacity-60 rope-pattern"></div>
      </div>

      {/* Círculo del botón */}
      {/* MÓVIL: w-12 (48px) | DESKTOP: w-16 (64px) */}
      <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-linear-to-br from-amber-600 via-amber-700 to-amber-900 shadow-xl border-[2px] md:border-[3px] border-amber-900/50 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
        
        <div className="absolute inset-0 rounded-full opacity-20 texture-wood"></div>

        {/* Icono */}
        {/* MÓVIL: size-5 | DESKTOP: size-8 */}
        <Anchor 
          className={`w-5 h-5 md:w-8 md:h-8 text-amber-100 relative z-10 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
        />

        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/20 to-transparent pointer-events-none"></div>
      </div>

      {!isExpanded && (
        <div className="absolute inset-0 rounded-full border-2 border-amber-500 animate-ping opacity-75"></div>
      )}
    </button>
  );
};

export default MainButton;