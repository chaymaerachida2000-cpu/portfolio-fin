import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, setDarkMode }) { 
  return (
    <nav className="navbar bg-white dark:bg-[#121212] text-black dark:text-white transition-colors duration-300">
      <div className="nav-container">
      <Link to="/" className="nav-logo">Chaimae.Said</Link>
        
       <ul className="nav-links">
          {/* دابا الـ Link خدامين بلا مشاكل */}
           <li><Link to="/Home" onClick={() => setIsOpen (false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/project" onClick={() => setIsOpen(false)}>Project</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link></li>
         
        </ul>

       <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;