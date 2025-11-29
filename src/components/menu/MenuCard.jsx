
import React from 'react';
import { Anchor, Sparkles } from 'lucide-react';

const MenuCard = ({ item }) => {
  return (
    <div className="group relative mt-8 perspective-1000 h-full flex flex-col">
      
      {/* === COFRE DEL TESORO === */}
      <div className="
        relative 
        flex flex-col
        h-full
        bg-linear-to-b from-[#2a1810] via-[#1a120d] to-[#120a06]
        rounded-xl 
        border-4 border-[#4a3426]
        shadow-[0_15px_35px_rgba(0,0,0,0.6)] 
        transition-all duration-500
        hover:-translate-y-3 hover:shadow-[0_25px_50px_rgba(245,182,29,0.15)]
        overflow-hidden
      ">
        
        {/* Textura de madera del cofre */}
        <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 6px)',
        }}></div>

        {/* Bandas metálicas horizontales del cofre */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-secondary/40 to-transparent z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-secondary/40 to-transparent z-10"></div>
        <div className="absolute top-[50%] left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-secondary/30 to-transparent z-10"></div>

        {/* Marco dorado interior (refuerzo del cofre) */}
        <div className="absolute inset-2 border-2 border-secondary/20 rounded-lg pointer-events-none z-20"></div>
        
        {/* === REMACHES DECORATIVOS (Esquinas del cofre) === */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-linear-to-br from-secondary via-secondary/90 to-amber-900 rounded-full shadow-lg z-30 border-2 border-black/60"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-linear-to-br from-secondary via-secondary/90 to-amber-900 rounded-full shadow-lg z-30 border-2 border-black/60"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-linear-to-br from-secondary via-secondary/90 to-amber-900 rounded-full shadow-lg z-30 border-2 border-black/60"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-linear-to-br from-secondary via-secondary/90 to-amber-900 rounded-full shadow-lg z-30 border-2 border-black/60"></div>

        {/* Remaches laterales adicionales */}
        <div className="absolute top-1/2 -translate-y-1/2 -left-1.5 w-3 h-3 bg-secondary/80 rounded-full shadow-md z-30 border border-black/50"></div>
        <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-secondary/80 rounded-full shadow-md z-30 border border-black/50"></div>

        {/* === TAPA DEL COFRE (IMAGEN) === */}
        <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden relative rounded-t-lg shrink-0">
          {/* Bisagras del cofre */}
          <div className="absolute top-2 left-4 w-8 h-1 bg-secondary/60 rounded-full shadow-md z-20 border-t border-secondary/80"></div>
          <div className="absolute top-2 right-4 w-8 h-1 bg-secondary/60 rounded-full shadow-md z-20 border-t border-secondary/80"></div>
          <img 
            src={item.image} 
            alt={item.name} 
            className="
                 w-full h-full
    object-contain
    scale-[1.25]
    transition-transform duration-700
    group-hover:scale-[1.32]
            "/>
          {/* Sombra interior oscura */}
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.7)] pointer-events-none"></div>
          
          {/* Borde inferior de la tapa (separador) */}
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-b from-transparent to-[#4a3426]"></div>

          {/* Badge Popular (Etiqueta pirata) */}
          {item.isPopular && (
            <div className="absolute top-3 right-3 z-20">
              <div className="relative bg-linear-to-br from-secondary via-secondary to-amber-700 text-base-dark text-[10px] font-black px-3 py-1.5 rounded-lg shadow-2xl border-2 border-amber-900 flex items-center gap-1 animate-pulse">
                <Sparkles size={10} />
                FAVORITO
                {/* Sello de cera efecto */}
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-red-900 rounded-full border border-red-950 opacity-70"></div>
              </div>
            </div>
          )}
        </div>

        {/* === CERRADURA CENTRAL (PRECIO) === */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[140px] sm:top-[155px] md:top-[165px] z-30">
          <div className="relative">
            {/* Placa de la cerradura */}
            <div className="absolute inset-0 bg-linear-to-br from-amber-900 to-amber-950 blur-sm rounded-full scale-110"></div>
            
            {/* Cerradura principal */}
            <div className="relative bg-linear-to-br from-secondary via-secondary/95 to-amber-800 text-base-dark font-black font-serif px-7 py-2 rounded-full border-[5px] border-[#1a120d] shadow-2xl flex items-center justify-center min-w-[110px] group-hover:scale-110 group-hover:rotate-2 transition-all duration-300">
              <div className="absolute inset-0 bg-linear-to-tr from-white/20 to-transparent rounded-full"></div>
              <span className="relative z-10 text-lg">{item.price}</span>
            </div>

            {/* Ojo de la cerradura (decorativo) */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-1 w-1.5 h-3 bg-base-dark rounded-full"></div>
          </div>
        </div>

        {/* === INTERIOR DEL COFRE (CONTENIDO) === */}
        <div className="p-4 sm:p-5 md:p-6 pt-8 sm:pt-9 md:pt-10 text-center relative bg-linear-to-b from-[#1a120d] to-[#0f0805] flex-1 flex flex-col">
          
          {/* Brillo interno del tesoro */}
          <div className="absolute top-0 left-0 right-0 h-20 bg-linear-to-b from-secondary/5 to-transparent pointer-events-none"></div>

          {/* Título del tesoro */}
          <h3 className="text-lg sm:text-xl font-serif font-bold text-text-light mb-2 sm:mb-3 group-hover:text-secondary transition-colors relative line-clamp-2 min-h-14">
            {item.name}
          </h3>
          
          {/* Separador decorativo con ancla */}
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <div className="w-6 sm:w-8 h-0.5 bg-linear-to-r from-transparent to-secondary/40"></div>
            <Anchor size={12} className="text-secondary/50 shrink-0" />
            <div className="w-6 sm:w-8 h-0.5 bg-linear-to-l from-transparent to-secondary/40"></div>
          </div>
          
          {/* Descripción con altura fija */}
          <p className="text-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-3 px-1 sm:px-2 flex-1 min-h-18">
            {item.desc}
          </p>

          {/* === BOTÓN RECLAMAR TESORO === */}
          <button className="
            relative w-full py-2.5 sm:py-3 
            bg-linear-to-b from-[#3e2723] to-[#2a1d15]
            hover:from-[#4a3426] hover:to-[#3e2723]
            text-secondary font-bold uppercase tracking-wider text-[10px] sm:text-xs
            rounded-lg border-2 border-secondary/40 hover:border-secondary/60
            transition-all duration-300
            flex items-center justify-center gap-2
            group/btn
            overflow-hidden
            cursor-pointer
            shadow-[inset_0_1px_0_rgba(245,182,29,0.1)]
            mt-auto
          ">
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-secondary/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></div>
            
            <Anchor size={14} className="relative z-10 group-hover/btn:rotate-45 transition-transform shrink-0" />
            <span className="relative z-10">Reclamar Tesoro</span>
            
            {/* Monedas decorativas */}
            <div className="absolute -right-1 -top-1 w-2 h-2 bg-secondary/30 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
            <div className="absolute -left-1 -bottom-1 w-2 h-2 bg-secondary/30 rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity delay-75"></div>
          </button>
        </div>

        {/* Efecto de brillo general al hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 bg-linear-to-t from-secondary/5 via-transparent to-transparent"></div>
        </div>
      </div>

      {/* Sombra proyectada del cofre */}
      <div className="absolute -bottom-2 left-[10%] right-[10%] h-4 bg-black/40 blur-xl rounded-full group-hover:scale-110 transition-transform duration-500"></div>
    </div>
  );
};
export default MenuCard;