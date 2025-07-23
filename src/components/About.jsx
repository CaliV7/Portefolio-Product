import React from "react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 font-title text-center lg:text-left after:content-[''] after:block after:w-1/2 after:h-[1px] after:bg-black after:mt-4">
          À propos de TuMac
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div className="flex flex-col lg:col-span-2 space-y-4 sm:space-y-6 order-2 lg:order-1">
                <p className="text-black text-sm sm:text-base md:text-lg font-text leading-relaxed">
                    <strong>Depuis deux ans, les réseaux sociaux m'ont offert une chance incroyable :</strong> celle de raconter des histoires.
                    <br /><br />
                    À travers la Polynésie Française, <strong>j'ai rencontré des artistes, des artisans et des lieux empreints d'âme et de passion.</strong> Des personnes qui, comme vous chez <strong>REFF, donnent vie à des créations uniques, chargées de sens et d'émotions.</strong>
                    <br /><br />
                    Mon rôle ? <strong>Vous mettre en lumière, avec authenticité.</strong> Parce que chaque <strong>REEF</strong> article incarne bien plus qu'un produit : ce sont des <strong>mains habiles,</strong> un engagement sincère, <strong>une histoire qui mérite d'être partagée.</strong> 
                    <br /><br />
                    Je ne me contente pas de photographier ou de filmer. Je capture des moments, des sourires, des fiertés.
                    <br /><br />
                    Pour révéler au monde non seulement <strong>vos créations,</strong> mais aussi <strong>votre identité.</strong>        
                </p>
                <p className="text-black text-sm sm:text-base md:text-lg font-text text-center italic">
                    <br />
                    Parce que votre art mérite d'être vu.
                    <br />
                    <strong>Et votre voix, d'être écoutée.</strong>
                </p>
            </div>
            <div className="flex justify-center lg:col-span-1 order-1 lg:order-2">
                <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-sm">
                    <img 
                        src="/about-pic-men.jpeg" 
                        alt="TuMac" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg" 
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
