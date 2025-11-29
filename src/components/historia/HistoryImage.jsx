import React from 'react';
import { Compass, Anchor } from 'lucide-react';

const HistoryImage = () => {
  return (
    <div className="order-1 lg:order-2 relative group perspective-1000">
      
      {/* Marcos decorativos con efecto 3D */}
      <div className="absolute -inset-6 border-4 border-secondary/20 rounded-lg transform rotate-3 transition-all duration-700 group-hover:rotate-1 group-hover:border-secondary/30"></div>
      <div className="absolute -inset-6 border-4 border-primary/20 rounded-lg transform -rotate-3 transition-all duration-700 group-hover:-rotate-1 group-hover:border-primary/30"></div>

      {/* Esquinas decorativas */}
      <div className="absolute -top-3 -left-3 w-8 h-8 border-l-4 border-t-4 border-secondary z-20"></div>
      <div className="absolute -top-3 -right-3 w-8 h-8 border-r-4 border-t-4 border-secondary z-20"></div>
      <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-4 border-b-4 border-secondary z-20"></div>
      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-4 border-b-4 border-secondary z-20"></div>

      {/* Contenedor principal de la imagen */}
      <div className="relative rounded-lg overflow-hidden shadow-2xl border-[6px] border-[#2a1810] group-hover:border-secondary/50 transition-all duration-500 bg-base-dark">
        
        {/* Overlay oscuro con gradiente */}
        <div className="absolute inset-0 bg-linear-to-tr from-base-dark/70 via-base-dark/20 to-transparent z-10 pointer-events-none group-hover:from-base-dark/50 transition-all duration-500"></div>
        
        {/* Efecto de viñeta */}
        <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] z-10 pointer-events-none"></div>
        
        {/* IMAGEN */}
        <img 
          src="/historia-creperia.jpg"
          alt="Cocinando crepes artesanales al estilo pirata" 
          className="w-full h-[450px] md:h-[550px] object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 sepia-[0.15] group-hover:sepia-0"
        />

        {/* Badge flotante con brújula */}
        <div className="absolute bottom-6 left-6 z-20 bg-base-dark/95 backdrop-blur-md px-5 py-3 rounded-lg border-2 border-secondary/60 flex items-center gap-3 shadow-2xl group-hover:scale-105 transition-transform">
          <Compass className="text-secondary w-6 h-6 animate-spin-slow" style={{ animationDuration: '8s' }} />
          <div className="flex flex-col">
            <span className="text-secondary font-serif font-bold text-base">Desde 2025</span>
            <span className="text-text-muted text-xs uppercase tracking-wider">Navegando Sabores</span>
          </div>
        </div>

        {/* Ancla decorativa esquina superior */}
        <div className="absolute top-6 right-6 z-20 w-12 h-12 bg-secondary/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0">
          <Anchor className="w-6 h-6 text-base-dark" />
        </div>
      </div>

      {/* Texto decorativo debajo */}
      <div className="mt-6 text-center">
        <p className="text-sm text-text-muted italic">"Donde el arte culinario zarpa hacia nuevos horizontes"</p>
      </div>
    </div>
  );
};

export default HistoryImage;