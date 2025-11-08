import React, { useState, useEffect } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Hide preloader after animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-600 to-cyan-500 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '3s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative text-center z-10">
        {/* 3D Logo Container */}
        <div className="relative mb-12 perspective-1000">
          {/* Outer Ring */}
          <div className="absolute inset-0 w-40 h-40 mx-auto animate-spin-slow">
            <div className="absolute inset-0 rounded-full border-4 border-t-white/40 border-r-white/20 border-b-white/10 border-l-white/5"></div>
          </div>

          {/* Middle Ring */}
          <div className="absolute inset-2 w-36 h-36 mx-auto animate-spin-reverse">
            <div className="absolute inset-0 rounded-full border-4 border-t-cyan-300/40 border-r-cyan-300/20 border-b-cyan-300/10 border-l-cyan-300/5"></div>
          </div>

          {/* 3D Logo Card */}
          <div className="relative w-40 h-40 mx-auto preserve-3d animate-float">
            {/* Shadow/Depth Layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl transform translate-z-[-20px] blur-sm opacity-50"></div>
            
            {/* Main Logo Card */}
            <div className="relative w-full h-full bg-gradient-to-br from-white via-blue-50 to-cyan-100 rounded-3xl shadow-2xl flex items-center justify-center transform-gpu animate-tilt">
              {/* Logo Image or SVG */}
              <img 
                src="/negrosrelicon.svg" 
                alt="Tabang Negros Logo" 
                className="w-24 h-24 animate-pulse-slow"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent animate-pulse"></div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shine"></div>
            </div>
          </div>

          {/* Ambient Glow */}
          <div className="absolute -inset-8 bg-blue-400/30 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Text Content */}
        <div className="mb-8 space-y-2">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white animate-fade-in-up">
            Tabang Negros
          </h2>
          <p className="text-lg text-blue-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Emergency Response System
          </p>
        </div>

        {/* Modern Progress Bar */}
        <div className="w-64 mx-auto mb-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Progress Fill */}
            <div 
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="mt-2 text-center">
            <span className="text-sm font-medium text-white/80">{progress}%</span>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex gap-2 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce-delay-0 shadow-lg shadow-white/50"></div>
          <div className="w-2.5 h-2.5 bg-cyan-300 rounded-full animate-bounce-delay-1 shadow-lg shadow-cyan-300/50"></div>
          <div className="w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce-delay-2 shadow-lg shadow-blue-300/50"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes tilt {
          0%, 100% { transform: rotateY(-10deg) rotateX(10deg); }
          50% { transform: rotateY(10deg) rotateX(-10deg); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-tilt {
          animation: tilt 4s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-bounce-delay-0 {
          animation: bounce 1s ease-in-out infinite;
          animation-delay: 0ms;
        }

        .animate-bounce-delay-1 {
          animation: bounce 1s ease-in-out infinite;
          animation-delay: 150ms;
        }

        .animate-bounce-delay-2 {
          animation: bounce 1s ease-in-out infinite;
          animation-delay: 300ms;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .preserve-3d {
          transform-style: preserve-3d;
        }

        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .translate-z-\[-20px\] {
          transform: translateZ(-20px);
        }
      `}</style>
    </div>
  );
};

export default Preloader;