import React, { useState, useEffect } from "react";
import { Anchor, Clock, ChevronDown, Map } from "lucide-react";

const HeroContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-1000 px-4 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 bg-secondary/10 border border-secondary/30 rounded-full backdrop-blur-sm animate-fade-in">
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
          <span className="text-secondary text-xs md:text-sm font-bold uppercase tracking-wider">
            La Mejor Crepería del Caribe
          </span>
        </div>

        {/* Título principal (Ajustado para Móvil) */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-serif leading-tight mb-3">
          <span className="block text-text-light">La Perla Dulce</span>
        </h1>

        {/* Subtítulo */}
        <div className="mb-6 md:mb-8">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-text-light/90 font-serif mb-3">
            Tesoros Dulces del
            <span className="text-secondary font-bold"> Mar Caribe</span>
          </p>

          {/* Líneas decorativas (Ocultas en móvil para ahorrar espacio) */}
          <div className="hidden sm:flex items-center justify-center gap-2 text-text-light/70">
            <div className="h-px w-8 md:w-12 bg-linear-to-r from-transparent to-secondary"></div>
            <span className="text-sm md:text-xl font-light italic">
              Donde cada crepa es un botín delicioso
            </span>
            <div className="h-px w-8 md:w-12 bg-linear-to-l from-transparent to-secondary"></div>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm sm:text-base md:text-lg text-text-light/80 max-w-xl md:max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
          Zarpa con nosotros en una aventura culinaria única. Crepas artesanales
          inspiradas en los sabores del Caribe, preparadas por nuestra
          tripulación de chefs expertos.
        </p>

        {/* Botones CTA (Apilados en móvil) */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12 w-full">
          <button
            className="
  w-full sm:w-auto
  group
  px-8 py-4
  rounded-lg
  bg-transparent
  text-secondary
  font-bold uppercase tracking-wider
  border-2 border-secondary/70
  transition-all duration-300
  hover:bg-secondary/10
  hover:-translate-y-0.5
  cursor-pointer
"
          >
            <span className="flex items-center justify-center gap-2">
              <Anchor
                size={18}
                className="group-hover:rotate-6 transition-transform"
              />
              Ver El Botín
            </span>
          </button>

          <button className="w-full sm:w-auto group px-8 py-4 bg-transparent border-2 border-primary rounded-lg font-bold text-primary uppercase tracking-wider hover:bg-primary/10 hover:border-primary/80 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
            <Map
              size={20}
              className="group-hover:scale-110 transition-transform"
            />
            Nuestra Isla
          </button>
        </div>

        {/* Info Cards (Tus datos actualizados) */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-8 md:mb-12">
          {/* Card Horario */}
          <div className="flex items-center gap-3 px-5 py-3 bg-base-dark/40 backdrop-blur-md rounded-full border border-white/10 hover:border-secondary/50 transition-colors">
            <div className="p-2 bg-secondary/20 rounded-full shrink-0">
              <Clock size={18} className="text-secondary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-text-light/60 uppercase tracking-wider">
                Horario
              </p>
              <p className="text-sm font-bold text-text-light">
                Lun-Sab: 12:00 - 20:00
              </p>
            </div>
          </div>

          {/* Card Ubicación */}
          <div className="flex items-center gap-3 px-5 py-3 bg-base-dark/40 backdrop-blur-md rounded-full border border-white/10 hover:border-primary/50 transition-colors">
            <div className="p-2 bg-primary/20 rounded-full shrink-0">
              <Map size={18} className="text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-text-light/60 uppercase tracking-wider">
                Ubicación
              </p>
              <p className="text-sm font-bold text-text-light text-wrap max-w-[200px] md:max-w-none">
                Ongolmo 654, Concepción
              </p>
            </div>
          </div>
        </div>

        {/* Decoración con iconos (Oculta en móvil para limpiar la vista) */}
        <div className="hidden md:flex items-center justify-center gap-4 mb-8 opacity-70">
          <div className="h-px w-16 bg-linear-to-r from-transparent to-secondary" />

          <Anchor
            size={26}
            strokeWidth={1.5}
            className="animate-bounce text-secondary"
          />

          <div className="h-px w-16 bg-linear-to-r from-secondary to-primary" />

          <Map
            size={26}
            strokeWidth={1.5}
            className="animate-bounce text-primary"
            style={{ animationDelay: "0.2s" }}
          />

          <div className="h-px w-16 bg-linear-to-r from-primary to-secondary" />

          <Anchor
            size={26}
            strokeWidth={1.5}
            className="animate-bounce text-secondary"
            style={{ animationDelay: "0.4s" }}
          />

          <div className="h-px w-16 bg-linear-to-l from-transparent to-primary" />
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToMenu}
          className="group animate-bounce hover:animate-none cursor-pointer pb-8 md:pb-0"
          aria-label="Scroll hacia abajo"
        >
          <div className="flex flex-col items-center gap-2 text-text-light/60 hover:text-secondary transition-colors">
            <span className="text-sm uppercase tracking-widest font-bold">
              Descubre Más
            </span>
            <div className="p-2 rounded-full border-2 border-current group-hover:border-secondary group-hover:bg-secondary/10 transition-all">
              <ChevronDown
                size={24}
                className="group-hover:translate-y-1 transition-transform"
              />
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default HeroContent;
