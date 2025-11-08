import React from 'react';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import Installation from './components/Installation';
import TechnicalDetails from './components/TechnicalDetails';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Header />
      <Hero />
      <Features />
      <Download />
      <Installation />
      <TechnicalDetails />
      <Footer />
    </div>
  );
}

export default App;