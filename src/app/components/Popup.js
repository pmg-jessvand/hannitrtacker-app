import React from 'react';

const Popup = ({ isOpen, handleClose }) => {
  return (
    <>
    {isOpen ?
      <div className="popup-wrapper">
        <div className="popup-message">
          <i id="checkmark" className="far fa-check-circle"></i>
          <p>Registratie toegevoegd!</p>
        </div>
        <div className="popup-button">
          <button onClick={() => handleClose()}>x</button>
        </div>
      </div>

      : null  
    }
    </>
  );
}

export default Popup;