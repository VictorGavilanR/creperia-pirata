import React, { useState } from "react";
import { Instagram, MapPin, Phone, Facebook } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import MainButton from "./MainButton";
import SocialItem from "./SocialItem";

const SocialFloat = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/creperiadelpirata/?hl=es",
      // Estilo Rubí (Rojo profundo)
      color: "from-rose-900 via-red-800 to-red-950",
      hoverColor: "hover:from-red-700 hover:to-rose-800",
      iconColor: "text-rose-100",
    },
    {
      name: "TikTok",
      icon: SiTiktok,
      url: "https://www.tiktok.com/@creperiadelpirata",
      // Estilo Bandera Pirata (Negro y Rojo sutil)
      color: "from-gray-900 via-stone-900 to-black",
      hoverColor: "hover:from-gray-800 hover:to-stone-900",
      iconColor: "text-white",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com",
      // Estilo Hierro Forjado / Océano Profundo (En vez de azul chillón)
      color: "from-slate-800 via-slate-900 to-blue-950",
      hoverColor: "hover:from-slate-700 hover:to-blue-900",
      iconColor: "text-blue-100",
    },
    {
      name: "Ubicación",
      icon: MapPin,
      url: "https://www.google.com/maps/place/Crepería+Del+Pirata/",
      // Estilo Oro Viejo
      color: "from-amber-700 via-yellow-700 to-amber-900",
      hoverColor: "hover:from-amber-600 hover:to-yellow-600",
      iconColor: "text-amber-100",
    },
    {
      name: "WhatsApp",
      icon: Phone,
      url: "https://wa.me/1234567890",
      // Estilo Esmeralda (Verde joya)
      color: "from-emerald-800 via-green-900 to-emerald-950",
      hoverColor: "hover:from-emerald-700 hover:to-green-800",
      iconColor: "text-emerald-100",
    },
  ];

  return (
    // CAMBIO: right-1 en móvil, pero right-6 en desktop para respirar
    <div className="fixed right-1 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-2 md:gap-4">
      <MainButton
        toggle={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
      />

      <div
        className={`flex flex-col gap-2 md:gap-3 transition-all duration-500 origin-top items-center mr-1 ${
          isExpanded
            ? "opacity-100 scale-100 translate-x-0"
            : "opacity-0 scale-0 translate-x-8 pointer-events-none"
        }`}
      >
        {socialLinks.map((link, index) => (
          <SocialItem
            key={link.name}
            link={link}
            index={index}
            isExpanded={isExpanded}
          />
        ))}
      </div>

      {isExpanded && (
        // CAMBIO: Ajuste de la cuerda final para que coincida con los nuevos tamaños
        <div className="w-1 h-12 bg-linear-to-b from-amber-700/60 to-transparent rounded-full mt-[-8px] mr-[22px] md:mr-[28px] relative">
          <div className="absolute inset-0 opacity-60 rope-pattern"></div>
        </div>
      )}
    </div>
  );
};

export default SocialFloat;