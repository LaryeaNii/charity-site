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

  // Function to close the menu when clicking outside
  const closeMenu = () => {
    setActive('menu');
    setToggleIcon('hamburger-menu');
  };

  // Add event listener on component mount
  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      // Clean up the event listener on component unmount
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  // Prevent the menu from closing when clicking inside the menu
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <nav className="nav-main" onClick={stopPropagation}>
        <Link to="/">
          <img src="./CharityLogo.png" alt="the logo" className="logo" />
        </Link>

        <ul className={active} onClick={stopPropagation}>
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/donate" className="nav-link">
              Donation
            </Link>
          </li>
          <li>
            <Link to="/team" className="nav-link">
              Team
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contact Us
            </Link>
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
  );
};

export default NavBar;
