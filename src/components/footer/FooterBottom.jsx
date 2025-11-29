import React from 'react';
import { Skull, Sparkles } from "lucide-react";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm w-full">

      {/* COPYRIGHT LEFT */}
      <div className="flex items-center gap-4">
        <span className="transition-all duration-300">
          <Skull
            size={22}
            className="text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
          />
        </span>

        <p className="text-[#6c5430] text-xs sm:text-sm">
          © {currentYear}{" "}
          <span className="font-black text-primary">
            Crepería Pirata
          </span>
          . Todos los derechos reservados.
        </p>
      </div>

      {/* MENSAJE FINAL RIGHT */}
      <p className="hidden lg:flex items-center gap-2 text-xs text-[#98703a] italic">
        <Sparkles
          size={15}
          className="text-primary drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
        />
        <span>"Hecho con amor y un barril de ron"</span>
      </p>

    </div>
  );
};

export default FooterBottom;
