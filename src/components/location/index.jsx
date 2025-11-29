import React from 'react';
import ContactForm from './ContactForm';
import MapSection from './MapSection';
import { Compass, Anchor } from 'lucide-react';

const Location = () => {
  return (
    <section id="mapa" className="relative py-20 md:py-32 bg-linear-to-b from-[#0c0a09] via-[#1a120d] to-[#0c0a09] overflow-hidden">
      
      {/* Fondo de textura madera oscura */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 6px)'
      }}></div>

      {/* Decoración de cuerdas laterales */}
      <div className="absolute left-0 top-0 bottom-0 w-8 opacity-15">
        <div className="h-full w-2 mx-auto bg-linear-to-b from-transparent via-secondary to-transparent rounded-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(0,0,0,0.4) 12px, rgba(0,0,0,0.4) 15px)'
        }}></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 opacity-15">
        <div className="h-full w-2 mx-auto bg-linear-to-b from-transparent via-secondary to-transparent rounded-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 12px, rgba(0,0,0,0.4) 12px, rgba(0,0,0,0.4) 15px)'
        }}></div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Título de Sección */}
        <div className="text-center mb-16 md:mb-20">
          {/* Badge con brújula */}
          <div className="inline-flex items-center justify-center p-4 bg-secondary/10 rounded-full mb-6 border-2 border-secondary/30 backdrop-blur-sm relative group">
            <Compass size={36} className="text-secondary animate-spin-slow" style={{ animationDuration: '15s' }} />
            {/* Efecto de pulso */}
            <div className="absolute inset-0 rounded-full border-2 border-secondary/50 animate-ping opacity-20"></div>
          </div>

          {/* Título con decoración */}
          <div className="relative inline-block mb-6">
            {/* Anclas decorativas */}
            
            <div className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2">
              <Anchor className="text-secondary/40 w-8 h-8 -rotate-12" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-serif text-text-light">
              Encuentra Nuestro <span className="text-secondary">Escondite</span>
            </h2>
          </div>

          {/* Cuerda decorativa */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-0.5 bg-linear-to-r from-transparent to-secondary/40"></div>
            <div className="w-3 h-3 rounded-full bg-secondary/60 shadow-lg"></div>
            <div className="w-16 h-0.5 bg-linear-to-l from-transparent to-secondary/40"></div>
          </div>

          <p className="text-text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Sigue las estrellas o usa el mapa moderno. Si te pierdes, envía un <span className="text-secondary font-semibold">cuervo</span> (o un email).
          </p>
        </div>

        {/* Grid Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          {/* Columna 1: Formulario */}
          <div className="order-2 lg:order-1">
            <ContactForm />
          </div>
          
          {/* Columna 2: Mapa + Información */}
          <div className="order-1 lg:order-2">
            <MapSection />
          </div>

        </div>

      </div>

    
    </section>
  );
};

export default Location;