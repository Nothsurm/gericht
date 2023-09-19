import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>I'm passionate about food, the tradition of it, cooking it and sharing it.</p>
        </div>
        <p className='p__opensans'>Food is maybe the only universal thing that really has the power to bring everyone together. No matter what culture, everywhere around the world, people get together to eat.</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Current Owner</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
