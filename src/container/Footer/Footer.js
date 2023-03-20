import React from 'react';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <div className='app__footer-links'>
      <div className='app__footer-links_logo'>
        <img src={images.LDNlogo} alt='app_logo' />
        <p>LDN Sport Social Limited</p>
      </div>
      <div className='app__footer-links_div'>
        <h4>Links</h4>
        <a
          href='https://twitter.com/ldnsportsocial'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Twitter</p>
        </a>
        <a
          href='https://www.facebook.com/profile.php?id=100088593576706'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Facebook</p>
        </a>
        <a
          href='https://www.instagram.com/ldn.sport.social/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p>Instagram</p>
        </a>
      </div>
      <div className='app__footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className='app__footer-links_div'>
        <h4>Get in touch</h4>
        <p>London, UK</p>
        <p>sam@ldnsportsocial.com</p>
      </div>
    </div>

    <div className='app__footer-copyright'>
      <p>©2022 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
