import React from 'react';
import { MapPin, Clock, Phone, Navigation, Compass } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="flex flex-col gap-6 h-full">

      {/* ================= MAPA ================= */}
      <div className="relative w-full flex-1 min-h-[350px] md:min-h-[400px] rounded-xl overflow-hidden group">

        {/* Marcos (NO bloquean) */}
        <div className="absolute -inset-2 border-2 border-secondary/20 rounded-xl rotate-1 transition-transform duration-500 group-hover:rotate-0 pointer-events-none z-10"></div>
        <div className="absolute -inset-2 border-2 border-primary/20 rounded-xl -rotate-1 transition-transform duration-500 group-hover:rotate-0 pointer-events-none z-10"></div>

        {/* Esquinas */}
        <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-secondary rounded-tl-lg pointer-events-none z-20"></div>
        <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-secondary rounded-tr-lg pointer-events-none z-20"></div>
        <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-secondary rounded-bl-lg pointer-events-none z-20"></div>
        <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-secondary rounded-br-lg pointer-events-none z-20"></div>

        {/* Remaches */}
        <div className="absolute top-1/2 -left-1.5 w-3 h-3 bg-secondary/80 rounded-full border border-black/50 pointer-events-none z-20"></div>
        <div className="absolute top-1/2 -right-1.5 w-3 h-3 bg-secondary/80 rounded-full border border-black/50 pointer-events-none z-20"></div>

        {/* Contenedor mapa */}
        <div className="relative h-full border-4 border-[#4a3426] rounded-xl overflow-hidden shadow-2xl">

          {/* MAPA INTERACTIVO */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.996350324796!2d-73.0477466!3d-36.8306355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669b5d4e5d5b5d5%3A0x1234567890abcdef!2sOngolmo%20654%2C%20Concepci%C3%B3n!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
            title="Mapa ubicación"
            className="relative z-0 w-full h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            allowFullScreen
          />

          {/* Badge decorativo (NO bloquea) */}
          <div className="absolute top-4 right-4 z-20 pointer-events-none">
            <div className="flex items-center gap-2 bg-secondary text-base-dark px-4 py-2 rounded-lg border-2 border-amber-900 shadow-xl animate-pulse">
              <Navigation size={16} className="rotate-45" />
              <span className="text-xs font-black uppercase tracking-widest">
                X Marca el Lugar
              </span>
            </div>
          </div>

          {/* Brújula */}
          <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
            <div className="bg-base-dark/90 p-3 rounded-full border-2 border-secondary/60 shadow-xl">
              <Compass size={24} className="text-secondary animate-spin-slow" />
            </div>
          </div>

        </div>
      </div>

      {/* ================= INFO ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Ubicación */}
        <div className="bg-[#1a120d] p-5 rounded-lg border-2 border-[#4a3426] shadow-lg">
          <div className="flex gap-3">
            <MapPin className="text-primary w-5 h-5 mt-1" />
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">La Guarida</h4>
              <p className="text-sm text-text-muted">
                Ongolmo 654, Concepción<br />
                Región del Bío Bío, Chile
              </p>
            </div>
          </div>
        </div>

        {/* Horario */}
        <div className="bg-[#1a120d] p-5 rounded-lg border-2 border-[#4a3426] shadow-lg">
          <div className="flex gap-3">
            <Clock className="text-secondary w-5 h-5 mt-1" />
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">Horario</h4>
              <p className="text-sm text-text-muted">
                Lun - Sáb: 12:00 - 20:00<br />
                <span className="text-red-400">Domingo cerrado</span>
              </p>
            </div>
          </div>
        </div>

        {/* Contacto */}
        <div className="bg-[#1a120d] p-5 rounded-lg border-2 border-[#4a3426] shadow-lg sm:col-span-2 lg:col-span-1">
          <div className="flex gap-3">
            <Phone className="text-primary w-5 h-5 mt-1" />
            <div>
              <h4 className="font-bold text-sm uppercase mb-1">Contacto</h4>
              <p className="text-sm text-text-muted">
                +56 9 1234 5678<br />
                <span className="text-secondary">reservas@laperla.cl</span>
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* ================= CTA ================= */}
      <a
        href="https://www.google.com/maps/place/Ongolmo+654,+Concepción"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-secondary text-base-dark font-bold uppercase tracking-wider py-3 rounded-lg flex items-center justify-center gap-2 shadow-lg hover:scale-[1.02] transition-transform"
      >
        <Navigation size={18} />
        Abrir en Google Maps
      </a>

    </div>
  );
};

export default MapSection;
