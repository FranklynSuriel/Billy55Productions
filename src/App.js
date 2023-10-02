// Imports the Component and React
import React from 'react';
import Hero from './components/Hero';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Price from './components/Price'
import Contact from './components/Contact';

// Creates app function
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

// export App
export default App;
