import React from 'react';
import Landing from './components/Landing';
import Description from './components/Description';
import Portfolio from './components/Portfolio';
import Pricing from './components/pricing';
import Contact from './components/Contact/index.js';

function App() {
  return (
    <div className="App">
      <Landing />
      <Description />
      <Portfolio />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
