import React from "react";
import "./index.css";
import { useLocalization } from '../../context/LocalizationContext'

function Price() {

  const { translate } = useLocalization();

  return (
    <div id="price" className="price">
      <div className="card_container">
        <div className="card">
          <h4>{translate("basicTitle")}</h4>
          <h2>{translate("basicPrice")}</h2>
          <p>{translate("basicPhotos")}</p>
          <p>{translate("basicGallery")} </p>
          <p>{translate("basicLocation")}</p>
          <p>{translate("basicEdition")}</p>
        </div>
        <div className="card">
          <h4>{translate("advancedTitle")}</h4>
          <h2>{translate("advancedPrice")}</h2>
          <p>{translate("advancedPhotos")}</p>
          <p>{translate("advancedGallery")}</p>
          <p>{translate("advancedLocation")}</p>
          <p>{translate("advancedEdition")}</p>
        </div>
        <div className="card">
          <h4>{translate("premiumTitle")}</h4>
          <h2>{translate("premiumPrice")}</h2>
          <p>{translate("premiumPhotos")}</p>
          <p>{translate("premiumDrones")}</p>
          <p>{translate("premiumOutfit")}</p>
          <p>{translate("premiumVideo")}</p>
        </div>
      </div>
    </div>
  );
}

export default Price;
