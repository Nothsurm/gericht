import React, { useState } from 'react';
import { SubHeading, Modal } from '../../components';
import { images } from '../../constants';
import './Header.css';


const Header = () => {
const [openModal, setOpenModal] = useState(false)

  return (
  <div>
    <div className='app__header app__wrapper section_padding' id='home'>
      <div className="app__wrapper_info">
        <SubHeading title='Authentic flavours and vibrant spices'/>
        <h1 className='app__header-h1'>Fine Dining Cuisine</h1>
        <button onClick={() => setOpenModal(true)} className='custom__button book-a-table'>Book A Table</button>
        <Modal open={openModal} onClose={() => setOpenModal(false)}/>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  </div> 
  )
};

export default Header;
