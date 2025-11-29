import React from 'react';
import { Scroll, Ship, Anchor } from 'lucide-react';

const HistoryText = () => {
  return (
    <div className="order-2 lg:order-1">
      
      {/* Badge superior */}
      <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-secondary/10 border border-secondary/30 rounded-full backdrop-blur-sm">
        <Ship className="w-4 h-4 text-secondary" />
        <span className="text-secondary text-xs font-bold uppercase tracking-wider">
          Nuestra Historia
        </span>
      </div>

      {/* Título con decoración de pergamino */}
      <div className="relative mb-8">
        <div className="flex items-start gap-4 mb-4">
          <Scroll className="text-secondary w-10 h-10 flex-shrink-0 mt-2" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-serif text-text-light leading-tight">
            La Leyenda del
            <span className="block text-secondary mt-2">Capitán Crepa</span>
          </h2>
        </div>

        {/* Cuerda decorativa (Separador) */}
        <div className="relative w-32 h-2 rounded-full shadow-lg mb-8 rope-pattern opacity-80"></div>
      </div>
      
      {/* Texto de la historia */}
      <div className="space-y-5 text-base md:text-lg text-text-light/85 leading-relaxed">
        <p className="relative pl-4 border-l-2 border-secondary/40">
          <span className="text-secondary font-bold text-xl">1720.</span> Cansados de saquear oro y joyas frías, nuestra tripulación descubrió un tesoro mucho más valioso en una pequeña isla francesa: <strong className="text-secondary font-semibold">la receta secreta de la Crepa Perfecta.</strong>
        </p>
        
        <p className="italic text-text-light/90">
          "Dicen que el Capitán cambió su espada por una espátula y juró que nunca más un marinero pasaría hambre en alta mar."
        </p>
        
        <p>
          Así nació <span className="text-white font-bold tracking-wide">La Crepería Pirata</span>, un refugio donde los sabores del mundo se encuentran: especias traídas de las Indias, chocolate oscuro del Caribe, y el arte francés de la crepa.
        </p>

        <p className="text-secondary/80 text-sm uppercase tracking-widest font-bold pt-2">
          ⚔ Tradición que perdura desde 2025 ⚔
        </p>
      </div>

      {/* Firma del Capitán */}
      <div className="mt-10 p-6 bg-base-dark/60 backdrop-blur-sm border-2 border-secondary/20 rounded-lg relative overflow-hidden group hover:border-secondary/40 transition-all duration-300">
        
        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-secondary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
        
        <div className="relative flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-3xl text-secondary italic mb-1">"¡Que cada crepa sea una aventura!"</span>
            <span className="text-xs uppercase tracking-widest text-text-muted flex items-center gap-2">
              <Anchor className="w-3 h-3" />
              Capitán Crepa
            </span>
          </div>
          
          {/* Sello de cera */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-linear-to-br from-red-900 to-red-950 border-3 border-red-700/80 flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-all duration-500 cursor-pointer">
              <Anchor className="text-red-200 w-7 h-7 group-hover:scale-110 transition-transform" />
            </div>
            {/* Goteo de cera */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-4 bg-red-950 rounded-b-full opacity-60"></div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default HistoryText;