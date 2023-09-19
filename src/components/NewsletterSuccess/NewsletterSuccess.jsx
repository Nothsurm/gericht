import React from 'react'
import './NewsletterSuccess.css';

function NewsletterSuccess({ open,onClose }) {
    
    if(!open) return null
    return (
        <div className="app__newsletter-popup" id='newsletterSuccessMessage'>
            <p className='p__cormorant'>Thank you for your subscription!</p>
        </div>
    )

}
export default NewsletterSuccess;
