// Imports React, LocalizationProvider, and Components
import React from "react";
import { LocalizationProvider } from "./context/LocalizationContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Contact from "./components/Contact";

// Creates app function
function App() {
  return (
    <div className="App">
      <LocalizationProvider>
        <Hero />
        <About />
        <Portfolio />
        <Price />
        <Contact />
      </LocalizationProvider>
    </div>
  );
}

// export App
export default App;
