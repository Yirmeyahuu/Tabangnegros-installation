import React, { useEffect, useRef, useState } from 'react';

const TechnicalDetails = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for cards
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, entry.target.dataset.card]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const cardElements = document.querySelectorAll('.tech-card');
    cardElements.forEach((el) => observerRef.current.observe(el));

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
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="technical" 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollOffset * 100}px) translateX(${scrollOffset * 50}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-gray-100/40 dark:bg-gray-800/20 rounded-full blur-3xl"
        style={{
          transform: `translateY(${-scrollOffset * 120}px) translateX(${-scrollOffset * 60}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div 
          className="text-center mb-12"
          style={{
            transform: `translateY(${scrollOffset * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Technical Details
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            System requirements and specifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* System Requirements */}
          <div 
            data-card="requirements"
            className={`tech-card bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-1000 ${
              visibleCards.has('requirements')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{
              transform: visibleCards.has('requirements')
                ? `translateY(${scrollOffset * 25}px) translateX(${-scrollOffset * 10}px)`
                : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.1s ease-out'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-blue-600 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                System Requirements
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Android 7.0 (Nougat) or higher</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Minimum operating system version</p>
                </div>
              </li>
              <li className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">20 MB Free Storage</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">App size: ~10MB + cache</p>
                </div>
              </li>
              <li className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">GPS/Location Services</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Required for emergency tracking</p>
                </div>
              </li>
              <li className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Camera Access</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">For photo evidence capture</p>
                </div>
              </li>
              <li className="flex items-start gap-3 transform transition-all duration-300 hover:translate-x-2">
                <svg className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-bold text-gray-900 dark:text-white">Internet Connection</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Recommended (offline mode available)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* App Information */}
          <div 
            data-card="appinfo"
            className={`tech-card bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-1000 delay-200 ${
              visibleCards.has('appinfo')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
            style={{
              transform: visibleCards.has('appinfo')
                ? `translateY(${scrollOffset * 25}px) translateX(${scrollOffset * 10}px)`
                : 'translateY(40px)',
              transition: 'opacity 0.8s ease-out, transform 0.1s ease-out'
            }}
          >
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8 text-blue-600 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
                App Information
              </h3>
            </div>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:translate-x-2 hover:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">File Name</p>
                <p className="font-bold text-gray-900 dark:text-white">TabangNegros.apk</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:translate-x-2 hover:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Current Version</p>
                <p className="font-bold text-gray-900 dark:text-white">1.0.0</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:translate-x-2 hover:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">File Size</p>
                <p className="font-bold text-gray-900 dark:text-white">~10 MB</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:translate-x-2 hover:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Last Updated</p>
                <p className="font-bold text-gray-900 dark:text-white">November 2024</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:translate-x-2 hover:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Developer</p>
                <p className="font-bold text-gray-900 dark:text-white">Tabang Negros Team</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4 transform transition-all duration-300 hover:translate-x-2 hover:border-blue-700">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Category</p>
                <p className="font-bold text-gray-900 dark:text-white">Emergency Services</p>
              </div>
            </div>
          </div>
        </div>

        {/* Permissions Section */}
        <div 
          data-card="permissions"
          className={`tech-card mt-8 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all duration-1000 delay-400 ${
            visibleCards.has('permissions')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }`}
          style={{
            transform: visibleCards.has('permissions')
              ? `translateY(${scrollOffset * 30}px)`
              : 'translateY(40px)',
            transition: 'opacity 0.8s ease-out, transform 0.1s ease-out'
          }}
        >
          <h3 className="text-2xl font-heading font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <svg className="w-8 h-8 text-blue-600 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Required Permissions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Location</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Track your location during emergencies</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Camera</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Capture photo evidence</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Storage</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Save emergency data offline</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">Notifications</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Receive emergency alerts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .tech-card {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TechnicalDetails;