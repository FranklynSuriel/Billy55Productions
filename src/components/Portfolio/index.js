import React, { useState } from "react";
import './index.css';
import 'animate.css';
import ImageModal from "./ImageModal";

import { useLocalization } from '../../context/LocalizationContext'

const images = [
  require('../pictures/image01.jpg'),
  require('../pictures/image02.jpg'),
  require('../pictures/image05.jpg'),
  require('../pictures/image06.jpg'),
  require('../pictures/image12.jpg'),
  require('../pictures/image11.jpg'),
  require('../pictures/image14.jpg'),
  require('../pictures/image17.jpg'),
  require('../pictures/image16.jpg'),
  require('../pictures/image03.jpg'),
  require('../pictures/image15.jpg'),
  require('../pictures/image08.jpg'),
  require('../pictures/image07.jpg'),
  require('../pictures/image04.jpg'),
  require('../pictures/image09.jpg'),
  require('../pictures/image10.jpg'),
  // require('../pictures/image13.jpg'), // Commented out
  // require('../pictures/image18.jpg'), // Commented out
];

function Portfolio() {

  const { translate } = useLocalization();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  }

  const handleCloseModal = () => {
    setSelectedImage(null);
  }
  return (
    <div id="portfolio" className="portfolio">
      <h1 className="portfolio_title">{translate("portfolioTitle")}</h1>
      <div className="portfolio_container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={index < 8 ? 'portfolio_image_landscape' : 'portfolio_image_portrait'}
            alt={` Sample ${index + 1}`}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
      {selectedImage !== null && (
        <ImageModal
          imageUrl={images[selectedImage]}
          onClose={handleCloseModal}
        />
      )}

    </div>
  );
}

export default Portfolio;
