// src/Modal.js
import React from 'react';
import './Modal.css'; // Create this CSS file for modal styling

const Modal = ({ isVisible, onClose, imageSrc, title }) => {
  if (!isVisible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <img src={imageSrc} alt={title} className="modal-image" />
        {/* <h2>{title}</h2> */}
      </div>
    </div>
  );
};

export default Modal;
