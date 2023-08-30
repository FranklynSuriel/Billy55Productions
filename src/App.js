import React from 'react';
import Landing from './components/Landing';
import Description from './components/Description';
import Portfolio from './components/Portfolio';
import Pricing from './components/pricing';
import Connect from './components/Connect';

function App() {
  return (
    <div className="App">
      <Landing />
      <Description />
      <Portfolio />
      <Pricing />
      <Connect />
    </div>
  );
}

export default App;
