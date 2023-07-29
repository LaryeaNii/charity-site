import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './navStyles.css';

const NavBar = () => {
  const [active, setActive] = useState('menu');
  const [toggleIcon, setToggleIcon] = useState('hamburger-menu');

  const navToggle = () => {
    active === 'menu' ? setActive('menu menu-active') : setActive('menu');

    toggleIcon === 'hamburger-menu'
      ? setToggleIcon('hamburger-menu toggle')
      : setToggleIcon('hamburger-menu');
  };

  

  return (
    <div>
    <div className='all-nav'>
      <nav className="nav-main">
        <Link to="/">
           <img src="./CharityLogo.png" alt="the logo" className="logo" />
        </Link>
        
        <ul className={active}>
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/donate" className="nav-link">Donation</Link>
          </li>
          <li>
            <Link to="/team" className="nav-link">Team</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">Contact Us</Link>
          </li>
        </ul>
        <div onClick={navToggle} className={toggleIcon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <hr />
    </div>
    </div>
  );
}

export default NavBar;
