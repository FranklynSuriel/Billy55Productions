// Import React, index.css, useLocalization
import React from "react";
import "./index.css";
import { useLocalization } from "../../context/LocalizationContext";
// import logo
import logo from "../pictures/Billy55Producciones.png";

function Hero() {
  // Create translate constant to get the content of the section
  const { translate } = useLocalization();

  // Create language constant to set the language between English or Spanish
  const { language, setLanguage } = useLocalization();
  // const { login, setLogin } = useLocalization();

  // function to toogle between languages
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <div id="hero">
      <img id="logo" src={logo} alt=" Billy55 Producciones Logo" />
      <button id="buttonLanguage" onClick={toggleLanguage}>
        {translate("buttonLanguage")}
      </button>
      {/* -- Future development -- */}
      {/* <h1 id="hero_text">
      {translate("heroTitle")}
      </h1> */}
      <ul id="navBar">
        <li className="list">
          <a className="nav-link" href="#about_me">
            {translate("navAboutUs")}
          </a>
        </li>
        <li className="list">
          <a className="nav-link" href="#portfolio">
            {translate("navPortfolio")}
          </a>
        </li>
        <li className="list">
          <a className="nav-link" href="#price">
            {translate("navQuotes")}
          </a>
        </li>
        <li className="list">
          <a className="nav-link" href="#contact_me">
            {translate("navContactUs")}
          </a>
        </li>
        <li className="list">
          <button
            id="nav-button"
            onClick={() => {
              window.location.href =
                "../producciones55/login.php";
            }}
          >
            {translate("navLogin")}
          </button>
        </li>
      </ul>
    </div>
  );
}

// Export Hero
export default Hero;
