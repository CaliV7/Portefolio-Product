import React from 'react';

const Hero = () => {
  return (
    <div className="relative w-full h-[70vh] sm:h-[70vh] lg:h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/hero-bg.jpeg')`,
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-12 text-center lg:items-start lg:text-left lg:justify-start">
          <div className="w-full max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0 lg:ml-12 xl:ml-16 lg:pt-32">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 xs:mb-4 sm:mb-6 font-title text-white leading-tight text-center lg:text-left">
              Malcom lamin
            </h1>
            <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light leading-tight font-text text-white/90 max-w-full xs:max-w-2xl text-center lg:text-left">
              Créateur de contenu digital<br className="hidden sm:block" /> pour ceux qui osent rêver grand
            </h2>
            <div className="mt-8 xs:mt-10 sm:mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start sm:gap-4">
              <a 
                href="#projects" 
                className="inline-block w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-3 sm:py-4 rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium font-text text-sm xs:text-sm sm:text-base transform hover:scale-105"
              >
                Découvrir mon travail
              </a>
              <a 
                href="#contact" 
                className="inline-block w-full sm:w-auto bg-white/20 backdrop-blur-sm text-white px-4 xs:px-6 sm:px-8 py-3 xs:py-3 sm:py-4 rounded-xl border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 font-medium font-text text-sm xs:text-sm sm:text-base transform hover:scale-105"
              >
                Contactez-moi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
