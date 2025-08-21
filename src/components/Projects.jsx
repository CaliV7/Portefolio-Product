import React, { useState } from "react";
import projects from "../data/projects";
import { useRef } from "react";

const Projects = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const carouselRef = useRef(null);

  const handleCardClick = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Ajout navigation carrousel mobile
  const scrollToCard = (index) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index];
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  return (
    <section id="projects" className="py-8 xs:py-12 sm:py-16 px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-48 bg-gradient-to-tl from-teal-200 via-cyan-700 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-title font-bold mb-4 xs:mb-8 sm:mb-12 text-white text-center lg:text-left after:content-[''] after:block after:w-1/2 after:h-[1px] after:bg-white after:mt-2 xs:after:mt-4 after:mx-auto lg:after:mx-0">
          Projets & Créations
        </h2>
        {/* Carrousel mobile et tablette */}
        <div className="block lg:hidden w-full relative">
          <div ref={carouselRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-thin scrollbar-thumb-cyan-700/50 scrollbar-track-transparent">
            {projects.map((proj, index) => (
              <div key={index} className="group perspective-1000 w-64 min-w-[16rem] max-w-[90vw] h-96 snap-center flex-shrink-0 relative">
                <div 
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${flippedCards[index] ? 'rotate-y-180' : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  {/* Face avant */}
                  <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden backface-hidden group-hover:shadow-2xl transition-shadow duration-300">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-950 via-sky-800/50 to-transparent p-4 h-28 flex flex-col justify-end">
                      <h3 className="text-lg font-title font-bold mb-2 text-white leading-tight truncate">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-blue-100 font-text leading-relaxed line-clamp-3">
                        {proj.description}
                      </p>
                    </div>
                  </div>
                  {/* Face arrière */}
                  <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg backface-hidden rotate-y-180 p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-title font-bold mb-2 text-white text-center leading-tight truncate">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white font-text leading-relaxed text-center mb-4">
                      {proj.description}
                    </p>
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center">
                      <span className="text-white/50 text-xs font-semibold">Cliquez pour revenir</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Indicateurs de position */}
          <div className="flex justify-center gap-2 mt-2">
            {projects.map((_, idx) => (
              <button key={idx} onClick={() => scrollToCard(idx)} className="w-2 h-2 rounded-full bg-white/40 hover:bg-white/80 transition-all" />
            ))}
          </div>
        </div>
        {/* Grille desktop */}
        <div className="hidden lg:grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-8 mt-4 lg:mt-0">
          {projects.map((proj, index) => (
            <div key={index} className="group perspective-1000 w-full h-80 lg:h-96 xl:h-110">
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${flippedCards[index] ? 'rotate-y-180' : ''}`}
                onClick={() => handleCardClick(index)}
              >
                {/* Face avant */}
                <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden backface-hidden group-hover:shadow-2xl transition-shadow duration-300">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sky-950 via-sky-800/50 to-transparent p-4 lg:p-6 h-24 lg:h-32 flex flex-col justify-end">
                    <h3 className="text-lg lg:text-xl font-title font-bold mb-2 lg:mb-3 text-white leading-tight truncate">
                      {proj.title}
                    </h3>
                    <p className="text-sm lg:text-base text-blue-100 font-text leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                  {/* Indicateur de retournement */}
                  <div className="absolute bottom-2 lg:bottom-4 right-2 lg:right-4 bg-white/20 backdrop-blur-sm rounded-full p-1.5 lg:p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                    <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  {/* Overlay de survol pour encourager le clic */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-lg"></div>
                </div>
                {/* Face arrière */}
                <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg backface-hidden rotate-y-180 p-4 lg:p-6 flex flex-col justify-center">
                  <h3 className="text-lg lg:text-xl font-title font-bold mb-3 lg:mb-4 text-white text-center leading-tight truncate">
                    {proj.title}
                  </h3>
                  <p className="text-sm lg:text-base text-white font-text leading-relaxed text-center mb-4">
                    {proj.description}
                  </p>
                  <div className="absolute bottom-2 lg:bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <span className="text-white/50 text-xs font-semibold">Cliquez pour revenir</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;