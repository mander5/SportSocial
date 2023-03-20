import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.LDNlogo} alt='app__logo' />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'>
          <a href='#home'>Home</a>
        </li>
        <li className='p__opensans'>
          <a href='#brand'>Our Partners</a>
        </li>
        <li className='p__opensans'>
          <a href='#gallery'>Gallery</a>
        </li>
        <li className='p__opensans'>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu
          color='black'
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <AiOutlineClose
              fontSize={27}
              className='overlay__close'
              onClick={() => setToggleMenu(false)}
              color='black'
            />
            <ul className='app__navbar-smallscreen_links'>
              <li>
                <a href='#home' onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href='#brand' onClick={() => setToggleMenu(false)}>
                  Our Partners
                </a>
              </li>
              <li>
                <a href='#gallery' onClick={() => setToggleMenu(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a href='#contact' onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
