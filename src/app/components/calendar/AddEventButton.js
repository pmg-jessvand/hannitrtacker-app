import React from 'react';

const AddEventButton = ({ handleClick, isModalOpen }) => {
  return (
    <div className="add-event-button" onClick={() => handleClick()}>
      { isModalOpen ?
        <i className="fas fa-times-circle"></i>
      : <i className="fas fa-plus-circle"></i>
      }
    </div>
  );
}

export default AddEventButton;