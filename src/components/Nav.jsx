import './Nav.css';
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';


const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="nav-header">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
        <h2>GeekFoods</h2>
      </div>

      <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
        <li><a className="nav-link" id='first-link' href="">Home</a></li>
        <li><a className="nav-link" href="">Quote</a></li>
        <li><a className="nav-link" href="">Resturants</a></li>
        <li><a className="nav-link" href="">Foods</a></li>
        <li><a className="nav-link" href="">Contact</a></li>
      </ul>

      <button id="start-btn">Get Started</button>
      <i className="hamburger fas fa-bars" onClick={toggleMenu}></i>
    </header>
  );
};

export default Nav;