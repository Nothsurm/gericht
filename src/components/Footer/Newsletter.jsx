import React, { useState } from 'react';
import { SubHeading, NewsletterSuccess } from '../../components';
import './Newsletter.css';

const Newsletter = ({ open,onClose }) => {

  const [openModalSuccess, setOpenModalSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const input = document.getElementById('newsletterInput')
    input.value = '';
    setOpenModalSuccess(true);
  }

  return (
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading title='Newsletter'/>
      <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
      <p className='p__opensans'>Never miss our latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter your e-mail address' id='newsletterInput' required/>
        <button className='custom__button'>Subscribe</button>
        <NewsletterSuccess open={openModalSuccess} onClose={() => setOpenModalSuccess(false)}/>
      </form>
    </div>
  </div>
)
}
;

export default Newsletter;
