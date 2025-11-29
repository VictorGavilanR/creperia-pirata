import React from 'react';
import { Instagram, Youtube, Facebook, Waves, ArrowRight, Sparkles  } from 'lucide-react';

const FooterSocial = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: <Instagram size={22} />, 
      href: 'https://instagram.com',
      gradient: 'from-pink-500 to-purple-600'
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      href: 'https://tiktok.com',
      gradient: 'from-black to-gray-800'
    },
    { 
      name: 'Facebook', 
      icon: <Facebook size={22} />, 
      href: 'https://facebook.com',
      gradient: 'from-blue-600 to-blue-700'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube size={22} />, 
      href: 'https://youtube.com',
      gradient: 'from-red-600 to-red-700'
    }
  ];

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-black uppercase tracking-widest text-primary relative inline-block pb-3 font-serif">
        SÍGUENOS
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></span>
      </h3>
      
      {/* Botones de redes sociales */}
      <div className="flex gap-3 flex-wrap">
        {socialLinks.map((social, i) => (
          <a
            key={i}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group/social relative p-4 bg-gradient-to-br ${social.gradient} rounded-xl hover:scale-125 hover:-translate-y-3 hover:rotate-12 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl overflow-hidden`}
            title={social.name}
            aria-label={social.name}
          >
            {/* Brillo que cruza */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/social:translate-x-full transition-transform duration-700"></span>
            
            {/* Icono */}
            <span className="relative text-white text-xl font-bold block">
              {social.icon}
            </span>
          </a>
        ))}
      </div>

      {/* Contador de tripulación */}
      <div className="bg-gradient-to-r from-primary/10 via-secondary/15 to-primary/10 backdrop-blur-sm rounded-xl p-4 border-2 border-primary/30 hover:border-secondary hover:scale-105 transition-all duration-500 cursor-pointer group/trip">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Waves size={34} className="text-primary group-hover/trip:animate-bounce transition-transform duration-300" />
            <div>
              <div className="text-xs text-text-muted uppercase tracking-wide font-bold">Tripulación</div>
              <div className="text-lg font-black text-primary">+5,000 Piratas</div>
            </div>
          </div>
          <ArrowRight size={26} className="text-secondary opacity-0 group-hover/trip:opacity-100 group-hover/trip:translate-x-2 transition-all duration-300"/>
        </div>
      </div>

      {/* Mensaje decorativo */}
      <p className="text-xs text-text-muted/70 italic flex items-center gap-2">
        <Sparkles size={16} className="animate-pulse text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"/>
        <span>Únete a la aventura pirata</span>
      </p>
    </div>
  );
};

export default FooterSocial;