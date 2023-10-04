import React from 'react';
import { SubHeading, Modal } from '../../components';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import './Header.css';


const Header = () => {
  return (
  <div>
    <div className='app__header app__wrapper section_padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Authentic flavours and vibrant spices'/>
        <h1 className='app__header-h1'>Fine Dining Cuisine</h1>
        <Link to='/BookATable'><button className='custom__button book-a-table'>Book A Table</button></Link>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  </div> 
  )
};

export default Header;
