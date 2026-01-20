import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import PortfolioPreview from './components/PortfolioPreview';
import Testimonials from './components/Testimonials';
import FloatingCTA from './components/FloatingCTA';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-bg font-sans text-brand-dark overflow-x-hidden selection:bg-brand-orange selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ServicesGrid />
        <PortfolioPreview />
        <Testimonials />
      </main>
      <ContactFooter />
      <FloatingCTA />
    </div>
  );
};

export default App;