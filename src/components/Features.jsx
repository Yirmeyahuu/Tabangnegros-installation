import React, { useEffect, useRef, useState } from 'react';

const Features = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const [scrollOffset, setScrollOffset] = useState(0);
  const observerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.feature-card');
    elements.forEach((el) => observerRef.current.observe(el));

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

  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'GPS Location Tracking',
      description: 'Automatically shares your precise location with emergency responders for faster assistance.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Photo Evidence Capture',
      description: 'Take and attach photos of the emergency situation to provide visual context to responders.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'Interactive Maps',
      description: 'View emergency services nearby and navigate to safe locations with integrated mapping.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      title: 'Offline Support',
      description: 'Store essential emergency information locally for access even without internet connection.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Real-time Emergency Response',
      description: 'Instant notifications and updates from emergency services throughout the response process.'
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: 'Privacy & Security',
      description: 'Your data is encrypted and protected. Location sharing only activates during emergencies.'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 left-0 w-64 h-64 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl opacity-30"
        style={{
          transform: `translateY(${scrollOffset * 100}px) translateX(${scrollOffset * 50}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20"
        style={{
          transform: `translateY(${-scrollOffset * 80}px) translateX(${-scrollOffset * 40}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div 
          className="text-center mb-16 animate-fade-in-up"
          style={{
            transform: `translateY(${scrollOffset * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Designed to provide fast, reliable emergency assistance when you need it most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            // Calculate parallax offset for each card based on its position
            const row = Math.floor(index / 3);
            const col = index % 3;
            const parallaxY = scrollOffset * (15 - row * 5);
            const parallaxX = (col - 1) * scrollOffset * 10;

            return (
              <div
                key={index}
                data-index={index}
                className={`feature-card bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 ${
                  visibleItems.has(String(index))
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: visibleItems.has(String(index)) 
                    ? `translateY(${parallaxY}px) translateX(${parallaxX}px)` 
                    : 'translateY(40px)',
                  transition: 'opacity 0.6s ease-out, transform 0.1s ease-out'
                }}
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4 transform transition-transform duration-300 hover:scale-110 hover:rotate-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .feature-card {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default Features;