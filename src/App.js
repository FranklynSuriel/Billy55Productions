import React from 'react';
import Hero from './components/Hero';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Price from './components/Price'
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Portfolio />
      <Price />
      <Contact />
    </div>
  );
}

export default App;
