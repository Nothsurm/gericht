import React from 'react'
import './ModalSuccess.css';

function ModalSuccess({ open,onClose}) {

if(!open) return null
  return (
    <div className="app__modal-overlay">
      <div className="app__modal-title">
        <button onClick={onClose} className='custom__button close-btn'>X</button>
      </div>
      <div className="app__modal-message">
        <p className='p__cormorant'>Your Booking was Successful! Please view the rest of the site!</p>
      </div>
    </div>
    )
}

export default ModalSuccess