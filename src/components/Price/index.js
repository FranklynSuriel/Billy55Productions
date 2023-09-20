import React from "react";
import "./index.css";

function Price() {
  return (
    <div id="price" className="price">
      <div className="card_container">
        <div className="card">
          <h4>Basico</h4>
          <h2> 99.99</h2>
          <p>✓ 7 Fotos</p>
          <p>✓ Galleria de Fotos </p>
          <p>✓ 1 Locacion</p>
          <p>✓ Edicion Profesional</p>
        </div>
        <div className="card">
          <h4>Avanzado</h4>
          <h2> 199.99</h2>
          <p>✓ 15 Photos</p>
          <p>✓ Album</p>
          <p>✓ 2 Locaciones</p>
          <p>✓ Edicion Profesional</p>
        </div>
        <div className="card">
          <h4>Premium</h4>
          <h2> 299.99</h2>
          <p>✓ 25 Fotos</p>
          <p>✓ fotos con Drones</p>
          <p>✓ diferentes Outfit</p>
          <p>✓ Montaje de video</p>
        </div>
      </div>
    </div>
  );
}

export default Price;