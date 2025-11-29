import React, { useState } from 'react';
import MenuTabs from './MenuTabs';
import MenuCard from './MenuCard';
import { categories, menuItems } from '../../data/menu'; // Importamos los datos

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('cofres');

  // Filtramos los items según la categoría seleccionada
  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-20 bg-base-dark">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute inset-0 opacity-5 pointer-events-none rope-pattern mix-blend-overlay"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Encabezado de la sección */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black font-serif text-text-light mb-4">
            El <span className="text-secondary text-shadow">Botín</span> del Día
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            Elige tu recompensa. Desde tesoros dulces hasta festines dignos de un almirante.
          </p>
        </div>

        {/* Pestañas de Filtro */}
        <div className="mb-12">
          <MenuTabs 
            categories={categories} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
          />
        </div>

        {/* Grid de Platos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-down">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mensaje si no hay items (por seguridad) */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-text-muted italic">
            "Arrr! Los piratas se han llevado todo de esta categoría..."
          </div>
        )}

      </div>
    </section>
  );
};

export default Menu;