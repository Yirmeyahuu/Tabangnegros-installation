import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <nav className="container mx-auto max-w-6xl bg-white/20 backdrop-blur-xl shadow-lg border border-white/20 rounded-full px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/negrosrelicon.svg" 
                alt="Tabang Negros Logo" 
                className="h-12 w-12"
              />
              <h1 className="text-2xl font-bold text-white">Tabang Negros</h1>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <a 
                href="#features" 
                className="font-sans text-sm md:text-base text-white hover:text-blue-600 transition-all duration-200 hover:scale-105"
              >
                Features
              </a>
              <a 
                href="#download" 
                className="font-sans text-sm md:text-base px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200 hover:scale-105"
              >
                Download
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Burger Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMenu}
          className="w-14 h-14 bg-white/20 backdrop-blur-xl shadow-lg border border-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span 
              className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span 
              className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-20 right-4 bg-white/20 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl p-6 min-w-[200px] transition-all duration-300 ${
            isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4">
            <a 
              href="#features" 
              onClick={toggleMenu}
              className="font-sans text-base text-white hover:text-blue-400 transition-all duration-200 py-3 px-4 rounded-xl hover:bg-white/10 active:scale-95"
            >
              Features
            </a>
            <a 
              href="#download" 
              onClick={toggleMenu}
              className="font-sans text-base px-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-all duration-200 text-center active:scale-95"
            >
              Download
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;