import React from "react";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <header
      id="inicio"
      className="
        relative
        w-full
        min-h-[100svh]      /* Móvil: Mínimo toda la pantalla, pero puede crecer */
        lg:h-[100svh]       /* Escritorio: Altura fija exacta */
        
        bg-base-dark
        overflow-hidden     /* Ocultamos lo que salga por los lados */
        
        flex
        items-center
        justify-center
        
        /* PADDING PARA EL NAVBAR: */
        pt-28               /* Móvil: Mucho espacio arriba */
        pb-12               /* Móvil: Espacio abajo para scroll */
        lg:py-0             /* Escritorio: Sin padding vertical (el flex centra) */
      "
    >
      <HeroBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none">
        <div className="pointer-events-auto">
            <HeroContent />
        </div>
      </div>
    </header>
  );
};

export default Hero;