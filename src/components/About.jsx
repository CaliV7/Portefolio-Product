import React from "react";

const About = () => {
  return (
    <section id="about" className="py-8 xs:py-12 sm:py-16 bg-white px-2 xs:px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 xs:mb-4 sm:mb-8 font-title text-left lg:text-center after:content-[''] after:block after:w-1/2 after:h-[1.5px] after:bg-black after:mt-2 xs:after:mt-3 mx-auto lg:mx-0">
          À propos de TuMac
        </h2>
        <div className="flex flex-col items-center gap-4 xs:gap-6 sm:gap-8 lg:grid lg:grid-cols-3 lg:items-center lg:gap-12">
            <div className="flex flex-col space-y-2 xs:space-y-4 sm:space-y-6 order-2 lg:order-1 lg:col-span-2 text-center lg:text-left">
                <p className="text-black text-xs xs:text-sm sm:text-base md:text-lg font-text leading-relaxed">
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
                <p className="text-black text-xs xs:text-sm sm:text-base md:text-lg font-text text-center italic">
                    <br />
                    Parce que votre art mérite d'être vu.
                    <br />
                    <strong>Et votre voix, d'être écoutée.</strong>
                </p>
            </div>
            <div className="flex justify-center order-1 lg:order-2 lg:col-span-1 w-full">
                <div className="relative w-32 xs:w-40 sm:w-48 md:w-56 lg:w-full max-w-[180px] xs:max-w-xs sm:max-w-sm lg:max-w-sm mx-auto">
                    <img 
                        src="/about-pic-men.jpeg" 
                        alt="TuMac" 
                        className="w-full h-auto object-cover rounded-lg shadow-lg mx-auto" 
                    />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
