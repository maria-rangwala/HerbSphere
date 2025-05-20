import React, { useState } from 'react';
import './plantcard.css';

function Plantcard({ plant }) {
  const [showModal, setShowModal] = useState(false);

  const openOverlay = () => setShowModal(true);
  const closeOverlay = () => setShowModal(false);
  const shortBenefits = plant.medicinalBenefits.slice(0, 100);

  return (
  <>
    <div className="plant-container" onClick={openOverlay}>
      <div className="plant-card">
        <img src={plant.imageUrl} alt={plant.plantName} className="plant-image" />
        <h2 className="plant-name">{plant.plantName}</h2>
        <p className="plant-part"><strong>Part Used:</strong> {plant.partUsed}</p>
        <p className="plant-benefits">
          <strong>Medicinal Benefits:</strong> {shortBenefits}...
        </p>
      </div>
    </div>

    {showModal && (
        <div className="modal-overlay" onClick={closeOverlay}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <img
              src={plant.imageUrl}
              alt={plant.plantName}
              className="modal-image"
            />
            <h2 className="plant-name">{plant.plantName}</h2>
            <p className="plant-part">
              <strong>Part Used:</strong> {plant.partUsed}
            </p>
            <p className="plant-benefits">
              <strong>Medicinal Benefits:</strong> {plant.medicinalBenefits}
            </p>
            <button className="close-btn" onClick={closeOverlay}>
              Close
            </button>
          </div>
        </div>
      )}
  </>
  );
}

export default Plantcard;
