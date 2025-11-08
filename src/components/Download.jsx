import React, { useEffect, useRef, useState } from 'react';

const Download = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Parallax scroll handler
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        setScrollOffset(scrollProgress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="download" 
      className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 right-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollOffset * 120}px) translateX(${scrollOffset * 60}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl"
        style={{
          transform: `translateY(${-scrollOffset * 100}px) translateX(${-scrollOffset * 50}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 
          className={`text-3xl md:text-4xl font-heading font-bold mb-6 md:mb-8 text-gray-900 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: `translateY(${scrollOffset * 15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          Download Tabang Negros
        </h2>
        
        <div 
          className={`bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6 md:mb-8 border border-blue-100 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
          }`}
          style={{
            transform: `translateY(${scrollOffset * 25}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="mb-6">
            <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">
              Current Version: <span className="font-bold text-blue-600">1.0.0</span>
            </p>
            <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
              File Size: <span className="font-bold">~10MB</span>
            </p>
          </div>

          <a
            href="./TabangNegros.apk"
            download
            className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.6,9.48l1.84-3.18c0.16-0.31,0.04-0.69-0.26-0.85c-0.29-0.15-0.65-0.06-0.83,0.22l-1.88,3.24 c-2.86-1.21-6.08-1.21-8.94,0L5.65,5.67c-0.19-0.29-0.58-0.38-0.87-0.2C4.5,5.65,4.41,6.01,4.56,6.3L6.4,9.48 C3.3,11.25,1.28,14.44,1,18h22C22.72,14.44,20.7,11.25,17.6,9.48z M7,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25S8.25,13.31,8.25,14C8.25,14.69,7.69,15.25,7,15.25z M17,15.25c-0.69,0-1.25-0.56-1.25-1.25 c0-0.69,0.56-1.25,1.25-1.25s1.25,0.56,1.25,1.25C18.25,14.69,17.69,15.25,17,15.25z"/>
            </svg>
            Download for Android
          </a>

          <p className="text-xs md:text-sm text-gray-500 mt-3 md:mt-4">
            Requires Android 7.0 or higher
          </p>
        </div>

        <div 
          className={`bg-yellow-50 border-l-4 border-yellow-400 p-4 md:p-6 rounded-lg shadow-md transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: `translateY(${scrollOffset * 30}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-600 flex-shrink-0 mt-0.5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="text-left">
              <p className="font-bold text-yellow-800 mb-1 text-sm md:text-base">
                Emergency Use Only
              </p>
              <p className="text-xs md:text-sm text-yellow-700 leading-relaxed">
                This application is designed for emergency situations only. Misuse may result in legal consequences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;