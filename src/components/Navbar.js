import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Portfolio</div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
      <li>
          <a href="/Akhilresume.pdf" download style={{ color: '#fff', display: 'flex', alignItems: 'center' }}>
            Resume <FontAwesomeIcon icon={faDownload} style={{ marginLeft: '5px' }} />
          </a>
        </li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
