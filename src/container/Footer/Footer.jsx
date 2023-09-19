import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>7 Lane Ends, Betterworth, Rudheathe, M99 1SA</p>
        <p className='p__opensans'>+00 555-11-3322</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon_img' style={{ marginTop: 15 }}/>
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/" target='_blank'><FiFacebook /></a>
          <a href="https://twitter.com/home?" target='_blank'><FiTwitter /></a>
          <a href="https://www.instagram.com/" target='_blank'><FiInstagram /></a>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:</p>
        <p className='p__opensans'>09:00 am - 11:00 pm</p>
        <p className='p__opensans'>Saturday-Sunday:</p>
        <p className='p__opensans'>11:00 am - 10:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className='p__opensans'>2023 Gericht. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
