import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Trigger entrance animation on mount
    setIsVisible(true);

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-float-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 md:w-80 md:h-80 bg-blue-300 rounded-full blur-3xl opacity-20 animate-float-2"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full blur-3xl opacity-15 animate-float-3"></div>
      </div>

      <div 
        className="container mx-auto px-4 py-20 md:py-32 relative z-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Interactive 3D Globe */}
          <div className={`mb-6 md:mb-8 mt-12 md:mt-2 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}>
            <div
              className="w-32 h-32 md:w-40 md:h-40 mx-auto cursor-pointer"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                perspective: '1500px',
              }}
            >
              <div
                className="relative w-full h-full"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Globe sphere */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 shadow-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    transform: 'translateZ(0px)',
                    boxShadow: 'inset -20px -20px 50px rgba(0, 0, 0, 0.3), 0 20px 50px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Earth/Philippines landmass representation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Philippines archipelago simplified shapes */}
                    <div className="relative w-full h-full">
                      {/* Luzon */}
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-8 h-12 bg-green-600 rounded-full opacity-80"
                        style={{
                          clipPath: 'ellipse(40% 50% at 50% 50%)',
                          transform: 'translateZ(20px) translateX(-50%) rotate(10deg)',
                        }}
                      ></div>
                      
                      {/* Visayas */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-10 h-4 bg-green-500 rounded-lg opacity-80"
                        style={{
                          transform: 'translateZ(20px) translateX(-50%)',
                        }}
                      ></div>
                      
                      {/* Mindanao */}
                      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-green-600 rounded-full opacity-80"
                        style={{
                          clipPath: 'ellipse(45% 50% at 50% 50%)',
                          transform: 'translateZ(20px) translateX(-50%) rotate(-5deg)',
                        }}
                      ></div>

                      {/* Emergency marker pin on Negros */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          transform: 'translateZ(25px) translateX(-50%) translateY(-50%)',
                        }}
                      >
                        <div className="relative">
                          <svg className="w-6 h-6 md:w-8 md:h-8 text-red-500 drop-shadow-lg animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                          </svg>
                          {/* Ping effect */}
                          <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"></div>
                        </div>
                      </div>
                    </div>

                    {/* Globe grid lines */}
                    <div className="absolute inset-0 opacity-30">
                      {/* Latitude lines */}
                      <div className="absolute top-1/4 left-0 right-0 h-px bg-white/40"></div>
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/50"></div>
                      <div className="absolute bottom-1/4 left-0 right-0 h-px bg-white/40"></div>
                      
                      {/* Longitude lines */}
                      <div className="absolute top-0 bottom-0 left-1/4 w-px bg-white/40"></div>
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/50"></div>
                      <div className="absolute top-0 bottom-0 right-1/4 w-px bg-white/40"></div>
                    </div>

                    {/* White clouds overlay */}
                    <div className="absolute top-1/3 right-1/4 w-8 h-3 bg-white/30 rounded-full blur-sm"
                      style={{ transform: 'translateZ(22px)' }}
                    ></div>
                    <div className="absolute bottom-1/3 left-1/4 w-6 h-2 bg-white/25 rounded-full blur-sm"
                      style={{ transform: 'translateZ(22px)' }}
                    ></div>
                  </div>
                </div>

                {/* Outer glow ring */}
                <div className="absolute -inset-2 rounded-full border-4 border-white/20 animate-pulse"
                  style={{
                    transform: 'translateZ(-5px)',
                  }}
                ></div>

                {/* Orbital ring */}
                <div className="absolute -inset-4 rounded-full border-2 border-blue-300/30"
                  style={{
                    transform: 'translateZ(-10px) rotateX(75deg)',
                    animation: 'spin 8s linear infinite',
                  }}
                ></div>

                {/* Glow effect */}
                <div className="absolute -inset-6 bg-blue-400 rounded-full blur-3xl opacity-40 animate-pulse"
                  style={{
                    transform: 'translateZ(-15px)',
                  }}
                ></div>
              </div>
            </div>
          </div>

          <h1 className={`text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Tabang Negros
          </h1>
          
          <p className={`text-lg md:text-xl lg:text-2xl text-blue-100 mb-3 md:mb-4 font-sans transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Emergency Help Request System
          </p>
          
          <p className={`text-base md:text-lg lg:text-xl text-blue-200 mb-8 md:mb-12 font-sans transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            for Negros Island
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center px-4 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <a
              href="#download"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download Now
            </a>
            
            <a
              href="#features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          <div className={`mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-white transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="transform transition-all duration-300 hover:scale-110">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">24/7</p>
              <p className="text-blue-200 text-xs md:text-sm">Available</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">GPS</p>
              <p className="text-blue-200 text-xs md:text-sm">Location</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Fast</p>
              <p className="text-blue-200 text-xs md:text-sm">Response</p>
            </div>
            <div className="transform transition-all duration-300 hover:scale-110">
              <p className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">Free</p>
              <p className="text-blue-200 text-xs md:text-sm">To Use</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;