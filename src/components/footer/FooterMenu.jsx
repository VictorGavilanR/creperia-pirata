import React from 'react';
import { Utensils, Ship, Shirt } from "lucide-react";


const FooterMenu = () => {
    const menuItems = [
        { name: 'Carta', icon: Utensils, color: 'from-primary', href: '#menu' },
        { name: 'Delivery', icon: Ship,     color: 'from-secondary', href: '#delivery' },
        { name: 'Merch', icon: Shirt,      color: 'from-base-coral', href: '#merch' }
    ];


  return (
    <div className="space-y-5">
      <h3 className="text-lg font-black uppercase tracking-widest text-primary relative inline-block pb-3 font-serif">
        MENÚ
        <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></span>
      </h3>
      
      <ul className="space-y-3">
        {menuItems.map((item, i) => (
          <li key={i}>
            <a 
              href={item.href}
              className="group/link flex items-center gap-4 text-sm text-text-main/80 hover:text-primary transition-all duration-300 p-3 rounded-xl hover:bg-white/50 hover:shadow-lg hover:shadow-primary/10 relative overflow-hidden cursor-pointer"
            >
              {/* Fondo animado */}
              <span className={`absolute inset-0 bg-gradient-to-r ${item.color} to-transparent opacity-0 group-hover/link:opacity-10 transition-opacity duration-300`}></span>
              
            {/* Icono Lucide */}
            <span className="relative z-10 group-hover/link:scale-125 group-hover/link:rotate-12 transition-all duration-300">
                <item.icon size={22} className="text-primary" />
            </span>
              
              {/* Nombre */}
              <span className="font-bold uppercase tracking-wide relative z-10">
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all duration-300"></span>
              </span>
              
              {/* Flecha */}
              <span className="ml-auto text-secondary opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-2 transition-all duration-300 text-xl relative z-10">→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;