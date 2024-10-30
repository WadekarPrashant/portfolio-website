import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logol.svg';
import underline from '../../assets/nav_underline.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();
  const navigate = useNavigate(); // Initialize the navigation function

  const openMenu = () => {
    menuRef.current.style.right = '0';
  };
  const closeMenu = () => {
    menuRef.current.style.right = '-300px';
  };

  // Function to navigate and scroll to a specific section
  const handleNavigation = (target) => {
    if (window.location.pathname !== '/') {
      // Navigate to home page first if not on home
      navigate('/');
      setTimeout(() => {
        document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
      }, 100); // Small delay to ensure navigation happens first
    } else {
      // Scroll directly if already on home
      document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <img src={logo} width="189" height="45" alt="" className='logo'/>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li onClick={() => handleNavigation('#home')}>
          <p onClick={() => setMenu('home')}>Home</p>
          {menu === 'home' ? <img src={underline} alt='' /> : null}
        </li>
        <li onClick={() => handleNavigation('#about')}>
          <p onClick={() => setMenu('about')}>About Me</p>
          {menu === 'about' ? <img src={underline} alt='' /> : null}
        </li>
        <li onClick={() => handleNavigation('#services')}>
          <p onClick={() => setMenu('services')}>Services</p>
          {menu === 'services' ? <img src={underline} alt='' /> : null}
        </li>
        <li onClick={() => handleNavigation('#work')}>
          <p onClick={() => setMenu('work')}>Portfolio</p>
          {menu === 'work' ? <img src={underline} alt='' /> : null}
        </li>
        <li onClick={() => handleNavigation('#contact')}>
          <p onClick={() => setMenu('contact')}>Contact</p>
          {menu === 'contact' ? <img src={underline} alt='' /> : null}
        </li>
      </ul>
      <div className="nav-connect" onClick={() => handleNavigation('#contact')}>
        Connect With Me
      </div>
    </div>
  );
};

export default Navbar;
