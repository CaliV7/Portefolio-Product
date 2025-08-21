import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Créer le lien mailto avec les données du formulaire
    const subject = `Message de ${formData.name}`;
    const body = `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoLink = `mailto:Laminmalcom12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Ouvrir le client email par défaut
    window.open(mailtoLink);
    
    // Réinitialiser le formulaire
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="relative py-8 xs:py-12 sm:py-16 overflow-hidden">
      {/* Background gradient avec effets de vagues colorées */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-cyan-700 to-teal-200">
        {/* Vague 1 - vague principale du haut */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 Q1200,120 1200,120 Q0,120 0,120 Z" 
              fill="rgb(103 232 249)" 
              opacity="0.2"
            />
          </svg>
        </div>
        
        {/* Vague 2 - vague intermédiaire */}
        <div className="absolute top-16 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q150,100 300,60 T600,60 T900,60 T1200,60 Q1200,120 1200,120 Q0,120 0,120 Z" 
              fill="rgb(45 212 191)" 
              opacity="0.25"
            />
          </svg>
        </div>
        
        {/* Vague 3 - vague centrale avec ondulations plus marquées */}
        <div className="absolute top-28 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q150,10 300,60 Q450,110 600,60 Q750,10 900,60 Q1050,110 1200,60 Q1200,120 1200,120 Q0,120 0,120 Z" 
              fill="rgb(56 189 248)" 
              opacity="0.3"
            />
          </svg>
        </div>
        
        {/* Vague 4 - vague inférieure avec ondulations plus marquées */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q150,90 300,60 Q450,30 600,60 Q750,90 900,60 Q1050,30 1200,60 Q1200,120 1200,120 Q0,120 0,120 Z" 
              fill="rgb(59 130 246)" 
              opacity="0.35"
            />
          </svg>
        </div>
        
        {/* Vague 5 - vague de fond avec ondulations plus marquées */}
        <div className="absolute bottom-0 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q150,5 300,60 Q450,115 600,60 Q750,5 900,60 Q1050,115 1200,60 Q1200,120 1200,120 Q0,120 0,120 Z" 
              fill="rgb(6 182 212)" 
              opacity="0.2"
            />
          </svg>
        </div>
        
        {/* Vague 6 - vague d'accent avec ondulations plus marquées */}
        <div className="absolute top-36 left-0 w-full h-full">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M0,60 Q150,15 300,60 Q450,105 600,60 Q750,15 900,60 Q1050,105 1200,60 Q1200,120 1200,120 Q0,120 0,120 Z" 
              fill="rgb(147 197 253)" 
              opacity="0.25"
            />
          </svg>
        </div>
      </div>
      
      {/* Contenu */}
      <div className="relative z-10 mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-48">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 xs:mb-8 sm:mb-12 font-title text-center text-white after:content-[''] after:block after:w-1/2 after:h-[1px] after:bg-white after:mt-2 xs:after:mt-4 after:mx-auto">
          Contact
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-4 xs:gap-8 sm:gap-12">
          {/* Photo - prend toute la hauteur à gauche */}
          <div className="lg:w-2/5 lg:sticky lg:top-0 order-2 lg:order-1 hidden lg:block">
            <div className="relative h-40 xs:h-60 sm:h-full min-h-[180px] xs:min-h-[300px] sm:min-h-[400px] lg:min-h-0">
              <img
                src="/about-pic-men.png"
                alt="Malcom Jager"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
          
          {/* Formulaire et infos de contact à droite */}
          <div className="lg:w-3/5 space-y-4 xs:space-y-6 sm:space-y-8 order-1 lg:order-2">
            {/* Formulaire de contact */}
            <div className="bg-white/10 backdrop-blur-sm p-3 xs:p-6 sm:p-8 rounded-lg shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-bold mb-2 xs:mb-4 sm:mb-6 font-title text-white">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-2 xs:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs xs:text-sm font-medium text-white/90 mb-1 xs:mb-2 font-text">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent font-text transition-all duration-300 text-white placeholder-white/60 text-xs xs:text-sm sm:text-base"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-white/90 mb-1 xs:mb-2 font-text">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent font-text transition-all duration-300 text-white placeholder-white/60 text-xs xs:text-sm sm:text-base"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs xs:text-sm font-medium text-white/90 mb-1 xs:mb-2 font-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent resize-none font-text transition-all duration-300 text-white placeholder-white/60 text-xs xs:text-sm sm:text-base"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-white text-blue-900 font-title uppercase px-4 xs:px-6 sm:px-8 py-1.5 xs:py-2 sm:py-3 rounded-lg hover:bg-white/90 transition-all duration-300 font-bold text-lg xs:text-xl sm:text-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Envoyer 
                </button>
              </form>
            </div>
            
            {/* Informations de contact */}
            <div className="bg-white/10 backdrop-blur-sm p-3 xs:p-6 sm:p-8 rounded-lg shadow-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-base xs:text-lg sm:text-xl font-bold mb-2 xs:mb-4 sm:mb-6 font-title text-white">
                Informations de contact
              </h3>
              
              <div className="space-y-2 xs:space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 p-2 xs:p-3 sm:p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-base xs:text-lg sm:text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-xs xs:text-sm text-blue-900 font-text">Email</p>
                    <p className="text-white font-medium font-text text-xs xs:text-sm sm:text-base">Laminmalcom12@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 p-2 xs:p-3 sm:p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all duration-300">
                  <div className="w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 bg-white/20 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-base xs:text-lg sm:text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-xs xs:text-sm text-blue-900 font-text">Téléphone</p>
                    <p className="text-white font-medium font-text text-xs xs:text-sm sm:text-base">+33 6 XX XX XX XX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
