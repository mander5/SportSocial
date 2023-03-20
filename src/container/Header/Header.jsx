import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title='Choose Your Lane' />
      <h1 className='app__header-h1'>LDN Sport Social</h1>
      <p className='p__opensans' style={{ margin: '2rem 0' }}>
        We offer innovative opportunities and deliver results that keep your
        brand ahead of the game
      </p>
      <a href='#contact'>
        <button type='button' className='custom__button'>
          Contact Us
        </button>
      </a>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.slogan} alt='header_img' />
    </div>
  </div>
);

export default Header;
