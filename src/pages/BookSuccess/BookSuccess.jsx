import React from 'react'
import './BookSuccess.css';

function BookSuccess({ open,onClose }) {
    
    if(!open) return null
    return (
        <div className="app__booking-popup" id='bookingSuccessMessage'>
            <p className='p__cormorant'>Thank You! Your Booking was Successful! </p>
        </div>
    )
}

export default BookSuccess;