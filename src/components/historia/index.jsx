import React from 'react';
import HistoryBackground from './HistoryBackground';
import HistoryText from './HistoryText';
import HistoryImage from './HistoryImage';

const History = () => {
  return (
    <section id="tripulacion" className="relative py-20 md:py-32 overflow-hidden bg-linear-to-b from-base-dark via-[#1a0f0a] to-base-dark">
      
      {/* 1. Fondo y Decoración */}
      <HistoryBackground />
      
      {/* 2. Contenido Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ORDEN CORRECTO: Texto primero, Imagen después */}
          <HistoryText />
          
          <HistoryImage />

        </div>
      </div>

    </section>
  );
};

export default History;