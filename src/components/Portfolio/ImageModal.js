// Import React
import React from "react";
// Import ImageModal.css
import './ImageModal.css';

// Set a function to handle the modal
function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Sample Portfolio" />
      </div>
    </div>
  );
}

// Export ImageModal
export default ImageModal;