import React from 'react';

const NavLogo = () => {
  return (
    <a href="/" className="flex items-center gap-3 group">
      {/* --- ICONO / IMAGEN --- */}
      <div className="relative">
        {/* Resplandor de fondo animado */}
        <div className="absolute inset-0 bg-secondary/20 rounded-full blur-lg group-hover:bg-secondary/40 group-hover:blur-xl transition-all duration-500"></div>
        
        {/* Anillo exterior pulsante */}
        <div className="absolute -inset-1 bg-linear-to-br from-secondary/30 to-primary/30 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
        
        {/* Contenedor circular principal */}
        <div className="relative bg-linear-to-br from-secondary/20 via-secondary/10 to-transparent p-2 rounded-full border-2 border-secondary/40 group-hover:border-secondary group-hover:rotate-20 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-secondary/20 group-hover:shadow-xl group-hover:shadow-secondary/40 flex items-center justify-center">
          
          {/* ✅ RUTA CORRECTA A LA CARPETA PUBLIC */}
          <img 
            src="/logo-pirata.png" 
            alt="Logo Crepería Pirata" 
            className="h-8 w-8 md:h-10 md:w-10 object-contain drop-shadow-lg"
          />

        </div>
        
        {/* Decoración: moneda flotante */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity"></div>
      </div>
      
      {/* --- TEXTO --- */}
      <div className="flex flex-col">
        {/* Título */}
        <span className="relative text-xl md:text-2xl font-black tracking-widest uppercase font-serif leading-none overflow-hidden">
          <span className="bg-linear-to-r from-secondary via-secondary to-primary bg-clip-text text-transparent group-hover:from-primary group-hover:via-secondary group-hover:to-secondary transition-all duration-500">
            Crepería Pirata
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-secondary via-primary to-secondary group-hover:w-full transition-all duration-700 ease-out"></span>
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
        </span>
        
        {/* Subtítulo */}
        <span className="text-[10px] md:text-xs text-text-light/60 tracking-[0.2em] uppercase font-sans mt-1 group-hover:text-text-light/80 transition-colors duration-300 flex items-center gap-1">
          <span className="inline-block w-3 h-px bg-secondary/40 group-hover:w-4 transition-all duration-300"></span>
          Del Caribe
          <span className="inline-block w-3 h-px bg-secondary/40 group-hover:w-4 transition-all duration-300"></span>
        </span>
      </div>
      
      {/* Emoji decorativo */}
      <span className="hidden lg:block text-base opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
        🏴‍☠️
      </span>
    </a>
  );
};

export default NavLogo;