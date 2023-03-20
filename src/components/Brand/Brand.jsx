import React from 'react';
import './Brand.css';
import { logo1, logo2, logo3, logo4, logo5 } from './imports';

const Brand = () => {
  return (
    <div className='app__brand section__padding' id='brand'>
      <div>
        <img src={logo1} alt='logo1' />
      </div>
      <div>
        <img src={logo2} alt='logo2' />
      </div>
      <div>
        <img src={logo3} alt='logo3' />
      </div>
      <div>
        <img src={logo4} alt='logo4' />
      </div>
      <div>
        <img src={logo5} alt='logo5' />
      </div>
    </div>
  );
};

export default Brand;
