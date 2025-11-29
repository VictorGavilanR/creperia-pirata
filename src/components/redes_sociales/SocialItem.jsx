import React from 'react';

const SocialItem = ({ link, index, isExpanded }) => {
  const Icon = link.icon;

  return (
    <div
      className="relative group flex flex-col items-center"
      style={{
        transitionDelay: isExpanded ? `${index * 50}ms` : '0ms'
      }}
    >
      {/* Cuerda conectora */}
      <div className="absolute -top-4 w-0.5 h-4 bg-amber-800/40"></div>

      {/* Botón Individual */}
      {/* MÓVIL: w-10 (40px) | DESKTOP: w-14 (56px) */}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative flex items-center justify-center
          w-10 h-10 md:w-14 md:h-14 rounded-full
          bg-linear-to-br ${link.color}
          shadow-md border border-white/10
          transform transition-all duration-300
          hover:scale-110 hover:-translate-x-1
          ${link.hoverColor}
        `}
        aria-label={link.name}
      >
        {/* Icono */}
        {/* MÓVIL: size-4 | DESKTOP: size-6 */}
        <Icon className={`w-4 h-4 md:w-6 md:h-6 relative z-10 ${link.iconColor || 'text-white'}`} />
        
        <div className="absolute inset-0 rounded-full bg-linear-to-tr from-white/30 to-transparent pointer-events-none"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-2 md:mr-3 px-2 md:px-3 py-1 bg-base-dark/95 text-secondary text-xs md:text-sm font-bold rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-secondary/30 shadow-xl backdrop-blur-sm">
          {link.name}
        </div>
      </a>
    </div>
  );
};

export default SocialItem;