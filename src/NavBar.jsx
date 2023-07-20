import './navStyles.css'

const NavBar = () => {
    return ( 
    <div>
      <nav className="nav-main"> 
        <img src="./CharityLogo.png" alt="the logo" className='logo'/> 
        <ul>   
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/donation">Donation</a>
            <a href="/team">Team</a>
            <a href="/contact">Contact Us</a>
         </ul> 
            <hr />
        </nav>
     </div>
     );
}
 
export default NavBar;