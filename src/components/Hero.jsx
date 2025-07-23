import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
        <div className="absolute inset-0 flex flex-col justify-start items-start px-4 sm:px-6 md:px-8 lg:px-12 text-left">
          <div className="max-w-4xl mx-auto lg:mx-0 lg:ml-12 xl:ml-16 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 font-title text-white leading-tight">
              Malcom Jager
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight font-text text-white/90 max-w-2xl">
              Créateur de contenu digital<br className="hidden sm:block" /> pour ceux qui osent rêver grand
            </h2>
            
            {/* Call to action button */}
            <div className="mt-8 sm:mt-12">
              <a 
                href="#about" 
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium font-text text-sm sm:text-base transform hover:scale-105"
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
