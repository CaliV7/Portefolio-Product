import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-cyan-700 to-blue-900 text-white">
      {/* Contenu du footer */}
      <div className="py-8 sm:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="container mx-auto">
          {/* Section principale */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Logo et description */}
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold font-title text-white mb-3 sm:mb-4">Malcom Jager</h3>
              <p className="text-blue-100 font-text leading-relaxed text-sm sm:text-base">
                Créateur de solutions digitales innovantes pour ceux qui osent rêver grand.
              </p>
            </div>
            
            {/* Liens rapides */}
            <div className="text-center">
              <h4 className="text-base sm:text-lg font-bold font-title text-white mb-3 sm:mb-4">Navigation</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#about" className="block text-blue-200 hover:text-white transition-colors duration-300 font-text text-sm sm:text-base">
                  À propos
                </a>
                <a href="#projects" className="block text-blue-200 hover:text-white transition-colors duration-300 font-text text-sm sm:text-base">
                  Projets
                </a>
                <a href="#services" className="block text-blue-200 hover:text-white transition-colors duration-300 font-text text-sm sm:text-base">
                  Services
                </a>
                <a href="#contact" className="block text-blue-200 hover:text-white transition-colors duration-300 font-text text-sm sm:text-base">
                  Contact
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div className="text-center md:text-right">
              <h4 className="text-base sm:text-lg font-bold font-title text-white mb-3 sm:mb-4">Contact</h4>
              <div className="space-y-1 sm:space-y-2">
                <p className="text-blue-100 font-text text-sm sm:text-base">📧 Laminmalcolm12@gmail.com</p>
                <p className="text-blue-100 font-text text-sm sm:text-base">📱 +33 6 XX XX XX XX</p>
              </div>
            </div>
          </div>
          
          {/* Séparateur */}
          <div className="w-full h-px bg-gradient-to-r from-indigo-900 via-sky-500 to-indigo-900 mb-6 sm:mb-8"></div>
          
          {/* Copyright et réseaux sociaux */}
          <div className="flex flex-col justify-center items-center">
            <p className="text-blue-200 font-text text-xs sm:text-sm">
              © 2025 Malcom Jager – Tous droits réservés.
            </p>
            <p className="text-blue-200 font-text text-xs italic">
                Développé par Coconuuut 🤍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
