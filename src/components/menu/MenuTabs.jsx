import React from 'react';

const MenuTabs = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex justify-start md:justify-center overflow-x-auto pb-4 gap-2 md:gap-4 no-scrollbar px-4">
      {categories.map((cat) => {
        const Icon = cat.icon;
        const isActive = activeCategory === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all duration-300 border-2
              ${isActive 
                ? 'bg-secondary text-base-dark border-secondary shadow-[0_0_15px_rgba(245,182,29,0.4)] scale-105' 
                : 'bg-base-dark/50 text-text-muted border-white/10 hover:border-secondary/50 hover:text-secondary'
              }
            `}
          >
            <Icon size={18} className={isActive ? 'animate-bounce' : ''} />
            {cat.label}
          </button>
        );
      })}
    </div>
  );
};

export default MenuTabs;