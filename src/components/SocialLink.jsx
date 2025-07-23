import React from "react";

const SocialLink = () => {
  return (
    <section className="py-12 sm:py-16 bg-white px-4 sm:px-6 md:px-8 lg:px-16 xl:px-48">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-title text-black mb-3 sm:mb-4 after:content-[''] after:block after:w-1/2 after:h-[1px] after:bg-black after:mt-4 after:mx-auto">
            Réseaux sociaux
          </h2>
          <p className="text-gray-600 text-sm sm:text-base font-text">
            Suivez-moi pour découvrir mes derniers projets et créations
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {/* Instagram */}
          <div className="text-center group">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-500 via-purple-700 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor" fillRule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clipRule="evenodd"/>
                </svg>
              </div>
              <p className="text-black text-xs sm:text-sm mb-1 font-text">@Malcomjager</p>
              <p className="text-indigo-700 font-semibold text-xs font-text">MALCOMJAGER</p>
              <div className="mt-3 sm:mt-4">
                <a 
                  href="https://www.instagram.com/malcomjager/" 
                  target="_blank"
                  className="inline-block border border-transparent bg-blue-800 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-white hover:text-blue-800 hover:border-blue-800 transition-colors duration-300 text-xs sm:text-sm font-text"
                >
                  Suivre
                </a>
              </div>
            </div>
          </div>
          
          {/* TikTok */}
          <div className="text-center group">
            <div className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 sm:w-12 sm:h-12 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 16.5c0 1.3807-1.1193 2.5-2.5 2.5C8.11929 19 7 17.8807 7 16.5S8.11929 14 9.5 14c1.3807 0 2.5 1.1193 2.5 2.5Zm0 0V5c2.5 0 6 2.5 4.5 7"/>
                </svg>
              </div>
              <p className="text-black text-xs sm:text-sm mb-1 font-text">@Malcomjager</p>
              <p className="text-gray-500 font-semibold text-xs font-text">TUMAC</p>
              <div className="mt-3 sm:mt-4">
                <a 
                  href="https://www.tiktok.com/@malcomjager" 
                  target="_blank"
                  className="inline-block bg-black border border-black text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-xs sm:text-sm font-text"
                >
                  Suivre
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLink;
