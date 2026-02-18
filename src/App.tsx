import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechGrid from './components/TechGrid';
import ProductShowcase from './components/ProductShowcase';
import B2BModules from './components/B2BModules';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'var(--font-sans)', color: 'var(--color-text)' }}>
      <Header />
      <main>
        <Hero />
        <TechGrid />
        <ProductShowcase />
        <B2BModules />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
