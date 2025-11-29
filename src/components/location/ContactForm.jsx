import React from 'react';
import { Send, Scroll, Anchor, Feather } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="relative group h-full">
      
      {/* Marcos decorativos traseros (efecto 3D) */}
      <div className="absolute -inset-4 border-2 border-secondary/20 rounded-xl transform rotate-2 transition-transform group-hover:rotate-1 duration-500"></div>
      <div className="absolute -inset-4 border-2 border-primary/20 rounded-xl transform -rotate-2 transition-transform group-hover:-rotate-1 duration-500"></div>

      {/* Esquinas decorativas estilo cofre */}
      <div className="absolute -top-2 -left-2 w-6 h-6 border-l-4 border-t-4 border-secondary z-20 rounded-tl"></div>
      <div className="absolute -top-2 -right-2 w-6 h-6 border-r-4 border-t-4 border-secondary z-20 rounded-tr"></div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-4 border-b-4 border-secondary z-20 rounded-bl"></div>
      <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-4 border-b-4 border-secondary z-20 rounded-br"></div>

      {/* Contenedor principal */}
      <div className="relative bg-linear-to-br from-[#2a1810] via-[#1a120d] to-[#120a06] p-6 sm:p-8 rounded-xl border-4 border-[#4a3426] shadow-2xl overflow-hidden">
        
        {/* Textura de madera */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent 0, transparent 5px, rgba(0,0,0,0.1) 5px, rgba(0,0,0,0.1) 6px)'
        }}></div>

        {/* Decoración de fondo con brillo */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        {/* Banda metálica superior */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-secondary/40 to-transparent"></div>

        {/* Remaches decorativos */}
        <div className="absolute -top-1.5 left-8 w-3 h-3 bg-secondary/80 rounded-full shadow-md border border-black/50"></div>
        <div className="absolute -top-1.5 right-8 w-3 h-3 bg-secondary/80 rounded-full shadow-md border border-black/50"></div>

        {/* Encabezado */}
        <div className="relative flex items-center gap-3 mb-8">
          <div className="p-2 bg-secondary/20 rounded-lg border border-secondary/40">
            <Scroll className="text-secondary w-7 h-7" />
          </div>
          <div>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-text-light">
              Mensaje en una <span className="text-secondary">Botella</span>
            </h3>
            <p className="text-text-muted text-xs uppercase tracking-widest mt-1">
              Contáctanos y zarpa con nosotros
            </p>
          </div>
        </div>

        {/* Separador con ancla */}
        <div className="flex items-center gap-2 mb-8">
          <div className="h-px flex-1 bg-linear-to-r from-transparent to-secondary/30"></div>
          <Anchor size={14} className="text-secondary/50" />
          <div className="h-px flex-1 bg-linear-to-l from-transparent to-secondary/30"></div>
        </div>

        {/* Formulario */}
        <form className="space-y-6 relative z-10">
          
          {/* Nombre */}
          <div className="group/input">
            <label className="flex items-center gap-2 text-text-muted text-xs uppercase tracking-widest mb-2 font-bold group-focus-within/input:text-secondary transition-colors">
              <Feather size={12} />
              Nombre del Capitán
            </label>
            <input 
              type="text" 
              placeholder="Ej: Jack Sparrow"
              className="w-full bg-base-dark/60 backdrop-blur-sm border-2 border-white/10 rounded-lg px-4 py-3 text-text-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-white/20 hover:border-white/20"
            />
          </div>

          {/* Email */}
          <div className="group/input">
            <label className="flex items-center gap-2 text-text-muted text-xs uppercase tracking-widest mb-2 font-bold group-focus-within/input:text-secondary transition-colors">
              <Feather size={12} />
              Correo (Para enviar el cuervo)
            </label>
            <input 
              type="email" 
              placeholder="capitan@perlanegra.com"
              className="w-full bg-base-dark/60 backdrop-blur-sm border-2 border-white/10 rounded-lg px-4 py-3 text-text-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-white/20 hover:border-white/20"
            />
          </div>

          {/* Mensaje */}
          <div className="group/input">
            <label className="flex items-center gap-2 text-text-muted text-xs uppercase tracking-widest mb-2 font-bold group-focus-within/input:text-secondary transition-colors">
              <Scroll size={12} />
              Tu Mensaje
            </label>
            <textarea 
              rows="5"
              placeholder="Quiero reservar una mesa para mi tripulación..."
              className="w-full bg-base-dark/60 backdrop-blur-sm border-2 border-white/10 rounded-lg px-4 py-3 text-text-light focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all placeholder:text-white/20 resize-none hover:border-white/20"
            ></textarea>
          </div>

          {/* Botón de Enviar */}
          <button 
            type="submit"
            className="w-full group/btn relative bg-linear-to-r from-primary via-primary-dark to-primary hover:from-primary-dark hover:via-primary hover:to-primary-dark text-white px-6 py-4 rounded-lg font-bold uppercase tracking-wider border-2 border-primary-dark shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 cursor-pointer overflow-hidden"
          >
            {/* Efecto de brillo */}
            <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>
            
            {/* Contenido del botón */}
            <span className="relative z-10 flex items-center justify-center gap-3">
              <Send size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              <span>Enviar Mensaje</span>
              <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse"></div>
            </span>
          </button>

          {/* Nota al pie */}
          <p className="text-center text-text-muted text-xs italic">
            * Responderemos en menos de 24 horas náuticas
          </p>
        </form>

        {/* Banda metálica inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-secondary/40 to-transparent"></div>
      </div>
    </div>
  );
};

export default ContactForm;