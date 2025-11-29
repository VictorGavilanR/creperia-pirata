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

  // Bloquear scroll del body al abrir menú
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-base-dark/98 backdrop-blur-md border-b-2 border-secondary/40 shadow-2xl shadow-secondary/10 texture-wood' 
          : 'bg-linear-to-b from-base-dark/90 to-transparent'
      }`}
    >
      {/* Línea decorativa superior */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-secondary to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CORRECCIÓN DE ALTURA:
            Definimos alturas explícitas para el contenedor flex.
            h-20 (80px) en Móvil
            md:h-24 (96px) en Escritorio
            Eliminamos los paddings verticales (py) para que la matemática sea exacta.
        */}
        <div className="flex items-center justify-between h-20 md:h-24">
          
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
            <button className="ml-4 group relative bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-lg font-bold uppercase tracking-wider border border-primary-dark shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/50 flex items-center gap-2 overflow-hidden cursor-pointer">
              <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <Anchor size={18} className="relative z-10 group-hover:rotate-12 transition-transform" /> 
              <span className="relative z-10">Reservar</span>
            </button>
          </div>

          {/* 3. BOTÓN HAMBURGUESA (Móvil) */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="relative p-2 text-secondary hover:text-white transition-colors group cursor-pointer"
              aria-label="Menú principal"
            >
              <div className="absolute inset-0 bg-secondary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {isMenuOpen ? (
                <X size={32} className="relative z-10 rotate-0 group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={32} className="relative z-10" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MENÚ MÓVIL DESPLEGABLE */}
      {isMenuOpen && (
        <>
          {/* Overlay oscuro para cerrar al hacer clic fuera */}
          <div 
            className="md:hidden fixed inset-0 bg-base-dark/80 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* CONTENEDOR DEL MENÚ:
              top-20: Empieza EXACTAMENTE a los 80px (h-20) donde termina el navbar móvil.
              h-[calc(100svh-5rem)]: Altura total menos los 5rem (80px) del navbar.
          */}
          <div className="
            md:hidden 
            fixed 
            left-0 
            right-0 
            top-20 
            h-[calc(100svh-5rem)] 
            bg-linear-to-b from-base-dark via-base-dark to-base-dark/95 
            border-b-2 border-secondary/40 
            shadow-2xl 
            z-50 
            animate-fade-in-down 
            overflow-y-auto 
            texture-wood
          ">
            {/* Decoración superior */}
            <div className="h-1 bg-linear-to-r from-secondary via-primary to-secondary"></div>
            
            <div className="px-4 pt-6 pb-8 space-y-4">
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
              
              <div className="h-px w-full bg-white/10 my-4"></div>

              {/* Botones Móviles */}
              <div className="flex flex-col gap-4">
                <button 
                  className="w-full group relative bg-primary hover:bg-primary-dark text-white py-4 font-bold uppercase tracking-wider rounded-lg shadow-lg border border-primary-dark active:scale-95 transition-all duration-300 overflow-hidden cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Anchor size={20} className="group-hover:rotate-12 transition-transform" />
                    Reservar Mesa
                  </span>
                </button>
                
                <button 
                  className="w-full bg-transparent border border-secondary/50 text-secondary hover:bg-secondary/10 py-3 font-bold uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MapPin size={18} />
                  Nuestra Ubicación
                </button>
              </div>
            </div>
            
            {/* Decoración inferior */}
            <div className="h-1 bg-linear-to-r from-secondary via-primary to-secondary mt-auto"></div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;