import React from 'react';

// Subcomponentes
import FooterBrand from './FooterBrand';
import FooterMenu from './FooterMenu';
import FooterSocial from './FooterSocial';
import FooterBottom from './FooterBottom';

// Íconos Lucide
import { Shell, Star, Shrimp, Coins, Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">

      {/* ========================================
          OLAS ÉPICAS ANIMADAS - 4 CAPAS (BOB)
      ======================================== */}
      <div className="absolute top-0 left-0 right-0 h-48 overflow-visible z-30">

        {/* Ola de fondo */}
        <svg
          className="absolute w-full h-full left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ animation: "waveBob 14s ease-in-out infinite" }}
        >
          <path
            fill="var(--color-primary-dark)"
            fillOpacity="0.4"
            d="M0,160L48,138.7C96,117,192,75,288,80C384,85,480,139,576,144C672,149,768,107,864,101.3C960,96,1056,128,1152,154.7C1248,181,1344,203,1392,213.3L1440,224L1440,0H0Z"
          />
        </svg>

        {/* Ola media-profunda */}
        <svg
          className="absolute w-full h-full left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{
            animation: "waveBob 11s ease-in-out infinite",
            animationDelay: "-2s",
          }}
        >
          <path
            fill="var(--color-primary)"
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,165C384,171,480,149,576,128C672,107,768,85,864,91C960,96,1056,128,1152,133C1248,139,1344,117,1392,107L1440,96V0H0Z"
          />
        </svg>

        {/* Ola superficial media */}
        <svg
          className="absolute w-full h-full left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{
            animation: "waveBob 9s ease-in-out infinite",
            animationDelay: "-1s",
          }}
        >
          <path
            fill="var(--color-primary)"
            fillOpacity="0.7"
            d="M0,192L48,197C96,203,192,213,288,192C384,171,480,117,576,91C672,64,768,64,864,80C960,96,1056,128,1152,133C1248,139,1344,117,1392,107L1440,96V0H0Z"
          />
        </svg>

        {/* Ola brillante superficial */}
        <svg
          className="absolute w-full h-full left-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{
            animation: "waveBob 7s ease-in-out infinite",
            animationDelay: "-0.5s",
          }}
        >
          <path
            fill="#FFFFFF"
            fillOpacity="0.3"
            d="M0,224L48,213C96,203,192,181,288,181C384,181,480,203,576,213C672,224,768,224,864,208C960,192,1056,160,1152,139C1248,117,1344,107,1392,101L1440,96V0H0Z"
          />
        </svg>

        {/* Partículas flotantes */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-float"
            style={{
              width: `${Math.random() * 8 + 3}px`,
              height: `${Math.random() * 8 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          />
        ))}

      </div>

      {/* ========================================
          ARENA REALISTA
      ======================================== */}
      <div className="relative bg-gradient-to-b from-base-light via-[#F5D89F] to-[#ECC97F] pt-40 pb-16">

        {/* Textura 1 */}
        <div 
          className="absolute inset-0 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 30%, rgba(139,69,19,0.15) 1px, transparent 1px),
              radial-gradient(circle at 75% 70%, rgba(160,82,45,0.12) 1px, transparent 1px),
              radial-gradient(circle at 45% 55%, rgba(139,69,19,0.10) 1px, transparent 1px),
              radial-gradient(circle at 85% 25%, rgba(160,82,45,0.13) 1px, transparent 1px)
            `,
            backgroundSize: "15px 15px, 20px 20px, 12px 12px, 18px 18px",
          }}
        />

        {/* Textura 2 */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, rgba(139,69,19,0.05) 0px, rgba(139,69,19,0.05) 3px, transparent 3px, transparent 12px),
              repeating-linear-gradient(-45deg, rgba(160,82,45,0.03) 0px, rgba(160,82,45,0.03) 2px, transparent 2px, transparent 10px)
            `,
          }}
        />

        {/* Sombras suaves */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(ellipse at 20% 40%, rgba(0,0,0,0.1) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 60%, rgba(0,0,0,0.08) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(0,0,0,0.12) 0%, transparent 50%)
            `,
          }}
        />

        {/* ICONOS ENTERRADOS EN LA ARENA */}
        {[
          { Icon: Shell, pos: "top-20 left-[10%]", size: "w-10 h-10", delay: "0s" },
          { Icon: Star, pos: "top-32 right-[15%]", size: "w-8 h-8", delay: "1s" },
          { Icon: Shrimp, pos: "top-48 left-[30%]", size: "w-7 h-7", delay: "2s" },
          { Icon: Shell, pos: "top-28 right-[40%]", size: "w-8 h-8", delay: "1.5s" },
          { Icon: Star, pos: "bottom-40 left-[60%]", size: "w-7 h-7", delay: "3s" },
          { Icon: Coins, pos: "bottom-32 right-[25%]", size: "w-10 h-10", delay: "2.5s" },
        ].map(({ Icon, pos, size, delay }, i) => (
          <div
            key={i}
            className={`absolute ${pos} opacity-30 animate-wiggle`}
            style={{ animationDelay: delay }}
          >
            <div className="relative">
              {/* Arena encima del icono */}
              <div className="absolute -bottom-1 left-0 right-0 h-3 bg-gradient-to-t from-[#E3BD78] via-[#E3BD78]/60 to-transparent opacity-80" />
              <Icon className={`${size} text-[#C18A4A]`} />
            </div>
          </div>
        ))}

        {/* ===============================
            CONTENIDO DEL FOOTER
        =============================== */}
        <div className="relative max-w-7xl mx-auto px-6 z-20">

          {/* FRASE DESTACADA */}
          <div className="mb-8 text-center">
            <span className="text-xs md:text-sm font-semibold tracking-[0.25em] text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] uppercase">
              ¡Ven a tu aventura pirata hoy!
            </span>
          </div>

          {/* GRID RESPONSIVE:
              - Mobile: 2 columnas
                - Fila 1: BRAND (2 columnas)
                - Fila 2: MENÚ | NOSOTROS
                - Fila 3: SÍGUENOS (2 columnas)
              - Desktop: 4 columnas iguales
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            
            {/* BRAND: en móvil ocupa las 2 columnas, en desktop solo 1 */}
            <div className="col-span-2 md:col-span-1">
              <FooterBrand />
            </div>

            {/* MENÚ: 1 columna en móvil y desktop */}
            <div className="col-span-1">
              <FooterMenu />
            </div>

            {/* NOSOTROS: 1 columna en móvil (derecha) y desktop */}
            <div className="space-y-5 col-span-1">
              <h3 className="text-lg font-black uppercase tracking-widest text-primary relative inline-block pb-3 font-serif">
                NOSOTROS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"></span>
              </h3>

              <ul className="space-y-3">
                {["Sobre Nosotros", "Contáctanos", "Galería"].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="group/link text-sm text-text-main/80 hover:text-primary inline-flex items-center gap-2 font-medium"
                    >
                      <span className="opacity-0 group-hover/link:opacity-100 text-secondary text-lg transition-all">›</span>
                      <span className="relative uppercase tracking-wide">
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary group-hover/link:w-full transition-all"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SÍGUENOS: en móvil ocupa 2 columnas, en desktop 1 */}
            <div className="col-span-2 md:col-span-1">
              <FooterSocial />
            </div>
          </div>

          {/* SEPARADOR CON ANCLA */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-dashed border-primary/40"></div>
            </div>

            <div className="relative flex justify-center">
              <div className="bg-base-light px-8">
                <div className="relative group/anchor">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>

                  <Anchor 
                    className="relative w-12 h-12 cursor-pointer text-primary hover:scale-125 hover:rotate-12 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER BOTTOM */}
          <FooterBottom />

        </div>
      </div>
    </footer>
  );
};

export default Footer;
