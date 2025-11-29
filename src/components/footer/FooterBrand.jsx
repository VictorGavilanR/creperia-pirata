import React from 'react';
import { Anchor, Icon, Star, Trophy, Skull} from 'lucide-react';

const FooterBrand = () => {
  return (
    <div className="space-y-6">
      <div className="group cursor-pointer">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative">
            {/* Resplandor animado */}
            <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse"></div>
            
            {/* Anillo giratorio */}
            <div className="absolute -inset-3 bg-gradient-to-r from-primary via-secondary to-primary rounded-full opacity-0 group-hover:opacity-40 animate-spin-slow"></div>
            
            {/* Contenedor del logo */}
            <div className="relative bg-gradient-to-br from-primary/20 via-white/10 to-secondary/20 p-4 rounded-full border-3 border-primary group-hover:border-secondary transition-all duration-700 shadow-2xl group-hover:rotate-[360deg] group-hover:scale-110">
              <Anchor className="h-12 w-12 text-primary group-hover:text-secondary transition-colors duration-700" />
            </div>
            
            {/* Chispas decorativas */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-secondary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping" style={{animationDelay: '0.3s'}}></div>
          </div>
          
          <div>
            <h2 className="text-2xl font-black uppercase tracking-wider bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent group-hover:from-secondary group-hover:via-primary group-hover:to-secondary transition-all duration-700 relative font-serif">
              CREPERÍA PIRATA
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer-slow"></span>
            </h2>
            <p className="text-xs text-text-muted tracking-[0.3em] uppercase flex items-center gap-2">
              <span className="w-3 h-px bg-secondary group-hover:w-5 transition-all duration-500"></span>
              DEL CARIBE
              <span className="w-3 h-px bg-secondary group-hover:w-5 transition-all duration-500"></span>
            </p>
          </div>
        </div>

        {/* Caja decorativa */}
        <div className="relative group/box bg-gradient-to-br from-primary/5 via-white/30 to-secondary/5 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-5 hover:border-secondary hover:shadow-2xl hover:shadow-secondary/20 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-secondary/10 to-primary/0 translate-x-[-100%] group-hover/box:translate-x-[100%] transition-transform duration-1000"></div>
          <p className="text-sm text-text-main/90 flex items-center gap-3 relative z-10">
            <Skull size={32} className="text-primary group-hover/box:scale-125 group-hover/box:rotate-12 transition-transform duration-500"/>
            <span className="leading-relaxed font-medium">¡Gracias por navegar con nosotros, pirata!</span>
          </p>
        </div>
      </div>

        {/* Insignias */}
        <div className="flex gap-3">
            {[
                { icon: Star, label: "5.0", sublabel: "RATING" },
                { icon: Trophy, label: "BEST", sublabel: "2024" }
            ].map((badge, i) => (
                <div 
                key={i}
                className="px-5 py-3 rounded-xl bg-gradient-to-b from-white/40 to-white/20 border border-primary/30 backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
                >
                <div className="flex flex-col items-center gap-1">
                    <badge.icon size={18} className="text-primary mb-1" />
                    <span className="font-bold text-primary text-sm">{badge.label}</span>
                    <span className="text-xs text-text-muted">{badge.sublabel}</span>
                </div>
                </div>
            ))}
            </div>
    </div>
  );
};

export default FooterBrand;