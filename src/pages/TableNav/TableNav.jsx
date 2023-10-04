import React from 'react';
import images from '../../constants/images';
import { Link } from 'react-router-dom';
import './TableNav.css';

const TableNavbar = () => {
  return (
    <nav className='app__navbarTable'>
      <div className='app__navbarTable-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbarTable-links'>
        <li className='p__opensans'><Link to='/home'>Home</Link></li>
      </ul>
      <img src={images.spoon} alt="spoon" className='spoon__img'/>
    </nav>
  )
};

export default TableNavbar;
