import React from "react";
import "./index.css";

function Hero() {
  return (
    <div id="hero">
      <h1 id="hero_text">
        BILLY<span>55</span> PRODUCCIONES
      </h1>
      <ul id="navBar">
        <li className="list">
          <a className="nav-link" href="#about_me">
            Acerca de Nosotros
          </a>
        </li>
        <li className="list">
          <a className="nav-link" href="#portfolio">
            Portafolio
          </a>
        </li>
        <li className="list">
          <a className="nav-link" href="/">
            Cotizaciones
          </a>
        </li>
        <li className="list">
          <a className="nav-link" href="/">
            Contactenos
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
