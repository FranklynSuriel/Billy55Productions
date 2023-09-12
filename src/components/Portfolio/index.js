import React from "react";
import './index.css'
import image01 from '../pictures/image01.jpg'
import image02 from "../pictures/image02.jpg";
import image03 from "../pictures/image03.jpg";
import image04 from "../pictures/image04.jpg";
import image05 from "../pictures/image05.jpg";
import image06 from "../pictures/image06.jpg";
import image07 from "../pictures/image07.jpg";
import image08 from "../pictures/image08.jpg";
import image09 from "../pictures/image09.jpg";
import image10 from "../pictures/image10.jpg";
import image11 from "../pictures/image11.jpg";
import image12 from "../pictures/image12.jpg";
// import image13 from "../pictures/image13.jpg";
import image14 from "../pictures/image14.jpg";
import image15 from "../pictures/image15.jpg";
import image16 from "../pictures/image16.jpg";
import image17 from "../pictures/image17.jpg";
// import image18 from "../pictures/image18.jpg";


function Portfolio() {
  return (
    <div id="portfolio" className="portfolio">
      <h2 className="portfolio_title">Portafolio Cautivador</h2>
      <div className="portfolio_container">
        <img src={image01} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image02} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image05} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image06} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image12} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image11} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image14} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image17} className="portfolio_image_landscape" alt="Imagen Ejemplo" />
        <img src={image16} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image03} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image15} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image08} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image07} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image04} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image09} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        <img src={image10} className="portfolio_image_portrait" alt="Imagen Ejemplo" />
        {/* <img src={image13} className="portfolio_image_landscape" alt="Imagen Ejemplo" /> */}
        {/* <img src={image18} className="portfolio_image_portrait" alt="Imagen Ejemplo" /> */}
      </div>
    </div>
  );
}

export default Portfolio;