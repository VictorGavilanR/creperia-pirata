import React from 'react';

const HistoryBackground = () => {
  return (
    <>
      {/* FONDO DECORATIVO - Mapa antiguo */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" 
        style={{
          backgroundImage: "url('https://img.freepik.com/free-vector/ancient-abstract-world-map_23-2147501336.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* Decoración de cuerdas laterales */}
      <div className="absolute left-0 top-0 bottom-0 w-8 opacity-20 pointer-events-none hidden md:block">
        <div className="h-full w-2 mx-auto bg-linear-to-b from-transparent via-secondary to-transparent rounded-full rope-pattern"></div>
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-8 opacity-20 pointer-events-none hidden md:block">
        <div className="h-full w-2 mx-auto bg-linear-to-b from-transparent via-secondary to-transparent rounded-full rope-pattern"></div>
      </div>

      {/* Decoración de olas en el footer */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" className="w-full h-full fill-secondary">
          <path d="M0,50 Q150,30 300,50 T600,50 T900,50 T1200,50 L1200,120 L0,120 Z" />
        </svg>
      </div>
    </>
  );
};

export default HistoryBackground;