import React, { useState, useEffect, useRef } from 'react';

const Installation = () => {
  const [expandedStep, setExpandedStep] = useState(null);
  const [visibleSteps, setVisibleSteps] = useState(new Set());
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for step cards
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) => new Set([...prev, entry.target.dataset.step]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const stepElements = document.querySelectorAll('.installation-step');
    stepElements.forEach((el) => observerRef.current.observe(el));

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

  const steps = [
    {
      number: 1,
      title: 'Enable Unknown Sources',
      description: 'Allow installation from unknown sources in your Android settings',
      details: [
        'Open Settings on your Android device',
        'Navigate to Security or Privacy settings',
        'Find "Install unknown apps" or "Unknown sources"',
        'Enable installation for your browser or file manager',
        'You can disable this after installation for security'
      ]
    },
    {
      number: 2,
      title: 'Download the APK',
      description: 'Click the download button and save the TabangNegros.apk file',
      details: [
        'Click the "Download for Android" button above',
        'Your browser will download the APK file (~10MB)',
        'Wait for the download to complete',
        'Check your Downloads folder or notification bar'
      ]
    },
    {
      number: 3,
      title: 'Install the Application',
      description: 'Open and install the downloaded APK file',
      details: [
        'Tap on the downloaded TabangNegros.apk file',
        'Review the permissions requested',
        'Tap "Install" to begin installation',
        'Wait for installation to complete',
        'Tap "Open" or find the app in your app drawer'
      ]
    },
    {
      number: 4,
      title: 'Grant Permissions',
      description: 'Allow necessary permissions for the app to function properly',
      details: [
        'Location: Required for GPS tracking during emergencies',
        'Camera: Needed to capture photo evidence',
        'Storage: To save emergency information offline',
        'Notifications: For emergency alerts and updates',
        'All permissions are used only for emergency purposes'
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="installation" 
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-10 right-10 w-64 h-64 bg-blue-200/20 dark:bg-blue-700/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollOffset * 100}px) translateX(${scrollOffset * 50}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-10 left-10 w-80 h-80 bg-gray-200/30 dark:bg-gray-700/10 rounded-full blur-3xl"
        style={{
          transform: `translateY(${-scrollOffset * 120}px) translateX(${-scrollOffset * 60}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div 
          className="text-center mb-12"
          style={{
            transform: `translateY(${scrollOffset * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Installation Guide
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Follow these simple steps to install Tabang Negros
          </p>
        </div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const parallaxY = scrollOffset * (20 - index * 3);
            const parallaxX = (index % 2 === 0 ? 1 : -1) * scrollOffset * 5;
            
            return (
              <div
                key={step.number}
                data-step={step.number}
                className={`installation-step bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-700 ${
                  visibleSteps.has(String(step.number))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  transform: visibleSteps.has(String(step.number))
                    ? `translateY(${parallaxY}px) translateX(${parallaxX}px)`
                    : 'translateY(40px)',
                }}
              >
                <button
                  onClick={() => setExpandedStep(expandedStep === step.number ? null : step.number)}
                  className="w-full p-6 flex items-start gap-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
                    {step.number}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-heading font-bold mb-2 text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                  <svg
                    className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${expandedStep === step.number ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {expandedStep === step.number && (
                  <div className="px-6 pb-6 pl-[88px] animate-slideDown">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li 
                          key={detailIndex} 
                          className="flex items-start gap-3 animate-fadeIn"
                          style={{
                            animationDelay: `${detailIndex * 50}ms`
                          }}
                        >
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div 
          className="mt-12 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg transition-all duration-1000"
          style={{
            transform: `translateY(${scrollOffset * 25}px)`,
            transition: 'transform 0.1s ease-out',
            opacity: visibleSteps.size > 2 ? 1 : 0,
          }}
        >
          <div className="flex items-start">
            <svg className="w-6 h-6 text-red-600 dark:text-red-400 mr-3 flex-shrink-0 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">Security Notice</h4>
              <p className="text-red-700 dark:text-red-400 text-sm">
                Only download Tabang Negros from this official website. Be cautious of fake apps. 
                After installation, you can disable "Unknown Sources" in your settings for added security.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
          opacity: 0;
        }

        .installation-step {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Installation;