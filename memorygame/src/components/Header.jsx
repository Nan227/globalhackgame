import React from 'react';
import './Header.css';
import logo from './assets/hackweeklogo.jpg'

console.log(logo); 

function Header() {
  
  return <img src={logo} alt="Logo" />;
}

export default Header;