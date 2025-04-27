import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (hash) => {
    setIsMenuOpen(false);
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    } else {
      scrollToSection(hash);
    }
  };

  const scrollToSection = (hash) => {
    const element = document.getElementById(hash);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <img 
          className="header__logo-imagen" 
          src={require(`../../image/logo.png`)} 
          alt="logo visionschool"
        />
        <h1 className="header__logo-texto">VisionSchool</h1>
      </div>
      
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
      
      <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
        <ul className="header__nav-ul">
          <li className="header__nav-list">
            <a 
              href="#inicio" 
              onClick={(e) => { e.preventDefault(); handleNavClick('inicio'); }}
            >
              Inicio
            </a>
          </li>
          <li className="header__nav-list">
            <a 
              href="#planes" 
              onClick={(e) => { e.preventDefault(); handleNavClick('planes'); }}
            >
              Planes
            </a>
          </li>
          <li className="header__nav-list">
            <a 
              href="#about" 
              onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}
            >
              About
            </a>
          </li>
          <li className="header__nav-list">
            <a 
              href="#testimonios" 
              onClick={(e) => { e.preventDefault(); handleNavClick('testimonios'); }}
            >
              Testimonios
            </a>
          </li>
          <li className="header__nav-list">
            <button className="header__nav-list--btn">
              <Link to="/login">Inicio de Sesión</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;