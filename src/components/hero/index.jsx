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
        min-h-[100svh]
        overflow-hidden
        bg-base-dark
        
        flex
        flex-col
        items-center
        
        /* --- CORRECCIÓN RESPONSIVA --- */
        
        /* 1. MÓVIL (Por defecto): Centrado con algo de padding */
        justify-center
        pt-28
        
        /* 2. NOTEBOOK/LAPTOP (md y lg): AQUÍ ESTÁ EL TRUCO */

        md:justify-start
        md:pt-25          /
        lg:pt-20          
        
        /* 3. MONITOR GIGANTE (xl): Volvemos a centrar matemáticamente */
        xl:justify-center
        xl:pt-0
        
        pb-12
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