import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className="app__wrapper_info">
      <SubHeading title='Contact'/>
      <h1 className='headtext__cormorant' style={{ marginBottom: '3rem'}}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className='p__opensans'>7 Lane Ends, Betterworth, Rudheathe, M99 1SA</p>
        <p className='p__cormorant' style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className='p__opensans'>Mon - Fri: 09:00 am - 11:00 pm</p>
        <p className='p__opensans'>Sat - Sun: 11:00 am - 10:00 pm</p>
        <a href="https://www.google.com/maps/@53.466704,-2.2544384,14z?entry=ttu" target='_blank'><button type='button' className='custom__button' style={{ marginTop: '2rem' }}>Visit Us</button></a>
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
