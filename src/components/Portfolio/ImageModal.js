import React from "react";
import './ImageModal.css';

function ImageModal({ imageUrl, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        <img src={imageUrl} alt="Sample Portfolio" />
      </div>
    </div>
  );
}

export default ImageModal;