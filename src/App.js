import React from 'react';
import Landing from './components/Landing';
import Description from './components/Description';
import Portfolio from './components/Portfolio';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="App">
      <Landing />
      <Description />
      <Portfolio />
      <Pricing />
    </div>
  );
}

export default App;
