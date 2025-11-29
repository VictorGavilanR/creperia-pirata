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

      
    </>
  );
};

export default HistoryBackground;