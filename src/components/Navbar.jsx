import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-l from-cyan-700 via-blue-900 to-blue-950 font-title text-white shadow-md fixed top-0 w-full h-16 z-50">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center h-full">
        <h1 className="text-lg xs:text-xl sm:text-2xl font-bold truncate max-w-[60vw] xs:max-w-[70vw]">Malcolm Jager</h1>
        
        {/* Menu hamburger pour mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col space-y-1 p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none "
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Menu desktop */}
        <div className="hidden lg:flex items-center text-base sm:text-lg xl:text-xl font-bold space-x-2 sm:space-x-4 xl:space-x-6">
          <a href="#about" className="hover:underline transition-all duration-300 hover:text-cyan-200">À propos</a>
          <a href="#projects" className="hover:underline transition-all duration-300 hover:text-cyan-200">Projets</a>
          <a href="#services" className="hover:underline transition-all duration-300 hover:text-cyan-200">Services</a>
          <a href="#contact" className="hover:underline transition-all duration-300 hover:text-cyan-200">Contact</a>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`lg:hidden absolute top-16 left-0 w-full bg-gradient-to-b from-blue-950 via-sky-700 to-white/10 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}> 
        <div className="flex flex-col items-center justify-center space-y-1 xs:space-y-2 p-2 xs:p-4 w-full">
          <a 
            href="#about" 
            className="text-base xs:text-lg font-bold border-b border-white/20 py-2 xs:py-3 px-2 xs:px-4 text-white hover:translate-x-2 transition-all duration-300 text-center w-full tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </a>
          <a 
            href="#projects" 
            className="text-base xs:text-lg font-bold border-b border-white/20 py-2 xs:py-3 px-2 xs:px-4 text-white hover:translate-x-2 transition-all duration-300 text-center w-full tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </a>
          <a 
            href="#services" 
            className="text-base xs:text-lg font-bold border-b border-white/20 py-2 xs:py-3 px-2 xs:px-4 text-white hover:translate-x-2 transition-all duration-300 text-center w-full tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#contact" 
            className="text-base xs:text-lg font-bold py-2 xs:py-3 px-2 xs:px-4 text-white hover:translate-x-2 transition-all duration-300 text-center w-full tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
