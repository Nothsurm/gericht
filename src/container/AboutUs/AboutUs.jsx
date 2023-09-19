import React from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img'/>
        <p className='p__opensans'>Specialists in fine dining, we offer authentic flavours in a vibrant ambience which ultimately results in a unique experience. Come and taste our award-winning dishes from our exceptional chefs served with exemplary customer service.</p>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="about spoon" className='spoon__img'/>
        <p className='p__opensans'>Founded in 1972 by world-renowned chefs <strong>Michelle Bagunter</strong> and <strong>Dave Caparoni</strong>. We have won multiple awards since 1987 thanks to our hard-working and passionate staff and continue to accumulate awards to this present day.</p>
      </div>
    </div>
  </div>
);

export default AboutUs;
