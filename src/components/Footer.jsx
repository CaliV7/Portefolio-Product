import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-bl from-cyan-700 to-blue-900 text-white">
      {/* Contenu du footer */}
      <div className="py-4 xs:py-6 sm:py-8 lg:py-10 px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-24">
        <div className="container mx-auto">
          {/* Section principale */}
          <div className="grid grid-cols-1 lg:grid-cols-4 items-start min-h-[220px] xs:min-h-[260px] sm:min-h-[280px] lg:h-56 gap-4 xs:gap-6 sm:gap-8 lg:gap-6">
            {/* Image - Centrée sur mobile et tablette */}
            <div className="flex items-start justify-center h-full">
              <div className="aspect-[3/4] w-20 xs:w-24 sm:w-28 lg:w-32 xl:w-40 overflow-hidden rounded-lg shadow-lg">
                <img src="/about-pic-men.png" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Présentation + description - Centrée sur mobile et tablette */}
            <div className="flex flex-col justify-start xs:justify-center h-full text-center lg:text-left">
              <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold font-title text-white mb-2 xs:mb-3 sm:mb-2 lg:mb-1 lg:mb-2">Malcom lamin</h3>
              <p className="text-blue-100 font-text leading-relaxed text-xs xs:text-sm sm:text-sm lg:text-base px-2 sm:px-4 lg:px-0">
                Passionné par la création digitale, je conçois des solutions innovantes pour valoriser votre image et vos projets sur le web. Mon objectif : transformer vos idées en expériences uniques et impactantes.
              </p>
            </div>
            {/* Navigation - Centrée sur mobile et tablette */}
            <div className="flex flex-col justify-start items-center h-full">
              <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold font-title text-white mb-3 xs:mb-4 sm:mb-3 lg:mb-1 lg:mb-2">NAVIGATION</h4>
              <div className="space-y-3 xs:space-y-4 sm:space-y-3 lg:space-y-2 lg:space-y-4">
                <a href="#about" className="block text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 font-text text-xs xs:text-sm sm:text-sm lg:text-base group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">~</span>
                  À propos
                </a>
                <a href="#projects" className="block text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 font-text text-xs xs:text-sm sm:text-sm lg:text-base group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">~</span>
                  Projets
                </a>
                <a href="#services" className="block text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 font-text text-xs xs:text-sm sm:text-sm lg:text-base group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">~</span>
                  Services
                </a>
                <a href="#contact" className="block text-blue-200 hover:text-white hover:translate-x-2 transition-all duration-300 font-text text-xs xs:text-sm sm:text-sm lg:text-base group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">~</span>
                  Contact
                </a>
              </div>
            </div>
            {/* Contact + réseaux sociaux - Centré sur mobile et tablette */}
            <div className="flex flex-col justify-start items-center h-full">
              <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold font-title text-white mb-3 xs:mb-4 sm:mb-3 lg:mb-1 lg:mb-2">CONTACT</h4>
              <div className="space-y-2 xs:space-y-3 sm:space-y-2 lg:space-y-1 lg:space-y-2 mb-4 xs:mb-6 sm:mb-4 lg:mb-2 lg:mb-4">
                <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-2 lg:space-x-1 lg:space-x-2">
                  {/* Icône email moderne */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 xs:h-5 sm:h-4 lg:h-5 w-4 xs:w-5 sm:w-4 lg:w-5 text-blue-100 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-blue-100 font-text text-xs xs:text-sm sm:text-sm lg:text-base text-center lg:text-left">Laminmalcom12@gmail.com</p>
                </div>
                <div className="flex items-center justify-center space-x-2 xs:space-x-3 sm:space-x-2 lg:space-x-1 lg:space-x-2">
                  {/* Icône téléphone moderne stylisée */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 xs:h-5 sm:h-4 lg:h-5 w-4 xs:w-5 sm:w-4 lg:w-5 text-blue-100 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
                    />
                  </svg>
                  <p className="text-blue-100 font-text text-xs xs:text-sm sm:text-sm lg:text-base text-center lg:text-left">+33 6 XX XX XX XX</p>
                </div>
              </div>
              <h4 className="text-sm xs:text-base sm:text-lg lg:text-xl font-bold font-title text-white mb-3 xs:mb-4 sm:mb-3 lg:mb-1 lg:mb-2">RÉSEAUX SOCIAUX</h4>
              <div className="space-y-2 xs:space-y-3 sm:space-y-2 lg:space-y-1 lg:space-y-2 mb-2 xs:mb-3 sm:mb-2 lg:mb-1 lg:mb-2 flex flex-col items-center">
                <a href="https://instagram.com/malcomjager" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all duration-300 font-text text-xs xs:text-sm sm:text-sm lg:text-base">
                  Instagram
                </a>
                <a href="https://www.tiktok.com/@malcomjager" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-all duration-300 font-text text-xs xs:text-sm sm:text-sm lg:text-base">
                  TikTok
                </a>
              </div>
            </div>
          </div>
          {/* Séparateur */}
          <div className="w-full h-px bg-gradient-to-r from-indigo-900 via-sky-500 to-indigo-900 mb-3 xs:mb-4 sm:mb-3 lg:mb-2 lg:mb-4"></div>
          {/* Copyright et réseaux sociaux */}
          <div className="flex flex-col justify-center items-center py-3 xs:py-4 sm:py-3 lg:py-2 lg:py-4">
            <p className="text-blue-200 font-text text-[10px] xs:text-xs sm:text-xs lg:text-sm text-center">
              © 2025 Malcom Lamin – Tous droits réservés.
            </p>
            <p className="text-blue-200 font-text text-[10px] xs:text-xs sm:text-xs lg:text-sm italic text-center">
                Développé par Coconuuut 🥥
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
