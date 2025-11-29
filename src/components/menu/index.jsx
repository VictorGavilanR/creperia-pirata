import React, { useState } from 'react';
import MenuTabs from './MenuTabs';
import MenuCard from './MenuCard';
import { categories, menuItems } from '../../data/menu';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('cofres');

  const filteredItems = menuItems.filter(
    item => item.category === activeCategory
  );

  return (
    <section
      id="menu"
      className="
        relative py-24 overflow-hidden
        bg-gradient-to-b
        from-base-dark
        via-[#07121a]
        to-base-dark
      "
    >
      {/* ===== TEXTURA PIRATA SUAVE ===== */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              rgba(245,182,29,0.2),
              rgba(245,182,29,0.2) 1px,
              transparent 1px,
              transparent 6px
            )
          `
        }}
      />

      {/* ===== NIEBLA MARINA LENTA ===== */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(0,179,230,0.10), transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(245,182,29,0.08), transparent 45%)
          `,
          animation: 'mistMove 30s ease-in-out infinite alternate'
        }}
      />

      {/* ===== SEPARADORES SUPERIOR / INFERIOR ===== */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      {/* ===== CONTENIDO ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ENCABEZADO */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-black font-serif text-text-light mb-4">
            El <span className="text-secondary">Botín</span> del Día
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Elige tu recompensa. Desde tesoros dulces hasta festines dignos de un almirante.
          </p>
        </div>

        {/* TABS */}
        <div className="mb-14">
          <MenuTabs
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-down">
          {filteredItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* FALLBACK */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-text-muted italic">
            “Arrr… los cofres están vacíos por ahora.”
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
