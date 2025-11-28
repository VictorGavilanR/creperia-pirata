import React, { useState, useEffect } from 'react';
import { Menu, X, Anchor, MapPin } from 'lucide-react';
import NavLogo from './NavLogo';
import NavLink from './NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'El Botín', href: '#menu' },
    { name: 'Tripulación', href: '#tripulacion' },
    { name: 'Mapa', href: '#mapa' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-base-dark/98 backdrop-blur-md border-b-2 border-secondary/40 py-2 shadow-2xl shadow-secondary/10 texture-wood' 
          : 'bg-linear-to-b from-base-dark/90 to-transparent py-3 md:py-4'
      }`}
    >
      {/* Línea decorativa superior */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-secondary to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* 1. LOGO */}
          <div className="shrink-0">
            <NavLogo />
          </div>
          
          {/* 2. MENÚ ESCRITORIO */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href}>
                {link.name}
              </NavLink>
            ))}
            
            {/* Botón CTA Principal */}
            <button className="ml-4 group relative bg-linear-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-6 py-2.5 rounded-lg font-bold uppercase tracking-wider border-2 border-primary-dark shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/40 flex items-center gap-2 overflow-hidden cursor-pointer">
              {/* Efecto de brillo animado */}
              <span className="absolute inset-0 animate-shimmer bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <Anchor size={18} className="relative z-10 group-hover:rotate-12 transition-transform" /> 
              <span className="relative z-10">Reservar</span>
            </button>
          </div>

          {/* 3. BOTÓN HAMBURGUESA */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="relative p-2 text-secondary hover:text-white transition-colors group cursor-pointer"
              aria-label="Menú principal"
            >
              {/* Círculo de fondo */}
              <div className="absolute inset-0 bg-secondary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              
              {isMenuOpen ? (
                <X size={28} className="relative z-10 rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={28} className="relative z-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MENÚ MÓVIL DESPLEGABLE */}
      {isMenuOpen && (
        <>
          {/* Overlay oscuro */}
          <div 
            className="md:hidden fixed inset-0 bg-base-dark/80 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Menú */}
          <div className="md:hidden fixed left-0 right-0 top-[72px] bg-linear-to-b from-base-dark via-base-dark to-base-dark/95 border-b-2 border-secondary/40 shadow-2xl z-50 animate-fade-in-down max-h-[calc(100vh-72px)] overflow-y-auto texture-wood">
            {/* Decoración superior */}
            <div className="h-1 bg-linear-to-r from-secondary via-primary to-secondary"></div>
            
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <div 
                  key={link.name}
                  className="animate-fade-in-down"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <NavLink 
                    href={link.href} 
                    isMobile={true}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </div>
              ))}
              
              {/* Botón móvil con estilo pirata */}
              <div className="pt-4 px-2">
                <button 
                  className="w-full group relative bg-linear-to-r from-primary to-primary-dark text-white py-4 font-bold uppercase tracking-wider rounded-lg shadow-lg border-2 border-primary-dark active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* Efecto de brillo */}
                  <span className="absolute inset-0 animate-shimmer bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                  
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Anchor size={20} className="group-hover:rotate-12 transition-transform" />
                    Reservar Mesa
                  </span>
                </button>
                
                {/* Botón secundario: Ubicación */}
                <button 
                  className="w-full mt-3 bg-transparent border-2 border-secondary/50 text-secondary hover:bg-secondary/10 py-3 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin size={18} />
                  Nuestra Ubicación
                </button>
              </div>
            </div>
            
            {/* Decoración inferior */}
            <div className="h-1 bg-linear-to-r from-secondary via-primary to-secondary"></div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;