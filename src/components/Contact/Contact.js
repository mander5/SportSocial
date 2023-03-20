import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className='app__cta' id='contact'>
    <div className='app__cta-content'>
      <p>Have a question or want to learn more? Contact us!</p>
      <h3>Connect with our team.</h3>
    </div>
    <div className='app__cta-btn'>
      <a href='mailto:sam@ldnsportsocial.com'>
        <button type='button'>Contact</button>
      </a>
    </div>
  </div>
);

export default Contact;
