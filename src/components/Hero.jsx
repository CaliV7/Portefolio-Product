import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[50vh] sm:h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Jellyfish.jpeg')`,
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-start items-center px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 text-center lg:items-start lg:text-left">
          <div className="w-full max-w-xs xs:max-w-sm sm:max-w-3xl mx-auto lg:mx-0 lg:ml-12 xl:ml-16 pt-24 xs:pt-28 sm:pt-24 md:pt-28 lg:pt-32">
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 font-title text-white leading-tight text-center lg:text-left">
              Malcolm Jager
            </h1>
            <h2 className="text-lg xs:text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight font-text text-white/90 max-w-full xs:max-w-2xl text-center lg:text-left">
              Créateur de contenu digital<br className="hidden sm:block" /> pour ceux qui osent rêver grand
            </h2>
            <div className="mt-8 xs:mt-10 sm:mt-12 flex justify-center lg:justify-start">
              <a 
                href="#about" 
                className="inline-block w-full xs:w-auto bg-white/20 backdrop-blur-sm text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-3 sm:py-4 rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium font-text text-sm xs:text-sm sm:text-base transform hover:scale-105"
              >
                Découvrir mon travail
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
