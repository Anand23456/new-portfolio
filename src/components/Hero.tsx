import React, { useState } from 'react';
import ContactModal from './ContactModal';

const Hero: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 bg-black">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-95"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(76,175,80,0.15),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Anand – </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  Software Engineer
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 font-light mb-6">
                High-performance web apps. Pixel-perfect design. Code that scales.
              </h2>
              
              <p className="text-gray-400 mb-8 text-lg">
                Building fast, secure, and beautiful websites using <span className="text-green-400">React</span>, <span className="text-green-400">Node.js</span>, and modern JavaScript. Trusted by clients to deliver on time, every time.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => setShowModal(true)}
                  className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
                >
                  Hire Me
                </button>
                
                <a 
                  href="/anand-resume.pdf" 
                  download
                  className="px-8 py-3 bg-transparent border-2 border-green-500 text-green-400 font-medium rounded-lg hover:bg-green-500/10 transition-all duration-300 flex items-center justify-center"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-green-500/30 shadow-xl shadow-green-500/10 animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-900/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl sm:text-7xl font-bold text-white">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && <ContactModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Hero;