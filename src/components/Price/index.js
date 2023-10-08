// Import React, index.css
import React from "react";
import "./index.css";
// import useLocalization
import { useLocalization } from "../../context/LocalizationContext";
import ScrollAnimation from "../ScrollAnimation";

function Price() {
  // Create translate constant to get the content of the section
  const { translate } = useLocalization();

  return (
    <div id="price" className="price">
      <ScrollAnimation>
        <div className="card_container">
          <div className="card">
            <h2>{translate("basicTitle")}</h2>
            {/* <h2>{translate("basicPrice")}</h2> */}
            <p>{translate("basicPhotos")}</p>
            <p>{translate("basicGallery")} </p>
            <p>{translate("basicLocation")}</p>
            <p>{translate("basicEdition")}</p>
          </div>
          <div className="card">
            <h2>{translate("advancedTitle")}</h2>
            {/* <h2>{translate("advancedPrice")}</h2> */}
            <p>{translate("advancedPhotos")}</p>
            <p>{translate("advancedGallery")}</p>
            <p>{translate("advancedLocation")}</p>
            <p>{translate("advancedEdition")}</p>
          </div>
          <div className="card">
            <h2>{translate("premiumTitle")}</h2>
            {/* <h2>{translate("premiumPrice")}</h2> */}
            <p>{translate("premiumPhotos")}</p>
            <p>{translate("premiumDrones")}</p>
            <p>{translate("premiumOutfit")}</p>
            <p>{translate("premiumVideo")}</p>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

// Export Price
export default Price;
