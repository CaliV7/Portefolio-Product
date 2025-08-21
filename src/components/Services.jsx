import React from 'react';

const Services = () => {
  const individualServices = [
    {
      title: "Vidéo courte / Reel",
      description: "Format vertical moins de 60 secondes, incluant tournage et montage",
      price: "100 €"
    },
    {
      title: "Mini-documentaire",
      description: "Durée de 2 à 5 minutes, incluant tournage, montage et narration",
      price: "350 €"
    },
    {
      title: "Portrait vidéo",
      description: "Interview ou présentation d'artisan",
      price: "250 €"
    },
    {
      title: "Pack photo",
      description: "20 photos retouchées (produit, ambiance et portrait)",
      price: "200 €"
    },
    {
      title: "Vidéo lifestyle / UGC",
      description: "Durée 1 minute, style spontané / réel / client",
      price: "130 €"
    },
    {
      title: "Vidéo produit / collection",
      description: "Mise en avant d'un produit pour boutique ou une nouvelle collection",
      price: "180 €"
    }
  ];

  const monthlyPackages = [
    {
      title: "Basic",
      description: "4 reels + 10 photos",
      price: "500 €/mois"
    },
    {
      title: "Standard",
      description: "8 reels + 20 photos + 1 mini-documentaire",
      price: "900 €/mois"
    },
    {
      title: "Premium",
      description: "Contenu personnalisé + options + conseils stratégiques",
      price: "Sur devis"
    }
  ];

  return (
    <section id="services" className="py-8 xs:py-12 sm:py-16 bg-white px-2 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-8 sm:mb-12 font-title text-center lg:text-left after:content-[''] after:block after:w-1/2 after:h-[1px] after:bg-black after:mt-2 xs:after:mt-4 after:mx-auto lg:after:mx-0">
          Mes services & Tarifs
        </h2>

        {/* Services individuels */}
        <div className="mb-8 xs:mb-12 sm:mb-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 sm:mb-8 font-title text-blue-800 text-center lg:text-left">
            Services à la carte
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 xs:gap-4 sm:gap-6">
            {individualServices.map((service, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-lg p-3 xs:p-4 sm:p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-gray-300"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 xs:mb-3 sm:mb-4 gap-1 xs:gap-2 sm:gap-0">
                  <h4 className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold font-title text-gray-800 flex-1">
                    {service.title}
                  </h4>
                  <span className="text-base xs:text-lg sm:text-xl lg:text-2xl font-bold text-sky-600 font-title">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-600 font-text text-xs xs:text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Formules mensuelles */}
        <div>
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 xs:mb-6 sm:mb-8 font-title text-blue-800 text-center lg:text-left">
            Formules mensuelles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            {monthlyPackages.map((package_, index) => (
              <div 
                key={index}
                className={`bg-white rounded-lg p-4 xs:p-6 sm:p-8 border-2 transition-all duration-300 hover:shadow-xl grid grid-rows-[auto_1fr_auto] gap-2 xs:gap-4 relative ${
                  package_.title === "Premium" 
                    ? "border-sky-600 bg-gradient-to-br from-sky-100 to-white" 
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                {package_.title === "Premium" && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <span className="inline-block bg-sky-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      Recommandé
                    </span>
                  </div>
                )}
                <div className="text-center">
                  <h4 className="text-lg xs:text-xl sm:text-2xl font-bold font-title text-gray-800 mb-1 xs:mb-2 mb-4">
                    {package_.title}
                  </h4>
                  <div className="w-8 xs:w-12 sm:w-16 h-0.5 bg-blue-800 mx-auto mb-2 xs:mb-4"></div>
                </div>
                
                <div className="text-center flex flex-col justify-center">
                  <p className="text-gray-600 font-text text-xs xs:text-sm sm:text-base leading-relaxed mb-2 xs:mb-4 sm:mb-6">
                    {package_.description}
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="text-lg xs:text-xl sm:text-3xl font-bold text-sky-600 font-title">
                    {package_.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
