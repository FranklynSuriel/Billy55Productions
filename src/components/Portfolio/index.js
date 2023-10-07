// Import React, index.css
import React, { useState } from "react";
import "./index.css";
// import ImageModal
import ImageModal from "./ImageModal";
// import useLocalization
import { useLocalization } from "../../context/LocalizationContext";
import ScrollAnimation from "../ScrollAnimation";

// create an array of images
const images = [
  require("../pictures/image01.jpg"),
  require("../pictures/image02.jpg"),
  require("../pictures/image05.jpg"),
  require("../pictures/image06.jpg"),
  require("../pictures/image12.jpg"),
  require("../pictures/image11.jpg"),
  require("../pictures/image14.jpg"),
  require("../pictures/image17.jpg"),
  require("../pictures/image16.jpg"),
  require("../pictures/image03.jpg"),
  require("../pictures/image15.jpg"),
  require("../pictures/image08.jpg"),
  require("../pictures/image07.jpg"),
  require("../pictures/image04.jpg"),
  require("../pictures/image09.jpg"),
  require("../pictures/image10.jpg"),
  // require('../pictures/image13.jpg'), // Future versions
  // require('../pictures/image18.jpg'), // Future versions
];

function Portfolio() {
  // Create translate constant to get the content of the section
  const { translate } = useLocalization();
  // Create a constant using useState to set the selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // create a function to handle which image was clicked
  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  // Create a function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <div id="portfolio" >
      <ScrollAnimation>
        <div className="portfolio">
          <h1 className="portfolio_title">{translate("portfolioTitle")}</h1>
          <div className="portfolio_container">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                className={
                  index < 8
                    ? "portfolio_image_landscape"
                    : "portfolio_image_portrait"
                }
                alt={` Sample ${index + 1}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
          {/* if selectedImage is not null will open a modal with the selected image */}
          {selectedImage !== null && (
            <ImageModal
              imageUrl={images[selectedImage]}
              onClose={handleCloseModal}
            />
          )}
        </div>
      </ScrollAnimation>
    </div>
  );
}

// Export Portfolio
export default Portfolio;
