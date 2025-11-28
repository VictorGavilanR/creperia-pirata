import React from 'react';

const NavLink = ({ href, children, onClick, isMobile = false }) => {
  const baseStyles = `
    relative text-text-light/90 hover:text-secondary 
    transition-all duration-300 uppercase font-bold 
    tracking-widest cursor-pointer group
    font-serif
  `;
  
  const desktopStyles = `
    text-sm px-4 py-2 rounded-md 
    hover:bg-secondary/10 hover:shadow-md hover:shadow-secondary/20
    before:absolute before:bottom-0 before:left-0 before:w-0 
    before:h-0.5 before:bg-gradient-to-r before:from-secondary before:to-primary
    before:transition-all before:duration-300
    hover:before:w-full
    after:content-[''] after:absolute after:inset-0 
    after:border after:border-transparent 
    after:rounded-md after:transition-all after:duration-300
    hover:after:border-secondary/30
  `;
  
  const mobileStyles = `
    block w-full text-center px-4 py-4 text-lg 
    border-b border-secondary/20
    hover:bg-gradient-to-r hover:from-secondary/5 hover:via-secondary/10 hover:to-secondary/5
    hover:border-secondary/50
    active:scale-[0.98] active:bg-secondary/20
  `;

  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`${baseStyles} ${isMobile ? mobileStyles : desktopStyles}`}
    >
      {children}
      
      {/* Decoración pirata: Ancla pequeña en hover (solo desktop) */}
      {!isMobile && (
        <span className="absolute -right-1 -top-1 text-secondary text-xs opacity-0 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300">
          ⚓
        </span>
      )}
      
      {/* Decoración móvil: Indicador de flecha */}
      {isMobile && (
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary/50 group-hover:text-secondary group-hover:translate-x-1 transition-all duration-300">
          ›
        </span>
      )}
    </a>
  );
};

export default NavLink;