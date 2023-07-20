import React, {useState} from 'react';
import './navStyles.css';


const NavBar = () => {
      
    const [active, setActive] = useState('menu');
    const [toggleIcon, setToggleIcon] = useState("hamburger-menu");
     

    const navToggle =()=>{
      active === "menu" ? setActive("menu menu-active")
      : setActive("menu");
     
      toggleIcon === "hamburger-menu" ? setToggleIcon("hamburger-menu toggle")
      : setToggleIcon("hamburger-menu")

    };

    

  return (
    <div>
      <nav className="nav-main">
        <img src="./CharityLogo.png" alt="the logo" className="logo" />
        <ul className={active}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/donation">Donation</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/contact">Contact Us</a></li>  
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
}

export default NavBar;
